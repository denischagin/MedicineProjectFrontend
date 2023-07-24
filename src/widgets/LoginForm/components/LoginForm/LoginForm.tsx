import { AuthenticationForm } from "entites/authentication";
import { SignInGosuslugi } from "features/authentication";
import { Input } from "shared/components/input/Input";
import css from "./LoginForm.module.css";

export const LoginForm = () => {
  const handleSubmitForm = () => {};

  return (
    <AuthenticationForm
      title="Авторизация"
      form={
        <form onSubmit={handleSubmitForm} className={css.loginForm}>
          <div className={css.fields}>
            <label htmlFor="login">Эл. Почта/Номер телефона</label>
            <Input fullWidth />
            <label>Пароль</label>
            <Input fullWidth />
          </div>
        </form>
      }
      buttonFooter={<SignInGosuslugi />}
    />
  );
};
