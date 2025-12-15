# Base de Node.js (misma versión que Jenkins)
FROM node:20-slim

# Carpeta de la app
WORKDIR /app

# 🔥 Habilitar Corepack (OBLIGATORIO para pnpm)
RUN corepack enable

# Copiar solo lo necesario primero (mejor cache)
COPY package.json pnpm-lock.yaml ./

# Instalar dependencias con pnpm
RUN pnpm install --frozen-lockfile

# Copiar el resto del código
COPY . .

# Exponer el puerto del backend
EXPOSE 3000

# Comando de arranque
CMD ["pnpm", "start"]
