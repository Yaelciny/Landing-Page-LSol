"use client";

import { siteData } from "@/data/data";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  Droplets,
  Flame,
  UtensilsCrossed,
  Waves,
  CircleDot,
  Sparkles,
  Palette,
  Shirt,
  ScrollText,
  FlaskConical,
} from "lucide-react";

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
  const mainSectors = siteData.sectors.filter(s => s.isMain);
  const otherSectors = siteData.sectors.filter(s => !s.isMain);

  return (
    <section id="sectores" className="section-padding bg-background scroll-mt-24">
      <div className="container">
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
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative h-64 rounded-2xl overflow-hidden group cursor-pointer bg-muted flex items-center justify-center"
              >
                {sector.image ? (
                  <Image
                    src={sector.image}
                    alt={sector.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                ) : (
                  <div className="text-muted-foreground text-center p-4">
                    <p>[Insertar fotografía {i + 1}]</p>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-white font-semibold text-lg">{sector.name}</h3>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {otherSectors.map((sector, i) => {
            const Icon = iconMap[sector.id];
            return (
              <motion.div
                key={sector.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="group relative bg-card border border-border rounded-2xl p-6 text-center hover:shadow-xl hover:-translate-y-2 transition-all duration-300 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative z-10">
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
