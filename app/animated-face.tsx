import "./face-motion.css";

export function AnimatedFace({ compact = false }: { compact?: boolean }) {
  return (
    <svg
      className={compact ? "animated-face compact-face" : "animated-face na-opener"}
      viewBox="0 0 640 460"
      role={compact ? undefined : "img"}
      aria-label={compact ? undefined : "Network Animal eyes blink, look around, open wide, smile, and gather connected Dots"}
      aria-hidden={compact ? true : undefined}
    >
      {!compact && (
        <g className="na-dot-field" aria-hidden="true">
          <path className="na-dot-link link-one" d="M90 118L160 170" />
          <path className="na-dot-link link-two" d="M480 162L555 105" />
          <path className="na-dot-link link-three" d="M105 335L177 310" />
          <path className="na-dot-link link-four" d="M466 320L550 350" />
          <circle className="na-dot dot-one" cx="82" cy="110" r="14" />
          <circle className="na-dot dot-two" cx="152" cy="168" r="10" />
          <circle className="na-dot dot-three" cx="554" cy="98" r="13" />
          <circle className="na-dot dot-four" cx="490" cy="160" r="9" />
          <circle className="na-dot dot-five" cx="92" cy="342" r="12" />
          <circle className="na-dot dot-six" cx="166" cy="316" r="8" />
          <circle className="na-dot dot-seven" cx="555" cy="354" r="14" />
          <circle className="na-dot dot-eight" cx="478" cy="322" r="9" />
          <circle className="na-dot dot-nine" cx="52" cy="232" r="8" />
          <circle className="na-dot dot-ten" cx="590" cy="232" r="8" />
        </g>
      )}
      <g className="na-face-scale">
        <g className="na-face">
          <g className="na-eyebrows" aria-hidden="true">
            <path d="M62 81C105 10 235 6 310 78C312 86 309 92 300 96C230 55 150 42 78 82C72 88 66 86 62 81Z" />
            <path d="M578 81C535 10 405 6 330 78C328 86 331 92 340 96C410 55 490 42 562 82C568 88 574 86 578 81Z" />
          </g>
          <g className="na-eye na-eye-left">
            <ellipse className="na-eye-white" cx="205" cy="213" rx="64" ry="106" />
            <ellipse className="na-eye-outline" cx="205" cy="213" rx="64" ry="106" />
            <g className="na-pupil"><ellipse cx="205" cy="224" rx="27" ry="46" /><circle className="na-glint" cx="196" cy="205" r="8" /></g>
          </g>
          <g className="na-eye na-eye-right">
            <ellipse className="na-eye-white" cx="435" cy="213" rx="64" ry="106" />
            <ellipse className="na-eye-outline" cx="435" cy="213" rx="64" ry="106" />
            <g className="na-pupil"><ellipse cx="435" cy="224" rx="27" ry="46" /><circle className="na-glint" cx="426" cy="205" r="8" /></g>
          </g>
          <g className="na-smile" aria-hidden="true">
            <path className="na-smile-mouth" d="M225 360Q320 388 415 360Q398 425 320 433Q242 425 225 360Z" />
            <path className="na-smile-teeth" d="M244 373Q320 394 396 373Q379 405 320 412Q261 405 244 373Z" />
            <path className="na-smile-line" d="M250 380Q320 398 390 380" />
          </g>
        </g>
      </g>
    </svg>
  );
}
