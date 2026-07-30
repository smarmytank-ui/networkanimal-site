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
          <path d="M70 150C110 62 239 56 306 150C246 111 155 94 82 144Z" />
          <path d="M570 150C530 62 401 56 334 150C394 111 485 94 558 144Z" />
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
        <path className="na-smile" pathLength="1" d="M228 367L253 342Q326 402 416 355" />
      </g>
    </svg>
  );
}
