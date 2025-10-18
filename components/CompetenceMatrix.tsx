import Card from './Card';

export default function CompetenceMatrix({ competencies }: { competencies: string[] }) {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      {competencies.map((c) => (
        <Card key={c}>
          <h3 className="text-xl font-semibold mb-2">{c}</h3>
          <ul className="list-disc pl-5 text-slate-700 space-y-1">
            <li>Preuves: extraits anonymisés, scripts, dashboards</li>
            <li>Indicateurs: RTO, MTTR, couverture, disponibilité</li>
            <li>Réflexivité: limites, risques, axes d'amélioration</li>
          </ul>
        </Card>
      ))}
    </div>
  );
}
