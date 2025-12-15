/// <reference types="astro/client" />

// Extensión de tipos de Astro para agregar propiedades personalizadas a locals
declare namespace App {
  interface Locals {
    userRole: string | null;
    userEmpresa: string | null;
  }
}
