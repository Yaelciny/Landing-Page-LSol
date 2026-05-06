"use client";

import { siteData } from "@/data/data";
import { motion } from "framer-motion";

export default function About() {
  const about = siteData.about;

  return (
    <section id="sobre-nosotros" className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-black text-center mb-16"
        >
          Sobre Nosotros
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-xl font-semibold text-black mb-3">Quiénes Somos</h3>
              <p className="text-zinc-600 leading-relaxed">{about.concept}</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-black mb-3">Nuestra Misión</h3>
              <p className="text-zinc-600 leading-relaxed">{about.mission}</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-xl font-semibold text-black mb-3">Trayectoria</h3>
              <p className="text-zinc-600 leading-relaxed">{about.trajectory}</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-black mb-3">Valor Agregado</h3>
              <p className="text-zinc-600 leading-relaxed">{about.valueAdd}</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
