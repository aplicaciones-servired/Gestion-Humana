import { useUser } from "@clerk/clerk-react";

export const useUserRole = () => {
  const { user } = useUser();
  const role = user?.publicMetadata?.role as string | undefined;

  
  return {
    role: role || null,
    isAdmin: role === "admin",
    isGestionHumana: role === "gestion humana",
    isAdministracion: role === "administracion",
    canAccessAll: role === "admin" || role === "gestion humana",
  };
};
