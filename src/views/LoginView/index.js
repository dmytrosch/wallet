import React from "react";
import Layout from "../Layout";
import Login from "../../components/authComponents/LogIn";
import styles from "./LoginView.module.css";

const LoginView = () => {
  React.useEffect(() => (document.title = "Вход || Wallet"), []);
  return (
    <Layout>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.img} />
          <p className={styles.title}>Finance App</p>
        </div>
        <div className={styles.formContainer}>
          <Login />
        </div>
      </div>
    </Layout>
  );
};

export default LoginView;
