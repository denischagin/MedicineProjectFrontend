import React, { FC, HTMLAttributes } from "react";
import css from "./Loader.module.css";

interface LoaderProps extends HTMLAttributes<HTMLSpanElement> {
  className?: string;
  size?: "big" | "medium" | "small";
}

export const Loader: FC<LoaderProps> = ({
  className,
  size = "medium",
  ...restProps
}) => {
  return (
    <span
      className={[css.loader, css[size], className].join(" ").trim()}
      {...restProps}
    />
  );
};
