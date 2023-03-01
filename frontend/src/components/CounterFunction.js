import React, { useState } from "react";

function CounterFunction() {

    let [number, setNumber] = useState(0)

    function increment() {
        setNumber(++number)
    }

    return (
            <div>

            </div>
    )
}

export default CounterFunction;