import { AxiosError } from "axios";
import { AuthenticationService } from "entites/authentication/api/authentication";
import { ILogin, IAuthResponse } from "entites/authentication/models/api";
import { useMutation } from "react-query";
import { TokenLocalStorage } from "shared/libs";

export const useLogin = () => {
  const result = useMutation<IAuthResponse, AxiosError<string>, ILogin>({
    mutationFn: (credits) => AuthenticationService.signIn(credits),
    onSuccess: ({ token, refreshToken, ...rest }) => {
      TokenLocalStorage.setAccessToken(token);
      TokenLocalStorage.setRefreshToken(refreshToken);
      localStorage.setItem("currentViewer", JSON.stringify(rest));
    },
  });

  return result;
};
