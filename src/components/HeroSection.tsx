import React from 'react';
import { VILogo } from './VILogo';
import { ArrowRight } from 'lucide-react';
import { TranslationSchema } from '../translations';

interface HeroSectionProps {
  t: TranslationSchema;
  onOpenContact: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ t, onOpenContact }) => {
  const subtitleParts = t.hero.subtitle.split('·').map((p) => p.trim());

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-28 pb-20 px-4 sm:px-6 lg:px-8 bg-grid-1 bg-cover bg-center overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute inset-0 bg-[#030712]/60 pointer-events-none" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-blue-600/20 rounded-full blur-[140px] pointer-events-none" />

      {/* Main Container matching Frame 1 of IMG_1199.jpg strictly */}
      <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center justify-center">
        {/* Central Logo & Wordmark */}
        <div className="mb-8 transform hover:scale-105 transition-transform duration-500 cursor-pointer">
          <VILogo
            size="xl"
            showSubtitle={true}
            customName={t.brandName}
            customSub={t.brandSubtitle}
          />
        </div>

        {/* Hairline Divider with Centered 4-Point Star Sparkle matching Frame 1 */}
        <div className="w-full max-w-xs sm:max-w-sm flex items-center justify-center my-6 gap-3">
          <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-blue-300/40 to-transparent" />
          <div className="text-blue-200 animate-pulse-glow">
            <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current drop-shadow-[0_0_8px_#60A5FA]">
              <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
            </svg>
          </div>
          <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-blue-300/40 to-transparent" />
        </div>

        {/* Main Headline matching Frame 1 strictly */}
        <div className="font-serif tracking-tight text-slate-100 my-2">
          <div className="text-3xl sm:text-5xl md:text-6xl font-normal text-slate-200 drop-shadow-[0_2px_15px_rgba(0,0,0,0.8)]">
            Your Partner in
          </div>
          <div className="text-4xl sm:text-6xl md:text-7xl font-light italic text-blue-100 tracking-wide mt-1.5 drop-shadow-[0_0_35px_rgba(147,197,253,0.5)]">
            Digital Growth
          </div>
        </div>

        {/* Subtitle Items */}
        <p className="font-sans text-slate-200/90 text-base sm:text-xl font-light mt-6 tracking-wider flex flex-wrap items-center justify-center gap-2 drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]">
          {subtitleParts.map((part, index) => (
            <React.Fragment key={index}>
              <span>{part}</span>
              {index < subtitleParts.length - 1 && (
                <span className="not-italic text-blue-400 font-normal mx-1">·</span>
              )}
            </React.Fragment>
          ))}
        </p>

        {/* Pill CTA Button matching Frame 1 strictly */}
        <div className="mt-10">
          <button
            onClick={onOpenContact}
            className="group relative inline-flex items-center gap-3 px-8 py-3.5 rounded-full bg-slate-900/70 border border-blue-400/40 text-blue-100 font-sans font-medium text-base sm:text-lg backdrop-blur-md shadow-[0_0_25px_rgba(59,130,246,0.25)] hover:shadow-[0_0_40px_rgba(59,130,246,0.7)] hover:border-blue-300 hover:text-white transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer"
          >
            <span>{t.hero.cta}</span>
            <ArrowRight className="w-5 h-5 text-blue-300 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center opacity-70 hover:opacity-100 transition-opacity z-10">
        <a href="#services" className="text-xs text-blue-200/80 uppercase tracking-[0.2em] font-sans flex flex-col items-center gap-1">
          <span>{t.hero.scrollHint}</span>
          <div className="w-0.5 h-6 bg-gradient-to-b from-blue-400 to-transparent animate-pulse" />
        </a>
      </div>
    </section>
  );
};
