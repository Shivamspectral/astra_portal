import type { ReactNode } from "react";

export function ViewShell({ children }: { children: ReactNode }) {
  return (
    <section className="astra-view-in relative mx-auto max-w-7xl px-4 pb-24 pt-28 sm:px-6 sm:pb-32 sm:pt-32">
      {children}
    </section>
  );
}

export function PageHeader({
  phase,
  title,
  lede,
}: {
  phase: string;
  title: string;
  lede?: string;
}) {
  return (
    <div>
      <p className="font-mono text-[10px] tracking-[0.4em] text-scarlet">{phase}</p>
      <h2 className="mt-3 font-sans text-3xl font-bold tracking-tight text-foreground sm:text-5xl">
        {title}
      </h2>
      {lede && <p className="mt-4 max-w-xl text-sm text-muted-foreground sm:text-base">{lede}</p>}
    </div>
  );
}
