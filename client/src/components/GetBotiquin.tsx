import React from "react";
import { useBotiquin } from "@/services/Botiquin";
import TableBotiquin from "@/components/botiquin/TableBotiquin";
import { RenderFooterInspe } from "./ui/paginationArq";

function GetBotiquin(): React.ReactElement {
  const { dataBotiquin, handlePageChange, page, total } = useBotiquin();
  
  return (
    <div className="space-y-4">
      <TableBotiquin DataBotiquin={dataBotiquin} />
      
      <RenderFooterInspe
        page={page}
        total={total}
        setPage={handlePageChange}
      />
    </div>
  );
}

export default GetBotiquin;
