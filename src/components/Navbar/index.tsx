// Barra de navegacion fija en la parte superior
// Incluye logo, enlaces, boton de cotizar y menu movil

"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { siteData } from "@/data/data";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";  // Iconos para menu hamburguesa

// Enlaces de navegacion - Al hacer clic se hace scroll suave a la seccion
const navLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "Sobre Nosotros", href: "#sobre-nosotros" },
  { label: "Soluciones Logísticas", href: "#soluciones" },
  { label: "Sectores", href: "#sectores" },
  { label: "Contacto", href: "#contacto" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);  // Estado para menu movil

  // Funcion para navegar a una seccion y cerrar el menu movil
  const handleNav = (href: string) => {
    setOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* Header fijo arriba con animacion de entrada */}
      <motion.header
        initial={{ y: -100, opacity: 0 }}  // Empieza arriba e invisible
        animate={{ y: 0, opacity: 1 }}       // Termina en posicion y visible
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-sm border-b border-border"
      >
        <div className="container">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo de la empresa - Solo muestra la primera palabra "LSol" con gradiente */}
            <motion.a
              href="#inicio"
              className="text-2xl font-bold text-foreground font-sora"
            >
              <span className="text-gradient">
                {siteData.siteName.split(" ")[0]}
              </span>
            </motion.a>

            {/* Navegacion de escritorio - Oculta en movil */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((item, index) => (
                <motion.button
                  key={item.href}
                  onClick={() => handleNav(item.href)}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors relative group"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}  // Animacion escalonada
                >
                  {item.label}
                  {/* Linea inferior que aparece al pasar el mouse */}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
                </motion.button>
              ))}
            </nav>

            <div className="flex items-center gap-4">
              {/* Boton de cotizar - Solo visible en escritorio */}
              <Button
                variant="default"
                className="hidden lg:flex"
                onClick={() => handleNav("#contacto")}
              >
                Cotizar ahora
              </Button>

              {/* Boton de menu hamburguesa - Solo visible en movil */}
              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden"
                onClick={() => setOpen(!open)}
              >
                {open ? <X className="size-5" /> : <Menu className="size-5" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Menu movil desplegable con animacion */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-card border-t border-border overflow-hidden"
            >
              <nav className="container px-4 py-4 flex flex-col gap-2">
                {navLinks.map((link) => (
                  <button
                    key={link.href}
                    onClick={() => handleNav(link.href)}
                    className="py-3 px-4 text-foreground hover:bg-muted rounded-lg transition-colors text-left"
                  >
                    {link.label}
                  </button>
                ))}
                <Button
                  variant="default"
                  className="mt-2 w-full"
                  onClick={() => handleNav("#contacto")}
                >
                  Cotizar ahora
                </Button>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* Fondo oscuro que aparece detras del menu movil */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setOpen(false)}  // Cierra el menu al hacer clic fuera
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-30 lg:hidden"
            style={{ top: "64px" }}
          />
        )}
      </AnimatePresence>
    </>
  );
}
