import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import * as productApi from "../../api/common/productApi";
import { getApiError } from "../../api/client";
const valuesFrom = (payload) => payload?.products ?? payload?.items ?? (Array.isArray(payload) ? payload : []);
export const fetchProducts = createAsyncThunk("products/fetch", async (params, { rejectWithValue }) => { try { return await productApi.listProducts(params); } catch (error) { return rejectWithValue(getApiError(error)); } });
export const fetchFeaturedProducts = createAsyncThunk("products/featured", async (_, { rejectWithValue }) => { try { return await productApi.getFeaturedProducts(); } catch (error) { return rejectWithValue(getApiError(error)); } });
const slice = createSlice({ name: "products", initialState: { items: [], featured: [], loading: false, error: null }, reducers: {}, extraReducers: (builder) => builder
  .addCase(fetchProducts.pending, (state) => { state.loading = true; state.error = null; })
  .addCase(fetchProducts.fulfilled, (state, action) => { state.loading = false; state.items = valuesFrom(action.payload); })
  .addCase(fetchProducts.rejected, (state, action) => { state.loading = false; state.error = action.payload?.message || "Unable to load products."; })
  .addCase(fetchFeaturedProducts.fulfilled, (state, action) => { state.featured = valuesFrom(action.payload); }), });
export default slice.reducer;
