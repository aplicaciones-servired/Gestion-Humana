import { useEffect, useState } from "react";
import { useEmpresa } from "../components/ui/useEmpresa";
import axios from "axios";
import { API_URL } from "@/utils/constans";
import type { Extintor } from "@/Types/Extintor.d";
import { toast } from "sonner";


interface ExtintorResponse {
  datos: Extintor[];
  count: number;
  totalCount: number;
}

interface ExtintorPagi {
  totalClients: number;
}

export const useExtintor = (fecha_inspeccion?: string, id?: number | undefined) => {
  const [dataExtintor, setDataExtintor] = useState<Extintor[]>([]);
  const [ExtintorSegui, setExtintorSegui] = useState<Extintor[]>([]);
  const [page, setPage] = useState(1);
  const [pageSize] = useState(10);
  const [state, setState] = useState<ExtintorPagi>({
    totalClients: 0,
  });
  const [totalCount, setTotalCount] = useState<number>();
  const { empresa } = useEmpresa();
  console.log('first', empresa)

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      try {
        let url = `${API_URL}/extintores?zona=${empresa}&page=${page}&pageSize=${pageSize}`;
        if (fecha_inspeccion) {
          url = url.concat(`&fecha_inspeccion=${fecha_inspeccion}`);
        }if (id) {
          url = url.concat(`&ID=${id}`);
        }

        const response = await axios.get<ExtintorResponse>(url);

        if (response.status === 200) {
          setDataExtintor(response.data.datos);
          setExtintorSegui(response.data.datos);
          setTotalCount(response.data.count);
          setState((prevState) => ({
            ...prevState,
            totalClients: response.data.count,
          }));
        }
      } catch (error) {
        const errorMessage = error instanceof Error ? error.message : "Error desconocido al obtener extintores";
        toast.error(`Error fetching extintores: ${errorMessage}`);
      }
    };

    fetchData();
    const interval = setInterval(fetchData, 60000); // Refetch every 60 seconds
    return () => clearInterval(interval);
  }, [empresa, page, pageSize, fecha_inspeccion]);

  const total = Math.ceil(state.totalClients / pageSize);
  const handlePageChange = (newPage: number) => {
    setPage(newPage);
  };

  return {
    dataExtintor,
    ExtintorSegui,
    page,
    total,
    handlePageChange,
    totalCount,
  };
};
