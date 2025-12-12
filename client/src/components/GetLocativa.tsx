import React from "react";
import { useLocativa } from "@/services/Locativa";
import TableLocativa from "@/components/locativa/TableLocativa";
import { RenderFooterInspe } from "./ui/paginationArq";

function GetLocativa(): React.ReactElement {
  const { dataLocativa, handlePageChange, page, total } = useLocativa();
  
  return (
    <TableLocativa 
      DataLocativa={dataLocativa}
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

export default GetLocativa;