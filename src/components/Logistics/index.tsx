// Seccion de Soluciones Logísticas - 4 puntos clave de la empresa
// Muestra iconos, titulos y descripciones en tarjetas

"use client";

import { siteData } from "@/data/nat";
import { motion } from "framer-motion";
import { Link, Truck, AlertTriangle, Package } from "lucide-react";  // Iconos para cada punto

// Mapa de iconos para cada punto logístico segun su ID
const iconMap: Record<number, React.ReactNode> = {
  1: <Link className="size-7" />,         // Cadena/eslabon para Optimizacion
  2: <Truck className="size-7" />,       // Camion para Respuesta Rapida
  3: <AlertTriangle className="size-7" />, // Triangulo para Contingencias
  4: <Package className="size-7" />,      // Caja para Distribucion
};

export default function Logistics() {
  const logistics = siteData.logistics;  // Obtiene datos de la seccion logística

  return (
    <section id="soluciones" className="section-padding bg-foreground scroll-mt-24">
      <div className="container">
        {/* Titulo y subtitulo con animacion */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-header-wrapper"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-background">
            Soluciones Logísticas
          </h2>
          <p className="section-description text-background/80 mt-6">
            Gestión Integral de la Cadena de Suministro
          </p>
        </motion.div>

        {/* Texto descriptivo de la seccion */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-background/80 text-center max-w-4xl mx-auto mb-12"
        >
          {logistics.description}
        </motion.p>

        {/* Grid de 2 columnas con las 4 tarjetas logísticas */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {logistics.points.map((point, i) => (
            <motion.div
              key={point.id}
              initial={{ opacity: 0, y: 30 }}  // Entra desde abajo
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}  // Animacion escalonada
              className="bg-background/5 border border-background/10 rounded-3xl p-8 hover:shadow-xl transition-all hover:-translate-y-2 group"
            >
              {/* Icono que cambia de color al pasar mouse */}
              <div className="size-14 rounded-2xl icon-container-base mb-6 group-hover:bg-primary group-hover:text-background group-hover:scale-110 transition-all">
                {iconMap[point.id]}
              </div>
              <h3 className="text-xl font-semibold text-background mb-3">
                {point.title}
              </h3>
              <p className="text-background/80 leading-relaxed">
                {point.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
