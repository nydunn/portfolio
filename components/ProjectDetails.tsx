// components/ProjectDetails.tsx
import React from "react";

export default function ProjectDetails({
  title,
  children,
  defaultOpen = false,
}: {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}) {
  return (
    <details
      className="mt-5 rounded-2xl border border-white/10 bg-white/5 p-4"
      open={defaultOpen}
    >
      <summary className="cursor-pointer text-slate-100 font-semibold">
        {title}
      </summary>

      <div className="mt-4 rounded-2xl border border-white/10 bg-black/20 p-4 text-slate-300">
        {children}
      </div>
    </details>
  );
}
