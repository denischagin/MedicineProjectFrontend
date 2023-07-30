export class TokenService {
  public static setAccessToken = (token: string) => {
    localStorage.setItem("token", token);
  };

  public static setRefreshToken = (token: string) => {
    localStorage.setItem("refresh", token);
  };

  public static getAccessToken = () => {
    return localStorage.getItem("token");
  };

  public static getRefreshToken = () => {
    return localStorage.getItem("refresh");
  };
}
