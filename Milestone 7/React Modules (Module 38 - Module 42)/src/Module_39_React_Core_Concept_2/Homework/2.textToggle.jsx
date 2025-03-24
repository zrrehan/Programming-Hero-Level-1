// Show and hide text using useState and conditional rendering 

import { useState } from "react";

function Text({show}) {
    if(show) {
        return(
            <h1>This is a message</h1>
        )
    }
}

function Toggle() {
    const [show, setShow] = useState(true);
    function clickHandler() {
        setShow(!show);
    }
    return(
        <div>
            <button onClick = {clickHandler}>Press</button>
            <Text show = {show}></Text>
        </div>
    );
}

export default Toggle;