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
      <section className="section-padding bg-muted/30">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-header-wrapper"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              Experiencia, Calidad y Confianza en Suministros
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {siteData.features.map((feature, i) => (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                className="flex items-start gap-3 p-6 bg-card border border-border rounded-2xl hover:shadow-lg transition-all hover:-translate-y-1 group"
              >
                <div className="size-10 rounded-xl icon-container-base flex-shrink-0 group-hover:bg-primary group-hover:scale-110 transition-all">
                  <Check className="size-5 group-hover:text-primary-foreground transition-colors" />
                </div>
                <p className="text-muted-foreground">{feature.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
