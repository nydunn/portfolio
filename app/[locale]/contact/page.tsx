import { Locale } from "@/lib/i18n";
import { getDictionary } from "@/lib/dictionaries";

export default async function Page({ params }: { params: { locale: Locale } }) {
  const t = await getDictionary(params.locale);
  const isFr = params.locale === "fr";

  // ✅ Remplace par tes vraies adresses
  const emailPerso = "gabin.becu@edu.univ-fcomte.fr";
  const emailPro = "becu.gab@gmail.com";

  return (
    <main className="container-padded py-12 md:py-16">
      <h1 className="section-title gradient-text">{t.contact.title}</h1>
      <p className="section-sub">{t.contact.subtitle}</p>

      <div className="mt-8 grid gap-6">
        {/* LinkedIn */}
        <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
          <div className="text-sm text-slate-300">LinkedIn</div>
          <a
            className="mt-1 inline-flex items-center gap-2 text-slate-100 underline decoration-white/20 hover:decoration-white/60"
            href="https://www.linkedin.com/in/gabin-becu-551837306/"
            target="_blank"
            rel="noreferrer"
          >
            {t.contact.linkedin}
            <span className="text-slate-400">↗</span>
          </a>
        </div>

        {/* ✅ Emails (2 adresses, simples) */}
        <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
          <div className="text-sm text-slate-300">{isFr ? "Emails" : "Emails"}</div>

          <div className="mt-2 space-y-2">
            <p className="text-slate-100">
              <span className="text-slate-400">{isFr ? "Universitaire :" : "university :"}</span>{" "}
              <a
                className="font-mono underline decoration-white/20 hover:decoration-white/60 break-all"
                href={`mailto:${emailPerso}`}
              >
                {emailPerso}
              </a>
            </p>

            <p className="text-slate-100">
              <span className="text-slate-400">{isFr ? "Gmail :" : "Gmail:"}</span>{" "}
              <a
                className="font-mono underline decoration-white/20 hover:decoration-white/60 break-all"
                href={`mailto:${emailPro}`}
              >
                {emailPro}
              </a>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
