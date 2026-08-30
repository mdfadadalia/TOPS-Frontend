import api, { unwrap } from "../client";
export const listUsers = (params) => unwrap(api.get("/admin/users", { params }));
export const getUser = (id) => unwrap(api.get(`/admin/users/${id}`));
export const activateUser = (id) => unwrap(api.put(`/admin/users/${id}/activate`));
export const deactivateUser = (id) => unwrap(api.put(`/admin/users/${id}/deactivate`));
export const deleteUser = (id) => unwrap(api.delete(`/admin/users/${id}`));