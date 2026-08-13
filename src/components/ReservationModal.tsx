import { useState, useEffect, FormEvent } from 'react';
import { Language, ReservationData } from '../types';
import { translations } from '../data/translations';
import {
  X,
  Calendar,
  Clock,
  Users,
  Utensils,
  CheckCircle2,
  AlertCircle,
  Sparkles,
  MapPin,
  ChevronDown,
} from 'lucide-react';

interface ReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentLang: Language;
  initialPreselectedItem?: string;
}

export default function ReservationModal({
  isOpen,
  onClose,
  currentLang,
  initialPreselectedItem,
}: ReservationModalProps) {
  const t = translations[currentLang];
  const isRtl = currentLang === 'ar';

  // Form State
  const [formData, setFormData] = useState<ReservationData>({
    name: '',
    phone: '',
    email: '',
    date: new Date().toISOString().split('T')[0],
    time: '19:30',
    guests: 2,
    seatingPreference: 'terrasse',
    specialRequests: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Reset or prefill when modal opens
  useEffect(() => {
    if (isOpen) {
      setIsSuccess(false);
      setErrors({});
      if (initialPreselectedItem) {
        setFormData((prev) => ({
          ...prev,
          specialRequests: `${t.reservationModal.preselectedPrefix} ${initialPreselectedItem}`,
        }));
      }
    }
  }, [isOpen, initialPreselectedItem, currentLang]);

  if (!isOpen) return null;

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = t.reservationModal.errors.nameRequired;
    }

    if (!formData.phone.trim() || formData.phone.length < 8) {
      newErrors.phone = t.reservationModal.errors.phoneInvalid;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email)) {
      newErrors.email = t.reservationModal.errors.emailInvalid;
    }

    if (!formData.date) {
      newErrors.date = t.reservationModal.errors.dateRequired;
    }

    if (!formData.time) {
      newErrors.time = t.reservationModal.errors.timeRequired;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    // Simulated API call / Backend integration placeholder
    // TODO: Wire this to Express endpoint (e.g. POST /api/reservations) or Firestore collection
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 800);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/75 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6">
      <div
        className={`bg-[#FAF8F5] rounded-3xl max-w-2xl w-full border border-[#E8E2D9] shadow-2xl overflow-hidden relative transition-all my-8 ${
          isRtl ? 'rtl' : 'ltr'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header */}
        <div className="bg-[#1A402D] text-white p-6 sm:p-8 relative">
          <button
            onClick={onClose}
            className="absolute top-5 end-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            aria-label={t.common.close}
          >
            <X className="w-5 h-5" />
          </button>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[#D4A373] text-xs font-semibold uppercase tracking-wider mb-3 border border-white/15">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Villa Jnane • Rabat</span>
          </div>

          <h3 className="font-serif text-2xl sm:text-3xl font-bold">
            {t.reservationModal.title}
          </h3>
          <p className="text-white/80 text-xs sm:text-sm mt-1 font-light">
            {t.reservationModal.subtitle}
          </p>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8">
          {isSuccess ? (
            /* Success State */
            <div className="text-center py-8 space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle2 className="w-10 h-10 stroke-[2.5]" />
              </div>

              <h4 className="font-serif text-2xl font-bold text-[#1A402D]">
                {t.reservationModal.successTitle}
              </h4>

              <p className="text-sm text-[#665A4E] max-w-md mx-auto leading-relaxed">
                {t.reservationModal.successMessage}
              </p>

              {/* Reservation Recap Card */}
              <div className="bg-white p-5 rounded-2xl border border-[#E8E2D9] max-w-md mx-auto text-start text-xs space-y-2 mt-4">
                <div className="flex justify-between border-b border-[#F2EDE4] pb-2">
                  <span className="text-[#8C7A6B]">Client:</span>
                  <span className="font-semibold text-[#1A402D]">
                    {formData.name}
                  </span>
                </div>
                <div className="flex justify-between border-b border-[#F2EDE4] pb-2">
                  <span className="text-[#8C7A6B]">Date & Heure:</span>
                  <span className="font-semibold text-[#1A402D]">
                    {formData.date} à {formData.time}
                  </span>
                </div>
                <div className="flex justify-between border-b border-[#F2EDE4] pb-2">
                  <span className="text-[#8C7A6B]">Couverts:</span>
                  <span className="font-semibold text-[#1A402D]">
                    {formData.guests} personnes
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#8C7A6B]">Espace:</span>
                  <span className="font-semibold text-[#D4A373]">
                    {t.reservationModal.seatingOptions[formData.seatingPreference]}
                  </span>
                </div>
              </div>

              <div className="pt-4">
                <button
                  onClick={onClose}
                  className="bg-[#1A402D] hover:bg-[#122E20] text-white px-8 py-3.5 rounded-full text-xs sm:text-sm font-semibold transition-all shadow-sm"
                >
                  {t.reservationModal.closeBtn}
                </button>
              </div>
            </div>
          ) : (
            /* Reservation Form */
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Preselected Notice Banner */}
              {initialPreselectedItem && (
                <div className="bg-[#EBF2EE] border border-[#C2D8CB] p-3.5 rounded-2xl flex items-center gap-3 text-xs text-[#1A402D]">
                  <Utensils className="w-4 h-4 text-[#D4A373] shrink-0" />
                  <span>
                    <strong>{t.reservationModal.preselectedPrefix}</strong>{' '}
                    {initialPreselectedItem}
                  </span>
                </div>
              )}

              {/* Personal Details Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Full Name */}
                <div>
                  <label className="block text-xs font-semibold text-[#1A402D] mb-1.5">
                    {t.reservationModal.nameLabel} *
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    placeholder={t.reservationModal.namePlaceholder}
                    className={`w-full px-4 py-3 text-xs sm:text-sm rounded-xl border bg-white focus:outline-hidden focus:ring-2 transition-all ${
                      errors.name
                        ? 'border-red-400 focus:ring-red-200'
                        : 'border-[#E0D8CC] focus:ring-[#1A402D]/20 focus:border-[#1A402D]'
                    }`}
                  />
                  {errors.name && (
                    <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.name}
                    </p>
                  )}
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-xs font-semibold text-[#1A402D] mb-1.5">
                    {t.reservationModal.phoneLabel} *
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    placeholder={t.reservationModal.phonePlaceholder}
                    className={`w-full px-4 py-3 text-xs sm:text-sm rounded-xl border bg-white focus:outline-hidden focus:ring-2 transition-all ${
                      errors.phone
                        ? 'border-red-400 focus:ring-red-200'
                        : 'border-[#E0D8CC] focus:ring-[#1A402D]/20 focus:border-[#1A402D]'
                    }`}
                  />
                  {errors.phone && (
                    <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.phone}
                    </p>
                  )}
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block text-xs font-semibold text-[#1A402D] mb-1.5">
                  {t.reservationModal.emailLabel} *
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  placeholder={t.reservationModal.emailPlaceholder}
                  className={`w-full px-4 py-3 text-xs sm:text-sm rounded-xl border bg-white focus:outline-hidden focus:ring-2 transition-all ${
                    errors.email
                      ? 'border-red-400 focus:ring-red-200'
                      : 'border-[#E0D8CC] focus:ring-[#1A402D]/20 focus:border-[#1A402D]'
                  }`}
                />
                {errors.email && (
                  <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" /> {errors.email}
                  </p>
                )}
              </div>

              {/* Date, Time & Guests Row */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {/* Date */}
                <div>
                  <label className="block text-xs font-semibold text-[#1A402D] mb-1.5">
                    {t.reservationModal.dateLabel} *
                  </label>
                  <input
                    type="date"
                    value={formData.date}
                    onChange={(e) =>
                      setFormData({ ...formData, date: e.target.value })
                    }
                    className="w-full px-3 py-2.5 text-xs rounded-xl border border-[#E0D8CC] bg-white focus:outline-hidden focus:ring-2 focus:ring-[#1A402D]/20"
                  />
                </div>

                {/* Time */}
                <div>
                  <label className="block text-xs font-semibold text-[#1A402D] mb-1.5">
                    {t.reservationModal.timeLabel} *
                  </label>
                  <select
                    value={formData.time}
                    onChange={(e) =>
                      setFormData({ ...formData, time: e.target.value })
                    }
                    className="w-full px-3 py-2.5 text-xs rounded-xl border border-[#E0D8CC] bg-white focus:outline-hidden focus:ring-2 focus:ring-[#1A402D]/20"
                  >
                    <option value="08:30">08:30 - Petit-Déjeuner</option>
                    <option value="10:00">10:00 - Brunch</option>
                    <option value="12:30">12:30 - Déjeuner</option>
                    <option value="14:00">14:00 - Déjeuner tardif</option>
                    <option value="17:00">17:00 - Tea Time</option>
                    <option value="19:30">19:30 - Dîner</option>
                    <option value="21:00">21:00 - Dîner tardif</option>
                  </select>
                </div>

                {/* Guests */}
                <div>
                  <label className="block text-xs font-semibold text-[#1A402D] mb-1.5">
                    {t.reservationModal.guestsLabel}
                  </label>
                  <select
                    value={formData.guests}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        guests: parseInt(e.target.value, 10),
                      })
                    }
                    className="w-full px-3 py-2.5 text-xs rounded-xl border border-[#E0D8CC] bg-white focus:outline-hidden focus:ring-2 focus:ring-[#1A402D]/20"
                  >
                    {[1, 2, 3, 4, 5, 6, 8, 10, 12, 15, 20].map((num) => (
                      <option key={num} value={num}>
                        {num} {num === 1 ? 'Personne' : 'Personnes'}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Seating Area Selection */}
              <div>
                <label className="block text-xs font-semibold text-[#1A402D] mb-2">
                  {t.reservationModal.seatingLabel}
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {(['terrasse', 'salon', 'veranda'] as const).map((seatKey) => (
                    <button
                      type="button"
                      key={seatKey}
                      onClick={() =>
                        setFormData({ ...formData, seatingPreference: seatKey })
                      }
                      className={`p-3 rounded-2xl border text-xs font-medium transition-all text-center ${
                        formData.seatingPreference === seatKey
                          ? 'bg-[#1A402D] text-white border-[#1A402D] shadow-xs'
                          : 'bg-white text-[#665A4E] border-[#E8E2D9] hover:bg-[#F2EDE4]'
                      }`}
                    >
                      {t.reservationModal.seatingOptions[seatKey]}
                    </button>
                  ))}
                </div>
              </div>

              {/* Special Requests */}
              <div>
                <label className="block text-xs font-semibold text-[#1A402D] mb-1.5">
                  {t.reservationModal.notesLabel}
                </label>
                <textarea
                  rows={2}
                  value={formData.specialRequests}
                  onChange={(e) =>
                    setFormData({ ...formData, specialRequests: e.target.value })
                  }
                  placeholder={t.reservationModal.notesPlaceholder}
                  className="w-full px-4 py-3 text-xs sm:text-sm rounded-xl border border-[#E0D8CC] bg-white focus:outline-hidden focus:ring-2 focus:ring-[#1A402D]/20 resize-none"
                />
              </div>

              {/* Submit CTA */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#1A402D] hover:bg-[#122E20] text-white py-4 rounded-full text-xs sm:text-sm font-semibold tracking-wide transition-all shadow-md disabled:opacity-50"
                >
                  {isSubmitting
                    ? t.reservationModal.submittingBtn
                    : t.reservationModal.submitBtn}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
