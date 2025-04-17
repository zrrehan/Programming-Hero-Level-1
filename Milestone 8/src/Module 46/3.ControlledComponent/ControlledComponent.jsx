import { useState } from "react";

function ControlledComponent() {
    const [pass, setPass] = useState("hello");
    const [error, setError] = useState("")

    function handlePassChange(event) {
        let password = event.target.value
        console.log(password);
        setPass(password);

        if(password.length < 6) {
            setError("Password's length must be 6 or longer")
        } else {
            setError("")
        }
    }
    return(
        <div>
            <form>
                <input type="text" name="username" className="input" />
                <br />
                <input type="password" name="pass" onChange={handlePassChange} className="input" defaultValue={pass} />
                <br />
                <button className="btn">SIuuuu</button>
            </form>
            <p className="text-red-600">{error}</p>
        </div>
    )
}

export default ControlledComponent;