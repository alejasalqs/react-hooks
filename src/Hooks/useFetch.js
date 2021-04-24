import { useEffect, useRef, useState } from "react";

export const useFetch = (url) => {
  const [state, setState] = useState({
    data: null,
    loading: true,
    error: null,
  });

  const isMounted = useRef(true);

  useEffect(() => {
    // Solo se ejecuta la primera vez que se llama el componente
    return () => {
      // Cuando el componente se desmonta cancela se ejecuta esto
      isMounted.current = false;
    };
  }, []);

  useEffect(() => {
    setState({
      data: null,
      loading: true,
      error: null,
    });
    // aqui no se puede usar async/await
    fetch(url).then((resp) => {
      resp.json().then((data) => {
        if (isMounted.current) {
          // Si el componente esta montado ejecuta
          setState({
            loading: false,
            error: null,
            data,
          });
        } else {
          console.log("setState no se llama");
        }
      });
    });
  }, [url]); // Se ejecuta cuando el URL cambia

  return state;
};
