import axios from "axios";

export const create = () => {
  const http = axios.create({
    baseURL: process.env.REACT_APP_JSON_BASE_URL, // TODO: use environment variables
  });

  http.interceptors.response.use((response) => response.data);

  return http;
};