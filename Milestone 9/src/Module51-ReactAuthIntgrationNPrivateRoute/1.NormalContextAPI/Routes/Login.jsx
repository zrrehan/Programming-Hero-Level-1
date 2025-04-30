import { Link } from "react-router";

function Login() {
    return(
        <form className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mx-auto">
            <div className="card-body">
                <fieldset className="fieldset">
                    <h1 className="text-5xl font-bold text-center">Login Now</h1>
                    <label className="label">Email</label>
                    <input type="email" className="input" placeholder="Email" />
                    <label className="label">Password</label>
                    <input type="password" className="input" placeholder="Password" />
                    <div><a className="link link-hover">Forgot password?</a></div>
                    <button className="btn btn-neutral mt-4">Login</button>
                </fieldset>
                <p>New to this site? Please <Link className="underline text-blue-500" to = "/Register">Register</Link></p>
            </div>
        </form>
    )
}

export default Login;