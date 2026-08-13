import { useCart } from '../context/CartContext';
import { Language } from '../types';
import { translations } from '../data/translations';
import { ShoppingBag } from 'lucide-react';

interface CartButtonProps {
  lang: Language;
}

export default function CartButton({ lang }: CartButtonProps) {
  const { totalItems, totalPrice, openCart } = useCart();
  const t = translations[lang];

  if (totalItems === 0) return null;

  return (
    <button
      onClick={openCart}
      aria-label={t.cart.cartTitle}
      className="fixed bottom-6 end-6 z-40 bg-[#1A402D] text-white hover:bg-[#122E20] border border-[#D4A373]/40 shadow-2xl rounded-full px-5 py-3.5 flex items-center gap-3.5 transition-all duration-300 transform hover:scale-105 active:scale-95 group"
    >
      <div className="relative flex items-center justify-center">
        <ShoppingBag className="w-5 h-5 text-[#D4A373] group-hover:rotate-6 transition-transform" />
        <span className="absolute -top-2.5 -end-2.5 bg-[#D4A373] text-[#1A402D] text-[11px] font-extrabold w-5 h-5 rounded-full flex items-center justify-center shadow-xs">
          {totalItems}
        </span>
      </div>
      <div className="flex flex-col text-start leading-none">
        <span className="text-[10px] uppercase font-bold tracking-wider text-[#D4A373]">
          {t.cart.cartTitle}
        </span>
        <span className="text-xs font-serif font-bold text-white mt-1">
          {totalPrice} DH
        </span>
      </div>
    </button>
  );
}
