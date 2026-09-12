import { useEffect, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "@/components/ui/sonner";
import { Nav } from "@/components/astra/Nav";
import { Hero } from "@/components/astra/Hero";
import { Projects } from "@/components/astra/Projects";
import { About, Capabilities, Comms, Crew, Footer } from "@/components/astra/Sections";
import type { SectorId } from "@/components/astra/data";

const title = "ASTRA — Digital Technology & Development Team";
const description =
  "ASTRA designs and develops websites, applications, AI-powered systems, automation tools and digital solutions around real-world requirements.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  const [view, setView] = useState<SectorId>("mission");

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [view]);

  return (
    <main className="relative min-h-screen bg-void text-foreground">
      <Nav active={view} onNavigate={setView} />

      <div key={view} className={view === "mission" ? undefined : "astra-view-in"}>
        {view === "mission" && (
          <>
            <Hero onNavigate={setView} />
            <About />
          </>
        )}
        {view === "projects" && <Projects />}
        {view === "capabilities" && <Capabilities />}
        {view === "crew" && <Crew onContact={() => setView("comms")} />}
        {view === "comms" && <Comms />}
      </div>

      <Footer />
      <Toaster />
    </main>
  );
}
