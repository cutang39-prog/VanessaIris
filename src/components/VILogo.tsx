import React from 'react';

interface VILogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showSubtitle?: boolean;
  className?: string;
  horizontal?: boolean;
  customName?: string;
  customSub?: string;
}

export const VILogo: React.FC<VILogoProps> = ({
  size = 'md',
  showSubtitle = true,
  className = '',
  horizontal = false,
  customName = 'VANESSA IRIS',
  customSub = 'DIGITAL BUSINESS SOLUTIONS',
}) => {
  const iconSizes = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-20 h-20',
    xl: 'w-28 h-28 sm:w-36 sm:h-36',
  };

  const textSizes = {
    sm: 'text-xs tracking-[0.22em]',
    md: 'text-sm sm:text-base tracking-[0.25em]',
    lg: 'text-lg sm:text-xl tracking-[0.3em]',
    xl: 'text-2xl sm:text-4xl tracking-[0.35em]',
  };

  const subtitleSizes = {
    sm: 'text-[8px] tracking-[0.2em]',
    md: 'text-[9px] sm:text-[10px] tracking-[0.25em]',
    lg: 'text-xs tracking-[0.3em]',
    xl: 'text-xs sm:text-sm tracking-[0.35em]',
  };

  return (
    <div
      className={`flex ${
        horizontal
          ? 'flex-row items-center gap-3.5'
          : 'flex-col items-center justify-center text-center'
      } ${className}`}
    >
      {/* 100% Pure Vector SVG Metallic Logo (Completely Transparent, NO White Box) */}
      <div
        className={`relative flex items-center justify-center ${iconSizes[size]} shrink-0 drop-shadow-[0_4px_20px_rgba(59,130,246,0.35)]`}
      >
        <svg
          viewBox="0 0 140 140"
          className="w-full h-full overflow-visible"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Tilted Orbital Ring */}
          <path
            d="M 12 90 C 8 40, 75 10, 115 32 C 128 38, 126 56, 110 72 C 90 95, 35 108, 18 92 C 10 84, 18 72, 32 65"
            stroke="url(#vi-ring-pure)"
            strokeWidth="2.8"
            strokeLinecap="round"
            className="drop-shadow-[0_0_12px_#38BDF8]"
          />

          {/* Sparkle flare on intersection with left arm of V */}
          <path
            d="M 44 48 L 46 44 L 48 48 L 52 50 L 48 52 L 46 56 L 44 52 L 40 50 Z"
            fill="#FFFFFF"
            className="drop-shadow-[0_0_8px_#E0F2FE]"
          />

          {/* Top Right Primary Elongated 4-Point Star Sparkle */}
          <g transform="translate(112, 24)">
            <circle cx="0" cy="0" r="12" fill="#38BDF8" className="opacity-25 blur-md" />
            <path
              d="M 0 -20 L 4 -4 L 20 0 L 4 4 L 0 20 L -4 4 L -20 0 L -4 -4 Z"
              fill="url(#vi-star-pure)"
              className="drop-shadow-[0_0_12px_#E0F2FE]"
            />
            <circle cx="0" cy="0" r="2.5" fill="#FFFFFF" />
          </g>

          {/* Small 4-Point Star below top-right star */}
          <g transform="translate(104, 40)">
            <path
              d="M 0 -7 L 1.8 -1.8 L 7 0 L 1.8 1.8 L 0 7 L -1.8 1.8 L -7 0 L -1.8 -1.8 Z"
              fill="#BAE6FD"
              className="opacity-90 drop-shadow-[0_0_6px_#60A5FA]"
            />
          </g>

          {/* Tiny Faint 4-Point Star above top-right star */}
          <g transform="translate(102, 10)">
            <path
              d="M 0 -4 L 1 -1 L 4 0 L 1 1 L 0 4 L -1 1 L -4 0 L -1 -1 Z"
              fill="#E0F2FE"
              className="opacity-75"
            />
          </g>

          {/* Bottom Left Star Sparkle on lowest curve of ring */}
          <g transform="translate(24, 94)">
            <path
              d="M 0 -11 L 2.5 -2.5 L 11 0 L 2.5 2.5 L 0 11 L -2.5 2.5 L -11 0 L -2.5 -2.5 Z"
              fill="url(#vi-star-pure)"
              className="drop-shadow-[0_0_8px_#38BDF8]"
            />
          </g>

          {/* Metallic Silver Letterform V */}
          {/* V - Left arm with curved flourish tip at top left and sharp bottom vertex */}
          <path
            d="M 28 36 C 26 30, 32 28, 38 28 C 42 28, 44 32, 46 36 L 63 88 C 65 92, 67 92, 69 88 L 88 40 C 90 34, 92 32, 88 32 C 86 32, 83 34, 80 40 L 66 94 C 64 102, 59 102, 56 94 L 32 44 C 30 38, 29 38, 28 36 Z"
            fill="url(#vi-v-silver)"
          />

          {/* V - Right arm sharp flourish tip extending upwards */}
          <path
            d="M 64 88 L 88 32 C 90 28, 92 26, 91 22 C 90 20, 88 22, 85 28 L 61 90 C 59 94, 57 94, 55 90 C 54 88, 56 84, 58 80 Z"
            fill="url(#vi-v-flourish)"
          />

          {/* Metallic Silver Letterform I */}
          {/* I - Stately Roman Serif Column interwoven through right side */}
          <path
            d="M 80 34 C 80 30, 84 30, 90 30 L 100 30 C 106 30, 110 30, 110 34 L 108 36 C 105 36, 102 38, 102 44 L 102 88 C 102 94, 105 96, 108 96 L 110 98 C 110 102, 106 102, 100 102 L 90 102 C 84 102, 80 102, 80 98 L 82 96 C 85 96, 88 94, 88 88 L 88 44 C 88 38, 85 36, 82 36 Z"
            fill="url(#vi-i-chrome)"
          />

          {/* Definitions for 100% Pure Transparent Metallic Shader Gradients */}
          <defs>
            <linearGradient id="vi-ring-pure" x1="0" y1="0" x2="140" y2="140">
              <stop offset="0%" stopColor="#38BDF8" />
              <stop offset="35%" stopColor="#E0F2FE" />
              <stop offset="70%" stopColor="#60A5FA" />
              <stop offset="100%" stopColor="#1E40AF" stopOpacity="0.4" />
            </linearGradient>

            <linearGradient id="vi-star-pure" x1="-20" y1="-20" x2="20" y2="20">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="50%" stopColor="#E0F2FE" />
              <stop offset="100%" stopColor="#38BDF8" />
            </linearGradient>

            <linearGradient id="vi-v-silver" x1="20" y1="20" x2="100" y2="110">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="25%" stopColor="#F1F5F9" />
              <stop offset="50%" stopColor="#94A3B8" />
              <stop offset="75%" stopColor="#CBD5E1" />
              <stop offset="100%" stopColor="#475569" />
            </linearGradient>

            <linearGradient id="vi-v-flourish" x1="50" y1="20" x2="95" y2="90">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="50%" stopColor="#E2E8F0" />
              <stop offset="100%" stopColor="#64748B" />
            </linearGradient>

            <linearGradient id="vi-i-chrome" x1="75" y1="25" x2="115" y2="105">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="20%" stopColor="#F8FAFC" />
              <stop offset="45%" stopColor="#94A3B8" />
              <stop offset="70%" stopColor="#E2E8F0" />
              <stop offset="100%" stopColor="#475569" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Typography Lockup */}
      <div
        className={`flex flex-col ${
          horizontal ? 'text-left' : 'items-center'
        }`}
      >
        <span
          className={`font-cinzel font-semibold text-slate-100 uppercase ${textSizes[size]} drop-shadow-[0_2px_12px_rgba(255,255,255,0.25)] leading-tight`}
        >
          {customName}
        </span>
        {showSubtitle && (
          <span
            className={`font-sans font-medium text-blue-200/90 uppercase ${subtitleSizes[size]} mt-1 tracking-[0.28em] drop-shadow-[0_1px_6px_rgba(59,130,246,0.3)]`}
          >
            {customSub}
          </span>
        )}
      </div>
    </div>
  );
};
