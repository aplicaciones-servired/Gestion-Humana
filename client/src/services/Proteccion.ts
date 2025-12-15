import { useEffect, useState } from "react";
import { useEmpresa } from "../components/ui/useEmpresa";
import axios from "axios";
import { API_URL } from "@/utils/constans";
import type { Proteccion } from "@/Types/Proteccion.d";
import { toast } from "sonner";

interface ProteccionResponse {
  datos: Proteccion[];
  count: number;
  totalCount: number;
}

interface ProteccionPagi {
  totalClients: number;
}

export const useProteccion = (
  fecha_inspeccion?: string,
  id?: number | undefined
) => {
  const [dataProteccion, setDataProteccion] = useState<Proteccion[]>([]);
  const [ProteccionSegui, setProteccionSegui] = useState<Proteccion[]>([]);
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
        let url = `${API_URL}/proteccion?zona=${empresa}&page=${page}&pageSize=${pageSize}`;
        if (fecha_inspeccion) {
          url = url.concat(`&fecha_inspeccion=${fecha_inspeccion}`);
        }
        if (id) {
          url = url.concat(`&id=${id}`);
        }

        const response = await axios.get<ProteccionResponse>(url);

        if (response.status === 200) {
          setDataProteccion(response.data.datos);
          setProteccionSegui(response.data.datos);
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
  }, [empresa, page, pageSize, fecha_inspeccion, id]);

  const total = Math.ceil(state.totalClients / pageSize);
  const handlePageChange = (newPage: number) => {
    setPage(newPage);
  };

  return {
    dataProteccion,
    ProteccionSegui,
    page,
    total,
    handlePageChange,
    totalCount,
  };
};
