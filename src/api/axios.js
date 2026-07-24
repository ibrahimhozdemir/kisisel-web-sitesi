import axios from "axios";

const api = axios.create({
  baseURL: "https://reqres.in/api",
  headers: {
    "x-api-key": "free_user_3GxdiRfBt5vFYuYpqUTNbpkLRue",
    "X-Reqres-Env": "prod",
  },
});

export default api;