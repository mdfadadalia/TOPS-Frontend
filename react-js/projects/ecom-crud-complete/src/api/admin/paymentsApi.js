import api, { unwrap } from "../client";
export const listAdminPayments = (params) => unwrap(api.get("/admin/payments", { params }));
