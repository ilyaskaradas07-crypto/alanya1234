import React from 'react';
import { Compass, Wine, Music, MapPin, ArrowRight, ShieldCheck, Car, Heart } from 'lucide-react';
import { restaurantData } from '../data/restaurantData';

interface AboutSectionProps {
  onDiscoverClick: () => void;
  onOpenMenuModal: (type: 'food' | 'drinks') => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onDiscoverClick, onOpenMenuModal }) => {
  return (
    <section id="about" className="py-24 bg-[#070B09] relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#0D1B15] rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Authentic Restaurant Terrace Photograph */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Authentic Photo with Evening Veranda Atmosphere */}
              <div className="relative overflow-hidden border border-[#C5A059]/40 shadow-2xl aspect-[4/5] bg-[#070B09]">
                <img
                  src={restaurantData.realTerracePhotoUrl}
                  alt="Green Heaven Steak House & Pub outdoor terrace in Türkler, Alanya"
                  className="w-full h-full object-cover object-center filter contrast-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#070B09] via-transparent to-transparent opacity-80" />
                
                {/* Entertainment & Veranda Inscription */}
                <div className="absolute top-4 left-4 right-4 bg-[#070B09]/90 backdrop-blur-md p-4 border border-[#C5A059]/30">
                  <div className="flex items-center space-x-2 text-[#C5A059] mb-1">
                    <Music className="w-3.5 h-3.5" />
                    <span className="text-[10px] uppercase tracking-[0.22em] font-semibold">
                      Live Evening Entertainment
                    </span>
                  </div>
                  <p className="text-xs text-[#F5EFE4] font-medium leading-relaxed font-serif-luxury">
                    Live Singers · Fun Karaoke · Dance Shows · Big-Screen Football
                  </p>
                </div>

                {/* Location & Distinction Marker */}
                <div className="absolute bottom-4 left-4 right-4 bg-[#070B09]/95 backdrop-blur-md p-4 border border-[#C5A059]/30 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] text-[#C5A059] uppercase tracking-[0.2em] block font-medium">
                      Open Terrace · Türkler, Alanya
                    </span>
                    <span className="text-sm font-serif-luxury text-[#F5EFE4]">
                      4.8 / 5.0 Star Rating (180+ Reviews)
                    </span>
                  </div>
                  <div className="flex items-center text-xs text-[#E5DDD0]/80">
                    <MapPin className="w-3.5 h-3.5 mr-1 text-[#C5A059]" />
                    <span>Atatürk Cad.</span>
                  </div>
                </div>
              </div>

              {/* Free Round-Trip Hotel Transfer Callout */}
              <div className="absolute -bottom-5 -right-4 bg-[#0D1B15] border-2 border-[#C5A059] p-4 shadow-2xl max-w-[240px] hidden sm:block">
                <div className="flex items-center space-x-2 text-[#C5A059] mb-1">
                  <Car className="w-4 h-4 text-[#C5A059]" />
                  <span className="text-[10px] font-bold uppercase tracking-[0.16em]">
                    Free Hotel Transfer
                  </span>
                </div>
                <p className="text-[11px] text-[#F5EFE4] leading-snug font-medium">
                  Gidiş - Dönüş Ücretsiz Servis! We pick you up from your hotel &amp; drive you back.
                </p>
              </div>

            </div>
          </div>

          {/* Right Column: Welcoming Story & Values */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            
            <div className="text-xs uppercase tracking-[0.3em] text-[#C5A059] font-medium mb-3 flex items-center gap-1.5">
              <Heart className="w-3.5 h-3.5 text-[#C5A059]" />
              <span>Welcome to Green Heaven</span>
            </div>

            <h2 className="font-serif-luxury text-3xl sm:text-5xl font-normal text-[#F5EFE4] mb-5 leading-tight">
              Great Steaks, Cold Beer &amp; Warm Family Hospitality
            </h2>

            <p className="text-base text-[#E5DDD0]/90 leading-relaxed mb-6 font-serif-luxury italic">
              "We take pride in serving delicious, sizzling steaks and welcoming every guest like a close friend on holiday in Alanya."
            </p>

            <p className="text-xs sm:text-sm text-[#E5DDD0]/75 leading-relaxed mb-8 font-light">
              Located on Atatürk Caddesi in Türkler, Green Heaven is the perfect spot for delicious food and relaxed holiday evenings. Whether you want a thick dry-aged ribeye steak, cold draught pints while watching the match, a fun family dinner with kids running in the garden playground, or lively karaoke under the stars — we make sure you have a wonderful time from the moment our free shuttle picks you up.
            </p>

            {/* 3 Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              <div className="bg-[#0D1B15] border border-[#C5A059]/20 p-4">
                <span className="text-[10px] uppercase tracking-[0.2em] text-[#C5A059] block font-semibold mb-1">
                  01. The Steaks
                </span>
                <h3 className="font-serif-luxury text-sm text-[#F5EFE4] mb-1">Flame-Grilled Cuts</h3>
                <p className="text-[11px] text-[#E5DDD0]/60 leading-relaxed font-light">
                  Ribeye, Tomahawk, Fillet &amp; homemade sauces.
                </p>
              </div>

              <div className="bg-[#0D1B15] border border-[#C5A059]/20 p-4">
                <span className="text-[10px] uppercase tracking-[0.2em] text-[#C5A059] block font-semibold mb-1">
                  02. The Pub Bar
                </span>
                <h3 className="font-serif-luxury text-sm text-[#F5EFE4] mb-1">Cold Draught Pints</h3>
                <p className="text-[11px] text-[#E5DDD0]/60 leading-relaxed font-light">
                  Guinness, lagers, whiskeys &amp; cocktails.
                </p>
              </div>

              <div className="bg-[#0D1B15] border border-[#C5A059]/20 p-4">
                <span className="text-[10px] uppercase tracking-[0.2em] text-[#C5A059] block font-semibold mb-1">
                  03. Free Shuttle
                </span>
                <h3 className="font-serif-luxury text-sm text-[#F5EFE4] mb-1">Round-Trip Pickup</h3>
                <p className="text-[11px] text-[#E5DDD0]/60 leading-relaxed font-light">
                  Free hotel pickup and safe drop-off in Türkler.
                </p>
              </div>
            </div>

            {/* Inspection Actions */}
            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={() => onOpenMenuModal('food')}
                className="inline-flex items-center space-x-2 bg-[#C5A059] hover:bg-[#DFC28D] text-[#070B09] font-bold text-xs uppercase tracking-[0.18em] px-6 py-3.5 shadow-lg transition-all cursor-pointer"
              >
                <span>View Full 67-Dish Menu Board</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={() => onOpenMenuModal('drinks')}
                className="inline-flex items-center space-x-2 bg-[#0D1B15] hover:bg-[#12241C] text-[#F5EFE4] font-medium text-xs uppercase tracking-[0.16em] px-6 py-3.5 border border-[#C5A059]/30 hover:border-[#C5A059] transition-colors cursor-pointer"
              >
                <span>View Drinks &amp; Cocktails Board</span>
              </button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
