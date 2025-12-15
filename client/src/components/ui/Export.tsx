import type { Bicicleta } from "@/Types/Bicicleta";
import type { Bodega } from "@/Types/Bodega";
import type { Botiquin } from "@/Types/Botiquin";
import type { Camilla } from "@/Types/Camilla";
import type { Extintor } from "@/Types/Extintor";
import type { Herraminetas } from "@/Types/Herraminetas";
import type { Locativa } from "@/Types/Locativa";
import type { Preopreacional } from "@/Types/Preopreacional";
import type { Proteccion } from "@/Types/Proteccion";
import { Workbook } from "exceljs";
import { toast } from "sonner";


interface PropsExport {
  registros: Extintor[] | Bodega[] | Botiquin[] | Bicicleta[] | Camilla[] | Herraminetas[] | Locativa[] | Preopreacional[] | Proteccion[];
  nombreArchivo?: string;
  empresa?: string;
}

export const exportarAExcel = async ({
  registros,
  nombreArchivo = "Reporte",
  empresa,
}: PropsExport): Promise<void> => {
  if (!registros || registros.length === 0) return;

  const wb = new Workbook();
  const ws = wb.addWorksheet("Registros");

  const headersSet = new Set<string>();
  registros.forEach((r) =>
    Object.keys(r as any).forEach((k) => headersSet.add(k))
  );

  // ⛔ Excluir campos no deseados (puedes agregar más)
  const headers = Array.from(headersSet).filter(
    (key) => key !== "id" && key !== "_id" && key !== "ip"
  );

  ws.addRow(headers);

  registros.forEach((registro) => {
    const row = headers.map((h) => {
      const v = (registro as any)[h];
      if (v === null || v === undefined) return "";
      if (typeof v === "object") {
        try {
          return JSON.stringify(v);
        } catch {
          return String(v);
        }
      }
      return v;
    });
    ws.addRow(row);
  });

  try {
    const buffer = await wb.xlsx.writeBuffer();
    const blob = new Blob([buffer], {
      type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${nombreArchivo.toUpperCase()} POR FECHA ${empresa ? empresa.toUpperCase() : ""
      }.xlsx`;
    a.click();
    window.URL.revokeObjectURL(url);
  } catch (err) {
    const errorMessage = err instanceof Error ? err.message : "Error desconocido al exportar Excel";
    toast.error(`Error exportando Excel: ${errorMessage}`);
  } 
};
