import { useUser } from "@clerk/clerk-react";

export const useUserRole = () => {
  const { user } = useUser();
  const empresa = user?.publicMetadata?.empresa as string | undefined;

  
  return {
    empresa: empresa || null,
    isServired: empresa === "Servired",
    isMultireired: empresa === "Multired",
  };
};
