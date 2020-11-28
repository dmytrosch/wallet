import React from "react";
import { Doughnut } from "react-chartjs-2";

const StatsGraph = ({ chartData }) => {
  const chartOptions = {
    options: {
      plugins: {
        labels: {
          render: "label",
          fontSize: 12,
          fontColor: "#fff",
          textShadow: true,
        },
      },
      legend: {
        display: false,
      },
    },
  };

  return (
    <div>
      <Doughnut
        data={chartData}
        width={150}
        height={150}
        options={chartOptions.options}
      />
    </div>
  );
};

export default StatsGraph;
