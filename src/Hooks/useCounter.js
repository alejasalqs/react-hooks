import { useState } from "react";
// Un custom hook es igual que una funcion normal de react
export const useCounter = (initialState = 10) => {
  // vamos a centralizar la logica de un contador en este hook
  const [state, setState] = useState(initialState);

  const increment = (factor = 1) => {
    setState(state + factor);
  };

  const decrement = (factor = 1) => {
    setState(state - factor);
  };

  const resetCounter = () => {
    setState(initialState);
  };
  // en este caso se retorna un objeto {} o arreglo []
  return {
    state,
    increment,
    decrement,
    resetCounter,
  };
};
