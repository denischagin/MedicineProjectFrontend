export class TokenLocalStorage {
  private static accessKey = "token";
  private static refreshKey = "refresh";

  public static setAccessToken = (token: string) => {
    localStorage.setItem(this.accessKey, token);
  };

  public static setRefreshToken = (token: string) => {
    localStorage.setItem(this.refreshKey, token);
  };

  public static getAccessToken = () => {
    return localStorage.getItem(this.accessKey);
  };

  public static getRefreshToken = () => {
    return localStorage.getItem(this.refreshKey);
  };

  public static removeAccessToken = () => {
    localStorage.removeItem(this.accessKey);
  };

  public static removeRefreshToken = () => {
    localStorage.removeItem(this.refreshKey);
  };
}
