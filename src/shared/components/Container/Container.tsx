import React, { FC, HTMLAttributes } from "react";
import css from "./Container.module.css";

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  maxWidth?: string;
  className?: string;
}

export const Container: FC<ContainerProps> = ({
  maxWidth = "1170px",
  className,
  ...props
}) => {
  return (
    <div
      className={[css.container, className].join(" ")}
      style={{ maxWidth }}
      {...props}
    />
  );
};
