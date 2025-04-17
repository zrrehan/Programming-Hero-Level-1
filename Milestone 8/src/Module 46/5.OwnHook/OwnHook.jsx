import { FunnelIcon } from "lucide-react";
import { useState } from "react";

// This is our own Hook
function useInputField(defaultValue) {
    const [fieldValue, setFieldValue] = useState(defaultValue);

    const handleFeildOnChange = (event) => {
        setFieldValue(event.target.value);
    }

    return [fieldValue, handleFeildOnChange]
}


// this is the component 
function OwnHook() {
    const [name, nameOnChange] = useInputField("");
    const [email, emailOnChange] = useInputField("");

    function submitHandler(event) {
        event.preventDefault();
        console.log(name, email);
    }
    return(
        <form onSubmit={submitHandler}>
            <input type="text" name="name" className="border-4" onChange={nameOnChange}/> <br />
            <input type="text" name="email" className="border-4" onChange={emailOnChange}/> <br />
            <button className="btn btn-primary">Submit</button>
        </form>
    );
}

export default OwnHook;