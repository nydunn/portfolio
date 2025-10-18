import Section from '@/components/Section';
import { getDictionary } from '@/lib/dictionaries';
import { Locale } from '@/lib/i18n';

export default async function Page({ params }: { params: { locale: Locale } }) {
  const t = await getDictionary(params.locale);
  const s = t.portfolio.sections;
  return (
    <>
      <Section title={t.portfolio.title} subtitle={t.portfolio.subtitle}>
        <div className="card">
          <p className="text-slate-700">{s.intro}</p>
        </div>
      </Section>
      <Section title={s.method}>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="card">{s.methodTxt}</div>
          <div className="card">
            <ul className="list-disc pl-5 text-slate-700 space-y-1">
              <li>Carte compétence → preuve pour chaque projet</li>
              <li>Justification des choix (sécurité, supervision, réseau)</li>
              <li>Analyse risques, limites et correctifs</li>
            </ul>
          </div>
        </div>
      </Section>
      <Section title={s.growth}>
        <div className="card">{s.growthTxt}</div>
      </Section>
      <Section title={s.evidence}>
        <div className="card">{s.evidenceTxt}</div>
      </Section>
    </>
  );
}
