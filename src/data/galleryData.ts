export interface GalleryItem {
  id: string;
  title: string;
  category: 'Live Sports & Matches' | 'Evening Entertainment' | 'Group Gatherings' | 'British Steakhouse' | 'Official Menus';
  description: string;
  imageUrl: string;
  isAuthenticAsset?: boolean;
}

export const galleryCategories = [
  'All',
  'British Steakhouse',
  'Group Gatherings',
  'Live Sports & Matches',
  'Evening Entertainment',
  'Official Menus',
] as const;

export const galleryItems: GalleryItem[] = [
  {
    id: 'gal-real-terrace',
    title: 'Green Heaven Open-Air Terrace & Pub',
    category: 'Group Gatherings',
    description: 'The real lively terrace in Türkler with our neon "GREEN HEAVEN STEAK HOUSE PUB" sign, smiling guests, and evening atmosphere.',
    imageUrl: '/assets/aistudio/603752475_1472498971549952_7593596984536932200_n__1__0493efb5.jpg',
    isAuthenticAsset: true,
  },
  {
    id: 'gal-prime-ribeye',
    title: 'Dry-Aged Prime Ribeye Steak',
    category: 'British Steakhouse',
    description: 'Juicy, flame-grilled 35-day dry-aged ribeye steak cut thick and served with crispy golden fries and homemade peppercorn sauce.',
    imageUrl: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'gal-grand-tomahawk',
    title: 'Giant Long-Bone Tomahawk Steak',
    category: 'British Steakhouse',
    description: 'Our iconic 1.1kg flame-grilled tomahawk steak, perfect for sharing with family and friends at the table.',
    imageUrl: 'https://images.unsplash.com/photo-1546964124-0cce460f38ef?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'gal-football-fans-match',
    title: 'Match Day & Live Football Screenings',
    category: 'Live Sports & Matches',
    description: 'Supporters and football lovers cheering Premier League and Champions League matches on big HD screens with cold draught beers.',
    imageUrl: 'https://images.unsplash.com/photo-1511193311914-0346f16efe90?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'gal-family-dinner',
    title: 'Warm Family Dinners & Kids Having Fun',
    category: 'Group Gatherings',
    description: 'Parents unwinding with good food and wine while children play happily and safely in our enclosed playground area.',
    imageUrl: 'https://images.unsplash.com/photo-1543007630-9710e4a00a20?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'gal-group-celebration-toast',
    title: 'Celebrations, Birthdays & Holiday Cheers',
    category: 'Group Gatherings',
    description: 'Holidaymakers and friends raising glasses of cold pints and exotic cocktails on our cozy garden terrace.',
    imageUrl: 'https://images.unsplash.com/photo-1529543544282-ea669407fca3?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'gal-sizzling-mixed-grill',
    title: 'Sizzling Mixed Grill Skewers & Steaks',
    category: 'British Steakhouse',
    description: 'Tender marinated lamb chops, authentic chicken shish, and beef skewers sizzling hot from the charcoal grill.',
    imageUrl: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'gal-evening-live-music',
    title: 'Live Music, Stage Shows & Karaoke Night',
    category: 'Evening Entertainment',
    description: 'Every evening comes alive with talented singers, acoustic guitar, dance performances, and fun karaoke for everyone.',
    imageUrl: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'gal-draught-pints',
    title: 'Ice-Cold Draught Beers & Cocktails',
    category: 'Live Sports & Matches',
    description: 'Pint of Guinness, Tuborg, Efes, Carlsberg, and refreshing tropical cocktails served icy cold on warm Turkish evenings.',
    imageUrl: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'gal-tenderloin-fillet',
    title: 'Tenderloin Fillet Steak',
    category: 'British Steakhouse',
    description: 'Butter-soft fillet steak seared to perfection and drizzled with rich wild forest mushroom sauce.',
    imageUrl: 'https://images.unsplash.com/photo-1504973960431-1c467e159aa4?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'gal-real-food-menu',
    title: 'Official Food Menu Board (All 67 Dishes)',
    category: 'Official Menus',
    description: 'The real printed menu board from Green Heaven in Türkler showing Starters, Steaks, Grills, Pastas, Pizzas, and Indian dishes.',
    imageUrl: '/assets/aistudio/632933134_1520100843456431_7241556113060499993_n_452e020b.jpg',
    isAuthenticAsset: true,
  },
  {
    id: 'gal-real-drinks-menu',
    title: 'Official Drinks, Beers & Cocktails Board',
    category: 'Official Menus',
    description: 'The real printed drinks menu featuring draught beers, whiskeys, 24+ classic cocktails, and giant party fish bowls.',
    imageUrl: '/assets/aistudio/658773953_1559876412812207_2444740381900634416_n_4739a148.jpg',
    isAuthenticAsset: true,
  },
  {
    id: 'gal-real-logo',
    title: 'Official Green Heaven Seal & Logo',
    category: 'Official Menus',
    description: 'The golden palm and sunset emblem of Green Heaven Restaurant Steak House Sport Bar.',
    imageUrl: '/assets/aistudio/662062279_1565494492250399_5201436733719656398_n_7b0b9a48.jpg',
    isAuthenticAsset: true,
  },
];
