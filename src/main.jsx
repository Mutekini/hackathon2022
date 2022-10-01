import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App'
import './components/index.css'
import {BrowserRouter, HashRouter, Route, Routes} from "react-router-dom";
import BalChart from "./components/BalChart.jsx";
import Login from "./components/Login.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <HashRouter forceRefresh={true}>
          <Routes>
              <Route path="/" element={<App />}/>
              <Route path="user-data" element={<BalChart />}></Route>
              <Route path="login" element={<Login />}></Route>
          </Routes>
      </HashRouter>
  </React.StrictMode>
)

