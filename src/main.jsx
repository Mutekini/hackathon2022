import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App'
import './components/index.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BalChart from "./components/BalChart.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <BrowserRouter forceRefresh={true}>
          <Routes>
              <Route path="/hackathon2022" element={<App />}/>
              <Route path="/hackathon2022/user-data" element={<BalChart />}></Route>
          </Routes>
      </BrowserRouter>
  </React.StrictMode>
)

