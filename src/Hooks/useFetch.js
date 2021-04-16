import { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [state, setState] = useState({
    data: null,
    loading: true,
    error: null,
  });

  useEffect(() => {
    setState({
      data: null,
      loading: true,
      error: null,
    });
    // aqui no se puede usar async/await
    fetch(url).then((resp) => {
      resp.json().then((data) => {
        setState({
          loading: false,
          error: null,
          data,
        });
      });
    });
  }, [url]); // Se ejecuta cuando el URL cambia

  return state;
};
