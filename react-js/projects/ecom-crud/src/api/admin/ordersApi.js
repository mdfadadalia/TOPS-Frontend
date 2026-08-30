import api, { unwrap } from "../client";
export const listAdminOrders = (params) => unwrap(api.get("/admin/orders", { params }));
export const updateOrderStatus = ({ id, status }) => unwrap(api.put(`/admin/orders/${id}/status`, { status }));
