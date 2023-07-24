import React, { FC, HTMLAttributes } from "react";
import css from "./Container.module.css";

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {}

export const Container: FC<ContainerProps> = (props) => {
  return <div className={css.container} {...props} />;
};

