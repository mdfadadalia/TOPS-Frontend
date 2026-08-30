import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import * as dashboardApi from "../../api/admin/dashboardApi";
import * as adminOrdersApi from "../../api/admin/ordersApi";
import * as adminPaymentsApi from "../../api/admin/paymentsApi";
import * as adminUsersApi from "../../api/admin/usersApi";
import { getApiError } from "../../api/client";
import { normalizeOrder, normalizePayment, normalizeUser, listFrom } from "../../utils/normalize";

export const fetchDashboard = createAsyncThunk("admin/fetchDashboard", async (_, { rejectWithValue }) => {
  try {
    return await dashboardApi.getDashboard();
  } catch (error) {
    return rejectWithValue(getApiError(error));
  }
});

export const fetchAdminOrders = createAsyncThunk("admin/fetchOrders", async (params, { rejectWithValue }) => {
  try {
    const { items, pagination } = listFrom(await adminOrdersApi.listAdminOrders(params), "orders");
    return { items: items.map(normalizeOrder), pagination };
  } catch (error) {
    return rejectWithValue(getApiError(error));
  }
});

export const updateAdminOrderStatus = createAsyncThunk(
  "admin/updateOrderStatus",
  async ({ id, status }, { rejectWithValue }) => {
    try {
      await adminOrdersApi.updateOrderStatus({ id, status });
      return { id, status };
    } catch (error) {
      return rejectWithValue(getApiError(error));
    }
  },
);

export const fetchAdminPayments = createAsyncThunk("admin/fetchPayments", async (params, { rejectWithValue }) => {
  try {
    const { items, pagination } = listFrom(await adminPaymentsApi.listAdminPayments(params), "payments");
    return { items: items.map(normalizePayment), pagination };
  } catch (error) {
    return rejectWithValue(getApiError(error));
  }
});

export const fetchAdminUsers = createAsyncThunk("admin/fetchUsers", async (params, { rejectWithValue }) => {
  try {
    const { items, pagination } = listFrom(await adminUsersApi.listUsers(params), "users");
    return { items: items.map(normalizeUser), pagination };
  } catch (error) {
    return rejectWithValue(getApiError(error));
  }
});

export const fetchAdminUser = createAsyncThunk("admin/fetchUser", async (id, { rejectWithValue }) => {
  try {
    const found = await adminUsersApi.getUser(id);
    return normalizeUser(found?.user || found);
  } catch (error) {
    return rejectWithValue(getApiError(error));
  }
});

export const setUserActive = createAsyncThunk(
  "admin/setUserActive",
  async ({ id, active }, { rejectWithValue }) => {
    try {
      active ? await adminUsersApi.activateUser(id) : await adminUsersApi.deactivateUser(id);
      return { id, active };
    } catch (error) {
      return rejectWithValue(getApiError(error));
    }
  },
);

export const deleteAdminUser = createAsyncThunk("admin/deleteUser", async (id, { rejectWithValue }) => {
  try {
    await adminUsersApi.deleteUser(id);
    return id;
  } catch (error) {
    return rejectWithValue(getApiError(error));
  }
});

const initialState = {
  dashboard: { data: null, loading: false, error: null },
  orders: { items: [], pagination: null, loading: false, updatingId: null, error: null },
  payments: { items: [], pagination: null, loading: false, error: null },
  users: { items: [], pagination: null, current: null, loading: false, actionId: null, error: null },
};

const slice = createSlice({
  name: "admin",
  initialState,
  reducers: {
    clearAdminError: (state, action) => {
      const scope = action.payload;
      if (scope && state[scope]) state[scope].error = null;
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(fetchDashboard.pending, (state) => {
        state.dashboard.loading = true;
        state.dashboard.error = null;
      })
      .addCase(fetchDashboard.fulfilled, (state, action) => {
        state.dashboard.loading = false;
        state.dashboard.data = action.payload;
      })
      .addCase(fetchDashboard.rejected, (state, action) => {
        state.dashboard.loading = false;
        state.dashboard.error = action.payload?.message || "Unable to load dashboard.";
      })
      .addCase(fetchAdminOrders.pending, (state) => {
        state.orders.loading = true;
        state.orders.error = null;
      })
      .addCase(fetchAdminOrders.fulfilled, (state, action) => {
        state.orders.loading = false;
        state.orders.items = action.payload.items;
        state.orders.pagination = action.payload.pagination;
      })
      .addCase(fetchAdminOrders.rejected, (state, action) => {
        state.orders.loading = false;
        state.orders.error = action.payload?.message || "Unable to load orders.";
      })
      .addCase(updateAdminOrderStatus.pending, (state, action) => {
        state.orders.updatingId = action.meta.arg.id;
      })
      .addCase(updateAdminOrderStatus.fulfilled, (state, action) => {
        state.orders.updatingId = null;
        state.orders.items = state.orders.items.map((order) =>
          order.id === action.payload.id ? { ...order, status: action.payload.status } : order,
        );
      })
      .addCase(updateAdminOrderStatus.rejected, (state, action) => {
        state.orders.updatingId = null;
        state.orders.error = action.payload?.message || "Unable to update order status.";
      })
      .addCase(fetchAdminPayments.pending, (state) => {
        state.payments.loading = true;
        state.payments.error = null;
      })
      .addCase(fetchAdminPayments.fulfilled, (state, action) => {
        state.payments.loading = false;
        state.payments.items = action.payload.items;
        state.payments.pagination = action.payload.pagination;
      })
      .addCase(fetchAdminPayments.rejected, (state, action) => {
        state.payments.loading = false;
        state.payments.error = action.payload?.message || "Unable to load payments.";
      })
      .addCase(fetchAdminUsers.pending, (state) => {
        state.users.loading = true;
        state.users.error = null;
      })
      .addCase(fetchAdminUsers.fulfilled, (state, action) => {
        state.users.loading = false;
        state.users.items = action.payload.items;
        state.users.pagination = action.payload.pagination;
      })
      .addCase(fetchAdminUsers.rejected, (state, action) => {
        state.users.loading = false;
        state.users.error = action.payload?.message || "Unable to load users.";
      })
      .addCase(fetchAdminUser.pending, (state) => {
        state.users.loading = true;
        state.users.error = null;
      })
      .addCase(fetchAdminUser.fulfilled, (state, action) => {
        state.users.loading = false;
        state.users.current = action.payload;
      })
      .addCase(fetchAdminUser.rejected, (state, action) => {
        state.users.loading = false;
        state.users.error = action.payload?.message || "Unable to load this user.";
      })
      .addCase(setUserActive.pending, (state, action) => {
        state.users.actionId = action.meta.arg.id;
      })
      .addCase(setUserActive.fulfilled, (state, action) => {
        state.users.actionId = null;
        const patch = { isActive: action.payload.active, status: action.payload.active ? "active" : "inactive" };
        state.users.items = state.users.items.map((u) => (u.id === action.payload.id ? { ...u, ...patch } : u));
        if (state.users.current?.id === action.payload.id) state.users.current = { ...state.users.current, ...patch };
      })
      .addCase(setUserActive.rejected, (state, action) => {
        state.users.actionId = null;
        state.users.error = action.payload?.message || "Unable to update this user.";
      })
      .addCase(deleteAdminUser.pending, (state, action) => {
        state.users.actionId = action.meta.arg;
      })
      .addCase(deleteAdminUser.fulfilled, (state, action) => {
        state.users.actionId = null;
        state.users.items = state.users.items.filter((u) => u.id !== action.payload);
      })
      .addCase(deleteAdminUser.rejected, (state, action) => {
        state.users.actionId = null;
        state.users.error = action.payload?.message || "Unable to delete this user.";
      }),
});

export const { clearAdminError } = slice.actions;
export default slice.reducer;
