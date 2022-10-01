import './App.css'
import Transaction from './Transaction.js'
import 'w3-css'
import NavBar from "./NavBar.jsx";
import spacePic from '../assets/space.svg'
function App() {
  return (
    <div className={"App"}>
        <div className="w3-container w3-teal">
            <h1>Maidenless Financial Manager</h1>
        </div>
        <NavBar />
        <img
        src={spacePic}
        className="logo space"
        style={{ height: 1920, width: 1200}}
        alt="Space logo"
        />
    </div>
  )
}
console.log(new Transaction())
export default App
