import React from "react";
import { useCounter } from "../../Hooks/useCounter";
import { useFetch } from "../../Hooks/useFetch";
import "../02-useEffect/effects.css";

export const MultipleCustomHooks = () => {
  const { state, increment } = useCounter(1);

  const { loading, data } = useFetch(
    `https://www.breakingbadapi.com/api/quotes/${state}`
  );

  const { author, quote } = !!data && data[0]; // Si !!data es false las variables son undefined, si tienen valor se devuelve el objeto data[0]
  //null -> null
  //!null -> true
  //!!null -> false

  return (
    <>
      <h1>Breaking Bad quotes with hooks!</h1>
      <hr />

      {loading ? (
        <div className="alert alert-info text-center">Loading...</div>
      ) : (
        <>
          <blockquote className="blockquote text-right">
            <p className="mb-0 pb-3">{quote}</p>
            <footer className="blockquote-footer"> {author} </footer>
          </blockquote>

          <button className="btn btn-primary" onClick={() => increment()}>
            Next Quote
          </button>
        </>
      )}
    </>
  );
};
