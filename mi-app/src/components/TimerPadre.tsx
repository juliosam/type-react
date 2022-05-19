import { Timer } from "./Timer"
import { useState } from "react"

export const TimerPadre = () => {
    const [miliseg, setMiliseg] = useState(0)
    return(
        <>
         <span>Milisegundos{miliseg}</span>
         <br/>
         <button 
            className="btn btn-outline-success"
            onClick={()=> setMiliseg(1000)}>
             1000</button>
         <button 
            className="btn btn-outline-success"
            onClick={()=> setMiliseg(2000)}>
             2000</button>
         <Timer milisegundos={miliseg}/>
        </>
    )
}