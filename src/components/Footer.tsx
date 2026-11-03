import React, { useState } from 'react';
import { MapPin, Phone, Clock, ShieldCheck, ArrowUp, Instagram, Facebook } from 'lucide-react';
import { restaurantData } from '../data/restaurantData';

interface FooterProps {
  onOpenReservation: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenReservation }) => {
  const [modalContent, setModalContent] = useState<{ title: string; body: string } | null>(null);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openPrivacyPolicy = (e: React.MouseEvent) => {
    e.preventDefault();
    setModalContent({
      title: 'Privacy Policy',
      body: `Green Heaven Restaurant & Pub & Sport Bar (located in Türkler, Alanya, Türkiye) respects guest confidentiality. When you submit a table reservation request or contact us via WhatsApp or telephone, your details are handled strictly to coordinate table allocations and private resort transfers. For any privacy requests, please contact our concierge at ${restaurantData.phoneDisplay}.`,
    });
  };

  const openReservationPolicy = (e: React.MouseEvent) => {
    e.preventDefault();
    setModalContent({
      title: 'Reservation & Chauffeur Policy',
      body: `Table reservations at Green Heaven are reviewed directly by the restaurant maître d'. During peak dinner service and major championship broadcasts, tables are held for up to 20 minutes past the scheduled arrival time. Complimentary hotel chauffeur transfer is arranged for guests staying across the Türkler and Payallar region upon advance booking. Please notify our concierge of any schedule revisions via WhatsApp at ${restaurantData.phoneDisplay}.`,
    });
  };

  return (
    <footer className="bg-[#070B09] text-[#F5EFE4] pt-20 pb-12 border-t border-[#C5A059]/25 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-14 border-b border-[#C5A059]/15">
          
          {/* Brand Col with Official Crest & Social Media */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center space-x-3.5">
              <div className="w-10 h-10 rounded-full overflow-hidden border border-[#C5A059]/60 p-0.5 bg-[#070B09]">
                <img
                  src={restaurantData.logoUrl}
                  alt="Green Heaven Seal"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <span className="font-serif-luxury text-2xl font-normal tracking-[0.2em] text-[#F5EFE4]">
                GREEN HEAVEN
              </span>
            </div>

            <p className="text-xs uppercase tracking-[0.2em] text-[#C5A059] font-medium">
              Prime Steaks · Cold Draught Beers · Live Sports · Free Hotel Shuttle
            </p>

            <p className="text-xs text-[#E5DDD0]/70 leading-relaxed max-w-md font-light">
              Delicious dry-aged steaks, ice-cold draught beers, big-screen football matches, family dining with kids playground, and complimentary round-trip hotel pickup in Türkler &amp; Payallar, Alanya.
            </p>

            <div className="pt-2 text-xs text-[#C5A059]/80 font-mono">
              Atatürk Caddesi, Pazar Sitesi No: 5H D:F, Türkler, Alanya
            </div>

            {/* Social Media Links: Instagram, Facebook, TikTok */}
            <div className="pt-3">
              <div className="text-[10px] uppercase tracking-[0.22em] text-[#C5A059] font-semibold mb-2.5">
                Social Media &amp; Updates
              </div>
              <div className="flex items-center space-x-3">
                <a
                  href={restaurantData.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow Green Heaven on Instagram"
                  className="group flex items-center space-x-2 bg-[#0D1B15] hover:bg-[#C5A059] border border-[#C5A059]/40 hover:border-[#C5A059] px-3 py-1.5 transition-all duration-300 text-xs text-[#E5DDD0]/80 hover:text-[#070B09]"
                >
                  <Instagram className="w-3.5 h-3.5 text-[#C5A059] group-hover:text-[#070B09] transition-colors" />
                  <span className="font-medium tracking-wider text-[11px]">Instagram</span>
                </a>

                <a
                  href={restaurantData.socials.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow Green Heaven on Facebook"
                  className="group flex items-center space-x-2 bg-[#0D1B15] hover:bg-[#C5A059] border border-[#C5A059]/40 hover:border-[#C5A059] px-3 py-1.5 transition-all duration-300 text-xs text-[#E5DDD0]/80 hover:text-[#070B09]"
                >
                  <Facebook className="w-3.5 h-3.5 text-[#C5A059] group-hover:text-[#070B09] transition-colors" />
                  <span className="font-medium tracking-wider text-[11px]">Facebook</span>
                </a>

                <a
                  href={restaurantData.socials.tiktok}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow Green Heaven on TikTok"
                  className="group flex items-center space-x-2 bg-[#0D1B15] hover:bg-[#C5A059] border border-[#C5A059]/40 hover:border-[#C5A059] px-3 py-1.5 transition-all duration-300 text-xs text-[#E5DDD0]/80 hover:text-[#070B09]"
                >
                  <svg
                    className="w-3.5 h-3.5 fill-[#C5A059] group-hover:fill-[#070B09] transition-colors"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 3 15.68 6.34 6.34 0 0 0 9.34 22a6.34 6.34 0 0 0 6.34-6.32V8.75a8.16 8.16 0 0 0 4.91 1.62V6.91a4.9 4.9 0 0 1-1-.22z"/>
                  </svg>
                  <span className="font-medium tracking-wider text-[11px]">TikTok</span>
                </a>
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-[11px] uppercase tracking-[0.22em] text-[#C5A059] font-semibold">
              Salons &amp; Carte
            </h4>
            <ul className="space-y-2 text-xs text-[#E5DDD0]/70 font-light">
              <li>
                <a href="#home" className="hover:text-[#C5A059] transition-colors">The House</a>
              </li>
              <li>
                <a href="#steaks" className="hover:text-[#C5A059] transition-colors">Master Cuts</a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#C5A059] transition-colors">Philosophy</a>
              </li>
              <li>
                <a href="#menu" className="hover:text-[#C5A059] transition-colors">La Carte (1–67)</a>
              </li>
              <li>
                <a href="#sports-bar" className="hover:text-[#C5A059] transition-colors">The Cellar &amp; Lounge</a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-[#C5A059] transition-colors">Portfolio</a>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-[11px] uppercase tracking-[0.22em] text-[#C5A059] font-semibold">
              Concierge
            </h4>
            <div className="space-y-2 text-xs text-[#E5DDD0]/70 font-light">
              <p>
                <a href={`tel:${restaurantData.phoneRaw}`} className="text-[#F5EFE4] hover:text-[#C5A059] font-mono">
                  {restaurantData.phoneDisplay}
                </a>
              </p>
              <p>Daily: 08:30 – 02:00</p>
              <p>Kitchen: 11:30 – 01:00</p>
              <p className="text-[#C5A059]">Resort Chauffeur Service</p>
            </div>
          </div>

          {/* Action Col */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-[11px] uppercase tracking-[0.22em] text-[#C5A059] font-semibold">
              Dining Reservations
            </h4>
            <p className="text-xs text-[#E5DDD0]/70 leading-relaxed font-light">
              Advance table booking with complimentary hotel pickup across all Türkler luxury resorts.
            </p>

            <button
              onClick={onOpenReservation}
              className="w-full bg-[#C5A059] hover:bg-[#DFC28D] text-[#070B09] font-bold text-xs uppercase tracking-[0.18em] py-3.5 px-4 shadow transition-all cursor-pointer"
            >
              Reserve Salon Table
            </button>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#E5DDD0]/60 font-light gap-4">
          <p>© 2026 Green Heaven Restaurant &amp; Steak House. All rights reserved.</p>

          <div className="flex items-center space-x-6">
            <a
              href="#privacy"
              onClick={openPrivacyPolicy}
              className="hover:text-[#C5A059] transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#reservation-policy"
              onClick={openReservationPolicy}
              className="hover:text-[#C5A059] transition-colors"
            >
              Reservation Policy
            </a>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center space-x-1 text-[#C5A059] hover:text-[#F5EFE4] transition-colors cursor-pointer"
              aria-label="Scroll to top of page"
            >
              <span>Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>

      {/* Policy Modal */}
      {modalContent && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setModalContent(null)}
        >
          <div
            className="bg-[#0D1B15] border border-[#C5A059]/40 max-w-lg w-full p-8 text-left shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-[#C5A059]/20">
              <h3 className="font-serif-luxury text-2xl text-[#F5EFE4] font-normal">
                {modalContent.title}
              </h3>
              <button
                onClick={() => setModalContent(null)}
                className="text-[#E5DDD0]/60 hover:text-[#F5EFE4] text-sm cursor-pointer"
              >
                ✕
              </button>
            </div>
            <p className="text-xs text-[#E5DDD0]/80 leading-relaxed mb-6 font-light">
              {modalContent.body}
            </p>
            <div className="text-right">
              <button
                onClick={() => setModalContent(null)}
                className="bg-[#070B09] text-[#C5A059] border border-[#C5A059]/40 hover:bg-[#C5A059] hover:text-[#070B09] px-5 py-2.5 text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};
