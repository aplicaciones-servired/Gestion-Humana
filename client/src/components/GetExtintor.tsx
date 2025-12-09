import React from "react";

interface ExtintorProps {
  datos: string;
}

function GetExtintor({ datos }: ExtintorProps): React.ReactElement {
  return (
    <div>
      <h2>Componente GetExtintor</h2>
      <p>Datos recibidos: {datos}</p>
    </div>
  );
}

export default GetExtintor;