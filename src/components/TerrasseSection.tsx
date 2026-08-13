import { Language } from '../types';
import { translations } from '../data/translations';
import { Sparkles, Calendar, Wind, ShieldCheck, Droplets, ArrowRight, ArrowLeft } from 'lucide-react';

interface TerrasseSectionProps {
  lang: Language;
  onOpenReservation: (seatingPreference?: string) => void;
}

export default function TerrasseSection({
  lang,
  onOpenReservation,
}: TerrasseSectionProps) {
  const t = translations[lang];
  const isRtl = lang === 'ar';

  return (
    <section id="terrasse" className="relative py-28 bg-[#1A402D] text-white overflow-hidden">
      {/* Immersive Full-Width Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero-garden-terrace.jpg"
          alt="Terrasse Jardin Villa Jnane Rabat"
          className="w-full h-full object-cover object-center filter brightness-[0.45] scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-[#D4A373] text-xs font-semibold tracking-wider uppercase mb-6 backdrop-blur-md border border-white/20">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t.terrasseSection.badge}</span>
          </div>

          {/* Heading */}
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4 leading-tight">
            {t.terrasseSection.title}
          </h2>

          <p className="text-[#D4A373] text-lg font-medium mb-6">
            {t.terrasseSection.subtitle}
          </p>

          <p className="text-white/90 text-sm sm:text-base leading-relaxed mb-8 font-light max-w-xl">
            {t.terrasseSection.description}
          </p>

          {/* Atmosphere Highlights */}
          <div className="space-y-3 mb-10 border-s-2 border-[#D4A373] ps-4">
            <div className="flex items-center gap-3 text-xs sm:text-sm text-white/90">
              <Wind className="w-4 h-4 text-[#D4A373] shrink-0" />
              <span>{t.terrasseSection.features.shade}</span>
            </div>
            <div className="flex items-center gap-3 text-xs sm:text-sm text-white/90">
              <ShieldCheck className="w-4 h-4 text-[#D4A373] shrink-0" />
              <span>{t.terrasseSection.features.calm}</span>
            </div>
            <div className="flex items-center gap-3 text-xs sm:text-sm text-white/90">
              <Droplets className="w-4 h-4 text-[#D4A373] shrink-0" />
              <span>{t.terrasseSection.features.fountain}</span>
            </div>
          </div>

          {/* Single CTA Button */}
          <button
            onClick={() => onOpenReservation('garden')}
            className="inline-flex items-center gap-3 bg-[#D4A373] hover:bg-[#c29363] text-[#1A402D] px-8 py-4 rounded-full text-sm font-bold tracking-wide shadow-lg hover:shadow-xl transition-all group"
          >
            <Calendar className="w-4 h-4" />
            <span>{t.terrasseSection.ctaReserveTerrasse}</span>
            {isRtl ? (
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            ) : (
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            )}
          </button>
        </div>
      </div>
    </section>
  );
}
