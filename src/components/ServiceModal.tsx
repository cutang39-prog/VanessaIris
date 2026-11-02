import React from 'react';
import { X, CheckCircle2, ArrowRight, Sparkles, Cpu, Layers } from 'lucide-react';
import { ServiceItem } from './ServicesSection';
import { TranslationSchema } from '../translations';

interface ServiceModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onSelectForQuote: (serviceTitle: string) => void;
  t: TranslationSchema;
}

export const ServiceModal: React.FC<ServiceModalProps> = ({
  service,
  onClose,
  onSelectForQuote,
  t,
}) => {
  if (!service) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/85 backdrop-blur-xl transition-all">
      <div className="relative w-full max-w-2xl bg-[#0b1329] border border-blue-400/30 rounded-3xl p-6 sm:p-8 shadow-2xl overflow-hidden glass-card max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-slate-900/80 text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer border border-slate-700/60"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-start gap-4 mb-6">
          <div className="w-14 h-14 rounded-2xl bg-blue-950 border border-blue-400/40 flex items-center justify-center shrink-0 shadow-lg">
            {service.icon}
          </div>
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs text-blue-300 font-semibold uppercase tracking-wider mb-1">
              <Sparkles className="w-3.5 h-3.5 text-blue-400" />
              <span>{t.modal.specTitle}</span>
            </div>
            <h3 className="font-serif font-bold text-2xl sm:text-3xl text-white leading-tight">
              {service.title}
            </h3>
          </div>
        </div>

        <p className="text-slate-300 text-base leading-relaxed mb-6">
          {service.description}
        </p>

        <div className="bg-gradient-to-r from-blue-950/90 to-indigo-950/90 border border-blue-400/30 p-4 rounded-xl mb-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs text-slate-300 font-medium">Metric:</span>
          </div>
          <span className="text-sm font-bold text-blue-200 font-sans">
            {service.impactMetric}
          </span>
        </div>

        <div className="space-y-4 mb-6">
          <h4 className="text-xs font-semibold uppercase tracking-wider text-blue-300 flex items-center gap-2">
            <Layers className="w-4 h-4 text-blue-400" />
            <span>{t.modal.deliverablesTitle}</span>
          </h4>
          <ul className="space-y-2.5">
            {service.details.map((detail, idx) => (
              <li key={idx} className="flex items-start gap-3 text-slate-200 text-sm">
                <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <span>{detail}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mb-8">
          <h4 className="text-xs font-semibold uppercase tracking-wider text-blue-300 flex items-center gap-2 mb-2">
            <Cpu className="w-4 h-4 text-blue-400" />
            <span>{t.modal.techTitle}</span>
          </h4>
          <div className="flex flex-wrap gap-2">
            {service.techStack.map((tech, idx) => (
              <span
                key={idx}
                className="px-3 py-1 rounded-lg bg-slate-900 border border-slate-700/80 text-xs font-medium text-slate-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <button
            onClick={() => {
              onClose();
              onSelectForQuote(service.title);
            }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm shadow-lg transition-all cursor-pointer"
          >
            <span>{t.modal.requestPropBtn}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
