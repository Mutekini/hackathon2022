import React from 'react';
import { Line } from 'react-chartjs-2'
import { Chart, registerables } from 'chart.js';
import Transaction from './Transaction.js'
import DaysInMonth from '../api/Date.js'


function BalChart(){
  Chart.register(...registerables)
  const transaction = new Transaction("Walmart", 30) //Temporary
  const currentYear = transaction.getDate().substring(0,4);
  const currentMonth = transaction.getDate().substring(6,7);
  const currentDaysInMonth = DaysInMonth(currentYear,currentMonth)
  const daysArray = Array(currentDaysInMonth).fill().map((_, idx) => idx + 1)
<<<<<<< HEAD
<<<<<<< Updated upstream
<<<<<<< Updated upstream
=======
>>>>>>> 2a96b24bd84850fcebe66e4fc4a4d0d610cb8e34
  const onlyshow = daysArray.filter(x => x - 1 === transaction.getCurDay())
=======
=======
>>>>>>> Stashed changes
  //if(daysArray.filter(=> x - 1 === transaction.getCurDay()
  //{

  //}
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
<<<<<<< Updated upstream
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
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
