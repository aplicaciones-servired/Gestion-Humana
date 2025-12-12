import React from "react";
import { usePreopreacional } from "@/services/Preopreacional";
import TablePreopreacional from "@/components/preopreacional/TablePreopreacional";
import { RenderFooterInspe } from "./ui/paginationArq";

function GetPreopreacional(): React.ReactElement {
  const { dataPreopreacional, handlePageChange, page, total } = usePreopreacional();
  
  return (
    <div className="space-y-4">
      <TablePreopreacional DataPreopreacional={dataPreopreacional} />
      
      <RenderFooterInspe
        page={page}
        total={total}
        setPage={handlePageChange}
      />
    </div>
  );
}

export default GetPreopreacional;
