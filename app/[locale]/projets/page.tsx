import { getDictionary } from "@/lib/dictionaries";
import Section from "@/components/Section";
import Card from "@/components/Card";
import { Locale } from "@/lib/i18n";

export default async function Page({ params }: { params: { locale: Locale } }) {
  const t = await getDictionary(params.locale);
  const isFr = params.locale === "fr";

  const microLearningHref = `/${params.locale}/micro-learning`;

  return (
    <Section title={t.projects.title} subtitle={t.projects.subtitle}>
      <div className="grid gap-6">
        {/* =========================
            PROJET 1 — OXIDIZED
           ========================= */}
        <Card>
          <div className="text-sm text-slate-300">
            {isFr ? "Projet (stage/alternance)" : "Project (internship/work-study)"}
          </div>

          <h3 className="mt-1 text-xl font-semibold text-slate-100">
            {isFr
              ? "Oxidized — Sauvegarde & versioning des configurations réseau"
              : "Oxidized — Network config backup & versioning"}
          </h3>

          <p className="mt-2 text-slate-300">
            {isFr
              ? "Mise en place d’Oxidized pour automatiser la sauvegarde des configurations (switch/routeur), historiser les changements via Git, et intégrer le suivi dans LibreNMS."
              : "Deployed Oxidized to automate network device configuration backups, keep a full history via Git, and integrate monitoring into LibreNMS."}
          </p>

          <div className="mt-4 flex flex-wrap gap-2">
            {[
              "Oxidized",
              "Git",
              "LibreNMS",
              isFr ? "Sauvegardes auto" : "Auto backups",
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
              {isFr ? "Intégration dans LibreNMS (aperçu)" : "LibreNMS integration (preview)"}
            </div>

            <p className="mt-2 text-sm text-slate-300">
              {isFr
                ? "Capture montrant l’intégration et la visibilité dans LibreNMS."
                : "Screenshot showing the integration and visibility in LibreNMS."}
            </p>

            {/* ✅ Image affichée, pas un lien */}
            <div className="mt-3">
              <img
                src="/preuves/automatisation-switch/oxidized.png"
                alt={isFr ? "Capture LibreNMS + Oxidized" : "LibreNMS + Oxidized screenshot"}
                className="w-full max-w-3xl rounded-2xl border border-white/10 bg-white/5 object-contain"
                loading="lazy"
              />
            </div>

            <div className="mt-4 flex flex-wrap gap-3">
              {/* ✅ Redirige vers la page Micro-learning */}
              <a
                href={microLearningHref}
                className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-slate-100 hover:bg-white/10"
              >
                {isFr ? "Voir le micro-learning" : "View micro-learning"}{" "}
                <span className="text-slate-400">↗</span>
              </a>

              <a
                href="/videos/learning/Rapport.pdf"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-slate-100 hover:bg-white/10"
              >
                {isFr ? "Ouvrir le rapport (PDF)" : "Open report (PDF)"}{" "}
                <span className="text-slate-400">↗</span>
              </a>
            </div>

            <p className="mt-2 text-xs text-slate-400">
              {isFr
                ? "Chemins attendus : public/preuves/oxidzied.png et public/videos/learning/Rapport.pdf"
                : "Expected paths: public/preuves/oxidzied.png and public/videos/learning/Rapport.pdf"}
            </p>
          </div>
        </Card>

        {/* =========================
            PROJET 2 — DEPLOIEMENT SWITCH
           ========================= */}
        <Card>
          <div className="text-sm text-slate-300">{isFr ? "Projet (alternance)" : "Project (work-study)"}</div>

          <h3 className="mt-1 text-xl font-semibold text-slate-100">
            {isFr
              ? "Déploiement automatisé de configurations sur des commutateurs"
              : "Automated deployment of switch configurations"}
          </h3>

          <p className="mt-2 text-slate-300">
            {isFr
              ? "Contexte : plus de 100 switches à déployer avec une base commune, mais des paramètres variables (VLAN, IP, DNS, SNMP, uplinks…). Automatisation via script Python en console série."
              : "Context: 100+ switches with a common baseline but per-device parameters (VLAN, IP, DNS, SNMP, uplinks…). Automated via a Python script over serial console."}
          </p>

          <div className="mt-4 flex flex-wrap gap-2">
            {[
              isFr ? "Automatisation" : "Automation",
              "Python",
              "Serial",
              "Cisco IOS-XE",
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
              {isFr ? "Preuve (script anonymisé)" : "Evidence (anonymized script)"}
            </div>

            <p className="mt-2 text-sm text-slate-300">
              {isFr
                ? "Script : init Day0, config générique, paramètres personnalisés, config interfaces, sauvegarde. (Anonymisation des secrets/identifiants)."
                : "Script: Day0 init, generic config, custom parameters, interface config, save. (Secrets/IDs redacted)."}
            </p>

            <a
              href="/preuves/automatisation-switch/script-anonymise.txt"
              target="_blank"
              rel="noreferrer"
              className="mt-3 inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-slate-100 hover:bg-white/10"
            >
              {isFr ? "Ouvrir le script" : "Open script"}{" "}
              <span className="text-slate-400">↗</span>
            </a>

            <p className="mt-2 text-xs text-slate-400">
              {isFr
                ? "Chemin attendu : public/preuves/automatisation-switch/script-anonymise.txt"
                : "Expected path: public/preuves/automatisation-switch/script-anonymise.txt"}
            </p>
          </div>
        </Card>

        {/* =========================
            PROJET 3 — SAE 501
           ========================= */}
        <Card>
          <div className="text-sm text-slate-300">{isFr ? "SAÉ" : "SAE"}</div>

          <h3 className="mt-1 text-xl font-semibold text-slate-100">
            {isFr ? "SAÉ 501 — Connecter les entreprises et les usagers" : "SAE 501 — Connecting companies and users"}
          </h3>

          <p className="mt-2 text-slate-300">
            {isFr
              ? "Conception et déploiement d’une infrastructure complète multi-sites : adressage, VLAN, routage, services (DNS/DHCP…), accès distant, supervision, et segmentation (DMZ/MGMT)."
              : "Design and deployment of a complete multi-site infrastructure: addressing, VLAN, routing, services (DNS/DHCP…), remote access, monitoring, and segmentation (DMZ/MGMT)."}
          </p>

          <div className="mt-4 text-slate-300">
            <ul className="list-disc pl-5 space-y-1">
              <li>{isFr ? "Architecture multi-sites (HQ / remote / backbone) + interconnexions." : "Multi-site architecture (HQ / remote / backbone) + interconnections."}</li>
              <li>{isFr ? "Plan d’adressage + VLAN (clients, serveurs, MGMT, DMZ) + trunks." : "Addressing plan + VLANs (clients, servers, MGMT, DMZ) + trunks."}</li>
              <li>{isFr ? "Routage & passerelles (inter-VLAN, accès Internet, routes)." : "Routing & gateways (inter-VLAN, Internet access, routes)."}</li>
              <li>{isFr ? "Services réseau (DNS/DHCP) et rôles serveurs selon les zones." : "Network services (DNS/DHCP) and server roles per zone."}</li>
              <li>{isFr ? "Sécurité : segmentation, DMZ, principes de filtrage, séparation MGMT." : "Security: segmentation, DMZ, filtering principles, MGMT isolation."}</li>
              <li>{isFr ? "Supervision/administration : logique d’exploitation et continuité de service." : "Monitoring/operations: run logic and service continuity."}</li>
            </ul>
          </div>

          <div className="mt-5 rounded-2xl border border-white/10 bg-black/20 p-4">
            <div className="font-semibold text-slate-100">
              {isFr ? "Schéma global de l’infrastructure" : "Overall infrastructure diagram"}
            </div>

            <p className="mt-2 text-sm text-slate-300">
              {isFr
                ? "Aperçu pour visualiser l’ampleur du réseau (clique pour l’ouvrir en grand)."
                : "Preview to understand the size of the network (click to open full size)."}
            </p>

            {/* ✅ Aperçu à ~30% */}
            <a
              href="/sae/sae501/schema.png"
              target="_blank"
              rel="noreferrer"
              className="mt-3 inline-block"
              title={isFr ? "Ouvrir le schéma en grand" : "Open full-size diagram"}
            >
              <img
                src="/sae/sae501/schema.png"
                alt={isFr ? "Schéma global SAE 501" : "SAE 501 overall diagram"}
                className="block mx-auto w-full max-w-[100%] min-w-[220px] rounded-2xl border border-white/10 bg-white/5 object-contain hover:opacity-95 transition"
                loading="lazy"
              />
            </a>

            <div className="mt-4 flex flex-wrap gap-2">
              <a
                href="/sae/sae501/accsw1.txt"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-slate-100 hover:bg-white/10"
              >
                accsw1.txt <span className="text-slate-400">↗</span>
              </a>
              <a
                href="/sae/sae501/accsw2.txt"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-slate-100 hover:bg-white/10"
              >
                accsw2.txt <span className="text-slate-400">↗</span>
              </a>
              <a
                href="/sae/sae501/coresw1.txt"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-slate-100 hover:bg-white/10"
              >
                coresw1.txt <span className="text-slate-400">↗</span>
              </a>
              <a
                href="/sae/sae501/coresw2.txt"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-slate-100 hover:bg-white/10"
              >
                coresw2.txt <span className="text-slate-400">↗</span>
              </a>
            </div>

            <p className="mt-2 text-xs text-slate-400">
              {isFr
                ? "Chemins attendus : public/sae/sae501/schema.png + confs .txt"
                : "Expected paths: public/sae/sae501/schema.png + .txt configs"}
            </p>
          </div>
        </Card>
      </div>
    </Section>
  );
}
