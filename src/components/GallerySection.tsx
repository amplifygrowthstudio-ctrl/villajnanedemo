import { useState, useEffect, useCallback, useMemo } from 'react';
import { Language } from '../types';
import { translations } from '../data/translations';
import { galleryImages } from '../data/galleryData';
import {
  Sparkles,
  X,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Filter,
} from 'lucide-react';

interface GallerySectionProps {
  lang: Language;
}

export default function GallerySection({ lang }: GallerySectionProps) {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(
    null
  );

  const t = translations[lang];
  const isRtl = lang === 'ar';

  const categories = [
    { id: 'all', label: t.gallery.categories.all },
    { id: 'jardin', label: t.gallery.categories.jardin },
    { id: 'plats', label: t.gallery.categories.plats },
    { id: 'ambiance', label: t.gallery.categories.ambiance },
    { id: 'evenements', label: t.gallery.categories.evenements },
  ];

  const filteredImages = useMemo(() => {
    if (activeCategory === 'all') return galleryImages;
    return galleryImages.filter((img) => img.category === activeCategory);
  }, [activeCategory]);

  const handleOpenLightbox = (index: number) => {
    setActiveLightboxIndex(index);
  };

  const handleCloseLightbox = useCallback(() => {
    setActiveLightboxIndex(null);
  }, []);

  const handleNextImage = useCallback(() => {
    if (activeLightboxIndex === null) return;
    setActiveLightboxIndex((prev) =>
      prev !== null ? (prev + 1) % filteredImages.length : 0
    );
  }, [activeLightboxIndex, filteredImages.length]);

  const handlePrevImage = useCallback(() => {
    if (activeLightboxIndex === null) return;
    setActiveLightboxIndex((prev) =>
      prev !== null
        ? (prev - 1 + filteredImages.length) % filteredImages.length
        : 0
    );
  }, [activeLightboxIndex, filteredImages.length]);

  // Keyboard Navigation for Lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activeLightboxIndex === null) return;

      if (e.key === 'Escape') {
        handleCloseLightbox();
      } else if (e.key === 'ArrowRight') {
        if (isRtl) handlePrevImage();
        else handleNextImage();
      } else if (e.key === 'ArrowLeft') {
        if (isRtl) handleNextImage();
        else handlePrevImage();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [
    activeLightboxIndex,
    handleCloseLightbox,
    handleNextImage,
    handlePrevImage,
    isRtl,
  ]);

  return (
    <section id="gallery" className="py-24 bg-[#FAF8F5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EBF2EE] text-[#1A402D] text-xs font-semibold tracking-wider uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#D4A373]" />
            <span>{t.gallery.badge}</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1A402D] font-bold tracking-tight mb-3">
            {t.gallery.title}
          </h2>
          <p className="text-[#665A4E] text-base leading-relaxed">
            {t.gallery.subtitle}
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center justify-center flex-wrap gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                setActiveCategory(cat.id);
                setActiveLightboxIndex(null);
              }}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all ${
                activeCategory === cat.id
                  ? 'bg-[#1A402D] text-white shadow-xs'
                  : 'bg-white text-[#665A4E] hover:bg-[#F2EDE4] border border-[#E8E2D9]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-5">
          {filteredImages.map((imgItem, idx) => {
            // Editorial Bento grid span variation based on index
            let gridSpan = 'md:col-span-4 h-72';
            if (idx % 5 === 0) {
              gridSpan = 'md:col-span-8 h-80 sm:h-[340px]';
            } else if (idx % 5 === 1) {
              gridSpan = 'md:col-span-4 h-80 sm:h-[340px]';
            } else if (idx % 5 === 2) {
              gridSpan = 'md:col-span-4 h-72';
            } else if (idx % 5 === 3) {
              gridSpan = 'md:col-span-4 h-72';
            } else if (idx % 5 === 4) {
              gridSpan = 'md:col-span-4 h-72';
            }

            return (
              <div
                key={imgItem.id}
                onClick={() => handleOpenLightbox(idx)}
                className={`group relative rounded-3xl overflow-hidden cursor-pointer bg-[#1A402D] border border-[#E8E2D9] shadow-xs hover:shadow-xl transition-all duration-500 ${gridSpan}`}
              >
                <img
                  src={imgItem.image}
                  alt={imgItem.alt[lang]}
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
                />

                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-85 transition-opacity" />

                {/* Hover Maximize Icon */}
                <div className="absolute top-4 end-4 w-9 h-9 rounded-full bg-black/40 backdrop-blur-md text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-90 group-hover:scale-100">
                  <Maximize2 className="w-4 h-4 text-[#D4A373]" />
                </div>

                {/* Title Caption */}
                <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6 text-white transform translate-y-1 group-hover:translate-y-0 transition-transform">
                  <span className="text-[10px] font-semibold tracking-wider uppercase text-[#D4A373] block mb-1">
                    Villa Jnane • {imgItem.category}
                  </span>
                  <h3 className="font-serif text-lg sm:text-xl font-bold leading-snug">
                    {imgItem.title[lang]}
                  </h3>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Lightbox Modal */}
      {activeLightboxIndex !== null && filteredImages[activeLightboxIndex] && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 transition-opacity duration-300"
          onClick={handleCloseLightbox}
        >
          <div
            className="relative max-w-5xl w-full max-h-[90vh] flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Bar Controls */}
            <div className="w-full flex items-center justify-between text-white/80 pb-4 mb-2 border-b border-white/10">
              <span className="text-xs font-medium tracking-wide text-[#D4A373]">
                {activeLightboxIndex + 1} / {filteredImages.length}
              </span>
              <button
                onClick={handleCloseLightbox}
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                aria-label={t.gallery.closeLightbox}
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Image Container */}
            <div className="relative w-full max-h-[70vh] flex items-center justify-center overflow-hidden rounded-2xl bg-black">
              <img
                src={filteredImages[activeLightboxIndex].image}
                alt={filteredImages[activeLightboxIndex].alt[lang]}
                className="max-h-[70vh] w-auto max-w-full object-contain rounded-xl select-none"
              />

              {/* Prev / Next Buttons */}
              {filteredImages.length > 1 && (
                <>
                  <button
                    onClick={isRtl ? handleNextImage : handlePrevImage}
                    className="absolute start-3 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/60 hover:bg-[#D4A373] text-white hover:text-[#1A402D] transition-all backdrop-blur-md"
                    aria-label={t.gallery.prevImage}
                  >
                    {isRtl ? (
                      <ChevronRight className="w-6 h-6" />
                    ) : (
                      <ChevronLeft className="w-6 h-6" />
                    )}
                  </button>

                  <button
                    onClick={isRtl ? handlePrevImage : handleNextImage}
                    className="absolute end-3 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/60 hover:bg-[#D4A373] text-white hover:text-[#1A402D] transition-all backdrop-blur-md"
                    aria-label={t.gallery.nextImage}
                  >
                    {isRtl ? (
                      <ChevronLeft className="w-6 h-6" />
                    ) : (
                      <ChevronRight className="w-6 h-6" />
                    )}
                  </button>
                </>
              )}
            </div>

            {/* Bottom Caption */}
            <div className="w-full text-center pt-4 text-white">
              <h4 className="font-serif text-xl font-bold text-[#D4A373]">
                {filteredImages[activeLightboxIndex].title[lang]}
              </h4>
              <p className="text-xs text-white/70 mt-1">
                {filteredImages[activeLightboxIndex].alt[lang]}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
