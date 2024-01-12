import axios, { AxiosError } from "axios";

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_ADMIN_URL,
  timeout: 1000,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

api.interceptors.request.use(
  (config) => {
    const userProfile = localStorage.getItem("userProfile");
    if (userProfile) {
      const { token } = JSON.parse(userProfile);
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
// let isRefreshing = false;

api.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error: AxiosError) => {
    if (
      error.request.status == 401 &&
      localStorage.getItem("userProfile") !== null
    ) {
      localStorage.removeItem("userProfile");
      return Promise.reject(error);
    }
    return Promise.reject(error);
  }
);
