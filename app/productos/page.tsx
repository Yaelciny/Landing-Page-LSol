// Pagina de Productos - Muestra todos los sectores y sus productos
// Se navega desde las cards de sectores en la landing page

import { Metadata } from "next";
import { siteData } from "@/data/nat";
import Navbar from "@/components/Navbar";
import dynamic from "next/dynamic";
import ProductosContent from "@/components/Productos/ProductosContent";

const Footer = dynamic(() => import("@/components/Footer"));
const WhatsAppFloat = dynamic(
  () => import("@/components/Contact/WhatsAppButton")
);

// Metadata especifica para la pagina de productos
export const metadata: Metadata = {
  title: "Catálogo de Productos por Sector Industrial",
  description:
    "Catálogo completo de materias primas e insumos químicos por sector industrial: curtidora, plastificantes, alimenticio, tratamiento de aguas, textil y más. Encuentra el producto que necesita tu industria.",
  keywords: [
    "catálogo productos químicos",
    "materias primas industriales",
    "insumos químicos México",
    "carbonato de sodio",
    "ácido cítrico",
    "sulfato de aluminio",
    "acetona industrial",
    "tolueno",
    "glicerina",
    "industria curtidora químicos",
    "tratamiento de aguas productos",
  ],
  alternates: {
    canonical: "/productos",
  },
  openGraph: {
    title: `Catálogo de Productos | ${siteData.siteName}`,
    description:
      "Explore nuestro portafolio completo de materias primas e insumos químicos organizados por sector industrial.",
    url: "/productos",
  },
};

export default function ProductosPage() {
  return (
    <>
      <Navbar />
      <main className="pt-14 lg:pt-12">
        <ProductosContent />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
