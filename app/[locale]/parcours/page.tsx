import Section from "@/components/Section";
import Timeline from "@/components/Timeline";
import { Locale } from "@/lib/i18n";

export default async function Page({ params }: { params: { locale: Locale } }) {
  const isFr = params.locale === "fr";

  const items = [
    {
      title: isFr ? "BUT R&T — 3e année" : "BUT N&T — 3rd year",
      period: "2024–2025",
      details: isFr ? "SAÉ S6, alternance" : "SAEs S6, apprenticeship",
    },
    {
      title: isFr ? "Stage — Oxidized" : "Internship — Oxidized",
      period: "2025",
      details: isFr
        ? "Sauvegarde et historisation de configurations routeurs"
        : "Router configuration backup & versioning",
    },
    {
      title: isFr ? "Alternance" : "Apprenticeship",
      period: isFr ? "En cours" : "Ongoing",
      details: isFr
        ? "Missions à détailler (outils, résultats, preuves)"
        : "Missions to detail (tools, results, evidence)",
    },
  ];

  return (
    <Section
      title={isFr ? "Parcours" : "Timeline"}
      subtitle={
        isFr
          ? "Ce contenu est aussi intégré dans la page d’accueil."
          : "This content is also integrated into the Home page."
      }
    >
      <Timeline items={items} />
    </Section>
  );
}
