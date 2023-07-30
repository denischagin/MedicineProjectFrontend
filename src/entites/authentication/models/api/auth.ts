export interface ILogin {
  email: string;
  password: string;
}

export interface IAuthResponse {
  username: string;
  email: string;
  token: string;
  refreshToken: string;
  role: string;
}

export interface IRegistration {
  email: string;
  birthDate: string;
  password: string;
  passwordConfirm: string;
  firstName: string;
  lastName: string;
  middleName: string;
}
