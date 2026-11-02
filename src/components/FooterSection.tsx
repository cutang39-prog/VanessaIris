import React from 'react';
import { VILogo } from './VILogo';
import { ArrowRight, Mail, Phone, Globe } from 'lucide-react';
import { TranslationSchema } from '../translations';

interface FooterSectionProps {
  t: TranslationSchema;
  onOpenContact: () => void;
}

export const FooterSection: React.FC<FooterSectionProps> = ({ t, onOpenContact }) => {
  return (
    <footer id="contact" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-grid-6 bg-cover bg-center overflow-hidden">
      <div className="absolute inset-0 bg-[#030712]/85 pointer-events-none" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-blue-500/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col items-center text-center">
        <div className="mb-8 transform hover:scale-105 transition-transform duration-500 cursor-pointer">
          <VILogo
            size="xl"
            showSubtitle={true}
            customName={t.brandName}
            customSub={t.brandSubtitle}
          />
        </div>

        <h2 className="font-serif italic text-3xl sm:text-5xl md:text-6xl text-slate-100 font-light tracking-wide max-w-3xl leading-tight mb-8 drop-shadow-[0_4px_25px_rgba(59,130,246,0.5)]">
          {t.footer.headline}
        </h2>

        <div className="mb-16">
          <button
            onClick={onOpenContact}
            className="group relative inline-flex items-center gap-3 px-8 py-3.5 rounded-full bg-slate-900/80 border border-blue-400/40 text-blue-100 font-sans font-semibold text-base sm:text-lg backdrop-blur-md shadow-[0_0_25px_rgba(59,130,246,0.3)] hover:shadow-[0_0_40px_rgba(59,130,246,0.8)] hover:border-blue-300 hover:text-white transition-all transform hover:-translate-y-1 cursor-pointer"
          >
            <span>{t.footer.cta}</span>
            <ArrowRight className="w-5 h-5 text-blue-300 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 pt-12 border-t border-blue-900/40 max-w-4xl mb-12">
          <div className="glass-card p-5 rounded-2xl flex flex-col items-center text-center">
            <div className="w-10 h-10 rounded-full bg-blue-950/80 border border-blue-700/50 flex items-center justify-center text-blue-300 mb-3">
              <Mail className="w-5 h-5" />
            </div>
            <div className="text-xs text-blue-300 uppercase tracking-wider font-semibold mb-1">
              {t.footer.inquiriesTitle}
            </div>
            <a href="mailto:hello@vanessa-iris.agency" className="text-sm font-medium text-slate-200 hover:text-white transition-colors">
              hello@vanessa-iris.agency
            </a>
          </div>

          <div className="glass-card p-5 rounded-2xl flex flex-col items-center text-center">
            <div className="w-10 h-10 rounded-full bg-blue-950/80 border border-blue-700/50 flex items-center justify-center text-blue-300 mb-3">
              <Phone className="w-5 h-5" />
            </div>
            <div className="text-xs text-blue-300 uppercase tracking-wider font-semibold mb-1">
              {t.footer.callTitle}
            </div>
            <a href="tel:+18005550199" className="text-sm font-medium text-slate-200 hover:text-white transition-colors">
              +1 (800) 555-0199
            </a>
          </div>

          <div className="glass-card p-5 rounded-2xl flex flex-col items-center text-center">
            <div className="w-10 h-10 rounded-full bg-blue-950/80 border border-blue-700/50 flex items-center justify-center text-blue-300 mb-3">
              <Globe className="w-5 h-5" />
            </div>
            <div className="text-xs text-blue-300 uppercase tracking-wider font-semibold mb-1">
              {t.footer.globalTitle}
            </div>
            <span className="text-sm font-medium text-slate-200">
              {t.footer.globalLocs}
            </span>
          </div>
        </div>

        <div className="w-full flex flex-col sm:flex-row items-center justify-between text-xs text-slate-300 pt-8 border-t border-slate-900 gap-4">
          <div className="flex items-center gap-2">
            <span className="font-semibold tracking-wider text-slate-200">{t.brandName}</span>
            <span>·</span>
            <span>{t.footer.copyright}</span>
          </div>
          <div className="flex items-center gap-6">
            <a href="#services" className="hover:text-blue-300 transition-colors">{t.footer.links.services}</a>
            <a href="#portfolio" className="hover:text-blue-300 transition-colors">{t.footer.links.portfolio}</a>
            <a href="#why-us" className="hover:text-blue-300 transition-colors">{t.footer.links.whyUs}</a>
            <button onClick={onOpenContact} className="hover:text-blue-300 transition-colors cursor-pointer">{t.footer.links.privacy}</button>
          </div>
        </div>
      </div>
    </footer>
  );
};
