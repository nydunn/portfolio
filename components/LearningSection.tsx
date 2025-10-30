"use client";

import { useEffect, useRef, useState } from "react";
import Section from "@/components/Section";

export default function LearningSection({ locale }: { locale: "fr" | "en" }) {
  const isFr = locale === "fr";
  const v1Ref = useRef<HTMLVideoElement>(null);
  const v2Ref = useRef<HTMLVideoElement>(null);

  const [isPlaying1, setIsPlaying1] = useState(false);
  const [isPlaying2, setIsPlaying2] = useState(false);

  useEffect(() => {
    const v1 = v1Ref.current;
    const v2 = v2Ref.current;
    const vids = [v1, v2].filter(Boolean) as HTMLVideoElement[];

    // Volume par défaut (20 %)
    vids.forEach((v) => (v.volume = 0.2));

    // Quand une joue, l'autre se met en pause
    const onPlay1 = () => {
      setIsPlaying1(true);
      if (v2) v2.pause();
    };
    const onPause1 = () => setIsPlaying1(false);
    const onEnded1 = () => setIsPlaying1(false);

    const onPlay2 = () => {
      setIsPlaying2(true);
      if (v1) v1.pause();
    };
    const onPause2 = () => setIsPlaying2(false);
    const onEnded2 = () => setIsPlaying2(false);

    v1?.addEventListener("play", onPlay1);
    v1?.addEventListener("pause", onPause1);
    v1?.addEventListener("ended", onEnded1);

    v2?.addEventListener("play", onPlay2);
    v2?.addEventListener("pause", onPause2);
    v2?.addEventListener("ended", onEnded2);

    return () => {
      v1?.removeEventListener("play", onPlay1);
      v1?.removeEventListener("pause", onPause1);
      v1?.removeEventListener("ended", onEnded1);

      v2?.removeEventListener("play", onPlay2);
      v2?.removeEventListener("pause", onPause2);
      v2?.removeEventListener("ended", onEnded2);
    };
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
      {/* une seule colonne : la 2e vidéo est sous la 1re */}
      <div className="grid grid-cols-1 gap-6">
        {/* --- Micro-learning #1 : Permissions Linux --- */}
        <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
          <h3 className="text-lg font-semibold">
            {isFr
              ? "Qui peut lire, écrire ou exécuter vos fichiers Linux ?"
              : "Who can read, write, or execute your Linux files?"}
          </h3>

          <div className="text-slate-300 space-y-2 mb-3">
            <p>
              {isFr
                ? "On démystifie tout en 90 s — fruit des AC du BUT R&T (AC11.04, AC13.02, AC13.01)."
                : "We demystify it in 90 seconds — born from BUT R&T outcomes (AC11.04, AC13.02, AC13.01)."}
            </p>
            <p>
              {isFr
                ? "Sous Linux/Unix, chaque fichier et dossier est protégé par des permissions qui définissent qui peut lire, écrire ou exécuter."
                : "On Linux/Unix, every file and folder is protected by permissions that define who can read, write, or execute."}
            </p>
            <p>
              {isFr
                ? "Maîtriser ces permissions, c’est poser les bases de la sécurité système."
                : "Mastering these permissions lays the groundwork for system security."}
            </p>
          </div>

          {/* Miniature réduite tant que la vidéo n'est pas en lecture */}
          <video
            ref={v1Ref}
            className={`w-full rounded-xl transition-all duration-300 ${
              isPlaying1 ? "" : "max-w-lg mx-auto"
            }`}
            src="/videos/learning/test.mp4?v=2"
            poster="/videos/learning/test.png?v=2"
            controls
            preload="metadata"
            playsInline
          />
        </div>

        {/* --- Micro-learning #2 : Oxidized --- */}
        <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
          <h3 className="text-lg font-semibold">
            {isFr
              ? "Sauvegarder automatiquement les configs réseau avec Oxidized"
              : "Automatically back up network configs with Oxidized"}
          </h3>

          {/* Bloc d'accroche AVANT la vidéo */}
          <div className="text-slate-300 space-y-2 mb-3">
            <p className="font-medium">
              {isFr
                ? "Qui sauvegarde, versionne et surveille vos configurations réseau ?"
                : "Who backs up, versions, and monitors your network configurations?"}
            </p>
            <p>
              {isFr
                ? "On découvre Oxidized en 90 s — fruit des AC du BUT R&T :"
                : "Discover Oxidized in 90 seconds — rooted in the BUT R&T learning outcomes:"}
            </p>
            <ul className="list-disc pl-6">
              <li>
                {isFr
                  ? "AC21.02 | Mettre en œuvre des services et des outils pour administrer et superviser un réseau"
                  : "AC21.02 | Deploy services and tools to administer and monitor a network"}
              </li>
              <li>
                {isFr
                  ? "AC22.03 | Automatiser des tâches d’administration et de déploiement d’équipements"
                  : "AC22.03 | Automate administration and equipment deployment tasks"}
              </li>
              <li>
                {isFr
                  ? "AC31.01 | Assurer la sécurité et la conformité d’une infrastructure réseau"
                  : "AC31.01 | Ensure the security and compliance of a network infrastructure"}
              </li>
            </ul>
            <p>
              {isFr
                ? "Oxidized, c’est un outil open source qui automatise la sauvegarde et la gestion des configurations réseau, tout en conservant un historique complet des changements."
                : "Oxidized is an open-source tool that automates backup and management of network configurations while keeping a full history of changes."}
            </p>
            <p>
              {isFr
                ? "Le comprendre, c’est maîtriser la traçabilité, la fiabilité et la sécurité de vos infrastructures."
                : "Understanding it means mastering the traceability, reliability, and security of your infrastructure."}
            </p>
          </div>

          {/* Miniature réduite tant que la vidéo n'est pas en lecture */}
          <video
            ref={v2Ref}
            className={`w-full rounded-xl transition-all duration-300 ${
              isPlaying2 ? "" : "max-w-lg mx-auto"
            }`}
            src="/videos/learning/oxidizedML.mp4?v=1"
            poster="/videos/learning/oxidizedML.png?v=1"
            controls
            preload="metadata"
            playsInline
          />

          <h4 className="mt-4 font-semibold">{isFr ? "Sources" : "Sources"}</h4>
          <ul className="list-disc pl-6 text-slate-300 space-y-1">
            {/* Liens officiels */}
            <li>
              <a
                className="underline hover:no-underline"
                href="https://github.com/ytti/oxidized"
                target="_blank"
                rel="noreferrer"
              >
                Oxidized (GitHub)
              </a>
            </li>
            <li>
              <a
                className="underline hover:no-underline"
                href="https://github.com/ytti/oxidized/wiki"
                target="_blank"
                rel="noreferrer"
              >
                Oxidized Wiki
              </a>
            </li>
            <li>
              <a
                className="underline hover:no-underline"
                href="https://github.com/ytti/oxidized-web"
                target="_blank"
                rel="noreferrer"
              >
                oxidized-web (UI)
              </a>
            </li>

            {/* PDFs locaux dans le même dossier que la vidéo */}
            <li>
              <a
                className="underline hover:no-underline"
                href="/videos/learning/oxidized-intro.pdf"
                target="_blank"
                rel="noreferrer"
              >
                {isFr ? "Intro Oxidized (PDF)" : "Oxidized Intro (PDF)"}
              </a>
            </li>
            <li>
              <a
                className="underline hover:no-underline"
                href="/videos/learning/oxidized-installation-debian.pdf"
                target="_blank"
                rel="noreferrer"
              >
                {isFr ? "Installation Debian (PDF)" : "Debian install (PDF)"}
              </a>
            </li>
            <li>
              <a
                className="underline hover:no-underline"
                href="/videos/learning/oxidized-web-guide.pdf"
                target="_blank"
                rel="noreferrer"
              >
                {isFr ? "Guide oxidized-web (PDF)" : "oxidized-web guide (PDF)"}
              </a>
            </li>
            <li>
              <a
                className="underline hover:no-underline"
                href="/videos/learning/rapport.pdf"
                target="_blank"
                rel="noreferrer"
              >
                {isFr ? "Rapport (PDF)" : "Report (PDF)"}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </Section>
  );
}
