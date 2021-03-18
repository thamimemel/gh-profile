import Chart from "chart.js";
import React from "react";
import { Bar } from "react-chartjs-2";

const Graph = (props) => {
  let x = props.repos
  Chart.defaults.global.defaultFontColor = "white";
  const data = {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [
      {
        label: "# of Votes",
        data: [170, 19, 3, 5, 2, 3],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };
  return (
    <div>
      <p>{x.length}</p>
      <Bar
        data={data}
        width={150}
        height={300}
        options={{
          maintainAspectRatio: false,
          legend: { labels: { fontColor: "white" } },
        }}
      />
    </div>
  );
};

export default Graph;