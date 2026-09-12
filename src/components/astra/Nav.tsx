import { sectors, type SectorId } from "./data";
import { Emblem } from "./Emblem";
import { cn } from "@/lib/utils";

export function Nav({
  active,
  onNavigate,
}: {
  active: SectorId;
  onNavigate: (id: SectorId) => void;
}) {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-hud/15 bg-void/90 backdrop-blur-md">
      {/* top row — brand left edge, CTA right edge */}
      <div className="flex w-full items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <button
          onClick={() => onNavigate("mission")}
          className="flex items-center gap-3 text-left"
        >
          <Emblem className="h-8 w-8 shrink-0" spin={false} />
          <span className="min-w-0">
            <span className="block truncate font-sans text-base font-bold tracking-[0.08em] text-foreground sm:text-lg">
              ASTRA
            </span>
            <span className="hidden font-mono text-[9px] tracking-[0.3em] text-hud sm:block">
              DEVELOPER TEAM
            </span>
          </span>
        </button>

        <button
          onClick={() => onNavigate("comms")}
          className="shrink-0 bg-scarlet px-3.5 py-2 font-mono text-[10px] uppercase tracking-[0.18em] text-primary-foreground transition-colors hover:bg-scarlet-deep sm:px-5 sm:py-2.5 sm:text-[11px] sm:tracking-[0.2em]"
          style={{
            clipPath:
              "polygon(10px 0,100% 0,100% calc(100% - 10px),calc(100% - 10px) 100%,0 100%,0 10px)",
          }}
        >
          Start a Project
        </button>
      </div>

      {/* section strip — always visible, edge to edge, each item its own box */}
      <nav
        aria-label="Primary"
        className="scrollbar-none flex w-full items-stretch overflow-x-auto border-t border-hud/15 bg-deep/60"
      >
        {sectors.map((s, i) => {
          const isActive = s.id === active;
          return (
            <button
              key={s.id}
              onClick={() => onNavigate(s.id)}
              className={cn(
                "group relative flex flex-1 shrink-0 items-center justify-center gap-2 whitespace-nowrap px-4 py-2.5 font-mono text-[10px] uppercase tracking-[0.22em] transition-colors sm:text-[11px]",
                i !== 0 && "border-l border-hud/15",
                isActive
                  ? "bg-scarlet/15 text-scarlet"
                  : "text-hud hover:bg-void/60 hover:text-foreground",
              )}
            >
              <span className={cn("text-[9px]", isActive ? "text-scarlet" : "text-hud/60")}>
                {s.code}
              </span>
              {s.label}
              <span
                className={cn(
                  "absolute inset-x-0 top-0 h-[2px] transition-opacity",
                  isActive ? "bg-scarlet opacity-100" : "opacity-0",
                )}
              />
            </button>
          );
        })}
      </nav>
    </header>
  );
}
