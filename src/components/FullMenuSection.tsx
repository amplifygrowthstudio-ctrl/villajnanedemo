import { useState, useMemo } from 'react';
import { Language } from '../types';
import { translations } from '../data/translations';
import { menuCategories, menuItems } from '../data/menuData';
import { useCart } from '../context/CartContext';
import { Search, Sparkles, Star, Leaf, Award, Plus, Minus, ShoppingBag } from 'lucide-react';

interface FullMenuSectionProps {
  lang: Language;
  selectedCategoryId?: string;
  onSelectCategory: (catId: string | undefined) => void;
}

export default function FullMenuSection({
  lang,
  selectedCategoryId,
  onSelectCategory,
}: FullMenuSectionProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const t = translations[lang];
  const { addItem, decrementQty, getItemQuantity } = useCart();

  // Filter items based on active category and search query
  const filteredItems = useMemo(() => {
    return menuItems.filter((item) => {
      const matchesCategory =
        !selectedCategoryId || item.category === selectedCategoryId;

      const q = searchQuery.toLowerCase().trim();
      if (!q) return matchesCategory;

      const nameMatch =
        item.name[lang].toLowerCase().includes(q) ||
        item.name.fr.toLowerCase().includes(q) ||
        item.name.en.toLowerCase().includes(q);

      const descMatch =
        item.description[lang].toLowerCase().includes(q) ||
        item.description.fr.toLowerCase().includes(q);

      return matchesCategory && (nameMatch || descMatch);
    });
  }, [selectedCategoryId, searchQuery, lang]);

  return (
    <section
      id="full-menu-container"
      className="py-24 bg-[#FAF8F5] border-t border-[#E8E2D9]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EBF2EE] text-[#1A402D] text-xs font-semibold tracking-wider uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#D4A373]" />
            <span>{t.menu.badge}</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1A402D] font-bold tracking-tight mb-3">
            {t.menu.title}
          </h2>
          <p className="text-[#665A4E] text-base leading-relaxed">
            {t.menu.subtitle}
          </p>
        </div>

        {/* Filter Controls Bar (Category Pills + Search Box) */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 mb-12 bg-white p-4 sm:p-6 rounded-3xl border border-[#E8E2D9] shadow-xs">
          {/* Category Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto w-full lg:w-auto pb-2 lg:pb-0 scrollbar-none">
            <button
              onClick={() => onSelectCategory(undefined)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all shrink-0 ${
                !selectedCategoryId
                  ? 'bg-[#1A402D] text-white shadow-xs'
                  : 'bg-[#F2EDE4] text-[#665A4E] hover:text-[#2C2825] hover:bg-[#E8E2D9]'
              }`}
            >
              {t.menu.allCategories}
            </button>

            {menuCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => onSelectCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all shrink-0 ${
                  selectedCategoryId === cat.id
                    ? 'bg-[#1A402D] text-white shadow-xs'
                    : 'bg-[#F2EDE4] text-[#665A4E] hover:text-[#2C2825] hover:bg-[#E8E2D9]'
                }`}
              >
                {cat.name[lang]}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full lg:w-72 shrink-0">
            <Search className="w-4 h-4 text-[#8C7A6B] absolute start-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t.menu.searchPlaceholder}
              className="w-full ps-10 pe-4 py-2.5 text-xs sm:text-sm bg-[#F2EDE4] rounded-full border border-[#E0D8CC] focus:outline-hidden focus:ring-2 focus:ring-[#1A402D]/30 focus:border-[#1A402D] transition-all placeholder:text-[#8C7A6B]"
            />
          </div>
        </div>

        {/* Menu Items Grid */}
        {filteredItems.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-3xl p-6 border border-[#E8E2D9] shadow-xs hover:shadow-md transition-all flex flex-col sm:flex-row gap-6 items-start group"
              >
                {/* Item Thumbnail */}
                {item.image && (
                  <div className="w-full sm:w-36 h-36 shrink-0 rounded-2xl overflow-hidden relative bg-[#F2EDE4]">
                    <img
                      src={item.image}
                      alt={item.name[lang]}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {item.isSignature && (
                      <div className="absolute top-2 start-2 bg-[#1A402D] text-[#D4A373] p-1.5 rounded-lg shadow-sm">
                        <Award className="w-3.5 h-3.5" />
                      </div>
                    )}
                  </div>
                )}

                {/* Item Info */}
                <div className="flex-1 flex flex-col justify-between h-full w-full">
                  <div>
                    {/* Badges Bar */}
                    <div className="flex flex-wrap items-center gap-1.5 mb-2">
                      {item.isSignature && (
                        <span className="px-2.5 py-0.5 rounded-full bg-[#EBF2EE] text-[#1A402D] text-[10px] font-semibold tracking-wider flex items-center gap-1">
                          <Award className="w-3 h-3 text-[#D4A373]" />
                          {t.menu.badges.signature}
                        </span>
                      )}
                      {item.tags?.includes('Populaire') && (
                        <span className="px-2.5 py-0.5 rounded-full bg-[#FFF5EB] text-[#C26200] text-[10px] font-semibold tracking-wider flex items-center gap-1">
                          <Star className="w-3 h-3 text-[#D4A373]" />
                          {t.menu.badges.popular}
                        </span>
                      )}
                      {item.tags?.includes('Végétarien') && (
                        <span className="px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-800 text-[10px] font-semibold tracking-wider flex items-center gap-1">
                          <Leaf className="w-3 h-3 text-emerald-600" />
                          {t.menu.badges.vegetarian}
                        </span>
                      )}
                    </div>

                    {/* Title & Price Header */}
                    <div className="flex items-start justify-between gap-4 mb-2">
                      <h3 className="font-serif text-xl font-bold text-[#1A402D] leading-snug group-hover:text-[#D4A373] transition-colors">
                        {item.name[lang]}
                      </h3>
                      <span className="font-serif text-lg font-bold text-[#1A402D] shrink-0 bg-[#F2EDE4] px-3 py-1 rounded-xl">
                        {item.price}
                      </span>
                    </div>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-[#665A4E] leading-relaxed mb-4">
                      {item.description[lang]}
                    </p>
                  </div>

                  {/* Cart Action Button / Stepper */}
                  <div className="pt-3 border-t border-[#F2EDE4] flex items-center justify-between">
                    {getItemQuantity(item.id) === 0 ? (
                      <button
                        onClick={() => addItem(item)}
                        className="inline-flex items-center gap-2 bg-[#1A402D] hover:bg-[#122E20] text-white px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all shadow-xs active:scale-95"
                      >
                        <Plus className="w-3.5 h-3.5 text-[#D4A373]" />
                        <span>{t.cart.addToCart}</span>
                      </button>
                    ) : (
                      <div className="inline-flex items-center gap-3 bg-[#EBF2EE] border border-[#C2D8CB] rounded-full px-3 py-1 text-xs font-semibold text-[#1A402D]">
                        <button
                          onClick={() => decrementQty(item.id)}
                          className="w-6 h-6 rounded-full bg-white hover:bg-[#1A402D] hover:text-white flex items-center justify-center transition-colors text-[#1A402D] shadow-2xs"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="font-serif font-bold min-w-[16px] text-center">
                          {getItemQuantity(item.id)}
                        </span>
                        <button
                          onClick={() => addItem(item)}
                          className="w-6 h-6 rounded-full bg-[#1A402D] hover:bg-[#122E20] text-white flex items-center justify-center transition-colors shadow-2xs"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3 h-3 text-[#D4A373]" />
                        </button>
                      </div>
                    )}
                    <span className="text-[11px] font-medium text-[#8C7A6B] flex items-center gap-1">
                      <ShoppingBag className="w-3 h-3 text-[#D4A373]" />
                      <span>{item.price}</span>
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-white p-12 rounded-3xl border border-[#E8E2D9] text-center max-w-md mx-auto">
            <p className="text-[#665A4E] text-sm mb-4">{t.menu.noResults}</p>
            <button
              onClick={() => {
                setSearchQuery('');
                onSelectCategory(undefined);
              }}
              className="px-5 py-2 rounded-full bg-[#1A402D] text-white text-xs font-medium"
            >
              {t.menu.allCategories}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
