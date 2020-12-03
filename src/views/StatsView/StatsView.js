import React from "react";
import Filter from "../../components/Wallet/stats/Filter";
import Layout from "../authLayout";
const StatsView = () => {
  React.useEffect(() => (document.title = "Статистика || Wallet"), []);
  return (
    <Layout>
      <Filter />
    </Layout>
  );
};

export default StatsView;
