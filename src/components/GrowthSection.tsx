import React, { useState } from 'react';
import { VILogo } from './VILogo';
import { Users, ShoppingCart, Clock, ArrowRight, TrendingUp, Sparkles, Calculator } from 'lucide-react';
import { TranslationSchema } from '../translations';

interface GrowthSectionProps {
  t: TranslationSchema;
  onOpenContact: () => void;
}

export const GrowthSection: React.FC<GrowthSectionProps> = ({ t, onOpenContact }) => {
  const [monthlyBudget, setMonthlyBudget] = useState(5000);
  const [teamSize, setTeamSize] = useState(10);
  const [showCalculator, setShowCalculator] = useState(false);

  const projectedLeads = Math.round((monthlyBudget / 100) * 2.45);
  const projectedRevenueBoost = Math.round(monthlyBudget * 1.8);
  const hoursSavedWeekly = Math.round(teamSize * 14 * 0.7);

  return (
    <section id="growth" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-grid-5 bg-cover bg-center overflow-hidden">
      <div className="absolute inset-0 bg-[#030712]/80 pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />

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
            <span>{t.growth.tag}</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 flex flex-col items-start space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/60 border border-blue-800/40 text-blue-300 text-xs font-semibold tracking-wider uppercase">
              <TrendingUp className="w-3.5 h-3.5 text-blue-400" />
              <span>{t.growth.tag}</span>
            </div>

            <h2 className="font-serif font-bold text-4xl sm:text-5xl md:text-6xl text-white tracking-tight leading-tight">
              {t.growth.title}
            </h2>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-xl font-normal">
              {t.growth.subtitle}
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenContact}
                className="group inline-flex items-center gap-3 px-8 py-3.5 rounded-full bg-slate-900/80 border border-blue-400/40 text-slate-100 font-sans font-semibold text-base backdrop-blur-md shadow-[0_0_20px_rgba(59,130,246,0.25)] hover:shadow-[0_0_35px_rgba(59,130,246,0.6)] hover:border-blue-300 hover:text-white transition-all transform hover:-translate-y-0.5 cursor-pointer"
              >
                <span>{t.growth.cta}</span>
                <ArrowRight className="w-4 h-4 text-blue-300 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => setShowCalculator(!showCalculator)}
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-full bg-blue-950/50 border border-blue-800/50 text-blue-300 font-sans font-medium text-sm hover:bg-blue-900/60 hover:text-white transition-all cursor-pointer"
              >
                <Calculator className="w-4 h-4 text-blue-400" />
                <span>{showCalculator ? t.growth.roiBtnHide : t.growth.roiBtnShow}</span>
              </button>
            </div>

            {showCalculator && (
              <div className="w-full mt-4 p-6 rounded-2xl glass-card border border-blue-400/40 space-y-5 animate-float">
                <div className="flex items-center justify-between border-b border-blue-900/50 pb-3">
                  <span className="font-serif font-bold text-lg text-white flex items-center gap-2">
                    <Calculator className="w-5 h-5 text-blue-400" />
                    {t.growth.calculatorTitle}
                  </span>
                </div>

                <div>
                  <div className="flex justify-between text-xs text-slate-300 mb-1.5 font-medium">
                    <span>{t.growth.monthlyBudgetLabel}</span>
                    <span className="text-blue-300 font-bold font-mono">${monthlyBudget.toLocaleString()} / mo</span>
                  </div>
                  <input
                    type="range"
                    min="1000"
                    max="25000"
                    step="500"
                    value={monthlyBudget}
                    onChange={(e) => setMonthlyBudget(Number(e.target.value))}
                    aria-label={t.growth.monthlyBudgetLabel}
                    className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-blue-500"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-xs text-slate-300 mb-1.5 font-medium">
                    <span>{t.growth.teamSizeLabel}</span>
                    <span className="text-blue-300 font-bold font-mono">{teamSize} members</span>
                  </div>
                  <input
                    type="range"
                    min="2"
                    max="50"
                    step="1"
                    value={teamSize}
                    onChange={(e) => setTeamSize(Number(e.target.value))}
                    aria-label={t.growth.teamSizeLabel}
                    className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-blue-500"
                  />
                </div>

                <div className="grid grid-cols-3 gap-3 pt-2 text-center">
                  <div className="bg-slate-900/80 p-2.5 rounded-xl border border-blue-900/40">
                    <div className="text-xs text-slate-400">{t.growth.leadsResult}</div>
                    <div className="text-base sm:text-lg font-bold text-blue-300 font-mono">+{projectedLeads}</div>
                  </div>
                  <div className="bg-slate-900/80 p-2.5 rounded-xl border border-blue-900/40">
                    <div className="text-xs text-slate-400">{t.growth.revenueResult}</div>
                    <div className="text-base sm:text-lg font-bold text-emerald-400 font-mono">+${projectedRevenueBoost.toLocaleString()}</div>
                  </div>
                  <div className="bg-slate-900/80 p-2.5 rounded-xl border border-blue-900/40">
                    <div className="text-xs text-slate-400">{t.growth.hoursResult}</div>
                    <div className="text-base sm:text-lg font-bold text-indigo-300 font-mono">{hoursSavedWeekly} hrs</div>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="lg:col-span-6 relative flex flex-col items-center justify-center">
            <div className="relative w-full max-w-md sm:max-w-lg rounded-3xl glass-card p-6 sm:p-8 border border-blue-400/30 shadow-2xl flex flex-col justify-between min-h-[380px] sm:min-h-[440px]">
              <div className="absolute inset-0 bg-gradient-to-tr from-slate-950 via-blue-950/70 to-indigo-950/40 rounded-3xl" />

              <div className="relative z-10 w-full mb-6">
                <div className="flex items-center justify-between text-xs text-slate-400 border-b border-slate-800 pb-2 mb-4 font-mono">
                  <span>METRICS // IMPACT</span>
                  <span className="text-emerald-400 font-semibold">▲ OPTIMIZED</span>
                </div>

                <div className="relative h-44 sm:h-52 w-full flex items-end justify-between px-2 pt-6">
                  <svg className="absolute inset-0 w-full h-full overflow-visible pointer-events-none" viewBox="0 0 400 180" fill="none">
                    <path
                      d="M 20 150 Q 120 130, 200 80 T 380 20"
                      stroke="url(#chart-arrow-grad-v2)"
                      strokeWidth="5"
                      strokeLinecap="round"
                    />
                    <polygon points="370,10 395,15 385,40" fill="#60A5FA" />
                    <defs>
                      <linearGradient id="chart-arrow-grad-v2" x1="0" y1="1" x2="1" y2="0">
                        <stop offset="0%" stopColor="#1E3A8A" opacity="0.3" />
                        <stop offset="50%" stopColor="#3B82F6" />
                        <stop offset="100%" stopColor="#93C5FD" />
                      </linearGradient>
                    </defs>
                  </svg>

                  <div className="w-12 sm:w-16 h-[25%] bg-blue-900/40 rounded-t-lg border-t border-x border-blue-500/30" />
                  <div className="w-12 sm:w-16 h-[45%] bg-blue-800/50 rounded-t-lg border-t border-x border-blue-500/40" />
                  <div className="w-12 sm:w-16 h-[70%] bg-blue-600/70 rounded-t-lg border-t border-x border-blue-400/60" />
                  <div className="w-12 sm:w-16 h-[95%] bg-gradient-to-t from-blue-600 to-blue-400 rounded-t-lg border-t border-x border-blue-200 shadow-lg" />
                </div>
              </div>

              <div className="relative z-20 space-y-3">
                <div className="glass-pill p-3.5 rounded-xl border border-blue-400/30 flex items-center justify-between shadow-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-blue-900/80 border border-blue-400/40 flex items-center justify-center text-blue-300">
                      <Users className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-lg sm:text-xl font-bold font-sans text-white tracking-tight">
                        {t.growth.stat1Label}
                      </div>
                      <div className="text-xs text-blue-200/80 font-medium">
                        {t.growth.stat1Sub}
                      </div>
                    </div>
                  </div>
                  <span className="text-[10px] text-emerald-400 font-semibold bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-800/60">
                    ▲ Inbound
                  </span>
                </div>

                <div className="glass-pill p-3.5 rounded-xl border border-blue-400/30 flex items-center justify-between shadow-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-blue-900/80 border border-blue-400/40 flex items-center justify-center text-blue-300">
                      <ShoppingCart className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-lg sm:text-xl font-bold font-sans text-white tracking-tight">
                        {t.growth.stat2Label}
                      </div>
                      <div className="text-xs text-blue-200/80 font-medium">
                        {t.growth.stat2Sub}
                      </div>
                    </div>
                  </div>
                  <span className="text-[10px] text-emerald-400 font-semibold bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-800/60">
                    ▲ Revenue
                  </span>
                </div>

                <div className="glass-pill p-3.5 rounded-xl border border-blue-400/30 flex items-center justify-between shadow-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-blue-900/80 border border-blue-400/40 flex items-center justify-center text-blue-300">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-lg sm:text-xl font-bold font-sans text-white tracking-tight">
                        {t.growth.stat3Label}
                      </div>
                      <div className="text-xs text-blue-200/80 font-medium">
                        {t.growth.stat3Sub}
                      </div>
                    </div>
                  </div>
                  <span className="text-[10px] text-blue-300 font-semibold bg-blue-950/80 px-2 py-0.5 rounded border border-blue-800/60">
                    ▼ Hours Saved
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
