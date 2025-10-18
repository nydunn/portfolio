import Card from './Card';

export default function Timeline({ items }: { items: { title: string; period: string; details?: string }[] }) {
  return (
    <div className="relative pl-6">
      <div className="absolute left-3 top-0 bottom-0 w-0.5 bg-gradient-to-b from-brand-500 to-cyan-500" />
      <div className="space-y-6">
        {items.map((it, i) => (
          <div key={i} className="relative">
            <div className="absolute -left-1.5 w-3 h-3 rounded-full bg-brand-500 border-2 border-white" />
            <Card>
              <div className="flex flex-col gap-1">
                <div className="text-sm text-slate-600">{it.period}</div>
                <div className="text-lg font-semibold">{it.title}</div>
                {it.details && <div className="text-slate-700">{it.details}</div>}
              </div>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}
