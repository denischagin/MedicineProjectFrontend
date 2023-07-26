import React, { FC } from "react";
import { Drawer } from "shared/components/Drawer";
import { Link } from "shared/components/Link";
import { paths } from "shared/routes";
import css from "./DrawerMenu.module.css";

interface DrawerMenuProps {
  onClose: () => void;
  open: boolean;
}

export const DrawerMenu: FC<DrawerMenuProps> = ({ onClose, open }) => {
  return (
    <Drawer onClose={onClose} open={open}>
      <div className={css.drawer_menu}>
        <Link to={paths.login}>Войти</Link>

        <Link to={paths.registration}>Регистрация</Link>
      </div>
    </Drawer>
  );
};
