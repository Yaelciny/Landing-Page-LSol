// Archivo robots.ts - Indica a los buscadores que pueden y que no pueden rastrear
// Se genera automaticamente como /robots.txt

import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const SITE_URL = "https://lsolglobal.com.mx";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/", "/private/"],
      },
      {
        userAgent: "Googlebot",
        allow: "/",
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
