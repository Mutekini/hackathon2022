import { useState } from 'react'
import './App.css'
import Transaction from './Transaction.js'
import BalChart from './BalChart.jsx'
import { CategoryScale } from 'chart.js'
function App() {
  return (
    <div className="App">
      <BalChart />
    </div>
  )
}
console.log(new Transaction())
export default App
