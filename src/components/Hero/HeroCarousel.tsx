// Carrusel de banners principal - 3 imagenes que rotan automaticamente
// Se pausa al pasar el mouse encima y tiene flechas de navegacion

"use client";

import { useState, useEffect, useCallback } from "react";
import { siteData } from "@/data/data";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";  // Flechas de navegacion
import Image from "next/image";

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);  // Banner actualmente visible
  const [isPaused, setIsPaused] = useState(false);  // Si el carrusel esta pausado
  const banners = siteData.banners;  // Obtiene los banners del archivo de datos

  // Efecto para cambiar el banner automaticamente cada 5 segundos
  // Se pausa si isPaused es true (cuando el mouse esta encima)
  // Funciones para navegar entre banners manualmente
  const next = useCallback(
    () => setCurrent((prev) => (prev + 1) % banners.length),
    [banners.length]
  );  // Siguiente banner

  const prev = useCallback(
    () => setCurrent((prev) => (prev - 1 + banners.length) % banners.length),
    [banners.length]
  );  // Banner anterior

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);  // Limpia el intervalo al desmontar
  }, [isPaused, next]);

  return (
    <section
      id="inicio"  // ID para navegacion
      className="relative h-dvh overflow-hidden"  // Ocupa toda la pantalla
      onMouseEnter={() => setIsPaused(true)}   // Pausa al pasar mouse
      onMouseLeave={() => setIsPaused(false)}  // Reanuda al quitar mouse
    >
      {/* Contenedor de imagenes con animacion de desvanecimiento */}
      <AnimatePresence initial={false}>
        <motion.div
          key={current}
          initial={{ opacity: 0 }}  // Empieza invisible
          animate={{ opacity: 1 }}  // Se vuelve visible
          exit={{ opacity: 0 }}    // Se desvanece al salir
          transition={{ duration: 0.9 }}
          className="absolute inset-0"
        >
          <Image
            src={banners[current].image}
            alt={banners[current].title}
            fill
            priority  // Carga prioridad alta (LCP)
            className="object-cover"
          />
          <div className="absolute bg-gradient-to-b inset-0 bg-black/40" />  {/* Overlay oscuro para legibilidad */}
        </motion.div>
      </AnimatePresence>

      {/* Contenido de texto sobre la imagen */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="container">
          <motion.div
            key={current}  // Re-renderiza animacion al cambiar banner
            initial={{ opacity: 0, y: 30 }}  // Empieza abajo e invisible
            animate={{ opacity: 1, y: 0 }}  // Termina arriba y visible
            transition={{ delay: 0.5, duration: 0.7 }}
            className="text-center max-w-5xl mx-auto px-6"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4">
              {banners[current].title}
            </h1>
            <p className="text-xl md:text-2xl text-zinc-200 max-w-3xl mx-auto mb-8">
              {banners[current].subtitle}
            </p>
            {/* Boton que hace scroll a la seccion de contacto */}
            <button
              onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-4 rounded-xl text-lg transition-all hover:scale-105"
            >
              Cotizar ahora
            </button>
          </motion.div>
        </div>
      </div>

      {/* Flechas de navegacion a los lados */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
        aria-label="Banner anterior"
      >
        <ChevronLeft className="w-6 h-6 text-white" />
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
        aria-label="Siguiente banner"
      >
        <ChevronRight className="w-6 h-6 text-white" />
      </button>

      {/* Indicadores de puntos abajo - Clickeables para ir a un banner especifico */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {banners.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-3 rounded-full transition-all ${i === current ? "bg-primary w-8" : "bg-white/40 hover:bg-white/60 w-3"
              }`}
            aria-label={`Ir al banner ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
