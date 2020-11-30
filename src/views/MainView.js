import React from "react";
import Button from "../common/Button";
import Layout from "../views/Layout";
import Navigation from "../components/Navigation";
import Balance from "../components/Wallet/Balance/Balance";
import CurrencyRates from "../components/Wallet/CurrencyRates/CurrencyRates";
import TransactionsTable from "../components/Wallet/TransactionsTable";
import styles from "./MainView.module.css";

const MainView = () => {
  return (
    <>
      <Layout>
        <div className={styles.container}>
          <div className={styles.tabletContainer}>
            <div className={styles.navigation}>
              <Navigation />
              <Balance />
            </div>
            <div className={styles.balance}>
              <CurrencyRates />
            </div>
          </div>
          <div className={styles.transactions}>
            <br></br>
            <TransactionsTable />
          </div>
        </div>
        <div className={styles.btnContainer}>
          <Button shape="circle" color="green">
            <span className={styles.btnLogo}>+</span>
          </Button>
        </div>
      </Layout>
    </>
  );
};

export default MainView;
