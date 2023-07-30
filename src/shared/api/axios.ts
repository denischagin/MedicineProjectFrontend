import axios from "axios";
import { TokenService } from "shared/libs";

export const $api = axios.create({
  baseURL: "https://localhost:5000/api",
  withCredentials: true,
});

$api.interceptors.request.use((config) => {
  const token = TokenService.getAccessToken();
  config.headers["Authorization"] = `Bearer ${token}`;
  return config;
});

$api.interceptors.response.use(
  (config) => {
    return config;
  },
  async (error) => {
    const originalRequest = error.config;
    if (
      error.response.status === 401 &&
      error.config &&
      !error.config._isRetry
    ) {
      originalRequest._isRetry = true;
      try {
        const accessToken = TokenService.getAccessToken();
        const refreshToken = TokenService.getRefreshToken();

        const response = await axios.post(
          `https://localhost:5000/api/Accounts/refresh-token`,
          { accessToken, refreshToken }
        );

        TokenService.setAccessToken(response.data.token);
        TokenService.setRefreshToken(response.data.refreshToken);

        return $api.request(originalRequest);
      } catch (e) {
        console.log("НЕ АВТОРИЗОВАН");
      }
    }
    throw error;
  }
);
