import axios from "axios";

import useAccessTokenStore from "../stores/AccessTokenStore";

const client = axios.create({});

// Add a request interceptor
axios.interceptors.request.use(
  (config) => {
    const accessToken = useAccessTokenStore.getState().accessToken;
    if (accessToken !== undefined && accessToken !== null) {
      config.headers.post["Authorization"] = `Bearer ${accessToken.token}`;
      config.params.get["access_token"] = accessToken.token;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default client;
