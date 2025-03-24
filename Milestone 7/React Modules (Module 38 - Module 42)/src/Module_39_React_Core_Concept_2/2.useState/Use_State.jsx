import { useState } from "react";

function UseStateFunction() {
    const [count, setCount] = useState(0);
    const countIncrease = () => {
        let newcount = count + 1;
        setCount(newcount);
    }
    return(
        <div>
            <h3>Count: {count}</h3>
            <button onClick = {countIncrease}>+</button>
        </div>
    );
}

export default UseStateFunction;