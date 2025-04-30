import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../Context/AuthContext";
import { use } from "react";

function Login() {
    const { loginUser } = use(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    console.log(location);


    function formHandler(event) {
        event.preventDefault();
        const [email, password] = [event.target.email.value, event.target.password.value];
        loginUser(email, password)
            .then((result) => {
                console.log(result);
                navigate(location?.state ? location.state : "/" );
            }).catch((error) => {
                console.log(error.message);
            })
    }
    return(
        <form onSubmit = {formHandler} className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mx-auto">
            <div className="card-body">
                <fieldset className="fieldset">
                    <h1 className="text-5xl font-bold text-center">Login Now</h1>
                    <label className="label">Email</label>
                    <input type="email" className="input" placeholder="Email" name = "email"/>
                    <label className="label">Password</label>
                    <input type="password" className="input" placeholder="Password" name = "password" />
                    <div><a className="link link-hover">Forgot password?</a></div>
                    <button className="btn btn-neutral mt-4">Login</button>
                </fieldset>
                <p>New to this site? Please <Link className="underline text-blue-500" to = "/Register">Register</Link></p>
            </div>
        </form>
    )
}

export default Login;