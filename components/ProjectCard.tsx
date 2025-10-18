import Card from './Card';

export default function ProjectCard({ p, locale }: { p: any; locale: 'fr'|'en' }) {
  return (
    <Card>
      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-semibold">{p.title[locale]}</h3>
          <span className="text-sm text-slate-600">{p.context[locale]}</span>
        </div>
        <p className="text-slate-700">{p.summary[locale]}</p>
        <div className="flex flex-wrap gap-2 mt-2">
          {p.techs.map((t: string) => (
            <span key={t} className="px-2 py-1 rounded-full bg-brand-50 text-brand-700 text-xs border border-brand-100">{t}</span>
          ))}
        </div>
        {p.outcomes?.length > 0 && (
          <ul className="list-disc pl-5 text-slate-700 mt-2">
            {p.outcomes.map((o: any, i: number) => <li key={i}>{o[locale]}</li>)}
          </ul>
        )}
        <div className="mt-3 text-sm text-slate-600">
          <strong>Compétences:</strong> {p.skills.join(', ')}
        </div>
      </div>
    </Card>
  );
}
