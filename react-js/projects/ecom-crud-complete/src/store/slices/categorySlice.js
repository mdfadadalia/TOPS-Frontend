import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import * as categoryApi from "../../api/common/categoryApi";
import { getApiError } from "../../api/client";
import { normalizeCategory, listFrom } from "../../utils/normalize";

const normalizeList = (payload) => {
  const { items, pagination } = listFrom(payload, "categories");
  return { items: items.map(normalizeCategory), pagination };
};

export const fetchCategories = createAsyncThunk("categories/fetch", async (params, { rejectWithValue }) => {
  try {
    return normalizeList(await categoryApi.listCategories(params));
  } catch (error) {
    return rejectWithValue(getApiError(error));
  }
});

export const fetchCategory = createAsyncThunk("categories/fetchOne", async (id, { rejectWithValue }) => {
  try {
    const found = await categoryApi.getCategory(id);
    return normalizeCategory(found?.category || found);
  } catch (error) {
    return rejectWithValue(getApiError(error));
  }
});

export const saveCategory = createAsyncThunk("categories/save", async ({ id, formData }, { rejectWithValue }) => {
  try {
    return id ? await categoryApi.updateCategory(id, formData) : await categoryApi.createCategory(formData);
  } catch (error) {
    return rejectWithValue(getApiError(error));
  }
});

export const removeCategory = createAsyncThunk("categories/remove", async (id, { rejectWithValue }) => {
  try {
    await categoryApi.deleteCategory(id);
    return id;
  } catch (error) {
    return rejectWithValue(getApiError(error));
  }
});

const slice = createSlice({
  name: "categories",
  initialState: { items: [], pagination: null, current: null, loading: false, saving: false, error: null },
  reducers: {
    clearCategoryError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(fetchCategories.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload.items;
        state.pagination = action.payload.pagination;
      })
      .addCase(fetchCategories.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message || "Unable to load categories.";
      })
      .addCase(fetchCategory.fulfilled, (state, action) => {
        state.current = action.payload;
      })
      .addCase(saveCategory.pending, (state) => {
        state.saving = true;
        state.error = null;
      })
      .addCase(saveCategory.fulfilled, (state) => {
        state.saving = false;
      })
      .addCase(saveCategory.rejected, (state, action) => {
        state.saving = false;
        state.error = action.payload?.message || "Unable to save category.";
      })
      .addCase(removeCategory.fulfilled, (state, action) => {
        state.items = state.items.filter((item) => item.id !== action.payload);
      }),
});

export const { clearCategoryError } = slice.actions;
export default slice.reducer;
