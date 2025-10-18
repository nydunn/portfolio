import Section from '@/components/Section';
import { getDictionary } from '@/lib/dictionaries';
import { Locale } from '@/lib/i18n';

export default async function Page({ params }: { params: { locale: Locale } }) {
  const t = await getDictionary(params.locale);
  const linkedinUrl = 'https://www.linkedin.com'; // À remplacer
  const email = 'mailto:prenom.nom@example.com'; // À remplacer
  return (
    <Section title={t.contact.title} subtitle={t.contact.subtitle}>
      <div className="flex gap-3">
        <a className="btn-primary" href={linkedinUrl} target="_blank" rel="noreferrer">{t.contact.linkedin}</a>
        <a className="btn-ghost" href={email}>{t.contact.email}</a>
      </div>
    </Section>
  );
}
