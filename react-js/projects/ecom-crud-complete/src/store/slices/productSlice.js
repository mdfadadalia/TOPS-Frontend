import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import * as productApi from "../../api/common/productApi";
import { getApiError } from "../../api/client";
import { normalizeProduct, listFrom } from "../../utils/normalize";

const normalizeList = (payload) => {
  const { items, pagination } = listFrom(payload, "products");
  return { items: items.map(normalizeProduct), pagination };
};

export const fetchProducts = createAsyncThunk("products/fetch", async (params, { rejectWithValue }) => {
  try {
    return normalizeList(await productApi.listProducts(params));
  } catch (error) {
    return rejectWithValue(getApiError(error));
  }
});

export const fetchFeaturedProducts = createAsyncThunk("products/featured", async (_, { rejectWithValue }) => {
  try {
    return normalizeList(await productApi.getFeaturedProducts()).items;
  } catch (error) {
    return rejectWithValue(getApiError(error));
  }
});

export const fetchLatestProducts = createAsyncThunk("products/latest", async (_, { rejectWithValue }) => {
  try {
    return normalizeList(await productApi.getLatestProducts()).items;
  } catch (error) {
    return rejectWithValue(getApiError(error));
  }
});

export const fetchProduct = createAsyncThunk("products/fetchOne", async (id, { rejectWithValue }) => {
  try {
    const found = await productApi.getProduct(id);
    return normalizeProduct(found?.product || found);
  } catch (error) {
    return rejectWithValue(getApiError(error));
  }
});

export const fetchRelatedProducts = createAsyncThunk("products/related", async (id, { rejectWithValue }) => {
  try {
    return normalizeList(await productApi.getRelatedProducts(id)).items;
  } catch (error) {
    return rejectWithValue(getApiError(error));
  }
});

export const submitProductReview = createAsyncThunk(
  "products/addReview",
  async ({ id, details }, { rejectWithValue }) => {
    try {
      await productApi.addReview({ id, details });
      const refreshed = await productApi.getProduct(id);
      return normalizeProduct(refreshed?.product || refreshed);
    } catch (error) {
      return rejectWithValue(getApiError(error));
    }
  },
);

export const saveProduct = createAsyncThunk(
  "products/save",
  async ({ id, formData }, { rejectWithValue }) => {
    try {
      return id ? await productApi.updateProduct({ id, formData }) : await productApi.createProduct(formData);
    } catch (error) {
      return rejectWithValue(getApiError(error));
    }
  },
);

export const removeProduct = createAsyncThunk("products/remove", async (id, { rejectWithValue }) => {
  try {
    await productApi.deleteProduct(id);
    return id;
  } catch (error) {
    return rejectWithValue(getApiError(error));
  }
});

const initialState = {
  items: [],
  pagination: null,
  featured: [],
  latest: [],
  related: [],
  current: null,
  loading: false,
  loadingCurrent: false,
  loadingFeatured: false,
  loadingLatest: false,
  saving: false,
  error: null,
  featuredError: null,
  latestError: null,
};

const slice = createSlice({
  name: "products",
  initialState,
  reducers: {
    clearProductError: (state) => {
      state.error = null;
    },
    clearCurrentProduct: (state) => {
      state.current = null;
      state.related = [];
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload.items;
        state.pagination = action.payload.pagination;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message || "Unable to load products.";
      })
      .addCase(fetchFeaturedProducts.pending, (state) => {
        state.loadingFeatured = true;
        state.featuredError = null;
      })
      .addCase(fetchFeaturedProducts.fulfilled, (state, action) => {
        state.loadingFeatured = false;
        state.featured = action.payload;
      })
      .addCase(fetchFeaturedProducts.rejected, (state, action) => {
        state.loadingFeatured = false;
        state.featuredError = action.payload?.message || "Unable to load featured products.";
      })
      .addCase(fetchLatestProducts.pending, (state) => {
        state.loadingLatest = true;
        state.latestError = null;
      })
      .addCase(fetchLatestProducts.fulfilled, (state, action) => {
        state.loadingLatest = false;
        state.latest = action.payload;
      })
      .addCase(fetchLatestProducts.rejected, (state, action) => {
        state.loadingLatest = false;
        state.latestError = action.payload?.message || "Unable to load new arrivals.";
      })
      .addCase(fetchProduct.pending, (state) => {
        state.loadingCurrent = true;
        state.error = null;
      })
      .addCase(fetchProduct.fulfilled, (state, action) => {
        state.loadingCurrent = false;
        state.current = action.payload;
      })
      .addCase(fetchProduct.rejected, (state, action) => {
        state.loadingCurrent = false;
        state.error = action.payload?.message || "Unable to load this product.";
      })
      .addCase(fetchRelatedProducts.fulfilled, (state, action) => {
        state.related = action.payload;
      })
      .addCase(submitProductReview.fulfilled, (state, action) => {
        state.current = action.payload;
      })
      .addCase(saveProduct.pending, (state) => {
        state.saving = true;
        state.error = null;
      })
      .addCase(saveProduct.fulfilled, (state) => {
        state.saving = false;
      })
      .addCase(saveProduct.rejected, (state, action) => {
        state.saving = false;
        state.error = action.payload?.message || "Unable to save product.";
      })
      .addCase(removeProduct.fulfilled, (state, action) => {
        state.items = state.items.filter((item) => item.id !== action.payload);
      }),
});

export const { clearProductError, clearCurrentProduct } = slice.actions;
export default slice.reducer;
