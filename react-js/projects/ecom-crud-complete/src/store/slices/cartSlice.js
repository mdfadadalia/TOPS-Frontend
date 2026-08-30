import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import * as cartApi from "../../api/client/cartApi";
import { getApiError } from "../../api/client";
import { normalizeProduct, idOf } from "../../utils/normalize";

const normalizeItem = (raw) => {
  const product = raw.product && typeof raw.product === "object" ? normalizeProduct(raw.product) : null;
  return {
    itemId: idOf(raw),
    productId: product?.id || idOf(raw.product) || raw.productId || "",
    name: product?.name || raw.name || "Product",
    image: product?.images?.[0] || raw.image || "/assets/img/product-1-1.jpg",
    price: Number(raw.price ?? product?.price ?? 0),
    quantity: Number(raw.quantity ?? raw.qty ?? 1),
    stock: product?.stock,
    product,
  };
};

const itemsFrom = (payload) => {
  const list = payload?.items || payload?.cart?.items || (Array.isArray(payload) ? payload : []);
  return list.map(normalizeItem);
};

export const fetchCart = createAsyncThunk("cart/fetch", async (_, { rejectWithValue }) => {
  try {
    return itemsFrom(await cartApi.getCart());
  } catch (error) {
    return rejectWithValue(getApiError(error));
  }
});

export const addToCart = createAsyncThunk(
  "cart/addItem",
  async ({ productId, quantity = 1, ...rest }, { rejectWithValue }) => {
    try {
      return itemsFrom(await cartApi.addCartItem({ productId, quantity, ...rest }));
    } catch (error) {
      return rejectWithValue(getApiError(error));
    }
  },
);

export const updateCartItem = createAsyncThunk(
  "cart/updateItem",
  async ({ itemId, quantity }, { rejectWithValue }) => {
    try {
      return itemsFrom(await cartApi.updateCartItem({ itemId, details: { quantity } }));
    } catch (error) {
      return rejectWithValue(getApiError(error));
    }
  },
);

export const removeCartItem = createAsyncThunk("cart/removeItem", async (itemId, { rejectWithValue }) => {
  try {
    return itemsFrom(await cartApi.removeCartItem(itemId));
  } catch (error) {
    return rejectWithValue(getApiError(error));
  }
});

export const clearCart = createAsyncThunk("cart/clear", async (_, { rejectWithValue }) => {
  try {
    await cartApi.clearCart();
    return [];
  } catch (error) {
    return rejectWithValue(getApiError(error));
  }
});

const initialState = { items: [], loading: false, mutating: false, error: null, loaded: false };

const slice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    resetCart: () => initialState,
    clearCartError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCart.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCart.fulfilled, (state, action) => {
        state.loading = false;
        state.loaded = true;
        state.items = action.payload;
      })
      .addCase(fetchCart.rejected, (state, action) => {
        state.loading = false;
        state.loaded = true;
        state.error = action.payload?.message || "Unable to load your cart.";
      });

    [addToCart, updateCartItem, removeCartItem, clearCart].forEach((thunk) => {
      builder
        .addCase(thunk.pending, (state) => {
          state.mutating = true;
          state.error = null;
        })
        .addCase(thunk.fulfilled, (state, action) => {
          state.mutating = false;
          state.loaded = true;
          state.items = action.payload;
        })
        .addCase(thunk.rejected, (state, action) => {
          state.mutating = false;
          state.error = action.payload?.message || "Unable to update your cart.";
        });
    });
  },
});

export const cartCount = (state) => state.cart.items.reduce((sum, item) => sum + item.quantity, 0);
export const cartSubtotal = (state) =>
  state.cart.items.reduce((sum, item) => sum + item.price * item.quantity, 0);

export const { resetCart, clearCartError } = slice.actions;
export default slice.reducer;
