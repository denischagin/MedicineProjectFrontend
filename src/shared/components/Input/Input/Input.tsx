import React, { FC, InputHTMLAttributes, useState } from "react";
import { useInputGroup } from "../hooks/input-group";
import css from "../Input.module.css";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  fullWidth?: boolean;
  inputHeight?: "small" | "medium" | "big";
}

export const Input: FC<InputProps> = ({
  fullWidth,
  inputHeight = "medium",
  ...props
}) => {
  const {
    isInputFocused,
    isHovered,
    handleMouseEnter,
    handleMouseLeave,
    handleFocus,
    handleBlur,
  } = useInputGroup();

  const classes = [css.input, css[inputHeight]];

  isHovered && classes.push(css.input_hover);
  isInputFocused && classes.push(css.input_focus);
  fullWidth && classes.push(css.fullwidth);

  return (
    <input
      onFocus={handleFocus}
      onBlur={handleBlur}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={classes.join(" ")}
      {...props}
    />
  );
};
