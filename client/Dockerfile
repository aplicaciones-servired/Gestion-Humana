# =========================
# Etapa de build
# =========================
FROM node:20-alpine AS build
WORKDIR /app

# 🔥 Habilitar Corepack (necesario para pnpm)
RUN corepack enable

# Copiar archivos de dependencias
COPY package.json pnpm-lock.yaml ./

# Instalar dependencias
RUN pnpm install --frozen-lockfile

# Copiar el resto del proyecto
COPY . .

# Variables públicas usadas en build (Astro)
# Variables públicas usadas en build (Astro)
ARG PUBLIC_URL_API=/api
ARG PUBLIC_CLERK_PUBLISHABLE_KEY
ENV PUBLIC_URL_API=${PUBLIC_URL_API}
ENV PUBLIC_CLERK_PUBLISHABLE_KEY=${PUBLIC_CLERK_PUBLISHABLE_KEY}

# ⚠️ IMPORTANTE: Clerk requiere esta variable en tiempo de BUILD también
ARG CLERK_SECRET_KEY
ENV CLERK_SECRET_KEY=${CLERK_SECRET_KEY}

# Build SSR
RUN pnpm run build

# =========================
# Etapa final (runtime)
# =========================
FROM node:20-alpine
WORKDIR /app

# Copiar solo lo necesario desde build
COPY --from=build /app/dist ./dist
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/package.json ./package.json

# ⚠️ Copiar el archivo .env para que esté disponible en runtime
COPY --from=build /app/.env ./.env

ENV NODE_ENV=production

EXPOSE 4321

# Arranque del servidor Astro
CMD ["node", "./dist/server/entry.mjs", "--host", "0.0.0.0", "--port", "4321"]
