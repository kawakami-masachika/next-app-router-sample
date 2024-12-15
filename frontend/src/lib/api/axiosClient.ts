import axios from "axios";

export const axiosClient = axios.create({
  baseURL: process.env.API_END_POINT || 'http://localhost:3000',
  timeout: 30000,
  headers: {
    'Content-Type': 'application/json'
  }
})