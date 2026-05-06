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
  1: <Droplets className="w-8 h-8" />,
  2: <Flame className="w-8 h-8" />,
  3: <UtensilsCrossed className="w-8 h-8" />,
  4: <Waves className="w-8 h-8" />,
  5: <CircleDot className="w-8 h-8" />,
  6: <Sparkles className="w-8 h-8" />,
  7: <Palette className="w-8 h-8" />,
  8: <Shirt className="w-8 h-8" />,
  9: <ScrollText className="w-8 h-8" />,
  10: <FlaskConical className="w-8 h-8" />,
};

export default function Sectors() {
  return (
    <section id="sectores" className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-black text-center mb-16"
        >
          Industrias y Sectores
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {siteData.sectors.map((sector, i) => (
            <motion.div
              key={sector.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.4 }}
              className="bg-zinc-50 border border-zinc-200 rounded-lg p-6 text-center hover:border-black hover:shadow-md transition-all group"
            >
              <div className="text-red-600 mb-4 flex justify-center group-hover:scale-110 transition-transform">
                {iconMap[sector.id]}
              </div>
              <h3 className="text-base font-semibold text-black mb-2">{sector.name}</h3>
              <p className="text-sm text-zinc-600">{sector.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
