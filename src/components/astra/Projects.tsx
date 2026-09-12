import { useMemo, useState } from "react";
import { X, ArrowUpRight, ScanFace, TerminalSquare } from "lucide-react";
import { projects, type Project } from "./data";
import { ViewShell } from "./ViewShell";
import { cn } from "@/lib/utils";

const filters = ["All", "Web", "Software", "AI", "Automation", "UI/UX", "Portfolio"];

function TerminalDemo() {
  const [log, setLog] = useState<string[]>(["> Assistant core online. Awaiting command."]);
  const [value, setValue] = useState("");

  const respond = (cmd: string) => {
    const c = cmd.trim().toLowerCase();
    if (!c) return;
    const reply =
      c === "help"
        ? "Available: status, mode, clear"
        : c === "status"
          ? "Systems nominal. Interface concept — simulated response."
          : c === "mode"
            ? "Assistive mode engaged: calm, structured, task-focused responses."
            : c === "clear"
              ? "__clear"
              : `Unknown command "${cmd}". Type help.`;
    if (reply === "__clear") {
      setLog(["> Assistant core online. Awaiting command."]);
      return;
    }
    setLog((l) => [...l.slice(-8), `> ${cmd}`, reply]);
  };

  return (
    <div className="hud-frame p-4">
      <p className="font-mono text-[10px] tracking-[0.3em] text-hud">SIMULATED HUD TERMINAL</p>
      <div className="mt-3 h-40 overflow-y-auto bg-void/70 p-3 font-mono text-[11px] leading-relaxed text-rim">
        {log.map((l, i) => (
          <div key={i} className={l.startsWith("> ") ? "text-hud" : "text-rim"}>
            {l}
          </div>
        ))}
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          respond(value);
          setValue("");
        }}
        className="mt-3 flex gap-2"
      >
        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          maxLength={60}
          placeholder="type a directive (help)"
          className="min-w-0 flex-1 border border-hud/30 bg-void/70 px-3 py-2 font-mono text-[11px] text-foreground outline-none focus:border-scarlet"
        />
        <button className="shrink-0 bg-scarlet px-3 py-2 font-mono text-[10px] uppercase tracking-[0.2em] text-primary-foreground">
          Send
        </button>
      </form>
    </div>
  );
}

function ScanDemo() {
  const [scanning, setScanning] = useState(false);
  const [done, setDone] = useState(false);

  const run = () => {
    setDone(false);
    setScanning(true);
    setTimeout(() => {
      setScanning(false);
      setDone(true);
    }, 2200);
  };

  return (
    <div className="hud-frame p-4">
      <p className="font-mono text-[10px] tracking-[0.3em] text-hud">FACE SCAN SIMULATION</p>
      <div className="hud-corners relative mt-3 grid h-40 place-items-center overflow-hidden bg-void/70">
        <ScanFace
          className={cn("h-16 w-16 transition-colors", done ? "text-rim" : "text-hud/50")}
        />
        {scanning && (
          <div className="astra-scanline absolute inset-x-0 top-0 h-10 bg-gradient-to-b from-transparent via-scarlet/40 to-transparent" />
        )}
        <span className="absolute bottom-2 font-mono text-[10px] tracking-[0.25em] text-hud">
          {scanning ? "SCANNING..." : done ? "ATTENDANCE MARKED (SIMULATED)" : "STANDBY"}
        </span>
      </div>
      <button
        onClick={run}
        className="mt-3 w-full bg-scarlet px-3 py-2 font-mono text-[10px] uppercase tracking-[0.2em] text-primary-foreground"
      >
        Run scan
      </button>
    </div>
  );
}

export function Projects() {
  const [filter, setFilter] = useState("All");
  const [openProject, setOpenProject] = useState<Project | null>(null);

  const visible = useMemo(
    () => (filter === "All" ? projects : projects.filter((p) => p.tags.includes(filter))),
    [filter],
  );

  return (
    <ViewShell>
      <div className="relative">
        <p className="font-mono text-[10px] tracking-[0.4em] text-scarlet">02 — SELECTED WORK</p>
        <h2 className="mt-3 font-display text-3xl font-bold tracking-[0.14em] text-foreground sm:text-5xl">
          SELECTED WORK
        </h2>
        <p className="mt-3 max-w-xl text-sm text-muted-foreground sm:text-base">
          Built for real requirements.
        </p>

        <div className="mt-8 flex flex-wrap gap-2">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={cn(
                "border px-4 py-2 font-mono text-[10px] uppercase tracking-[0.2em] transition-colors",
                filter === f
                  ? "border-scarlet bg-scarlet/15 text-scarlet"
                  : "border-hud/25 text-hud hover:text-foreground",
              )}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {visible.map((p) => (
            <button
              key={p.id}
              onClick={() => setOpenProject(p)}
              className="hud-frame hud-corners group flex flex-col gap-4 p-6 text-left transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="flex items-start justify-between gap-4">
                <span className="font-mono text-xs text-scarlet">{p.index}</span>
                <ArrowUpRight className="h-4 w-4 shrink-0 text-hud transition-colors group-hover:text-rim" />
              </div>
              <h3 className="font-display text-lg tracking-[0.08em] text-foreground">{p.title}</h3>
              <p className="text-sm text-muted-foreground">{p.summary}</p>
              <div className="mt-auto flex flex-wrap items-center gap-2 pt-2">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="border border-hud/25 px-2 py-1 font-mono text-[9px] uppercase tracking-[0.2em] text-hud"
                  >
                    {t}
                  </span>
                ))}
                {p.demo && (
                  <span className="ml-auto flex items-center gap-1 font-mono text-[9px] tracking-[0.2em] text-rim">
                    <TerminalSquare className="h-3 w-3" /> DEMO
                  </span>
                )}
              </div>
            </button>
          ))}
        </div>
      </div>

      {openProject && (
        <div
          className="fixed inset-0 z-[60] flex items-end justify-center bg-void/85 p-0 backdrop-blur-sm sm:items-center sm:p-6"
          onClick={() => setOpenProject(null)}
        >
          <div
            className="hud-frame hud-corners max-h-[90svh] w-full max-w-2xl overflow-y-auto p-6 sm:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-4">
              <div className="min-w-0">
                <p className="font-mono text-[10px] tracking-[0.3em] text-scarlet">
                  PROJECT {openProject.index} // {openProject.status}
                </p>
                <h3 className="mt-2 font-display text-2xl tracking-[0.08em] text-foreground">
                  {openProject.title}
                </h3>
              </div>
              <button
                onClick={() => setOpenProject(null)}
                aria-label="Close project"
                className="shrink-0 border border-hud/30 p-2 text-hud hover:text-foreground"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
              {openProject.detail}
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {openProject.tags.map((t) => (
                <span
                  key={t}
                  className="border border-hud/25 px-2 py-1 font-mono text-[9px] uppercase tracking-[0.2em] text-hud"
                >
                  {t}
                </span>
              ))}
            </div>

            {openProject.demo === "terminal" && (
              <div className="mt-6">
                <TerminalDemo />
              </div>
            )}
            {openProject.demo === "scan" && (
              <div className="mt-6">
                <ScanDemo />
              </div>
            )}
          </div>
        </div>
      )}
    </ViewShell>
  );
}
