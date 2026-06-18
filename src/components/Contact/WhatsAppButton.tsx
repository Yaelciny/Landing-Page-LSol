"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { siteData } from "@/data/nat";

export default function WhatsAppFloat() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Aparece despues de hacer scroll pasando el hero (300px)
      setVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Construir la URL de WhatsApp con mensaje predefinido
  const phone = siteData.contact.phone.replace(/\D/g, "");
  const whatsappUrl = `https://wa.me/52${phone}?text=${encodeURIComponent("Hola, me gustaría cotizar materias primas e insumos químicos.")}`;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          className="fixed bottom-6 right-6 z-50 group"
        >
          {/* Tooltip */}
          <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-foreground text-background text-sm font-medium px-3 py-1.5 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-lg">
            ¡Escríbenos por WhatsApp!
          </span>

          {/* Pulse ring */}
          <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-25" />

          {/* Boton principal */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Contactar por WhatsApp"
            className="relative flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 bg-green-500 hover:bg-green-600 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-110 active:scale-95"
          >
            <MessageCircle className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}