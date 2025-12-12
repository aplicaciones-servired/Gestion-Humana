import { useEffect, useState } from "react";
import { useEmpresa } from "../components/ui/useEmpresa";
import axios from "axios";
import { API_URL } from "@/utils/constans";
import type { Herraminetas } from "@/Types/Herraminetas.d";

interface HerraminetasResponse {
  datos: Herraminetas[];
  count: number;
  totalCount: number;
}

interface HerraminetasPagi {
  totalClients: number;
}

export const useHerraminetas = (fecha_inspeccion?: string, id?: number | undefined) => {
  const [dataHerraminetas, setDataHerraminetas] = useState<Herraminetas[]>([]);
  const [HerraminetasSegui, setHerraminetasSegui] = useState<Herraminetas[]>([]);
  const [page, setPage] = useState(1);
  const [pageSize] = useState(10);
  const [state, setState] = useState<HerraminetasPagi>({
    totalClients: 0,
  });
  const [totalCount, setTotalCount] = useState<number>();
  const { empresa } = useEmpresa();

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      try {
        let url = `${API_URL}/herramienta?zona=${empresa}&page=${page}&pageSize=${pageSize}`;
        if (fecha_inspeccion) {
          url = url.concat(`&fecha_inspeccion=${fecha_inspeccion}`);
        }
        if (id) {
          url = url.concat(`&id=${id}`);
        }

        const response = await axios.get<HerraminetasResponse>(url);

        if (response.status === 200) {
          setDataHerraminetas(response.data.datos);
          setHerraminetasSegui(response.data.datos);
          setTotalCount(response.data.count);
          setState((prevState) => ({
            ...prevState,
            totalClients: response.data.count,
          }));
        }
      } catch (error) {
        console.error("Error fetching herraminetas:", error);
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
    dataHerraminetas,
    HerraminetasSegui,
    page,
    total,
    handlePageChange,
    totalCount,
  };
};
