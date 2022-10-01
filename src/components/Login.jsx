import "w3-css"
import {useState} from "react";
import {useNavigate} from "react-router-dom";
function Login() {
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('')
    const handleSubmit = async (event) => {
        event.preventDefault();
        const nav = useNavigate();
        alert("You have logged in as " + email);
        nav("hackathon2022/user-data")
    }
    return (
        <div className="w3-card-4">
            <div className="w3-container w3-green">
                <h2>Login</h2>
            </div>
            <form className="w3-container" onSubmit={handleSubmit}>
                <label>
                    Email
                </label>
                <input name="email" value={email} onChange={(e) => {
                    setEmail(e.target.value)
                }} className="w3-input" type="text" />

                <label>Password
                </label>
                <input name="password" value={password} onChange={(e) =>{
                    setPassword(e.target.value)
                }} className="w3-input" type="password" />
                <input type="submit" value="Submit">
                </input>
            </form>
        </div>
)
}

export default Login;