import React from "react";
import Header from "../components/Header";
import Navigation from "../components/Navigation";
import Balance from "../components/Wallet/Balance/Balance";
import StatsGraph from "../components/Wallet/stats/StatsGraph";
import Filter from "../components/Wallet/stats/Filter";
import StatsTable from "../components/Wallet/stats/StatsTable";

const StatsView = () => {
  return (
    <>
      <Header />
      <section>
        <Navigation />
        <Balance />
      </section>
      <main>
        <StatsGraph />
        {/* <Filter /> */}
        <StatsTable />
      </main>
    </>
  );
};

export default StatsView;
