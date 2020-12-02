import React from "react";
import { CSSTransition } from "react-transition-group";
import { useSelector } from "react-redux";
import { isLoading } from "../../redux/loading/loadingSelector";

import Header from "../../components/Header";
import Navigation from "../../components/Navigation";
import Balance from "../../components/Wallet/Balance/Balance";
import CurrencyRates from "../../components/Wallet/CurrencyRates/CurrencyRates";

import ellipseVioletAnimation from "./ellipseViolet.animation.module.css";
import ellipseOrangeAnimation from "./ellipseOrange.animation.module.css";
import styles from "./authLayout.module.css";

const semitransparentStyle = {
  opacity: "0.5",
};

const Background = () => {
  const config = {
    in: true,
    appear: true,
    timeout: 500,
  };

  return (
    <div className={styles.background}>
      <CSSTransition {...config} classNames={ellipseVioletAnimation}>
        <div className={styles.ellipseViolet} />
      </CSSTransition>
      <CSSTransition {...config} classNames={ellipseOrangeAnimation}>
        <div className={styles.ellipseOrange} />
      </CSSTransition>
    </div>
  );
};

const Layout = ({ children }) => {
  const loading = useSelector(isLoading);
  return (
    <div
      className={styles.container}
      style={loading ? semitransparentStyle : {}}
    >
      <>
        <Header />
        <div className={styles.sideBar}>
          <div className={styles.sideBarUp}>
            <Navigation />
            <Balance />
          </div>
          <div className={styles.sideBarDown}>
            <CurrencyRates />
          </div>
        </div>
        <div className={styles.mainView}>{children}</div>
      </>

      <Background />
    </div>
  );
};

export default Layout;
