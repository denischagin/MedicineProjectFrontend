import { useMutation } from "react-query";
import { TokenLocalStorage } from "shared/libs";
import { postRefreshToken } from "../libs/token";
import { AxiosError } from "axios";
import { ITokens } from "../types";

export const useRefresh = () => {
  return useMutation<ITokens, AxiosError<string>, ITokens>({
    mutationFn: ({accessToken = "", refreshToken = ""}) =>
      postRefreshToken({
        accessToken: accessToken,
        refreshToken: refreshToken,
      }),
  });
};
