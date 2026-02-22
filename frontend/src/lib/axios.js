import axios from "axios";

const api_url = import.meta.env.VITE_API_URL;
if (!api_url) {
  throw new Error("API URL is not defined in environment variables");
}

const axiosInstance = axios.create({
  baseURL: api_url,
  withCredentials: true,
});

export default axiosInstance;
