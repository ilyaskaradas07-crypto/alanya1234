import React, { useState, useEffect } from 'react';
import { Menu, X, Calendar, UtensilsCrossed, Car, Phone } from 'lucide-react';
import { restaurantData } from '../data/restaurantData';

interface NavbarProps {
  onOpenReservation: (occasion?: string) => void;
  onOpenMenuModal: (type: 'food' | 'drinks') => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenReservation, onOpenMenuModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      const sections = ['home', 'steaks', 'about', 'menu', 'sports-bar', 'gallery', 'reviews', 'contact'];
      const scrollPosition = window.scrollY + 180;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Steaks', href: '#steaks', id: 'steaks' },
    { name: 'About Us', href: '#about', id: 'about' },
    { name: 'Full Menu', href: '#menu', id: 'menu' },
    { name: 'Sports Pub', href: '#sports-bar', id: 'sports-bar' },
    { name: 'Photos', href: '#gallery', id: 'gallery' },
    { name: 'Free Shuttle', href: '#contact', id: 'contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top Banner: Free Round-Trip Hotel Transfer */}
      <div className="bg-[#091510] border-b border-[#C5A059]/30 py-1.5 px-4 text-center">
        <div className="max-w-7xl mx-auto flex items-center justify-between text-[11px] text-[#E5DDD0]">
          <div className="flex items-center space-x-2 mx-auto sm:mx-0">
            <span className="inline-flex items-center bg-[#C5A059] text-[#070B09] font-bold px-1.5 py-0.5 rounded text-[10px] uppercase tracking-wider">
              FREE
            </span>
            <span className="font-medium text-[#F5EFE4]">
              Round-Trip Hotel Shuttle (Gidiş-Dönüş Ücretsiz Otel Servisi)
            </span>
            <span className="hidden md:inline text-[#C5A059]">
              · Türkler &amp; Payallar Hotels
            </span>
          </div>
          <div className="hidden sm:flex items-center space-x-3 text-[#C5A059]">
            <a
              href={`tel:${restaurantData.phoneRaw}`}
              className="hover:text-[#F5EFE4] transition-colors flex items-center gap-1"
            >
              <Phone className="w-3 h-3" />
              <span>{restaurantData.phoneDisplay}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar Bar */}
      <div
        className={`${
          isScrolled
            ? 'bg-[#070B09]/95 backdrop-blur-md border-b border-[#C5A059]/25 py-3 shadow-2xl'
            : 'bg-gradient-to-b from-[#070B09]/95 via-[#070B09]/80 to-transparent py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-8">
            
            {/* Brand Logo & Name */}
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, '#home')}
              className="flex items-center space-x-3 group whitespace-nowrap shrink-0 focus:outline-none focus-visible:ring-1 focus-visible:ring-[#C5A059]"
            >
              <div className="w-9 h-9 rounded-full overflow-hidden border border-[#C5A059]/60 p-0.5 bg-[#070B09] shrink-0 group-hover:border-[#C5A059] transition-colors">
                <img
                  src={restaurantData.logoUrl}
                  alt="Green Heaven Seal"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <span className="font-serif-luxury text-xl sm:text-2xl font-semibold tracking-[0.16em] text-[#F5EFE4] group-hover:text-[#C5A059] transition-colors">
                GREEN HEAVEN
              </span>
            </a>

            {/* Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-7" aria-label="Main Navigation">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`text-xs uppercase tracking-[0.16em] transition-colors relative py-1 whitespace-nowrap shrink-0 ${
                    activeSection === link.id
                      ? 'text-[#C5A059] font-bold'
                      : 'text-[#E5DDD0]/80 hover:text-[#C5A059]'
                  }`}
                >
                  {link.name}
                  {activeSection === link.id && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#C5A059]" />
                  )}
                </a>
              ))}
            </nav>

            {/* Actions */}
            <div className="hidden sm:flex items-center space-x-4 shrink-0">
              <button
                onClick={() => onOpenMenuModal('food')}
                className="text-xs uppercase tracking-[0.14em] text-[#E5DDD0]/75 hover:text-[#C5A059] transition-colors whitespace-nowrap shrink-0 cursor-pointer flex items-center space-x-1.5"
              >
                <UtensilsCrossed className="w-3.5 h-3.5 text-[#C5A059]" />
                <span>Original Menu</span>
              </button>

              <button
                onClick={() => onOpenReservation()}
                className="inline-flex items-center space-x-2 px-5 py-2 text-xs font-bold tracking-[0.16em] uppercase text-[#070B09] bg-[#C5A059] hover:bg-[#DFC28D] transition-colors whitespace-nowrap shrink-0 shadow-lg cursor-pointer"
              >
                <Car className="w-3.5 h-3.5" />
                <span>Book Table &amp; Shuttle</span>
              </button>
            </div>

            {/* Mobile Navigation Trigger */}
            <div className="flex lg:hidden items-center space-x-2">
              <button
                onClick={() => onOpenReservation()}
                className="bg-[#C5A059] text-[#070B09] text-[11px] font-bold tracking-wider uppercase px-3 py-1.5 shadow flex items-center gap-1"
              >
                <Car className="w-3 h-3" />
                <span>Book Table</span>
              </button>
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-1.5 text-[#F5EFE4] hover:text-[#C5A059] focus:outline-none focus:ring-1 focus:ring-[#C5A059]"
                aria-label="Toggle navigation menu"
                aria-expanded={isMobileMenuOpen}
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-[#070B09] border-b border-[#C5A059]/30 px-4 pt-3 pb-6 space-y-3">
            <div className="bg-[#0D1B15] p-2.5 border border-[#C5A059]/30 text-xs text-[#C5A059] flex items-center gap-2 mb-2">
              <Car className="w-4 h-4 shrink-0 text-[#C5A059]" />
              <span>Free round-trip shuttle available for all hotels in Türkler &amp; Payallar!</span>
            </div>
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="block text-sm uppercase tracking-wider text-[#E5DDD0] hover:text-[#C5A059] py-2 border-b border-[#C5A059]/10"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-2 flex flex-col gap-2">
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenMenuModal('food');
                }}
                className="w-full text-center py-2.5 text-xs uppercase tracking-wider text-[#C5A059] border border-[#C5A059]/40"
              >
                Inspect Official Menu Boards
              </button>
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenReservation();
                }}
                className="w-full text-center py-3 text-xs uppercase tracking-wider font-bold bg-[#C5A059] text-[#070B09]"
              >
                Book Table &amp; Free Shuttle
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
