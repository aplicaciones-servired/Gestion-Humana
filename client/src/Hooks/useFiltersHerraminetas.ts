import { useMemo, useState } from "react";
import type { Herraminetas } from "@/Types/Herraminetas.d";

interface FilterHerraminetas {
  filteredData: Herraminetas[];
  searchfecha: string;
  setSearchFecha: React.Dispatch<React.SetStateAction<string>>;
}

function filterByFecha(data: Herraminetas[], searchFecha: string): Herraminetas[] {
  return data.filter(
    ({ fecha_inspeccion }) =>
      fecha_inspeccion?.toLowerCase().includes(searchFecha.toLowerCase()) ??
      false
  );
}

export function useFiltersHerraminetas(data: Herraminetas[]): FilterHerraminetas {
  const [searchfecha, setSearchFecha] = useState("");

  const filteredData = useMemo(() => {
    let filtered = data;
    if (searchfecha) filtered = filterByFecha(filtered, searchfecha);
    return filtered;
  }, [data, searchfecha]);

  return { searchfecha, setSearchFecha, filteredData };
}
