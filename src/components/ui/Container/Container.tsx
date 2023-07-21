import { FC } from "react";
import css from "./Container.module.css";

interface ContainerProps {
  children?: string | JSX.Element | JSX.Element[];
  className?: string;
}

const Container: FC<ContainerProps> = ({ children, className }) => {
  const classes = className
    ? [css.container, className].join(" ")
    : css.container;

  return <div className={classes}>{children}</div>;
};

export default Container;
