import Link from "next/link";
import type { Metadata } from "next";
import { Locale } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "En construction / Under construction",
};

export default function UnderConstructionPage({
  params,
}: { params: { locale: Locale } }) {
  const isFr = params.locale === "fr";
  return (
    <main className="container-padded py-16 min-h-[60vh]">
      <div className="mx-auto max-w-3xl rounded-2xl border border-white/10 bg-white/5 p-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-3">
          {isFr ? "En construction" : "Under construction"}
        </h1>
        <p className="text-slate-300 mb-6">
          {isFr
            ? "Cette page sera bientôt disponible. Je la peaufine actuellement."
            : "This page will be available soon. I’m polishing it."}
        </p>
        <Link
          href={`/${params.locale}`}
          className="inline-flex items-center rounded-2xl px-4 py-2 bg-brand-500 text-white hover:bg-brand-600"
        >
          {isFr ? "Retour à l’accueil" : "Back to home"}
        </Link>
      </div>
    </main>
  );
}
