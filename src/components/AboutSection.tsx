import { Language } from '../types';
import { translations } from '../data/translations';
import { Sparkles, Sun, Coffee, Trees, Users, CalendarCheck, ShieldCheck } from 'lucide-react';

interface AboutSectionProps {
  lang: Language;
}

export default function AboutSection({ lang }: AboutSectionProps) {
  const t = translations[lang];

  return (
    <section id="about" className="py-24 bg-[#FAF8F5] relative overflow-hidden">
      {/* Subtle Background Architectural Accent */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#E8E2D9] to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EBF2EE] text-[#1A402D] text-xs font-semibold tracking-wider uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#D4A373]" />
            <span>{t.about.badge}</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1A402D] font-bold tracking-tight mb-4 leading-tight">
            {t.about.title}
          </h2>
          <p className="text-lg text-[#665A4E] font-serif italic max-w-2xl mx-auto">
            "{t.about.subtitle}"
          </p>
        </div>

        {/* Editorial Asymmetric Layout (Images + Narrative) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-20">
          {/* Asymmetric Image Composition (Lg: 7 cols) */}
          <div className="lg:col-span-7 relative">
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-xl border-4 border-white aspect-4/3">
              <img
                src="/images/about-garden-courtyard.jpg"
                alt="Courtyard Garden at Villa Jnane Rabat"
                className="w-full h-full object-cover hover:scale-102 transition-transform duration-700"
              />
            </div>
            {/* Overlapping Secondary Image */}
            <div className="absolute -bottom-8 -end-4 sm:-end-8 w-2/3 sm:w-1/2 aspect-square rounded-2xl overflow-hidden shadow-2xl border-4 border-white z-20 hidden sm:block">
              <img
                src="/images/gallery-terrace-ambiance.jpg"
                alt="Terrace Ambiance Villa Jnane"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Ornamental Moroccan Geometric Accent Block */}
            <div className="absolute -top-6 -start-6 w-24 h-24 bg-[#EBF2EE] rounded-3xl -z-10 opacity-70" />
          </div>

          {/* Story Content Column (Lg: 5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-center space-y-6">
            <h3 className="font-serif text-2xl sm:text-3xl text-[#1A402D] font-semibold leading-snug">
              Une oasis de tranquillité gourmande
            </h3>
            <p className="text-[#665A4E] leading-relaxed text-base">
              {t.about.p1}
            </p>
            <p className="text-[#665A4E] leading-relaxed text-base">
              {t.about.p2}
            </p>

            {/* Quantifiable Highlights with [CAPACITY] Placeholder */}
            <div className="pt-4 border-t border-[#E8E2D9] grid grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-white border border-[#E8E2D9] shadow-xs">
                <div className="flex items-center gap-2 text-[#1A402D] mb-1">
                  <Users className="w-4 h-4 text-[#D4A373]" />
                  <span className="font-serif text-xl sm:text-2xl font-bold text-[#1A402D]">
                    {t.about.stats.capacityValue}
                  </span>
                </div>
                <p className="text-xs text-[#8C7A6B]">
                  {t.about.stats.capacityLabel}
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-[#E8E2D9] shadow-xs">
                <div className="flex items-center gap-2 text-[#1A402D] mb-1">
                  <CalendarCheck className="w-4 h-4 text-[#D4A373]" />
                  <span className="font-serif text-xl sm:text-2xl font-bold text-[#1A402D]">
                    {t.about.stats.establishedValue}
                  </span>
                </div>
                <p className="text-xs text-[#8C7A6B]">
                  {t.about.stats.establishedLabel}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Pillar Cards (Feature Highlights) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-3xl border border-[#E8E2D9] shadow-xs hover:shadow-md transition-all hover:-translate-y-1">
            <div className="w-12 h-12 rounded-2xl bg-[#EBF2EE] text-[#1A402D] flex items-center justify-center mb-6">
              <Sun className="w-6 h-6 text-[#1A402D]" />
            </div>
            <h4 className="font-serif text-xl font-bold text-[#1A402D] mb-3">
              {t.about.pillars.fusionTitle}
            </h4>
            <p className="text-sm text-[#665A4E] leading-relaxed">
              {t.about.pillars.fusionDesc}
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-[#E8E2D9] shadow-xs hover:shadow-md transition-all hover:-translate-y-1">
            <div className="w-12 h-12 rounded-2xl bg-[#EBF2EE] text-[#1A402D] flex items-center justify-center mb-6">
              <Trees className="w-6 h-6 text-[#1A402D]" />
            </div>
            <h4 className="font-serif text-xl font-bold text-[#1A402D] mb-3">
              {t.about.pillars.gardenTitle}
            </h4>
            <p className="text-sm text-[#665A4E] leading-relaxed">
              {t.about.pillars.gardenDesc}
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-[#E8E2D9] shadow-xs hover:shadow-md transition-all hover:-translate-y-1">
            <div className="w-12 h-12 rounded-2xl bg-[#EBF2EE] text-[#1A402D] flex items-center justify-center mb-6">
              <Coffee className="w-6 h-6 text-[#1A402D]" />
            </div>
            <h4 className="font-serif text-xl font-bold text-[#1A402D] mb-3">
              {t.about.pillars.artisanTitle}
            </h4>
            <p className="text-sm text-[#665A4E] leading-relaxed">
              {t.about.pillars.artisanDesc}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
