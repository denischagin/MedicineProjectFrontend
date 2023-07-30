import axios from "axios";
import { IViewer } from "../models/context";

export const postRefreshToken = async (data: {
  accessToken: string;
  refreshToken: string;
}) => {
  const response = await axios.post<IViewer>(
    `https://localhost:5000/api/Accounts/refresh-token`,
    data
  );
  return response.data;
};
