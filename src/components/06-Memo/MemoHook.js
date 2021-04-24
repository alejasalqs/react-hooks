import React, { useMemo, useState } from "react";
import { useCounter } from "../../Hooks/useCounter";
import "../02-useEffect/effects.css";

export const MemoHook = () => {
  const { state: counter, increment } = useCounter(5000);
  const [show, setShow] = useState(true);

  // Seria mejor sacar esta logica de aca
  const procesoPesado = (iteraciones) => {
    for (let i = 0; i < iteraciones; i++) {
      console.log("ahí vamos...");
    }

    return `${iteraciones} iteraciones realizadas`;
  };

  const memoProcesado = useMemo(() => procesoPesado(counter), [counter]); // si cambia lo que esta dentro de [] se ejecuta la funcion

  return (
    <div>
      <h1>Memo Hook</h1>
      <h3>Counter: {counter}</h3>
      <hr />

      <p>{memoProcesado}</p>
      <button className="btn btn-primary" onClick={() => increment()}>
        +1
      </button>
      <button className="btn btn-primary" onClick={() => setShow(!show)}>
        Show/Hide {JSON.stringify(show)}
      </button>
    </div>
  );
};
