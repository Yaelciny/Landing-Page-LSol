"use client";

import { siteData } from "@/data/data";
import { motion } from "framer-motion";

export default function About() {
  const about = siteData.about;

  return (
    <section id="sobre-nosotros" className="section-padding bg-background scroll-mt-24">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-header-wrapper"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Sobre Nosotros
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="bg-card border border-border rounded-3xl p-8 hover:shadow-lg transition-all group">
              <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                Quiénes Somos
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {about.concept}
              </p>
            </div>
            <div className="bg-card border border-border rounded-3xl p-8 hover:shadow-lg transition-all group">
              <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                Nuestra Misión
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {about.mission}
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="bg-card border border-border rounded-3xl p-8 hover:shadow-lg transition-all group">
              <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                Trayectoria
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {about.trajectory}
              </p>
            </div>
            <div className="bg-card border border-border rounded-3xl p-8 hover:shadow-lg transition-all group">
              <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                Valor Agregado
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {about.valueAdd}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
