"use client";

import { useEffect, useRef } from "react";
import Section from "@/components/Section";

export default function LearningSection({ locale }: { locale: "fr" | "en" }) {
  const isFr = locale === "fr";
  const videoRef = useRef<HTMLVideoElement>(null);

  // Volume par défaut (20 %). Ajuste si besoin (0.0 → 1.0).
  useEffect(() => {
    if (videoRef.current) {
      try {
        videoRef.current.volume = 0.05;
      } catch {
        /* ignore */
      }
    }
  }, []);

  return (
    <Section
      title="Micro-learning"
      subtitle={
        isFr
          ? "Courtes vidéos pédagogiques (R&T). D’autres vidéos arrivent bientôt."
          : "Short learning videos (Networks & Telecom). More videos coming soon."
      }
    >
      <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
        {/* Titre + description AU-DESSUS de la vidéo */}
        <h3 className="text-lg font-semibold">
          {isFr
            ? "Qui peut lire, écrire ou exécuter vos fichiers Linux ?"
            : "Who can read, write, or execute your Linux files?"}
        </h3>

        <div className="text-slate-300 space-y-2 mb-3">
          <p>
            {isFr
              ? "On démystifie tout en 90 s — fruit des AC du BUT R&T (AC11.04, AC13.02, AC13.01)."
              : "We demystify it in 90 seconds — born from the BUT R&T learning outcomes (AC11.04, AC13.02, AC13.01)."}
          </p>
          <p>
            {isFr
              ? "Sous Linux/Unix, chaque fichier et dossier est protégé par des permissions qui définissent qui peut lire, écrire ou exécuter."
              : "On Linux/Unix, every file and folder is protected by permissions that define who can read, write, or execute."}
          </p>
          <p>
            {isFr
              ? "Maîtriser ces droits, c’est poser les bases de la sécurité système."
              : "Mastering these permissions lays the groundwork for system security."}
          </p>
        </div>

        {/* La vidéo */}
        <video
          ref={videoRef}
          className="w-full rounded-xl"
          src="/videos/learning/test.mp4"
          poster="/videos/learning/test.png"
          controls
          preload="metadata"
          playsInline
        />
      </div>
    </Section>
  );
}
