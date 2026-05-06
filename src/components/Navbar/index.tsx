"use client";

import { useState } from "react";
import { siteData } from "@/data/data";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "Sobre Nosotros", href: "#sobre-nosotros" },
  { label: "Soluciones Logísticas", href: "#soluciones" },
  { label: "Sectores", href: "#sectores" },
  { label: "Contacto", href: "#contacto" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const handleNav = (href: string) => {
    setOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-sm border-b border-zinc-200">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        <a href="#inicio" className="text-xl font-bold text-black tracking-tight">
          {siteData.siteName.split(" ")[0]}
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNav(link.href)}
              className="text-sm text-zinc-600 hover:text-black transition-colors"
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => handleNav("#contacto")}
            className="bg-red-600 hover:bg-red-700 text-white text-sm font-semibold px-5 py-2 rounded-md transition-colors"
          >
            Cotizar ahora
          </button>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 text-black"
          aria-label="Abrir menú"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-white border-t border-zinc-200 px-6 py-4 space-y-3">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNav(link.href)}
              className="block w-full text-left text-zinc-600 hover:text-black py-2 transition-colors"
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => handleNav("#contacto")}
            className="w-full bg-red-600 hover:bg-red-700 text-white text-sm font-semibold px-5 py-2 rounded-md transition-colors"
          >
            Cotizar ahora
          </button>
        </div>
      )}
    </nav>
  );
}
