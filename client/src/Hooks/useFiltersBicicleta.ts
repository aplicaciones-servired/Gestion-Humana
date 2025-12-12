import { useMemo, useState } from "react";
import type { Bicicleta } from "@/Types/Bicicleta.d";

interface FilterBicicleta {
  filteredData: Bicicleta[];
  searchfecha: string;
  setSearchFecha: React.Dispatch<React.SetStateAction<string>>;
}

function filterByFecha(data: Bicicleta[], searchFecha: string): Bicicleta[] {
  return data.filter(
    ({ fecha_inspeccion }) =>
      fecha_inspeccion?.toLowerCase().includes(searchFecha.toLowerCase()) ??
      false
  );
}

export function useFiltersBicicleta(data: Bicicleta[]): FilterBicicleta {
  const [searchfecha, setSearchFecha] = useState("");

  const filteredData = useMemo(() => {
    let filtered = data;
    if (searchfecha) filtered = filterByFecha(filtered, searchfecha);
    return filtered;
  }, [data, searchfecha]);

  return { searchfecha, setSearchFecha, filteredData };
}
