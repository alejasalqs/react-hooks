import React, { useEffect, useState } from "react";
import "./effects.css";
import { Message } from "./Message";
// useEffect nos permite ejecutar un efecto secundario cuando algo suecede,
// en los componentes
// react reconoce los hooks por el orden en que se declaran
// Los hooks en general no se pueden declarar de manera condicional
// o sea dentro de una estructura IF
// y siempre deben estar lo más arriba del componente
export const SimpleForm = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
  });

  const { name, email } = formState;

  // Se recomienda crear un effect por cada cambio que se quiera escuchar
  useEffect(() => {
    //console.log("hey");
  }, []); // el arreglo vacio significa que solo se ejecuta la primera vez que renderiza

  useEffect(() => {
    //console.log("formState cambió");
  }, [formState]); // en este caso vamos a escuchar todos los cambios del objeto formState

  useEffect(() => {
    //console.log("email cambió");
  }, [email]); // en este caso vamos a escuchar todos los cambios de la variable email

  const handleInputChange = (e) => {
    //console.log(e.target.name); // nombre del campo
    //console.log(e.target.value); // ntexto ingresado
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <h1>useEffect</h1>
      <hr />

      <div className="form-group">
        <input
          type="text"
          name="name"
          className="form-control"
          placeholder="Tu nombre"
          autoComplete="off"
          value={name}
          onChange={handleInputChange}
        />
      </div>

      <div className="form-group">
        <input
          type="text"
          name="email"
          className="form-control"
          placeholder="email@email.com"
          autoComplete="off"
          value={email}
          onChange={handleInputChange}
        />
      </div>

      {name === "123" && <Message />}
    </>
  );
};
