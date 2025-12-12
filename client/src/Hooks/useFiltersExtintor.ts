import { useMemo, useState } from "react";
import type { Extintor } from "@/Types/Extintor.d";

interface FilterPDV {
  filteredPDV: Extintor[];
  searchfecha: string;
  setSearchFecha: React.Dispatch<React.SetStateAction<string>>;
}

function filterByFecha(pdv: Extintor[], searchFecha: string): Extintor[] {
  return pdv.filter(
    ({ fecha_inspeccion }) =>
      fecha_inspeccion?.toLowerCase().includes(searchFecha.toLowerCase()) ??
      false
  );
}

export function useFiltersExtintor(pdv: Extintor[]): FilterPDV {
  const [searchfecha, setSearchFecha] = useState("");

  const filteredPDV = useMemo(() => {
    let filtered = pdv;
    if (searchfecha) filtered = filterByFecha(filtered, searchfecha);
    return filtered;
  }, [pdv, , searchfecha]);

  return { searchfecha, setSearchFecha, filteredPDV };
}
