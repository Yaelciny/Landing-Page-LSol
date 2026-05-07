// Pagina principal de la landing page - Ensambla todas las secciones
// Esta es la estructura principal que el usuario ve al entrar al sitio

import { Metadata } from "next";
import { siteData } from "@/data/data";
import Navbar from "@/components/Navbar";       // Barra de navegacion superior
import Hero from "@/components/Hero";           // Seccion principal con carrusel de banners
import About from "@/components/About";         // Seccion Sobre Nosotros
import Logistics from "@/components/Logistics";  // Seccion de Soluciones Logísticas
import Sectors from "@/components/Sectors";      // Seccion de Industrias y Sectores
import Contact from "@/components/Contact";      // Seccion de Contacto con formulario
import Footer from "@/components/Footer";        // Pie de pagina
import WhatsAppButton from "@/components/Contact/WhatsAppButton"; // Boton flotante de WhatsApp

// Configuracion de metadatos SEO para la pagina principal
// Esto ayuda a los buscadores a entender de que trata el sitio
export const metadata: Metadata = {
  title: {
    default: siteData.siteName,
    template: `%s | ${siteData.siteName}`,
  },
  description: siteData.siteDescription,
  keywords: [
    "comercializadora internacional",
    "materias primas",
    "insumos químicos",
    "importación",
    "distribución",
    "logística",
    "industria",
    "LSol",
  ],
  authors: [{ name: siteData.siteName }],
  openGraph: {
    title: siteData.siteName,
    description: siteData.siteDescription,
    type: "website",
    locale: "es_MX",
  },
  twitter: {
    card: "summary_large_image",
    title: siteData.siteName,
    description: siteData.siteDescription,
  },
  robots: {
    index: true,
    follow: true,
  },
};

// Componente principal que renderiza toda la landing page
// El orden de las secciones define como se ven en el sitio
export default function Home() {
  return (
    <>
      <Navbar /> {/* Barra de navegacion fija arriba */}
      <main className="pt-14 lg:pt-20"> {/* Espacio para que no se tape con el navbar */}
        <Hero />       {/* Seccion 1: Carrusel de banners principal */}
        <About />      {/* Seccion 2: Informacion sobre la empresa */}
        <Logistics />  {/* Seccion 3: Soluciones logísticas ofrecidas */}
        <Sectors />    {/* Seccion 4: Industrias y sectores atendidos */}
        <Contact />    {/* Seccion 5: Formulario de contacto e informacion */}
      </main>
      <Footer />       {/* Pie de pagina con enlaces e info de contacto */}
      <WhatsAppButton /> {/* Boton flotante que aparece al hacer scroll */}
    </>
  );
}
