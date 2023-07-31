import React from "react";
import css from "./PageLoader.module.css";

export const PageLoader = () => {
  return (
    <div className={css.pageLoader}>
      <span className={css.loader} />
    </div>
  );
};
