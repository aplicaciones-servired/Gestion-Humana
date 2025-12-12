import React from "react";
import { useBotiquin } from "@/services/Botiquin";
import TableBotiquin from "@/components/botiquin/TableBotiquin";
import { RenderFooterInspe } from "./ui/paginationArq";

function GetBotiquin(): React.ReactElement {
  const { dataBotiquin, handlePageChange, page, total } = useBotiquin();
  
  return (
    <TableBotiquin 
      DataBotiquin={dataBotiquin}
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

export default GetBotiquin;