import { useEffect, useState } from "react";
import { useEmpresa } from "../components/ui/useEmpresa";
import axios from "axios";
import { API_URL } from "@/utils/constans";
import type { Camilla } from "@/Types/Camilla.d";
import { toast } from "sonner";

interface CamillaResponse {
  datos: Camilla[];
  count: number;
  totalCount: number;
}

interface CamillaPagi {
  totalClients: number;
}

export const useCamilla = (fecha_inspeccion?: string, id?: number | undefined) => {
  const [dataCamilla, setDataCamilla] = useState<Camilla[]>([]);
  const [CamillaSegui, setCamillaSegui] = useState<Camilla[]>([]);
  const [page, setPage] = useState(1);
  const [pageSize] = useState(10);
  const [state, setState] = useState<CamillaPagi>({
    totalClients: 0,
  });
  const [totalCount, setTotalCount] = useState<number>();
  const { empresa } = useEmpresa();

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      try {
        let url = `${API_URL}/camilla?zona=${empresa}&page=${page}&pageSize=${pageSize}`;
        if (fecha_inspeccion) {
          url = url.concat(`&fecha_inspeccion=${fecha_inspeccion}`);
        }
        if (id) {
          url = url.concat(`&ID=${id}`);
        }

        const response = await axios.get<CamillaResponse>(url);

        if (response.status === 200) {
          setDataCamilla(response.data.datos);
          setCamillaSegui(response.data.datos);
          setTotalCount(response.data.count);
          setState((prevState) => ({
            ...prevState,
            totalClients: response.data.count,
          }));
        }
      } catch (error) {
        const errorMessage = error instanceof Error ? error.message : "Error desconocido al obtener camillas";
        toast.error(`Error fetching camillas: ${errorMessage}`);
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
    dataCamilla,
    CamillaSegui,
    page,
    total,
    handlePageChange,
    totalCount,
  };
};
