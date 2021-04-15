import React, { useState } from "react";
import "./counter.css";

export const CounterApp = () => {
  // Se puede desestructurar el objeto desde acá
  const [state, setState] = useState({
    counter1: 10,
    counter2: 20,
    counter3: 30,
    counter4: 40,
  });

  // del objeto state desestructuramos lo que vamos a usar
  const { counter1, counter2 } = state;

  return (
    <>
      <h1>Counter1: {counter1}</h1>
      <h1>Counter2: {counter2}</h1>
      <hr />

      <button
        className="btn btn-primary"
        onClick={() =>
          // Cuando usamos setState le caemos encima al estado anterior
          setState({
            // usamos el spread operator para alterara la propiedad que
            //necesitamos sin afectar otras
            ...state,
            counter1: counter1 + 1,
          })
        }
      >
        +1
      </button>
    </>
  );
};
