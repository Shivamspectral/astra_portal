import cosmos from "@/assets/cosmos.jpg";
import { Emblem } from "./Emblem";
import type { SectorId } from "./data";

const marqueeLine = "REQUIREMENT-FIRST · FULL-CYCLE · PRACTICAL · COLLABORATIVE";

export function Hero({ onNavigate }: { onNavigate: (id: SectorId) => void }) {
  return (
    <section className="relative flex min-h-[100svh] flex-col justify-center overflow-hidden pt-32 sm:pt-36">
      {/* cosmic nebula backdrop behind the emblem */}
      <img
        src={cosmos}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover opacity-60"
      />
      <div className="hero-veil pointer-events-none absolute inset-0" />
      <div className="hero-grid-veil pointer-events-none absolute inset-0 opacity-40" />

      {/* poster bracket frame */}
      <div className="pointer-events-none absolute inset-4 hidden sm:block">
        <span className="absolute left-0 top-0 h-16 w-16 border-l-2 border-t-2 border-scarlet/70" />
        <span className="absolute right-0 top-0 h-16 w-16 border-r-2 border-t-2 border-scarlet/70" />
        <span className="absolute bottom-16 left-0 h-16 w-16 border-b-2 border-l-2 border-scarlet/70" />
        <span className="absolute bottom-16 right-0 h-16 w-16 border-b-2 border-r-2 border-scarlet/70" />
        <span className="absolute inset-0 border border-hud/15" />
      </div>

      <div className="relative mx-auto flex w-full max-w-6xl flex-col items-center px-4 pb-28 text-center sm:px-6">
        <div className="astra-drift relative mt-4 h-56 w-56 sm:h-72 sm:w-72">
          <div className="absolute inset-[8%] rounded-full bg-scarlet/10 blur-3xl" />
          <Emblem className="relative h-full w-full drop-shadow-[0_0_60px_rgba(255,30,56,0.5)]" />
        </div>

        <h1 className="mt-8 font-sans text-4xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl">
          ASTRA
        </h1>
        <p className="mt-3 font-mono text-[11px] tracking-[0.5em] text-hud sm:text-sm">
          DEVELOPER TEAM
        </p>

        <p className="mt-6 font-sans text-lg font-medium tracking-tight text-foreground sm:text-2xl">
          BUILD <span className="text-scarlet text-glow-scarlet">/</span> LAUNCH{" "}
          <span className="text-scarlet text-glow-scarlet">/</span> BEYOND
        </p>
        <h2 className="mt-4 max-w-xl text-balance font-sans text-2xl font-semibold tracking-tight text-foreground sm:text-4xl">
          We turn ideas into digital products.
        </h2>
        <p className="mt-4 max-w-xl text-sm text-muted-foreground sm:text-base">
          ASTRA designs and builds websites, applications, AI-powered systems, automation tools
          and digital experiences around real requirements — from concept and interface design
          through development and deployment.
        </p>
        <p className="mt-5 font-mono text-[10px] uppercase tracking-[0.3em] text-hud sm:text-[11px]">
          Web · Software · AI/ML · Automation · UI/UX
        </p>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <button
            onClick={() => onNavigate("comms")}
            className="bg-scarlet px-7 py-3.5 font-mono text-[11px] uppercase tracking-[0.24em] text-primary-foreground transition-colors hover:bg-scarlet-deep"
            style={{
              clipPath:
                "polygon(12px 0,100% 0,100% calc(100% - 12px),calc(100% - 12px) 100%,0 100%,0 12px)",
            }}
          >
            Start a Project
          </button>
          <button
            onClick={() => onNavigate("projects")}
            className="hud-frame px-7 py-3.5 font-mono text-[11px] uppercase tracking-[0.24em] text-foreground transition-colors hover:text-rim"
          >
            Explore Our Work
          </button>
        </div>

        <p className="mt-10 font-mono text-[10px] uppercase tracking-[0.28em] text-hud">
          Institutional collaboration · Authorized project work
        </p>
      </div>

      <div className="absolute inset-x-0 bottom-0 overflow-hidden border-y border-hud/20 bg-deep/70 py-2 backdrop-blur">
        <div className="astra-marquee flex w-max gap-8 whitespace-nowrap font-mono text-[10px] tracking-[0.3em] text-hud sm:text-[11px]">
          {Array.from({ length: 8 }).map((_, i) => (
            <span key={i} className="flex items-center gap-8">
              <span className="astra-pulse inline-block h-1.5 w-1.5 rounded-full bg-scarlet" />
              {marqueeLine}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
