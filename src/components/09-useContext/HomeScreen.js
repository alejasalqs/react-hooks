import React, { useContext } from "react";
import { UserContext } from "./UserContext";

export const HomeScreen = () => {
  // Obtenemos la instancia del tipo de context que mandemos por parametro
  // como es un objeto se puede desestructurar
  const { user, setUser } = useContext(UserContext);

  return (
    <>
      <h1>Home</h1>
      <hr />

      <pre>{JSON.stringify(user)}</pre>
    </>
  );
};
