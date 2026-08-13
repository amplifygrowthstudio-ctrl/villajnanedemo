import { Language } from '../types';
import { translations } from '../data/translations';
import { menuCategories, categoryImages, menuItems } from '../data/menuData';
import { Utensils, ArrowRight, ArrowLeft, Sparkles } from 'lucide-react';

interface MenuPreviewProps {
  lang: Language;
  onOpenFullMenu: (categoryId?: string) => void;
}

export default function MenuPreview({
  lang,
  onOpenFullMenu,
}: MenuPreviewProps) {
  const t = translations[lang];
  const isRtl = lang === 'ar';

  const getCategoryCount = (catId: string) => {
    return menuItems.filter((item) => item.category === catId).length;
  };

  return (
    <section id="menu-preview" className="py-24 bg-[#F2EDE4] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white text-[#1A402D] text-xs font-semibold tracking-wider uppercase mb-3 border border-[#E8E2D9]">
              <Sparkles className="w-3.5 h-3.5 text-[#D4A373]" />
              <span>{t.menu.badge}</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1A402D] font-bold tracking-tight">
              {t.menu.previewTitle}
            </h2>
            <p className="text-[#665A4E] text-base mt-2 max-w-xl">
              {t.menu.previewSubtitle}
            </p>
          </div>

          <button
            onClick={() => onOpenFullMenu()}
            className="inline-flex items-center gap-2.5 bg-[#1A402D] hover:bg-[#122E20] text-white px-6 py-3.5 rounded-full text-sm font-medium tracking-wide shadow-sm transition-all shrink-0 self-start md:self-end group"
          >
            <span>{t.menu.allCategories}</span>
            {isRtl ? (
              <ArrowLeft className="w-4 h-4 text-[#D4A373] group-hover:-translate-x-1 transition-transform" />
            ) : (
              <ArrowRight className="w-4 h-4 text-[#D4A373] group-hover:translate-x-1 transition-transform" />
            )}
          </button>
        </div>

        {/* Editorial Asymmetric Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {menuCategories.map((category, idx) => {
            const count = getCategoryCount(category.id);
            const bgImg = categoryImages[category.id] || '/images/menu-tajine-fusion.jpg';

            // Editorial grid span logic:
            // First 2 categories take 7 cols and 5 cols
            // Next 3 categories take 4 cols each or 6 cols
            const spanClass =
              idx === 0
                ? 'md:col-span-7 h-[380px]'
                : idx === 1
                ? 'md:col-span-5 h-[380px]'
                : idx === 2
                ? 'md:col-span-4 h-[320px]'
                : idx === 3
                ? 'md:col-span-4 h-[320px]'
                : 'md:col-span-4 h-[320px]';

            return (
              <div
                key={category.id}
                onClick={() => onOpenFullMenu(category.id)}
                className={`group relative rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer border border-white/60 ${spanClass}`}
              >
                {/* Background Image */}
                <img
                  src={bgImg}
                  alt={category.name[lang]}
                  className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-700"
                />

                {/* Gradient Gradient Mask */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/10 group-hover:from-black/90 transition-colors" />

                {/* Item Count Badge */}
                <div className="absolute top-5 end-5 z-10 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white text-xs font-medium border border-white/30 flex items-center gap-1.5">
                  <Utensils className="w-3 h-3 text-[#D4A373]" />
                  <span>
                    {count} {t.menu.itemsCount}
                  </span>
                </div>

                {/* Category Card Text Content */}
                <div className="absolute inset-x-0 bottom-0 z-10 p-6 sm:p-8 flex flex-col justify-end text-white">
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold mb-2 group-hover:text-[#D4A373] transition-colors">
                    {category.name[lang]}
                  </h3>
                  {category.description && (
                    <p className="text-xs sm:text-sm text-white/80 line-clamp-2 font-light leading-relaxed mb-4">
                      {category.description[lang]}
                    </p>
                  )}

                  <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#D4A373] group-hover:underline">
                    <span>{t.menu.exploreCategory}</span>
                    {isRtl ? (
                      <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
                    ) : (
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
