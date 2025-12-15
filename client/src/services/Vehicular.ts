import { useEffect, useState } from "react";
import { useEmpresa } from "../components/ui/useEmpresa";
import axios from "axios";
import { API_URL } from "@/utils/constans";
import type { Vehicular } from "@/Types/Vehicular";
import { toast } from "sonner";

interface VehicularResponse {
  datos: Vehicular[];
  count: number;
  totalCount: number;
}

interface ProteccionPagi {
  totalClients: number;
}

export const useVehicular = (
  fecha?: string,
  id?: number | undefined
) => {
  const [dataVehicular, setDataVehicular] = useState<Vehicular[]>([]);
  const [VehicularSegui, setVehicularSegui] = useState<Vehicular[]>([]);
  const [page, setPage] = useState(1);
  const [pageSize] = useState(10);
  const [state, setState] = useState<ProteccionPagi>({
    totalClients: 0,
  });
  const [totalCount, setTotalCount] = useState<number>();
  const { empresa } = useEmpresa();

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      try {
        let url = `${API_URL}/vehicular?zona=${empresa}&page=${page}&pageSize=${pageSize}`;
        if (fecha) {
          url = url.concat(`&fecha=${fecha}`);
        }
        if (id) {
          url = `${API_URL}/vehicular/${id}?zona=${empresa}`;
        }

        const response = await axios.get<VehicularResponse>(url);

        if (response.status === 200) {
          setDataVehicular(response.data.datos);
          setVehicularSegui(response.data.datos);
          setTotalCount(response.data.count);
          setState((prevState) => ({
            ...prevState,
            totalClients: response.data.count,
          }));
        }
      } catch (error) {
        const errorMessage = error instanceof Error ? error.message : "Error desconocido al obtener protecciones";
        toast.error(`Error fetching protecciones: ${errorMessage}`);
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
    dataVehicular,
    VehicularSegui,
    page,
    total,
    handlePageChange,
    totalCount,
  };
};
