/** Fixed mission-frame that surrounds the entire experience, poster-style. */
export function HudOverlay() {
  return (
    <div className="pointer-events-none fixed inset-0 z-40" aria-hidden="true">
      <div className="absolute inset-2 border border-white/25 sm:inset-4" />

      {/* red corner decorations */}
      <span className="absolute left-2 top-2 h-14 w-14 border-l-[3px] border-t-[3px] border-scarlet sm:left-4 sm:top-4 sm:h-20 sm:w-20" />
      <span className="absolute right-2 top-2 h-14 w-14 border-r-[3px] border-t-[3px] border-scarlet sm:right-4 sm:top-4 sm:h-20 sm:w-20" />
      <span className="absolute bottom-2 left-2 h-14 w-14 border-b-[3px] border-l-[3px] border-scarlet sm:bottom-4 sm:left-4 sm:h-20 sm:w-20" />
      <span className="absolute bottom-2 right-2 h-14 w-14 border-b-[3px] border-r-[3px] border-scarlet sm:bottom-4 sm:right-4 sm:h-20 sm:w-20" />

      {/* corner notch marks */}
      <span className="absolute left-2 top-20 h-10 w-[3px] bg-scarlet/70 sm:left-4 sm:top-28" />
      <span className="absolute bottom-20 right-2 h-10 w-[3px] bg-scarlet/70 sm:bottom-28 sm:right-4" />

      {/* side telemetry rails */}
      <span className="absolute left-6 top-1/2 hidden -translate-y-1/2 -rotate-90 font-mono text-[9px] tracking-[0.5em] text-white/35 lg:block">
        ASTRA / ORBITAL INTERFACE / V2
      </span>
      <span className="absolute right-6 top-1/2 hidden -translate-y-1/2 rotate-90 font-mono text-[9px] tracking-[0.5em] text-white/35 lg:block">
        BUILD / LAUNCH / BEYOND
      </span>
    </div>
  );
}
