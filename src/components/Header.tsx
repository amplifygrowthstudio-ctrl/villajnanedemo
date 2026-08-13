import { useState, useEffect } from 'react';
import { Language } from '../types';
import { translations } from '../data/translations';
import { Globe, Menu as MenuIcon, X, Calendar, MapPin } from 'lucide-react';

interface HeaderProps {
  lang: Language;
  onLanguageChange: (newLang: Language) => void;
  onOpenReservation: () => void;
  onNavigateTo: (sectionId: string) => void;
}

export default function Header({
  lang,
  onLanguageChange,
  onOpenReservation,
  onNavigateTo,
}: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const t = translations[lang];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'about', label: t.nav.about },
    { id: 'menu', label: t.nav.menu },
    { id: 'gallery', label: t.nav.gallery },
    { id: 'contact', label: t.nav.contact },
  ];

  const handleNavClick = (id: string) => {
    onNavigateTo(id);
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FAF8F5]/95 backdrop-blur-md shadow-sm border-b border-[#E8E2D9] py-3'
          : 'bg-gradient-to-b from-black/60 via-black/30 to-transparent text-white py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <button
          onClick={() => handleNavClick('hero')}
          className="flex items-center gap-3 text-left focus:outline-hidden group"
        >
          <span
            className={`font-serif text-2xl sm:text-3xl font-bold tracking-tight transition-colors ${
              isScrolled ? 'text-[#1A402D]' : 'text-white'
            }`}
          >
            Villa Jnane
          </span>
          <span
            className={`text-xs px-2.5 py-0.5 rounded-full font-medium transition-colors flex items-center gap-1 ${
              isScrolled
                ? 'bg-[#EBF2EE] text-[#1A402D]'
                : 'bg-white/20 text-white backdrop-blur-xs'
            }`}
          >
            <MapPin className="w-3 h-3" />
            Rabat
          </span>
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              className={`text-sm font-medium tracking-wide transition-colors hover:opacity-80 focus:outline-hidden ${
                isScrolled ? 'text-[#2C2825]' : 'text-white/90'
              }`}
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Desktop Right Actions: Language Switcher & Reserve CTA */}
        <div className="hidden lg:flex items-center gap-4">
          {/* Language Switcher (3 tap targets) */}
          <div
            className={`flex items-center gap-1 p-1 rounded-full border transition-colors ${
              isScrolled
                ? 'bg-[#F2EDE4] border-[#E0D8CC]'
                : 'bg-black/30 border-white/20 backdrop-blur-xs'
            }`}
          >
            <Globe
              className={`w-3.5 h-3.5 ms-2 me-0.5 ${
                isScrolled ? 'text-[#8C7A6B]' : 'text-white/70'
              }`}
            />
            <button
              id="lang-btn-fr"
              onClick={() => onLanguageChange('fr')}
              className={`px-2.5 py-1 text-xs font-semibold rounded-full transition-all ${
                lang === 'fr'
                  ? 'bg-[#1A402D] text-white shadow-xs'
                  : isScrolled
                  ? 'text-[#665A4E] hover:text-[#2C2825]'
                  : 'text-white/80 hover:text-white'
              }`}
            >
              FR
            </button>
            <button
              id="lang-btn-ar"
              onClick={() => onLanguageChange('ar')}
              className={`px-2.5 py-1 text-xs font-semibold rounded-full transition-all ${
                lang === 'ar'
                  ? 'bg-[#1A402D] text-white shadow-xs'
                  : isScrolled
                  ? 'text-[#665A4E] hover:text-[#2C2825]'
                  : 'text-white/80 hover:text-white'
              }`}
            >
              العربية
            </button>
            <button
              id="lang-btn-en"
              onClick={() => onLanguageChange('en')}
              className={`px-2.5 py-1 text-xs font-semibold rounded-full transition-all ${
                lang === 'en'
                  ? 'bg-[#1A402D] text-white shadow-xs'
                  : isScrolled
                  ? 'text-[#665A4E] hover:text-[#2C2825]'
                  : 'text-white/80 hover:text-white'
              }`}
            >
              EN
            </button>
          </div>

          {/* Reservation CTA Button */}
          <button
            id="header-reserve-btn"
            onClick={onOpenReservation}
            className="flex items-center gap-2 bg-[#1A402D] hover:bg-[#122E20] text-white px-5 py-2.5 rounded-full text-sm font-medium tracking-wide shadow-xs transition-all transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <Calendar className="w-4 h-4 text-[#D4A373]" />
            <span>{t.nav.reservation}</span>
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex lg:hidden items-center gap-2">
          {/* Language Switcher Compact for Mobile Header */}
          <div
            className={`flex items-center p-0.5 rounded-full border text-xs ${
              isScrolled
                ? 'bg-[#F2EDE4] border-[#E0D8CC]'
                : 'bg-black/30 border-white/20'
            }`}
          >
            <button
              onClick={() => onLanguageChange('fr')}
              className={`px-2 py-0.5 rounded-full ${
                lang === 'fr' ? 'bg-[#1A402D] text-white' : 'text-current opacity-70'
              }`}
            >
              FR
            </button>
            <button
              onClick={() => onLanguageChange('ar')}
              className={`px-2 py-0.5 rounded-full ${
                lang === 'ar' ? 'bg-[#1A402D] text-white' : 'text-current opacity-70'
              }`}
            >
              ع
            </button>
            <button
              onClick={() => onLanguageChange('en')}
              className={`px-2 py-0.5 rounded-full ${
                lang === 'en' ? 'bg-[#1A402D] text-white' : 'text-current opacity-70'
              }`}
            >
              EN
            </button>
          </div>

          <button
            id="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={t.common.openMenu}
            className={`p-2 rounded-xl border transition-colors ${
              isScrolled
                ? 'bg-white border-[#E8E2D9] text-[#2C2825]'
                : 'bg-black/30 border-white/20 text-white'
            }`}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <MenuIcon className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-full bg-[#FAF8F5] border-b border-[#E8E2D9] shadow-xl p-6 transition-all animate-in slide-in-from-top duration-200">
          <nav className="flex flex-col gap-4 mb-6">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className="text-start py-2 text-lg font-medium text-[#2C2825] border-b border-[#E8E2D9]/60 hover:text-[#1A402D]"
              >
                {link.label}
              </button>
            ))}
          </nav>

          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenReservation();
            }}
            className="w-full flex items-center justify-center gap-2 bg-[#1A402D] text-white py-3.5 rounded-xl font-medium shadow-md text-base"
          >
            <Calendar className="w-5 h-5 text-[#D4A373]" />
            <span>{t.nav.reservation}</span>
          </button>
        </div>
      )}
    </header>
  );
}
