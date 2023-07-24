import React, { ButtonHTMLAttributes, FC } from "react";
import css from "./Button.module.css";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export const Button: FC<ButtonProps> = ({ className, ...props }) => {
  return (
    <button className={[css.button, className].join(" ")} {...props} />
  );
};
