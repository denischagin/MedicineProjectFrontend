import { createElement, FC } from "react";
import css from "./Text.module.css";
import { TextProps } from "./Text.props";

export const Text: FC<TextProps> = ({
  className,
  color = "light",
  fz = "s16",
  component = "p",
  ...restProps
}) => {
  const classes = [css.common, css[color], css[fz]];
  className && classes.push(className)

  return createElement(component, {
    className: classes.join(" "),
    ...restProps,
  });
};
