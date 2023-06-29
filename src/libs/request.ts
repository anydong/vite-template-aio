import axios from "axios";

import useBearerTokenStore from "../stores/BearerTokenStore";

const client = axios.create({});

// Add a request interceptor
axios.interceptors.request.use(
  (config) => {
    const bearerToken = useBearerTokenStore.getState().bearerToken;
    if (bearerToken !== undefined && bearerToken !== null) {
      config.headers.post["Authorization"] = `Bearer ${bearerToken.token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default client;
