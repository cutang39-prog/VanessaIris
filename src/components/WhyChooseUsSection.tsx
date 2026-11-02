import React from 'react';
import { VILogo } from './VILogo';
import { Zap, Handshake, ShieldCheck, CheckCircle2, Sparkles } from 'lucide-react';
import { TranslationSchema } from '../translations';

interface WhyChooseUsProps {
  t: TranslationSchema;
}

export const WhyChooseUsSection: React.FC<WhyChooseUsProps> = ({ t }) => {
  const icons = [
    <Zap className="w-7 h-7 text-blue-300 stroke-[1.75]" />,
    <Handshake className="w-7 h-7 text-blue-300 stroke-[1.75]" />,
    <ShieldCheck className="w-7 h-7 text-blue-300 stroke-[1.75]" />,
  ];

  return (
    <section id="why-us" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-grid-4 bg-cover bg-center overflow-hidden">
      <div className="absolute inset-0 bg-[#030712]/75 pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 w-[450px] h-[450px] bg-blue-500/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="flex items-center justify-between border-b border-blue-900/40 pb-6 mb-12">
          <VILogo
            size="sm"
            horizontal
            showSubtitle={true}
            customName={t.brandName}
            customSub={t.brandSubtitle}
          />
          <div className="hidden sm:flex items-center gap-2 text-xs text-blue-300/80 font-medium tracking-wider uppercase">
            <Sparkles className="w-3.5 h-3.5 text-blue-400" />
            <span>{t.whyUs.tag}</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-8">
            <div>
              <h2 className="font-serif text-4xl sm:text-5xl font-bold text-white tracking-tight leading-tight">
                {t.whyUs.title}
              </h2>
              <p className="text-slate-300 text-base sm:text-lg mt-3 font-normal max-w-lg leading-relaxed">
                {t.whyUs.subtitle}
              </p>
            </div>

            <div className="space-y-6 pt-2">
              {t.whyUs.pillars.map((pillar, idx) => (
                <div
                  key={idx}
                  className="group p-5 rounded-2xl glass-card transition-all duration-300 hover:border-blue-300/50 hover:bg-slate-900/75 flex items-start gap-5 relative"
                >
                  <div className="w-13 h-13 rounded-xl bg-slate-900/90 border border-blue-400/30 flex items-center justify-center shrink-0 shadow-md group-hover:border-blue-300 group-hover:shadow-[0_0_15px_rgba(59,130,246,0.5)] transition-all">
                    {icons[idx]}
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center justify-between gap-2">
                      <h3 className="font-serif font-bold text-xl text-slate-100 group-hover:text-blue-200 transition-colors">
                        {pillar.title}
                      </h3>
                      <span className="hidden sm:inline-block text-[11px] font-semibold text-blue-300/80 uppercase tracking-wider bg-blue-950/60 px-2.5 py-0.5 rounded border border-blue-800/40">
                        {pillar.highlight}
                      </span>
                    </div>
                    <p className="text-slate-300 text-sm sm:text-base mt-1.5 leading-relaxed font-light">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-6 relative flex flex-col items-center justify-center">
            <div className="relative w-full rounded-3xl overflow-hidden glass-card p-8 sm:p-12 border border-blue-400/30 shadow-2xl flex flex-col justify-between min-h-[380px] sm:min-h-[440px] group">
              <div className="absolute inset-0 bg-gradient-to-tr from-slate-950 via-blue-950/80 to-indigo-950/40 z-0" />

              <div className="relative z-10 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-blue-400 animate-ping" />
                <span className="text-xs font-semibold text-blue-200 tracking-widest uppercase">
                  {t.whyUs.commitmentTag}
                </span>
              </div>

              <div className="relative z-10 my-8">
                <h3 className="font-serif italic font-normal text-3xl sm:text-5xl text-slate-100 tracking-wide leading-tight drop-shadow-[0_4px_25px_rgba(59,130,246,0.6)]">
                  {t.whyUs.missionHeadline}
                </h3>
              </div>

              <div className="relative z-10 grid grid-cols-2 gap-4 pt-4 border-t border-blue-900/40">
                <div className="flex items-center gap-2 text-xs text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                  <span>{t.whyUs.stats.satisfaction}</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                  <span>{t.whyUs.stats.onTime}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
