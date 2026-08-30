import api, { unwrap } from "../client";
export const createOrder = (details) => unwrap(api.post("/orders", details));
export const getMyOrders = (params) => unwrap(api.get("/orders/my-orders", { params }));
export const getOrder = (id) => unwrap(api.get(`/orders/${id}`));
export const cancelOrder = (id) => unwrap(api.put(`/orders/${id}/cancel`));
