"use client";

import { siteData } from "@/data/data";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function Contact() {
  const contact = siteData.contact;
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formState),
      });

      if (response.ok) {
        const data = await response.json();
        if (data.mailtoLink) {
          window.location.href = data.mailtoLink;
        }
        setFormState({ name: "", email: "", message: "" });
        setTimeout(() => setSubmitted(false), 4000);
      }
    } catch {
      setSubmitted(false);
    }
  };

  return (
    <section id="contacto" className="section-padding bg-muted/30 scroll-mt-24">
      <div className="container">
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <form
              onSubmit={handleSubmit}
              className="bg-card rounded-3xl p-8 border border-border shadow-lg"
            >
              {submitted && (
                <div className="mb-4 p-3 bg-green-50 dark:bg-green-950 border border-green-200 text-green-700 rounded-lg text-sm">
                  Mensaje enviado correctamente. Nos pondremos en contacto pronto.
                </div>
              )}
              <div className="space-y-6">
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

            <div className="space-y-6">
               {[
                 { icon: Mail, value: contact.email, href: `mailto:${contact.email}` },
                 { icon: Phone, value: contact.phone, href: `tel:${contact.phone}` },
                 { icon: MapPin, value: contact.address, href: undefined },
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
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-4"
                  >
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

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl overflow-hidden border border-border shadow-lg"
          >
            <iframe
              src={contact.mapUrl}
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
