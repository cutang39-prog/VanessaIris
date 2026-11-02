import React, { useState } from 'react';
import { VILogo } from './VILogo';
import { ArrowRight, Sparkles, Check, ChevronRight } from 'lucide-react';
import { TranslationSchema } from '../translations';

interface PortfolioSectionProps {
  t: TranslationSchema;
  onOpenProjectsModal: () => void;
}

export const PortfolioSection: React.FC<PortfolioSectionProps> = ({
  t,
  onOpenProjectsModal,
}) => {
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);

  const projectsList = [
    {
      id: 'elevate-saas',
      title: t.portfolio.laptopHeader,
      category: 'Enterprise AI & Real Estate',
      headline: t.portfolio.laptopHeader,
      laptopHeadline: t.portfolio.laptopHeader,
      phoneHeadline: t.portfolio.phoneHeader,
      description: 'An AI-powered enterprise platform combining lead scoring, automated client portals, and real-time market data analytics.',
      metrics: ['+310% Lead Conversion', '4.2x Faster Deal Closing', '99.9% Uptime'],
      tech: ['React', 'TypeScript', 'Gemini AI API', 'Tailwind CSS', 'PostgreSQL'],
    },
    {
      id: 'beauty-wellness',
      title: t.portfolio.phoneHeader,
      category: 'E-Commerce & Smart Booking',
      headline: t.portfolio.phoneHeader,
      laptopHeadline: t.portfolio.laptopHeader,
      phoneHeadline: t.portfolio.phoneHeader,
      description: 'Mobile-first booking and personalized skincare recommendation engine powered by automated consultation quizzes.',
      metrics: ['+185% Online Bookings', '$420k New Revenue', '4.9/5 User Rating'],
      tech: ['React Mobile', 'Stripe Integration', 'AI Consultation Engine', 'Twilio SMS'],
    },
  ];

  const activeProject = projectsList[activeProjectIndex] || projectsList[0];

  return (
    <section id="portfolio" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-grid-3 bg-cover bg-center overflow-hidden">
      <div className="absolute inset-0 bg-[#030712]/80 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none" />

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
            <span>{t.portfolio.tag}</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 flex flex-col items-start">
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-white tracking-tight leading-tight">
              {t.portfolio.title}
            </h2>
            <p className="text-slate-300 text-base sm:text-lg mt-4 leading-relaxed">
              {t.portfolio.subtitle}
            </p>

            <div className="w-full mt-8 space-y-3">
              {projectsList.map((proj, idx) => {
                const isSelected = idx === activeProjectIndex;
                return (
                  <button
                    key={proj.id}
                    onClick={() => setActiveProjectIndex(idx)}
                    className={`w-full text-left p-4 rounded-xl transition-all duration-300 flex items-center justify-between border cursor-pointer ${
                      isSelected
                        ? 'bg-blue-950/70 border-blue-400/60 shadow-[0_0_20px_rgba(59,130,246,0.3)]'
                        : 'bg-slate-900/40 border-slate-800/60 hover:bg-slate-900/80 hover:border-slate-700'
                    }`}
                  >
                    <div>
                      <div className="text-xs font-semibold text-blue-300/90 uppercase tracking-wider mb-1">
                        {proj.category}
                      </div>
                      <div className="text-slate-100 font-serif font-bold text-lg">
                        {proj.title}
                      </div>
                    </div>
                    <div
                      className={`w-7 h-7 rounded-full flex items-center justify-center transition-all ${
                        isSelected ? 'bg-blue-500 text-white' : 'bg-slate-800 text-slate-400'
                      }`}
                    >
                      <ChevronRight className="w-4 h-4" />
                    </div>
                  </button>
                );
              })}
            </div>

            <div className="mt-10">
              <button
                onClick={onOpenProjectsModal}
                className="group inline-flex items-center gap-3 px-7 py-3 rounded-full bg-slate-900/80 border border-blue-400/40 text-slate-100 font-sans font-semibold text-base backdrop-blur-md shadow-[0_0_20px_rgba(59,130,246,0.25)] hover:shadow-[0_0_30px_rgba(59,130,246,0.6)] hover:border-blue-300 hover:text-white transition-all transform hover:-translate-y-0.5 cursor-pointer"
              >
                <span>{t.portfolio.viewProjects}</span>
                <ArrowRight className="w-4 h-4 text-blue-300 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-7 relative flex items-center justify-center min-h-[420px] sm:min-h-[500px]">
            <div className="absolute w-[80%] h-[80%] bg-blue-600/20 rounded-full blur-[90px] pointer-events-none" />

            <div className="relative w-full max-w-[560px] transform transition-transform duration-500 hover:scale-[1.02]">
              <div className="relative bg-slate-900 rounded-t-2xl p-2.5 sm:p-3 border-t-2 border-x-2 border-slate-700 shadow-2xl shadow-black/80">
                <div className="bg-slate-950 px-3 py-1.5 rounded-t-lg flex items-center justify-between border-b border-slate-800">
                  <div className="flex items-center gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                  </div>
                  <div className="bg-slate-900 px-4 py-0.5 rounded text-[10px] text-slate-400 font-mono truncate max-w-[200px]">
                    https://vanessa-iris.agency/{activeProject.id}
                  </div>
                  <div className="w-4" />
                </div>

                <div className="relative bg-[#0b1329] h-[240px] sm:h-[300px] rounded-b-lg overflow-hidden flex flex-col justify-between p-4 sm:p-6 bg-cover bg-center border border-slate-800">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-950/90 via-slate-950/80 to-blue-900/60 z-0" />

                  <div className="relative z-10 flex items-center justify-between border-b border-slate-700/50 pb-2">
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 rounded bg-blue-500 flex items-center justify-center text-[10px] font-bold text-white">
                        VI
                      </div>
                      <span className="text-xs font-semibold text-white tracking-wider">
                        {activeProject.title}
                      </span>
                    </div>
                  </div>

                  <div className="relative z-10 my-auto max-w-sm">
                    <div className="inline-block px-2 py-0.5 rounded bg-blue-500/20 text-blue-300 text-[9px] font-semibold uppercase tracking-wider mb-1.5 border border-blue-400/30">
                      {t.portfolio.demoTag}
                    </div>
                    <h4 className="font-serif text-2xl sm:text-3xl font-bold text-white leading-tight">
                      {activeProject.laptopHeadline}
                    </h4>
                    <p className="text-slate-300 text-[11px] sm:text-xs mt-1.5 line-clamp-2">
                      {activeProject.description}
                    </p>
                  </div>

                  <div className="relative z-10 grid grid-cols-3 gap-2 pt-2 border-t border-slate-800/60 text-center">
                    {activeProject.metrics.map((m, i) => (
                      <div key={i} className="bg-slate-900/60 p-1 rounded border border-slate-800 text-[9px] text-blue-300 font-semibold truncate">
                        {m}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-b from-slate-700 to-slate-800 h-3.5 sm:h-4 rounded-b-xl border-t border-slate-600 shadow-xl flex items-center justify-center relative">
                <div className="w-16 h-1 rounded-full bg-slate-900" />
              </div>
            </div>

            <div className="absolute -bottom-4 -right-2 sm:-right-4 w-[160px] sm:w-[200px] z-20 transform rotate-3 hover:rotate-0 transition-transform duration-500 drop-shadow-[0_20px_35px_rgba(0,0,0,0.8)]">
              <div className="bg-slate-900 rounded-[2rem] p-2 border-2 border-slate-700 shadow-2xl">
                <div className="relative bg-slate-950 rounded-[1.5rem] h-[260px] sm:h-[310px] overflow-hidden flex flex-col justify-between p-3 border border-slate-800">
                  <div className="w-12 h-2.5 bg-slate-900 rounded-full mx-auto mb-2" />

                  <div className="relative z-10 flex-1 flex flex-col justify-between">
                    <div className="relative h-28 sm:h-36 rounded-xl overflow-hidden bg-slate-800 mb-2 border border-slate-700">
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-blue-950/40 to-transparent z-10" />
                      <div className="absolute top-2 left-2 z-20 font-serif text-[11px] font-bold text-white">
                        AURA
                      </div>
                      <div className="absolute bottom-2 left-2 right-2 z-20">
                        <div className="font-serif text-xs font-bold text-white line-clamp-1">
                          {activeProject.phoneHeadline}
                        </div>
                      </div>
                    </div>

                    <div className="space-y-1.5 mb-2">
                      <div className="bg-slate-900 p-1.5 rounded-lg border border-slate-800 text-[9px] text-slate-300 flex items-center justify-between">
                        <span>Automation</span>
                        <Check className="w-3 h-3 text-blue-400" />
                      </div>
                    </div>
                  </div>

                  <div className="w-16 h-1 bg-slate-700 rounded-full mx-auto mt-2" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
