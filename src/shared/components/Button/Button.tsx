import React, { ButtonHTMLAttributes, FC } from "react";
import css from "./Button.module.scss";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  color?: "filled" | "disabled"
}

export const Button: FC<ButtonProps> = ({ className, color="filled", ...props }) => {
  return (
    <button className={[css.button, css[color], className].join(" ")} {...props} />
  );
};
