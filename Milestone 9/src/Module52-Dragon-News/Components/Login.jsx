import { Link, useNavigate } from "react-router";
import HeaderUp from "./HeaderUp";
import { IoIosArrowBack } from "react-icons/io";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";

function Login() {
    const {login} = useContext(AuthContext);
    let navigate = useNavigate()
    function submitHandler(event) {
        event.preventDefault()
        const [email, password] = [event.target.email.value, event.target.password.value]
        login(email, password);
        navigate("/");
    }

    return(
        <div>
            <HeaderUp></HeaderUp>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mx-auto mt-4">
                <div className="card-body">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <form  onSubmit = {submitHandler} className="fieldset">
                        <label className="label">Email</label>
                        <input type="email" className="input" placeholder="Email" name = "email" />
                        <label className="label">Password</label>
                        <input type="password" className="input" placeholder="Password" name = "password"/>
                        <div><a className="link link-hover">Forgot password?</a></div>
                        <button className="btn bg-blackBtn text-white mt-4">Login</button>
                        <p>Don't have any account? <Link to = "/auth/register" className="text-blue-500 underline">Register Now</Link></p>
                    </form>
                    <Link to = "/">
                        <button className="btn">
                            <IoIosArrowBack />
                            Go Back to Home
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Login;