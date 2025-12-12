import { useEffect, useState } from "react";
import { useEmpresa } from "../components/ui/useEmpresa";
import axios from "axios";
import { API_URL } from "@/utils/constans";
import type { Locativa } from "@/Types/Locativa.d";

interface LocativaResponse {
  datos: Locativa[];
  count: number;
  totalCount: number;
}

interface LocativaPagi {
  totalClients: number;
}

export const useLocativa = (fecha_inspeccion?: string, id?: number | undefined) => {
  const [dataLocativa, setDataLocativa] = useState<Locativa[]>([]);
  const [LocativaSegui, setLocativaSegui] = useState<Locativa[]>([]);
  const [page, setPage] = useState(1);
  const [pageSize] = useState(10);
  const [state, setState] = useState<LocativaPagi>({
    totalClients: 0,
  });
  const [totalCount, setTotalCount] = useState<number>();
  const { empresa } = useEmpresa();

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      try {
        let url = `${API_URL}/locativa?zona=${empresa}&page=${page}&pageSize=${pageSize}`;
        if (fecha_inspeccion) {
          url = url.concat(`&fecha_inspeccion=${fecha_inspeccion}`);
        }
        if (id) {
          url = url.concat(`&id=${id}`);
        }

        const response = await axios.get<LocativaResponse>(url);

        if (response.status === 200) {
          setDataLocativa(response.data.datos);
          setLocativaSegui(response.data.datos);
          setTotalCount(response.data.count);
          setState((prevState) => ({
            ...prevState,
            totalClients: response.data.count,
          }));
        }
      } catch (error) {
        console.error("Error fetching locativas:", error);
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
    dataLocativa,
    LocativaSegui,
    page,
    total,
    handlePageChange,
    totalCount,
  };
};
