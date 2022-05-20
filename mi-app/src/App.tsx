import { ContadorRed } from "./components/ContadorRed";
import { Counter } from "./components/Counter";
import { Formulario } from "./components/Formulario";
import { Formulario2 } from "./components/Formulario2";
import { TimerPadre } from "./components/TimerPadre";
import { User } from "./components/User";

function App() {
  return (
    <>
        <h1>React + TypeScript</h1>
        <hr/>
        <h2 >useState</h2>
        <Counter/>
        <User/>
        <h2 className="mt-5">useEffect - useRef</h2>
        <hr/>
        <TimerPadre/>
        <hr/>
        <ContadorRed/>
        <h2 className="mt-5">Custom Hooks</h2>
        <hr/>
        <Formulario/> 
        <hr/>
        <Formulario2/> 
    </>
  );
}

export default App;
