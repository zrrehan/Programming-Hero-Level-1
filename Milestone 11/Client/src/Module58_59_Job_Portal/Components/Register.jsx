import { use } from "react";
import { AuthContext } from "../Context/AuthContext";

function Register() {
    const {registerFirebase} = use(AuthContext)
    function formHandler(event) {
        event.preventDefault();
        const [email, url, password] = [
            event.target.email.value, event.target.url.value, event.target.password.value, 
        ]
        
        registerFirebase(email, password)
            .then((userInfo) => {
                console.log(userInfo);
            })
    }
    return(
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Register now!</h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <div className="card-body">
                        <form onSubmit = {formHandler} lassName="fieldset">
                            <label className="label">Email</label>
                            <input type="email" className="input" placeholder="Email" name = "email" />

                            <label className="label">Photo URL</label>
                            <input type="text" className="input" placeholder="Photo Url" name = "url"/>

                            <label className="label">Password</label>
                            <input type="password" className="input" placeholder="Password" name = "password"/>
                            <button className="btn btn-neutral mt-4">Register</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register;