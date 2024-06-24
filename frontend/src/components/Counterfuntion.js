import React, { useState } from "react";

function CounterFuntion(){

    let [number, setNumber] = useState(0)

    function Increment(){
        setNumber(++number)

    }

    return(
        <div>
            <h3>Funtion component</h3>
            <h1>Counter ={number}</h1>
            <button onClick = {e => Increment( )}>Increment</button>
             
        </div>
    )
}
export default CounterFuntion;