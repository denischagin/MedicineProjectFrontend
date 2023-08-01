import { useRegistration } from "entites/authentication/libs/hooks";
import { useViewer } from "entites/viewer";
import { FC, FormEventHandler, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { Button } from "shared/components/Button";
import { Input } from "shared/components/Input/Input";
import { InputPassword } from "shared/components/Input/InputPassword";
import { Link } from "shared/components/Link";
import { Text } from "shared/components/Text";
import { paths } from "shared/routes";
import css from "./RegistrationFormContent.module.css";

export const RegistrationFormContent: FC = () => {
  const navigate = useNavigate();

  const {
    mutate: regMutate,
    isError,
    error,
    data: viewer,
    isLoading,
  } = useRegistration();
  const { setCurrentViewer } = useViewer();

  const handleSubmitForm: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);

    const email = data.get("email")?.toString() ?? "";
    const firstName = data.get("firstName")?.toString() ?? "";
    const lastName = data.get("lastName")?.toString() ?? "";
    const middleName = data.get("middleName")?.toString() ?? "";
    const birthDate = data.get("birthDate")?.toString() ?? "";
    const password = data.get("password")?.toString() ?? "";
    const passwordConfirm = data.get("passwordConfirm")?.toString() ?? "";

    regMutate(
      {
        email,
        firstName,
        lastName,
        middleName,
        birthDate,
        password,
        passwordConfirm,
      },
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
    <form onSubmit={handleSubmitForm} className={css.regForm}>
      <div className={css.fields}>
        <Text component="label" htmlFor="email">
          Эл. Почта/Номер телефона
        </Text>
        <Input
          required
          type="email"
          fullWidth
          inputHeight="small"
          name="email"
        />

        <Text component="label" htmlFor="lastName">
          Фамилия
        </Text>
        <Input required fullWidth inputHeight="small" name="lastName" />

        <Text component="label" htmlFor="firstName">
          Имя
        </Text>
        <Input required fullWidth inputHeight="small" name="firstName" />

        <Text component="label" htmlFor="middleName">
          Отчество
        </Text>
        <Input
          fullWidth
          inputHeight="small"
          name="middleName"
          placeholder="Необязательное поле"
        />

        <Text component="label" htmlFor="birthDate">
          Дата рождения
        </Text>
        <Input
          required
          type="date"
          fullWidth
          inputHeight="small"
          name="birthDate"
        />

        <Text component="label" htmlFor="password">
          Пароль
        </Text>
        <InputPassword required fullWidth inputHeight="small" name="password" />

        <Text component="label" htmlFor="passwordConfirm">
          Повторите пароль
        </Text>
        <InputPassword
          required
          fullWidth
          inputHeight="small"
          name="passwordConfirm"
        />
      </div>

      <Link className={css.help_text} to={paths.login}>
        <p>Уже есть аккаунт?</p>
        <p>Войти?</p>
      </Link>

      <Button type="submit" className={css.submit}>
        Зарегистрироваться
      </Button>

      {isLoading && <Text color="grey">Загрузка...</Text>}

      {isError && (
        <Text color="error" fz="s16" className={css.error}>
          {typeof error.response?.data === "string"
            ? error.response?.data ?? error.message
            : error.response?.data.errors.PasswordConfirm[0]}
        </Text>
      )}
    </form>
  );
};
