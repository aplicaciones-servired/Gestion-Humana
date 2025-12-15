import { useEffect, useState } from "react";
import { useEmpresa } from "../components/ui/useEmpresa";
import axios from "axios";
import { API_URL } from "@/utils/constans";
import type { Botiquin } from "@/Types/Botiquin.d";
import { toast } from "sonner";

interface BotiquinResponse {
  datos: Botiquin[];
  count: number;
  totalCount: number;
}

interface BotiquinPagi {
  totalClients: number;
}

export const useBotiquin = (fecha_inspeccion?: string, id?: number | undefined) => {
  const [dataBotiquin, setDataBotiquin] = useState<Botiquin[]>([]);
  const [BotiquinSegui, setBotiquinSegui] = useState<Botiquin[]>([]);
  const [page, setPage] = useState(1);
  const [pageSize] = useState(10);
  const [state, setState] = useState<BotiquinPagi>({
    totalClients: 0,
  });
  const [totalCount, setTotalCount] = useState<number>();
  const { empresa } = useEmpresa();

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      try {
        let url = `${API_URL}/botiquin?zona=${empresa}&page=${page}&pageSize=${pageSize}`;
        if (fecha_inspeccion) {
          url = url.concat(`&fecha_inspeccion=${fecha_inspeccion}`);
        }
        if (id) {
          url = url.concat(`&id=${id}`);
        }

        const response = await axios.get<BotiquinResponse>(url);

        if (response.status === 200) {
          setDataBotiquin(response.data.datos);
          setBotiquinSegui(response.data.datos);
          setTotalCount(response.data.count);
          setState((prevState) => ({
            ...prevState,
            totalClients: response.data.count,
          }));
        }
      } catch (error) {
        const errorMessage = error instanceof Error ? error.message : "Error desconocido al obtener botiquines";
        toast.error(`Error fetching botiquines: ${errorMessage}`);
      }
    };

    fetchData();
    const interval = setInterval(fetchData, 60000);
    return () => clearInterval(interval);
  }, [empresa, page, pageSize, fecha_inspeccion, id]);

  const total = Math.ceil(state.totalClients / pageSize);
  const handlePageChange = (newPage: number) => {
    setPage(newPage);
  };

  return {
    dataBotiquin,
    BotiquinSegui,
    page,
    total,
    handlePageChange,
    totalCount,
  };
};
