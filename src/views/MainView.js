import React from "react";
import Header from "../components/Header";
import Navigation from "../components/Navigation";
import Balance from "../components/Wallet/Balance";
import CurrencyRates from "../components/Wallet/CurrencyRates";
import TransactionsTable from "../components/Wallet/TransactionsTable";

const MainView = () => {
  return (
    <>
      <Header />
      <section>
        <Navigation />
        <Balance />
      </section>
      <main>
        <CurrencyRates />
        <TransactionsTable />
      </main>
    </>
  );
};

export default MainView;
