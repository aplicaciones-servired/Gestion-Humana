import React from "react";
import { useProteccion } from "@/services/Proteccion";
import TableProteccion from "@/components/proteccion/TableProteccion";
import { RenderFooterInspe } from "./ui/paginationArq";

function GetProteccion(): React.ReactElement {
  const { dataProteccion, handlePageChange, page, total } = useProteccion();
  
  return (
    <div className="space-y-4">
      <TableProteccion DataProteccion={dataProteccion} />
      
      <RenderFooterInspe
        page={page}
        total={total}
        setPage={handlePageChange}
      />
    </div>
  );
}

export default GetProteccion;
