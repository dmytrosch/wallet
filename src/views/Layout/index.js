import React from "react";
import { CSSTransition } from "react-transition-group";
// import { useSelector } from "react-redux";
// import { isAuthentificated } from "../../redux/auth/authSelectors";

// import Header from "../../Header";

import ellipseVioletAnimation from "./ellipseViolet.animation.module.css";
import ellipseOrangeAnimation from "./ellipseOrange.animation.module.css";
import styles from "./Layout.module.css";

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
  // const isAuth = useSelector(isAuthentificated);

  return (
    <div className={styles.container}>
      {/* {isAuth && <Header />} */}
      {children}
      <Background />
    </div>
  );
};

export default Layout;
