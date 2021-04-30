import React, { useState } from "react";
import { AppRouter } from "./Router/AppRouter";
import { UserContext } from "./UserContext";

export const MainApp = () => {
  // el .provider nos permite compartir info con los componentes hijos
  // El provider notifica a los hijos si hay cambios
  const [user, setUser] = useState({});

  // para mandar varias parametros se manda un objeto
  return (
    <UserContext.Provider value={{ user, setUser }}>
      <AppRouter />
    </UserContext.Provider>
  );
};
