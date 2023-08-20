import { Route, Routes } from "react-router";
import { paths } from "shared/routes";
import { LoginPage, NotFoundPage, RegistrationPage } from "./lazy";
import { Layout } from "../components/Layout/Layout";


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
