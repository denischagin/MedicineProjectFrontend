import { Children, cloneElement, FC, ReactElement, useState } from "react";
import { useInputGroup } from "../hooks/input-group";
import css from "../Input.module.css";

interface InputGroupProps {
  children: ReactElement | ReactElement[];
  fullWidth?: boolean;
}

export const InputGroup: FC<InputGroupProps> = ({
  children,
  fullWidth = false,
}) => {
  const {
    isInputFocused,
    isHovered,
    handleMouseEnter,
    handleMouseLeave,
    handleFocus,
    handleBlur,
  } = useInputGroup();
  const classes = [css.inputGroup, css.input];

  isHovered && classes.push(css.input_hover);
  fullWidth && classes.push(css.fullwidth);
  isInputFocused && classes.push(css.input_focus);

  return (
    <div
      className={classes.join(" ")}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {Children.map(children, (child) =>
        cloneElement(child, {
          onFocus: handleFocus,
          onBlur: handleBlur,
        })
      )}
    </div>
  );
};
