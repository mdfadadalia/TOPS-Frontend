import api, { unwrap } from "./client";

export const login = (credentials) => unwrap(api.post("/auth/login", credentials, { skipRefresh: true }));
export const register = (details) => unwrap(api.post("/auth/register", details, { skipRefresh: true }));
export const logout = () => unwrap(api.post("/auth/logout", undefined, { skipRefresh: true }));
export const refreshToken = () => unwrap(api.post("/auth/refresh-token", undefined, { skipAuth: true, skipRefresh: true }));
export const getProfile = () => unwrap(api.get("/auth/profile"));
export const updateProfile = (details) => unwrap(api.put("/auth/profile", details));
export const changePassword = (details) => unwrap(api.put("/auth/change-password", details));
export const forgotPassword = (details) => unwrap(api.post("/auth/forgot-password", details, { skipRefresh: true }));
export const resetPassword = (details) => unwrap(api.post("/auth/reset-password", details, { skipRefresh: true }));
