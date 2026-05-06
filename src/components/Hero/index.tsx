"use client";

import HeroCarousel from "./HeroCarousel";
import HeroDistinctives from "./HeroDistinctives";
import { siteData } from "@/data/data";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

export default function Hero() {
  return (
    <>
      <HeroCarousel />
      <HeroDistinctives />
      <section className="bg-zinc-50 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-black text-center mb-12"
          >
            Experiencia, Calidad y Confianza en Suministros
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {siteData.features.map((feature, i) => (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                className="flex items-start gap-3 p-4 bg-white border border-zinc-200 rounded-lg"
              >
                <Check className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                <p className="text-zinc-700">{feature.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
