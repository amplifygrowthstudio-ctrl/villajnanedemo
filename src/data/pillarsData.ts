import { PillarItem } from '../types';

export const pillarsData: PillarItem[] = [
  {
    id: 'private-events',
    iconName: 'PartyPopper',
    image: '/images/gallery-terrace-ambiance.jpg',
    title: {
      fr: 'Événements Privés & Célébrations',
      ar: 'المناسبات الخاصة والاحتفالات',
      en: 'Private Events & Celebrations',
    },
    subtitle: {
      fr: 'Mariages intimes, anniversaires & réceptions privées au jardin',
      ar: 'حفلات زفاف مصغرة، أعياد ميلاد واستقبالات خاصة في الحديقة',
      en: 'Intimate weddings, birthdays & private garden receptions',
    },
    description: {
      fr: 'Privatisez notre terrasse arborée ou nos salons marocains pour des moments d’exception. Menu sur-mesure élaboré par notre chef et décoration personnalisée.',
      ar: 'احجز حديقتنا المظللة أو صالوناتنا المغربية لأوقات استثنائية مع قائمة طعام مخصصة وديكور فاخر.',
      en: 'Privatize our garden terrace or refined Moroccan lounges for unforgettable occasions with tailored chef menus and bespoke decor.',
    },
    capacity: {
      fr: 'Jusqu’à 80 invités',
      ar: 'حتى ٨٠ ضيفاً',
      en: 'Up to 80 guests',
    },
    features: [
      {
        fr: 'Privatisation partielle ou totale',
        ar: 'حجز جزئي أو كامل للمكان',
        en: 'Partial or full venue privatization',
      },
      {
        fr: 'Menu sur-mesure & pièce montée',
        ar: 'قائمة طعام مخصصة وحلويات فاخرة',
        en: 'Tailored dining & custom pastry showpiece',
      },
      {
        fr: 'Système son & éclairage d’ambiance',
        ar: 'نظام صوتي وإضاءة احترافية',
        en: 'Ambient lighting & sound system',
      },
      {
        fr: 'Service voiturier & accueil VIP',
        ar: 'خدمة ركن السيارات واستقبال VIP',
        en: 'Valet parking & VIP welcome',
      },
    ],
  },
  {
    id: 'business-salon',
    iconName: 'Briefcase',
    image: '/images/pillars-private-salon.jpg',
    title: {
      fr: 'Espace Business & Déjeuners d’Affaires',
      ar: 'مساحة الأعمال والغداء الدبلوماسي',
      en: 'Business Salon & Executive Dining',
    },
    subtitle: {
      fr: 'Réunions discrètes, repas d’affaires & salons climatisés',
      ar: 'اجتماعات هادئة، غداء عمل وصالونات مكيفة خافته الضوضاء',
      en: 'Discreet meetings, executive lunches & climate-controlled salons',
    },
    description: {
      fr: 'Un cadre feutré et connecté en plein cœur de Rabat pour vos rendez-vous professionnels. Salons privatifs équipés, Wi-Fi très haute vitesse et service discret.',
      ar: 'أجواء هادئة ومجهزة بأحدث التقنيات في قلب الرباط لترتيب لقاءات عملك. صالونات خاصة بربط إنترنت سريع وخدمة راقية.',
      en: 'A quiet, high-tech sanctuary in central Rabat for corporate meetings. Private air-conditioned salons, high-speed Wi-Fi, and discreet white-glove service.',
    },
    capacity: {
      fr: 'Salons de 6 à 20 personnes',
      ar: 'صالونات من ٦ إلى ٢٠ شخصاً',
      en: 'Salons for 6 to 20 guests',
    },
    features: [
      {
        fr: 'Wi-Fi haut débit dédié & écrans HD',
        ar: 'إنترنت عالي السرعة وشاشات للعرض',
        en: 'Dedicated high-speed Wi-Fi & HD displays',
      },
      {
        fr: 'Formules déjeuner express en 45 min',
        ar: 'وجبات غداء عمل سريعة وممتازة',
        en: '45-minute executive lunch formulas',
      },
      {
        fr: 'Salons insonorisés & climatisés',
        ar: 'صالونات عازلة للصوت ومكيفة',
        en: 'Acoustically isolated private rooms',
      },
      {
        fr: 'Facturation entreprise simplifiée',
        ar: 'تسهيلات للشركات والحسابات',
        en: 'Simplified corporate invoicing',
      },
    ],
  },
  {
    id: 'themed-nights',
    iconName: 'Music',
    image: '/images/about-garden-courtyard.jpg',
    title: {
      fr: 'Soirées Thématiques & Musique Live',
      ar: 'أمسيات الموسيقى الحية والجو المغربي',
      en: 'Themed Evenings & Live Music',
    },
    subtitle: {
      fr: 'Musique Andalouse, Oud acoustique & dîners aux chandelles',
      ar: 'موسيقى أندلسية، عود أيل ومواسم العشاء على ضوء الشموع',
      en: 'Andalousian melodies, acoustic Oud & candlelit garden dinners',
    },
    description: {
      fr: 'Chaque fin de semaine, la terrasse s’illumine au son du Oud traditionnel et de duos acoustiques. Une ambiance envoûtante sous les étoiles de Rabat.',
      ar: 'في كل نهاية أسبوع، تضيء الحديقة على ألحان العود المغربي الأصيل والعزف الحي تحت نجوم الرباط.',
      en: 'Every weekend, the garden comes alive with live traditional Oud performances and acoustic duos under Rabat’s starlit sky.',
    },
    capacity: {
      fr: 'Réservation conseillée',
      ar: 'الحجز المسبق مؤكد',
      en: 'Advance booking recommended',
    },
    features: [
      {
        fr: 'Virtuoses du Oud & Musique Soufie',
        ar: 'عازفو عود وموسيقى أندلسية روحية',
        en: 'Master Oud players & Andalusian duos',
      },
      {
        fr: 'Menu Dégustation Nocturne du Chef',
        ar: 'قائمة تذوق ليلية خاصة بالطهات',
        en: 'Late night chef tasting menu',
      },
      {
        fr: 'Lumière tamisée aux lanternes cuivrées',
        ar: 'إضاءة خافتة بالفوانيس المغربية النحاسية',
        en: 'Lantern-lit warm garden ambiance',
      },
      {
        fr: 'Cocktails botaniques & thés rares',
        ar: 'مشروبات بالأعشاب الطبيعية وأتاي ممتاز',
        en: 'Botanical mocktails & rare tea blends',
      },
    ],
  },
];
