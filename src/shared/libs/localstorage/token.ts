export class TokenLocalStorage {
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

  public static removeAccessToken = () => {
    localStorage.removeItem("token");
  };

  public static removeRefreshToken = () => {
    localStorage.removeItem("refresh");
  };
}
