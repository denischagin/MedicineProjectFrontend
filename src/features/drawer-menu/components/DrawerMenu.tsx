import React, { FC } from "react";
import { Drawer } from "shared/components/Drawer";
import { Link } from "shared/components/Link";
import { paths } from "shared/routes";
import css from "./DrawerMenu.module.css";
import infoIcon from "features/drawer-menu/assets/info.svg";
import loginIcon from "features/drawer-menu/assets/log-in.svg";
import arrowIcon from "features/drawer-menu/assets/arrow.svg";

interface DrawerMenuProps {
  onClose: () => void;
  open: boolean;
}

export const DrawerMenu: FC<DrawerMenuProps> = ({ onClose, open }) => {
  return (
    <Drawer onClose={onClose} open={open} classNameContent={css.drawer_content}>
      <div className={css.drawer_menu}>
        <div
          className={[css.menu_item, css.menu_item_arrow].join(" ")}
          onClick={onClose}
        >
          <img src={arrowIcon} alt="arrow" />
        </div>

        <Link className={css.menu_item} to={paths.login} onClick={onClose}>
          <p className={css.menu_item_text}>Войти</p>
          <img src={loginIcon} alt="login" />
        </Link>

        <Link
          className={css.menu_item}
          to={paths.registration}
          onClick={onClose}
        >
          <p className={css.menu_item_text}>Регистрация</p>
        </Link>

        <Link className={css.menu_item} to={paths.info} onClick={onClose}>
          <p className={css.menu_item_text}>О нас</p>
          <img src={infoIcon} alt="info" />
        </Link>
      </div>
    </Drawer>
  );
};
