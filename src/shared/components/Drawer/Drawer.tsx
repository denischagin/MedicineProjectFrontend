import { FC, HTMLAttributes, ReactNode } from "react";
import { createPortal } from "react-dom";
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
  const classes = [css.drawer, classNameWrapper];
  open && classes.push(css.active);

  const classesContent = [css.drawer_content];
  classNameContent && classesContent.push(classNameContent);

  return createPortal(
    <div className={classes.join(" ")} onClick={onClose} {...restProps}>
      <div
        className={classesContent.join(" ")}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>,
    document.body
  );
};
