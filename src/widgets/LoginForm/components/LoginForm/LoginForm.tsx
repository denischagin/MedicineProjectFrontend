import { AuthenticationForm } from "entites/authentication";
import { SignInGosuslugi } from "features/authentication";
import { useState } from "react";
import { Button } from "shared/components/Button";
import { Input } from "shared/components/input/Input";
import { InputPassword } from "shared/components/input/InputPassword";
import { Link } from "shared/components/Link";
import { paths } from "shared/routes";
import css from "./LoginForm.module.css";

export const LoginForm = () => {
  const handleSubmitForm = () => {};

  const [showPassword, setShowPassword] = useState(false);

  return (
    <AuthenticationForm
      title="Авторизация"
      form={
        <form onSubmit={handleSubmitForm} className={css.loginForm}>
          <div className={css.fields}>
            <label htmlFor="login">Эл. Почта/Номер телефона</label>
            <Input fullWidth />
            <label>Пароль</label>

            <InputPassword
              fullWidth
              showPassword={showPassword}
              setShowPassword={setShowPassword}
            />
          </div>

          <Link className={css.help_text} to={paths.registration}>
            <p>Нет аккаунта?</p>
            <p>Зарегистрироваться</p>
          </Link>

          <Button className={css.submit}>
            Войти
          </Button>

        </form>
      }
      buttonFooter={<SignInGosuslugi />}
    />
  );
};
