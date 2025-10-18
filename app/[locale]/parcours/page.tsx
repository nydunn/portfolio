import Section from '@/components/Section';
import Timeline from '@/components/Timeline';
import { Locale } from '@/lib/i18n';

export default async function Page({ params }: { params: { locale: Locale } }) {
  const items = [
    { title: params.locale === 'fr' ? 'BUT RT — 3e année' : 'BUT RT — 3rd year', period: '2024–2025', details: 'SAÉ S6, alternance' },
    { title: params.locale === 'fr' ? 'Stage — Oxidized' : 'Internship — Oxidized', period: '2024', details: params.locale === 'fr' ? 'Sauvegardes de configs routeur' : 'Router config backups' }
  ];
  return (
    <Section title={params.locale === 'fr' ? 'Parcours' : 'Timeline'} subtitle={params.locale === 'fr' ? 'Études, stages et alternance' : 'Studies, internships and apprenticeship'}>
      <Timeline items={items} />
    </Section>
  );
}
