import { useMemo, useState } from "react";
import type { Locativa } from "@/Types/Locativa.d";

interface FilterLocativa {
  filteredData: Locativa[];
  searchfecha: string;
  setSearchFecha: React.Dispatch<React.SetStateAction<string>>;
}

function filterByFecha(data: Locativa[], searchFecha: string): Locativa[] {
  return data.filter(
    ({ fecha_inspeccion }) =>
      fecha_inspeccion?.toLowerCase().includes(searchFecha.toLowerCase()) ??
      false
  );
}

export function useFiltersLocativa(data: Locativa[]): FilterLocativa {
  const [searchfecha, setSearchFecha] = useState("");

  const filteredData = useMemo(() => {
    let filtered = data;
    if (searchfecha) filtered = filterByFecha(filtered, searchfecha);
    return filtered;
  }, [data, searchfecha]);

  return { searchfecha, setSearchFecha, filteredData };
}
