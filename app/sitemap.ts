// Archivo sitemap.ts - Genera el mapa del sitio para motores de busqueda
// Se genera automaticamente como /sitemap.xml

import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const SITE_URL = "https://lsolglobal.com.mx";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${SITE_URL}/productos`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
  ];
}
