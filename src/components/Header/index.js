import React from "react";
import { connect } from "react-redux";
// import {NavLink} from 'react-router-dom';
import { userName } from "../../redux/auth/authSelectors";
import { logout } from "../../redux/auth/authOperations";
import { ReactComponent as WalletImg } from "../../assets/WalletImg.svg";
import { ReactComponent as ExitArrow } from "../../assets/Arrow_exit.svg";
import styles from "./Header.module.css";

const Header = ({ userName, onLogout }) => {
  return (
    <section className={styles.headerContainer}>
      <span>
        <WalletImg /> Wallet
      </span>
      <ul>
        <span className={styles.headerUserName}>{userName}</span>
        <button
          className={styles.headerButton}
          type="button"
          onClick={onLogout}
        >
          <ExitArrow />
          Выйти
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
