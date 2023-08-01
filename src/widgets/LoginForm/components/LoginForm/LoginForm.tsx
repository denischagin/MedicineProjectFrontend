import { AuthenticationForm } from "entites/authentication";
import { LoginGosuslugi } from "features/authentication";
import { LoginFormContent } from "../LoginFormContent/LoginFormContent";

export const LoginForm = () => {
  return (
    <AuthenticationForm
      title="Авторизация"
      form={<LoginFormContent />}
      buttonFooter={<LoginGosuslugi />}
    />
  );
};
