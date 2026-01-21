import type { Metadata } from "next";
import { getDictionary } from "@/lib/dictionaries";
import { Locale } from "@/lib/i18n";
import "../globals.css";
import { Inter } from "next/font/google";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export async function generateMetadata({
  params,
}: {
  params: { locale: Locale };
}): Promise<Metadata> {
  const t = await getDictionary(params.locale);
  return {
    title: t.meta.title,
    description: t.meta.description,
    icons: { icon: "/icon.png" },
  };
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: Locale };
}) {
  const t = await getDictionary(params.locale);

  return (
    <html lang={params.locale}>
      <body className={inter.className}>
        <NavBar t={t} locale={params.locale} />
        <main>{children}</main>
        <Footer t={t} locale={params.locale} />
      </body>
    </html>
  );
}
