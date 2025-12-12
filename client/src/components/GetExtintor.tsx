import React from "react";
import { useExtintor } from "@/services/Extintor";
import TableExtintor from "@/components/extintor/TableExtintor";
import { RenderFooterInspe } from "./ui/paginationArq";

function GetExtintor(): React.ReactElement {
  const { dataExtintor, handlePageChange, page, total } = useExtintor();
  
  return (
    <div className="space-y-4">
      <TableExtintor DataExtintor={dataExtintor} />
      
        <RenderFooterInspe
          page={page}
          total={total}
          setPage={handlePageChange}
        />
    </div>
  );
}

export default GetExtintor;