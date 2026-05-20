type Props = {
  className?: string;
  stroke?: string;
  fill?: string;
};

// Hand-drawn-ish walking croissant mascot, single-color line art.
export function CroissantMascot({ className, stroke = "currentColor", fill = "transparent" }: Props) {
  return (
    <svg viewBox="0 0 240 200" className={className} xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <g fill={fill} stroke={stroke} strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
        {/* body */}
        <path d="M40 110 C 50 70, 100 55, 140 65 C 180 73, 205 95, 200 120 C 195 140, 160 150, 120 145 C 85 141, 55 135, 40 110 Z" />
        {/* segments */}
        <path d="M70 95 C 78 110, 78 125, 72 138" />
        <path d="M95 85 C 102 105, 102 130, 96 145" />
        <path d="M125 80 C 132 102, 132 130, 126 148" />
        <path d="M155 82 C 162 102, 162 128, 156 146" />
        <path d="M180 92 C 186 108, 186 126, 180 140" />
        {/* face */}
        <circle cx="118" cy="108" r="2.5" fill={stroke} stroke="none" />
        <circle cx="138" cy="108" r="2.5" fill={stroke} stroke="none" />
        <path d="M120 120 Q 128 127 136 120" />
        {/* legs */}
        <path d="M95 150 L 90 175" />
        <path d="M105 152 L 115 178" />
        <path d="M150 152 L 145 178" />
        <path d="M160 150 L 170 175" />
        {/* shoes */}
        <ellipse cx="88" cy="178" rx="10" ry="4" fill={stroke} stroke="none" />
        <ellipse cx="117" cy="181" rx="10" ry="4" fill={stroke} stroke="none" />
        <ellipse cx="143" cy="181" rx="10" ry="4" fill={stroke} stroke="none" />
        <ellipse cx="172" cy="178" rx="10" ry="4" fill={stroke} stroke="none" />
        {/* motion lines */}
        <path d="M20 130 L 32 130" />
        <path d="M18 145 L 30 145" />
        <path d="M215 130 L 225 130" />
      </g>
    </svg>
  );
}
