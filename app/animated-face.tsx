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
          <path transform="translate(25 -18)" d="M52 174C88 73 243 61 299 160c-38-42-82-56-126-39-45 18-69 56-79 91-18-10-32-23-42-38Z" />
          <path transform="translate(-25 -18)" d="M588 174C552 73 397 61 341 160c38-42 82-56 126-39 45 18 69 56 79 91 18-10 32-23 42-38Z" />
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
        <path className="na-smile" pathLength="1" d="M218 326Q320 407 422 326" />
      </g>
    </svg>
  );
}
