import { useState } from "react"

export const Counter = () => {

    const [counter, setCounter] = useState(0);

    const increase = (numero: number=1):void =>{setCounter(counter +numero)}

    return (
        <div className="mt-5">
            <h3>Counter: useState</h3>
            <span>Valor: {counter}</span>
            <br/>
            <button onClick={()=>increase()} className=" btn btn-outline-primary mt-2">Count</button>
            <button onClick={()=>increase(2)} className=" btn btn-outline-primary mt-2">Count 2</button>
            <button onClick={()=>setCounter(0)} className=" btn btn-outline-danger mt-2">Reset</button>
        </div>
    )
}