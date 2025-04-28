import { sendPasswordResetEmail, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase.init";
import { useRef, useState } from "react";

function Login() {
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState("");
    const emailRef = useRef("");

    function formSubmit(event) {
        event.preventDefault();
        const [email, password] = [event.target.email.value, event.target.password.value]
        

        signInWithEmailAndPassword(auth, email, password)
            .then((result) => {
                if(result.user.emailVerified) {
                    setSuccess(true);
                    setError("");
                } else {
                    setSuccess(false);
                    setError("Verify Your Email First");
                }
                console.log(result)
            }).catch((err) =>{
                setSuccess(false);
                setError(err.message);
            })
    }
    
    function forgetHandle() {
        console.log(emailRef);
        let email = emailRef.current.value;
        
        sendPasswordResetEmail(auth, email)
        .then(() => {
            setSuccess(false);
            setError("Check Your Email To Reset password");
        })
        .catch((err) => {
            setError(err.message);
        })

    }
    return(
        <form onSubmit={formSubmit} className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
                <fieldset className="fieldset">
                    <h1 className="text-4xl font-bold">Login Now</h1>
                    <label className="label">Email</label>
                    <input name="email" type="email" className="input" placeholder="Email" ref={emailRef} />
                    <label className="label">Password</label>
                    <input name  = "password" type="password" className="input" placeholder="Password"/>
                    <div onClick={forgetHandle}><a className="link link-hover">Forgot password?</a></div>
                    <button className="btn btn-neutral mt-4">Login</button>
                    <div>
                        {
                            success ? 
                            <div className="text-green-500">Logged In Successful</div>
                                : <div className="text-red-500">{error}</div>
                        }
                    </div>
                </fieldset>
            </div>
        </form>
    )
}

export default Login;