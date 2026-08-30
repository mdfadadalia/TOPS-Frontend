import { configureStore } from "@reduxjs/toolkit";
import authReducer, { sessionExpired } from "./slices/authSlice";
import categoryReducer from "./slices/categorySlice";
import productReducer from "./slices/productSlice";
import cartReducer from "./slices/cartSlice";
import wishlistReducer from "./slices/wishlistSlice";
import compareReducer from "./slices/compareSlice";
import ordersReducer from "./slices/ordersSlice";
import adminReducer from "./slices/adminSlice";
import { setAuthFailureHandler } from "../api/client";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    categories: categoryReducer,
    products: productReducer,
    cart: cartReducer,
    wishlist: wishlistReducer,
    compare: compareReducer,
    orders: ordersReducer,
    admin: adminReducer,
  },
});

setAuthFailureHandler(() => store.dispatch(sessionExpired()));
