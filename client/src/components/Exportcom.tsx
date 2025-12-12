import { useState } from "react";
import { toast } from "sonner";
import { API_URL, Inspecciones } from "@/utils/constans";
import axios from "axios";
import { useEmpresa } from "./ui/useEmpresa";
import type { Bicicleta } from "@/Types/Bicicleta";
import type { Bodega } from "@/Types/Bodega";
import type { Botiquin } from "@/Types/Botiquin";
import type { Camilla } from "@/Types/Camilla";
import type { Extintor } from "@/Types/Extintor";
import type { Herraminetas } from "@/Types/Herraminetas";
import type { Locativa } from "@/Types/Locativa";
import type { Preopreacional } from "@/Types/Preopreacional";
import type { Proteccion } from "@/Types/Proteccion";
import { exportarAExcel } from "./ui/Export";

interface PropsExport {
  data?: Extintor[] | Bodega[] | Botiquin[] | Bicicleta[] | Camilla[] | Herraminetas[] | Locativa[] | Preopreacional[] | Proteccion[];
}

export const Exportcom = ({ data }: PropsExport) => {
  const [fechaInicio, setFechaInicio] = useState("");
  const [fechaFin, setFechaFin] = useState("");
  const [inspeccion, setInspeccion] = useState<string>("");


  // changed code: obtener empresa desde context/hook
  const { empresa } = useEmpresa();

  const exportarRegistros = async (): Promise<void> => {
    if (!fechaInicio || !fechaFin) {
      toast.warning("Fechas de inicio y fin deben ser seleccionadas", {
        duration: 1000,
      });
      return;
    }

    if (!inspeccion) {
      toast.warning("Debe seleccionar una inspección", {
        duration: 1000,
      });
      return;
    }

    if (!empresa) {
      toast.error("Empresa no seleccionada", { duration: 1500 });
      return;
    }

    const inicio = new Date(fechaInicio);
    const fin = new Date(fechaFin);

    if (inicio > fin) {
      toast.error("La fecha de inicio no puede ser mayor a la fecha fin");
      return;
    }

    const promesa = (async () => {
      const base =
        typeof API_URL === "string" ? API_URL.replace(/\/+$/, "") : API_URL;
      if (!base) {
        throw new Error("API_URL inválida en frontend");
      }

      // Mapeo de inspección seleccionada a endpoint
      const endpointMap: Record<string, string> = {
        "Extintor": "extintores",
        "Bodega": "bodega",
        "Botiquin": "botiquin",
        "Bicicleta": "bicicleta",
        "Camilla": "camilla",
        "Herramientas": "herramienta",
        "Locativa": "locativa",
        "Preoperacional": "preoperacional",
        "Proteccion": "proteccion",
      };

      const endpoint = endpointMap[inspeccion];
      if (!endpoint) {
        throw new Error("Inspección no válida");
      }

      // Determinar si necesita zona o no (Bicicleta y Preoperacional no usan zona)
      const needsZona = !["Bicicleta", "Preoperacional"].includes(inspeccion);
      const zonaParam = needsZona ? `zona=${empresa}&` : "";
      
      const url = `${base}/${endpoint}?${zonaParam}fechaInicio=${fechaInicio}&fechaFin=${fechaFin}&pageSize=1000000`;

      const response = await axios.get(url);
      const todos: any[] = response.data?.datos ?? response.data ?? [];

      if (todos.length === 0) {
        throw new Error("No hay registros para exportar en el rango seleccionado");
      }

      // Exportar a Excel
      await exportarAExcel({
        registros: todos,
        nombreArchivo: `${inspeccion}_${fechaInicio}_${fechaFin}`,
        empresa: empresa
      });
      
      return todos.length;
    })();

    toast.promise(promesa, {
      loading: "Consultando registros...",
      success: (count) => `Se encontraron ${count} registros`,
      error: (err) => err.message || "Error al obtener registros",
      duration: 9000,
    });
  };

  return (
    <section className="container px-4 mt-5 align-center mx-auto">
      <div className="mb-6 p-4 bg-white border border-indigo-200 rounded-lg shadow-lg shadow-blue-300/50">
        <h3 className="text-lg font-medium text-gray-700 mb-4">
          Exportar Inspecciones {inspeccion && `- ${inspeccion}`}
        </h3>

        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Tipo de Inspección
            </label>
            <select
              id="inspeccion"
              name="inspeccion"
              value={inspeccion}
              onChange={(e) => setInspeccion(e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            >
              <option value="">Elige la inspección</option>
              {Inspecciones.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>

          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Fecha Inicio
              <input
                type="date"
                value={fechaInicio}
                onChange={(e) => setFechaInicio(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
              />
            </label>
          </div>

          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Fecha Fin
              <input
                type="date"
                value={fechaFin}
                onChange={(e) => setFechaFin(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
              />
            </label>
          </div>

          <div className="flex items-end">
            <button onClick={exportarRegistros} className="cursor-pointer flex items-center px-3 py-2.5 md:px-[18px] md:py-3.5 text-white no-underline transition-colors duration-200 hover:text-gray-200 bg-gradient-to-r from-[#3245ff] to-[#bc52ee] rounded-[10px] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.12),inset_0_-2px_0_rgba(0,0,0,0.24)] hover:shadow-none">Exportar</button>
          </div>
        </div>
      </div>
    </section>
  );
};
