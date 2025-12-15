// --- Empresas y tipos disponibles
export const empresas = ['Multired', 'Servired'];
export const tipos = ['PROGRAMACION DEL MES', 'ARQUEO DE RETIRO'];
export const Inspecciones = ['Extintor', 'Bodega', 'Botiquin', 'Bicicleta', 'Camilla', 'Herramientas', 'Locativa', 'Preoperacional', 'Proteccion', 'Vehicular'];

// Filtrar inspecciones según el rol del usuario
export const getInspeccionesPorRol = (role: string | null | undefined): string[] => {
  if (role === 'administracion') {
    return ['Vehicular'];
  }
  // admin y gestion humana pueden ver todas
  return Inspecciones;
};

// --- Variables de entorno públicas (client + server)
export const API_URL = import.meta.env.PUBLIC_URL_API;
