import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";

function Login() {
    const { loginUser } = useContext(AuthContext);

    function formHandler(event) {
        event.preventDefault();
        const [email, password] = [event.target.email.value, event.target.password.value];
        
        // connect with the firebase 
        loginUser(email, password).then(alert("user logged in"))
    }
    return(
        <form onSubmit={formHandler} className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
            <legend className="fieldset-legend">Login</legend>

            <label className="label">Email</label>
            <input type="email" className="input" placeholder="Email" name = "email"/>

            <label className="label">Password</label>
            <input type="password" className="input" placeholder="Password" name = "password"/>

            <button className="btn btn-neutral mt-4">Login</button>
        </form>
    )
}
export default Login;