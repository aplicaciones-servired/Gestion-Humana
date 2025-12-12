import React from "react";
import { useHerraminetas } from "@/services/Herraminetas";
import TableHerraminetas from "@/components/herraminetas/TableHerraminetas";
import { RenderFooterInspe } from "./ui/paginationArq";

function GetHerraminetas(): React.ReactElement {
  const { dataHerraminetas, handlePageChange, page, total } = useHerraminetas();
  
  return (
    <TableHerraminetas 
      DataHerraminetas={dataHerraminetas}
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

export default GetHerraminetas;