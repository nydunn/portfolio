import { getDictionary } from '@/lib/dictionaries';
import { competencies } from '@/lib/content';
import CompetenceMatrix from '@/components/CompetenceMatrix';
import Section from '@/components/Section';
import { Locale } from '@/lib/i18n';

export default async function Page({ params }: { params: { locale: Locale } }) {
  const t = await getDictionary(params.locale);
  return (
    <Section title={t.skills.title} subtitle={t.skills.subtitle}>
      <CompetenceMatrix competencies={competencies} />
    </Section>
  );
}
