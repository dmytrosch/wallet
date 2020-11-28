import React from "react";
import { CSSTransition } from "react-transition-group";

import Login from "../components/authComponents/LogIn";


import styles from "./LoginView.module.css";
import elipseOneAnimation from "./elipseOne.animation.module.css";
import elipseTwoAnimation from "./elipseTwo.animation.module.css";

const LoginView = () => (
  <div className={styles.container}>
    <div className={styles.header}>
      <div className={styles.img}></div>
      <p className={styles.title}>Finance App</p>
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

    <div className={styles.loginContainer}>
      <div className={styles.login}>
        <Login />
      </div>
    </div>
  </div>
);

export default LoginView;
