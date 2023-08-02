import axios from "axios";
import { ITokens } from "../types";
import { BASE_API } from "shared/constants";

export const postRefreshToken = async (data: {
  accessToken: string;
  refreshToken: string;
}) => {
  const response = await axios.post<ITokens>(
    `${BASE_API}/Accounts/refresh-token`,
    data
  );
  return response.data;
};
