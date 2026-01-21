import { Locale } from "@/lib/i18n";
import LearningSection from "@/components/LearningSection";

export default async function Page({ params }: { params: { locale: Locale } }) {
  const locale = params.locale;

  return (
    <main>
      <LearningSection locale={locale as "fr" | "en"} />
    </main>
  );
}
