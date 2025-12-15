import { useEffect, useState } from "react";
import { useEmpresa } from "../components/ui/useEmpresa";
import axios from "axios";
import { API_URL } from "@/utils/constans";
import type { Preopreacional } from "@/Types/Preopreacional.d";
import { toast } from "sonner";

interface PreopreacionalResponse {
  datos: Preopreacional[];
  count: number;
  totalCount: number;
}

interface PreopreacionalPagi {
  totalClients: number;
}

export const usePreopreacional = (fecha?: string, id?: number | undefined) => {
  const [dataPreopreacional, setDataPreopreacional] = useState<Preopreacional[]>([]);
  const [PreopreacionalSegui, setPreopreacionalSegui] = useState<Preopreacional[]>([]);
  const [page, setPage] = useState(1);
  const [pageSize] = useState(10);
  const [state, setState] = useState<PreopreacionalPagi>({
    totalClients: 0,
  });
  const [totalCount, setTotalCount] = useState<number>();
  const { empresa } = useEmpresa();

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      try {
        let url = `${API_URL}/preoperacional?page=${page}&pageSize=${pageSize}`;
        if (fecha) {
          url = url.concat(`&fecha=${fecha}`);
        }
        if (id) {
          url = url.concat(`&id=${id}`);
        }

        const response = await axios.get<PreopreacionalResponse>(url);

        if (response.status === 200) {
          setDataPreopreacional(response.data.datos);
          setPreopreacionalSegui(response.data.datos);
          setTotalCount(response.data.count);
          setState((prevState) => ({
            ...prevState,
            totalClients: response.data.count,
          }));
        }
      } catch (error) {
        const errorMessage = error instanceof Error ? error.message : "Error desconocido al obtener preopreacionales";
        toast.error(`Error fetching preopreacionales: ${errorMessage}`);
      }
    };

    fetchData();
    const interval = setInterval(fetchData, 60000);
    return () => clearInterval(interval);
  }, [empresa, page, pageSize, fecha, id]);

  const total = Math.ceil(state.totalClients / pageSize);
  const handlePageChange = (newPage: number) => {
    setPage(newPage);
  };

  return {
    dataPreopreacional,
    PreopreacionalSegui,
    page,
    total,
    handlePageChange,
    totalCount,
  };
};
