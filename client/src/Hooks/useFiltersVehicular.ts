import { useMemo, useState } from "react";
import type { Vehicular } from "@/Types/Vehicular";

interface FilterVehicular {
  filteredVehicular: Vehicular[];
  searchfecha: string;
  setSearchFecha: React.Dispatch<React.SetStateAction<string>>;
}

function filterByFecha(vehicular: Vehicular[], searchFecha: string): Vehicular[] {
  return vehicular.filter(
    ({ fecha }) =>
      fecha?.toLowerCase().includes(searchFecha.toLowerCase()) ?? false
  );
}

export function useFiltersVehicular(vehicular: Vehicular[]): FilterVehicular {
  const [searchfecha, setSearchFecha] = useState("");

  const filteredVehicular = useMemo(() => {
    let filtered = vehicular;
    if (searchfecha) filtered = filterByFecha(filtered, searchfecha);
    return filtered;
  }, [vehicular, searchfecha]);

  return { searchfecha, setSearchFecha, filteredVehicular };
}
