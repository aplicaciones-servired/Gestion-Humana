import React from "react";
import { usePreopreacional } from "@/services/Preopreacional";
import TablePreopreacional from "@/components/preopreacional/TablePreopreacional";
import { RenderFooterInspe } from "./ui/paginationArq";

function GetPreopreacional(): React.ReactElement {
  const { dataPreopreacional, handlePageChange, page, total } = usePreopreacional();
  
  return (
    <TablePreopreacional 
      DataPreopreacional={dataPreopreacional}
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

export default GetPreopreacional;