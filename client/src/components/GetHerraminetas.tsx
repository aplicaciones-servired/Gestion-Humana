import React from "react";
import { useHerraminetas } from "@/services/Herraminetas";
import TableHerraminetas from "@/components/herraminetas/TableHerraminetas";
import { RenderFooterInspe } from "./ui/paginationArq";

function GetHerraminetas(): React.ReactElement {
  const { dataHerraminetas, handlePageChange, page, total } = useHerraminetas();
  
  return (
    <div className="space-y-4">
      <TableHerraminetas DataHerraminetas={dataHerraminetas} />
      
      <RenderFooterInspe
        page={page}
        total={total}
        setPage={handlePageChange}
      />
    </div>
  );
}

export default GetHerraminetas;
