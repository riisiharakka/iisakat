import React from "react";

const FrameOverlay: React.FC = () => {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-50">
      {/* SVG frame inspired by the invite's hand-drawn look */}
      <svg
        className="w-full h-full text-foreground/80"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        role="img"
      >
        <title>Decorative hand-drawn frame</title>
        <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
          {/* Primary wobbly rectangle */}
          <path d="M6 8 C 25 6, 75 6, 94 8" strokeWidth="3.2" />
          <path d="M94 8 C 96 25, 96 75, 94 92" strokeWidth="3.2" />
          <path d="M94 92 C 75 94, 25 94, 6 92" strokeWidth="3.2" />
          <path d="M6 92 C 4 75, 4 25, 6 8" strokeWidth="3.2" />

          {/* Subtle second pass to emulate handmade double stroke */}
          <g opacity={0.7} transform="translate(0.6,0.4)">
            <path d="M6 8 C 28 7, 72 7, 94 8" strokeWidth="2.2" />
            <path d="M94 8 C 95.5 28, 95.5 72, 94 92" strokeWidth="2.2" />
            <path d="M94 92 C 72 93, 28 93, 6 92" strokeWidth="2.2" />
            <path d="M6 92 C 4.8 72, 4.8 28, 6 8" strokeWidth="2.2" />
          </g>

          {/* Corner ticks similar to the invite */}
          <path d="M6 8 L 3.8 6" strokeWidth="2.8" />
          <path d="M94 8 L 96.2 6" strokeWidth="2.8" />
          <path d="M94 92 L 96.2 94" strokeWidth="2.8" />
          <path d="M6 92 L 3.8 94" strokeWidth="2.8" />
        </g>
      </svg>
    </div>
  );
};

export default FrameOverlay;
