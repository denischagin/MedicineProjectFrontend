import axios from "axios";
import { BASE_URL } from "../constants/url";

export const commonApi = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
})