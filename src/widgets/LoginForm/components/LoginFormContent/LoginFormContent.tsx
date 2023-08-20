import { FC, FormEventHandler } from "react";
import { Button } from "shared/components/Button";
import { Input } from "shared/components/Input/Input";
import { InputPassword } from "shared/components/Input/InputPassword";
import { Link } from "shared/components/Link";
import { paths } from "shared/routes";
import css from "./LoginFormContent.module.scss";
import { Text } from "shared/components/Text";
import { useNavigate } from "react-router";
import { useViewer } from "entites/viewer";
import { useLogin } from "entites/authentication";
import { Loader } from "shared/components/Loader";

export const LoginFormContent: FC = () => {
  const navigate = useNavigate();

  const { mutate: loginMutate, isError, error, isLoading } = useLogin();
  const { setCurrentViewer } = useViewer();

  const handleSubmitForm: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);

    const email = data.get("email")?.toString();
    const password = data.get("password")?.toString();

    if (!email || !password) return;

    loginMutate(
      { email, password },
      {
        onSuccess: (viewer) => {
          const { email, role, username } = viewer;
          setCurrentViewer({ email, role, username });
          navigate(paths.home, { replace: true });
        },
      }
    );
  };

  return (
    <form onSubmit={handleSubmitForm} className={css.loginForm}>
      <div className={css.fields}>
        <Text component="label" htmlFor="email">
          Эл. Почта/Номер телефона
        </Text>
        <Input type="email" name="email" required id="login" fullWidth />

        <Text component="label" htmlFor="password">
          Пароль
        </Text>
        <InputPassword name="password" required id="password" fullWidth />
      </div>

      <Link className={css.help_text} to={paths.registration}>
        <Text>Нет аккаунта?</Text>
        <Text>Зарегистрироваться</Text>
      </Link>

      {isLoading ? (
        <Button className={css.submit} color="disabled">
          Загрузка...
        </Button>
      ) : (
        <Button className={css.submit}>Войти</Button>
      )}

      {isError && (
        <Text color="error" fz="s16" className={css.error}>
          {error.response?.data ?? error.message}
        </Text>
      )}
    </form>
  );
};
