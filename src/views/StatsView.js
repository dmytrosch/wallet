import React from "react";
import Header from "../components/Header";
import Navigation from "../components/Navigation";
import Balance from "../components/Wallet/Balance/Balance";
import Filter from "../components/Wallet/stats/Filter";
// import allTransactions from "../components/Wallet/stats/assetsForStats";
const StatsView = () => {
  return (
    <>
      <Header />
      <section>
        <Navigation />
        <Balance />
      </section>
      <main>
        <Filter />
      </main>
    </>
  );
};

export default StatsView;
