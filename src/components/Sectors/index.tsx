// Seccion de Industrias y Sectores - 10 sectores atendidos
// 4 principales con imagen grande arriba, 6 secundarios con icono abajo

"use client";

import { siteData } from "@/data/nat";
import { motion } from "framer-motion";
import Image from "next/image";
import {  // Iconos para los sectores secundarios
  Droplets,        // Curtidora
  Flame,           // Plastificantes
  UtensilsCrossed, // Alimenticio
  Waves,           // Tratamiento de Aguas
  CircleDot,       // Hulera
  Sparkles,        // Detergentes
  Palette,         // Cosmetica
  Shirt,           // Textil
  ScrollText,      // Papel
  FlaskConical,    // Quimicos Especializados
} from "lucide-react";

// Mapa de iconos para sectores secundarios (los que no son isMain)
const iconMap: Record<number, React.ElementType> = {
  1: Droplets,
  2: Flame,
  3: UtensilsCrossed,
  4: Waves,
  5: CircleDot,
  6: Sparkles,
  7: Palette,
  8: Shirt,
  9: ScrollText,
  10: FlaskConical,
};

export default function Sectors() {
  // Filtra sectores principales (isMain=true) y secundarios
  const mainSectors = siteData.sectors.filter(s => s.isMain);
  const otherSectors = siteData.sectors.filter(s => !s.isMain);

  return (
    <section id="sectores" className="section-padding bg-background scroll-mt-24">
      <div className="container">
        {/* Titulo de la seccion */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-header-wrapper"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Industrias y Sectores
          </h2>
        </motion.div>

        {/* Sectores principales con imagenes grandes (4 columnas) */}
        {mainSectors.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12"
          >
            {mainSectors.map((sector, i) => (
              <motion.div
                key={sector.id}
                initial={{ opacity: 0, scale: 0.9 }}  // Empieza pequeno
                whileInView={{ opacity: 1, scale: 1 }}  // Escala a tamano normal
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative h-64 rounded-2xl overflow-hidden group cursor-pointer bg-muted flex items-center justify-center"
              >
                {/* Muestra imagen si existe, sino placeholder */}
                {sector.image ? (
                  <Image
                    src={sector.image}
                    alt={sector.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                ) : (
                  <div className="text-muted-foreground text-center p-4">
                    <p> imagen {i + 1}</p>
                  </div>
                )}
                {/* Overlay oscuro degradado para legibilidad del texto */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-white font-semibold text-lg">{sector.name}</h3>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* Sectores secundarios con iconos (6 columnas) */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {otherSectors.map((sector, i) => {
            const Icon = iconMap[sector.id];
            return (
              <motion.div
                key={sector.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}  // Animacion mas rapida
                className="group relative bg-card border border-border rounded-2xl p-6 text-center hover:shadow-xl hover:-translate-y-2 transition-all duration-300 overflow-hidden"
              >
                {/* Fondo degradado que aparece al hacer hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative z-10">
                  {/* Icono que cambia de color al hacer hover */}
                  <div className="size-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mx-auto mb-4 group-hover:bg-primary group-hover:text-white transition-all duration-300 group-hover:scale-110">
                    {Icon && <Icon className="size-8" />}
                  </div>
                  <h3 className="text-sm font-semibold text-foreground mb-2">
                    {sector.name}
                  </h3>
                  <p className="text-xs text-muted-foreground hidden md:block">
                    {sector.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
