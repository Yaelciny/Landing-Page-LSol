"use client";

import { siteData } from "@/data/data";
import { motion } from "framer-motion";

const footerLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "Sobre Nosotros", href: "#sobre-nosotros" },
  { label: "Soluciones Logísticas", href: "#soluciones" },
  { label: "Sectores", href: "#sectores" },
  { label: "Contacto", href: "#contacto" },
];

export default function Footer() {
  return (
    <footer className="bg-foreground text-background py-16 md:py-20">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <h3 className="text-2xl font-bold mb-4">
              <span className="text-primary">{siteData.siteName}</span>
            </h3>
            <p className="text-background/70 max-w-sm leading-relaxed">
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
            <ul className="space-y-3">
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
            className="lg:col-span-2"
          >
            <h4 className="font-semibold mb-4">Contacto</h4>
            <div className="space-y-3 text-sm text-background/70">
              <a
                href={`mailto:${siteData.contact.email}`}
                className="hover:text-primary transition-colors block"
              >
                {siteData.contact.email}
              </a>
              <a
                href={`tel:${siteData.contact.phone}`}
                className="hover:text-primary transition-colors block"
              >
                {siteData.contact.phone}
              </a>
              <p>{siteData.contact.address}</p>
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
