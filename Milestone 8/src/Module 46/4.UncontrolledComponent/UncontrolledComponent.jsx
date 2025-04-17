import { useRef, useState } from "react";

function UncontrolledComponent() {
    const emailRef = useRef("");
    const passRef = useRef("");

    function handleSubmit(event) {
        event.preventDefault()
        console.log(emailRef.current) // we got the node 

        if(!emailRef.current.value.includes("@gmail.com")) {
            console.log("use google's gmail")
        }

        if(!passRef.current.value.length < 6) {
            console.log("password is too small");
        }
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input ref = {emailRef} type="text" name="email" className="input" />
                <br />
                <input ref = {passRef} type="password" name="pass" className="input" />
                <br />
                <button className="btn">SIuuuu</button>
            </form>
        </div>
    )
}

export default UncontrolledComponent;