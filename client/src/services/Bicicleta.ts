import { useEffect, useState } from "react";
import { useEmpresa } from "../components/ui/useEmpresa";
import axios from "axios";
import { API_URL } from "@/utils/constans";
import type { Bicicleta } from "@/Types/Bicicleta.d";

interface BicicletaResponse {
  datos: Bicicleta[];
  count: number;
  totalCount: number;
}

interface BicicletaPagi {
  totalClients: number;
}

export const useBicicleta = (fecha_inspeccion?: string) => {
  const [dataBicicleta, setDataBicicleta] = useState<Bicicleta[]>([]);
  const [BicicletaSegui, setBicicletaSegui] = useState<Bicicleta[]>([]);
  const [page, setPage] = useState(1);
  const [pageSize] = useState(10);
  const [state, setState] = useState<BicicletaPagi>({
    totalClients: 0,
  });
  const [totalCount, setTotalCount] = useState<number>();
  const { empresa } = useEmpresa();

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      try {
        let url = `${API_URL}/bicicleta?page=${page}&pageSize=${pageSize}`;
        if (fecha_inspeccion) {
          url = url.concat(`&fecha_inspeccion=${fecha_inspeccion}`);
        }

        const response = await axios.get<BicicletaResponse>(url);

        if (response.status === 200) {
          setDataBicicleta(response.data.datos);
          setBicicletaSegui(response.data.datos);
          setTotalCount(response.data.count);
          setState((prevState) => ({
            ...prevState,
            totalClients: response.data.count,
          }));
        }
      } catch (error) {
        console.error("Error fetching bicicletas:", error);
      }
    };

    fetchData();
    const interval = setInterval(fetchData, 60000);
    return () => clearInterval(interval);
  }, [empresa, page, pageSize, fecha_inspeccion]);

  const total = Math.ceil(state.totalClients / pageSize);
  const handlePageChange = (newPage: number) => {
    setPage(newPage);
  };

  return {
    dataBicicleta,
    BicicletaSegui,
    page,
    total,
    handlePageChange,
    totalCount,
  };
};
