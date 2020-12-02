import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getUserName } from "../../redux/auth/authSelectors";
import { logout } from "../../redux/auth/authOperations";
import { ReactComponent as ExitArrow } from "../../assets/icons/Arrow_exit.svg";
import styles from "./Header.module.css";

const Header = () => {
  const dispatch = useDispatch();
  const userName = useSelector(getUserName);
  const onLogout = () => dispatch(logout());
  return (
    <section className={styles.headerContainer}>
      <NavLink to="/">
        <div className={styles.logo}></div>
      </NavLink>
      <ul className={styles.ulExit}>
        <p className={styles.headerUserName}>{userName}</p>
        <button
          className={styles.headerButton}
          type="button"
          onClick={onLogout}
        >
          <ExitArrow />
          <span className={styles.headerExitWord}>Выход</span>
        </button>
      </ul>
    </section>
  );
};
export default Header;
