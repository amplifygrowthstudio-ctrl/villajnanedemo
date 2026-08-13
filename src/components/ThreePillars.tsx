import { Language } from '../types';
import { translations } from '../data/translations';
import { pillarsData } from '../data/pillarsData';
import {
  Sparkles,
  PartyPopper,
  Briefcase,
  Music,
  Check,
  Users,
  ArrowRight,
  ArrowLeft,
  Calendar,
} from 'lucide-react';

interface ThreePillarsProps {
  lang: Language;
  onOpenReservation: (pillarId?: string) => void;
}

export default function ThreePillars({
  lang,
  onOpenReservation,
}: ThreePillarsProps) {
  const t = translations[lang];
  const isRtl = lang === 'ar';

  const getIcon = (name: string) => {
    switch (name) {
      case 'PartyPopper':
        return <PartyPopper className="w-5 h-5 text-[#D4A373]" />;
      case 'Briefcase':
        return <Briefcase className="w-5 h-5 text-[#D4A373]" />;
      case 'Music':
        return <Music className="w-5 h-5 text-[#D4A373]" />;
      default:
        return <Sparkles className="w-5 h-5 text-[#D4A373]" />;
    }
  };

  return (
    <section id="pillars" className="py-24 bg-[#F2EDE4] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white text-[#1A402D] text-xs font-semibold tracking-wider uppercase mb-3 border border-[#E8E2D9]">
            <Sparkles className="w-3.5 h-3.5 text-[#D4A373]" />
            <span>{t.pillarsSection.badge}</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1A402D] font-bold tracking-tight mb-3">
            {t.pillarsSection.title}
          </h2>
          <p className="text-[#665A4E] text-base leading-relaxed">
            {t.pillarsSection.subtitle}
          </p>
        </div>

        {/* Editorial Asymmetric Pillar Layout */}
        <div className="space-y-10">
          {/* Pillar 1: Feature Hero Card (Full Width / Asymmetric Split) */}
          {pillarsData[0] && (
            <div className="bg-white rounded-3xl overflow-hidden border border-[#E8E2D9] shadow-sm hover:shadow-lg transition-all duration-500 grid grid-cols-1 lg:grid-cols-12 group">
              {/* Image Side */}
              <div className="lg:col-span-6 relative h-72 lg:h-auto min-h-[320px] overflow-hidden bg-[#1A402D]">
                <img
                  src={pillarsData[0].image}
                  alt={pillarsData[0].title[lang]}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-95"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent lg:hidden" />
                <div className="absolute top-4 start-4 px-3.5 py-1.5 rounded-full bg-[#1A402D]/90 backdrop-blur-md text-white text-xs font-medium border border-white/20 flex items-center gap-2">
                  {getIcon(pillarsData[0].iconName)}
                  <span>{pillarsData[0].capacity?.[lang]}</span>
                </div>
              </div>

              {/* Content Side */}
              <div className="lg:col-span-6 p-8 sm:p-12 flex flex-col justify-between">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EBF2EE] text-[#1A402D] text-xs font-semibold uppercase tracking-wider mb-4">
                    {getIcon(pillarsData[0].iconName)}
                    <span>Villa Jnane Experience</span>
                  </div>

                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#1A402D] mb-2 group-hover:text-[#D4A373] transition-colors">
                    {pillarsData[0].title[lang]}
                  </h3>

                  {pillarsData[0].subtitle && (
                    <p className="text-sm font-medium text-[#D4A373] mb-4">
                      {pillarsData[0].subtitle[lang]}
                    </p>
                  )}

                  <p className="text-sm text-[#665A4E] leading-relaxed mb-6">
                    {pillarsData[0].description[lang]}
                  </p>

                  {/* Feature Checkmarks List */}
                  {pillarsData[0].features && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8 pt-4 border-t border-[#F2EDE4]">
                      {pillarsData[0].features.map((feat, idx) => (
                        <div key={idx} className="flex items-start gap-2.5 text-xs text-[#2C2825]">
                          <div className="w-4 h-4 rounded-full bg-[#EBF2EE] text-[#1A402D] flex items-center justify-center shrink-0 mt-0.5">
                            <Check className="w-2.5 h-2.5 stroke-[3]" />
                          </div>
                          <span>{feat[lang]}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <button
                  onClick={() => onOpenReservation(pillarsData[0].id)}
                  className="inline-flex items-center justify-center gap-2.5 bg-[#1A402D] hover:bg-[#122E20] text-white px-7 py-3.5 rounded-full text-sm font-medium tracking-wide shadow-sm transition-all self-start group/btn"
                >
                  <Calendar className="w-4 h-4 text-[#D4A373]" />
                  <span>{t.pillarsSection.ctaBookPillar}</span>
                  {isRtl ? (
                    <ArrowLeft className="w-4 h-4 text-[#D4A373] group-hover/btn:-translate-x-1 transition-transform" />
                  ) : (
                    <ArrowRight className="w-4 h-4 text-[#D4A373] group-hover/btn:translate-x-1 transition-transform" />
                  )}
                </button>
              </div>
            </div>
          )}

          {/* Pillars 2 & 3: Asymmetric 2-Column Row (5 cols & 7 cols for editorial variety) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Pillar 2 (Business Space - 5 cols) */}
            {pillarsData[1] && (
              <div className="lg:col-span-5 bg-white rounded-3xl p-8 border border-[#E8E2D9] shadow-sm hover:shadow-lg transition-all duration-500 flex flex-col justify-between group">
                <div>
                  <div className="relative h-48 rounded-2xl overflow-hidden mb-6 bg-[#1A402D]">
                    <img
                      src={pillarsData[1].image}
                      alt={pillarsData[1].title[lang]}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute top-3 start-3 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-white text-[11px] font-medium flex items-center gap-1.5 border border-white/20">
                      <Users className="w-3 h-3 text-[#D4A373]" />
                      <span>{pillarsData[1].capacity?.[lang]}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 mb-2">
                    {getIcon(pillarsData[1].iconName)}
                    <h3 className="font-serif text-xl font-bold text-[#1A402D] group-hover:text-[#D4A373] transition-colors">
                      {pillarsData[1].title[lang]}
                    </h3>
                  </div>

                  <p className="text-xs font-semibold text-[#D4A373] mb-3">
                    {pillarsData[1].subtitle?.[lang]}
                  </p>

                  <p className="text-xs text-[#665A4E] leading-relaxed mb-6">
                    {pillarsData[1].description[lang]}
                  </p>

                  {/* Feature Checkmarks List */}
                  {pillarsData[1].features && (
                    <div className="space-y-2 mb-8 pt-4 border-t border-[#F2EDE4]">
                      {pillarsData[1].features.map((feat, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-[#2C2825]">
                          <div className="w-3.5 h-3.5 rounded-full bg-[#EBF2EE] text-[#1A402D] flex items-center justify-center shrink-0 mt-0.5">
                            <Check className="w-2.5 h-2.5 stroke-[3]" />
                          </div>
                          <span>{feat[lang]}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <button
                  onClick={() => onOpenReservation(pillarsData[1].id)}
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#F2EDE4] hover:bg-[#1A402D] hover:text-white text-[#1A402D] px-5 py-3 rounded-2xl text-xs font-semibold transition-all group/btn"
                >
                  <span>{t.pillarsSection.ctaBookPillar}</span>
                  {isRtl ? (
                    <ArrowLeft className="w-3.5 h-3.5 text-[#D4A373] group-hover/btn:-translate-x-1 transition-transform" />
                  ) : (
                    <ArrowRight className="w-3.5 h-3.5 text-[#D4A373] group-hover/btn:translate-x-1 transition-transform" />
                  )}
                </button>
              </div>
            )}

            {/* Pillar 3 (Themed Evening Nights - 7 cols) */}
            {pillarsData[2] && (
              <div className="lg:col-span-7 bg-[#1A402D] text-white rounded-3xl p-8 sm:p-10 border border-[#26533C] shadow-sm hover:shadow-lg transition-all duration-500 flex flex-col justify-between group relative overflow-hidden">
                {/* Background image tint overlay */}
                <div className="absolute inset-0 opacity-20 pointer-events-none">
                  <img
                    src={pillarsData[2].image}
                    alt={pillarsData[2].title[lang]}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>

                <div className="relative z-10">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[#D4A373] text-xs font-semibold uppercase tracking-wider mb-4 border border-white/15">
                    {getIcon(pillarsData[2].iconName)}
                    <span>{pillarsData[2].capacity?.[lang]}</span>
                  </div>

                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-2 group-hover:text-[#D4A373] transition-colors">
                    {pillarsData[2].title[lang]}
                  </h3>

                  <p className="text-sm font-medium text-[#D4A373] mb-4">
                    {pillarsData[2].subtitle?.[lang]}
                  </p>

                  <p className="text-sm text-white/80 leading-relaxed mb-6 font-light">
                    {pillarsData[2].description[lang]}
                  </p>

                  {/* Features */}
                  {pillarsData[2].features && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8 pt-4 border-t border-white/10">
                      {pillarsData[2].features.map((feat, idx) => (
                        <div key={idx} className="flex items-start gap-2.5 text-xs text-white/90">
                          <div className="w-4 h-4 rounded-full bg-[#D4A373]/20 text-[#D4A373] flex items-center justify-center shrink-0 mt-0.5">
                            <Check className="w-2.5 h-2.5 stroke-[3]" />
                          </div>
                          <span>{feat[lang]}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <div className="relative z-10 pt-4 border-t border-white/10">
                  <button
                    onClick={() => onOpenReservation(pillarsData[2].id)}
                    className="inline-flex items-center justify-center gap-2.5 bg-[#D4A373] hover:bg-[#c29363] text-[#1A402D] px-7 py-3.5 rounded-full text-sm font-bold tracking-wide shadow-sm transition-all group/btn"
                  >
                    <Calendar className="w-4 h-4" />
                    <span>{t.pillarsSection.ctaBookPillar}</span>
                    {isRtl ? (
                      <ArrowLeft className="w-4 h-4 group-hover/btn:-translate-x-1 transition-transform" />
                    ) : (
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    )}
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
