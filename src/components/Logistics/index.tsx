"use client";

import { siteData } from "@/data/data";
import { motion } from "framer-motion";
import { Link, Truck, AlertTriangle, Package } from "lucide-react";

const iconMap: Record<number, React.ReactNode> = {
  1: <Link className="size-7" />,
  2: <Truck className="size-7" />,
  3: <AlertTriangle className="size-7" />,
  4: <Package className="size-7" />,
};

export default function Logistics() {
  const logistics = siteData.logistics;

  return (
    <section id="soluciones" className="section-padding bg-muted/30 scroll-mt-24">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-header-wrapper"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Soluciones Logísticas
          </h2>
          <p className="section-description mt-6">
            Gestión Integral de la Cadena de Suministro
          </p>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-muted-foreground text-center max-w-4xl mx-auto mb-12"
        >
          {logistics.description}
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {logistics.points.map((point, i) => (
            <motion.div
              key={point.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card border border-border rounded-3xl p-8 hover:shadow-xl transition-all hover:-translate-y-2 group"
            >
              <div className="size-14 rounded-2xl icon-container-base mb-6 group-hover:bg-primary group-hover:text-background group-hover:scale-110 transition-all">
                {iconMap[point.id]}
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {point.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {point.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
