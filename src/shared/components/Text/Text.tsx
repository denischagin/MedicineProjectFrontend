import { createElement, FC } from "react";
import css from "./Text.module.scss";
import { TextProps } from "./Text.props";

export const Text: FC<TextProps> = ({
  className,
  color,
  fz = "s16",
  component = "p",
  ...restProps
}) => {
  const classes = [css.common, css[fz]];
  className && classes.push(className)
  color && classes.push(css[color])

  return createElement(component, {
    className: classes.join(" "),
    ...restProps,
  });
};
