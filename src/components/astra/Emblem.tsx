export function Emblem({ className, spin = true }: { className?: string; spin?: boolean }) {
  return (
    <svg viewBox="0 0 240 240" className={className} role="img" aria-label="ASTRA emblem">
      <defs>
        <linearGradient id="astraA" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#FF2A42" />
          <stop offset="55%" stopColor="#E50914" />
          <stop offset="100%" stopColor="#8E0509" />
        </linearGradient>
        <linearGradient id="astraSteel" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="50%" stopColor="#DCE6F2" />
          <stop offset="100%" stopColor="#8FA3BC" />
        </linearGradient>
        <radialGradient id="astraCore" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#FF1E38" stopOpacity="0" />
        </radialGradient>
        <filter id="astraGlow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="3.2" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* core bloom */}
      <circle cx="120" cy="120" r="90" fill="url(#astraCore)" className="astra-breathe" />

      {/* red A wings */}
      <g filter="url(#astraGlow)">
        <path d="M120 46 L186 196 L156 196 L120 108 L84 196 L54 196 Z" fill="url(#astraA)" />
        <path
          d="M120 62 L176 190 L160 190 L120 96 L80 190 L64 190 Z"
          fill="none"
          stroke="#FF6072"
          strokeOpacity="0.45"
          strokeWidth="1"
        />
      </g>

      {/* central sword / four-point star */}
      <g fill="url(#astraSteel)">
        <path d="M120 14 L126 96 L120 210 L114 96 Z" />
        <path d="M78 66 L120 92 L162 66 L120 104 Z" opacity="0.95" />
        <path d="M120 128 L131 140 L120 176 L109 140 Z" />
      </g>
      <path
        d="M120 18 L122 96 L120 206 L118 96 Z"
        fill="#FFFFFF"
        className="astra-flicker"
      />

      {/* circuit traces */}
      <g stroke="#E6EEF9" strokeOpacity="0.75" strokeWidth="1.6" fill="none" strokeLinecap="round">
        <path d="M112 140 L96 156 L96 172" className="astra-trace" />
        <path d="M128 140 L144 156 L144 172" className="astra-trace astra-trace-2" />
        <path d="M112 152 L104 160 L104 182" className="astra-trace astra-trace-3" />
        <path d="M128 152 L136 160 L136 182" className="astra-trace astra-trace-2" />
      </g>
      <g fill="#FF3B50">
        <circle cx="96" cy="176" r="3.2" className="astra-pulse" />
        <circle cx="144" cy="176" r="3.2" className="astra-pulse" />
        <circle cx="104" cy="186" r="2.4" className="astra-pulse" />
        <circle cx="136" cy="186" r="2.4" className="astra-pulse" />
      </g>

      {/* orbital rings */}
      <g className={spin ? "astra-orbit" : undefined} style={{ transformOrigin: "120px 120px" }}>
        <ellipse
          cx="120"
          cy="118"
          rx="96"
          ry="34"
          fill="none"
          stroke="url(#astraSteel)"
          strokeOpacity="0.85"
          strokeWidth="2.4"
          transform="rotate(-14 120 118)"
        />
        <circle cx="212" cy="98" r="6" fill="#FFFFFF" className="astra-glowdot" />
      </g>
      <g className={spin ? "astra-orbit-rev" : undefined} style={{ transformOrigin: "120px 120px" }}>
        <ellipse
          cx="120"
          cy="120"
          rx="108"
          ry="52"
          fill="none"
          stroke="#38BDF8"
          strokeOpacity="0.35"
          strokeWidth="1"
          strokeDasharray="6 10"
          transform="rotate(22 120 120)"
        />
      </g>
    </svg>
  );
}
