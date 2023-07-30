import { AxiosError } from "axios";
import { AuthenticationService } from "entites/authentication/api/authentication";
import {
  IAuthResponse,
  IRegistration,
} from "entites/authentication/models/api";
import { useMutation, useQueryClient } from "react-query";
import { TokenLocalStorage } from "shared/libs";

export const useRegistration = () => {
  const result = useMutation<IAuthResponse, AxiosError, IRegistration>({
    mutationFn: (credits) => AuthenticationService.signIn(credits),
    onSuccess: ({ token, refreshToken }) => {
      TokenLocalStorage.setAccessToken(token);
      TokenLocalStorage.setRefreshToken(refreshToken);
    },
  });

  return result;
};
