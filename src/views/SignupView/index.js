import React from "react";

import Layout from "../Layout/";
import Signup from "../../components/authComponents/SignUp";

import styles from "./SignupView.module.css";

const SignupView = () => {
  React.useEffect(() => (document.title = "Регистрация || Wallet"), []);
  return (
    <Layout>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.img} />
          <p className={styles.title}>Finance App</p>
        </div>
        <div className={styles.formContainer}>
          <Signup />
        </div>
      </div>
    </Layout>
  );
};

export default SignupView;
