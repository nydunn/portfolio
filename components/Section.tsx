"use client";
import { motion } from "framer-motion";

export default function Section({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  return (
    <section className="container-padded py-12 md:py-16">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="section-title gradient-text">{title}</h2>
        {subtitle && <p className="section-sub">{subtitle}</p>}
        <div className="grid gap-6 md:gap-8">{children}</div>
      </motion.div>
    </section>
  );
}
