import React from "react";
import { useCamilla } from "@/services/Camilla";
import TableCamilla from "@/components/camilla/TableCamilla";
import { RenderFooterInspe } from "./ui/paginationArq";

function GetCamilla(): React.ReactElement {
  const { dataCamilla, handlePageChange, page, total } = useCamilla();
  
  return (
    <div className="space-y-4">
      <TableCamilla DataCamilla={dataCamilla} />
      
      <RenderFooterInspe
        page={page}
        total={total}
        setPage={handlePageChange}
      />
    </div>
  );
}

export default GetCamilla;
