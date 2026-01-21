import Link from "next/link";
import { Locale } from "@/lib/i18n";
import Section from "@/components/Section";
import Card from "@/components/Card";
import Timeline from "@/components/Timeline";

export default async function Page({ params }: { params: { locale: Locale } }) {
  const locale = params.locale;
  const isFr = locale === "fr";

  const timelineItems = [
    {
      title: isFr ? "BUT R&T — 3e année" : "BUT N&T — 3rd year",
      period: "2023–2026",
      details: isFr ? "Parcours Cybersécurité" : "Cybersecurity ",
    },
    {
      title: isFr ? "Stage — Oxidized" : "Internship — Oxidized",
      period: isFr ? "Avril 2025 - Juin 2025" : "April - June 2025",
      details: isFr
        ? "Sauvegarde et historisation de configurations routeurs"
        : "Router configuration backup & versioning",
    },
    {
      title: isFr ? "Alternance" : "Apprenticeship",
      period: isFr ? "En cours" : "Ongoing",
      details: isFr
        ? "Technicien résaux télecomm SDIS25"
        : "Network & Telecommunications Technician SDIS25",
    },
  ];

  return (
    <main>
      {/* HERO */}
      <section className="container-padded py-16 md:py-24">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <h1 className="section-title gradient-text">
              {isFr ? "Bienvenue" : "Welcome"}
            </h1>
            <p className="section-sub max-w-2xl">
              {isFr
                ? "Portfolio académique (BUT Réseaux & Télécommunications)"
                : "Academic portfolio (BUT Networks & Telecommunications)"}
            </p>
          </div>

          {/* Identité forte */}
          <div className="text-right">
            <div className="text-2xl md:text-3xl font-bold text-slate-50">
              Gabin Becu
            </div>
            <div className="text-slate-300">
              {isFr
                ? "BUT R&T — 3e année • Réseaux • Systèmes • Sécurité"
                : "BUT N&T — 3rd year • Networks • Systems • Security"}
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link href={`/${locale}/projets`} className="btn-primary">
            {isFr ? "Voir mes projets" : "See my projects"}
          </Link>
          <Link href={`/${locale}/demarche-portfolio`} className="btn-ghost">
            {isFr ? "Micro-learning" : "Micro-learning"}
          </Link>
          <Link href={`/${locale}/contact`} className="btn-ghost">
            {isFr ? "Me contacter" : "Contact"}
          </Link>
        </div>
      </section>

      {/* Présentation */}
      <Section
        title={isFr ? "Présentation" : "Overview"}
        subtitle={
          isFr
            ? "Une vue rapide pour comprendre qui je suis et ce que contient ce portfolio."
            : "A quick view to understand who I am and what’s inside this portfolio."
        }
      >
        <Card>
          <p>
            {isFr
              ? "Je suis étudiant en 3e année de BUT Réseaux & Télécommunications et alternant depuis cette année au SDIS25. Ce portfolio regroupe mes compétences, mes projets (SAÉ), et des preuves (scripts, configs, docs) dans une démarche évaluée."
              : "I’m a 3rd-year BUT Networks & Telecommunications student. This portfolio gathers my skills, projects (SAEs), and evidence (scripts, configs, docs) as part of an assessed approach."}
          </p>
          <ul className="list-disc pl-5 mt-4 space-y-1 text-slate-300">
            <li>
              {isFr
                ? "Objectif : démontrer mes compétences de manière claire et argumentée."
                : "Goal: demonstrate my skills clearly and with justification."}
            </li>
            <li>
              {isFr
                ? "Contenu : projets, micro-learnings, compétences et contact."
                : "Content: projects, micro-learnings, skills and contact."}
            </li>
          </ul>
        </Card>
      </Section>

      {/* ✅ Parcours inséré ici (entre Présentation et Formation) */}
      <Section
        title={isFr ? "Parcours" : "Timeline"}
        subtitle={
          isFr
            ? "Études, stage et alternance (résumé)."
            : "Studies, internship and apprenticeship (summary)."
        }
      >
        <Timeline items={timelineItems} />
      </Section>

      {/* Formation */}
<Section
  title={isFr ? "Ma formation" : "My education"}
  subtitle={
    isFr
      ? "BUT Réseaux & Télécommunications — spécialité cybersécurité : technique, preuves, et posture réflexive."
      : "BUT Networks & Telecommunications — cybersecurity track: hands-on skills, evidence, and reflection."
  }
>
  <div className="grid gap-6">
    <Card>
      <h3 className="text-xl font-semibold text-slate-100">
        {isFr
          ? "BUT Réseaux & Télécommunications — parcours orienté cybersécurité"
          : "BUT Networks & Telecommunications — cybersecurity-focused track"}
      </h3>

      <p className="mt-2 text-slate-300">
        {isFr
          ? "Une formation qui combine maîtrise technique (réseaux, systèmes, virtualisation, supervision, automatisation, sécurisation) et compétences transversales (communication pro, rigueur, documentation). Chaque semestre, je m’appuie sur des SAÉ, stage et l’alternance pour produire des preuves et les expliquer."
          : "A program mixing technical skills (networks, systems, virtualization, monitoring, automation) and transversal skills (professional communication, rigor, documentation). Each semester, I rely on projects (SAEs), internship and apprenticeship to produce evidence and explain it."}
      </p>

      <div className="mt-4 flex flex-wrap gap-2">
        {[
          isFr ? "Réseaux" : "Networks",
          isFr ? "Systèmes Linux" : "Linux systems",
          isFr ? "Sécurité" : "Security",
          isFr ? "Supervision" : "Monitoring",
          isFr ? "Automatisation" : "Automation",
          isFr ? "Documentation" : "Documentation",
        ].map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-slate-200"
          >
            {tag}
          </span>
        ))}
      </div>
    </Card>

    <Card>
      <h4 className="text-lg font-semibold text-slate-100">
        {isFr ? "Approche par compétences" : "Competency-based approach"}
      </h4>

      <p className="mt-2 text-slate-300">
        {isFr
          ? "Le BUT R&T fonctionne par compétences : je dois montrer que je sais faire en situation (projets, configs, scripts, comptes-rendus), puis expliquer mes choix et prendre du recul."
          : "The BUT program is competency-based: I must demonstrate real-world ability (projects, configs, scripts, reports), explain my decisions, and reflect on them."}
      </p>

      <ul className="mt-3 list-disc pl-5 space-y-1 text-slate-300">
        <li>
          {isFr
            ? "Des preuves concrètes (captures, dépôts, configs, docs) + un argumentaire (contexte, contraintes, décisions)."
            : "Concrete evidence (screens, repos, configs, docs) + rationale (context, constraints, decisions)."}
        </li>
        <li>
          {isFr
            ? "Une posture cyber : durcissement, contrôle d’accès, supervision, traçabilité."
            : "A cybersecurity posture: hardening, access control, monitoring, traceability."}
        </li>
        <li>
          {isFr
            ? "Un portfolio qui relie SAÉ + alternance + stage pour prouver la progression."
            : "A portfolio linking SAEs + apprenticeship + internship to show progression."}
        </li>
      </ul>
    </Card>

    <Card>
      <h4 className="text-lg font-semibold text-slate-100">
        {isFr ? "Compétences ciblées " : "Targeted competencies"}
      </h4>

      <div className="mt-3 grid gap-3 md:grid-cols-2">
        {[
          isFr ? "Administrer un SI sécurisé" : "Administer a secure IS",
          isFr ? "Surveiller un SI sécurisé" : "Monitor a secure IS",
          isFr ? "Administrer les réseaux et Internet" : "Administer networks & Internet",
          isFr ? "Connecter entreprises et usagers" : "Connect companies and users",
          isFr ? "Créer des outils/applications R&T" : "Build N&T tools/apps",
        ].map((item) => (
          <div
            key={item}
            className="rounded-2xl border border-white/10 bg-white/5 p-3 text-slate-200"
          >
            {item}
          </div>
        ))}
      </div>
    </Card>

<Card>
  <h4 className="text-lg font-semibold text-slate-100">
    {isFr ? "Vocabulaire clé (référentiel BUT R&T)" : "Key vocabulary (BUT R&T framework)"}
  </h4>

  <div className="mt-3 grid gap-3 md:grid-cols-2">
    <div className="rounded-2xl border border-white/10 bg-white/5 p-3">
      <div className="font-semibold text-slate-100">CE</div>
      <div className="text-slate-300 text-sm mt-1">
        {isFr
          ? "Composantes essentielles : critères/repères qui qualifient la compétence (ce qui est attendu pour bien la réaliser)."
          : "Essential components: criteria/markers that define what is expected to perform the competency well."}
      </div>
    </div>

    <div className="rounded-2xl border border-white/10 bg-white/5 p-3">
      <div className="font-semibold text-slate-100">AC</div>
      <div className="text-slate-300 text-sm mt-1">
        {isFr
          ? "Apprentissages critiques : apprentissages à valider progressivement (par niveaux/semestres) pour développer la compétence."
          : "Critical learnings: learning outcomes validated progressively (levels/semesters) to develop the competency."}
      </div>
    </div>
  </div>

  <details className="mt-4 rounded-2xl border border-white/10 bg-white/5 p-4">
    <summary className="cursor-pointer text-slate-100 font-semibold">
      {isFr ? "Voir les CE et les AC (parcours Cybersécurité)" : "See CE and AC (Cybersecurity track)"}
    </summary>

    {/* ✅ CE (Composantes essentielles) */}
    <div className="mt-4 grid gap-4 md:grid-cols-2">
      <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
        <div className="font-semibold text-slate-100">
          {isFr
            ? "Cyber1 — Administrer un système d’information sécurisé (CE)"
            : "Cyber1 — Administer a secure information system (CE)"}
        </div>
        <ul className="mt-2 list-disc pl-5 text-slate-300 space-y-1">
          <li>
            {isFr
              ? "en visant un juste compromis entre exigences de sécurité et contraintes d’utilisation"
              : "balancing security requirements and usability constraints"}
          </li>
          <li>
            {isFr
              ? "en respectant les normes et le cadre juridique"
              : "respecting standards and the legal framework"}
          </li>
          <li>
            {isFr ? "en intégrant les dernières technologies" : "integrating the latest technologies"}
          </li>
          <li>{isFr ? "en travaillant en équipe" : "working as a team"}</li>
          <li>
            {isFr
              ? "en sensibilisant efficacement des utilisateurs"
              : "effectively raising user awareness"}
          </li>
        </ul>
      </div>

      <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
        <div className="font-semibold text-slate-100">
          {isFr
            ? "Cyber2 — Surveiller un système d’information sécurisé (CE)"
            : "Cyber2 — Monitor a secure information system (CE)"}
        </div>
        <ul className="mt-2 list-disc pl-5 text-slate-300 space-y-1">
          <li>
            {isFr
              ? "en assurant une veille permanente en réalisant les mises à jour critiques"
              : "ensuring continuous watch and applying critical updates"}
          </li>
          <li>{isFr ? "en automatisant des tâches" : "automating tasks"}</li>
          <li>{isFr ? "en s’intégrant dans une équipe" : "integrating within a team"}</li>
          <li>{isFr ? "en surveillant le comportement du réseau" : "monitoring network behavior"}</li>
          <li>
            {isFr
              ? "en veillant au respect des contrats et à la conformité des obligations du système d’information"
              : "ensuring contract compliance and information system obligations"}
          </li>
        </ul>
      </div>
    </div>

    {/* ✅ AC (Apprentissages critiques) */}
    <div className="mt-4 grid gap-4 md:grid-cols-2">
      <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
        <div className="font-semibold text-slate-100">{isFr ? "Cyber1 — AC" : "Cyber1 — AC"}</div>
        <ul className="mt-2 list-disc pl-5 text-slate-300 space-y-1">
          <li>
            AC34.01Cyber —{" "}
            {isFr
              ? "Participer activement à une analyse de risque pour définir une politique de sécurité pour une petite structure"
              : "Actively contribute to a risk analysis to define a security policy for a small organization"}
          </li>
          <li>
            AC34.02Cyber —{" "}
            {isFr
              ? "Mettre en oeuvre des outils avancés de sécurisation d’une infrastructure du réseau"
              : "Implement advanced tools to secure a network infrastructure"}
          </li>
          <li>
            AC34.03Cyber —{" "}
            {isFr ? "Sécuriser les systèmes d’exploitation" : "Secure operating systems"}
          </li>
          <li>
            AC34.04Cyber —{" "}
            {isFr
              ? "Proposer une architecture sécurisée de système d’information pour une petite structure"
              : "Propose a secure information system architecture for a small organization"}
          </li>
        </ul>
      </div>

      <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
        <div className="font-semibold text-slate-100">{isFr ? "Cyber2 — AC" : "Cyber2 — AC"}</div>
        <ul className="mt-2 list-disc pl-5 text-slate-300 space-y-1">
          <li>
            AC35.01Cyber —{" "}
            {isFr ? "Surveiller l’activité du système d’information" : "Monitor information system activity"}
          </li>
          <li>
            AC35.02Cyber —{" "}
            {isFr
              ? "Appliquer une méthodologie de tests de pénétration"
              : "Apply a penetration testing methodology"}
          </li>
          <li>
            AC35.03Cyber —{" "}
            {isFr ? "Réagir face à un incident de sécurité" : "Respond to a security incident"}
          </li>
          <li>
            AC35.04Cyber —{" "}
            {isFr
              ? "Administrer les outils de surveillance du système d’information"
              : "Administer information system monitoring tools"}
          </li>
        </ul>
      </div>
    </div>

    {/* 🧩 Exemple (SAE) + image + PDF */}
    <div className="mt-4 rounded-2xl border border-white/10 bg-black/20 p-4">
      <div className="font-semibold text-slate-100">
        {isFr
          ? "Exemple — SAÉ 503 : Assurer la sécurisation et la supervision avancées d'un système d'information"
          : "Example — SAE 503: Advanced security & monitoring of an information system"}
      </div>

      <ul className="mt-2 list-disc pl-5 text-slate-300 space-y-1">
        <li>
          {isFr
            ? "J’ai, avec l’aide de mon groupe, mis en place un réseau que nous avons ensuite entièrement supervisé à l’aide de logs et d’un IDS, ce qui nous permettait de détecter les anomalies."
            : "As part of a team, I deployed a network and implemented full monitoring using log analysis and an Intrusion Detection System (IDS) to identify anomalies."}
        </li>
      </ul>

      {/* ✅ Image (schéma) */}
      <div className="mt-4">
        <p className="text-sm text-slate-300 mb-2">
          {isFr ? "Schéma de l’infrastructure que nous avons créée :" : "Infrastructure diagram we built:"}
        </p>

        <a
          href="/sae/sae503/schema.png"
          target="_blank"
          rel="noreferrer"
          className="block"
          title={isFr ? "Ouvrir le schéma" : "Open diagram"}
        >
          <img
            src="/sae/sae503/schema.png"
            alt={isFr ? "Schéma de l’infrastructure — SAÉ 503" : "Infrastructure diagram — SAE 503"}
            className="w-full max-w-3xl rounded-2xl border border-white/10 bg-white/5 object-contain hover:opacity-95 transition"
            loading="lazy"
          />
        </a>
      </div>

      {/* ✅ PDF (rapport technique) */}
      <div className="mt-4">
        <p className="text-sm text-slate-300 mb-2">
          {isFr ? "Rapport technique plus précis :" : "More detailed technical report:"}
        </p>

        <a
          href="/sae/sae503/rapport.pdf"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-slate-100 hover:bg-white/10"
        >
          {isFr ? "Ouvrir le PDF" : "Open PDF"}
          <span className="text-slate-400">↗</span>
        </a>
      </div>
    </div>
  </details>
</Card>




  </div>
</Section>


      {/* Expérience pro */}
      <Section
        title={isFr ? "Expérience professionnelle" : "Professional experience"}
        subtitle={
          isFr
            ? "Éléments concrets issus du stage / alternance."
            : "Concrete work from internship / apprenticeship."
        }
      >
        <Card>
          <h3 className="text-xl font-semibold text-slate-100">
            {isFr ? "Stage — Oxidized" : "Internship — Oxidized"}
          </h3>
          <p className="mt-2 text-slate-300">
            {isFr
              ? "Mise en place et utilisation d’Oxidized pour sauvegarder et historiser des configurations réseau."
              : "Using Oxidized to back up and version network device configurations."}
          </p>
          <p className="mt-2 text-slate-300">
            {isFr
              ? "→ Voir la page Micro-learning pour la capsule dédiée."
              : "→ See Micro-learning for the dedicated video."}
          </p>
        </Card>

        <Card>
          <h3 className="text-xl font-semibold text-slate-100">
            {isFr ? "Alternance au SDIS25" : "Apprenticeship SDIS25"}
          </h3>
          <p className="mt-2 text-slate-400">
            {isFr
              ? "En cours : déploiment massif de switch (script puis mise en place sur site), maintenance d'équipements opérationnel: radio, téléphonie et réseaux."
              : "Ongoing: large-scale switch deployment (scripting and on-site rollout), maintenance of radio, telephony, and network infrastructure."}
          </p>
        </Card>
      </Section>
    </main>
  );
}
