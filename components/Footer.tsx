import Link from "next/link";

export default function Footer({ t, locale }: { t: any; locale: "fr" | "en" }) {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-12 border-t border-white/10 bg-white/5">
      <div className="container-padded py-10 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="text-sm text-slate-300">
          {(t.footer?.rights ?? "© {{year}}").replace("{{year}}", String(year))}
        </div>

        {/* ✅ Au lieu de "Built by Tailwind..." -> bouton Contact */}
        <Link
          href={`/${locale}/contact`}
          className="inline-flex items-center justify-center rounded-2xl px-4 py-2 bg-brand-500 text-white hover:bg-brand-600"
        >
          {t.nav?.contact ?? (locale === "fr" ? "Contact" : "Contact")}
        </Link>
      </div>
    </footer>
  );
}
