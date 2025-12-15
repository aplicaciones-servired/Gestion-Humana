import React from "react";
import { useVehicular } from "@/services/Vehicular";
import TableVehicular from "@/components/vehicular/TableVehicular";
import { RenderFooterInspe } from "./ui/paginationArq";
import { Exportcom } from "./Exportcom";

function GetVehicular(): React.ReactElement {
  const { dataVehicular, handlePageChange, page, total } = useVehicular();

  return (
    <div>
      <Exportcom />

      <TableVehicular
        DataVehicular={dataVehicular}
        pagination={
          <RenderFooterInspe
            page={page}
            total={total}
            setPage={handlePageChange}
          />
        }
      />
    </div>
  );
}

export default GetVehicular;
