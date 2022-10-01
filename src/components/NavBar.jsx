import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import App from "./App.jsx";
import 'w3-css'

function NavBar() {
    return (
            <div className={"w3-bar w3-border-blue"}>
                <a href="/" className={"w3-bar-item w3-hover-amber"}>Home</a>
                <a href="#/login" className={"w3-bar-item w3-hover-amber"}>Login</a>
            </div>
    )
}

export default NavBar;