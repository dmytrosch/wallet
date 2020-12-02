import React from "react";
import { Doughnut } from "react-chartjs-2";
import styles from "./styles/StatsGraph.module.css";
import { useSelector } from "react-redux";
import { getBalance } from "../../../redux/wallet/walletSelectors";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import formattingNumber from "../../../utils/formattingNumber";

const StatsGraph = ({ arrData }) => {
  const balance = useSelector(getBalance);
  const chartOptions = {
    options: {
      cutoutPercentage: 65,
      plugins: {
        labels: {
          render: "percentage",
          fontSize: 12,
          fontColor: "#fff",
          textShadow: true,
        },
      },
      legend: {
        display: false,
      },
      tooltips: {
        enabled: false,
      },
    },
  };
  const diagramData = () => {
    let option = {
      labels: arrData.map(({ category }) => category),
      datasets: [
        {
          label: "wallet",
          fill: false,
          lineTension: 0.1,
          borderWidth: 0,
          data: arrData.map(({ totalAmount }) => totalAmount),
          backgroundColor: arrData.map(({ color }) => color),
        },
      ],
    };
    return option;
  };

  return (
    <div className={styles.container}>
      {arrData.length === 0 && (
        <Loader
          type="ThreeDots"
          color="#00BFFF"
          height={200}
          width={200}
          timeout={30000}
        />
      )}
      {arrData.length !== 0 && (
        <>{formattingNumber(balance, styles.balance, "₴ ")}</>
      )}
      <Doughnut
        data={diagramData}
        width={150}
        height={150}
        options={chartOptions.options}
      />
    </div>
  );
};

export default StatsGraph;
