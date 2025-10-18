import { Locale } from "@/lib/i18n";
import LearningSection from "@/components/LearningSection";

export default async function Page({ params }: { params: { locale: Locale } }) {
  const locale = params.locale;

  return (
    <main>
      {/* Hero / intro */}
      <section className="container-padded py-16 md:py-24">
        <h1 className="section-title gradient-text">
          {locale === "fr" ? "Bienvenue sur mon portfolio" : "Welcome to my portfolio"}
        </h1>
        <p className="section-sub max-w-2xl">
          {locale === "fr"
            ? "Je prépare du contenu complet pour chaque page. En attendant, découvrez mes micro-learnings."
            : "I’m polishing each page. Meanwhile, check out my micro-learning videos."}
        </p>
      </section>

      {/* Nouvelle section Micro-learning */}
      <LearningSection locale={locale as "fr" | "en"} />
    </main>
  );
}
