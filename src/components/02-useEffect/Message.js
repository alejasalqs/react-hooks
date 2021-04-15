import React, { useEffect } from "react";

export const Message = () => {
  useEffect(() => {
    //console.log("Componente Montado");

    const mouseMove = (e) => {
      // Esta funcion se crea para demostrar como eviaar que se repita la funcionalidad
      const coors = { x: e.x, y: e.y };
    };

    window.addEventListener("mousemove", mouseMove);
    return () => {
      window.removeEventListener("mousemove", mouseMove);
      console.log("Componente Desmontado");
    };
  }, []);
  return (
    <div>
      <h3>Eres Genial</h3>
    </div>
  );
};
