import { createSlice } from "@reduxjs/toolkit";

const STORAGE_KEY = "ecom_compare_v1";
const MAX_ITEMS = 4;

const readStorage = () => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    const parsed = raw ? JSON.parse(raw) : [];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
};

const writeStorage = (items) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  } catch {
    // ignore storage failures
  }
};

const slice = createSlice({
  name: "compare",
  initialState: { items: readStorage(), limitReached: false },
  reducers: {
    toggleCompareItem: (state, action) => {
      const product = action.payload;
      const exists = state.items.some((item) => item.id === product.id);
      if (exists) {
        state.items = state.items.filter((item) => item.id !== product.id);
        state.limitReached = false;
      } else if (state.items.length >= MAX_ITEMS) {
        state.limitReached = true;
      } else {
        state.items = [...state.items, product];
        state.limitReached = false;
      }
      writeStorage(state.items);
    },
    removeCompareItem: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
      state.limitReached = false;
      writeStorage(state.items);
    },
    clearCompare: (state) => {
      state.items = [];
      state.limitReached = false;
      writeStorage(state.items);
    },
  },
});

export const { toggleCompareItem, removeCompareItem, clearCompare } = slice.actions;
export default slice.reducer;
