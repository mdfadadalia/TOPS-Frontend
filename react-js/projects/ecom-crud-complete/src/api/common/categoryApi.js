import api, { unwrap } from "../client";
export const listCategories = (params, signal) => unwrap(api.get("/categories", { params, signal }));
export const getCategory = (id) => unwrap(api.get(`/categories/${id}`));
export const createCategory = (formData) => unwrap(api.post("/categories", formData));
export const updateCategory = (id, formData) => unwrap(api.put(`/categories/${id}`, formData));
export const deleteCategory = (id) => unwrap(api.delete(`/categories/${id}`));
