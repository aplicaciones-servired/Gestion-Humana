import React from "react";
import { useLocativa } from "@/services/Locativa";
import TableLocativa from "@/components/locativa/TableLocativa";
import { RenderFooterInspe } from "./ui/paginationArq";

function GetLocativa(): React.ReactElement {
  const { dataLocativa, handlePageChange, page, total } = useLocativa();
  
  return (
    <div className="space-y-4">
      <TableLocativa DataLocativa={dataLocativa} />
      
      <RenderFooterInspe
        page={page}
        total={total}
        setPage={handlePageChange}
      />
    </div>
  );
}

export default GetLocativa;
