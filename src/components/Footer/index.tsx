"use client";

import { siteData } from "@/data/data";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

const footerLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "Sobre Nosotros", href: "#sobre-nosotros" },
  { label: "Soluciones Logísticas", href: "#soluciones" },
  { label: "Sectores", href: "#sectores" },
  { label: "Contacto", href: "#contacto" },
];

const serviceLinks = [
  { label: "Abastecimiento", href: "#soluciones" },
  { label: "Logística Internacional", href: "#soluciones" },
  { label: "Importación", href: "#soluciones" },
  { label: "Distribución", href: "#soluciones" },
  { label: "Atención Especializada", href: "#contacto" },
];

export default function Footer() {
  return (
    <footer className="bg-foreground text-background py-16 md:py-20">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-4">
              <span className="text-primary">{siteData.siteName.split(" ")[0]}</span>
              {" "}{siteData.siteName.split(" ").slice(1).join(" ")}
            </h3>
            <p className="text-background/70 max-w-sm leading-relaxed text-sm">
              {siteData.siteDescription}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="font-semibold mb-4">Navegación</h4>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-background/70 hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="font-semibold mb-4">Nuestos Servicios</h4>
            <ul className="space-y-2">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-background/70 hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h4 className="font-semibold mb-4">Contacto</h4>
            <div className="space-y-3 text-sm text-background/70">
              <div className="flex items-center gap-2">
                <MapPin className="size-4 text-primary" />
                <p>{siteData.contact.address}</p>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="size-4 text-primary" />
                <a
                  href={`mailto:${siteData.contact.email}`}
                  className="hover:text-primary transition-colors"
                >
                  {siteData.contact.email}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="size-4 text-primary" />
                <a
                  href={`tel:${siteData.contact.phone}`}
                  className="hover:text-primary transition-colors"
                >
                  {siteData.contact.phone}
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="pt-8 border-t border-background/10 text-center text-background/50 text-sm"
        >
          &copy; {new Date().getFullYear()} {siteData.siteName}. Todos los
          derechos reservados.
        </motion.div>
      </div>
    </footer>
  );
}
