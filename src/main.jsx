import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App'
import './components/index.css'
import {BrowserRouter, HashRouter, Route, Routes} from "react-router-dom";
import Login from "./components/Login.jsx";
import BalChart from "./components/BalChart.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <HashRouter forceRefresh={true}>
          <Routes>
              <Route path="/hackathon2022" element={<App />}/>
              <Route path="/hackathon2022/login" element={<Login />}/>
              <Route path="/hackathon2022/user-data" element={<BalChart />}></Route>
          </Routes>
      </HashRouter>
  </React.StrictMode>
)

