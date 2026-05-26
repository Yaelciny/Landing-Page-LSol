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

export const metadata: Metadata = {
  title: `Productos | ${siteData.siteName}`,
  description:
    "Catálogo completo de materias primas e insumos químicos por sector industrial. Encuentre el producto que necesita para su industria.",
  keywords: [
    "productos químicos",
    "materias primas",
    "insumos industriales",
    "catálogo",
    "LSol",
  ],
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
