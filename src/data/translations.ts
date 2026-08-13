import { Language } from '../types';

export interface Translations {
  nav: {
    about: string;
    menu: string;
    gallery: string;
    reservation: string;
    contact: string;
  };
  hero: {
    badge: string;
    title: string;
    subtitle: string;
    ctaMenu: string;
    ctaReserve: string;
    hoursBadge: string;
  };
  about: {
    badge: string;
    title: string;
    subtitle: string;
    p1: string;
    p2: string;
    pillars: {
      fusionTitle: string;
      fusionDesc: string;
      gardenTitle: string;
      gardenDesc: string;
      artisanTitle: string;
      artisanDesc: string;
    };
    stats: {
      capacityValue: string;
      capacityLabel: string;
      establishedValue: string;
      establishedLabel: string;
      gardenValue: string;
      gardenLabel: string;
    };
  };
  menu: {
    badge: string;
    title: string;
    subtitle: string;
    previewTitle: string;
    previewSubtitle: string;
    allCategories: string;
    exploreCategory: string;
    reserveToTaste: string;
    itemsCount: string;
    badges: {
      signature: string;
      popular: string;
      vegetarian: string;
    };
    searchPlaceholder: string;
    noResults: string;
  };
  pillarsSection: {
    badge: string;
    title: string;
    subtitle: string;
    ctaBookPillar: string;
  };
  terrasseSection: {
    badge: string;
    title: string;
    subtitle: string;
    description: string;
    ctaReserveTerrasse: string;
    features: {
      shade: string;
      calm: string;
      fountain: string;
    };
  };
  gallery: {
    badge: string;
    title: string;
    subtitle: string;
    categories: {
      all: string;
      jardin: string;
      plats: string;
      ambiance: string;
      evenements: string;
    };
    closeLightbox: string;
    prevImage: string;
    nextImage: string;
  };
  contact: {
    badge: string;
    title: string;
    subtitle: string;
    addressLabel: string;
    phoneLabel: string;
    emailLabel: string;
    hoursLabel: string;
    getDirections: string;
    mapTagline: string;
    district: string;
  };
  reservationModal: {
    title: string;
    subtitle: string;
    preselectedPrefix: string;
    nameLabel: string;
    namePlaceholder: string;
    phoneLabel: string;
    phonePlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    dateLabel: string;
    timeLabel: string;
    guestsLabel: string;
    seatingLabel: string;
    seatingOptions: {
      terrasse: string;
      salon: string;
      veranda: string;
    };
    notesLabel: string;
    notesPlaceholder: string;
    submitBtn: string;
    submittingBtn: string;
    successTitle: string;
    successMessage: string;
    closeBtn: string;
    errors: {
      nameRequired: string;
      phoneInvalid: string;
      emailInvalid: string;
      dateRequired: string;
      timeRequired: string;
    };
  };
  footer: {
    rights: string;
    tagline: string;
    address: string;
    hours: string;
    quickLinks: string;
  };
  common: {
    close: string;
    openMenu: string;
    location: string;
  };
  cart: {
    addToCart: string;
    cartTitle: string;
    emptyCartTitle: string;
    emptyCartSubtitle: string;
    yourOrder: string;
    subtotal: string;
    checkoutWhatsApp: string;
    nameLabel: string;
    namePlaceholder: string;
    tableNumberLabel: string;
    tableNumberPlaceholder: string;
    phoneLabel: string;
    phonePlaceholder: string;
    closeCart: string;
    clearCart: string;
    itemAdded: string;
    requiredNameError: string;
  };
}

export const translations: Record<Language, Translations> = {
  fr: {
    nav: {
      about: "L'Oasis & Esprit",
      menu: "La Carte Fusion",
      gallery: "Jardin & Cadre",
      reservation: "Réserver une Table",
      contact: "Accès & Horaires"
    },
    hero: {
      badge: "Oasis Gastronomique & Jardin Ombragé • Rabat",
      title: "Villa Jnane",
      subtitle: "Un havre de fraîcheur raffiné au cœur de Rabat. Savourez l'alliance créative entre gastronomie marocaine contemporaine et saveurs méditerranéennes sous nos pergolas arborées.",
      ctaMenu: "Découvrir la carte",
      ctaReserve: "Réserver une table",
      hoursBadge: "Ouvert 7j/7 • 08h00 - 23h30"
    },
    about: {
      badge: "L'Aventure & Le Cadre",
      title: "L'Art de Vivre sous les Citronniers",
      subtitle: "Une parenthèse gourmande et paisible au rythme des fontaines et des senteurs de fleur d'oranger",
      p1: "Née du désir d'offrir à Rabat un lieu d'exception préservé du tumulte urbain, Villa Jnane orchestre une symbiose unique entre architecture marocaine noble et nature généreuse. Nos terrasses arborées et salons baignés de lumière vous accueillent dès le petit-déjeuner au son doux des jet d'eau.",
      p2: "En cuisine, nos chefs réinventent avec élégance les trésors culinaires du Royaume — pastillas croustillantes revisitées, tajines mijotés aux figues et épices rares, ceviches aux agrumes de nos jardins et pâtisseries artisanales à la fleur d'oranger.",
      pillars: {
        fusionTitle: "Cuisine Fusion d'Auteur",
        fusionDesc: "Des recettes emblématiques marocaines enrichies de techniques méditerranéennes modernes.",
        gardenTitle: "Jardin Ombragé Pérsistant",
        gardenDesc: "Une terrasse de verdure rafraîchie par pergolas, jasmin et fontaines traditionnelles.",
        artisanTitle: "Café & Pâtisserie Fine",
        artisanDesc: "Mélanges de café grands crus, thés d'exception et créations sucrées du jour."
      },
      stats: {
        capacityValue: "[CAPACITY] Couverts",
        capacityLabel: "Capacité en terrasse & salons",
        establishedValue: "Fondée en 2024",
        establishedLabel: "Au cœur de Rabat",
        gardenValue: "100% Végétal",
        gardenLabel: "Cadre naturel & ombragé"
      }
    },
    menu: {
      badge: "Gastronomie & Saveurs",
      title: "La Carte & Créations Gourmandes",
      subtitle: "Un voyage culinaire d'exception combinant produits du terroir marocain et inspirations contemporaines.",
      previewTitle: "Les Univers Gourmands",
      previewSubtitle: "Explorez nos catégories culinaires créées pour chaque moment de la journée.",
      allCategories: "Toutes les catégories",
      exploreCategory: "Voir les créations",
      reserveToTaste: "Réserver pour goûter",
      itemsCount: "spécialités",
      badges: {
        signature: "Signature",
        popular: "Incontournable",
        vegetarian: "Végétarien"
      },
      searchPlaceholder: "Rechercher un plat, une recette...",
      noResults: "Aucun plat ne correspond à votre recherche dans cette catégorie."
    },
    pillarsSection: {
      badge: "Expériences & Espaces Dédiés",
      title: "Des Univers Façonnés pour Vos Moments d'Exception",
      subtitle: "Que ce soit pour célébrer, travailler ou s'évader en musique, Villa Jnane orchestre vos souvenirs.",
      ctaBookPillar: "Planifier ou Réserver cet Espace"
    },
    terrasseSection: {
      badge: "Le Jardin & La Terrasse Ombragée",
      title: "Un Sanctuaire de Fraîcheur & Verdure Pérsistante",
      subtitle: "L'art de déjeuner et dîner au cœur d'un cocon végétal préservé",
      description: "Au milieu des citronniers centenaires, des bougainvilliers en fleurs et du murmure apaisant de nos fontaines en zellige, la terrasse de Villa Jnane offre une température douce et agréable même en plein été.",
      ctaReserveTerrasse: "Réserver une table en terrasse",
      features: {
        shade: "Ombrage naturel & Pergolas bioclimatiques",
        calm: "Haie de verdure & Calme absolu au centre de Rabat",
        fountain: "Microclimat rafraîchi par fontaines marocaines"
      }
    },
    gallery: {
      badge: "Galerie & Immersion Visual",
      title: "Instants de Vie à Villa Jnane",
      subtitle: "Un aperçu photographique de l'ambiance, des créations gourmandes et de notre oasis végétale.",
      categories: {
        all: "Tout voir",
        jardin: "Jardin & Terrasse",
        plats: "Plats & Créations",
        ambiance: "Ambiance & Lumières",
        evenements: "Salons & Événements"
      },
      closeLightbox: "Fermer la galerie",
      prevImage: "Image précédente",
      nextImage: "Image suivante"
    },
    contact: {
      badge: "Localisation & Accès",
      title: "Nous Trouver & Nous Contacter",
      subtitle: "Situé dans l'un des quartiers les plus recherchés de Rabat, Villa Jnane est facilement accessible avec service voiturier.",
      addressLabel: "Adresse",
      phoneLabel: "Téléphone & WhatsApp",
      emailLabel: "E-mail Réservations",
      hoursLabel: "Horaires d'Ouverture",
      getDirections: "Itinéraire Google Maps",
      mapTagline: "Oasis de verdure • Souissi / Hassan, Rabat",
      district: "Quartier Souissi / Hassan, Rabat"
    },
    reservationModal: {
      title: "Réserver une Table à Villa Jnane",
      subtitle: "Sélectionnez votre date, heure et espace préféré. Confirmation immédiate.",
      preselectedPrefix: "Réservation pour :",
      nameLabel: "Nom & Prénom",
      namePlaceholder: "ex. Yasmine Benali",
      phoneLabel: "Numéro de téléphone",
      phonePlaceholder: "+212 6 00 00 00 00",
      emailLabel: "Adresse E-mail",
      emailPlaceholder: "votre.email@exemple.com",
      dateLabel: "Date de réservation",
      timeLabel: "Heure du repas",
      guestsLabel: "Nombre de personnes",
      seatingLabel: "Espace souhaité",
      seatingOptions: {
        terrasse: "Terrasse Jardin Ombragée",
        salon: "Salon Marocain Climatise",
        veranda: "Véranda Baignée de Lumière"
      },
      notesLabel: "Demandes particulières / Allergies",
      notesPlaceholder: "Une occasion spéciale, un choix de table ou une allergie ?",
      submitBtn: "Confirmer ma Réservation",
      submittingBtn: "Validation en cours...",
      successTitle: "Demande de Réservation Reçue !",
      successMessage: "Merci ! Votre table à Villa Jnane est pré-réservée. Notre équipe vous contactera sous peu par SMS / WhatsApp pour la confirmation finale.",
      closeBtn: "Fermer cette fenêtre",
      errors: {
        nameRequired: "Veuillez entrer votre nom complet.",
        phoneInvalid: "Veuillez entrer un numéro de téléphone valide.",
        emailInvalid: "Veuillez entrer une adresse e-mail valide.",
        dateRequired: "Veuillez choisir une date.",
        timeRequired: "Veuillez choisir un horaire."
      }
    },
    footer: {
      rights: "© 2026 Villa Jnane Rabat. Tous droits réservés.",
      tagline: "Café-restaurant fusion & terrasse jardin d'exception au cœur de Rabat.",
      address: "Quartier Souissi / Hassan, Rabat, Maroc",
      hours: "Du lundi au dimanche de 08h00 à 23h30",
      quickLinks: "Navigation Rapide"
    },
    common: {
      close: "Fermer",
      openMenu: "Ouvrir le menu",
      location: "Rabat, Maroc"
    },
    cart: {
      addToCart: "+ Ajouter",
      cartTitle: "Votre Commande",
      emptyCartTitle: "Votre panier est vide",
      emptyCartSubtitle: "Parcourez notre carte et ajoutez vos créations gourmandes préférées.",
      yourOrder: "Articles sélectionnés",
      subtotal: "Sous-total",
      checkoutWhatsApp: "Commander via WhatsApp",
      nameLabel: "Nom & Prénom",
      namePlaceholder: "ex. Yasmine Benali",
      tableNumberLabel: "N° de table (si sur place)",
      tableNumberPlaceholder: "ex. Table 12",
      phoneLabel: "Numéro de téléphone (optionnel)",
      phonePlaceholder: "+212 6 00 00 00 00",
      closeCart: "Fermer le panier",
      clearCart: "Vider le panier",
      itemAdded: "Ajouté au panier",
      requiredNameError: "Veuillez indiquer votre nom pour valider la commande."
    }
  },
  ar: {
    nav: {
      about: "عن فيلا جنان",
      menu: "قائمة الطعام",
      gallery: "الحديقة والأجواء",
      reservation: "حجز طاولة",
      contact: "الموقع والمواعيد"
    },
    hero: {
      badge: "مطعم ومقهى فيوجن • حديقة وظلال • الرباط",
      title: "فيلا جنان",
      subtitle: "واحة من الهدوء والانتشاش في قلب الرباط. استمتع بامتزاج رفيع بين فنون الطهي المغربي الأصيل والنكهات المتوسطية العصرية تحت ظلال الياسمين والبرتقال.",
      ctaMenu: "استكشف القائمة",
      ctaReserve: "احجز طاولتك الآن",
      hoursBadge: "مفتوح يومياً • ٠٨:٠٠ صباحاً - ١١:٣٠ مساءً"
    },
    about: {
      badge: "القصة والأجواء",
      title: "فن العيش تحت أشجار الليمون",
      subtitle: "تجربة طهي استثنائية على إيقاع خرير النافورات وأريج زهر البرتقال",
      p1: "تأسست فيلا جنان لتقديم مأوى هادئ وفريد في العاصمة الرباط، يجمع بين أصالة المعمار المغربي وجمال الطبيعة الخضراء. تستقبلكم حدائقنا المظللة وصالوناتنا المضاءة بنور الشمس من الصباح الباكر للاستمتاع بلحظات من السكينة.",
      p2: "في مطبخنا، يعيد طهاتنا تقديم أطباق المملكة التراثية بلمسة معاصرة راقية — من البسطيلة المقرمشة المبتكرة، والتواجن المطهوة على نار هادئة مع التين والتوابل النادرة، إلى المشروبات الحرفية والحلويات الفاخرة بزهر البرتقال.",
      pillars: {
        fusionTitle: "مطبخ فيوجن مبتكر",
        fusionDesc: "أطباق مغربية أصيلة ممتزجة مع أفضل تقنيات الطهي المتوسطي الحديث.",
        gardenTitle: "حديقة مظللة بالكامل",
        gardenDesc: "جلسات خارجية تحيط بها أشجار الليمون والنافورات المغربية التقليدية.",
        artisanTitle: "مقهى وحلويات راقية",
        artisanDesc: "أنواع قهوة مختارة وشاي مغربي فاخر مع تشكيلة حلويات يومية طازجة."
      },
      stats: {
        capacityValue: "[CAPACITY] مقعداً",
        capacityLabel: "سعة الحديقة والصالونات",
        establishedValue: "تأسست عام ٢٠٢٤",
        establishedLabel: "في قلب الرباط",
        gardenValue: "١٠٠٪ طبيعي",
        gardenLabel: "أجواء خضراء مظللة"
      }
    },
    menu: {
      badge: "فن الطهي والنكهات",
      title: "قائمة الطعام والإبداعات",
      subtitle: "رحلة طهي استثنائية تجمع بين المنتجات المغربية الأصيلة والابتكارات العصرية.",
      previewTitle: "أقسام القائمة",
      previewSubtitle: "تصفح الأقسام الطهوية المصممة لكل أوقات اليوم.",
      allCategories: "جميع الأقسام",
      exploreCategory: "استكشف الأطباق",
      reserveToTaste: "احجز لتذوق الطبق",
      itemsCount: "أطباق",
      badges: {
        signature: "طبق متميز",
        popular: "الأكثر طلباً",
        vegetarian: "نباتي"
      },
      searchPlaceholder: "ابحث عن طبق أو مكوّن...",
      noResults: "لم نجد أطباقاً تطابق بحثك في هذا القسم."
    },
    pillarsSection: {
      badge: "تجارب ومساحات مخصصة",
      title: "أجواء مُصممة لأرقى لحظاتكم",
      subtitle: "سواء للاحتفال، العمل، أو الاسترخاء على أنغام الموسيقى، تعتني فيلا جنان بكل تفاصيل يومكم.",
      ctaBookPillar: "احجز أو نظّم الفعالية هنا"
    },
    terrasseSection: {
      badge: "الحديقة والجلسات الخارجية المظلمة",
      title: "ملاذ متجدد من الانتعاش والخضرة الدائمة",
      subtitle: "فن تناول الطعام في قلب الطبيعة الغناء في الرباط",
      description: "بين أشجار الليمون والزهور المتفتحة وخرير النافورات التقليدية، توفر تراس فيلا جنان أجواءً باردة ومريحة حتى في أوقات الصيف.",
      ctaReserveTerrasse: "احجز طاولتك بالحديقة المظللة",
      features: {
        shade: "ظلال طبيعية ومظلات حديثة قابلة للتكيف",
        calm: "هدوء تام وسط الأشجار في قلب الرباط",
        fountain: "أجواء منعشة بنافورات رخامية مغربية"
      }
    },
    gallery: {
      badge: "معرض الصور والأجواء",
      title: "لحظات مميزة في فيلا جنان",
      subtitle: "نظرة مصورة على الأجواء، الإبداعات الطهوية، وواحتنا الخضراء بقلب العاصمة.",
      categories: {
        all: "عرض الكل",
        jardin: "الحديقة والتراس",
        plats: "الأطباق والإبداعات",
        ambiance: "الأجواء والإضاءة",
        evenements: "الصالونات والمناسبات"
      },
      closeLightbox: "إغلاق المعرض",
      prevImage: "الصورة السابقة",
      nextImage: "الصورة التالية"
    },
    contact: {
      badge: "الموقع والوصول",
      title: "تواصل معنا وزرنا",
      subtitle: "تقع فيلا جنان في أرقى أحياء الرباط مع سهولة الوصول وخدمة ركن السيارات.",
      addressLabel: "العنوان",
      phoneLabel: "الهاتف وواتساب",
      emailLabel: "البريد الإلكتروني للحجز",
      hoursLabel: "مواعيد العمل",
      getDirections: "الاتجاهات عبر خرائط جوجل",
      mapTagline: "واحة خضراء • السويسي / حسان، الرباط",
      district: "حي السويسي / حسان، الرباط"
    },
    reservationModal: {
      title: "حجز طاولة في فيلا جنان",
      subtitle: "اختر التاريخ، الوقت، والمكان المفضل. تأكيد فوري لطلبكم.",
      preselectedPrefix: "حجز خاص لـ:",
      nameLabel: "الاسم الكامل",
      namePlaceholder: "مثال: ياسمين بنعلي",
      phoneLabel: "رقم الهاتف",
      phonePlaceholder: "+212 6 00 00 00 00",
      emailLabel: "البريد الإلكتروني",
      emailPlaceholder: "your.email@example.com",
      dateLabel: "تاريخ الحجز",
      timeLabel: "وقت الوجبة",
      guestsLabel: "عدد الأشخاص",
      seatingLabel: "المكان المفضل",
      seatingOptions: {
        terrasse: "حديقة التراس المظللة",
        salon: "الصالون المغربي المكيف",
        veranda: "الفيزاندا المضاءة بنور الشمس"
      },
      notesLabel: "ملاحظات خاصة / الحساسية",
      notesPlaceholder: "مناسبة خاصة، موقع معين للطاولة، أو حساسيات طعام؟",
      submitBtn: "تأكيد طلب الحجز",
      submittingBtn: "جاري المعالجة...",
      successTitle: "تم استلام طلب الحجز بنجاح!",
      successMessage: "شكراً لكم! تم إرسال طلب حجز طاولتكم بفيلا جنان. سيتواصل معكم فريقنا قريباً عبر الرسائل / واتساب لتأكيد الحجز النهائي.",
      closeBtn: "إغلاق النافذة",
      errors: {
        nameRequired: "يرجى إدخال الاسم الكامل.",
        phoneInvalid: "يرجى إدخال رقم هاتف صحيح.",
        emailInvalid: "يرجى إدخال بريد إلكتروني صحيح.",
        dateRequired: "يرجى اختيار تاريخ الحجز.",
        timeRequired: "يرجى اختيار وقت الحجز."
      }
    },
    footer: {
      rights: "© ٢٠٢٦ فيلا جنان الرباط. جميع الحقوق محفوظة.",
      tagline: "مقهى ومطعم فيوجن بحديقة غنّاء في قلب الرباط.",
      address: "حي السويسي / حسان، الرباط، المغرب",
      hours: "من الإثنين إلى الأحد من ٠٨:٠٠ صباحاً حتى ١١:٣٠ مساءً",
      quickLinks: "روابط السريعة"
    },
    common: {
      close: "إغلاق",
      openMenu: "فتح القائمة",
      location: "الرباط، المغرب"
    },
    cart: {
      addToCart: "+ إضافة",
      cartTitle: "طلبيتك",
      emptyCartTitle: "سلة الطلبات فارغة",
      emptyCartSubtitle: "استكشف قائمة أطباقنا واضف وجباتك المفضلة.",
      yourOrder: "الأطباق المختارة",
      subtotal: "المجموع الفرعي",
      checkoutWhatsApp: "إرسال الطلب عبر واتساب",
      nameLabel: "الاسم الكامل",
      namePlaceholder: "مثال: ياسمين بنعلي",
      tableNumberLabel: "رقم الطاولة (إذا كنت بالمطعم)",
      tableNumberPlaceholder: "مثال: طاولة ١٢",
      phoneLabel: "رقم الهاتف (اختياري)",
      phonePlaceholder: "+212 6 00 00 00 00",
      closeCart: "إغلاق السلة",
      clearCart: "تفريغ السلة",
      itemAdded: "تمت الإضافة للسلة",
      requiredNameError: "يرجى إدخال اسمك لإتمام الطلب."
    }
  },
  en: {
    nav: {
      about: "The Story",
      menu: "Fusion Menu",
      gallery: "Garden & Vibe",
      reservation: "Book a Table",
      contact: "Location & Hours"
    },
    hero: {
      badge: "Gourmet Oasis & Shaded Garden • Rabat",
      title: "Villa Jnane",
      subtitle: "A refined sanctuary of coolness in the heart of Rabat. Experience an inventive blend of modern Moroccan gastronomy and Mediterranean classics beneath our leafy pergolas.",
      ctaMenu: "Explore the Menu",
      ctaReserve: "Reserve a Table",
      hoursBadge: "Open 7 Days • 8:00 AM - 11:30 PM"
    },
    about: {
      badge: "Our Essence & Garden",
      title: "The Art of Living Among Lemon Trees",
      subtitle: "A peaceful culinary escape tuned to bubbling fountains and orange blossom scents",
      p1: "Created to offer Rabat a tranquil haven away from the city hustle, Villa Jnane harmonizes rich Moroccan craftsmanship with lush natural greenery. Our shaded garden terraces and light-filled lounges welcome you from early breakfast through intimate starlit dinners.",
      p2: "In the kitchen, our chefs reframe authentic Moroccan classics with modern finesse — crisp artisanal pastillas, slow-cooked fig and spice tagines, citrus-infused ceviches, and orange blossom pastries baked fresh daily.",
      pillars: {
        fusionTitle: "Signature Fusion Gastronomy",
        fusionDesc: "Iconic Moroccan recipes elevated with modern Mediterranean culinary art.",
        gardenTitle: "Shaded Evergreen Garden",
        gardenDesc: "A cool outdoor terrace sheltered by pergolas, jasmine, and tiled water features.",
        artisanTitle: "Specialty Coffee & Pastries",
        artisanDesc: "Single-origin espresso, traditional mint teas, and delicate house-baked desserts."
      },
      stats: {
        capacityValue: "[CAPACITY] Seats",
        capacityLabel: "Garden & lounge seating capacity",
        establishedValue: "Est. 2024",
        establishedLabel: "Heart of Rabat",
        gardenValue: "100% Lush",
        gardenLabel: "Natural shaded ambiance"
      }
    },
    menu: {
      badge: "Gastronomy & Flavors",
      title: "The Menu & Culinary Creations",
      subtitle: "An extraordinary culinary voyage combining rich local Moroccan produce with contemporary flair.",
      previewTitle: "Culinary Universes",
      previewSubtitle: "Explore our menu categories crafted for every moment of your day.",
      allCategories: "All Categories",
      exploreCategory: "Explore Dishes",
      reserveToTaste: "Book to Taste",
      itemsCount: "items",
      badges: {
        signature: "Signature",
        popular: "Must Try",
        vegetarian: "Vegetarian"
      },
      searchPlaceholder: "Search for a dish or ingredient...",
      noResults: "No dishes matched your search in this category."
    },
    pillarsSection: {
      badge: "Experiences & Bespoke Venues",
      title: "Environments Tailored for Exceptional Moments",
      subtitle: "Whether celebrating, hosting executives, or relaxing to music, Villa Jnane crafts every detail.",
      ctaBookPillar: "Plan or Book This Venue"
    },
    terrasseSection: {
      badge: "The Garden & Shaded Terrace",
      title: "A Cool Sanctuary of Evergreen Beauty",
      subtitle: "The art of dining surrounded by lush botanical serenity in central Rabat",
      description: "Surrounded by heritage lemon trees, blooming bougainvillea, and the soothing sound of zellige water fountains, Villa Jnane's outdoor garden offers a remarkably cool, tranquil retreat year-round.",
      ctaReserveTerrasse: "Reserve a Shaded Garden Table",
      features: {
        shade: "Natural tree shade & bioclimatic pergolas",
        calm: "Peaceful green oasis in the heart of Rabat",
        fountain: "Refreshing microclimate cooled by fountain waters"
      }
    },
    gallery: {
      badge: "Visual Gallery & Atmosphere",
      title: "Moments of Life at Villa Jnane",
      subtitle: "A photographic journey through our garden oasis, culinary creations, and evening ambiance.",
      categories: {
        all: "View All",
        jardin: "Garden & Terrace",
        plats: "Dishes & Creations",
        ambiance: "Ambiance & Lights",
        evenements: "Salons & Events"
      },
      closeLightbox: "Close gallery",
      prevImage: "Previous image",
      nextImage: "Next image"
    },
    contact: {
      badge: "Location & Access",
      title: "Find Us & Get in Touch",
      subtitle: "Situated in one of Rabat's finest districts, Villa Jnane is easily accessible with complimentary valet parking.",
      addressLabel: "Address",
      phoneLabel: "Phone & WhatsApp",
      emailLabel: "Reservation Email",
      hoursLabel: "Opening Hours",
      getDirections: "Get Directions on Google Maps",
      mapTagline: "Lush Green Oasis • Souissi / Hassan, Rabat",
      district: "Souissi / Hassan District, Rabat"
    },
    reservationModal: {
      title: "Book a Table at Villa Jnane",
      subtitle: "Select your preferred date, time, and seating area. Instant booking request.",
      preselectedPrefix: "Booking for:",
      nameLabel: "Full Name",
      namePlaceholder: "e.g. Yasmine Benali",
      phoneLabel: "Phone Number",
      phonePlaceholder: "+212 6 00 00 00 00",
      emailLabel: "Email Address",
      emailPlaceholder: "your.email@example.com",
      dateLabel: "Reservation Date",
      timeLabel: "Preferred Time",
      guestsLabel: "Number of Guests",
      seatingLabel: "Seating Preference",
      seatingOptions: {
        terrasse: "Shaded Garden Terrace",
        salon: "Air-Conditioned Moroccan Salon",
        veranda: "Sunlit Veranda"
      },
      notesLabel: "Special Requests / Dietary Needs",
      notesPlaceholder: "Celebrating a special occasion, seating preference, or dietary request?",
      submitBtn: "Confirm Table Reservation",
      submittingBtn: "Processing...",
      successTitle: "Reservation Request Received!",
      successMessage: "Thank you! Your table request at Villa Jnane has been received. Our team will contact you shortly via SMS / WhatsApp for final confirmation.",
      closeBtn: "Close Window",
      errors: {
        nameRequired: "Please enter your full name.",
        phoneInvalid: "Please enter a valid phone number.",
        emailInvalid: "Please enter a valid email address.",
        dateRequired: "Please select a date.",
        timeRequired: "Please select a time."
      }
    },
    footer: {
      rights: "© 2026 Villa Jnane Rabat. All rights reserved.",
      tagline: "Fusion café-restaurant & shaded garden terrace in Rabat.",
      address: "Souissi / Hassan District, Rabat, Morocco",
      hours: "Monday to Sunday from 8:00 AM to 11:30 PM",
      quickLinks: "Quick Links"
    },
    common: {
      close: "Close",
      openMenu: "Open Menu",
      location: "Rabat, Morocco"
    },
    cart: {
      addToCart: "+ Add",
      cartTitle: "Your Order",
      emptyCartTitle: "Your cart is empty",
      emptyCartSubtitle: "Explore our menu specialties and add your favorite dishes.",
      yourOrder: "Selected items",
      subtotal: "Subtotal",
      checkoutWhatsApp: "Order via WhatsApp",
      nameLabel: "Full Name",
      namePlaceholder: "e.g. Yasmine Benali",
      tableNumberLabel: "Table No. (if dining in)",
      tableNumberPlaceholder: "e.g. Table 12",
      phoneLabel: "Phone Number (optional)",
      phonePlaceholder: "+212 6 00 00 00 00",
      closeCart: "Close cart",
      clearCart: "Clear cart",
      itemAdded: "Added to cart",
      requiredNameError: "Please enter your name to complete the order."
    }
  }
};
