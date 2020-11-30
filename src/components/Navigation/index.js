import React from "react";
import { NavLink } from 'react-router-dom';
import styles from "./Navigation.module.css";

const Navigation = () => {
 
  return (
    <div className={styles.navContainer}>
      <ul className={styles.navList}>
        <li key="home" className={styles.navListItem}>
          <NavLink to="/home" className={[styles.activeNavLink, styles.box].join(' ')}>
            <div className={[styles.img, styles.home ].join(' ')}/>  
            <p className={styles.navListType}>Главная</p>
          </NavLink>
        </li>
        <li key="statistics" className={styles.navListItem}>
          <NavLink to="/statistics" className={[styles.activeNavLink, styles.box].join(' ')}>
          <div className={[styles.img, styles.statistics ].join(' ')}/>
          <p className={styles.navListType}>Статистика</p>
          </NavLink>
        </li>
        <li key="currency" className={styles.navListItem} >
          <NavLink to="/currency" exact className={styles.activeNavLink}>
          <div className={[styles.img, styles.currency].join(' ')}/>
            <span className={styles.navListType}></span>
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
