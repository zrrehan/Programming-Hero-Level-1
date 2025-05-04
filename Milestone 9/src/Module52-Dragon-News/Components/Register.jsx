import { Link } from "react-router";
import HeaderUp from "./HeaderUp";

function Register() {
    return(
        <div>
            <HeaderUp></HeaderUp>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mx-auto mt-4">
                <div className="card-body">
                    <h1 className="text-4xl font-bold">Register now!</h1>
                    <fieldset className="fieldset">
                        <label className="label">Name</label>
                        <input type="email" className="input" placeholder="Name" />
                        <label className="label">Image</label>
                        <input type="email" className="input" placeholder="Image URL" />
                        <label className="label">Email</label>
                        <input type="email" className="input" placeholder="Email" />
                        <label className="label">Password</label>
                        <input type="password" className="input" placeholder="Password" />
                        <div><a className="link link-hover">Forgot password?</a></div>
                        <button className="btn bg-blackBtn text-white mt-4">Login</button>
                        <p>Already have an account? <Link to="/auth/login" className="text-blue-500 underline">Login Now</Link></p>
                    </fieldset>
                </div>
            </div>
        </div>
    )
}

export default Register;