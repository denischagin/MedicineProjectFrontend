import { useRegistration } from "entites/authentication";
import { FC, FormEventHandler, useState } from "react";
import { Button } from "shared/components/Button";
import { Input } from "shared/components/Input/Input";
import { InputPassword } from "shared/components/Input/InputPassword";
import { Link } from "shared/components/Link";
import { Text } from "shared/components/Text";
import { paths } from "shared/routes";
import css from "./RegistrationFormContent.module.scss";
import { getFormDataValue } from "shared/libs";

export const RegistrationFormContent: FC = () => {
  const [birthDate, setBirthDate] = useState("");

  const { mutate: regMutate, isError, error, isLoading } = useRegistration();

  const handleSubmitForm: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);

    const registerData = {
      email: getFormDataValue(data, "email"),
      firstName: getFormDataValue(data, "firstName"),
      lastName: getFormDataValue(data, "lastName"),
      middleName: getFormDataValue(data, "middleName"),
      birthDate: getFormDataValue(data, "birthDate"),
      password: getFormDataValue(data, "password"),
      passwordConfirm: getFormDataValue(data, "passwordConfirm"),
    };

    regMutate(registerData);
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
          Отчество (необязательное поле)
        </Text>
        <Input fullWidth inputHeight="small" name="middleName" />

        <Text component="label" htmlFor="birthDate">
          Дата рождения
        </Text>
        <Input
          className={
            birthDate.length === 0
              ? css.input_date
              : [css.input_date, css.input_date_focus].join(" ")
          }
          required
          type="date"
          value={birthDate}
          onChange={(e) => setBirthDate(e.target.value)}
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
          {typeof error.response?.data === "object"
            ? error.response?.data.errors.PasswordConfirm[0]
            : error.response?.data ?? error.message}
        </Text>
      )}
    </form>
  );
};
