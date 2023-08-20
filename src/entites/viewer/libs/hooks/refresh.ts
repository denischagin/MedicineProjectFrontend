import { useMutation } from "react-query";
import { TokenLocalStorage } from "shared/libs";
import { AxiosError } from "axios";
import { ITokens } from "../../types";
import { postRefreshToken } from "entites/viewer/api/token";

export const useRefresh = () => {
  return useMutation<ITokens, AxiosError<string>, ITokens>({
    mutationFn: ({accessToken = "", refreshToken = ""}) =>
      postRefreshToken({
        accessToken: accessToken,
        refreshToken: refreshToken,
      }),
  });
};
