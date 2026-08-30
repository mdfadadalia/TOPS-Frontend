import api, { unwrap } from "../client";
export const createPaymentOrder = (details) => unwrap(api.post("/payments/create-order", details));
export const verifyPayment = (details) => unwrap(api.post("/payments/verify", details));
export const getMyPayments = (params) => unwrap(api.get("/payments/my-payments", { params }));
