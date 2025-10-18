export default function Footer({ t }: { t: any }) {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-slate-200 mt-12">
      <div className="container-padded py-6 text-sm text-slate-600 flex justify-between">
        <span>{t.footer.rights.replace('{{year}}', String(year))}</span>
        <span>Built with Next.js & Tailwind</span>
      </div>
    </footer>
  );
}
