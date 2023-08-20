import React from "react";
import styles from "./404.module.scss";
import { NavLink } from "react-router-dom";

export const NotFoundPage = () => {
  return (
    <div className={styles.notFoundPage}>
      <h1>404</h1>
      <p>Страница не найдена</p>
      <NavLink to="/">На главную</NavLink>
    </div>
  );
};
