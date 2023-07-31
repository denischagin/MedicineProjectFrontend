import { DrawerMenu } from "features/drawer-menu";
import { useState } from "react";
import { Link } from "shared/components/Link";
import { paths } from "shared/routes";
import css from "./Header.module.css";
import burgerMenu from "widgets/Header/assets/burger-menu.svg";
import { Text } from "shared/components/Text";
import { useViewer } from "entites/viewer";
import { useLogout } from "entites/authentication/libs/hooks/logout";

export const Header = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const { currentViewer, setCurrentViewer } = useViewer();

  const { isSuccess, mutate: logout } = useLogout();

  const handleLogout = () => {
    if (!currentViewer?.username) return;
    logout(currentViewer?.username, {
      onSuccess: () => setCurrentViewer(null),
    });
  };

  return (
    <header className={css.header}>
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

        <nav className={css.nav}>
          {currentViewer ? (
            <Text component="button" onClick={handleLogout}>
              Выйти
            </Text>
          ) : (
            <ul className={css.menu}>
              <Text component="li">
                <Link to={paths.login}>Войти</Link>
              </Text>

              <Text component="li">
                <Link to={paths.registration}>Регистрация</Link>
              </Text>
            </ul>
          )}
        </nav>

        <button className={css.burger_menu} onClick={() => setOpenDrawer(true)}>
          <img src={burgerMenu} alt="burder-menu" />
        </button>
      </div>
    </header>
  );
};
