import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import Lottie from "lottie-react";
import loginAnimation from "../Assets/loginAnimation.json"

function Login() {
    const { loginFirebase } = useContext(AuthContext);
    function login(event) {
        event.preventDefault();
        const [email, password] = [event.target.email.value, event.target.password.value]
        console.log(email, password)
        loginFirebase(email, password);
    }
    return(
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <Lottie loop={true} animationData={loginAnimation} style={{width: "300px"}}></Lottie>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <div className="card-body">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <form onSubmit = {login} className="fieldset">
                            <label className="label">Email</label>
                            <input type="email" name = "email" className="input" placeholder="Email" />
                            <label className="label">Password</label>
                            <input type="password" name = "password" className="input" placeholder="Password" />
                            <button className="btn btn-neutral mt-4">Login</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;