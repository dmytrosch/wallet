import React from "react";
import Input from "../common/Input";
import Header from "../components/Header";
import Navigation from "../components/Navigation";
import Balance from "../components/Wallet/Balance/Balance";
import CurrencyRates from "../components/Wallet/CurrencyRates/CurrencyRates";
import TransactionsTable from "../components/Wallet/TransactionsTable";
import styles from "./MainView.module.css";

const MainView = () => {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <div className={styles.navigation}>
          <Navigation />
          <Balance />
          <CurrencyRates />
        </div>
        <div className={styles.transactions}>
          <br></br>
          <TransactionsTable />
        </div>
      </div>
    </>
  );
};

export default MainView;
