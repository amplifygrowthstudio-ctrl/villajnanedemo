import { Language } from '../types';
import { translations } from '../data/translations';
import { MapPin, Phone, Mail, Clock, Instagram, Facebook } from 'lucide-react';

interface FooterProps {
  lang: Language;
  onNavigateTo: (sectionId: string) => void;
  onOpenReservation: () => void;
}

export default function Footer({
  lang,
  onNavigateTo,
  onOpenReservation,
}: FooterProps) {
  const t = translations[lang];

  return (
    <footer id="contact" className="bg-[#1A402D] text-white py-16 border-t border-[#26533C]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-12">
          {/* Brand Column (5 cols) */}
          <div className="md:col-span-5 space-y-4">
            <div className="inline-flex items-center gap-2">
              <span className="font-serif text-3xl font-bold tracking-tight text-white block">
                Villa Jnane
              </span>
              <span className="text-[10px] uppercase font-bold tracking-widest text-[#D4A373] bg-[#26533C] px-2 py-0.5 rounded-md">
                Rabat
              </span>
            </div>

            <p className="text-white/80 text-xs sm:text-sm max-w-sm leading-relaxed font-light">
              {t.footer.tagline}
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#D4A373] hover:text-[#1A402D] text-white flex items-center justify-center transition-all"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#D4A373] hover:text-[#1A402D] text-white flex items-center justify-center transition-all"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Navigation Links (3 cols) */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-serif text-lg font-semibold text-[#D4A373]">
              {t.footer.quickLinks}
            </h4>
            <ul className="space-y-2 text-xs text-white/80">
              <li>
                <button
                  onClick={() => onNavigateTo('about')}
                  className="hover:text-[#D4A373] transition-colors"
                >
                  {t.nav.about}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateTo('menu')}
                  className="hover:text-[#D4A373] transition-colors"
                >
                  {t.nav.menu}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateTo('terrasse')}
                  className="hover:text-[#D4A373] transition-colors"
                >
                  {t.nav.gallery}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateTo('pillars')}
                  className="hover:text-[#D4A373] transition-colors"
                >
                  {t.pillarsSection.badge}
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenReservation}
                  className="hover:text-[#D4A373] transition-colors font-semibold text-[#D4A373]"
                >
                  {t.nav.reservation}
                </button>
              </li>
            </ul>
          </div>

          {/* Location & Contact Info (4 cols) */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="font-serif text-lg font-semibold text-[#D4A373]">
              {t.nav.contact}
            </h4>
            <div className="flex items-start gap-2.5 text-xs text-white/80">
              <MapPin className="w-4 h-4 text-[#D4A373] shrink-0 mt-0.5" />
              <span>{t.footer.address}</span>
            </div>
            <div className="flex items-center gap-2.5 text-xs text-white/80">
              <Phone className="w-4 h-4 text-[#D4A373] shrink-0" />
              <span className="dir-ltr">+212 5 37 00 00 00</span>
            </div>
            <div className="flex items-center gap-2.5 text-xs text-white/80">
              <Mail className="w-4 h-4 text-[#D4A373] shrink-0" />
              <span>contact@villajnane-rabat.ma</span>
            </div>
            <div className="flex items-start gap-2.5 text-xs text-white/80 pt-1">
              <Clock className="w-4 h-4 text-[#D4A373] shrink-0 mt-0.5" />
              <span>{t.footer.hours}</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-white/60 gap-4">
          <p>{t.footer.rights}</p>
          <p className="font-serif italic text-white/50">
            Rabat • Maroc
          </p>
        </div>
      </div>
    </footer>
  );
}
