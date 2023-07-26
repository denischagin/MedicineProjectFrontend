import { DrawerMenu } from "features/drawer-menu";
import { useState } from "react";
import { Link } from "shared/components/Link";
import { paths } from "shared/routes";
import css from "./Header.module.css";
import burgerMenu from 'widgets/Header/assets/burger-menu.svg'

export const Header = () => {
  const [openDrawer, setOpenDrawer] = useState(true);

  return (
    <div className={css.header}>
      <DrawerMenu onClose={() => setOpenDrawer(false)} open={openDrawer} />

      <div className={css.wrapper}>
        <h1>DemoProject</h1>

        <div className={css.menu}>
          <Link to={paths.login}>Войти</Link>
          <Link to={paths.registration}>Регистрация</Link>
        </div>

        <div className={css.burger_menu} onClick={() => setOpenDrawer(true)}>
          <img src={burgerMenu} alt="burder-menu" />
        </div>
      </div>
    </div>
  );
};
