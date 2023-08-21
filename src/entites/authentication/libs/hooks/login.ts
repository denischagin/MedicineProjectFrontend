import { AxiosError } from "axios";
import { AuthenticationService } from "entites/authentication/api/authentication";
import { ILogin, IAuthResponse } from "entites/authentication/models/api";
import { useViewer } from "entites/viewer";
import { useMutation } from "react-query";
import { useNavigate } from "react-router";
import { TokenLocalStorage } from "shared/libs";
import { paths } from "shared/routes";

export const useLogin = () => {
  const navigate = useNavigate();
  const { setCurrentViewer } = useViewer();
  
  return useMutation<IAuthResponse, AxiosError<string>, ILogin>({
    mutationFn: (credits) => AuthenticationService.signIn(credits),
    onSuccess: ({ token, refreshToken, ...viewer }) => {
      TokenLocalStorage.setAccessToken(token);
      TokenLocalStorage.setRefreshToken(refreshToken);
      localStorage.setItem("currentViewer", JSON.stringify(viewer));
      
      setCurrentViewer(viewer);
      navigate(paths.home, { replace: true });
    },
  });

};
