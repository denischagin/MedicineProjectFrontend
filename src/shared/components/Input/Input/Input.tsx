import React, { FC, InputHTMLAttributes, useState } from "react";
import css from "../Input.module.css";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  fullWidth?: boolean;
}

export const Input: FC<InputProps> = ({ fullWidth, ...props }) => {
  const classes = [css.input];
  const [isInputFocused, setInputFocused] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  isHovered && classes.push(css.input_hover);
  isInputFocused && classes.push(css.input_focus);
  fullWidth && classes.push(css.fullwidth);

  return (
    <input
      onFocus={() => setInputFocused(true)}
      onBlur={() => setInputFocused(false)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={classes.join(" ")}
      {...props}
    />
  );
};
