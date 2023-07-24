import { LoginPage } from "pages/login";
import { RegistrationPage } from "pages/registration";
import { Route, Routes } from "react-router";
import { paths } from "shared/routes";

export const Routing = () => {
  return (
      <Routes>
          <Route path={paths.login} element={<LoginPage />} />
          <Route path={paths.registration} element={<RegistrationPage />} />
      </Routes>
  );
};