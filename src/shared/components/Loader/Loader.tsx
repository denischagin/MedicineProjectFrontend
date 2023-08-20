import React, { FC, HTMLAttributes } from "react";
import css from "./Loader.module.scss";

interface LoaderProps extends HTMLAttributes<HTMLSpanElement> {
  className?: string;
  size?: "big" | "medium" | "small";
}

export const Loader: FC<LoaderProps> = ({
  className,
  size = "medium",
  ...restProps
}) => {
  const classes = [css.loader, css[size]];
  className && classes.push(className);

  return (
    <span
      className={classes.join(" ")}
      {...restProps}
    />
  );
};
