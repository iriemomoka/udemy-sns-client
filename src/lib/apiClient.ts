import axios from "axios"

const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIK_API_BASEURL,
  // baseURL: 'http://localhost:5000/api',
  headers: {
    "Content-Type": "application/json",
  }
});

export default apiClient;