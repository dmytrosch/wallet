import React from 'react';
// import { NavLink } from 'react-router-dom';

import home from '../../assets/icons/Home.svg';
import dollar from '../../assets/icons/Dollar.svg';
import statistics from '../../assets/icons/Statistics.svg';
import styles from './Navigation.module.css';

const Navigation = () => {
 
  return (
    <div>
      <ul className={styles.navList}>
        <li key="home" className={styles.navListItem}>
          <a href="/home" className={styles.activeNavLink}>
              <img src={home} alt="main page" className={styles.navListItemIcon}/>
              
            <span className={styles.navListType}>Главная</span>
          </a>
        </li>
        <li key="statistics" className={styles.navListItem}>
          <a href="/statistics" className={styles.activeNavLink}>
          <img src={statistics} alt="statistics" className={styles.navListItemIcon}/>
            <span className={styles.navListType}>Статистика</span>
          </a>
        </li>
        <li key="currency" className={styles.navListItem}>
          <a href="/currency" exact className={styles.activeNavLink}>
          <img src={dollar} alt="statistics" className={styles.navListItemIcon}/>
            <span className={styles.navListType}></span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
