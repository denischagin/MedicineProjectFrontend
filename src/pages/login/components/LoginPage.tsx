import React from "react";
import { Container } from "shared/components/Container";
import { LoginForm } from "widgets/LoginForm";
import css from "./LoginPage.module.scss";

export const LoginPage = () => {
  return (
    <Container className={css.login_container}>
      <LoginForm />
    </Container>
  );
};
