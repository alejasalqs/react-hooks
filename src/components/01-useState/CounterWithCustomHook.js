import React from "react";
import { useCounter } from "../../Hooks/useCounter";
import "./counter.css";

export const CounterWithCustomHook = () => {
  // desestructuramos el objeto que nos retorna el state
  // se puede renombrar
  const { state, increment, decrement, resetCounter } = useCounter();
  return (
    <>
      <h1>Counter with hook: {state}</h1>
      <hr />

      <button onClick={() => increment(2)} className="btn">
        +1
      </button>
      <button onClick={() => decrement(2)} className="btn">
        -1
      </button>
      <button onClick={resetCounter} className="btn">
        Reset
      </button>
    </>
  );
};
