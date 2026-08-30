import axios from "axios";

const configuredBaseUrl = import.meta.env.VITE_API_BASE_URL || import.meta.env.VITE_API_URL || "http://localhost:5000";
const baseURL = configuredBaseUrl.endsWith("/api") ? configuredBaseUrl : `${configuredBaseUrl.replace(/\/$/, "")}/api`;

const api = axios.create({ baseURL, withCredentials: true });
let accessToken = null;
let refreshPromise = null;
let authFailureHandler = null;

export const setAccessToken = (token) => { accessToken = token || null; };
export const clearAccessToken = () => { accessToken = null; };
export const setAuthFailureHandler = (handler) => { authFailureHandler = handler; };

export const unwrap = async (request) => {
  const response = await request;
  return response.data?.data ?? response.data;
};

export const getApiError = (error) => {
  const payload = error.response?.data;
  return {
    message: payload?.message || error.message || "Something went wrong. Please try again.",
    errors: payload?.errors || null,
    status: error.response?.status || null,
  };
};

api.interceptors.request.use((config) => {
  if (accessToken && !config.skipAuth) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }
  return config;
});

const refreshAccessToken = async () => {
  const response = await api.post("/auth/refresh-token", undefined, { skipAuth: true, skipRefresh: true });
  const payload = response.data?.data ?? response.data;
  const token = payload?.accessToken ?? payload?.token;
  if (!token) throw new Error("Refresh response did not include an access token.");
  setAccessToken(token);
  return token;
};

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const original = error.config;
    const isAuthRequest = original?.url?.includes("/auth/login") || original?.url?.includes("/auth/logout") || original?.url?.includes("/auth/refresh-token");
    if (error.response?.status !== 401 || !original || original._retry || original.skipRefresh || isAuthRequest) {
      return Promise.reject(error);
    }

    original._retry = true;
    try {
      if (!refreshPromise) {
        refreshPromise = refreshAccessToken().finally(() => { refreshPromise = null; });
      }
      const token = await refreshPromise;
      original.headers.Authorization = `Bearer ${token}`;
      return api(original);
    } catch (refreshError) {
      clearAccessToken();
      authFailureHandler?.();
      return Promise.reject(refreshError);
    }
  },
);

export default api;
