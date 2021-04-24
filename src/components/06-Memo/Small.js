import React from "react";

// devuelve la forma memoizada del componente
// No es useMemo
export const Small = React.memo(({ value }) => {
  console.log("Me volví a llamar");
  return <small>{value}</small>;
});
