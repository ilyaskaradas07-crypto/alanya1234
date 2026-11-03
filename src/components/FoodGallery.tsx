import React from 'react';
import { ArrowRight, Utensils } from 'lucide-react';
import { restaurantData } from '../data/restaurantData';

interface FoodGalleryProps {
  onExploreMenu: () => void;
}

export const FoodGallery: React.FC<FoodGalleryProps> = ({ onExploreMenu }) => {
  const showcaseImages = [
    {
      title: 'Giant Long-Bone Tomahawk Steak',
      subtitle: 'Charcoal-grilled prime rib steak with homemade pepper sauce and crispy fries',
      image: restaurantData.tomahawkHeroUrl,
      span: 'md:col-span-2 aspect-[16/10]',
    },
    {
      title: 'Match Day & Live Football Fans',
      subtitle: 'Premier League & Champions League on terrace big screens with cold pints',
      image: restaurantData.footballHeroUrl,
      span: 'md:col-span-1 aspect-[4/3]',
    },
    {
      title: 'Holiday Celebrations & Drinks',
      subtitle: 'Raising cold draught beers, cocktails, and wines under the evening lights',
      image: 'https://images.unsplash.com/photo-1529543544282-ea669407fca3?auto=format&fit=crop&w=1200&q=80',
      span: 'md:col-span-1 aspect-[4/3]',
    },
    {
      title: 'Live Music & Evening Entertainment',
      subtitle: 'Live acoustic singers, stage performances, and lively karaoke for all',
      image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=1200&q=80',
      span: 'md:col-span-1 aspect-[4/3]',
    },
    {
      title: 'Sizzling Mixed Grill Skewers',
      subtitle: 'Fresh lamb chops, marinated chicken shish, and tender beef from the grill',
      image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=1200&q=80',
      span: 'md:col-span-1 aspect-[4/3]',
    },
    {
      title: 'Happy Family Dining & Kids Play Area',
      subtitle: 'Parents relaxing with good food while children play safely in the playground',
      image: restaurantData.familyDiningHeroUrl,
      span: 'md:col-span-2 aspect-[16/9]',
    },
  ];

  return (
    <section className="py-24 bg-[#070B09] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <div className="text-xs uppercase tracking-[0.3em] text-[#C5A059] font-medium mb-3 flex items-center gap-2">
              <Utensils className="w-3.5 h-3.5 text-[#C5A059]" />
              <span>Real Moments at Green Heaven · Türkler</span>
            </div>
            <h2 className="font-serif-luxury text-3xl sm:text-5xl font-normal text-[#F5EFE4] mb-3">
              Steaks, Sports, Music &amp; Family Fun
            </h2>
            <p className="text-sm sm:text-base text-[#E5DDD0]/80 font-light max-w-xl font-serif-luxury italic">
              "A real look into our dry-aged steaks, lively match-day terrace, cold drinks, and family evenings in Türkler."
            </p>
          </div>

          <button
            onClick={onExploreMenu}
            className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.18em] text-[#C5A059] hover:text-[#F5EFE4] border-b border-[#C5A059] pb-1.5 transition-colors cursor-pointer self-start md:self-auto font-medium"
          >
            <span>Explore All 67 Dishes</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Magazine Mosaic Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {showcaseImages.map((img, idx) => (
            <div
              key={idx}
              className={`relative overflow-hidden group border border-[#C5A059]/25 bg-[#0D1B15] ${img.span}`}
            >
              <img
                src={img.image}
                alt={img.title}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 filter contrast-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#070B09] via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

              <div className="absolute bottom-5 left-5 right-5">
                <span className="text-[9px] text-[#C5A059] uppercase tracking-[0.2em] font-semibold block mb-1">
                  Green Heaven · Türkler
                </span>
                <h3 className="font-serif-luxury text-xl sm:text-2xl text-[#F5EFE4] font-normal">
                  {img.title}
                </h3>
                <p className="text-xs text-[#E5DDD0]/75 mt-0.5 font-light">
                  {img.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
