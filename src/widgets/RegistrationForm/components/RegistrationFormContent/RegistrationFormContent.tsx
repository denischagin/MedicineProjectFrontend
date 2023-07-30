import { FC, useState } from "react";
import { Button } from "shared/components/Button";
import { Input } from "shared/components/Input/Input";
import { InputPassword } from "shared/components/Input/InputPassword";
import { Link } from "shared/components/Link";
import { Text } from "shared/components/Text";
import { paths } from "shared/routes";
import css from "./RegistrationFormContent.module.css";

export const RegistrationFormContent: FC = () => {
  const handleSubmitForm = () => {};

  const [showPassword, setShowPassword] = useState(false);
  const [showRepeat, setShowRepeat] = useState(false);
  return (
    <form onSubmit={handleSubmitForm} className={css.regForm}>
      <div className={css.fields}>
        <Text component="label">Эл. Почта/Номер телефона</Text>
        <Input fullWidth />
        
        <Text component="label">Пароль</Text>
        <InputPassword
          fullWidth
          showPassword={showPassword}
          setShowPassword={setShowPassword}
        />
        <Text component="label">Повторите пароль</Text>
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

      <Button className={css.submit}>Зарегистрироваться</Button>
    </form>
  );
};
