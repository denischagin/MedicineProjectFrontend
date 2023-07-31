import { lazy } from "react";

export const LoginPage = lazy(() =>
  import("pages/login").then(({ LoginPage }) => ({ default: LoginPage }))
);

export const NotFoundPage = lazy(() =>
  import("pages/not-found").then(({ NotFoundPage }) => ({
    default: NotFoundPage,
  }))
);
export const RegistrationPage = lazy(() =>
  import("pages/registration").then(({ RegistrationPage }) => ({
    default: RegistrationPage,
  }))
);