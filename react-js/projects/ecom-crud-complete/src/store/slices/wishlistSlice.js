import { createSlice } from "@reduxjs/toolkit";

// The connected backend does not expose wishlist endpoints, so the wishlist
// is kept client-side and persisted per-browser in localStorage.
const STORAGE_KEY = "ecom_wishlist_v1";

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
    // Storage may be unavailable (private browsing, quota); fail silently.
  }
};

const slice = createSlice({
  name: "wishlist",
  initialState: { items: readStorage() },
  reducers: {
    toggleWishlistItem: (state, action) => {
      const product = action.payload;
      const exists = state.items.some((item) => item.id === product.id);
      state.items = exists ? state.items.filter((item) => item.id !== product.id) : [...state.items, product];
      writeStorage(state.items);
    },
    removeWishlistItem: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
      writeStorage(state.items);
    },
    clearWishlist: (state) => {
      state.items = [];
      writeStorage(state.items);
    },
  },
});

export const isWishlisted = (state, productId) => state.wishlist.items.some((item) => item.id === productId);
export const { toggleWishlistItem, removeWishlistItem, clearWishlist } = slice.actions;
export default slice.reducer;
