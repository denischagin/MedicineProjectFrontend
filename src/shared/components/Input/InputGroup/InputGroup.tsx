import {
  Children,
  cloneElement,
  FC,
  ReactElement,
} from "react";
import css from "./InputGroup.module.scss";
import { StylesProvider } from "../context/styles-provider";

interface InputGroupProps {
  children: ReactElement | ReactElement[];
  fullWidth?: boolean;
}

export const InputGroup: FC<InputGroupProps> = ({
  children,
  fullWidth = false,
}) => {
  const classes = [css.inputGroup];

  fullWidth && classes.push(css.fullwidth);

  return (
    <div className={classes.join(" ")}>
      <StylesProvider>
        {Children.map(children, (child) =>
          cloneElement(child, {
            fullWidth,
          })
        )}
      </StylesProvider>
    </div>
  );
};
