import { AxiosError } from "axios";
import { AuthenticationService } from "entites/authentication/api/authentication";
import {
  IAuthResponse,
  IRegistration,
} from "entites/authentication/models/api";
import { useViewer } from "entites/viewer";
import { useMutation } from "react-query";
import { useNavigate } from "react-router";
import { TokenLocalStorage } from "shared/libs";
import { paths } from "shared/routes";

export const useRegistration = () => {
  const navigate = useNavigate();
  const { setCurrentViewer } = useViewer();

  return useMutation<
    IAuthResponse,
    AxiosError<string | { errors: { PasswordConfirm: string[] } }>,
    IRegistration
  >({
    mutationFn: (credits) => AuthenticationService.signUp(credits),
    onSuccess: ({ token, refreshToken, ...viewer }) => {
      TokenLocalStorage.setAccessToken(token);
      TokenLocalStorage.setRefreshToken(refreshToken);
      localStorage.setItem("currentViewer", JSON.stringify(viewer));

      setCurrentViewer(viewer);
      navigate(paths.home, { replace: true });
    },
  });
};
