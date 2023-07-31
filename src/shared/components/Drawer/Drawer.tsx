import { FC, HTMLAttributes, ReactNode } from "react";
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
  const defaultClasses = [css.drawer, classNameWrapper];

  const classes = open
    ? [...defaultClasses, css.active].join(" ").trim()
    : defaultClasses.join(" ").trim();

  return (
    <div className={classes} onClick={onClose} {...restProps}>
      <div
        className={[css.drawer_content, classNameContent].join(" ").trim()}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};
