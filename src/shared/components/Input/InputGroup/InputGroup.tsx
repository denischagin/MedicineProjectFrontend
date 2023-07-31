import { Children, cloneElement, FC, ReactElement, useState } from "react";
import css from "../Input.module.css";

interface InputGroupProps {
  children: ReactElement | ReactElement[];
  fullWidth?: boolean;
}

export const InputGroup: FC<InputGroupProps> = ({ children, fullWidth }) => {
  const classes = [css.inputGroup, css.input];
  const [isInputFocused, setInputFocused] = useState(false);

  fullWidth && classes.push(css.fullwidth);
  isInputFocused && classes.push(css.input_focus);

  return (
    <div className={classes.join(" ")}>
      {Children.map(children, (child) =>
        cloneElement(child, {
          onFocus: () => setInputFocused(true),
          onBlur: () => setInputFocused(false),
        })
      )}
    </div>
  );
};
