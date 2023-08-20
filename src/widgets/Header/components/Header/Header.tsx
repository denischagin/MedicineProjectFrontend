import { DrawerMenu } from "features/drawer-menu";
import { useState } from "react";
import { Link } from "shared/components/Link";
import { paths } from "shared/routes";
import css from "./Header.module.scss";
import burgerMenu from "widgets/Header/assets/burger-menu.svg";
import { Text } from "shared/components/Text";
import { useViewer } from "entites/viewer";
import { useLogout } from "entites/authentication";
import { Loader } from "shared/components/Loader";

export const Header = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const {
    currentViewer,
    setCurrentViewer,
    isLoading: isLoadingViewer,
  } = useViewer();

  const { mutate: logout, isLoading: isLoadingLogout } = useLogout();

  const handleLogout = () => {
    if (!currentViewer?.username) return;
    logout(currentViewer?.username, {
      onSuccess: () => setCurrentViewer(null),
      onError: () => setCurrentViewer(null),
    });
  };

  return (
    <header className={css.header}>
      <div className={css.wrapper}>
        <DrawerMenu
          isAuth={!!currentViewer}
          onClose={() => setOpenDrawer(false)}
          open={openDrawer}
          handleLogout={handleLogout}
        />
        <Text component="h1" fz="s36">
          DemoProject
        </Text>

        <nav className={css.nav}>
          {isLoadingViewer || isLoadingLogout ? (
            <Loader />
          ) : (
            <>
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
            </>
          )}
        </nav>

        {isLoadingViewer || isLoadingLogout ? (
          <Loader size="small" className={css.burger_menu} />
        ) : (
          <button
            className={css.burger_menu}
            onClick={() => setOpenDrawer(true)}
          >
            <img src={burgerMenu} alt="burder-menu" />
          </button>
        )}
      </div>
    </header>
  );
};
