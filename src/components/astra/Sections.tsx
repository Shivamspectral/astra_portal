import { useState } from "react";
import type React from "react";
import { Mail, Instagram, Linkedin, Phone, Send } from "lucide-react";
import { toast } from "sonner";
import { capabilities, crew, directives, process, businessServices, institutionServices, proofOfWork, faqs } from "./data";
import { ViewShell, PageHeader } from "./ViewShell";
import { cn } from "@/lib/utils";

export function About() {
  const [mode, setMode] = useState<"astra-sanskrit" | "astra-latin">("astra-sanskrit");

  return (
    <div className="mt-20 border-t border-hud/15 pt-20">
      <p className="font-mono text-[10px] tracking-[0.4em] text-scarlet">01 — ABOUT ASTRA</p>
      <h2 className="mt-3 font-sans text-3xl font-bold tracking-tight text-foreground sm:text-5xl">
        Technology is our instrument. Exploration is our direction.
      </h2>
      <p className="mt-5 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
        ASTRA is a technology and development team focused on turning ideas, requirements and
        operational problems into practical digital solutions. From websites and management
        platforms to AI-powered systems, automation tools and custom software, we approach every
        project around the problem that needs to be solved — not around a predefined template.
      </p>

      <div className="mt-10 flex items-center gap-3">
        <p className="font-mono text-[10px] tracking-[0.4em] text-hud">THE ORIGIN OF ASTRA</p>
      </div>

      <div className="mt-4 inline-flex border border-hud/25">
        <button
          onClick={() => setMode("astra-sanskrit")}
          className={cn(
            "px-5 py-2.5 font-mono text-[10px] uppercase tracking-[0.2em] transition-colors",
            mode === "astra-sanskrit" ? "bg-scarlet text-primary-foreground" : "text-hud",
          )}
        >
          <span className="font-devanagari">अस्त्र</span> — The Instrument
        </button>
        <button
          onClick={() => setMode("astra-latin")}
          className={cn(
            "px-5 py-2.5 font-mono text-[10px] uppercase tracking-[0.2em] transition-colors",
            mode === "astra-latin" ? "bg-scarlet text-primary-foreground" : "text-hud",
          )}
        >
          Astra — The Stars
        </button>
      </div>

      <div className="mt-6 grid gap-5 lg:grid-cols-2">
        <div className="hud-frame hud-corners relative overflow-hidden p-7 sm:p-10">
          {mode === "astra-sanskrit" ? (
            <>
              <div className="astra-sweep astra-sweep-scarlet" aria-hidden="true" />
              <p className="font-devanagari text-4xl text-scarlet text-glow-scarlet sm:text-5xl">
                अस्त्र
              </p>
              <p className="mt-4 font-mono text-[10px] tracking-[0.3em] text-hud">
                THE INSTRUMENT
              </p>
              <p className="mt-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
                In its original Sanskrit context, अस्त्र represents an instrument or weapon —
                something designed with purpose, precision and direction. For ASTRA, it represents
                technology as an instrument: a precise tool used to solve problems, build systems
                and turn ideas into reality.
              </p>
            </>
          ) : (
            <>
              <div className="astra-sweep astra-sweep-rim" aria-hidden="true" />
              <p className="font-sans text-4xl font-semibold tracking-tight text-rim sm:text-5xl">
                Astra
              </p>
              <p className="mt-4 font-mono text-[10px] tracking-[0.3em] text-hud">
                THE STARS
              </p>
              <p className="mt-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
                In its celestial sense, Astra evokes stars, exploration and the pursuit of what
                lies beyond the familiar. It represents our approach to technology — explore,
                experiment, engineer and move beyond conventional boundaries.
              </p>
            </>
          )}
          <p className="mt-8 font-mono text-[10px] tracking-[0.35em] text-hud">
            PRECISION IN EXECUTION · AMBITION IN DIRECTION
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          {directives.map((d) => (
            <div key={d.index} className="hud-frame p-6">
              <span className="font-mono text-xs text-scarlet">{d.index}</span>
              <h3 className="mt-3 font-sans text-lg font-semibold tracking-tight text-foreground">
                {d.title}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">{d.body}</p>
            </div>
          ))}
        </div>
      </div>

      <p className="mt-8 font-mono text-[10px] uppercase tracking-[0.28em] text-hud">
        Institutional collaboration · Authorized project work
      </p>

      {/* proof of work */}
      <div className="mt-20 border-t border-hud/15 pt-16">
        <p className="font-mono text-[10px] tracking-[0.4em] text-scarlet">BUILT, NOT JUST PLANNED</p>
        <div className="mt-8 grid grid-cols-2 gap-px border border-hud/20 bg-hud/20 sm:grid-cols-4">
          {proofOfWork.map((s) => (
            <div key={s.label} className="bg-deep p-6 text-center">
              <p className="font-sans text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                {s.value}
              </p>
              <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.2em] text-hud">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ */}
      <div className="mt-20 border-t border-hud/15 pt-16">
        <p className="font-mono text-[10px] tracking-[0.4em] text-scarlet">FAQ</p>
        <h3 className="mt-3 font-sans text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
          Frequently asked questions
        </h3>
        <div className="mt-8 grid gap-px border border-hud/20 bg-hud/20 sm:grid-cols-2">
          {faqs.map((f) => (
            <div key={f.q} className="bg-deep p-6">
              <h4 className="font-sans text-sm font-semibold tracking-tight text-foreground">
                {f.q}
              </h4>
              <p className="mt-2 text-sm text-muted-foreground">{f.a}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function Capabilities() {
  const [active, setActive] = useState(0);

  return (
    <ViewShell>
      <div className="nebula pointer-events-none absolute inset-0 opacity-60" />
      <div className="relative">
        <PageHeader
          phase="03 — SERVICES"
          title="What we build"
          lede="Digital products engineered around your requirements."
        />

        <div className="mt-10 grid gap-px border border-hud/20 bg-hud/20 sm:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((c, i) => (
            <button
              key={c.index}
              onMouseEnter={() => setActive(i)}
              onFocus={() => setActive(i)}
              className={cn(
                "group relative bg-deep p-7 text-left transition-colors duration-300",
                active === i ? "bg-void" : "hover:bg-void",
              )}
            >
              <span className="font-mono text-xs text-scarlet">{c.index}</span>
              <h3 className="mt-3 font-sans text-lg font-semibold tracking-tight text-foreground">
                {c.title}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">{c.body}</p>
              <span
                className={cn(
                  "absolute inset-x-0 bottom-0 h-px transition-opacity",
                  active === i ? "bg-scarlet opacity-100" : "opacity-0",
                )}
              />
            </button>
          ))}
        </div>

        {/* how we work — process timeline */}
        <div className="mt-20 border-t border-hud/15 pt-16">
          <p className="font-mono text-[10px] tracking-[0.4em] text-scarlet">HOW WE WORK</p>
          <h3 className="mt-3 font-sans text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            From requirement to real product.
          </h3>

          <div className="mt-10 grid gap-px border border-hud/20 bg-hud/20 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((p) => (
              <div key={p.index} className="bg-deep p-6">
                <span className="font-mono text-xs text-scarlet">{p.index}</span>
                <h4 className="mt-3 font-sans text-base font-semibold tracking-tight text-foreground">
                  {p.title}
                </h4>
                <p className="mt-2 text-sm text-muted-foreground">{p.body}</p>
              </div>
            ))}
          </div>
        </div>

        {/* for businesses */}
        <div className="mt-20 border-t border-hud/15 pt-16">
          <p className="font-mono text-[10px] tracking-[0.4em] text-scarlet">FOR BUSINESSES</p>
          <h3 className="mt-3 font-sans text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            You bring the problem. We build the digital solution.
          </h3>
          <p className="mt-4 max-w-2xl text-sm text-muted-foreground sm:text-base">
            Whether you need a professional website, an internal management system, an
            AI-powered workflow or a custom digital product, ASTRA works around your requirements
            to design and build the right solution.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {businessServices.map((s) => (
              <span
                key={s}
                className="border border-hud/25 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.2em] text-hud"
              >
                {s}
              </span>
            ))}
          </div>
        </div>

        {/* for institutions */}
        <div className="mt-20 border-t border-hud/15 pt-16">
          <p className="font-mono text-[10px] tracking-[0.4em] text-scarlet">FOR INSTITUTIONS</p>
          <h3 className="mt-3 font-sans text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            Digital systems for real-world operations.
          </h3>
          <p className="mt-4 max-w-2xl text-sm text-muted-foreground sm:text-base">
            ASTRA works on technology initiatives involving digital platforms, institutional
            workflows, events, management systems and practical software solutions.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {institutionServices.map((s) => (
              <span
                key={s}
                className="border border-hud/25 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.2em] text-hud"
              >
                {s}
              </span>
            ))}
          </div>
          <p className="mt-6 font-mono text-[10px] uppercase tracking-[0.28em] text-hud">
            Institutional collaboration · Authorized project work
          </p>
        </div>
      </div>
    </ViewShell>
  );
}

// Shared ASTRA channels — these belong to the collective, not to any single member.
const collective = [
  { icon: Instagram, label: "@cosmiicastraa", href: "https://www.instagram.com/cosmiicastraa/" },
  {
    icon: Linkedin,
    label: "ASTRA on LinkedIn",
    href: "https://www.linkedin.com/in/astra-cosmic-408a72435",
  },
  { icon: Phone, label: "+91 88888 18999", href: "tel:+918888818999" },
  { icon: Phone, label: "+91 92703 06755", href: "tel:+919270306755" },
];

export function Crew({ onContact }: { onContact?: () => void }) {
  const [active, setActive] = useState(0);
  const current = crew[active] ?? crew[0]!;

  return (
    <ViewShell>
      <PageHeader
        phase="04 — THE CREW"
        title="Five builders. One direction."
        lede="Different disciplines, one team — development, design and problem-solving stay connected from the first requirement to the final deployment."
      />

      <div className="mt-12 grid gap-px overflow-hidden border border-hud/20 bg-hud/20 lg:grid-cols-[0.95fr_1.05fr]">
        {/* directory */}
        <div className="bg-void">
          <div className="flex items-center justify-between border-b border-hud/20 px-6 py-4 font-mono text-[11px] uppercase tracking-[0.28em] text-hud">
            <span>Directory</span>
            <span>{crew.length.toString().padStart(2, "0")} members</span>
          </div>
          <ul>
            {crew.map((m, i) => {
              const isActive = i === active;
              return (
                <li key={m.email}>
                  <button
                    onClick={() => setActive(i)}
                    className={cn(
                      "group flex w-full items-center gap-5 border-b border-hud/15 px-6 py-5 text-left transition-colors last:border-b-0",
                      isActive ? "bg-deep" : "hover:bg-deep/60",
                    )}
                  >
                    <span
                      className={cn(
                        "flex h-11 w-11 shrink-0 items-center justify-center rounded-full border font-mono text-xs tracking-widest transition-colors",
                        isActive
                          ? "border-scarlet text-scarlet"
                          : "border-hud/30 text-hud group-hover:text-foreground",
                      )}
                    >
                      {m.avatar}
                    </span>
                    <span className="flex-1 min-w-0">
                      <span
                        className={cn(
                          "block truncate font-sans text-base font-medium leading-tight tracking-tight transition-colors sm:text-lg",
                          isActive ? "text-foreground" : "text-hud group-hover:text-foreground",
                        )}
                      >
                        {m.name}
                      </span>
                    </span>
                    <span className="font-mono text-xs text-hud">
                      {(i + 1).toString().padStart(2, "0")}
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>

        {/* profile panel */}
        <div className="relative flex min-h-[420px] flex-col bg-void">
          <div className="grid-lines pointer-events-none absolute inset-0 opacity-20" />
          <div key={current.email} className="astra-view-in relative flex flex-1 flex-col p-8 sm:p-12">
            <div className="flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.28em] text-hud">
              <span>Member · {(active + 1).toString().padStart(2, "0")}</span>
              <span className="text-scarlet">{current.role}</span>
            </div>

            <div className="mt-auto pt-16">
              <div className="font-mono text-[6rem] font-medium leading-none tracking-widest text-deep sm:text-[8rem]">
                {current.avatar}
              </div>
              <h3 className="mt-4 text-balance font-sans text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                {current.name}
              </h3>
              <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.2em] text-hud">
                {current.role}
              </p>

              <dl className="mt-8 divide-y divide-hud/15 border-t border-hud/15">
                <div className="flex items-center justify-between py-4">
                  <dt className="font-mono text-[11px] uppercase tracking-[0.24em] text-hud">
                    Contact
                  </dt>
                  <dd>
                    <button
                      onClick={() => onContact?.()}
                      className="font-mono text-[11px] uppercase tracking-[0.2em] text-scarlet transition-colors hover:text-rim"
                    >
                      Contact ASTRA
                    </button>
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>

      {/* collective channels */}
      <div className="mt-10">
        <div className="mb-5 font-mono text-[11px] uppercase tracking-[0.28em] text-hud">
          ASTRA collective channels
        </div>
        <ul className="grid gap-px overflow-hidden border border-hud/20 bg-hud/20 sm:grid-cols-2 lg:grid-cols-4">
          {collective.map((c, i) => (
            <li key={i} className="bg-void">
              <a
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel={c.href.startsWith("http") ? "noreferrer" : undefined}
                className="group flex flex-col gap-3 p-6 transition-colors hover:bg-deep"
              >
                <span className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.24em] text-hud">
                  <c.icon className="h-3.5 w-3.5 text-scarlet" />
                </span>
                <span className="text-sm text-foreground transition-colors group-hover:text-scarlet">
                  {c.label}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </ViewShell>
  );
}

const ASTRA_CONTACT_EMAIL = "contact.astra@gmail.com";

const channels = [
  { icon: Mail, label: ASTRA_CONTACT_EMAIL, href: `mailto:${ASTRA_CONTACT_EMAIL}` },
  { icon: Instagram, label: "@cosmiicastraa", href: "https://www.instagram.com/cosmiicastraa/" },
  {
    icon: Linkedin,
    label: "ASTRA on LinkedIn",
    href: "https://www.linkedin.com/in/astra-cosmic-408a72435",
  },
  { icon: Phone, label: "+91 88888 18999", href: "tel:+918888818999" },
];

const needOptions = [
  "Website",
  "Web Application",
  "Custom Software",
  "AI / ML",
  "Automation",
  "UI / UX",
  "Management System",
  "Other",
];

type CommsStatus = "idle" | "submitting" | "success" | "error";

export function Comms() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    organization: "",
    need: needOptions[0],
    message: "",
  });
  const [status, setStatus] = useState<CommsStatus>("idle");

  const submit = (e: React.FormEvent): void => {
    e.preventDefault();
    const name = form.name.trim();
    const email = form.email.trim();
    const message = form.message.trim();
    if (!name || name.length > 100) {
      toast.error("Please enter a valid name.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 255) {
      toast.error("Please enter a valid email address.");
      return;
    }
    if (!message || message.length > 1000) {
      toast.error("Please add a short description of your project (max 1000 characters).");
      return;
    }

    setStatus("submitting");

    // NOTE: replace with a real backend/API endpoint (validation, spam
    // protection, email notification and/or database write) before launch.
    // Falling back to mailto keeps the form usable until that endpoint exists.
    window.setTimeout(() => {
      try {
        const body = `Name: ${name}\nEmail: ${email}\nOrganization: ${
          form.organization || "—"
        }\nWhat do you need: ${form.need}\n\n${message}`;
        window.location.href = `mailto:${ASTRA_CONTACT_EMAIL}?subject=${encodeURIComponent(
          `New project inquiry — ${form.need}`,
        )}&body=${encodeURIComponent(body)}`;
        setStatus("success");
        toast.success("Your project details are ready to send.");
      } catch {
        setStatus("error");
        toast.error("Something went wrong. Please try again or email us directly.");
      }
    }, 400);
  };

  return (
    <ViewShell>
      <PageHeader phase="05 — CONTACT" title="Let's build something." />
      <p className="mt-4 max-w-xl text-sm text-muted-foreground sm:text-base">
        Have a product idea, operational problem or digital requirement? Tell us what you're
        trying to build. We'll understand the requirement and determine the right way forward.
      </p>
      <p className="mt-4 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.28em] text-rim">
        <span className="astra-pulse inline-block h-1.5 w-1.5 rounded-full bg-rim" />
        Currently open for new projects
      </p>

      <div className="mt-10 grid gap-5 lg:grid-cols-[1.2fr_1fr]">
        <form onSubmit={submit} className="hud-frame hud-corners grid gap-4 p-6 sm:p-8">
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="grid gap-2">
              <span className="font-mono text-[10px] tracking-[0.25em] text-hud">NAME</span>
              <input
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                maxLength={100}
                className="border border-hud/30 bg-void/60 px-3 py-2.5 text-sm text-foreground outline-none focus:border-scarlet"
              />
            </label>
            <label className="grid gap-2">
              <span className="font-mono text-[10px] tracking-[0.25em] text-hud">EMAIL</span>
              <input
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                maxLength={255}
                className="border border-hud/30 bg-void/60 px-3 py-2.5 text-sm text-foreground outline-none focus:border-scarlet"
              />
            </label>
          </div>
          <label className="grid gap-2">
            <span className="font-mono text-[10px] tracking-[0.25em] text-hud">
              ORGANIZATION / COMPANY (OPTIONAL)
            </span>
            <input
              value={form.organization}
              onChange={(e) => setForm({ ...form, organization: e.target.value })}
              maxLength={150}
              className="border border-hud/30 bg-void/60 px-3 py-2.5 text-sm text-foreground outline-none focus:border-scarlet"
            />
          </label>
          <label className="grid gap-2">
            <span className="font-mono text-[10px] tracking-[0.25em] text-hud">
              WHAT DO YOU NEED?
            </span>
            <select
              value={form.need}
              onChange={(e) => setForm({ ...form, need: e.target.value })}
              className="border border-hud/30 bg-void/60 px-3 py-2.5 text-sm text-foreground outline-none focus:border-scarlet"
            >
              {needOptions.map((n) => (
                <option key={n} value={n} className="bg-deep">
                  {n}
                </option>
              ))}
            </select>
          </label>
          <label className="grid gap-2">
            <span className="font-mono text-[10px] tracking-[0.25em] text-hud">
              PROJECT DETAILS
            </span>
            <textarea
              required
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              maxLength={1000}
              rows={5}
              className="border border-hud/30 bg-void/60 px-3 py-2.5 text-sm text-foreground outline-none focus:border-scarlet"
            />
          </label>
          <button
            type="submit"
            disabled={status === "submitting"}
            className="flex items-center justify-center gap-2 bg-scarlet px-6 py-3 font-mono text-[11px] uppercase tracking-[0.24em] text-primary-foreground transition-colors hover:bg-scarlet-deep disabled:opacity-60"
          >
            <Send className="h-4 w-4" />
            {status === "submitting" ? "Sending..." : "Start a Project"}
          </button>
          {status === "error" && (
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-scarlet">
              Something went wrong — please email us directly at {ASTRA_CONTACT_EMAIL}.
            </p>
          )}
        </form>

        <div className="hud-frame grid content-start gap-3 p-6 sm:p-8">
          <p className="font-mono text-[10px] tracking-[0.3em] text-hud">DIRECT CHANNELS</p>
          {channels.map((c) => (
            <a
              key={c.label}
              href={c.href}
              target={c.href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              className="flex items-center gap-3 border border-hud/25 px-4 py-3 text-sm text-hud transition-colors hover:border-scarlet hover:text-foreground"
            >
              <c.icon className="h-4 w-4 shrink-0 text-scarlet" />
              <span className="truncate">{c.label}</span>
            </a>
          ))}
        </div>
      </div>
    </ViewShell>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-hud/20 py-10">
      <div className="mx-auto grid max-w-7xl gap-3 px-4 text-center sm:px-6">
        <p className="font-sans text-sm font-semibold tracking-tight text-foreground">
          BUILD <span className="text-scarlet">/</span> LAUNCH <span className="text-scarlet">/</span>{" "}
          BEYOND
        </p>
        <p className="font-mono text-[10px] tracking-[0.25em] text-hud">
          © 2026 ASTRA. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
