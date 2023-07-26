import { AuthenticationForm } from "entites/authentication";
import { SignInGosuslugi } from "features/authentication";
import React, { useState } from "react";
import { Button } from "shared/components/Button";
import { Input } from "shared/components/input/Input";
import { InputPassword } from "shared/components/input/InputPassword";
import { Link } from "shared/components/Link";
import { paths } from "shared/routes";
import { RegistrationFormContent } from "../RegistrationFormContent/RegistrationFormContent";
import css from "./RegistrationForm.module.css";

export const RegistrationForm = () => {
  return (
    <AuthenticationForm
      title="Регистрация"
      form={<RegistrationFormContent />}
      buttonFooter={<SignInGosuslugi />}
    />
  );
};
