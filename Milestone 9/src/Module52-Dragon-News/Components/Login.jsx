import { Link } from "react-router";
import HeaderUp from "./HeaderUp";
import { IoIosArrowBack } from "react-icons/io";

function Login() {
    return(
        <div>
            <HeaderUp></HeaderUp>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mx-auto mt-4">
                <div className="card-body">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <fieldset className="fieldset">
                        <label className="label">Email</label>
                        <input type="email" className="input" placeholder="Email" />
                        <label className="label">Password</label>
                        <input type="password" className="input" placeholder="Password" />
                        <div><a className="link link-hover">Forgot password?</a></div>
                        <button className="btn bg-blackBtn text-white mt-4">Login</button>
                        <p>Don't have any account? <Link to = "/auth/register" className="text-blue-500 underline">Register Now</Link></p>
                    </fieldset>
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