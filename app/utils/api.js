import axios from "axios";

// const baseURL = "http://localhost:3000/",
const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL

const api = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use(
  async (config) => {
    return config;
  },
  (error) => {
    if (error.response?.status === 401) {
      console.log(" <<< 🚀🚀🚀 401 🚀🚀🚀 >>>");
      window.location.href = "/";
    }
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  function (response) {
    return response
  },
  function (error) {
    if (error.response?.status === 401) {
      console.log(" <<< 🚀🚀🚀 401 🚀🚀🚀 >>>");
      window.location.href = "/";
    }
    console.log(error);
    return Promise.reject(error);
  }
);

export default api;
