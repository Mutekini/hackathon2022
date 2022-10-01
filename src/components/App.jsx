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
        <div className ="Icons">
          <img src={spacePic} className="logo space" alt="Space logo" />
        </div>
    </div>

  )
}
console.log(new Transaction())
export default App
