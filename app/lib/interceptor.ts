import { useAuthStore } from "../store/authStore";
import api from "./asiox";

api.interceptors.response.use(
  (response) => response,

  async (error) => {
    const originalRequest = error.config;

    if (
      error.response.status === 401 &&
      !originalRequest._retry
    ) {
      originalRequest._retry = true;

      try {
        const response = await api.post(
          "/auth/refresh"
        );

        const token =
          response.data.accessToken;

        useAuthStore
          .getState()
          .setAccessToken(token);

        originalRequest.headers.Authorization =
          `Bearer ${token}`;

        return api(originalRequest);
      } catch (refreshError) {
        useAuthStore
          .getState()
          .setAccessToken(null);
      }
    }

    return Promise.reject(error);
  }
);