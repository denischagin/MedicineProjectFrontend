import { FC, ReactElement } from "react";
import css from "../Input.module.css";
import { InputProps } from "shared/components/input/types";

interface InputGroupProps extends InputProps {
  children: ReactElement | ReactElement[];
}

export const InputGroup: FC<InputGroupProps> = ({ children, fullWidth }) => {
  const commonClasses = [css.inputGroup, css.input];
  const classes = fullWidth
    ? [css.fullwidth, ...commonClasses].join(" ")
    : commonClasses.join(" ");

  return (
    <div className={classes}>{children}</div>
  );
};
