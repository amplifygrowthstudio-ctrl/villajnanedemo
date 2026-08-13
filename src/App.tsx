import { useState, useEffect } from 'react';
import { Language } from './types';
import { CartProvider } from './context/CartContext';
import Header from './components/Header';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import FullMenuSection from './components/FullMenuSection';
import ThreePillars from './components/ThreePillars';
import TerrasseSection from './components/TerrasseSection';
import GallerySection from './components/GallerySection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import ReservationModal from './components/ReservationModal';
import CartButton from './components/CartButton';
import CartDrawer from './components/CartDrawer';

export default function App() {
  const [lang, setLang] = useState<Language>('fr');
  const [selectedCategoryId, setSelectedCategoryId] = useState<string | undefined>(undefined);
  const [isReservationOpen, setIsReservationOpen] = useState(false);
  const [preselectedItem, setPreselectedItem] = useState<string | undefined>(undefined);

  useEffect(() => {
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
  }, [lang]);

  const handleOpenReservation = (dishName?: string) => {
    setPreselectedItem(dishName);
    setIsReservationOpen(true);
  };

  const handleOpenFullMenu = (categoryId?: string) => {
    setSelectedCategoryId(categoryId);
    const element = document.getElementById('full-menu-container');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleNavigateTo = (sectionId: string) => {
    if (sectionId === 'menu' || sectionId === 'menu-preview') {
      handleOpenFullMenu(undefined);
      return;
    }
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      console.log(`Navigation requested to section: #${sectionId}`);
    }
  };

  return (
    <CartProvider>
      <div className="min-h-screen bg-[#FAF8F5] text-[#2C2825] font-sans antialiased selection:bg-[#D4A373] selection:text-white transition-colors duration-200">
        {/* 1. Header Component */}
        <Header
          lang={lang}
          onLanguageChange={setLang}
          onOpenReservation={() => handleOpenReservation()}
          onNavigateTo={handleNavigateTo}
        />

        {/* Main Content Area */}
        <main>
          {/* 2. Hero Component */}
          <Hero
            lang={lang}
            onOpenReservation={() => handleOpenReservation()}
            onNavigateToMenu={() => handleNavigateTo('menu')}
          />

          {/* 3. About Section Component */}
          <AboutSection lang={lang} />

          {/* 4. Full Filterable Menu Section Component */}
          <div id="full-menu-container">
            <FullMenuSection
              lang={lang}
              selectedCategoryId={selectedCategoryId}
              onSelectCategory={setSelectedCategoryId}
            />
          </div>

          {/* 5. Three Pillars Component (Events, Business, Music) */}
          <ThreePillars
            lang={lang}
            onOpenReservation={handleOpenReservation}
          />

          {/* 6. Shaded Garden Terrasse Component */}
          <TerrasseSection
            lang={lang}
            onOpenReservation={handleOpenReservation}
          />

          {/* 7. Gallery Section Component */}
          <GallerySection lang={lang} />

          {/* 8. Contact & Location Map Section Component */}
          <ContactSection lang={lang} />
        </main>

        {/* 9. Global Footer Component */}
        <Footer
          lang={lang}
          onNavigateTo={handleNavigateTo}
          onOpenReservation={() => handleOpenReservation()}
        />

        {/* 10. Floating Shopping Cart Button & Drawer */}
        <CartButton lang={lang} />
        <CartDrawer lang={lang} />

        {/* 11. Table Reservation Modal */}
        <ReservationModal
          isOpen={isReservationOpen}
          onClose={() => setIsReservationOpen(false)}
          currentLang={lang}
          initialPreselectedItem={preselectedItem}
        />
      </div>
    </CartProvider>
  );
}
