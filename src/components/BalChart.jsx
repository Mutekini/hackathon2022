import React from 'react';
import { Line } from 'react-chartjs-2'
import { Chart, registerables } from 'chart.js';

function BalChart(){
  Chart.register(...registerables)
  const data = {
    labels: ["Aug", "Sep", "Oct"], //Temporary
    datasets: [
      {
        label: "Balance",
        data: [33, 54, 10], //Temporary
        fill: true,
        backgroundColor: "rgba(75,192,192,0.2)",
        borderColor: "rgba(75,192,192,1)"
      }
    ]
  }
  return (
    <div className="BalChart">
      <Line data={data} />
    </div>
  )
}
export default BalChart;
