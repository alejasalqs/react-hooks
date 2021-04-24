import React, { useCallback, useEffect, useState } from "react";
import "../02-useEffect/effects.css";
import { ShowIncrement } from "./ShowIncrement";

export const CallbackHook = () => {
  // Un uso del callback hook es cuando tenemos que mandar una funcion a un componente
  //hijo
  const [counter, setCounter] = useState(10);

  /*const increment = () => {
    setCounter(counter + 1);
  };*/

  const increment = useCallback(
    (num = 1) => {
      setCounter((c) => c + num); // esto es un funcion con la variable counter como parametro
    },
    [setCounter]
  );

  useEffect(() => {
    /// ???
    // Se recomienda usar callback en useEffect porque sino se ejecutaria
    // cada vez que se genere el componente padre
  }, [increment]);

  return (
    <div>
      <h1>useCallback Hook: {counter}</h1>
      <hr />
      <ShowIncrement increment={increment} />
    </div>
  );
};
