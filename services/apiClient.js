import axios from "axios";
const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
  headers: {
    "Content-type": "application/json",
  },
});

if (typeof window !== "undefined") {
  let token = localStorage.getItem("wsps_token");
  if (token != null) {
    apiClient.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  }
}

export default apiClient;
