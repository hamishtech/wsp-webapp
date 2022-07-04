import axios from "axios";
const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
  headers: {
    "Content-type": "application/json",
  },
});

apiClient.defaults.withCredentials = true;

export default apiClient;
