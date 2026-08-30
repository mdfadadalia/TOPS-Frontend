import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import * as ordersApi from "../../api/client/ordersApi";
import * as paymentsApi from "../../api/client/paymentsApi";
import { getApiError } from "../../api/client";
import { normalizeOrder, listFrom } from "../../utils/normalize";

export const placeOrder = createAsyncThunk("orders/place", async (details, { rejectWithValue }) => {
  try {
    const created = await ordersApi.createOrder(details);
    return normalizeOrder(created?.order || created);
  } catch (error) {
    return rejectWithValue(getApiError(error));
  }
});

export const fetchMyOrders = createAsyncThunk("orders/fetchMine", async (params, { rejectWithValue }) => {
  try {
    const { items, pagination } = listFrom(await ordersApi.getMyOrders(params), "orders");
    return { items: items.map(normalizeOrder), pagination };
  } catch (error) {
    return rejectWithValue(getApiError(error));
  }
});

export const fetchOrder = createAsyncThunk("orders/fetchOne", async (id, { rejectWithValue }) => {
  try {
    const found = await ordersApi.getOrder(id);
    return normalizeOrder(found?.order || found);
  } catch (error) {
    return rejectWithValue(getApiError(error));
  }
});

export const cancelMyOrder = createAsyncThunk("orders/cancel", async (id, { rejectWithValue }) => {
  try {
    await ordersApi.cancelOrder(id);
    return id;
  } catch (error) {
    return rejectWithValue(getApiError(error));
  }
});

export const startPayment = createAsyncThunk("orders/startPayment", async (details, { rejectWithValue }) => {
  try {
    return await paymentsApi.createPaymentOrder(details);
  } catch (error) {
    return rejectWithValue(getApiError(error));
  }
});

export const confirmPayment = createAsyncThunk("orders/confirmPayment", async (details, { rejectWithValue }) => {
  try {
    return await paymentsApi.verifyPayment(details);
  } catch (error) {
    return rejectWithValue(getApiError(error));
  }
});

const slice = createSlice({
  name: "orders",
  initialState: {
    items: [],
    pagination: null,
    current: null,
    lastPlaced: null,
    loading: false,
    placing: false,
    payingUp: false,
    error: null,
  },
  reducers: {
    clearOrdersError: (state) => {
      state.error = null;
    },
    clearLastPlacedOrder: (state) => {
      state.lastPlaced = null;
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(placeOrder.pending, (state) => {
        state.placing = true;
        state.error = null;
      })
      .addCase(placeOrder.fulfilled, (state, action) => {
        state.placing = false;
        state.lastPlaced = action.payload;
        state.items = [action.payload, ...state.items];
      })
      .addCase(placeOrder.rejected, (state, action) => {
        state.placing = false;
        state.error = action.payload?.message || "Unable to place your order.";
      })
      .addCase(fetchMyOrders.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchMyOrders.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload.items;
        state.pagination = action.payload.pagination;
      })
      .addCase(fetchMyOrders.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message || "Unable to load your orders.";
      })
      .addCase(fetchOrder.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchOrder.fulfilled, (state, action) => {
        state.loading = false;
        state.current = action.payload;
      })
      .addCase(fetchOrder.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message || "Unable to load this order.";
      })
      .addCase(cancelMyOrder.fulfilled, (state, action) => {
        state.items = state.items.map((order) =>
          order.id === action.payload ? { ...order, status: "cancelled" } : order,
        );
        if (state.current?.id === action.payload) state.current.status = "cancelled";
      })
      .addCase(startPayment.pending, (state) => {
        state.payingUp = true;
        state.error = null;
      })
      .addCase(startPayment.fulfilled, (state) => {
        state.payingUp = false;
      })
      .addCase(startPayment.rejected, (state, action) => {
        state.payingUp = false;
        state.error = action.payload?.message || "Unable to start payment.";
      })
      .addCase(confirmPayment.rejected, (state, action) => {
        state.error = action.payload?.message || "Payment verification failed.";
      }),
});

export const { clearOrdersError, clearLastPlacedOrder } = slice.actions;
export default slice.reducer;
