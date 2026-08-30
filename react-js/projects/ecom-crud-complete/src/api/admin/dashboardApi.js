import api, { unwrap } from "../client";
export const getDashboard = () => unwrap(api.get("/admin/dashboard"));
