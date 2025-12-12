import { useMemo, useState } from "react";
import type { Bodega } from "@/Types/Bodega.d";

interface FilterBodega {
  filteredData: Bodega[];
  searchfecha: string;
  setSearchFecha: React.Dispatch<React.SetStateAction<string>>;
}

function filterByFecha(data: Bodega[], searchFecha: string): Bodega[] {
  return data.filter(
    ({ fecha_inspeccion }) =>
      fecha_inspeccion?.toLowerCase().includes(searchFecha.toLowerCase()) ??
      false
  );
}

export function useFiltersBodega(data: Bodega[]): FilterBodega {
  const [searchfecha, setSearchFecha] = useState("");

  const filteredData = useMemo(() => {
    let filtered = data;
    if (searchfecha) filtered = filterByFecha(filtered, searchfecha);
    return filtered;
  }, [data, searchfecha]);

  return { searchfecha, setSearchFecha, filteredData };
}
