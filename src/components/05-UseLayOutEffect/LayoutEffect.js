import React, { useLayoutEffect, useRef } from "react";
import { useCounter } from "../../Hooks/useCounter";
import { useFetch } from "../../Hooks/useFetch";
import "../02-useEffect/effects.css";
import "./layout.css";

export const LayoutEffect = () => {
  const { state, increment } = useCounter(1);

  const { loading, data } = useFetch(
    `https://www.breakingbadapi.com/api/quotes/${state}`
  );

  const { author, quote } = !!data && data[0]; // Si !!data es false las variables son undefined, si tienen valor se devuelve el objeto data[0]

  const pTag = useRef(); // referencia del parrafo

  useLayoutEffect(() => {
    // Funciona igual que el useEffect
    // Se ejcuta cuando ya esta el html creado
    console.log(pTag.current.getBoundingClientRect());
  }, [quote]); // Cuando cambia el quote se dispara

  return (
    <>
      <h1>Breaking Bad quotes with hooks layOuteffec!</h1>
      <hr />

      <blockquote className="blockquote text-right">
        <p ref={pTag} className="mb-0 pb-3">
          {quote}
        </p>
      </blockquote>

      <button className="btn btn-primary" onClick={() => increment()}>
        Next Quote
      </button>
    </>
  );
};
