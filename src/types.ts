export type Language = 'fr' | 'ar' | 'en';

export interface LocalizedString {
  fr: string;
  ar: string;
  en: string;
}

export interface MenuItem {
  id: string;
  name: LocalizedString;
  description: LocalizedString;
  price: string;
  category: string;
  tags?: string[];
  isSignature?: boolean;
  image?: string;
}

export interface MenuCategory {
  id: string;
  name: LocalizedString;
  description?: LocalizedString;
}

export interface PillarItem {
  id: string;
  title: LocalizedString;
  subtitle?: LocalizedString;
  description: LocalizedString;
  iconName: string;
  image?: string;
  capacity?: LocalizedString;
  features?: LocalizedString[];
}

export interface GalleryImage {
  id: string;
  title: LocalizedString;
  category: 'jardin' | 'plats' | 'ambiance' | 'evenements';
  image: string;
  alt: LocalizedString;
}

export interface ReservationData {
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  guests: number;
  seatingPreference: 'terrasse' | 'salon' | 'veranda';
  specialRequests?: string;
}

