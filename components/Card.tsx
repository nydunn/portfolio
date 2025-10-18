"use client";
import { motion } from "framer-motion";

export default function Card({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      className="card"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
    >
      {children}
    </motion.div>
  );
}
