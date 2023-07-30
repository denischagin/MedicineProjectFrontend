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
  const classes = [css[color], css[fz], className].join(" ");

  return createElement(component, {
    className: classes,
    ...restProps,
  });
};