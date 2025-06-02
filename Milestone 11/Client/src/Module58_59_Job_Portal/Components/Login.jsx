import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";

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
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <div className="card-body">
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