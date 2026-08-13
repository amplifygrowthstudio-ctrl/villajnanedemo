import { MenuCategory, MenuItem } from '../types';

export const menuCategories: MenuCategory[] = [
  {
    id: 'signatures',
    name: {
      fr: 'Signatures Fusion',
      ar: 'أطباق الفيوجن المتميزة',
      en: 'Fusion Signatures',
    },
    description: {
      fr: 'Les créations emblématiques de nos chefs, mariant patrimoine marocain et haute gastronomie.',
      ar: 'إبداعات طهاتنا الاستثنائية التي تجمع بين التراث المغربي وفنون الطهي الحديثة.',
      en: 'Our chef’s flagship creations, pairing Moroccan heritage with modern gastronomy.',
    },
  },
  {
    id: 'pastillas',
    name: {
      fr: 'Entrées & Pastillas',
      ar: 'المقبلات والبسطيلة',
      en: 'Starters & Pastillas',
    },
    description: {
      fr: 'Pastillas croustillantes feuilletées, salades de jardin et entrées fines aux épices douces.',
      ar: 'بسطيلة مقرمشة، وسلطات طازجة من حديقتنا مع التوابل الناعمة.',
      en: 'Crispy flaky pastillas, garden salad bowls, and fine starters spiced with care.',
    },
  },
  {
    id: 'breakfast',
    name: {
      fr: 'Petit-Déjeuner & Brunch',
      ar: 'الإفطار والبرانش',
      en: 'Breakfast & Brunch',
    },
    description: {
      fr: 'Formules Beldi généreuses, msemen chaud, amlou artisanal, œufs aux cumin et jus frais.',
      ar: 'تشكيلة بلدي غنية، مسمن ساخن، أملو حرفي، بيض بالكمون وعصائر طازجة.',
      en: 'Generous Beldi spreads, hot msemen, artisanal amlou, cumin eggs, and fresh juices.',
    },
  },
  {
    id: 'pastry-coffee',
    name: {
      fr: 'Pâtisserie & Cafés Fine',
      ar: 'الحلويات والقهوة الفاخرة',
      en: 'Pastries & Fine Coffee',
    },
    description: {
      fr: 'Douceurs à la fleur d’oranger, corne de gazelle revisitée, espresso pure origine et thés.',
      ar: 'حلويات بماء زهر البرتقال، كعب الغزال المبتكر، وقهوة مختارة وأتاي بالنعناع.',
      en: 'Orange blossom delicacies, reinvented gazelle horns, single-origin espressos and teas.',
    },
  },
  {
    id: 'refreshments',
    name: {
      fr: 'Mocktails & Boissons Fraîches',
      ar: 'المشروبات والعصائر الطازجة',
      en: 'Mocktails & Refreshments',
    },
    description: {
      fr: 'Infusions glacées au romarin du jardin, jus de grenades pressées et mocktails signature.',
      ar: 'مشروبات باردة بالأعشاب الطبيعية، عصير رمان طازج وموكتيلات حصريّة.',
      en: 'Garden rosemary iced infusions, freshly pressed pomegranate, and signature mocktails.',
    },
  },
];

export const categoryImages: Record<string, string> = {
  signatures: '/images/menu-tajine-fusion.jpg',
  pastillas: '/images/menu-pastilla.jpg',
  breakfast: '/images/menu-breakfast-brunch.jpg',
  'pastry-coffee': '/images/menu-artisan-coffee.jpg',
  refreshments: '/images/menu-fresh-mocktail.jpg',
};

export const menuItems: MenuItem[] = [
  // Signatures Fusion
  {
    id: 'sig-1',
    category: 'signatures',
    isSignature: true,
    image: '/images/menu-tajine-fusion.jpg',
    price: '165 MAD',
    name: {
      fr: 'Tajine d’Agneau aux Figues Caramélisées & Sésame',
      ar: 'طاجين لحم الضأن بالتين المعسل والسمسم',
      en: 'Lamb Tagine with Caramelized Figs & Roasted Sesame',
    },
    description: {
      fr: 'Souris d’agneau mijotée 7 heures aux épices de Ras el Hanout, figues fraîches rôties, amandes effilées et réduction de jus de grenade.',
      ar: 'لحم ضأن مطهو ببطء لمدة ٧ ساعات مع رأس الحانوت، تين طازج محمص، لوز وشربات الرمان.',
      en: '7-hour slow-cooked lamb shank infused with Ras el Hanout, roasted fresh figs, toasted almonds, and pomegranate glaze.',
    },
    tags: ['Signature', 'Populaire'],
  },
  {
    id: 'sig-2',
    category: 'signatures',
    isSignature: true,
    image: '/images/menu-tajine-fusion.jpg',
    price: '180 MAD',
    name: {
      fr: 'Filet de Saint-Pierre Snacké, Émulsion Safran de Taliouine',
      ar: 'فيليه سمك سان بيير مع مستخلص الزعفران الحر',
      en: 'Pan-seared John Dory, Taliouine Saffron Emulsion',
    },
    description: {
      fr: 'Poisson frais des côtes marocaines, écrasé de pommes de terre à l’huile d’olive d’Atlas, légumes croquants du potager et safran d’or.',
      ar: 'سمك طازج من الشواطئ المغربية، بطاطس مهروسة برياض الأطلس وخضار مشوية مع الزعفران.',
      en: 'Fresh Atlantic John Dory with Atlas olive oil potato mash, charred garden vegetables, and pure golden saffron cream.',
    },
    tags: ['Signature'],
  },
  {
    id: 'sig-3',
    category: 'signatures',
    price: '145 MAD',
    image: '/images/menu-tajine-fusion.jpg',
    name: {
      fr: 'Risotto au Poulet Fermier & Citron Confit de Marrakech',
      ar: 'ريزوتو الدجاج البلدي والحامض المسير',
      en: 'Free-Range Chicken Risotto with Marrakech Preserved Lemon',
    },
    description: {
      fr: 'Riz Arborio crémeux, suprême de poulet mariné aux herbes du jardin, olives vertes cassées, parmesan affiné et zeste de citron confit.',
      ar: 'أرز أربوريو كريمي، دجاج بلدي متبل بأعشاب الحديقة، زيتون أخضر وحامض مصير مع جبن البارميزان.',
      en: 'Creamy Arborio rice with herb-marinated free-range chicken, cracked green olives, aged parmesan, and preserved lemon zest.',
    },
    tags: ['Populaire'],
  },

  // Pastillas & Entrées
  {
    id: 'pas-1',
    category: 'pastillas',
    isSignature: true,
    image: '/images/menu-pastilla.jpg',
    price: '130 MAD',
    name: {
      fr: 'Pastilla Royale au Poulet, Amandes & Fleur d’Oranger',
      ar: 'بسطيلة دجاج ملكية باللوز وماء الزهر',
      en: 'Royal Chicken Pastilla with Toasted Almonds & Blossom Water',
    },
    description: {
      fr: 'Pâte ورقة artisanale croustillante, effiloché de poulet épicé au gingembre et cannelle, cœur croquant d’amandes torréfiées et voile de sucre glace.',
      ar: 'ورقة بسطيلة مقرمشة، دجاج مفروم بالتوابل والقرامش، لوز محمص ومرشوش بالسكر الناعم والقرفة.',
      en: 'Crispy artisanal warka pastry filled with spiced shredded chicken, cinnamon, toasted crunch almonds, and fine powdered sugar geometric art.',
    },
    tags: ['Signature', 'Populaire'],
  },
  {
    id: 'pas-2',
    category: 'pastillas',
    image: '/images/menu-pastilla.jpg',
    price: '155 MAD',
    name: {
      fr: 'Mini Pastillas aux Fruits de Mer & Vermicelle Asiatique',
      ar: 'بسطيلة صغيرة بفواكه البحر والشعرية',
      en: 'Seafood Mini Pastillas with Asian Glass Noodles',
    },
    description: {
      fr: 'Trio de pastillas farcies aux crevettes royales, calamars, champignons noirs, sauce piquante harrissa maison et huile de sésame.',
      ar: 'ثلاثيات بسطيلة محشوة بجمبري ملكي، كالاماري، فطر أسود، هريسة منزلية وزيت السمسم.',
      en: 'Trio of pastillas packed with king prawns, squid, black mushrooms, spicy house harissa glaze, and sesame aroma.',
    },
    tags: ['Populaire'],
  },
  {
    id: 'pas-3',
    category: 'pastillas',
    image: '/images/about-garden-courtyard.jpg',
    price: '85 MAD',
    name: {
      fr: 'Salade Jnane aux Agrumes, Avocat & Chèvre Chaud',
      ar: 'سلطة جنان بالحمضيات والأفوكادو وجبن المعز',
      en: 'Jnane Garden Salad with Citrus, Avocado & Warm Goat Cheese',
    },
    description: {
      fr: 'Jeunes pousses du jardin, suprêmes d’orange et pamplemousse, avocat crémeux, toasts de chèvre artisanal doré au miel d’acacia et pignons de pin.',
      ar: 'أوراق الخس الطازجة، قطع البرتقال والليمون الهندسي، أفوكادو وجبن معز دافئ مع العسل والصنوبر.',
      en: 'Garden greens, fresh orange & grapefruit segments, creamy avocado, warm goat cheese crostini with acacia honey and toasted pine nuts.',
    },
    tags: ['Végétarien'],
  },

  // Breakfast & Brunch
  {
    id: 'brk-1',
    category: 'breakfast',
    isSignature: true,
    image: '/images/menu-breakfast-brunch.jpg',
    price: '110 MAD',
    name: {
      fr: 'Le Grand Brunch Beldi Villa Jnane',
      ar: 'برانش بلدي الفاخر فيلا جنان',
      en: 'Villa Jnane Grand Beldi Brunch',
    },
    description: {
      fr: 'Assortiment complet: msemen feuilleté, harcha chaude, amlou de Souss au miel de thym, fromage frais de chèvre, œufs au khlii ou cumin, jus d’orange pressé et thé à la menthe.',
      ar: 'تشكيلة كاملة: مسمن، حرشة داكنة، أملو سوسي بعسل الزعتر، جبن بلدي، بيض بالخليع أو الكمون، عصير برتقال وأتاي.',
      en: 'Complete feast: flaky msemen, warm harcha bread, Souss amlou with thyme honey, fresh goat cheese, eggs with khlii or cumin, freshly squeezed orange juice, and mint tea.',
    },
    tags: ['Signature', 'Populaire'],
  },
  {
    id: 'brk-2',
    category: 'breakfast',
    image: '/images/menu-breakfast-brunch.jpg',
    price: '95 MAD',
    name: {
      fr: 'Toast Avocat, Œuf Poché & Saumon Fumé',
      ar: 'توست الأفوكادو مع البيض المفقوس والسلمون',
      en: 'Avocado Toast with Poached Egg & Smoked Salmon',
    },
    description: {
      fr: 'Pain au levain artisanal toasté, écrasé d’avocat au citron vert, saumon fumé de Norvège, œuf poché coulant et graines de tournesol torréfiées.',
      ar: 'خبز التوست الحرفي، أفوكادو مهروس بالليمون الأخضر، سلمون نرويجي مدخن، بيض مفقوس وبذور الشمس.',
      en: 'Artisanal sourdough toast, lime-crushed avocado, smoked Norwegian salmon, runny organic poached egg, and toasted seeds.',
    },
  },

  // Pastry & Fine Coffee
  {
    id: 'pât-1',
    category: 'pastry-coffee',
    isSignature: true,
    image: '/images/menu-artisan-coffee.jpg',
    price: '65 MAD',
    name: {
      fr: 'Corne de Gazelle Déstructurée & Glace Fleur d’Oranger',
      ar: 'كعب الغزال المبتكر مع آيس كريم زهر البرتقال',
      en: 'Deconstructed Gazelle Horn with Orange Blossom Gelato',
    },
    description: {
      fr: 'Croustillant d’amandes à la cannelle, crème légère à la mastic, glace artisanale à la fleur d’oranger et coulis de miel chaud.',
      ar: 'رقائق اللوز بالقرفة، خفيفة الكريمة مع الآيس كريم الحرفي بماء الزهر وعسل سدر دافئ.',
      en: 'Crispy cinnamon almond brittle, mastic cream, house-churned orange blossom gelato, and warm wildflower honey drizzle.',
    },
    tags: ['Signature'],
  },
  {
    id: 'pât-2',
    category: 'pastry-coffee',
    image: '/images/menu-artisan-coffee.jpg',
    price: '45 MAD',
    name: {
      fr: 'Café Cappuccino Spécialité Jnane & Épices Douces',
      ar: 'كابوتشينو جنان مع التوابل الناعمة',
      en: 'Jnane Specialty Spiced Cappuccino',
    },
    description: {
      fr: 'Double espresso 100% Arabica pure origine, mousse de lait veloutée infusée à la cardamom et cannelle de Ceylan.',
      ar: 'إسبريسو مضاعف، حليب مخفوق مع الهال وقرفة سيلان الفاخرة.',
      en: 'Double shot 100% Arabica single origin espresso with velvety steamed milk infused with cardamom and Ceylon cinnamon.',
    },
    tags: ['Populaire'],
  },

  // Refreshments & Mocktails
  {
    id: 'ref-1',
    category: 'refreshments',
    isSignature: true,
    image: '/images/menu-fresh-mocktail.jpg',
    price: '55 MAD',
    name: {
      fr: 'Mocktail Signature Jardin Jnane',
      ar: 'موكتيل حديقة جنان الحصري',
      en: 'Jnane Garden Signature Mocktail',
    },
    description: {
      fr: 'Jus de grenade frais, menthe marocaine pilée, eau de fleur d’oranger, citron vert et pépites de grenade pétillantes.',
      ar: 'عصير رمان طازج، نعناع مغربي، ماء زهر البرتقال، حامض أخضر ولمسة غازية منعشة.',
      en: 'Fresh pomegranate juice, muddled Moroccan mint, organic orange blossom mist, lime, and sparkling splash.',
    },
    tags: ['Signature', 'Populaire'],
  },
  {
    id: 'ref-2',
    category: 'refreshments',
    image: '/images/menu-fresh-mocktail.jpg',
    price: '45 MAD',
    name: {
      fr: 'Infusion Glacée Romarin, Miel & Citron de Rabat',
      ar: 'مشروب بارد بالأكليل والعسل وحامض الرباط',
      en: 'Iced Rosemary, Honey & Rabat Lemon Infusion',
    },
    description: {
      fr: 'Romarin frais récolté dans notre jardin, jus de citron jaune pressé, miel pur d’Atlas et glaçons à la menthe.',
      ar: 'إكليل الجبل الطازج من حديقتنا، عصير ليمون طازج، عسل الأطلس النقي ومكعبات ثلج بالنعناع.',
      en: 'Fresh rosemary picked from our terrace, squeezed lemon juice, pure Atlas honey, and mint ice cubes.',
    },
    tags: ['Végétarien'],
  },
];
