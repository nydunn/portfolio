import Section from '@/components/Section';
import { getDictionary } from '@/lib/dictionaries';
import { Locale } from '@/lib/i18n';
import Link from 'next/link';

export default async function Page({ params }: { params: { locale: Locale } }) {
  const t = await getDictionary(params.locale);
  return (
    <>
      <section className="container-padded py-16 md:py-24">
        <h1 className="text-4xl md:text-6xl font-extrabold gradient-text mb-4">{t.home.heroTitle}</h1>
        <p className="text-lg text-slate-700 mb-8">{t.home.heroSubtitle}</p>
        <div className="flex gap-3">
          <Link href={`/${params.locale}/projets`} className="btn-primary">{t.home.ctaProjects}</Link>
          <Link href={`/${params.locale}/contact`} className="btn-ghost">{t.home.ctaContact}</Link>
        </div>
      </section>

      <Section title="Highlights" subtitle="Aperçu rapide">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="card">Oxidized — sauvegardes config</div>
          <div className="card">Alternance — à définir</div>
          <div className="card">SAÉ S6 — à venir</div>
        </div>
      </Section>
    </>
  );
}
