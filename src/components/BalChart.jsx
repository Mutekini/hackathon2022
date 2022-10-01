import React from 'react';
import { Line } from 'react-chartjs-2'
import { Chart, registerables } from 'chart.js';
import Transaction from './Transaction.js'
import DaysInMonth from '../api/Date.js'
import LineData from '../api/LineData.js'


function BalChart(){
  Chart.register(...registerables)
  const transaction = new Transaction("Walmart", 30) //Temporary
  const currentYear = transaction.getDate().substring(0,4);
  const currentMonth = transaction.getDate().substring(6,7);
  const currentDaysInMonth = DaysInMonth(currentYear,currentMonth)
  const daysArray = Array(currentDaysInMonth).fill().map((_, idx) => idx + 1)
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Monthly Balance',
      },
    },
  };
  const data = {
    labels: daysArray,
    datasets: [
      {
        label: "Balance",
        data: [], //Temporary
        fill: true,
        backgroundColor: "rgba(75,192,192,0.2)",
        borderColor: "rgba(75,192,192,1)"
      }
    ]
  }
  return (
    <div className="BalChart">
      <Line options={options} data={data} />
    </div>
  )
}
export default BalChart;
