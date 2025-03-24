/**
 * Create a counter 
 * press + increase the number by 1 
 * press - dicrease the number by 1
 * press reset make the value 0
 * show the value on your screen 
 */

import { useState } from "react";

function Counter() {
    const [count, setCount] = useState(0);

    function increase() {
        setCount(count + 1);
    }

    function decrease() {
        setCount(count - 1);
    }

    function reset() {
        setCount(0);
    }
    return(
        <div>
            <h1>{count}</h1>
            <button onClick={increase}>+</button>
            <button onClick={decrease}>-</button>
            <button onClick = {reset}>Reset</button>
        </div>
    );
} 

export default Counter;