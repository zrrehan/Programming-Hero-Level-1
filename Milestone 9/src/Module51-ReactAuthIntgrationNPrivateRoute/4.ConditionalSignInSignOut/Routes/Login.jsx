import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../Context/AuthContext";
import { use } from "react";

function Login() {
    const { loginUser, loginWithGoogle } = use(AuthContext);
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

    function googleLogin() {
        loginWithGoogle()
            .then(result => {
                console.log(result);
                navigate(location?.state ? location.state : "/");
            }). catch((error) => {
                console.log(error.message);
            })
    }
    return(
        <div onSubmit = {formHandler} className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mx-auto">
            <div className="card-body">
                <form className="fieldset">
                    <h1 className="text-5xl font-bold text-center">Login Now</h1>
                    <label className="label">Email</label>
                    <input type="email" className="input" placeholder="Email" name = "email"/>
                    <label className="label">Password</label>
                    <input type="password" className="input" placeholder="Password" name = "password" />
                    <div><a className="link link-hover">Forgot password?</a></div>
                    <button className="btn btn-neutral mt-4">Login</button>
                </form>
                {/* Google  */}
                <button onClick ={googleLogin} className="btn bg-white text-black border-[#e5e5e5] mt-2">
                    <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                    Login with Google
                </button>
                <p>New to this site? Please <Link className="underline text-blue-500" to = "/Register">Register</Link></p>
            </div>
        </div>
    )
}

export default Login;