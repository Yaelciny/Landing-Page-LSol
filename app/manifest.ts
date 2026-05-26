// Archivo manifest.ts - Web App Manifest para PWA y mobile
// Proporciona informacion de la app al navegador

import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "LSol Comercializadora Internacional",
    short_name: "LSol",
    description:
      "Suministro estratégico de materias primas e insumos químicos para la industria. Importación y distribución con respaldo global.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#c60c0c",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
