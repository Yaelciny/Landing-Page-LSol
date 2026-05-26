// Layout raiz de la aplicacion - Define la estructura HTML base
// Configura fuentes, metadatos globales e importa estilos globales

import { Geist, Geist_Mono, Sora } from "next/font/google";
import { Metadata } from "next";
import { siteData } from "@/data/nat";
import "./globals.css";  // Estilos globales con Tailwind

// URL base del sitio - Cambiar cuando se tenga dominio definitivo
const SITE_URL = "https://lsolglobal.com.mx";

// Configuracion de fuentes de Google Fonts
const geistSans = Geist({
  variable: "--font-geist-sans",  // Fuente para texto normal
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",  // Fuente monoespaciada
  subsets: ["latin"],
});

const sora = Sora({
  variable: "--font-sora",  // Fuente para titulos
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

// Metadatos globales compartidos por todas las paginas
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${siteData.siteName} | Materias Primas e Insumos Químicos Industriales`,
    template: `%s | ${siteData.siteName}`,
  },
  description: siteData.siteDescription,
  keywords: [
    "comercializadora internacional",
    "materias primas",
    "insumos químicos",
    "importación de químicos",
    "distribución industrial",
    "logística de materias primas",
    "industria curtidora",
    "plastificantes",
    "solventes industriales",
    "tratamiento de aguas",
    "sector alimenticio",
    "químicos especializados",
    "LSol",
    "León Guanajuato",
    "México",
  ],
  authors: [{ name: siteData.siteName }],
  creator: siteData.siteName,
  publisher: siteData.siteName,
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    type: "website",
    locale: "es_MX",
    url: SITE_URL,
    siteName: siteData.siteName,
    title: `${siteData.siteName} | Materias Primas e Insumos Químicos`,
    description: siteData.siteDescription,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: `${siteData.siteName} - Suministro estratégico de materias primas e insumos químicos`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteData.siteName} | Materias Primas e Insumos Químicos`,
    description: siteData.siteDescription,
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Descomentar y agregar los codigos de verificacion cuando esten disponibles
    // google: "tu-codigo-de-verificacion-google",
    // yandex: "tu-codigo-de-verificacion-yandex",
  },
};

// Layout principal que envuelve a todas las paginas
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Schema.org JSON-LD para datos estructurados (LocalBusiness)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: siteData.siteName,
    description: siteData.siteDescription,
    url: SITE_URL,
    telephone: `+52${siteData.contact.phone.replace(/\s/g, "")}`,
    email: siteData.contact.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteData.contact.address,
      addressLocality: "León",
      addressRegion: "Guanajuato",
      addressCountry: "MX",
      postalCode: "37669",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 21.176655,
      longitude: -101.765860,
    },
    image: `${SITE_URL}/og-image.png`,
    priceRange: "$$",
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
    sameAs: [],
    areaServed: {
      "@type": "Country",
      name: "México",
    },
    knowsAbout: [
      "Materias primas industriales",
      "Insumos químicos",
      "Importación y distribución",
      "Logística de cadena de suministro",
    ],
  };

  return (
    <html
      lang="es"
      data-scroll-behavior="smooth"
      className={`${geistSans.variable} ${geistMono.variable} ${sora.variable} h-full antialiased`}
    >
      <head>
        {/* JSON-LD Datos estructurados para Google */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}  {/* Renderiza el contenido de la pagina */}
      </body>
    </html>
  );
}
