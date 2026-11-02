import React from 'react';
import { X, Sparkles, ArrowRight } from 'lucide-react';
import { TranslationSchema } from '../translations';

interface ProjectsModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectProjectForQuote: (title: string) => void;
  t: TranslationSchema;
}

export const ProjectsModal: React.FC<ProjectsModalProps> = ({
  isOpen,
  onClose,
  onSelectProjectForQuote,
  t,
}) => {
  if (!isOpen) return null;

  const projectsList = [
    {
      id: 'elevate-saas',
      title: t.portfolio.laptopHeader,
      category: 'Enterprise AI & Real Estate',
      description: 'An AI-powered enterprise platform combining lead scoring, automated client portals, and real-time market data analytics.',
      metrics: ['+310% Lead Conversion', '4.2x Faster Deal Closing'],
      tech: ['React', 'TypeScript', 'Gemini AI API', 'Tailwind CSS'],
    },
    {
      id: 'beauty-wellness',
      title: t.portfolio.phoneHeader,
      category: 'E-Commerce & Smart Booking',
      description: 'Mobile-first booking and personalized skincare recommendation engine powered by automated consultation quizzes.',
      metrics: ['+185% Online Bookings', '$420k New Revenue'],
      tech: ['React Mobile', 'Stripe Integration', 'AI Consultation Engine'],
    },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/90 backdrop-blur-xl transition-all">
      <div className="relative w-full max-w-4xl bg-[#0b1329] border border-blue-400/30 rounded-3xl p-6 sm:p-8 shadow-2xl overflow-hidden glass-card max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-slate-900/80 text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer border border-slate-700/60"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/60 border border-blue-800/40 text-blue-300 text-xs font-semibold tracking-wider uppercase mb-2">
            <Sparkles className="w-3.5 h-3.5 text-blue-400" />
            <span>{t.portfolio.tag}</span>
          </div>
          <h3 className="font-serif font-bold text-3xl sm:text-4xl text-white">
            {t.modal.galleryTitle}
          </h3>
          <p className="text-slate-300 text-sm sm:text-base mt-2">
            {t.modal.gallerySub}
          </p>
        </div>

        <div className="space-y-6">
          {projectsList.map((project) => (
            <div
              key={project.id}
              className="bg-slate-900/70 border border-blue-900/50 rounded-2xl p-6 hover:border-blue-400/40 transition-all flex flex-col lg:flex-row justify-between gap-6"
            >
              <div className="flex-1 space-y-3">
                <div className="flex items-center gap-3">
                  <span className="px-2.5 py-0.5 rounded bg-blue-950 text-blue-300 text-xs font-semibold uppercase tracking-wider border border-blue-800">
                    {project.category}
                  </span>
                  <h4 className="font-serif font-bold text-xl text-white">
                    {project.title}
                  </h4>
                </div>

                <p className="text-slate-300 text-sm leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 pt-1">
                  {project.metrics.map((m, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 rounded-md bg-blue-950/60 border border-blue-800/50 text-xs font-semibold text-emerald-400"
                    >
                      ✓ {m}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-1.5 pt-1">
                  {project.tech.map((tItem, i) => (
                    <span
                      key={i}
                      className="px-2 py-0.5 rounded bg-slate-800 text-[11px] text-slate-300 font-mono"
                    >
                      {tItem}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-col justify-center items-start lg:items-end gap-3 shrink-0">
                <button
                  onClick={() => {
                    onClose();
                    onSelectProjectForQuote(`Build a platform like ${project.title}`);
                  }}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs uppercase tracking-wider shadow-md transition-all cursor-pointer"
                >
                  <span>{t.modal.buildSimilarBtn}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 pt-6 border-t border-slate-800 flex items-center justify-between">
          <button
            onClick={onClose}
            className="text-xs text-blue-300 hover:text-white font-medium cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
