import React, { FC } from "react";
import css from "./AuthenticationForm.module.css";
import formImg from "entites/authentication/assets/form-img.png";

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
      <h2 className={css.header}>{title}</h2>
      <div className={css.form_wrapper}>
        <img src={formImg} className={css.form_img} alt="doctor" />
        <div className={css.form}>{form}</div>
      </div>
      {buttonFooter}
    </div>
  );
};
