// src/middleware.mjs
import {
  clerkClient,
  clerkMiddleware,
  createRouteMatcher,
} from "@clerk/astro/server";

// Rutas protegidas del FRONTEND
const isProtectedRoute = createRouteMatcher([
  "/Home(.*)",
  "/Extintor(.*)",
  "/Bodega(.*)",
  "/Botiquin(.*)",
  "/Bicicleta(.*)",
  "/Camilla(.*)",
  "/Proteccion(.*)",
  "/Herraminetas(.*)",
  "/Preopreacional(.*)",
  "/Locativa(.*)",
]);

// Página de login
const isLoginPage = createRouteMatcher(["/"]);

export const onRequest = clerkMiddleware(
  async (auth, context, next) => {
    const { userId, redirectToSignIn, sessionId } = auth();
    const url = new URL(context.request.url);
    const pathname = url.pathname;

    // ⛔ Si es API y NO hay sesión → devolver 401 (no redirigir)
    if (!userId && pathname.startsWith("/api/")) {
      return new Response("Unauthorized", { status: 401 });
    }

    // ⛔ Si es página protegida y NO hay sesión → redirigir a login
    if (!userId && isProtectedRoute(context.request)) {
      return redirectToSignIn({ returnBackUrl: url.href });
    }
    // 🎯 Obtener usuario y rol cuando está autenticado
    let user = null;
    let role = null;
    let empresa = null;

    if (userId) {
      user = await clerkClient(context).users.getUser(userId);
      role = user.publicMetadata.role as string | undefined;
      empresa = user.publicMetadata.empresa as string | undefined;
      // Pasar el rol y empresa a Astro.locals para que estén disponibles en los componentes
      context.locals.userRole = role || null;
      context.locals.userEmpresa = empresa || null;
    }

    // 🚫 Usuario con sesión pero SIN permisos → enviar a expulsión
    if (
      userId &&
      isProtectedRoute(context.request) &&
      role !== "admin" &&
      role !== "gestion humana" &&
      role !== "administracion"
    ) {
      await clerkClient(context).sessions.revokeSession(sessionId);
      return Response.redirect(`${url.origin}/unauthorized`, 302);
    }

    // Si el usuario ya está logueado y va al login → redirigir
    if (userId && isLoginPage(context.request)) {
      return Response.redirect(`${url.origin}/Home`, 302);
    }

    // 🔒 Proteger rutas de inspecciones para usuario "administracion"
    // Solo pueden acceder admin y gestion humana
    const inspeccionRoutes = [
      "/Extintor",
      "/Bodega",
      "/Botiquin",
      "/Bicicleta",
      "/Camilla",
      "/Proteccion",
      "/Herraminetas",
      "/Preopreacional",
      "/Locativa",
    ];

    const isInspeccionRoute = inspeccionRoutes.some((route) =>
      pathname.startsWith(route)
    );

    if (userId && isInspeccionRoute && role === "administracion") {
      return Response.redirect(`${url.origin}/Home`, 302);
    }

    const response = await next();

    // Evitar cache en rutas sensibles
    if (isProtectedRoute(context.request) || isLoginPage(context.request)) {
      response.headers.set(
        "Cache-Control",
        "no-store, no-cache, must-revalidate, proxy-revalidate"
      );
      response.headers.set("Pragma", "no-cache");
      response.headers.set("Expires", "0");
    }

    return response;
  },
  {
    authorizedParties: ["http://localhost:4321", "http://localhost:3000", "https://gestion.serviredgane.cloud/"],
  }
);
