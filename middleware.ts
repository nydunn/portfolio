import { NextRequest, NextResponse } from "next/server";
import { locales, defaultLocale } from "./lib/i18n";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Laisser passer Next interne, API et TOUS les fichiers (png, js, css, ico, etc.)
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    /\.[a-z0-9]+$/i.test(pathname)
  ) {
    return NextResponse.next();
  }

  // Si le préfixe de langue manque -> redirige vers /fr ou /en
  const hasLocale = locales.some(
    (l) => pathname === `/${l}` || pathname.startsWith(`/${l}/`)
  );
  if (!hasLocale) {
    return NextResponse.redirect(
      new URL(`/${defaultLocale}${pathname}`, request.url)
    );
  }

  // Si ce n'est PAS la home -> réécrit vers /[locale]/en-construction
  const locale = pathname.split("/")[1];
  const isHome = pathname === `/${locale}`;
  const isUC = pathname === `/${locale}/en-construction`;

  if (!isHome && !isUC) {
    return NextResponse.rewrite(new URL(`/${locale}/en-construction`, request.url));
  }

  return NextResponse.next();
}

// Appliquer partout sauf aux fichiers
export const config = {
  matcher: ["/((?!_next|api|.*\\..*).*)"],
};
