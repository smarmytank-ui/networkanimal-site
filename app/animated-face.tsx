import "./face-motion.css";

export function AnimatedFace({ compact = false }: { compact?: boolean }) {
  return (
    <svg
      className={compact ? "animated-face compact-face" : "animated-face na-opener"}
      viewBox="0 0 640 430"
      role={compact ? undefined : "img"}
      aria-label={compact ? undefined : "Network Animal eyes blink, look around, open wide, and smile"}
      aria-hidden={compact ? true : undefined}
    >
      <g className="na-face">
        <g className="na-eyebrows" aria-hidden="true">
          <path d="M70 143C128 55 252 63 302 145C246 107 164 99 70 143Z" />
          <path d="M570 143C512 55 388 63 338 145C394 107 476 99 570 143Z" />
        </g>
        <g className="na-eye na-eye-left">
          <ellipse className="na-eye-white" cx="190" cy="203" rx="91" ry="88" />
          <ellipse className="na-eye-outline" cx="190" cy="203" rx="91" ry="88" />
          <g className="na-pupil">
            <ellipse cx="190" cy="211" rx="34" ry="43" />
            <circle className="na-glint" cx="178" cy="194" r="9" />
          </g>
        </g>
        <g className="na-eye na-eye-right">
          <ellipse className="na-eye-white" cx="450" cy="203" rx="91" ry="88" />
          <ellipse className="na-eye-outline" cx="450" cy="203" rx="91" ry="88" />
          <g className="na-pupil">
            <ellipse cx="450" cy="211" rx="34" ry="43" />
            <circle className="na-glint" cx="438" cy="194" r="9" />
          </g>
        </g>
        <path className="na-smile" pathLength="1" d="M218 309Q320 395 422 309" />
      </g>
    </svg>
  );
}
