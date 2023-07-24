import { AuthenticationForm } from "entites/authentication";
import { SignInGosuslugi } from "features/authentication";
import React, { useState } from "react";
import { Button } from "shared/components/Button";
import { Input } from "shared/components/input/Input";
import { InputPassword } from "shared/components/input/InputPassword";
import { Link } from "shared/components/Link";
import { paths } from "shared/routes";
import css from "./RegistrationForm.module.css";

export const RegistrationForm = () => {

  const handleSubmitForm = () => {};

  const [showPassword, setShowPassword] = useState(false);
  const [showRepeat, setShowRepeat] = useState(false);

  return (
    <AuthenticationForm
      title="Регистрация"
      form={
        <form onSubmit={handleSubmitForm} className={css.regForm}>
          <div className={css.fields}>
            <label htmlFor="login">Эл. Почта/Номер телефона</label>
            <Input fullWidth />
            <label>Пароль</label>
            <InputPassword
              fullWidth
              showPassword={showPassword}
              setShowPassword={setShowPassword}
            />
            <label>Повторите пароль</label>
            <InputPassword
              fullWidth
              showPassword={showRepeat}
              setShowPassword={setShowRepeat}
            />
          </div>

          <Link className={css.help_text} to={paths.login}>
            <p>Уже есть аккаунт?</p>
            <p>Войти?</p>
          </Link>

          <Button className={css.submit}>
            Зарегистрироваться
          </Button>
        </form>
      }
      buttonFooter={<SignInGosuslugi />}
    />
  );
};
