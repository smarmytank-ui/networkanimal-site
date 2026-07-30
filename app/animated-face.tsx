import "./face-motion.css";

export function AnimatedFace({ compact = false }: { compact?: boolean }) {
  return (
    <svg
      className={compact ? "animated-face compact-face" : "animated-face na-opener"}
      viewBox="0 0 640 460"
      role={compact ? undefined : "img"}
      aria-label={compact ? undefined : "Network Animal eyes blink, look around, open wide, and smile"}
      aria-hidden={compact ? true : undefined}
    >
      <g className="na-face">
        <g className="na-eyebrows" aria-hidden="true">
          <path d="M62 81C105 10 235 6 310 78C312 86 309 92 300 96C230 55 150 42 78 82C72 88 66 86 62 81Z" />
          <path d="M578 81C535 10 405 6 330 78C328 86 331 92 340 96C410 55 490 42 562 82C568 88 574 86 578 81Z" />
        </g>
        <g className="na-eye na-eye-left">
          <ellipse className="na-eye-white" cx="205" cy="213" rx="64" ry="106" />
          <ellipse className="na-eye-outline" cx="205" cy="213" rx="64" ry="106" />
          <g className="na-pupil">
            <ellipse cx="205" cy="224" rx="27" ry="46" />
            <circle className="na-glint" cx="196" cy="205" r="8" />
          </g>
        </g>
        <g className="na-eye na-eye-right">
          <ellipse className="na-eye-white" cx="435" cy="213" rx="64" ry="106" />
          <ellipse className="na-eye-outline" cx="435" cy="213" rx="64" ry="106" />
          <g className="na-pupil">
            <ellipse cx="435" cy="224" rx="27" ry="46" />
            <circle className="na-glint" cx="426" cy="205" r="8" />
          </g>
        </g>
        <g className="na-smile" aria-hidden="true">
          <path className="na-smile-mouth" d="M210 349Q320 382 430 349Q411 430 320 438Q229 430 210 349Z" />
          <path className="na-smile-teeth" d="M232 365Q320 389 408 365Q387 405 320 412Q253 405 232 365Z" />
          <path className="na-smile-line" d="M238 374Q320 395 402 374" />
        </g>
      </g>
    </svg>
  );
}
