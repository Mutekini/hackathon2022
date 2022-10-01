import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App'
import './components/index.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <BrowserRouter forceRefresh={true}>
          <Routes>
              <Route path="/" element={<App />}/>
              <Route path={"/login"} element={<Login />}/>
          </Routes>
      </BrowserRouter>
  </React.StrictMode>
)
