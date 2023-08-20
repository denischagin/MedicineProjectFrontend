import React, { FC } from "react";
import css from "./AuthenticationForm.module.scss";
import formImg from "entites/authentication/assets/form-img.png";
import { Text } from "shared/components/Text";

interface AuthenticationFormProps {
  title: string;
  form: JSX.Element | JSX.Element[];
  buttonFooter: JSX.Element | JSX.Element[];
}

export const AuthenticationForm: FC<AuthenticationFormProps> = ({
  form,
  title,
  buttonFooter,
}) => {
  return (
    <div className={css.wrapper}>
      <Text component="h2" fz="s40" className={css.header}>
        {title}
      </Text>
      <div className={css.form_wrapper}>
        <img src={formImg} className={css.form_img} alt="doctor" />
        <div className={css.form}>{form}</div>
      </div>
      {buttonFooter}
    </div>
  );
};
