import React from "react";
import { useSelector } from "react-redux";
import Header from "../../components/Header";
import Navigation from "../../components/Navigation";
import Balance from "../../components/Wallet/Balance/Balance";
import Filter from "../../components/Wallet/stats/Filter";
import allTransactions from "../../components/Wallet/stats/assetsForStats";
import CurrencyRates from "../../components/Wallet/CurrencyRates/CurrencyRates";
import { isMobile } from "../../redux/clientWidth/clientWidthSelectors";

const StatsView = () => {
  const _isMobile = useSelector(isMobile);
  return (
    <>
      <Header />
      <section>
        <Navigation />
        <Balance />
        {!_isMobile && <CurrencyRates />}
      </section>
      <main>
        <Filter allTransactions={allTransactions} />
      </main>
    </>
  );
};

export default StatsView;
