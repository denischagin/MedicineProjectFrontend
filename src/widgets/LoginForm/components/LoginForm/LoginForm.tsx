import { AuthenticationForm } from "entites/authentication";
import { SignInGosuslugi } from "features/authentication";
import { useState } from "react";
import { Button } from "shared/components/Button";
import { Input } from "shared/components/input/Input";
import { InputPassword } from "shared/components/input/InputPassword";
import { Link } from "shared/components/Link";
import { paths } from "shared/routes";
import { LoginFormContent } from "../LoginFormContent/LoginFormContent";
import css from "./LoginForm.module.css";

export const LoginForm = () => {
  return (
    <AuthenticationForm
      title="Авторизация"
      form={<LoginFormContent />}
      buttonFooter={<SignInGosuslugi />}
    />
  );
};
