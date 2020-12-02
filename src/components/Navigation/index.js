import React from "react";
import { NavLink } from "react-router-dom";
import classNames from "classnames";
import styles from "./Navigation.module.css";

const Navigation = () => {
  return (
    <div className={styles.navContainer}>
      <ul className={styles.navList}>
        <li key="home" className={styles.navListItem}>
          <NavLink
            to="/"
            exact
            className={styles.box}
            activeClassName={styles.activeLink}
          >
            <div className={classNames(styles.img, styles.home)} />
            <p className={styles.navListType}>Главная</p>
          </NavLink>
        </li>
        <li key="statistics" className={styles.navListItem}>
          <NavLink
            to="/statistics"
            className={styles.box}
            activeClassName={styles.activeLink}
          >
            <div className={classNames(styles.img, styles.statistics)} />
            <p className={styles.navListType}>Статистика</p>
          </NavLink>
        </li>
        <li key="currency" className={styles.navListItem}>
          <NavLink
            to="/currency"
            exact
            className={styles.box}
            activeClassName={styles.activeLink}
          >
            <div className={classNames(styles.img, styles.currency)}/>
            <span className={styles.navListType}></span>
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
