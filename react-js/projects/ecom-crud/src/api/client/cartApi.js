import api, { unwrap } from "../client";
export const getCart = () => unwrap(api.get("/cart"));
export const addCartItem = (details) => unwrap(api.post("/cart", details));
export const updateCartItem = ({ itemId, details }) => unwrap(api.put(`/cart/${itemId}`, details));
export const removeCartItem = (itemId) => unwrap(api.delete(`/cart/${itemId}`));
export const clearCart = () => unwrap(api.delete("/cart"));
