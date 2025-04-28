import { createUserWithEmailAndPassword, sendEmailVerification, updateProfile } from "firebase/auth";
import { auth } from "./firebase.init";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

function Register() {
    const [errorMessage, setErrorMessage] = useState("");
    const [success, setSuccess] = useState(false);
    const [passHide, setPassHide] = useState(true);
    function registerFormHandler(event) {
        event.preventDefault()
        const [email, password] = [event.target.email.value, event.target.password.value]    
        console.log(email, password);

        let regex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/;
        if(!regex.test(password)) {
            setErrorMessage("Password too weak!");
            console.log("pass weak")
            return;
        }



        setErrorMessage("");
        setSuccess(false);
        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                sendEmailVerification(auth.currentUser)
                .then(() => {
                    setSuccess(true);
                })

                console.log(result)
                let updates = {
                    displayName: event.target.name.value,
                    photoURL: event.target.url.value
                }
                updateProfile(auth.currentUser, updates)
                console.log(result)
            }).catch((err) => {
                setErrorMessage(err.message);
            })
    }

    function passwordToggle() {
        setPassHide(!passHide)
    }
    
    return(
        <form onSubmit = {registerFormHandler} className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
                <fieldset className="fieldset">
                    <h1 className="text-4xl font-bold">Register Now</h1>
                    <label className="label">Name</label>
                    <input name="name" type="text" className="input" placeholder="Name" />

                    <label className="label">Image Url</label>
                    <input name="url" type="text" className="input" placeholder="Image URL" />


                    <label  className="label">Email</label>
                    <input name="email" type="text" className="input" placeholder="Email" />
                    <label className="label">Password</label>
                    <div className="">
                        <input name="password" type={passHide?"password":"text"} className="input w-[80%]" placeholder="Password" />
                        <div onClick={passwordToggle} className="btn">
                            {
                                passHide ? <FaEye /> : <FaEyeSlash />
                            }
                        </div>
                    </div>
                    <button className="btn btn-neutral mt-4">Register Now</button>
                    <h1 className="text-sm text-red-500">{errorMessage}</h1>
                    {
                        success && <h1 className="text-sm text-green-500">User Created Successfully! Check Email to Verify</h1>
                    }
                </fieldset>
            </div>
        </form>

    )
}

export default Register;