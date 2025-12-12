import React from "react";
import { useExtintor } from "@/services/Extintor";
import TableExtintor from "@/components/extintor/TableExtintor";
import { RenderFooterInspe } from "./ui/paginationArq";
import { Exportcom } from "./Exportcom";

function GetExtintor(): React.ReactElement {
  const { dataExtintor, handlePageChange, page, total } = useExtintor();

  return (
    <div>
      <Exportcom />

      <TableExtintor
        DataExtintor={dataExtintor}
        pagination={<RenderFooterInspe
          page={page}
          total={total}
          setPage={handlePageChange} />} />

    </div>
  );
}

export default GetExtintor;