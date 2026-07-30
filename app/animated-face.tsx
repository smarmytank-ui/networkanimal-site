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
          <path d="M62 158C105 63 235 55 310 155C312 162 309 170 300 174C230 116 150 97 78 156C72 162 66 162 62 158Z" />
          <path d="M578 158C535 63 405 55 330 155C328 162 331 170 340 174C410 116 490 97 562 156C568 162 574 162 578 158Z" />
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
        <path className="na-smile" pathLength="1" d="M228 381L253 356Q326 414 416 369" />
      </g>
    </svg>
  );
}
