import React, { FC, InputHTMLAttributes, useState } from "react";
import css from "../Input.module.css";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  fullWidth?: boolean;
}

export const Input: FC<InputProps> = ({ fullWidth, ...props }) => {
  const classes = [css.input];
  const [isInputFocused, setInputFocused] = useState(false);

  isInputFocused && classes.push(css.input_focus);
  fullWidth && classes.push(css.fullwidth);

  return (
    <input
      onFocus={() => setInputFocused(true)}
      onBlur={() => setInputFocused(false)}
      className={classes.join(" ")}
      {...props}
    />
  );
};
