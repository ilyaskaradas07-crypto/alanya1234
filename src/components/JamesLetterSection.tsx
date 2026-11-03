import React from 'react';
import { MessageSquare, Phone, Calendar, Heart, Car, Smile } from 'lucide-react';
import { restaurantData } from '../data/restaurantData';

interface JamesLetterSectionProps {
  onBookTable: () => void;
}

export const JamesLetterSection: React.FC<JamesLetterSectionProps> = ({ onBookTable }) => {
  return (
    <section id="james-letter" className="py-20 sm:py-24 bg-[#060907] relative overflow-hidden border-t border-[#C5A059]/20">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[42rem] h-[42rem] bg-[#0D1B15] rounded-full blur-[150px] pointer-events-none opacity-60" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Warm & Elegant Letter Frame */}
        <div className="bg-[#0A1410] border-2 border-[#C5A059]/40 p-7 sm:p-12 lg:p-14 shadow-2xl relative">
          
          {/* Subtle Corner Accents */}
          <div className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 border-[#C5A059]" />
          <div className="absolute top-3 right-3 w-4 h-4 border-t-2 border-r-2 border-[#C5A059]" />
          <div className="absolute bottom-3 left-3 w-4 h-4 border-b-2 border-l-2 border-[#C5A059]" />
          <div className="absolute bottom-3 right-3 w-4 h-4 border-b-2 border-r-2 border-[#C5A059]" />

          {/* Letter Header */}
          <div className="text-center pb-8 mb-8 border-b border-[#C5A059]/20">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full mx-auto mb-4 border-2 border-[#C5A059] p-0.5 bg-[#070B09] shadow-lg">
              <img
                src={restaurantData.logoUrl}
                alt="Green Heaven Seal"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <div className="text-[11px] uppercase tracking-[0.25em] text-[#C5A059] font-semibold mb-2 flex items-center justify-center gap-1.5">
              <Heart className="w-3.5 h-3.5 text-[#C5A059]" />
              <span>A Warm Family Note From Our Table to Yours</span>
            </div>
            <h2 className="font-serif-luxury text-2xl sm:text-4xl text-[#F5EFE4] font-normal tracking-wide">
              A Personal Welcome from James
            </h2>
            <div className="text-xs text-[#E5DDD0]/70 font-light mt-1 tracking-wider uppercase">
              Host &amp; Family Proprietor · Green Heaven Türkler
            </div>
          </div>

          {/* Warm, Family-Centered Message in Natural, Friendly English */}
          <div className="space-y-5 text-[#E5DDD0]/90 font-serif-luxury text-base sm:text-lg leading-relaxed sm:leading-loose">
            <p className="italic text-[#F5EFE4] text-lg sm:text-xl font-normal">
              Dear Friends, Families, and Fellow Holidaymakers,
            </p>

            <p>
              When you visit us at <span className="text-[#C5A059] font-semibold">Green Heaven</span>, we want you to feel like you are walking into a good friend's home. 
              Holidays are so precious — they are the few weeks in a year when mums, dads, grandparents, and kids can slow down, sit around a big table together, and share smiles after a sun-filled day by the sea.
            </p>

            <p>
              Whether you're craving a juicy, sizzling ribeye steak, a cold draught pint while watching the football, or a fun night singing along to live music, our whole team is here to look after you. We built our enclosed garden playground so your little ones can run around happily and safely, giving parents the chance to unwind with a glass of wine and truly relax.
            </p>

            <p>
              And please, never worry about finding a taxi. Our <span className="text-[#C5A059] font-medium">Free Round-Trip Hotel Transfer</span> is always ready. Just let us know which hotel you're staying at in Türkler or Payallar, and our driver will pick your whole family up from your lobby and bring you back safely whenever you are ready.
            </p>

            <p>
              From my family and all of us at Green Heaven to yours: thank you for letting us be part of your holiday memories. Come as our guests, and leave as our lifelong friends.
            </p>
          </div>

          {/* Valediction & Signature */}
          <div className="mt-8 pt-8 border-t border-[#C5A059]/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <p className="text-xs text-[#C5A059] uppercase tracking-[0.2em] font-medium mb-1">
                Warmest Wishes &amp; Big Smiles,
              </p>
              <div className="font-serif-luxury text-2xl sm:text-3xl text-[#F5EFE4] italic font-normal">
                James &amp; the Green Heaven Family
              </div>
              <p className="text-[11px] text-[#E5DDD0]/60 mt-1">
                Atatürk Caddesi, Pazar Sitesi No: 5H D:F, Türkler Mahallesi, Alanya
              </p>
            </div>

            {/* Direct CTAs */}
            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={onBookTable}
                className="inline-flex items-center space-x-2 bg-[#C5A059] hover:bg-[#DFC28D] text-[#070B09] font-bold text-xs uppercase tracking-[0.16em] px-5 py-3 shadow-lg transition-all cursor-pointer"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Book a Family Table</span>
              </button>

              <a
                href={restaurantData.whatsappDirectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-[#25D366] hover:bg-[#20ba59] text-white font-medium text-xs uppercase tracking-[0.14em] px-5 py-3 shadow-lg transition-all"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>WhatsApp (+90 539 944 32 04)</span>
              </a>

              <a
                href={`tel:${restaurantData.phoneRaw}`}
                className="inline-flex items-center space-x-2 bg-[#070B09] hover:bg-[#0D1B15] text-[#C5A059] border border-[#C5A059]/40 font-medium text-xs uppercase tracking-[0.14em] px-4 py-3 transition-all"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call James</span>
              </a>
            </div>
          </div>

          {/* Round-trip Transfer highlight badge inside letter */}
          <div className="mt-6 pt-4 border-t border-[#C5A059]/10 flex items-center gap-2 text-xs text-[#C5A059]">
            <Car className="w-4 h-4 text-[#C5A059] shrink-0" />
            <span>
              <strong>Free Round-Trip Shuttle (Gidiş-Dönüş):</strong> Free pickup from your hotel in Türkler/Payallar and safe return drop-off included!
            </span>
          </div>

        </div>

      </div>
    </section>
  );
};
