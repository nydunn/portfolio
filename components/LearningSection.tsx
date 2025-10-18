"use client";
import Section from "@/components/Section";

export default function LearningSection({ locale }: { locale: "fr" | "en" }) {
  const isFr = locale === "fr";

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
        {/* ⚠️ Mets bien le fichier ici : public/videos/learning/intro.mp4 */}
        <video
            className="w-full rounded-xl"
            src="/videos/learning/test.mp4"
            controls
            preload="metadata"
            poster="/videos/learning/test.png"  // ← si tu ajoutes une vignette
            playsInline
        />

        <div className="mt-3">
          <h3 className="text-lg font-semibold">
            {isFr ? "Introduction (micro-learning)" : "Introduction (micro-learning)"}
          </h3>
          <p className="text-slate-300">
            {isFr
              ? "Une première capsule vidéo — d’autres suivront."
              : "First learning capsule — more coming soon."}
          </p>
        </div>
      </div>
    </Section>
  );
}
