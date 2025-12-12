import React from "react";
import { useCamilla } from "@/services/Camilla";
import TableCamilla from "@/components/camilla/TableCamilla";
import { RenderFooterInspe } from "./ui/paginationArq";

function GetCamilla(): React.ReactElement {
  const { dataCamilla, handlePageChange, page, total } = useCamilla();
  
  return (
    <TableCamilla 
      DataCamilla={dataCamilla}
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

export default GetCamilla;