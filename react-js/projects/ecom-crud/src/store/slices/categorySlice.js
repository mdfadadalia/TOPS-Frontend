import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import * as categoryApi from "../../api/common/categoryApi";
import { getApiError } from "../../api/client";
const valuesFrom = (payload) => payload?.categories ?? payload?.items ?? (Array.isArray(payload) ? payload : []);
export const fetchCategories = createAsyncThunk("categories/fetch", async (params, { rejectWithValue }) => { try { return await categoryApi.listCategories(params); } catch (error) { return rejectWithValue(getApiError(error)); } });
export const saveCategory = createAsyncThunk("categories/save", async ({ id, formData }, { rejectWithValue }) => { try { return id ? await categoryApi.updateCategory(id, formData) : await categoryApi.createCategory(formData); } catch (error) { return rejectWithValue(getApiError(error)); } });
export const removeCategory = createAsyncThunk("categories/remove", async (id, { rejectWithValue }) => { try { await categoryApi.deleteCategory(id); return id; } catch (error) { return rejectWithValue(getApiError(error)); } });
const slice = createSlice({ name: "categories", initialState: { items: [], pagination: null, loading: false, saving: false, error: null }, reducers: { clearCategoryError: (state) => { state.error = null; } }, extraReducers: (builder) => builder
  .addCase(fetchCategories.pending, (state) => { state.loading = true; state.error = null; })
  .addCase(fetchCategories.fulfilled, (state, action) => { state.loading = false; state.items = valuesFrom(action.payload); state.pagination = action.payload?.pagination ?? null; })
  .addCase(fetchCategories.rejected, (state, action) => { state.loading = false; state.error = action.payload?.message || "Unable to load categories."; })
  .addCase(saveCategory.pending, (state) => { state.saving = true; state.error = null; })
  .addCase(saveCategory.fulfilled, (state) => { state.saving = false; })
  .addCase(saveCategory.rejected, (state, action) => { state.saving = false; state.error = action.payload?.message || "Unable to save category."; })
  .addCase(removeCategory.fulfilled, (state, action) => { state.items = state.items.filter((item) => (item._id || item.id) !== action.payload); }), });
export const { clearCategoryError } = slice.actions;
export default slice.reducer;
