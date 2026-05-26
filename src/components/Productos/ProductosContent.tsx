// Contenido principal de la pagina de Productos
// Renderiza todos los sectores con sus productos y maneja el scroll al sector correcto

"use client";

import { useEffect } from "react";
import { siteData } from "@/data/nat";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  CircleDot,
  Sparkles,
  Palette,
  Shirt,
  ScrollText,
  FlaskConical,
  ArrowLeft,
  Package,
} from "lucide-react";

// Mapa de iconos para sectores sin imagen
const iconMap: Record<number, React.ElementType> = {
  5: CircleDot,
  6: Sparkles,
  7: Palette,
  8: Shirt,
  9: ScrollText,
  10: FlaskConical,
};

// Colores sutiles para las tarjetas de productos por sector
const sectorAccents: Record<number, string> = {
  1: "from-pink-500/10 to-rose-500/5",
  2: "from-pink-500/10 to-rose-500/5",
  3: "from-pink-500/10 to-rose-500/5",
  4: "from-pink-500/10 to-rose-500/5",
  5: "from-pink-500/10 to-rose-500/5",
  6: "from-pink-500/10 to-rose-500/5",
  7: "from-pink-500/10 to-rose-500/5",
  8: "from-pink-500/10 to-rose-500/5",
  9: "from-pink-500/10 to-rose-500/5",
  10: "from-pink-500/10 to-rose-500/5",
};

export default function ProductosContent() {
  // Scroll automatico al sector correcto si hay un hash en la URL
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      // Pequeño delay para asegurar que el DOM se renderizo
      const timer = setTimeout(() => {
        const el = document.querySelector(hash);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 300);
      return () => clearTimeout(timer);
    }
  }, []);

  const sectorsWithProducts = siteData.sectors.filter(
    (s) => s.products && s.products.length > 0
  );

  return (
    <section className="section-padding bg-background">
      <div className="container">
        {/* Header con boton de regreso */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <Link
            href="/#sectores"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8 group"
          >
            <ArrowLeft className="size-4 group-hover:-translate-x-1 transition-transform" />
            Volver al inicio
          </Link>

          <div className="section-header-wrapper">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Catálogo de Productos
            </h1>
            <p className="section-description">
              Explore nuestro portafolio completo de materias primas e insumos
              químicos organizados por sector industrial.
            </p>
          </div>

          {/* Navegacion rapida por sector */}
          <div className="flex flex-wrap justify-center gap-2 mt-8">
            {sectorsWithProducts.map((sector) => (
              <a
                key={sector.id}
                href={`#sector-${sector.id}`}
                className="px-4 py-2 text-xs font-medium rounded-full border border-border bg-card hover:bg-primary hover:text-white hover:border-primary transition-all duration-300"
              >
                {sector.name}
              </a>
            ))}
          </div>
        </motion.div>

        {/* Lista de sectores con productos */}
        <div className="space-y-20">
          {sectorsWithProducts.map((sector, index) => {
            const Icon = iconMap[sector.id];
            const accent = sectorAccents[sector.id] || "from-primary/10 to-transparent";

            return (
              <motion.div
                key={sector.id}
                id={`sector-${sector.id}`}
                className="scroll-mt-28"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                {/* Encabezado del sector */}
                <div className="flex flex-col md:flex-row items-start gap-6 mb-8">
                  {/* Imagen o icono del sector */}
                  {sector.image ? (
                    <div className="relative w-full md:w-48 h-32 md:h-32 rounded-2xl overflow-hidden flex-shrink-0">
                      <Image
                        src={sector.image}
                        alt={sector.name}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    </div>
                  ) : (
                    <div className={`size-16 md:size-20 rounded-2xl bg-gradient-to-br ${accent} flex items-center justify-center flex-shrink-0`}>
                      {Icon && <Icon className="size-8 md:size-10 text-primary" />}
                    </div>
                  )}

                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                        Sector {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        {sector.products?.length || 0} productos
                      </span>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                      {sector.name}
                    </h2>
                    <p className="text-muted-foreground">{sector.description}</p>
                  </div>
                </div>

                {/* Grid de productos */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
                  {sector.products?.map((product, i) => (
                    <motion.div
                      key={product}
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.03 }}
                      className={`group relative bg-card border border-border rounded-xl p-4 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 overflow-hidden`}
                    >
                      {/* Fondo degradado sutil */}
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${accent} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                      />
                      <div className="relative z-10 flex items-center gap-3">
                        <div className="size-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                          <Package className="size-4" />
                        </div>
                        <span className="text-sm font-medium text-foreground leading-tight">
                          {product}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Separador entre sectores */}
                {index < sectorsWithProducts.length - 1 && (
                  <div className="mt-16 border-b border-border/50" />
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
