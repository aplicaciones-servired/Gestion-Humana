import React from "react";
import { useBodega } from "@/services/Bodega";
import TableBodega from "@/components/bodega/TableBodega";
import { RenderFooterInspe } from "./ui/paginationArq";

function GetBodega(): React.ReactElement {
  const { dataBodega, handlePageChange, page, total } = useBodega();
  
  return (
    <div className="space-y-4">
      <TableBodega DataBodega={dataBodega} />
      
      <RenderFooterInspe
        page={page}
        total={total}
        setPage={handlePageChange}
      />
    </div>
  );
}

export default GetBodega;
