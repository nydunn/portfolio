import { getDictionary } from "@/lib/dictionaries";
import Section from "@/components/Section";
import Card from "@/components/Card";
import { Locale } from "@/lib/i18n";
import ProjectDetails from "@/components/ProjectDetails";

export default async function Page({ params }: { params: { locale: Locale } }) {
  const t = await getDictionary(params.locale);
  const isFr = params.locale === "fr";

  const microLearningHref = `/${params.locale}/demarche-portfolio`;

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

          {/* ✅ Menu déroulant - TEXTE COMPLET */}
          <ProjectDetails title={isFr ? "détails :" : "details:"}>
            <h4 className="text-lg font-semibold text-slate-100">
              {isFr
                ? "Projet d’automatisation et de gestion de configuration réseau – Mise en œuvre d’Oxidized"
                : "Network config automation project – Oxidized implementation"}
            </h4>

            <p className="mt-3">
              {isFr
                ? "Dans le cadre de ma formation, j’ai réalisé un projet individuel portant sur la mise en place d’une solution de sauvegarde et de suivi automatisé des configurations des équipements réseau. L’objectif principal était d’améliorer la fiabilité de l’administration réseau en assurant la centralisation, la traçabilité et l’historisation des configurations."
                : "As part of my training, I deployed an automated solution to back up and track network device configurations, with the goal of improving reliability through centralized storage, traceability, and version history."}
            </p>

            <p className="mt-3">
              {isFr
                ? "Ce projet m’a permis d’aborder des problématiques concrètes d’exploitation réseau, proches de celles rencontrées en entreprise, notamment la gestion des changements, la prévention des erreurs de configuration et la facilitation des opérations de maintenance."
                : "This project focused on real operations concerns: change management, preventing configuration mistakes, and easing maintenance workflows."}
            </p>

            <div className="mt-4">
              <div className="font-semibold text-slate-100">{isFr ? "Points clés" : "Key points"}</div>
              <ul className="mt-2 list-disc pl-5 space-y-1">
                <li>
                  {isFr
                    ? "Déploiement d’Oxidized sur un serveur Linux dédié et configuration globale."
                    : "Deployed Oxidized on a dedicated Linux server and configured it."}
                </li>
                <li>
                  {isFr
                    ? "Connexion aux équipements via SSH, organisation par groupes et types."
                    : "Connected devices over SSH, organized by groups and types."}
                </li>
                <li>
                  {isFr
                    ? "Sauvegarde automatique des configurations et historisation (diff/versions)."
                    : "Automated config backups with full version history (diff/versions)."}
                </li>
                <li>
                  {isFr
                    ? "Approche orientée exploitation : traçabilité, dépannage, retour arrière."
                    : "Ops-oriented approach: traceability, troubleshooting, rollback."}
                </li>
              </ul>
            </div>

            <p className="mt-3">
              {isFr
                ? "Cette mise en œuvre renforce la fiabilité de l’infrastructure et facilite le suivi des changements, tout en réduisant les risques liés aux erreurs humaines."
                : "This implementation improves infrastructure reliability and change tracking while reducing human-error risk."}
            </p>
          </ProjectDetails>

          <div className="mt-5 rounded-2xl border border-white/10 bg-black/20 p-4">
            <div className="font-semibold text-slate-100">
              {isFr ? "Intégration dans LibreNMS (aperçu)" : "LibreNMS integration (preview)"}
            </div>

            <p className="mt-2 text-sm text-slate-300">
              {isFr
                ? "Capture montrant l’intégration et la visibilité dans LibreNMS."
                : "Screenshot showing the integration and visibility in LibreNMS."}
            </p>

            <div className="mt-3">
              <img
                src="/preuves/automatisation-switch/oxidized.png"
                alt={isFr ? "Capture LibreNMS + Oxidized" : "LibreNMS + Oxidized screenshot"}
                className="w-full max-w-3xl rounded-2xl border border-white/10 bg-white/5 object-contain"
                loading="lazy"
              />
            </div>

            <div className="mt-4 flex flex-wrap gap-3">
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
                ? "Documents supplémentaires"
                : "More docs"}
            </p>
          </div>
        </Card>

        {/* =========================
            PROJET 2 — DEPLOIEMENT SWITCH
           ========================= */}
        <Card>
          <div className="text-sm text-slate-300">
            {isFr ? "Projet (alternance)" : "Project (work-study)"}
          </div>

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

          {/* ✅ Menu déroulant - TEXTE COMPLET */}
          <ProjectDetails title={isFr ? "détails :" : "details:"}>
            <h4 className="text-lg font-semibold text-slate-100">
              {isFr
                ? "Projet de déploiement et de configuration de switches – Administration et mise en service"
                : "Switch deployment & configuration project – Operations and rollout"}
            </h4>

            <p className="mt-3">
              {isFr
                ? "Dans le cadre de ma formation, j’ai réalisé un projet portant sur le déploiement, la configuration et la mise en service de switches au sein d’une infrastructure réseau. L’objectif était de mettre en place une commutation fiable, sécurisée et structurée, répondant aux besoins d’un réseau d’entreprise."
                : "I carried out a switch deployment project focused on rollout, configuration, and integration into a secure and structured enterprise-like network."}
            </p>

            <p className="mt-3">
              {isFr
                ? "Ce projet m’a permis de travailler sur des problématiques concrètes d’administration réseau, depuis la configuration initiale jusqu’à l’intégration dans une architecture segmentée et maintenable."
                : "It covered real operational constraints: initial setup, segmentation, security hardening, and maintainability."}
            </p>

            <div className="mt-4">
              <div className="font-semibold text-slate-100">{isFr ? "Travail réalisé" : "Work done"}</div>
              <ul className="mt-2 list-disc pl-5 space-y-1">
                <li>
                  {isFr
                    ? "Configuration initiale : identité, accès d’administration, SSH, durcissement."
                    : "Initial setup: identity, admin access, SSH, hardening."}
                </li>
                <li>
                  {isFr
                    ? "Segmentation : VLAN, ports access/trunk, cohérence du plan réseau."
                    : "Segmentation: VLANs, access/trunk ports, consistent network plan."}
                </li>
                <li>
                  {isFr
                    ? "Bonnes pratiques d’exploitation : standardisation, documentation, lisibilité."
                    : "Ops best practices: standardization, documentation, clarity."}
                </li>
              </ul>
            </div>

            <p className="mt-3">
              {isFr
                ? "Au-delà de la configuration, l’objectif était de rendre l’infrastructure exploitable et durable : cohérence, dépannage facilité, et intégration progressive à la supervision."
                : "Beyond configuration, the goal was long-term operability: consistency, easier troubleshooting, and progressive monitoring integration."}
            </p>

            <p className="mt-3">
              {isFr
                ? "Ce projet m’a permis de consolider mes compétences en commutation réseau et en administration d’équipements avec une approche rigoureuse et orientée exploitation."
                : "It strengthened my switching and device administration skills with a rigorous, operations-focused approach."}
            </p>
          </ProjectDetails>

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
                ? "Documents supplémentaires"
                : "More docs"}
            </p>
          </div>
        </Card>

        {/* =========================
            PROJET 3 — SAE 501
           ========================= */}
        <Card>
          <div className="text-sm text-slate-300">{isFr ? "SAÉ" : "SAE"}</div>

          <h3 className="mt-1 text-xl font-semibold text-slate-100">
            {isFr
              ? "SAÉ 501 — Connecter les entreprises et les usagers"
              : "SAE 501 — Connecting companies and users"}
          </h3>

          <p className="mt-2 text-slate-300">
            {isFr
              ? "Conception et déploiement d’une infrastructure complète multi-sites : adressage, VLAN, routage, services (DNS/DHCP…), accès distant, supervision, et segmentation (DMZ/MGMT)."
              : "Design and deployment of a complete multi-site infrastructure: addressing, VLAN, routing, services (DNS/DHCP…), remote access, monitoring, and segmentation (DMZ/MGMT)."}
          </p>

          <div className="mt-4 text-slate-300">
            <ul className="list-disc pl-5 space-y-1">
              <li>
                {isFr
                  ? "Architecture multi-sites (HQ / remote / backbone) + interconnexions."
                  : "Multi-site architecture (HQ / remote / backbone) + interconnections."}
              </li>
              <li>
                {isFr
                  ? "Plan d’adressage + VLAN (clients, serveurs, MGMT, DMZ) + trunks."
                  : "Addressing plan + VLANs (clients, servers, MGMT, DMZ) + trunks."}
              </li>
              <li>
                {isFr
                  ? "Routage & passerelles (inter-VLAN, accès Internet, routes)."
                  : "Routing & gateways (inter-VLAN, Internet access, routes)."}
              </li>
              <li>
                {isFr
                  ? "Services réseau (DNS/DHCP) et rôles serveurs selon les zones."
                  : "Network services (DNS/DHCP) and server roles per zone."}
              </li>
              <li>
                {isFr
                  ? "Sécurité : segmentation, DMZ, principes de filtrage, séparation MGMT."
                  : "Security: segmentation, DMZ, filtering principles, MGMT isolation."}
              </li>
              <li>
                {isFr
                  ? "Supervision/administration : logique d’exploitation et continuité de service."
                  : "Monitoring/operations: run logic and service continuity."}
              </li>
            </ul>
          </div>

          {/* ✅ Menu déroulant - TEXTE COMPLET */}
          <ProjectDetails title={isFr ? "détails :" : "details :"}>
            <h4 className="text-lg font-semibold text-slate-100">
              {isFr
                ? "Projet SAE 501 – Conception, déploiement et présentation d’une solution technique"
                : "SAE 501 – Design, deployment and presentation of a technical solution"}
            </h4>

            <p className="mt-3">
              {isFr
                ? "Dans le cadre de la SAE 501, nous avons mené un projet de groupe portant sur la conception et le déploiement d’une infrastructure réseau complète pour une entreprise fictive répartie sur plusieurs sites : un siège, un site distant et un accès à Internet."
                : "As part of SAE 501, our team designed and deployed a multi-site network infrastructure for a fictional company (HQ, remote site, Internet access)."}
            </p>

            <p className="mt-3">
              {isFr
                ? "Bien que le sujet nous ait été imposé, ce projet a constitué une réelle opportunité d’apprentissage. Il nous a permis de mettre en pratique nos compétences réseau et systèmes dans un contexte proche du réel, tout en renforçant notre organisation et notre coordination."
                : "Although the topic was assigned, it was a strong learning opportunity, reinforcing both technical skills and team coordination."}
            </p>

            <div className="mt-4">
              <div className="font-semibold text-slate-100">
                {isFr ? "Éléments mis en œuvre" : "Implemented"}
              </div>
              <ul className="mt-2 list-disc pl-5 space-y-1">
                <li>
                  {isFr
                    ? "Segmentation avancée (VLAN, DMZ, management) et interconnexion multi-sites."
                    : "Advanced segmentation (VLAN, DMZ, management) and multi-site interconnection."}
                </li>
                <li>
                  {isFr
                    ? "Protocoles et services : routage dynamique, plan d’adressage, DHCP/DNS."
                    : "Protocols & services: dynamic routing, addressing plan, DHCP/DNS."}
                </li>
                <li>
                  {isFr
                    ? "Services IT : Active Directory, GPO, web/mail, partages, sauvegardes."
                    : "IT services: Active Directory, GPO, web/mail, file sharing, backups."}
                </li>
                <li>
                  {isFr
                    ? "Sécurité et supervision : filtrage, collecte de logs, monitoring et alertes."
                    : "Security & monitoring: filtering, log collection, monitoring and alerts."}
                </li>
              </ul>
            </div>

            <p className="mt-3">
              {isFr
                ? "Sur un plan plus personnel, ce projet a représenté un vrai défi : charge de travail importante, imprévus techniques et nécessité de se coordonner efficacement. Malgré cela, l’expérience a été très enrichissante, à la fois techniquement et humainement."
                : "Personally, it was challenging due to workload and unexpected issues, but very rewarding technically and collaboratively."}
            </p>
          </ProjectDetails>

          <div className="mt-5 rounded-2xl border border-white/10 bg-black/20 p-4">
            <div className="font-semibold text-slate-100">
              {isFr ? "Schéma global de l’infrastructure" : "Overall infrastructure diagram"}
            </div>

            <p className="mt-2 text-sm text-slate-300">
              {isFr
                ? "Aperçu pour visualiser l’ampleur du réseau (clique pour l’ouvrir en grand)."
                : "Preview to understand the size of the network (click to open full size)."}
            </p>

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
                href="/sae/sae501/sujet.pdf"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-slate-100 hover:bg-white/10"
              >
                sujet.pdf <span className="text-slate-400">↗</span>
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
                ? "Documents supplémentaires"
                : "More docs"}
            </p>
          </div>
        </Card>
      </div>
    </Section>
  );
}
