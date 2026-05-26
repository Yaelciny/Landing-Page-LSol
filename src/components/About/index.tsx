// Seccion Sobre Nosotros - Informacion de la empresa
// Muestra concepto, mision, trayectoria y valor agregado

"use client";

import { siteData } from "@/data/nat";
import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  const about = siteData.about;  // Obtiene datos de la seccion about

  return (
    <section id="sobre-nosotros" className="section-padding bg-background scroll-mt-24">     {/* Seccion con ID para navegacion y padding vertical */}

      <div className="container">
        {/* Titulo de la seccion con animacion al aparecer */}
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

        {/* Grid de 2 columnas: imagen izquierda, concepto derecha */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Columna izquierda: Imagen de la empresa */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}  // Entra desde la izquierda
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative h-[400px] md:h-[500px] rounded-3xl overflow-hidden bg-muted flex items-center justify-center"
          >
            <Image
              src={about.image}
              alt="LSol Comercializadora"
              fill
              loading="lazy"
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover w-auto h-8 md:h-10"
            />
          </motion.div>

          {/* Columna derecha: Tarjeta con Concepto */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}  // Entra desde la derecha
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="bg-card border border-border rounded-3xl p-8">
              <h3 className="text-xl font-semibold text-foreground mb-3">
                Concepto
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {about.concept}
              </p>
            </div>
            <div className="bg-card border border-border rounded-3xl p-8">
              <h3 className="text-xl font-semibold text-foreground mb-3">
                Nuestra Misión
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {about.mission}
              </p>
            </div>
          </motion.div>
        </div>

        {/* Segunda fila: Mision y Trayectoria izquierda, Valor Agregado derecha */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Columna izquierda: Mision y Trayectoria */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >

            <div className="bg-card border border-border rounded-3xl p-8">
              <h3 className="text-xl font-semibold text-foreground mb-3">
                Trayectoria
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {about.trajectory}
              </p>
            </div>
          </motion.div>

          {/* Columna derecha: Valor Agregado */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="bg-card border border-border rounded-3xl p-8">
              <h3 className="text-xl font-semibold text-foreground mb-3">
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
