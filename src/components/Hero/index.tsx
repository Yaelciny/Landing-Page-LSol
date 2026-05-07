// Seccion Hero - Contiene el carrusel de banners y los distintivos
// Esta es la primera seccion que ve el usuario al entrar

"use client";

import HeroCarousel from "./HeroCarousel";       // Carrusel de 3 imagenes grandes
import HeroDistinctives from "./HeroDistinctives";  // 3 tarjetas destacadas debajo del carrusel

export default function Hero() {
  return (
    <>
      <HeroCarousel />      {/* Banner principal con texto y boton */}
      <HeroDistinctives />  {/* 3 puntos: Abastecimiento, Atencion, Calidad */}
    </>
  );
}
