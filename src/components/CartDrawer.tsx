import { useState, FormEvent } from 'react';
import { useCart, parsePrice } from '../context/CartContext';
import { Language } from '../types';
import { translations } from '../data/translations';
import {
  X,
  Trash2,
  Plus,
  Minus,
  ShoppingBag,
  Sparkles,
  MessageCircle,
  AlertCircle,
  Utensils,
} from 'lucide-react';

// =========================================================================
// RESTAURANT WHATSAPP NUMBER
// Format: country code + phone number without + or spaces (e.g., 212600000000)
// To set your real WhatsApp number, edit line 23 below:
// =========================================================================
export const RESTAURANT_WHATSAPP_NUMBER = '212600000000';

interface CartDrawerProps {
  lang: Language;
}

export default function CartDrawer({ lang }: CartDrawerProps) {
  const {
    items,
    isCartOpen,
    closeCart,
    removeItem,
    incrementQty,
    decrementQty,
    clearCart,
    totalPrice,
    totalItems,
  } = useCart();

  const [customerName, setCustomerName] = useState('');
  const [tableNumber, setTableNumber] = useState('');
  const [phone, setPhone] = useState('');
  const [nameError, setNameError] = useState(false);

  const t = translations[lang];
  const isRtl = lang === 'ar';

  if (!isCartOpen) return null;

  const handleCheckoutWhatsApp = (e: FormEvent) => {
    e.preventDefault();

    if (!customerName.trim()) {
      setNameError(true);
      return;
    }
    setNameError(false);

    // Build plain text order summary for WhatsApp
    const isArabic = lang === 'ar';
    const isEnglish = lang === 'en';

    const headerText = isArabic
      ? '🌿 *طلب جديد - فيلا جنان الرباط* 🌿'
      : isEnglish
      ? '🌿 *NEW ORDER - VILLA JNANE RABAT* 🌿'
      : '🌿 *NOUVELLE COMMANDE - VILLA JNANE RABAT* 🌿';

    const clientLabel = isArabic ? '*الاسم:*' : isEnglish ? '*Name:*' : '*Nom:*';
    const tableLabel = isArabic
      ? '*الطاولة:*'
      : isEnglish
      ? '*Table:*'
      : '*N° Table:*';
    const phoneLabel = isArabic
      ? '*الهاتف:*'
      : isEnglish
      ? '*Phone:*'
      : '*Téléphone:*';

    const itemsHeader = isArabic
      ? '*تفاصيل الطلب:*'
      : isEnglish
      ? '*Order Details:*'
      : '*Détails de la commande:*';

    const subtotalLabel = isArabic
      ? '*المجموع الفرعي:*'
      : isEnglish
      ? '*Subtotal:*'
      : '*Sous-total:*';

    const tableValue = tableNumber.trim()
      ? tableNumber
      : isArabic
      ? 'لم يحدد (على عين المكان / سفري)'
      : isEnglish
      ? 'Not specified (Dine-in / Takeaway)'
      : 'Non spécifié (Sur place / À emporter)';

    const itemsFormatted = items
      .map((i) => {
        const itemTotal = parsePrice(i.item.price) * i.quantity;
        return `• ${i.quantity}x ${i.item.name[lang]} (${itemTotal} DH)`;
      })
      .join('\n');

    const messageLines = [
      headerText,
      '',
      `${clientLabel} ${customerName.trim()}`,
      `${tableLabel} ${tableValue}`,
      phone.trim() ? `${phoneLabel} ${phone.trim()}` : null,
      '',
      itemsHeader,
      itemsFormatted,
      '',
      `${subtotalLabel} ${totalPrice} DH`,
      '',
      isArabic
        ? 'شكراً لكم! في انتظار تأكيد الطلب من الفريق.'
        : isEnglish
        ? 'Thank you! Awaiting order confirmation from the team.'
        : 'Merci ! En attente de confirmation de la commande par l’équipe.',
    ]
      .filter((line) => line !== null)
      .join('\n');

    const whatsappUrl = `https://wa.me/${RESTAURANT_WHATSAPP_NUMBER}?text=${encodeURIComponent(
      messageLines
    )}`;

    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity duration-300"
        onClick={closeCart}
      />

      {/* Slide-in Drawer Container */}
      <div className="fixed inset-y-0 end-0 max-w-md w-full bg-[#FAF8F5] shadow-2xl flex flex-col z-50 border-s border-[#E8E2D9]">
        {/* Drawer Header */}
        <div className="bg-[#1A402D] text-white p-6 relative flex items-center justify-between border-b border-[#26533C]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#D4A373] text-[#1A402D] flex items-center justify-center font-bold">
              <ShoppingBag className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-serif text-xl font-bold leading-tight">
                {t.cart.cartTitle}
              </h3>
              <p className="text-xs text-[#D4A373] mt-0.5">
                {totalItems} {totalItems === 1 ? 'article' : 'articles'}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {items.length > 0 && (
              <button
                onClick={clearCart}
                className="text-xs text-white/70 hover:text-[#D4A373] transition-colors me-2 underline"
                title={t.cart.clearCart}
              >
                {t.cart.clearCart}
              </button>
            )}
            <button
              onClick={closeCart}
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
              aria-label={t.cart.closeCart}
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Drawer Body */}
        {items.length === 0 ? (
          /* Empty Cart State */
          <div className="flex-1 p-8 flex flex-col items-center justify-center text-center">
            <div className="w-20 h-20 rounded-full bg-[#EBF2EE] text-[#1A402D] flex items-center justify-center mb-4">
              <Utensils className="w-10 h-10 text-[#D4A373]" />
            </div>
            <h4 className="font-serif text-2xl font-bold text-[#1A402D] mb-2">
              {t.cart.emptyCartTitle}
            </h4>
            <p className="text-xs sm:text-sm text-[#665A4E] max-w-xs leading-relaxed mb-6">
              {t.cart.emptyCartSubtitle}
            </p>
            <button
              onClick={closeCart}
              className="bg-[#1A402D] hover:bg-[#122E20] text-white px-6 py-3 rounded-full text-xs font-semibold transition-all shadow-xs"
            >
              {t.common.openMenu}
            </button>
          </div>
        ) : (
          /* Filled Cart State */
          <div className="flex-1 overflow-y-auto p-6 space-y-6 divide-y divide-[#E8E2D9]">
            {/* Cart Items List */}
            <div className="space-y-4">
              <div className="flex items-center justify-between text-xs font-semibold text-[#8C7A6B] uppercase tracking-wider">
                <span>{t.cart.yourOrder}</span>
                <span>Prix</span>
              </div>

              {items.map(({ menuItemId, item, quantity }) => {
                const itemTotal = parsePrice(item.price) * quantity;

                return (
                  <div
                    key={menuItemId}
                    className="bg-white p-4 rounded-2xl border border-[#E8E2D9] shadow-2xs flex items-center gap-4"
                  >
                    {item.image && (
                      <img
                        src={item.image}
                        alt={item.name[lang]}
                        className="w-16 h-16 rounded-xl object-cover shrink-0 bg-[#F2EDE4]"
                      />
                    )}

                    <div className="flex-1 min-w-0">
                      <h4 className="font-serif text-sm font-bold text-[#1A402D] truncate">
                        {item.name[lang]}
                      </h4>
                      <p className="text-xs text-[#8C7A6B] mt-0.5">
                        {item.price} / unité
                      </p>

                      {/* Stepper + Delete */}
                      <div className="flex items-center gap-3 mt-3">
                        <div className="inline-flex items-center gap-2 bg-[#FAF8F5] border border-[#E0D8CC] rounded-full px-2.5 py-1 text-xs font-semibold text-[#1A402D]">
                          <button
                            onClick={() => decrementQty(menuItemId)}
                            className="w-5 h-5 rounded-full bg-white text-[#1A402D] hover:bg-[#1A402D] hover:text-white flex items-center justify-center transition-colors shadow-2xs"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="font-serif font-bold min-w-[14px] text-center">
                            {quantity}
                          </span>
                          <button
                            onClick={() => incrementQty(menuItemId)}
                            className="w-5 h-5 rounded-full bg-[#1A402D] text-white hover:bg-[#122E20] flex items-center justify-center transition-colors shadow-2xs"
                          >
                            <Plus className="w-3 h-3 text-[#D4A373]" />
                          </button>
                        </div>

                        <button
                          onClick={() => removeItem(menuItemId)}
                          className="text-[#8C7A6B] hover:text-red-600 p-1 transition-colors"
                          title="Supprimer"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>

                    <div className="text-end shrink-0">
                      <span className="font-serif font-bold text-sm text-[#1A402D]">
                        {itemTotal} DH
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Subtotal */}
            <div className="pt-4 space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="text-[#665A4E] font-medium">{t.cart.subtotal}</span>
                <span className="font-serif text-xl font-bold text-[#1A402D]">
                  {totalPrice} DH
                </span>
              </div>
            </div>

            {/* Checkout Form */}
            <form onSubmit={handleCheckoutWhatsApp} className="pt-6 space-y-4">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#1A402D] uppercase tracking-wider mb-2">
                <Sparkles className="w-3.5 h-3.5 text-[#D4A373]" />
                <span>Informations de livraison / table</span>
              </div>

              {/* Name */}
              <div>
                <label className="block text-xs font-semibold text-[#1A402D] mb-1">
                  {t.cart.nameLabel} *
                </label>
                <input
                  type="text"
                  value={customerName}
                  onChange={(e) => {
                    setCustomerName(e.target.value);
                    if (e.target.value.trim()) setNameError(false);
                  }}
                  placeholder={t.cart.namePlaceholder}
                  className={`w-full px-3.5 py-2.5 text-xs rounded-xl border bg-white focus:outline-hidden focus:ring-2 transition-all ${
                    nameError
                      ? 'border-red-400 focus:ring-red-200'
                      : 'border-[#E0D8CC] focus:ring-[#1A402D]/20 focus:border-[#1A402D]'
                  }`}
                />
                {nameError && (
                  <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    {t.cart.requiredNameError}
                  </p>
                )}
              </div>

              {/* Table Number */}
              <div>
                <label className="block text-xs font-semibold text-[#1A402D] mb-1">
                  {t.cart.tableNumberLabel}
                </label>
                <input
                  type="text"
                  value={tableNumber}
                  onChange={(e) => setTableNumber(e.target.value)}
                  placeholder={t.cart.tableNumberPlaceholder}
                  className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-[#E0D8CC] bg-white focus:outline-hidden focus:ring-2 focus:ring-[#1A402D]/20 focus:border-[#1A402D]"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-xs font-semibold text-[#1A402D] mb-1">
                  {t.cart.phoneLabel}
                </label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder={t.cart.phonePlaceholder}
                  className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-[#E0D8CC] bg-white focus:outline-hidden focus:ring-2 focus:ring-[#1A402D]/20 focus:border-[#1A402D]"
                />
              </div>

              {/* WhatsApp CTA Button */}
              <button
                type="submit"
                className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white py-3.5 rounded-full text-xs font-bold tracking-wide transition-all shadow-md flex items-center justify-center gap-2 mt-4 active:scale-98"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>{t.cart.checkoutWhatsApp}</span>
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
