import { Link, useNavigate } from "react-router";
import HeaderUp from "./HeaderUp";
import { IoIosArrowBack } from "react-icons/io";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";

function Register() {
    const { createUser, updateUser } = useContext(AuthContext);
    let navigate = useNavigate();
    function submitHandler(event) {
        event.preventDefault();
        const [ name, url, email, password ] = [event.target.name.value, event.target.url.value, event.target.email.value, event.target.password.value]
        
        createUser(email, password)
            .then((result) => {
                console.log(result);
                updateUser(name, url)
                navigate("/");
            })
    }


    return(
        <div>
            <HeaderUp></HeaderUp>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mx-auto mt-4">
                <div className="card-body">
                    <h1 className="text-4xl font-bold">Register now!</h1>
                    <form onSubmit={submitHandler} className="fieldset">
                        <label className="label">Name</label>
                        <input type="text" className="input" placeholder="Name" name = "name"/>
                        <label className="label">Image</label>
                        <input type="text" className="input" placeholder="Image URL" name = "url"/>
                        <label className="label">Email</label>
                        <input type="email" className="input" placeholder="Email" name = "email"/>
                        <label className="label">Password</label>
                        <input type="password" className="input" placeholder="Password" name = "password"/>
                        <button className="btn bg-blackBtn text-white mt-4">Register</button>
                        <p>Already have an account? <Link to="/auth/login" className="text-blue-500 underline">Login Now</Link></p>
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

export default Register;