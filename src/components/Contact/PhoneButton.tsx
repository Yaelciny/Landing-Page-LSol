"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone } from "lucide-react";
import { siteData } from "@/data/nat";

export default function PhoneFloat() {
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

  // Construir la URL de llamada telefónica
  const phone = siteData.contact.phone.replace(/\D/g, "");
  const telUrl = `tel:+52${phone}`;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.1 }}
          className="fixed bottom-24 right-6 z-50 group sm:hidden"
        >
          {/* Tooltip */}
          <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-foreground text-background text-sm font-medium px-3 py-1.5 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-lg">
            ¡Llámanos ahora!
          </span>

          {/* Pulse ring */}
          <span className="absolute inset-0 rounded-full bg-blue-500 animate-ping opacity-25" />

          {/* Boton principal */}
          <a
            href={telUrl}
            aria-label="Llamar por teléfono"
            className="relative flex items-center justify-center w-14 h-14 bg-blue-500 hover:bg-blue-600 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-110 active:scale-95"
          >
            <Phone className="w-7 h-7 text-white" />
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
