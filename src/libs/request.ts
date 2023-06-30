import axios from "axios";

import useAccessTokenStore from "../stores/AccessInfoStore";

const client = axios.create({});

// Add a request interceptor
axios.interceptors.request.use(
  (config) => {
    const accessInfo = useAccessTokenStore.getState().accessInfo;
    if (accessInfo !== undefined && accessInfo !== null) {
      config.headers["Authorization"] = `Bearer ${accessInfo.token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default client;
