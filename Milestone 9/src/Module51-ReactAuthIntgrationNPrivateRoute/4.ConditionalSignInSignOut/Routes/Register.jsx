import { createUserWithEmailAndPassword } from "firebase/auth";
import { Link } from "react-router";
import {auth} from "../../firebase.init"
import { use } from "react";
import { AuthContext } from "../Context/AuthContext";

function Register() {
    const { createUser } = use(AuthContext)
    const formSubmit = (event) => {
        event.preventDefault();
        const [name, email, password] = [
            event.target.name.value,
            event.target.email.value,
            event.target.password.value
        ];

        createUser(email, password)
            .then((result) => {
                console.log(result)
            }).catch((error) => {
                console.log(error);
            })
        
        
    }

    return(
        <form onSubmit={formSubmit} className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mx-auto">
            <div className="card-body">
                <fieldset className="fieldset">
                    <h1 className="text-5xl font-bold text-center">Register Now</h1>
                    <label className="label">Name</label>
                    <input type="text" className="input" placeholder="Name" name = "name"/>
                    <label className="label">Email</label>
                    <input type="email" className="input" placeholder="Email" name = "email"/>
                    <label className="label">Password</label>
                    <input type="password" className="input" placeholder="Password" name = "password"/>
                    <div><a className="link link-hover">Forgot password?</a></div>
                    <button className="btn btn-neutral mt-4">Register</button>
                </fieldset>
                <p>Already have an account? <Link className="underline text-blue-500" to="/login">Register</Link></p>
            </div>
        </form>
    )
}

export default Register;