import { FC, ReactElement } from "react";
import css from "../Input.module.css";

interface InputGroupProps {
  children: ReactElement | ReactElement[];
  fullWidth?: boolean;
}

export const InputGroup: FC<InputGroupProps> = ({ children, fullWidth }) => {
  const commonClasses = [css.inputGroup, css.input];
  const classes = fullWidth
    ? [css.fullwidth, ...commonClasses].join(" ").trim()
    : commonClasses.join(" ").trim();

  return <div className={classes}>{children}</div>;
};
