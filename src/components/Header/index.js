import React from "react";
import { connect } from "react-redux";
import { userName } from "../../redux/auth/authSelectors";
import { logout } from "../../redux/auth/authOperations";
import { ReactComponent as ExitArrow } from "../../assets/icons/Arrow_exit.svg";
import styles from "./Header.module.css";

const Header = ({ userName, onLogout }) => {
  return (
    <section className={styles.headerContainer}>
        <div className={styles.logo}></div>
        <ul className={styles.ulExit}>
            <p className={styles.headerUserName}>userName</p>
            <button className={styles.headerButton} type="button" onClick={onLogout}><ExitArrow/>
                <span className={styles.headerExitWord}>Выход</span>
            </button>
        </ul>
    
    </section>
  );
};

const mapStateToProps = (state) => ({
  userName: userName(state),
});
const mapDispatchToProps = {
  onLogout: logout,
};
export default connect(mapStateToProps, mapDispatchToProps)(Header);
