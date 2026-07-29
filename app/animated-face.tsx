export function AnimatedFace({ compact = false }: { compact?: boolean }) {
  return (
    <svg
      className={compact ? "animated-face compact-face" : "animated-face"}
      viewBox="0 0 640 430"
      role={compact ? undefined : "img"}
      aria-label={compact ? undefined : "Network Animal eyes look around, widen, and smile"}
      aria-hidden={compact ? true : undefined}
    >
      <g className="face-eyes">
        <g className="eye eye-left">
          <path className="eye-lid" d="M52 174C88 73 243 61 299 160c-38-42-82-56-126-39-45 18-69 56-79 91-18-10-32-23-42-38Z" />
          <ellipse className="eye-white" cx="180" cy="185" rx="86" ry="70" />
          <g className="pupil pupil-left">
            <circle cx="180" cy="186" r="42" />
            <circle className="eye-glint" cx="165" cy="170" r="10" />
          </g>
        </g>
        <g className="eye eye-right">
          <path className="eye-lid" d="M588 174C552 73 397 61 341 160c38-42 82-56 126-39 45 18 69 56 79 91 18-10 32-23 42-38Z" />
          <ellipse className="eye-white" cx="460" cy="185" rx="86" ry="70" />
          <g className="pupil pupil-right">
            <circle cx="460" cy="186" r="42" />
            <circle className="eye-glint" cx="445" cy="170" r="10" />
          </g>
        </g>
      </g>
      <g className="face-smile">
        <path d="M205 292Q320 340 435 292C425 378 376 414 320 414S215 378 205 292Z" />
        <path className="smile-light" d="M252 376c30-17 106-17 136 0-17 24-40 32-68 32s-51-8-68-32Z" />
      </g>
    </svg>
  );
}
