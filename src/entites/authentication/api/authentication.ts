import axios from "axios";
import { BASE_API } from "shared/constants";
import { IAuthResponse, ILogin, IRegistration } from "../models/api";

export class AuthenticationService {
  private static BASE = BASE_API + "/Accounts/";

  public static signIn = async (credits: ILogin) => {
    const response = await axios.post<IAuthResponse>(this.BASE + "login", {
      ...credits,
      role: "Patient",
    });
    return response.data;
  };

  public static signUp = async (credits: IRegistration) => {
    const response = await axios.post<IAuthResponse>(this.BASE + "register", {
      ...credits,
      role: "Patient",
    });
    return response.data
  };
}
