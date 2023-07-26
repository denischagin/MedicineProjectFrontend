import React, { FC, HTMLAttributes, MouseEventHandler, ReactNode } from "react";
import css from "./Drawer.module.css";

interface DrawerProps extends HTMLAttributes<HTMLDivElement> {
  open: boolean;
  onClose: () => void;
  classNameWrapper?: string;
  classNameContent?: string;
  children?: ReactNode | ReactNode[];
}

export const Drawer: FC<DrawerProps> = ({
  onClose,
  open,
  children,
  classNameContent,
  classNameWrapper,
  ...restProps
}) => {
  const classes = open
    ? [css.drawer, classNameWrapper, css.active].join(" ")
    : [css.drawer, classNameWrapper].join(" ");

  return (
    <div className={classes} onClick={onClose} {...restProps}>
      <div
        className={[css.drawer_content, classNameContent].join(" ")}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};
