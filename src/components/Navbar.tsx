import React, { useState, useEffect, useRef } from 'react';
import { VILogo } from './VILogo';
import { Menu, X, ArrowRight, Globe, ChevronDown, Check } from 'lucide-react';
import { Language, TranslationSchema } from '../translations';

interface NavbarProps {
  currentLang: Language;
  onLanguageChange: (lang: Language) => void;
  t: TranslationSchema;
  onOpenContact: () => void;
}

const languages: { code: Language; name: string; flag: string }[] = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'zh', name: '中文 (Mandarin)', flag: '🇨🇳' },
  { code: 'es', name: 'Español', flag: '🇪🇸' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
];

export const Navbar: React.FC<NavbarProps> = ({
  currentLang,
  onLanguageChange,
  t,
  onOpenContact,
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const langDropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        langDropdownRef.current &&
        !langDropdownRef.current.contains(event.target as Node)
      ) {
        setLangDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const navLinks = [
    { label: t.nav.services, href: '#services' },
    { label: t.nav.portfolio, href: '#portfolio' },
    { label: t.nav.whyUs, href: '#why-us' },
    { label: t.nav.growth, href: '#growth' },
    { label: t.nav.contact, href: '#contact' },
  ];

  const currentLangObj = languages.find((l) => l.code === currentLang) || languages[0];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#030712]/85 backdrop-blur-md border-b border-blue-900/40 py-3 shadow-lg shadow-black/40'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-6">
          {/* Zone 1: Brand Wordmark */}
          <a
            href="#"
            className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 rounded-lg p-1"
          >
            <VILogo
              size="sm"
              horizontal
              showSubtitle={true}
              customName={t.brandName}
              customSub={t.brandSubtitle}
            />
          </a>

          {/* Zone 2: Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-300">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-blue-300 transition-colors whitespace-nowrap shrink-0 hover:drop-shadow-[0_0_8px_rgba(147,197,253,0.5)]"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: Language Selector & Primary Action */}
          <div className="hidden md:flex items-center gap-4 shrink-0">
            {/* Language Switcher Dropdown */}
            <div className="relative" ref={langDropdownRef}>
              <button
                onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                className="inline-flex items-center gap-2 px-3 py-1.5 text-xs font-semibold text-slate-200 bg-slate-900/80 hover:bg-slate-800 rounded-full border border-blue-400/30 backdrop-blur-md shadow-sm transition-all cursor-pointer"
                aria-label="Select Language"
              >
                <Globe className="w-3.5 h-3.5 text-blue-400" />
                <span>{currentLangObj.flag}</span>
                <span className="uppercase">{currentLangObj.code}</span>
                <ChevronDown className="w-3 h-3 text-slate-400" />
              </button>

              {langDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-[#0b1329] border border-blue-400/40 rounded-2xl shadow-2xl p-2 z-50 glass-card animate-float">
                  <div className="text-[10px] font-semibold text-blue-300 uppercase tracking-wider px-3 py-1 border-b border-slate-800/80 mb-1">
                    Select Language / 语言
                  </div>
                  <div className="space-y-1">
                    {languages.map((lang) => {
                      const isSelected = lang.code === currentLang;
                      return (
                        <button
                          key={lang.code}
                          onClick={() => {
                            onLanguageChange(lang.code);
                            setLangDropdownOpen(false);
                          }}
                          className={`w-full flex items-center justify-between px-3 py-2 text-xs rounded-xl transition-all cursor-pointer ${
                            isSelected
                              ? 'bg-blue-600/30 text-white font-bold border border-blue-400/40'
                              : 'text-slate-300 hover:bg-slate-800/80 hover:text-white'
                          }`}
                        >
                          <div className="flex items-center gap-2">
                            <span>{lang.flag}</span>
                            <span>{lang.name}</span>
                          </div>
                          {isSelected && <Check className="w-3.5 h-3.5 text-blue-400" />}
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            {/* Primary CTA Button */}
            <button
              onClick={onOpenContact}
              className="inline-flex items-center gap-2 px-5 py-2 text-xs font-semibold tracking-wider uppercase text-white bg-blue-600/90 hover:bg-blue-500 rounded-full border border-blue-400/40 shadow-[0_0_15px_rgba(59,130,246,0.5)] hover:shadow-[0_0_22px_rgba(59,130,246,0.8)] transition-all transform hover:-translate-y-0.5 whitespace-nowrap cursor-pointer"
            >
              <span>{t.nav.getStarted}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Menu & Language Toggle */}
          <div className="flex items-center gap-2 md:hidden">
            {/* Mobile Language Switcher button */}
            <div className="relative" ref={langDropdownRef}>
              <button
                onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                className="flex items-center gap-1.5 px-2.5 py-1.5 text-xs text-slate-200 bg-slate-900/90 border border-blue-400/30 rounded-full"
              >
                <span>{currentLangObj.flag}</span>
                <span className="uppercase text-[11px] font-bold">{currentLangObj.code}</span>
              </button>
              {langDropdownOpen && (
                <div className="absolute right-0 mt-2 w-44 bg-[#0b1329] border border-blue-400/40 rounded-2xl shadow-2xl p-2 z-50 glass-card">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        onLanguageChange(lang.code);
                        setLangDropdownOpen(false);
                      }}
                      className={`w-full flex items-center gap-2 px-3 py-2 text-xs rounded-xl ${
                        lang.code === currentLang ? 'bg-blue-600 text-white font-bold' : 'text-slate-300'
                      }`}
                    >
                      <span>{lang.flag}</span>
                      <span>{lang.name}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-300 hover:text-white rounded-lg focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0a0f1d]/95 backdrop-blur-xl border-b border-blue-900/50 px-4 pt-4 pb-6 mt-3 space-y-4 shadow-2xl">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-slate-200 hover:text-blue-300 py-2 border-b border-slate-800/60"
              >
                {link.label}
              </a>
            ))}
          </div>

          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenContact();
            }}
            className="w-full flex items-center justify-center gap-2 px-5 py-3 text-xs font-semibold tracking-wider uppercase text-white bg-blue-600 hover:bg-blue-500 rounded-full border border-blue-400/50 shadow-lg"
          >
            <span>{t.nav.getStarted}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      )}
    </header>
  );
};
