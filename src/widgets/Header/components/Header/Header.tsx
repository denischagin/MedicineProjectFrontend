import { DrawerMenu } from "features/drawer-menu";
import { useState } from "react";
import { Link } from "shared/components/Link";
import { paths } from "shared/routes";
import css from "./Header.module.css";
import burgerMenu from "widgets/Header/assets/burger-menu.svg";
import { Text } from "shared/components/Text";
import { useViewer } from "entites/viewer";

export const Header = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const { currentViewer } = useViewer();

  const handleLogout = () => {};

  return (
    <div className={css.header}>
      <DrawerMenu
        isAuth={!!currentViewer}
        onClose={() => setOpenDrawer(false)}
        open={openDrawer}
        handleLogout={handleLogout}
      />

      <div className={css.wrapper}>
        <Text component="h1" fz="s36">
          DemoProject
        </Text>

        <div className={css.menu}>
          {currentViewer ? (
            <Text component="button" onClick={handleLogout}>
              Выйти
            </Text>
          ) : (
            <>
              <Link to={paths.login}>Войти</Link>
              <Link to={paths.registration}>Регистрация</Link>
            </>
          )}
        </div>

        <div className={css.burger_menu} onClick={() => setOpenDrawer(true)}>
          <img src={burgerMenu} alt="burder-menu" />
        </div>
      </div>
    </div>
  );
};
