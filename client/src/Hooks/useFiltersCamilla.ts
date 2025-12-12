import { useMemo, useState } from "react";
import type { Camilla } from "@/Types/Camilla.d";

interface FilterCamilla {
  filteredData: Camilla[];
  searchfecha: string;
  setSearchFecha: React.Dispatch<React.SetStateAction<string>>;
}

function filterByFecha(data: Camilla[], searchFecha: string): Camilla[] {
  return data.filter(
    ({ fecha_inspeccion }) =>
      fecha_inspeccion?.toLowerCase().includes(searchFecha.toLowerCase()) ??
      false
  );
}

export function useFiltersCamilla(data: Camilla[]): FilterCamilla {
  const [searchfecha, setSearchFecha] = useState("");

  const filteredData = useMemo(() => {
    let filtered = data;
    if (searchfecha) filtered = filterByFecha(filtered, searchfecha);
    return filtered;
  }, [data, searchfecha]);

  return { searchfecha, setSearchFecha, filteredData };
}
