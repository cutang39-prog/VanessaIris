import React from 'react';
import { VILogo } from './VILogo';
import { Code2, Bot, Cog, BarChart3, Play, ArrowRight, Sparkles } from 'lucide-react';
import { TranslationSchema } from '../translations';

export interface ServiceItem {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  details: string[];
  techStack: string[];
  impactMetric: string;
}

interface ServicesSectionProps {
  t: TranslationSchema;
  onSelectService: (service: ServiceItem) => void;
  onExploreWork: () => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  t,
  onSelectService,
  onExploreWork,
}) => {
  const iconsMap: Record<string, React.ReactNode> = {
    'web-dev': <Code2 className="w-8 h-8 text-blue-300 stroke-[1.5]" />,
    'ai-solutions': <Bot className="w-8 h-8 text-blue-300 stroke-[1.5]" />,
    'automation-crm': <Cog className="w-8 h-8 text-blue-300 stroke-[1.5]" />,
    'digital-marketing': <BarChart3 className="w-8 h-8 text-blue-300 stroke-[1.5]" />,
    'ai-video-content': <Play className="w-8 h-8 text-blue-300 stroke-[1.5]" />,
  };

  return (
    <section id="services" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-grid-2 bg-cover bg-center overflow-hidden">
      {/* Background glow and subtle dark overlay */}
      <div className="absolute inset-0 bg-[#030712]/80 pointer-events-none" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header bar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-blue-900/40 pb-6 mb-12 gap-4">
          <div className="flex items-center gap-3">
            <VILogo
              size="sm"
              horizontal
              showSubtitle={true}
              customName={t.brandName}
              customSub={t.brandSubtitle}
            />
          </div>
          <div className="text-left md:text-right">
            <span className="font-serif italic text-xl sm:text-2xl text-blue-200/90 tracking-wide font-light">
              {t.services.headerTagline}
            </span>
          </div>
        </div>

        {/* Section Heading & Subtitle */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/60 border border-blue-800/40 text-blue-300 text-xs font-semibold tracking-wider uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5 text-blue-300" />
            <span>{t.services.tag}</span>
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-white tracking-tight leading-tight">
            {t.services.title}
          </h2>
          <p className="text-slate-300 text-base sm:text-lg mt-3 font-normal max-w-2xl leading-relaxed">
            {t.services.subtitle}
          </p>
        </div>

        {/* 5 Services Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {t.services.items.map((serviceItem) => {
            const icon = iconsMap[serviceItem.id] || <Code2 className="w-8 h-8 text-blue-300" />;
            const fullServiceData: ServiceItem = {
              ...serviceItem,
              icon,
            };

            return (
              <div
                key={serviceItem.id}
                onClick={() => onSelectService(fullServiceData)}
                className="group glass-card rounded-2xl p-6 sm:p-8 transition-all duration-300 hover:-translate-y-1.5 cursor-pointer flex flex-col justify-between relative overflow-hidden"
              >
                {/* Glow accent corner */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl group-hover:bg-blue-400/20 transition-all" />

                <div>
                  <div className="w-14 h-14 rounded-xl bg-slate-900/80 border border-blue-400/30 flex items-center justify-center mb-6 shadow-inner group-hover:border-blue-300 group-hover:shadow-[0_0_18px_rgba(59,130,246,0.4)] transition-all">
                    {icon}
                  </div>

                  <h3 className="text-xl sm:text-2xl font-serif font-bold text-slate-100 group-hover:text-blue-200 transition-colors leading-snug mb-3">
                    {serviceItem.title}
                  </h3>

                  <p className="text-slate-300/90 text-sm sm:text-base leading-relaxed line-clamp-3">
                    {serviceItem.description}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-blue-300 group-hover:text-white transition-colors">
                  <span>{t.services.learnDetails}</span>
                  <div className="w-7 h-7 rounded-full bg-blue-950/60 border border-blue-700/50 flex items-center justify-center group-hover:bg-blue-600 group-hover:border-blue-400 transition-all">
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Right Aligned */}
        <div className="flex justify-end pt-4">
          <button
            onClick={onExploreWork}
            className="group inline-flex items-center gap-3 px-7 py-3 rounded-full bg-slate-900/80 border border-blue-400/40 text-slate-100 font-sans font-semibold text-sm sm:text-base backdrop-blur-md shadow-[0_0_20px_rgba(59,130,246,0.2)] hover:shadow-[0_0_30px_rgba(59,130,246,0.6)] hover:border-blue-300 hover:text-white transition-all transform hover:-translate-y-0.5 cursor-pointer"
          >
            <span>{t.services.exploreWork}</span>
            <ArrowRight className="w-4 h-4 text-blue-300 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};
