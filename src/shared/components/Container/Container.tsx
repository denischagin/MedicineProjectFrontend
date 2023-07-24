import React, { FC, HTMLAttributes } from "react";
import css from "./Container.module.css";

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  maxWidth?: string;
}

export const Container: FC<ContainerProps> = ({
  maxWidth = "1170px",
  ...props
}) => {
  return <div className={css.container} style={{ maxWidth }} {...props} />;
};
