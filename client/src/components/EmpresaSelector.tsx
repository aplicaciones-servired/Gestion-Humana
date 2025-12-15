import { empresas } from "../utils/constans";
import { useEmpresa } from "./ui/useEmpresa";
import { useEffect } from "react";

interface EmpresaSelectorProps {
  userRole?: string | null;
  userEmpresa?: string | null;
}

export default function EmpresaSelector({ userRole, userEmpresa }: EmpresaSelectorProps) {
  const { empresa, setEmpresa } = useEmpresa();

  // Si es administracion, establecer su empresa automáticamente
  useEffect(() => {
    if (userRole === "administracion" && userEmpresa) {
      // Forzar la empresa del metadata inmediatamente
      setEmpresa(userEmpresa);
    }
  }, [userRole, userEmpresa, setEmpresa]);

  const isAdministracion = userRole === "administracion";


  return (
    <select
      id="empresa"
      name="empresa"
      value={empresa}
      onChange={(e) => setEmpresa(e.target.value)}
      hidden={isAdministracion}
      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 disabled:opacity-50 disabled:cursor-not-allowed"
      title={isAdministracion ? "Tu empresa está asignada y no se puede cambiar" : ""}
    >
      <option value="">Cambiar de empresa</option>
      {empresas.map((item) => (
        <option key={item} value={item}>
          {item}
        </option>
      ))}
    </select>
  );
}
