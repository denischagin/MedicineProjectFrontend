import { Layout } from "app/components/Layout/Layout";
import { lazy } from "react";
import { Route, Routes } from "react-router";
import { paths } from "shared/routes";

const LoginPage = lazy(() =>
  import("pages/login").then(({ LoginPage }) => ({ default: LoginPage }))
);

const NotFoundPage = lazy(() =>
  import("pages/not-found").then(({ NotFoundPage }) => ({
    default: NotFoundPage,
  }))
);
const RegistrationPage = lazy(() =>
  import("pages/registration").then(({ RegistrationPage }) => ({
    default: RegistrationPage,
  }))
);

export const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path={paths.login} element={<LoginPage />} />
        <Route path={paths.registration} element={<RegistrationPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};
