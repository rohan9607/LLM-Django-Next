import axios, { AxiosInstance } from "axios";
const API_BASE_URL: string = process.env.API_URL as string
const publicApi:AxiosInstance = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

const privateFormDataApi: AxiosInstance = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "multipart/form-data",
  },
});

export {privateFormDataApi, publicApi}