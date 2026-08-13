import { Language } from '../types';
import { translations } from '../data/translations';
import { Calendar, UtensilsCrossed, Clock, ChevronDown } from 'lucide-react';

interface HeroProps {
  lang: Language;
  onOpenReservation: () => void;
  onNavigateToMenu: () => void;
}

export default function Hero({
  lang,
  onOpenReservation,
  onNavigateToMenu,
}: HeroProps) {
  const t = translations[lang];

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero-garden-terrace.jpg"
          alt="Villa Jnane Garden Terrace in Rabat"
          className="w-full h-full object-cover object-center scale-105 transition-transform duration-1000"
        />
        {/* Dark Gradient Overlay for optimal text legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#141210] via-black/50 to-black/40" />
      </div>

      {/* Main Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white py-20 flex flex-col items-center">
        {/* Hours & Location Pill */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white/90 text-xs sm:text-sm font-medium tracking-wide mb-8 shadow-md animate-fade-in">
          <Clock className="w-4 h-4 text-[#D4A373]" />
          <span>{t.hero.badge}</span>
        </div>

        {/* Hero Main Headline */}
        <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6 leading-tight drop-shadow-sm max-w-4xl">
          {t.hero.title}
        </h1>

        {/* Hero Subtitle */}
        <p className="text-lg sm:text-xl text-white/90 max-w-2xl font-light leading-relaxed mb-10 text-balance">
          {t.hero.subtitle}
        </p>

        {/* Action CTAs */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <button
            id="hero-reserve-cta"
            onClick={onOpenReservation}
            className="w-full sm:w-auto flex items-center justify-center gap-3 bg-[#D4A373] hover:bg-[#C29263] text-[#1A402D] px-8 py-4 rounded-full text-base font-semibold tracking-wide shadow-lg transition-all transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <Calendar className="w-5 h-5 text-[#1A402D]" />
            <span>{t.hero.ctaReserve}</span>
          </button>

          <button
            id="hero-menu-cta"
            onClick={onNavigateToMenu}
            className="w-full sm:w-auto flex items-center justify-center gap-3 bg-white/15 hover:bg-white/25 text-white border border-white/30 backdrop-blur-md px-8 py-4 rounded-full text-base font-medium tracking-wide shadow-sm transition-all"
          >
            <UtensilsCrossed className="w-5 h-5 text-[#D4A373]" />
            <span>{t.hero.ctaMenu}</span>
          </button>
        </div>

        {/* Operating Hours Banner */}
        <div className="mt-12 text-xs text-white/70 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          <span>{t.hero.hoursBadge}</span>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={onNavigateToMenu}
        aria-label="Scroll down"
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-10 text-white/70 hover:text-white transition-colors animate-bounce p-2"
      >
        <ChevronDown className="w-8 h-8" />
      </button>
    </section>
  );
}
