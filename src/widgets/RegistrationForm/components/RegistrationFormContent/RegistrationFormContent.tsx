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

  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

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
        <Text component="label">Эл. Почта/Номер телефона</Text>
        <Input
          required
          fullWidth
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          inputHeight="small"
        />

        <Text component="label">Фамилия</Text>
        <Input
          required
          fullWidth
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          inputHeight="small"
        />

        <Text component="label">Имя</Text>
        <Input
          required
          fullWidth
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          inputHeight="small"
        />

        <Text component="label">Отчество</Text>
        <Input
          required
          fullWidth
          value={middleName}
          onChange={(e) => setMiddleName(e.target.value)}
          inputHeight="small"
        />

        <Text component="label">Дата рождения</Text>
        <Input
          required
          type="date"
          fullWidth
          value={birthDate}
          onChange={(e) => setBirthDate(e.target.value)}
          inputHeight="small"
        />

        <Text component="label">Пароль</Text>
        <InputPassword
          required
          fullWidth
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          inputHeight="small"
        />

        <Text component="label">Повторите пароль</Text>
        <InputPassword
          required
          fullWidth
          value={passwordConfirm}
          onChange={(e) => setPasswordConfirm(e.target.value)}
          inputHeight="small"
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
