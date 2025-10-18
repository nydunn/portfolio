import { getDictionary } from '@/lib/dictionaries';
import { projects } from '@/lib/content';
import Section from '@/components/Section';
import ProjectCard from '@/components/ProjectCard';
import { Locale } from '@/lib/i18n';

export default async function Page({ params }: { params: { locale: Locale } }) {
  const t = await getDictionary(params.locale);
  return (
    <Section title={t.projects.title} subtitle={t.projects.subtitle}>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((p) => <ProjectCard key={p.id} p={p} locale={params.locale} />)}
      </div>
    </Section>
  );
}
