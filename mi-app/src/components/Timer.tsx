import { useEffect, useState } from "react";

type TimerArgs={milisegundos:number}

export const Timer = ({milisegundos}:TimerArgs) => {

    const [segundos, setSegundos] = useState(0);
    console.log(milisegundos)

    useEffect( ()=>{
      setInterval(()=>setSegundos(s => s + 1), 1000)
    },[])

    return(
        <>
        <h4>Timer:<small>{segundos}</small></h4>
        </>
    )
}