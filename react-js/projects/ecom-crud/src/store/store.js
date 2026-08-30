import { configureStore } from "@reduxjs/toolkit";
import authReducer, { sessionExpired } from "./slices/authSlice";
import categoryReducer from "./slices/categorySlice";
import productReducer from "./slices/productSlice";
import { setAuthFailureHandler } from "../api/client";
export const store = configureStore({ reducer: { auth: authReducer, categories: categoryReducer, products: productReducer } });
setAuthFailureHandler(() => store.dispatch(sessionExpired()));
