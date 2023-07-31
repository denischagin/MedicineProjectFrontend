import { AxiosError } from "axios";
import { AuthenticationService } from "entites/authentication/api/authentication";
import {
  IAuthResponse,
  IRegistration,
} from "entites/authentication/models/api";
import { useMutation, useQueryClient } from "react-query";
import { TokenLocalStorage } from "shared/libs";

export const useRegistration = () => {
  const result = useMutation<
    IAuthResponse,
    AxiosError<string | { errors: { PasswordConfirm: string[] } }>,
    IRegistration
  >({
    mutationFn: (credits) => AuthenticationService.signUp(credits),
    onSuccess: ({ token, refreshToken, ...user }) => {
      TokenLocalStorage.setAccessToken(token);
      TokenLocalStorage.setRefreshToken(refreshToken);
      localStorage.setItem("currentViewer", JSON.stringify(user));
    },
  });

  return result;
};
