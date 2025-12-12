import React from "react";
import { useBicicleta } from "@/services/Bicicleta";
import TableBicicleta from "@/components/bicicleta/TableBicicleta";
import { RenderFooterInspe } from "./ui/paginationArq";

function GetBicicleta(): React.ReactElement {
  const { dataBicicleta, handlePageChange, page, total } = useBicicleta();
  
  return (
    <TableBicicleta 
      DataBicicleta={dataBicicleta}
      pagination={
        <RenderFooterInspe
          page={page}
          total={total}
          setPage={handlePageChange}
        />
      }
    />
  );
}

export default GetBicicleta;