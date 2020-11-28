import React from "react";
import { CSSTransition } from "react-transition-group";
// import { useSelector } from "react-redux";
// import { isAuthentificated } from "../../redux/auth/authSelectors";

// import Header from "../../Header";

import elipseOneAnimation from "./elipseOne.animation.module.css";
import elipseTwoAnimation from "./elipseTwo.animation.module.css";
import styles from "./Layout.module.css";

export default function Layout({ children }) {
  // const isAuth = useSelector(isAuthentificated);

  return (
    <div className={styles.container}>
      {/* {isAuth && <Header />} */}
      {children}
      <CSSTransition
        in={true}
        appear={true}
        classNames={elipseOneAnimation}
        timeout={500}
      >
        <div className={styles.elipseOne}></div>
      </CSSTransition>
      <CSSTransition
        in={true}
        appear={true}
        classNames={elipseTwoAnimation}
        timeout={500}
      >
        <div className={styles.elipseTwo}></div>
      </CSSTransition>
    </div>
  );
}
