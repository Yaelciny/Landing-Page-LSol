// 3 tarjetas destacadas que aparecen debajo del carrusel
// Abastecimiento Garantizado, Atencion, Compromiso de Calidad

"use client";

import { siteData } from "@/data/data";
import { motion } from "framer-motion";
import { Shield, Zap, Award } from "lucide-react";  // Iconos para cada distintivo

// Mapa de iconos para cada distintivo segun su ID
const iconMap: Record<number, React.ReactNode> = {
  1: <Shield className="size-7" />,  // Escudo para Abastecimiento
  2: <Zap className="size-7" />,     // Rayo para Atencion Rapida
  3: <Award className="size-7" />,   // Premio para Calidad
};

export default function HeroDistinctives() {
  return (
    // Seccion con fondo blanco y borde inferior
    <section className="bg-background border-b border-border">
      <div className="container py-16 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Mapea los 3 distintivos de data.ts con animacion escalonada */}
        {siteData.distinctives.map((item, i) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 30 }}  // Empieza abajo e invisible
            whileInView={{ opacity: 1, y: 0 }}  // Aparece al hacer scroll
            viewport={{ once: true }}
            transition={{ delay: i * 0.2, duration: 0.5 }}  // Retraso escalonado
            className="flex flex-col items-center text-center p-6"
          >
            {/* Icono en contenedor circular */}
            <div className="size-14 rounded-2xl icon-container-base mb-4">
              {iconMap[item.id]}
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-2">
              {item.title}
            </h3>
            <p className="text-muted-foreground">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
