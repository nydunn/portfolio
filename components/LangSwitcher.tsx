'use client';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

export default function LangSwitcher({ locale }: { locale: 'fr' | 'en' }) {
  const pathname = usePathname();
  const other = locale === 'fr' ? 'en' : 'fr';
  const stripped = pathname?.replace(/^\/(fr|en)/, '') || '';
  return (
    <Link href={`/${other}${stripped}`} className="btn btn-ghost" aria-label="Switch language">
      {other.toUpperCase()}
    </Link>
  );
}
