import { FC, FormEventHandler, useState } from "react";
import { Button } from "shared/components/Button";
import { Input } from "shared/components/Input/Input";
import { InputPassword } from "shared/components/Input/InputPassword";
import { Link } from "shared/components/Link";
import { paths } from "shared/routes";
import css from "./LoginFormContent.module.css";
import { useLogin } from "./../../../../entites/authentication/libs/hooks/login";
import { Navigate } from "react-router";
import { Text } from "shared/components/Text";

export const LoginFormContent: FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const { mutate: loginMutate, isSuccess, isError, error } = useLogin();

  const handleSubmitForm: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    loginMutate({ email, password });
  };

  return (
    <form onSubmit={handleSubmitForm} className={css.loginForm}>
      <div className={css.fields}>
        {isSuccess && <Navigate to={paths.home} replace />}

        <Text component="label">Эл. Почта/Номер телефона</Text>
        <Input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          id="login"
          fullWidth
        />

        <Text component="label">Пароль</Text>
        <InputPassword
          id="password"
          fullWidth
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          showPassword={showPassword}
          setShowPassword={setShowPassword}
        />
      </div>

      <Link className={css.help_text} to={paths.registration}>
        <Text>Нет аккаунта?</Text>
        <Text>Зарегистрироваться</Text>
      </Link>

      <Button className={css.submit}>Войти</Button>

      {isError && (
        <Text color="error" fz="s16" className={css.error}>
          {error.response?.data}
        </Text>
      )}
    </form>
  );
};
