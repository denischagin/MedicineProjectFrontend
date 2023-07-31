import { Routing } from "app/routes";
import React, { Suspense } from "react";
import { Outlet } from "react-router";
import { PageLoader } from "shared/components/PageLoader";
import { Header } from "widgets/Header";
import css from "./Layout.module.css";

export const Layout = () => {
  return (
    <div className={css.layout}>
      <Header />

      <Suspense fallback={<PageLoader />}>
        <main className={css.main}>
          <Outlet />
        </main>
      </Suspense>
    </div>
  );
};
