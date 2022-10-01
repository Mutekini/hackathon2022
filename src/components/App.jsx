import './App.css'
import Transaction from './Transaction.js'
import 'w3-css'
import NavBar from "./NavBar.jsx";
function App() {
  return (
    <div className={"App"}>
        <div className="w3-container w3-teal">
            <h1>Maidenless Financial Manager</h1>
        </div>
        <NavBar />
    </div>

  )
}
console.log(new Transaction())
export default App
