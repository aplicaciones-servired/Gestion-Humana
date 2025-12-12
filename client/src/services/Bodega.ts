import { useEffect, useState } from "react";
import { useEmpresa } from "../components/ui/useEmpresa";
import axios from "axios";
import { API_URL } from "@/utils/constans";
import type { Bodega } from "@/Types/Bodega.d";

interface BodegaResponse {
  datos: Bodega[];
  count: number;
  totalCount: number;
}

interface BodegaPagi {
  totalClients: number;
}

export const useBodega = (fecha_inspeccion?: string, id?: number | undefined) => {
  const [dataBodega, setDataBodega] = useState<Bodega[]>([]);
  const [BodegaSegui, setBodegaSegui] = useState<Bodega[]>([]);
  const [page, setPage] = useState(1);
  const [pageSize] = useState(10);
  const [state, setState] = useState<BodegaPagi>({
    totalClients: 0,
  });
  const [totalCount, setTotalCount] = useState<number>();
  const { empresa } = useEmpresa();

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      try {
        let url = `${API_URL}/bodega?zona=${empresa}&page=${page}&pageSize=${pageSize}`;
        if (fecha_inspeccion) {
          url = url.concat(`&fecha_inspeccion=${fecha_inspeccion}`);
        }
        if (id) {
          url = url.concat(`&id=${id}`);
        }

        const response = await axios.get<BodegaResponse>(url);

        if (response.status === 200) {
          setDataBodega(response.data.datos);
          setBodegaSegui(response.data.datos);
          setTotalCount(response.data.count);
          setState((prevState) => ({
            ...prevState,
            totalClients: response.data.count,
          }));
        }
      } catch (error) {
        console.error("Error fetching bodegas:", error);
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
    dataBodega,
    BodegaSegui,
    page,
    total,
    handlePageChange,
    totalCount,
  };
};
