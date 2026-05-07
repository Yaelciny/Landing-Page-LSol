"use client";

import { siteData } from "@/data/data";
import { motion } from "framer-motion";
import { Shield, Zap, Award } from "lucide-react";

const iconMap: Record<number, React.ReactNode> = {
  1: <Shield className="size-7" />,
  2: <Zap className="size-7" />,
  3: <Award className="size-7" />,
};

export default function HeroDistinctives() {
  return (
    <section className="bg-background border-b border-border">
      <div className="container py-16 grid grid-cols-1 md:grid-cols-3 gap-8">
        {siteData.distinctives.map((item, i) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.5 }}
            className="flex flex-col items-center text-center p-6"
          >
            <div className="size-14 rounded-2xl icon-container-base mb-4">
              {iconMap[item.id]}
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-2">
              {item.title}
            </h3>
            <p className="text-muted-foreground">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
