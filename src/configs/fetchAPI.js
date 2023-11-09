import axios from "axios";
import { store } from "../store";
import { authActions } from "../store/auth/authSlice";

const BASE_URL =
  "http://ec2-18-197-107-37.eu-central-1.compute.amazonaws.com:5500/api/v1 ";

const headers = { "Content-Type": "application/json" };

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers,
});

axiosInstance.interceptors.request.use(
  function configs(config) {
    const newConfig = {
      ...config,
      headers: {
        ...config.headers,
        Authorization: store.getState().auth.token,
      },
    };
    return newConfig;
  },
  function errorConfigs(error) {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  function responses(response) {
    return response;
  },

  function catchError(error) {
    if (error.response.status === 401) {
      store.dispatch(authActions.signOut());
    }
    return Promise.reject(error);
  }
);
