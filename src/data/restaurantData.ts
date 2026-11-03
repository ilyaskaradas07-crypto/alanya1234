export interface RestaurantInfo {
  name: string;
  tagline: string;
  descriptor: string;
  eyebrow: string;
  headline: string;
  subheadline: string;
  logoUrl: string;
  realTerracePhotoUrl: string;
  foodMenuPhotoUrl: string;
  drinksMenuPhotoUrl: string;
  ribeyeHeroUrl: string;
  tomahawkHeroUrl: string;
  cellarHeroUrl: string;
  terraceHeroUrl: string;
  familyDiningHeroUrl: string;
  footballHeroUrl: string;
  address: {
    street: string;
    site: string;
    district: string;
    town: string;
    province: string;
    postalCode: string;
    country: string;
    fullFormatted: string;
  };
  phoneDisplay: string;
  phoneRaw: string;
  whatsappDirectUrl: string;
  emailContact: string;
  openingHours: string;
  openingHoursDetails: Array<{ days: string; hours: string }>;
  rating: number;
  reviewCount: number;
  reviewSource: string;
  mapsUrl: string;
  socials: {
    instagram: string;
    facebook: string;
    tiktok: string;
  };
  steakSauces: string[];
  amenities: string[];
  freeShuttleInfo: {
    title: string;
    titleTr: string;
    description: string;
    coverage: string[];
  };
}

export const restaurantData: RestaurantInfo = {
  name: "GREEN HEAVEN",
  tagline: "STEAK HOUSE, PUB & SPORT BAR",
  descriptor: "Prime Steaks · Cold Draught Beer · Live Sports · Free Round-Trip Hotel Shuttle",
  eyebrow: "TÜRKLER · ALANYA",
  headline: "GREAT STEAKS, COLD PINTS & WARM FAMILY HOSPITALITY",
  subheadline: "Welcome to Türkler's favourite British Steak House and Sports Pub. Enjoy delicious dry-aged steaks, ice-cold draught beer, big-screen football, lively evening entertainment, and a safe play area for the children — with free round-trip hotel transfer directly to your door.",
  logoUrl: "/assets/aistudio/662062279_1565494492250399_5201436733719656398_n_7b0b9a48.jpg",
  realTerracePhotoUrl: "/assets/aistudio/603752475_1472498971549952_7593596984536932200_n__1__0493efb5.jpg",
  foodMenuPhotoUrl: "/assets/aistudio/632933134_1520100843456431_7241556113060499993_n_452e020b.jpg",
  drinksMenuPhotoUrl: "/assets/aistudio/658773953_1559876412812207_2444740381900634416_n_4739a148.jpg",
  // Real, high-resolution photography from Unsplash CDN for flawless global Vercel loading
  ribeyeHeroUrl: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=80",
  tomahawkHeroUrl: "https://images.unsplash.com/photo-1546964124-0cce460f38ef?auto=format&fit=crop&w=1200&q=80",
  cellarHeroUrl: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=1200&q=80",
  terraceHeroUrl: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80",
  familyDiningHeroUrl: "https://images.unsplash.com/photo-1543007630-9710e4a00a20?auto=format&fit=crop&w=1200&q=80",
  footballHeroUrl: "https://images.unsplash.com/photo-1511193311914-0346f16efe90?auto=format&fit=crop&w=1200&q=80",
  address: {
    street: "Atatürk Caddesi",
    site: "Pazar Sitesi No: 5H D:F",
    district: "Türkler Mahallesi",
    town: "Alanya",
    province: "Antalya",
    postalCode: "07407",
    country: "Türkiye",
    fullFormatted: "Atatürk Caddesi, Pazar Sitesi No: 5H D:F, Türkler, 07407 Alanya / Antalya, Türkiye",
  },
  phoneDisplay: "+90 539 944 32 04",
  phoneRaw: "905399443204",
  whatsappDirectUrl: "https://wa.me/905399443204?text=Hello%20Green%20Heaven!%20I%20would%20like%20to%20book%20a%20table%20and%20request%20the%20Free%20Round-Trip%20Hotel%20Transfer.",
  emailContact: "concierge@greenheaven-turkler.com",
  openingHours: "Open Daily: 08:30 – 02:00",
  openingHoursDetails: [
    { days: "Main Restaurant & Terrace", hours: "11:30 – 01:00" },
    { days: "Sports Bar & Draught Pints", hours: "Until 02:00" },
    { days: "Free Round-Trip Hotel Transfer", hours: "Available All Day & Night (Pickup & Drop-off)" },
    { days: "Evening Entertainment & Karaoke", hours: "Every Night with Live Music & Shows" },
  ],
  rating: 4.8,
  reviewCount: 185,
  reviewSource: "Google Maps & Restaurant Guru (Türkler)",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=Green+Heaven+Restaurant+Pub+Sport+Bar+Turkler+Alanya",
  socials: {
    instagram: "https://www.instagram.com/explore/locations/green-heaven-restaurant-turkler/",
    facebook: "https://www.facebook.com/greenheaventurkler/",
    tiktok: "https://www.tiktok.com/@greenheaventurkler",
  },
  steakSauces: [
    "Green Peppercorn Sauce",
    "Mushroom Sauce",
    "Gravy Sauce",
    "Homemade House Sauce (Recommended)",
  ],
  amenities: [
    "Free Round-Trip Hotel Transfer (Gidiş - Dönüş Ücretsiz Otel Servisi)",
    "Dry-Aged Ribeye, Tomahawk & T-Bone Steaks (Items 39–46)",
    "Cold Draught Beer & British Pub Pints (Guinness, Carlsberg, Efes)",
    "Big Screens for Live Premier League & Champions League Football",
    "Enclosed Children's Garden Playground for Family Peace of Mind",
    "Every Evening Live Entertainment, Acoustic Singers & Karaoke",
    "Full 67-Dish Menu with Steaks, Grills, Pastas, Seafood & Kids Options",
    "Spacious Open-Air Garden Terrace with Mediterranean Breeze",
  ],
  freeShuttleInfo: {
    title: "Free Round-Trip Hotel Transfer",
    titleTr: "Gidiş - Dönüş Ücretsiz Otel Transferi",
    description: "Don't worry about taxis or rental cars! We will pick you and your family up directly from your hotel lobby anywhere in Türkler, Payallar, and nearby resorts, and drive you comfortably back when your evening is done.",
    coverage: [
      "Haydarpasha Palace",
      "Long Beach Resort & Spa",
      "Eftalia Ocean, Aqua, Splash & Marin",
      "Sirius Deluxe Hotel",
      "Senza The Inn Resort",
      "Beach Club Doganay",
      "Xafira Deluxe Resort",
      "All Türkler & Payallar Hotels & Apartments",
    ],
  },
};
