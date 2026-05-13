// Boton flotante de WhatsApp - Aparece al hacer scroll hacia abajo
// Enlace directo para cotizaciones via WhatsApp

"use client";

import { siteData } from "@/data/nat";
import { MessageCircle } from "lucide-react";  // Icono de WhatsApp
import { useEffect, useState } from "react";

export default function WhatsAppButton() {
  const [visible, setVisible] = useState(false);  // Controla si el boton es visible

  // Detecta scroll - Muestra el boton despues de bajar 300px
  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);  // Limpia listener
  }, []);

  // Genera URL de WhatsApp - Usa link personalizado o genera uno con el telefono
  const whatsappUrl = siteData.contact.whatsapp || `https://wa.me/${siteData.contact.phone.replace(/\D/g, "")}?text=${encodeURIComponent("Hola, me gustaría cotizar productos con LSol Comercializadora Internacional.")}`;

  if (!visible) return null;  // No muestra nada si no es visible

  return (
    // Boton verde fijo en la esquina inferior derecha
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all hover:scale-110 flex items-center gap-2"
      aria-label="Contactar por WhatsApp - Ventas / Cotizaciones"
    >
      <MessageCircle className="size-6" />
      <span className="hidden sm:inline text-sm font-medium">Cotizar</span>
    </a>
  );
}
