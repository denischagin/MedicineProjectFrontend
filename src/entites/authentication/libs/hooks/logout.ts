import { AxiosError } from "axios";
import { AuthenticationService } from "entites/authentication/api/authentication";
import { useMutation } from "react-query";
import { TokenLocalStorage } from "shared/libs";

export const useLogout = () => {
  const result = useMutation<
    null,
    AxiosError<string>,
    string
  >({
    mutationFn: (username) => AuthenticationService.signOut(username),
    onSuccess: () => {
      TokenLocalStorage.removeAccessToken();
      TokenLocalStorage.removeRefreshToken();
      localStorage.removeItem("currentViewer");
    },
  });

  return result;
};
