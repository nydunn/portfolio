import { getDictionary } from "@/lib/dictionaries";
import Section from "@/components/Section";
import Card from "@/components/Card";
import { Locale } from "@/lib/i18n";

export default async function Page({ params }: { params: { locale: Locale } }) {
  const t = await getDictionary(params.locale);
  const isFr = params.locale === "fr";

  return (
    <Section
      title={isFr ? "Compétences visées" : "Targeted skills"}
      subtitle={
        isFr
          ? "Alignées sur le référentiel BUT R&T — S6"
          : "Aligned with the BUT Networks & Telecom framework — S6"
      }
    >
      {/* ✅ 1) Automatisation déploiement switch */}
      <div className="mb-8">
        <Card>
          <div className="text-sm text-slate-300">
            {isFr ? "Compétence" : "Competency"}
          </div>

          <h3 className="mt-1 text-xl font-semibold text-slate-100">
            {isFr
              ? "Administrer les réseaux et l’Internet"
              : "Administer networks and the Internet"}
          </h3>

          <p className="mt-2 text-slate-200 font-medium">
            {isFr
              ? "Déploiement automatisé de configurations sur des commutateurs"
              : "Automated deployment of switch configurations"}
          </p>

          <div className="mt-3 text-slate-300">
            <span className="font-semibold text-slate-200">
              {isFr ? "Contexte : " : "Context: "}
            </span>
            {isFr
              ? "Alternance — déploiement de plus de 100 switches : même base de configuration, avec des spécificités par site/équipement."
              : "Work-study — deployment of 100+ switches: a common configuration baseline with site/device-specific variations."}
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {[
              isFr ? "Automatisation" : "Automation",
              isFr ? "Déploiement" : "Deployment",
              "Cisco IOS-XE",
              isFr ? "Console / Série" : "Console / Serial",
              isFr ? "Standardisation" : "Standardization",
            ].map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-slate-200"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="mt-5 rounded-2xl border border-white/10 bg-black/20 p-4">
            <div className="font-semibold text-slate-100">
              {isFr ? "Preuve (script anonymisé)" : "Evidence (redacted script)"}
            </div>

            <p className="mt-2 text-sm text-slate-300">
              {isFr
                ? "Script Python (liaison série) : initialisation Day0, configuration générique, paramètres personnalisés (VLAN/IP/DNS/SNMP…), configuration des interfaces, puis sauvegarde."
                : "Python script (serial link): Day0 init, generic configuration, customized parameters (VLAN/IP/DNS/SNMP…), interface configuration, then save."}
            </p>

            <a
              href="/preuves/automatisation-switch/script-anonymise.txt"
              target="_blank"
              rel="noreferrer"
              className="mt-3 inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-slate-100 hover:bg-white/10"
            >
              {isFr ? "Ouvrir le script" : "Open script"}
              <span className="text-slate-400">↗</span>
            </a>

            <p className="mt-2 text-xs text-slate-400">
              {isFr
                ? "Chemin attendu : public/preuves/automatisation-switch/script-anonymise.txt"
                : "Expected path: public/preuves/automatisation-switch/script-anonymise.txt"}
            </p>
          </div>
        </Card>
      </div>

      {/* ✅ 2) SAÉ 501 — Connecter les entreprises et les usagers */}
      <div className="mb-8">
        <Card>
          <div className="text-sm text-slate-300">
            {isFr ? "Compétence" : "Competency"}
          </div>

          <h3 className="mt-1 text-xl font-semibold text-slate-100">
            {isFr
              ? "Connecter les entreprises et les usagers"
              : "Connect companies and users"}
          </h3>

          <p className="mt-2 text-slate-200 font-medium">
            {isFr
              ? "SAÉ501 — Conception / configuration d’une infrastructure (Packet Tracer)"
              : "SAE501 — Infrastructure design / configuration (Packet Tracer)"}
          </p>

          <div className="mt-3 text-slate-300">
            <span className="font-semibold text-slate-200">
              {isFr ? "Contexte : " : "Context: "}
            </span>
            {isFr
              ? "SAÉ 501 — conception et configuration d’une infrastructure réseau répondant à un cahier des charges (adressage, VLAN, commutation, routage, services)."
              : "SAE 501 — design and configuration of a network infrastructure based on requirements (addressing, VLANs, switching, routing, services)."}
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {[
              "Packet Tracer",
              "VLAN",
              isFr ? "Adressage" : "Addressing",
              isFr ? "Commutation" : "Switching",
              isFr ? "Routage" : "Routing",
              isFr ? "Services" : "Services",
            ].map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-slate-200"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Image Packet Tracer */}
          <div className="mt-5 rounded-2xl border border-white/10 bg-black/20 p-4">
            <div className="font-semibold text-slate-100">
              {isFr ? "Preuves (SAÉ 501)" : "Evidence (SAE 501)"}
            </div>

            <p className="mt-2 text-sm text-slate-300">
              {isFr
                ? "Capture de la topologie (Packet Tracer) + configurations des équipements (txt)."
                : "Topology screenshot (Packet Tracer) + device configurations (txt)."}
            </p>

            <div className="mt-4">
              <p className="text-sm text-slate-300 mb-2">
                {isFr ? "Topologie Packet Tracer :" : "Packet Tracer topology:"}
              </p>

              <a
                href="/sae/sae501/packet-tracer.png"
                target="_blank"
                rel="noreferrer"
                className="block"
              >
                <img
                  src="/sae/sae501/packet-tracer.png"
                  alt={isFr ? "Topologie Packet Tracer (SAÉ501)" : "Packet Tracer topology (SAE501)"}
                  className="w-full max-w-3xl rounded-2xl border border-white/10 bg-white/5 object-contain hover:opacity-95 transition"
                  loading="lazy"
                />
              </a>
            </div>

            {/* PDF sujet */}
            <div className="mt-4">
              <p className="text-sm text-slate-300 mb-2">
                {isFr ? "Sujet (PDF) :" : "Brief (PDF):"}
              </p>
              <a
                href="/sae/sae501/sujet-sae501.pdf"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-slate-100 hover:bg-white/10"
              >
                {isFr ? "Ouvrir le PDF" : "Open PDF"}
                <span className="text-slate-400">↗</span>
              </a>
            </div>

            {/* Configs txt */}
            <div className="mt-4">
              <p className="text-sm text-slate-300 mb-2">
                {isFr ? "Configurations (txt) :" : "Configurations (txt):"}
              </p>

              <div className="flex flex-wrap gap-2">
                {[
                  { label: "ACCSW1", href: "/sae/sae501/accsw1.txt" },
                  { label: "ACCSW2", href: "/sae/sae501/accsw2.txt" },
                  { label: "CORESW1", href: "/sae/sae501/coresw1.txt" },
                  { label: "CORESW2", href: "/sae/sae501/coresw2.txt" },
                ].map((f) => (
                  <a
                    key={f.label}
                    href={f.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-slate-100 hover:bg-white/10"
                  >
                    {f.label}
                    <span className="text-slate-400">↗</span>
                  </a>
                ))}
              </div>
            </div>

            <p className="mt-2 text-xs text-slate-400">
              {isFr
                ? "Chemins attendus : public/sae/sae501/packet-tracer.png, sujet-sae501.pdf, accsw1/2.txt, coresw1/2.txt"
                : "Expected paths: public/sae/sae501/packet-tracer.png, sujet-sae501.pdf, accsw1/2.txt, coresw1/2.txt"}
            </p>
          </div>
        </Card>
      </div>

      {/* ✅ 3) SAÉ 503 — Surveiller */}
      <div className="mb-8">
        <Card>
          <div className="text-sm text-slate-300">
            {isFr ? "Compétence" : "Competency"}
          </div>

          <h3 className="mt-1 text-xl font-semibold text-slate-100">
            {isFr
              ? "Surveiller un système d’information sécurisé"
              : "Monitor a secure information system"}
          </h3>

          <p className="mt-2 text-slate-200 font-medium">
            {isFr
              ? "SAÉ503 — Supervision avancée : logs, détection d’anomalies et IDS"
              : "SAE503 — Advanced monitoring: logs, anomaly detection, and IDS"}
          </p>

          <div className="mt-3 text-slate-300">
            <span className="font-semibold text-slate-200">
              {isFr ? "Contexte : " : "Context: "}
            </span>
            {isFr
              ? "SAÉ Cyber 503 — mise en place d’une infrastructure, puis supervision complète à partir des logs et d’un IDS pour détecter les anomalies."
              : "Cyber SAE 503 — infrastructure deployment, then full monitoring using logs and an IDS to detect anomalies."}
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {[
              isFr ? "Supervision" : "Monitoring",
              "Logs",
              "IDS",
              isFr ? "Détection d'anomalies" : "Anomaly detection",
              isFr ? "Traçabilité" : "Traceability",
            ].map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-slate-200"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="mt-5 rounded-2xl border border-white/10 bg-black/20 p-4">
            <div className="font-semibold text-slate-100">
              {isFr ? "Preuves (SAÉ 503)" : "Evidence (SAE 503)"}
            </div>

            <p className="mt-2 text-sm text-slate-300">
              {isFr
                ? "Extrait d'un dashboard de la SAÉ503 et rapport technique détaillé (supervision, collecte de logs, mise en place IDS, analyse des alertes)."
                : "Dashboard extract from SAE 503 + technical report (monitoring, log collection, IDS setup, alert analysis)."}
            </p>

            {/* Image dashboard */}
            <div className="mt-4">
              <p className="text-sm text-slate-300 mb-2">
                {isFr ? "Extrait d'un dashboard :" : "Dashboard extract:"}
              </p>

              <a
                href="/sae/sae503/dash.png"
                target="_blank"
                rel="noreferrer"
                className="block"
              >
                <img
                  src="/sae/sae503/dash.png"
                  alt={isFr ? "Dashboard SAÉ503" : "SAE503 dashboard"}
                  className="w-full max-w-3xl rounded-2xl border border-white/10 bg-white/5 object-contain hover:opacity-95 transition"
                  loading="lazy"
                />
              </a>
            </div>

            {/* PDF rapport */}
            <div className="mt-4">
              <p className="text-sm text-slate-300 mb-2">
                {isFr ? "Rapport technique :" : "Technical report:"}
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

            <p className="mt-2 text-xs text-slate-400">
              {isFr
                ? "Chemins attendus : public/sae/sae503/dash.png et public/sae/sae503/rapport.pdf"
                : "Expected paths: public/sae/sae503/dash.png and public/sae/sae503/rapport.pdf"}
            </p>
          </div>
        </Card>
      </div>
    </Section>
  );
}
