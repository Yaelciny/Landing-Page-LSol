// Seccion de Contacto - Formulario y informacion de contacto
// Incluye campos para nombre, email, mensaje y datos de la empresa

"use client";

import { siteData } from "@/data/data";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";  // Iconos de contacto
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function Contact() {
  const contact = siteData.contact;  // Datos de contacto del archivo data.ts
  // Estado del formulario - Guarda nombre, email y mensaje
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);  // Controla mensaje de exito

  // Maneja el envio del formulario - Llama a la API y genera mailto link
  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setSubmitted(true);

  try {
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formState),
    });

    if (response.ok) {
      const data = await response.json();

      if (data.mailtoLink) {
        window.location.href = data.mailtoLink;
      }

      setFormState({
        name: "",
        email: "",
        message: "",
      });

      setTimeout(() => setSubmitted(false), 4000);
    }
  } catch (error) {
    console.error(error);
    setSubmitted(false);
  }
};

  return (
    <section id="contacto" className="section-padding bg-muted/30 scroll-mt-24">
      <div className="container">
        {/* Titulo de la seccion */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-header-wrapper"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Contacto
          </h2>
        </motion.div>

        {/* Grid de 2 columnas: formulario izquierda, info derecha */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}  
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Formulario de contacto con tarjeta */}
            <form
              onSubmit={handleSubmit}
              className="bg-card rounded-3xl p-8 border border-border shadow-lg"
            >
              {/* Mensaje de exito al enviar formulario */}
              {submitted && (
                <div className="mb-4 p-3 bg-green-50 dark:bg-green-950 border border-green-200 text-green-700 rounded-lg text-sm">
                  Mensaje enviado correctamente. Nos pondremos en contacto pronto.
                </div>
              )}
              <div className="space-y-6">
                {/* Campo Nombre */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Nombre
                  </label>
                  <Input
                    id="name"
                    type="text"
                    required
                    value={formState.name}
                    onChange={(e) =>
                      setFormState({ ...formState, name: e.target.value })
                    }
                    className="h-12 rounded-xl bg-muted/50 border-border"
                    placeholder="Su nombre completo"
                  />
                </div>
                {/* Campo Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Correo electrónico
                  </label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={formState.email}
                    onChange={(e) =>
                      setFormState({ ...formState, email: e.target.value })
                    }
                    className="h-12 rounded-xl bg-muted/50 border-border"
                    placeholder="correo@empresa.com"
                  />
                </div>
                {/* Campo Mensaje */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Mensaje
                  </label>
                  <Textarea
                    id="message"
                    required
                    rows={4}
                    value={formState.message}
                    onChange={(e) =>
                      setFormState({ ...formState, message: e.target.value })
                    }
                    className="rounded-xl bg-muted/50 border-border resize-none"
                    placeholder="Describa su requerimiento..."
                  />
                </div>
                {/* Boton de envio */}
                <Button
                  type="submit"
                  variant="default"
                  size="lg"
                  className="w-full gap-2"
                >
                  <Send className="size-4" />
                  Cotizar ahora
                </Button>
              </div>
            </form>

            {/* Informacion de contacto debajo del formulario */}
            <div className="space-y-6">
               {/* Mapea email, telefono y direccion con animacion */}
               {[
                 { icon: Mail, value: contact.email, href: `mailto:${contact.email}` },
                 { icon: Phone, value: contact.phone, href: `tel:${contact.phone}` },
                 { icon: MapPin, value: contact.address, href: undefined },  // Direccion no tiene link
               ].map((item, i) => {
                const Icon = item.icon;
                const content = (
                  <>
                    <div className="size-12 rounded-xl icon-container-base">
                      <Icon className="size-5" />
                    </div>
                    <span className="text-foreground font-medium">
                      {item.value}
                    </span>
                  </>
                );
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}  // Animacion escalonada
                    className="flex items-center gap-4"
                  >
                    {/* Si tiene link (email/tel) lo envuelve en <a>, sino solo muestra */}
                    {item.href ? (
                      <a
                        href={item.href}
                        className="flex items-center gap-4 hover:opacity-80 transition-opacity"
                      >
                        {content}
                      </a>
                    ) : (
                      content
                    )}
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Columna derecha: Mapa de Google Maps */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}  // Entra desde derecha
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl overflow-hidden border border-border shadow-lg"
          >
            <iframe
              src={contact.mapUrl}  // URL del mapa desde data.ts
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "400px", width: "100%" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación de LSol Comercializadora Internacional"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
