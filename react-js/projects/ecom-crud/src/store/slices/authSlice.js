import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import * as authApi from "../../api/authApi";
import { clearAccessToken, getApiError, setAccessToken } from "../../api/client";

const tokenFrom = (payload) => payload?.accessToken ?? payload?.token;
const userFrom = (payload) => payload?.user ?? payload;

export const initializeAuth = createAsyncThunk("auth/initialize", async (_, { rejectWithValue }) => {
  try {
    const refreshed = await authApi.refreshToken();
    const token = tokenFrom(refreshed);
    if (!token) throw new Error("Refresh response did not include an access token.");
    setAccessToken(token);
    return userFrom(await authApi.getProfile());
  } catch (error) {
    clearAccessToken();
    return rejectWithValue(getApiError(error));
  }
});

export const loginUser = createAsyncThunk("auth/login", async (credentials, { rejectWithValue }) => {
  try {
    const result = await authApi.login(credentials);
    const token = tokenFrom(result);
    if (!token) throw new Error("Login response did not include an access token.");
    setAccessToken(token);
    return userFrom(await authApi.getProfile());
  } catch (error) {
    clearAccessToken();
    return rejectWithValue(getApiError(error));
  }
});

export const registerUser = createAsyncThunk("auth/register", async (details, { rejectWithValue }) => {
  try { return await authApi.register(details); } catch (error) { return rejectWithValue(getApiError(error)); }
});
export const logoutUser = createAsyncThunk("auth/logout", async (_, { dispatch }) => {
  try { await authApi.logout(); } finally { clearAccessToken(); dispatch(authSlice.actions.clearSession()); }
});

const authSlice = createSlice({
  name: "auth",
  initialState: { user: null, isAuthenticated: false, isInitializing: true, loading: false, error: null },
  reducers: {
    clearSession: (state) => { state.user = null; state.isAuthenticated = false; state.loading = false; },
    sessionExpired: (state) => { state.user = null; state.isAuthenticated = false; state.isInitializing = false; state.loading = false; },
    clearAuthError: (state) => { state.error = null; },
  },
  extraReducers: (builder) => builder
    .addCase(initializeAuth.pending, (state) => { state.isInitializing = true; })
    .addCase(initializeAuth.fulfilled, (state, action) => { state.user = action.payload; state.isAuthenticated = true; state.isInitializing = false; })
    .addCase(initializeAuth.rejected, (state) => { state.user = null; state.isAuthenticated = false; state.isInitializing = false; })
    .addCase(loginUser.pending, (state) => { state.loading = true; state.error = null; })
    .addCase(loginUser.fulfilled, (state, action) => { state.user = action.payload; state.isAuthenticated = true; state.loading = false; })
    .addCase(loginUser.rejected, (state, action) => { state.loading = false; state.error = action.payload?.message || "Unable to sign in."; })
    .addCase(registerUser.pending, (state) => { state.loading = true; state.error = null; })
    .addCase(registerUser.fulfilled, (state) => { state.loading = false; })
    .addCase(registerUser.rejected, (state, action) => { state.loading = false; state.error = action.payload?.message || "Unable to register."; }),
});

export const { clearSession, sessionExpired, clearAuthError } = authSlice.actions;
export default authSlice.reducer;
