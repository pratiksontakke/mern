import { useState } from "react";

function init() {
    let val = Math.random() * 10;
    console.log("component was rendered : " + val);
    // 10,000 lines of code
    return val;
}

export default function Counter() {
    // initialization | one time when component render at first time only | pass by reference
    let [count, setCount] = useState(init); // not like this useState(init())

    function incCount() {
        setCount((currVal) => {
            // dependent on currValue (i.e count) value
            return currVal + 1;
        });
    }
    return (
        <div>
            <h3>Count : {count}</h3>
            <button onClick={incCount}>Increase Count</button>
        </div>
    );
}
