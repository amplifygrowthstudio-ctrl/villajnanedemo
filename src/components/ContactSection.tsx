import { Language } from '../types';
import { translations } from '../data/translations';
import {
  Sparkles,
  MapPin,
  Phone,
  Mail,
  Clock,
  Navigation,
  Compass,
  CheckCircle2,
} from 'lucide-react';

interface ContactSectionProps {
  lang: Language;
}

export default function ContactSection({ lang }: ContactSectionProps) {
  const t = translations[lang];

  return (
    <section id="contact-section" className="py-24 bg-[#F2EDE4] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white text-[#1A402D] text-xs font-semibold tracking-wider uppercase mb-3 border border-[#E8E2D9]">
            <Sparkles className="w-3.5 h-3.5 text-[#D4A373]" />
            <span>{t.contact.badge}</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1A402D] font-bold tracking-tight mb-3">
            {t.contact.title}
          </h2>
          <p className="text-[#665A4E] text-base leading-relaxed">
            {t.contact.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Contact Details Cards Column (5 cols) */}
          <div className="lg:col-span-5 space-y-4 flex flex-col justify-between">
            {/* Address Box */}
            <div className="bg-white p-6 rounded-3xl border border-[#E8E2D9] shadow-xs flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-[#EBF2EE] text-[#1A402D] flex items-center justify-center shrink-0">
                <MapPin className="w-6 h-6 text-[#D4A373]" />
              </div>
              <div>
                <h4 className="font-serif text-lg font-bold text-[#1A402D] mb-1">
                  {t.contact.addressLabel}
                </h4>
                <p className="text-sm text-[#665A4E] leading-relaxed">
                  Villa Jnane • {t.footer.address}
                </p>
                <div className="inline-flex items-center gap-1.5 mt-2 text-xs font-semibold text-[#1A402D]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Service Voiturier Disponible</span>
                </div>
              </div>
            </div>

            {/* Phone & Whatsapp Box */}
            <div className="bg-white p-6 rounded-3xl border border-[#E8E2D9] shadow-xs flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-[#EBF2EE] text-[#1A402D] flex items-center justify-center shrink-0">
                <Phone className="w-6 h-6 text-[#D4A373]" />
              </div>
              <div>
                <h4 className="font-serif text-lg font-bold text-[#1A402D] mb-1">
                  {t.contact.phoneLabel}
                </h4>
                <p className="text-sm font-semibold text-[#1A402D] dir-ltr">
                  +212 5 37 00 00 00
                </p>
                <p className="text-xs text-[#665A4E] mt-0.5">
                  Réservations & événements WhatsApp
                </p>
              </div>
            </div>

            {/* Email Box */}
            <div className="bg-white p-6 rounded-3xl border border-[#E8E2D9] shadow-xs flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-[#EBF2EE] text-[#1A402D] flex items-center justify-center shrink-0">
                <Mail className="w-6 h-6 text-[#D4A373]" />
              </div>
              <div>
                <h4 className="font-serif text-lg font-bold text-[#1A402D] mb-1">
                  {t.contact.emailLabel}
                </h4>
                <p className="text-sm text-[#1A402D] font-medium">
                  contact@villajnane-rabat.ma
                </p>
              </div>
            </div>

            {/* Hours Box */}
            <div className="bg-white p-6 rounded-3xl border border-[#E8E2D9] shadow-xs flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-[#EBF2EE] text-[#1A402D] flex items-center justify-center shrink-0">
                <Clock className="w-6 h-6 text-[#D4A373]" />
              </div>
              <div>
                <h4 className="font-serif text-lg font-bold text-[#1A402D] mb-1">
                  {t.contact.hoursLabel}
                </h4>
                <p className="text-sm text-[#665A4E]">
                  {t.footer.hours}
                </p>
              </div>
            </div>
          </div>

          {/* Styled Map Container Column (7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-3xl border border-[#E8E2D9] overflow-hidden shadow-xs relative flex flex-col justify-between min-h-[380px]">
            {/* Visual Styled Map Area */}
            <div className="relative w-full h-full min-h-[320px] bg-[#EBF2EE] flex items-center justify-center overflow-hidden">
              {/* Background map graphics effect */}
              <div
                className="absolute inset-0 opacity-20 bg-[radial-gradient(#1A402D_1px,transparent_1px)]"
                style={{ backgroundSize: '16px 16px' }}
              />

              {/* Decorative Rabat Map Roads Mockup */}
              <div className="absolute inset-0 opacity-15 pointer-events-none">
                <div className="absolute top-1/2 left-0 right-0 h-12 bg-[#1A402D] transform -rotate-12" />
                <div className="absolute top-0 bottom-0 left-1/3 w-16 bg-[#1A402D] transform rotate-45" />
                <div className="absolute top-0 bottom-0 right-1/4 w-10 bg-[#D4A373] transform -rotate-30" />
              </div>

              {/* Central Pin Marker Card */}
              <div className="relative z-10 bg-[#1A402D] text-white p-5 rounded-2xl shadow-xl border border-white/20 max-w-xs text-center flex flex-col items-center transform hover:scale-105 transition-transform duration-300">
                <div className="w-12 h-12 rounded-full bg-[#D4A373] text-[#1A402D] flex items-center justify-center mb-3 shadow-md animate-bounce">
                  <MapPin className="w-6 h-6 stroke-[2.5]" />
                </div>
                <h4 className="font-serif text-lg font-bold text-white">
                  Villa Jnane Rabat
                </h4>
                <p className="text-xs text-[#D4A373] mt-0.5">
                  {t.contact.mapTagline}
                </p>
                <p className="text-[11px] text-white/70 mt-1">
                  {t.contact.district}
                </p>
              </div>
            </div>

            {/* Bottom Directions Bar */}
            <div className="bg-white p-6 border-t border-[#E8E2D9] flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-xs text-[#665A4E]">
                <Compass className="w-4 h-4 text-[#D4A373]" />
                <span>Rabat Souissi • Parking & Accès Facile</span>
              </div>

              <a
                href="https://maps.google.com/?q=Rabat+Morocco"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#1A402D] hover:bg-[#122E20] text-white px-6 py-3 rounded-full text-xs font-semibold tracking-wide transition-all shadow-xs"
              >
                <Navigation className="w-3.5 h-3.5 text-[#D4A373]" />
                <span>{t.contact.getDirections}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
