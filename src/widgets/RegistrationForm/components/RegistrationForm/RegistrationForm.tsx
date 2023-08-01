import { AuthenticationForm } from "entites/authentication";
import { LoginGosuslugi } from "features/authentication";
import { RegistrationFormContent } from "../RegistrationFormContent/RegistrationFormContent";

export const RegistrationForm = () => {
  return (
    <AuthenticationForm
      title="Регистрация"
      form={<RegistrationFormContent />}
      buttonFooter={<LoginGosuslugi />}
    />
  );
};
