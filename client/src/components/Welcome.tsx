import React from "react";
import { useVehicular } from "@/services/Vehicular";
import TableVehicular from "@/components/vehicular/TableVehicular";
import { RenderFooterInspe } from "./ui/paginationArq";
import { Exportcom } from "./Exportcom";

interface WelcomeProps {
  userRole?: string | null;
  userEmpresa?: string | null;
}

function GetVehicular({ userRole, userEmpresa }: WelcomeProps = {}): React.ReactElement {
  const { dataVehicular, handlePageChange, page, total } = useVehicular(undefined, undefined, userRole, userEmpresa);

  return (
    <div>
      <Exportcom userRole={userRole} />

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
