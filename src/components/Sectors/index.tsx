"use client";

import { siteData } from "@/data/data";
import { motion } from "framer-motion";
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

const iconMap: Record<number, React.ReactNode> = {
  1: <Droplets className="size-7" />,
  2: <Flame className="size-7" />,
  3: <UtensilsCrossed className="size-7" />,
  4: <Waves className="size-7" />,
  5: <CircleDot className="size-7" />,
  6: <Sparkles className="size-7" />,
  7: <Palette className="size-7" />,
  8: <Shirt className="size-7" />,
  9: <ScrollText className="size-7" />,
  10: <FlaskConical className="size-7" />,
};

export default function Sectors() {
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {siteData.sectors.map((sector, i) => (
            <motion.div
              key={sector.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.4 }}
              className="bg-card border border-border rounded-3xl p-6 text-center hover:shadow-lg transition-all hover:-translate-y-1 group"
            >
              <div className="size-14 rounded-2xl icon-container-base mx-auto mb-4 group-hover:bg-primary group-hover:scale-110 transition-all">
                {iconMap[sector.id]}
              </div>
              <h3 className="text-base font-semibold text-foreground mb-2">
                {sector.name}
              </h3>
              <p className="text-sm text-muted-foreground">
                {sector.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
