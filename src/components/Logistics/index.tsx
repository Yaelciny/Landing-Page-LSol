"use client";

import { siteData } from "@/data/data";
import { motion } from "framer-motion";
import { Link, Truck, AlertTriangle, Package } from "lucide-react";

const iconMap: Record<number, React.ReactNode> = {
  1: <Link className="w-7 h-7" />,
  2: <Truck className="w-7 h-7" />,
  3: <AlertTriangle className="w-7 h-7" />,
  4: <Package className="w-7 h-7" />,
};

export default function Logistics() {
  const logistics = siteData.logistics;

  return (
    <section id="soluciones" className="bg-zinc-50 py-20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-black text-center mb-6"
        >
          Soluciones Logísticas
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-zinc-600 text-center max-w-3xl mx-auto mb-16 text-lg"
        >
          Gestión Integral de la Cadena de Suministro
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-zinc-600 text-center max-w-4xl mx-auto mb-12"
        >
          {logistics.description}
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {logistics.points.map((point, i) => (
            <motion.div
              key={point.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="bg-white border border-zinc-200 rounded-lg p-8 hover:shadow-lg transition-shadow"
            >
              <div className="text-red-600 mb-4">{iconMap[point.id]}</div>
              <h3 className="text-xl font-semibold text-black mb-3">{point.title}</h3>
              <p className="text-zinc-600 leading-relaxed">{point.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
