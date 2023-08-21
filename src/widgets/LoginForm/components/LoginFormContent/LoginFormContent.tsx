import { FC, FormEventHandler } from "react";
import { Button } from "shared/components/Button";
import { Input } from "shared/components/Input/Input";
import { InputPassword } from "shared/components/Input/InputPassword";
import { Link } from "shared/components/Link";
import { paths } from "shared/routes";
import css from "./LoginFormContent.module.scss";
import { Text } from "shared/components/Text";
import { useLogin } from "entites/authentication";
import { getFormDataValue } from "shared/libs";

export const LoginFormContent: FC = () => {
  const { mutate: loginMutate, isError, error, isLoading } = useLogin();

  const handleSubmitForm: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);

    const email = getFormDataValue(data, "email");
    const password = getFormDataValue(data, "password");

    loginMutate({ email, password });
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
