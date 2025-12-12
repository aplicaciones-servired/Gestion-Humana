import { useMemo, useState } from "react";
import type { Preopreacional } from "@/Types/Preopreacional.d";

interface FilterPreopreacional {
  filteredData: Preopreacional[];
  searchfecha: string;
  setSearchFecha: React.Dispatch<React.SetStateAction<string>>;
}

function filterByFecha(data: Preopreacional[], searchFecha: string): Preopreacional[] {
  return data.filter(
    ({ fecha }) =>
      fecha?.toLowerCase().includes(searchFecha.toLowerCase()) ??
      false
  );
}

export function useFiltersPreopreacional(data: Preopreacional[]): FilterPreopreacional {
  const [searchfecha, setSearchFecha] = useState("");

  const filteredData = useMemo(() => {
    let filtered = data;
    if (searchfecha) filtered = filterByFecha(filtered, searchfecha);
    return filtered;
  }, [data, searchfecha]);

  return { searchfecha, setSearchFecha, filteredData };
}
