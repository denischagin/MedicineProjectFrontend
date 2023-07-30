import { AxiosError } from "axios";
import { AuthenticationService } from "entites/authentication/api/authentication";
import {
  IAuthResponse,
  IRegistration,
} from "entites/authentication/models/api";
import { useMutation, useQueryClient } from "react-query";
import { TokenService } from "shared/libs";

export const useRegistration = () => {
  const result = useMutation<IAuthResponse, AxiosError, IRegistration>({
    mutationFn: (credits) => AuthenticationService.signIn(credits),
    onSuccess: ({ token, refreshToken }) => {
      TokenService.setAccessToken(token);
      TokenService.setRefreshToken(refreshToken);
    },
  });

  return result;
};
