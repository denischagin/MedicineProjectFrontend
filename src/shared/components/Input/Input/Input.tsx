import { FC, InputHTMLAttributes } from "react";
import { useInputGroup } from "../hooks/input-group";
import css from "./Input.module.scss";
import { useStyles } from "../hooks/use-styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  fullWidth?: boolean;
  inputHeight?: "small" | "medium" | "big";
  className?: string
}

export const Input: FC<InputProps> = ({
  fullWidth,
  inputHeight = "medium",
  className,
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
  const { input } = useStyles();

  const classes = [css.input, css[inputHeight], className];

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
      style={{
        paddingRight: input.paddingRight + "px",
        paddingLeft: input.paddingLeft + "px",
      }}
      {...props}
    />
  );
};
