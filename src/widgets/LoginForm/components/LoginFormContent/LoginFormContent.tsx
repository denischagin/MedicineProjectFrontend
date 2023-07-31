import { FC, FormEventHandler, useEffect, useState } from "react";
import { Button } from "shared/components/Button";
import { Input } from "shared/components/Input/Input";
import { InputPassword } from "shared/components/Input/InputPassword";
import { Link } from "shared/components/Link";
import { paths } from "shared/routes";
import css from "./LoginFormContent.module.css";
import { useLogin } from "./../../../../entites/authentication/libs/hooks/login";
import { Text } from "shared/components/Text";
import { useNavigate } from "react-router";
import { useViewer } from "entites/viewer";
import { Loader } from "shared/components/Loader";

export const LoginFormContent: FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const navigate = useNavigate();

  const {
    mutate: loginMutate,
    isSuccess,
    isError,
    error,
    data: viewer,
    isLoading,
  } = useLogin();
  const { setCurrentViewer } = useViewer();

  const handleSubmitForm: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    loginMutate({ email, password });
  };

  useEffect(() => {
    if (isSuccess) {
      const { email, role, username } = viewer;
      setCurrentViewer({ email, role, username });
      navigate(paths.home, { replace: true });
    }
  }, [isSuccess, navigate]);

  return (
    <form onSubmit={handleSubmitForm} className={css.loginForm}>
      <div className={css.fields}>
        <Text component="label">Эл. Почта/Номер телефона</Text>
        <Input
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          id="login"
          fullWidth
        />

        <Text component="label">Пароль</Text>
        <InputPassword
          required
          id="password"
          fullWidth
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <Link className={css.help_text} to={paths.registration}>
        <Text>Нет аккаунта?</Text>
        <Text>Зарегистрироваться</Text>
      </Link>

      <Button className={css.submit}>Войти</Button>

      {isLoading && <Text color="grey">Загрузка...</Text>}

      {isError && (
        <Text color="error" fz="s16" className={css.error}>
          {error.response?.data ?? error.message}
        </Text>
      )}
    </form>
  );
};
