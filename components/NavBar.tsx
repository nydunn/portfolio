import Link from "next/link";
import Logo from "./Logo";
import LangSwitcher from "./LangSwitcher";

export default function NavBar({ t, locale }: { t: any; locale: 'fr'|'en' }) {
  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-white/80 border-b border-slate-200 text-slate-900">
      <nav className="container-padded h-16 flex items-center justify-between">
        <Link href={`/${locale}`} className="flex items-center gap-2">
          <Logo size={28} />
          <span className="font-bold">G — BUT RT</span>
        </Link>

        <div className="flex items-center gap-2">
          <Link
            href={`/${locale}/competences`}
            className="inline-flex items-center rounded-2xl px-3 py-2 text-slate-900 hover:bg-slate-200/60"
          >
            {t.nav.skills}
          </Link>
          <Link
            href={`/${locale}/projets`}
            className="inline-flex items-center rounded-2xl px-3 py-2 text-slate-900 hover:bg-slate-200/60"
          >
            {t.nav.projects}
          </Link>
          <Link
            href={`/${locale}/parcours`}
            className="inline-flex items-center rounded-2xl px-3 py-2 text-slate-900 hover:bg-slate-200/60"
          >
            {t.nav.timeline}
          </Link>
          <Link
            href={`/${locale}/demarche-portfolio`}
            className="inline-flex items-center rounded-2xl px-3 py-2 text-slate-900 hover:bg-slate-200/60"
          >
            {t.nav.portfolio}
          </Link>
          <Link
            href={`/${locale}/contact`}
            className="inline-flex items-center rounded-2xl px-4 py-2 bg-brand-500 text-white hover:bg-brand-600"
          >
            {t.nav.contact}
          </Link>
          <LangSwitcher locale={locale} />
        </div>
      </nav>
    </header>
  );
}
