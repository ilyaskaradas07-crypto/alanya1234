import React from 'react';
import { Tv, Trophy, Users, Beer, Calendar, Music, Sparkles } from 'lucide-react';
import { restaurantData } from '../data/restaurantData';

interface SportsBarSectionProps {
  onBookMatchDay: () => void;
  onPlanVisit: () => void;
}

export const SportsBarSection: React.FC<SportsBarSectionProps> = ({
  onBookMatchDay,
  onPlanVisit,
}) => {
  const sportsFeatures = [
    {
      title: 'Ice-Cold Draught Beers & Stouts',
      desc: 'Cold Guinness draught, Efes, Tuborg, Carlsberg, Heineken, and Corona served crisp and refreshing in chilled glasses.',
      icon: Beer,
    },
    {
      title: 'Big HD Screens Across Terrace',
      desc: 'Crystal-clear screens positioned all around the garden terrace and indoor air-conditioned bar so you never miss a goal.',
      icon: Tv,
    },
    {
      title: 'Whiskeys & Tropical Cocktails',
      desc: 'Full selection of popular whiskeys (Jack Daniel\'s, Chivas, Jameson, Red Label) and over 24 exotic cocktails and party aquariums.',
      icon: Trophy,
    },
    {
      title: 'Friendly Match-Day Atmosphere',
      desc: 'A fun, welcoming pub atmosphere where holidaymakers and football fans from all countries watch together and celebrate.',
      icon: Users,
    },
  ];

  const popularLeagues = [
    'Premier League',
    'UEFA Champions League',
    'La Liga',
    'Bundesliga',
    'Formula 1',
    'Rugby & Boxing',
    'International Tournaments',
  ];

  return (
    <section id="sports-bar" className="py-24 bg-[#09100C] relative overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs uppercase tracking-[0.3em] text-[#C5A059] font-medium mb-3">
            Sports Pub &amp; Draught Beers · Türkler, Alanya
          </div>

          <h2 className="font-serif-luxury text-3xl sm:text-5xl lg:text-6xl font-normal text-[#F5EFE4] mb-4 leading-tight">
            Live Sports Pub &amp; Draught Beer
          </h2>

          <p className="text-sm sm:text-base text-[#E5DDD0]/80 font-light leading-relaxed font-serif-luxury italic max-w-xl mx-auto">
            "Watch your favourite football team on big screens with cold draught pints, juicy burgers, and friendly fans on our open terrace."
          </p>
        </div>

        {/* Dual Visual Showcase: Match-Day Football Crowds & Evening Live Entertainment */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          
          {/* Card 1: Live Football & Match-Day Cheering */}
          <div className="relative border border-[#C5A059]/40 shadow-2xl overflow-hidden bg-[#070B09] group min-h-[360px] flex flex-col justify-end">
            <img
              src={restaurantData.footballHeroUrl}
              alt="Live Premier League & Football Match Day at Green Heaven Türkler"
              className="absolute inset-0 w-full h-full object-cover filter contrast-110 group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#070B09] via-[#070B09]/50 to-transparent" />
            
            <div className="relative z-10 p-6 sm:p-8">
              <div className="inline-flex items-center space-x-2 bg-[#C5A059] text-[#070B09] text-[10px] uppercase font-bold tracking-[0.2em] px-2.5 py-1 mb-3">
                <Trophy className="w-3 h-3" />
                <span>Premier League &amp; UCL Live</span>
              </div>
              <h3 className="font-serif-luxury text-2xl sm:text-3xl font-normal text-[#F5EFE4] mb-2">
                Live Football Match Day Atmosphere
              </h3>
              <p className="text-xs text-[#E5DDD0]/85 font-light leading-relaxed max-w-md">
                Cheer your club with international fans on our open terrace. Multiple high-clarity big screens, great match commentary, and ice-cold draught pints served right to your table.
              </p>
            </div>
          </div>

          {/* Card 2: Evening Live Entertainment, Singer & Karaoke */}
          <div className="relative border border-[#C5A059]/40 shadow-2xl overflow-hidden bg-[#070B09] group min-h-[360px] flex flex-col justify-end">
            <img
              src="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=1200&q=80"
              alt="Live Music, Evening Entertainment and Karaoke at Green Heaven"
              className="absolute inset-0 w-full h-full object-cover filter contrast-110 group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#070B09] via-[#070B09]/50 to-transparent" />
            
            <div className="relative z-10 p-6 sm:p-8">
              <div className="inline-flex items-center space-x-2 bg-[#0D1B15] border border-[#C5A059] text-[#C5A059] text-[10px] uppercase font-bold tracking-[0.2em] px-2.5 py-1 mb-3">
                <Music className="w-3 h-3" />
                <span>Every Evening · Shows &amp; Karaoke</span>
              </div>
              <h3 className="font-serif-luxury text-2xl sm:text-3xl font-normal text-[#F5EFE4] mb-2">
                Live Music, Dance &amp; Karaoke Fun
              </h3>
              <p className="text-xs text-[#E5DDD0]/85 font-light leading-relaxed max-w-md">
                Acoustic musicians, professional stage shows, lively karaoke nights, and holiday toasts beneath glowing lights on the palm terrace.
              </p>
            </div>
          </div>

        </div>

        {/* 4 Feature Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-14">
          {sportsFeatures.map((feat, idx) => {
            const Icon = feat.icon;
            return (
              <div
                key={idx}
                className="bg-[#0D1B15] border border-[#C5A059]/25 p-5 shadow-lg hover:border-[#C5A059]/50 transition-colors"
              >
                <div className="w-9 h-9 bg-[#070B09] border border-[#C5A059]/30 text-[#C5A059] flex items-center justify-center mb-3">
                  <Icon className="w-4 h-4" />
                </div>
                <h4 className="font-serif-luxury text-base text-[#F5EFE4] mb-1.5 font-medium">
                  {feat.title}
                </h4>
                <p className="text-xs text-[#E5DDD0]/75 font-light leading-relaxed">
                  {feat.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* League Bar & CTAs */}
        <div className="bg-[#070B09] border border-[#C5A059]/30 p-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <span className="text-[10px] text-[#C5A059] uppercase tracking-[0.25em] font-semibold block mb-1">
              Live Broadcast Schedule
            </span>
            <div className="flex flex-wrap items-center gap-2 mt-1">
              {popularLeagues.map((league) => (
                <span
                  key={league}
                  className="text-xs bg-[#0D1B15] border border-[#C5A059]/20 text-[#E5DDD0]/90 px-2.5 py-1"
                >
                  {league}
                </span>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={onBookMatchDay}
              className="inline-flex items-center space-x-2 bg-[#C5A059] hover:bg-[#DFC28D] text-[#070B09] font-bold text-xs uppercase tracking-[0.16em] px-6 py-3 transition-colors cursor-pointer"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Reserve Match Table</span>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
