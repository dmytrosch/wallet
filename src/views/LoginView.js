import React from "react";
import styles from "./LoginView.module.css";
import Login from "../components/authComponents/LogIn";
import Input from "../common/Input";

const LoginView = () => {
  return (
    <>
      <div className={styles.loginContainer}>
        <Input type="email" className="email" />

        <Input type="text" className="name" />

        <Input type="password" className="password" />
        {/* <div className={styles.leftBg}>
          <div className={styles.bgContainer}></div>
          <div className={styles.eclipsContainer}>
            <h2 className={styles.appTitle}>Finance App</h2>
          </div>
        </div>
        <div className={styles.rightBg}>
          <div className={styles.pinkEclipsContainer}></div>
        </div> */}
      </div>
      {/* <Login /> */}
    </>
  );
};

export default LoginView;
