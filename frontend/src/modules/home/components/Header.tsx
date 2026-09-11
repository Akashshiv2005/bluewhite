import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, ChevronDown, Menu, X, User, Sparkles, ArrowRight, Navigation, Loader2 } from 'lucide-react';
import { useLocationContext } from '@/shared/context/LocationContext';

interface HeaderProps {
  userLocation?: string;
}

export default function Header({ userLocation }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showLocationModal, setShowLocationModal] = useState(false);
  const locationMenuRef = useRef<HTMLDivElement>(null);

  const { location, setCustomLocation, detectLocation } = useLocationContext();

  // Active city displayed: unified from shared LocationContext or fallback
  const activeCity = location.city || userLocation || 'Tiruchirappalli';

  const popularCities = [
    'Tiruchirappalli',
    'Kochi',
    'Chennai',
    'Bangalore',
    'Mumbai',
    'Delhi',
    'Coimbatore',
    'Madurai'
  ];

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (locationMenuRef.current && !locationMenuRef.current.contains(event.target as Node)) {
        setShowLocationModal(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Top Categories', href: '#categories' },
    { name: 'How BizDial Works', href: '#how-it-works' },
    { name: 'How Ranking Works', href: '#ranking' },
    { name: 'Reviews', href: '#reviews' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-[#d8efff] via-[#7ec5fc] to-[#34aafd] border-b border-white/25 shadow-[0_2px_12px_rgba(0,102,255,0.08)] transition-all h-16 flex items-center">
      <div className="max-w-[1400px] w-full mx-auto px-4 lg:px-8 flex items-center justify-between">
        
        {/* Compact & Sleek Logo */}
        <Link href="/" className="flex items-center gap-2.5 shrink-0 group">
          <div className="w-8 h-8 rounded-xl bg-white text-[#0066FF] flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
            <Sparkles size={16} className="text-[#0066FF] fill-[#0066FF]/20" />
          </div>
          <div className="flex items-baseline">
            <span className="text-[21px] font-black tracking-tight text-slate-900">Biz</span>
            <span className="text-[21px] font-black tracking-tight text-[#0052CC]">Dial</span>
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#0052CC] ml-0.5 mb-1" />
          </div>
        </Link>

        {/* Minimalist Pill Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 ml-6">
          {navLinks.map((item) => {
            const isActive = item.name === 'Home';
            return (
              <Link 
                key={item.name}
                href={item.href}
                className={`inline-flex items-center justify-center h-8 px-4 rounded-full text-xs font-extrabold leading-none transition-all ${
                  isActive 
                    ? 'bg-white text-[#0052CC] shadow-xs' 
                    : 'text-slate-900 hover:text-white hover:bg-white/25'
                }`}
              >
                <span className="leading-none pt-[1px]">{item.name}</span>
              </Link>
            );
          })}
        </nav>

        {/* Right Actions: Location, Login & List Business */}
        <div className="hidden lg:flex items-center gap-3 ml-auto">
          {/* Synchronized Location Indicator with Elevation Animation */}
          <div ref={locationMenuRef} className="relative">
            <button 
              onClick={() => setShowLocationModal(!showLocationModal)}
              className="inline-flex items-center justify-center gap-1.5 bg-white/95 hover:bg-white border border-white/80 rounded-full px-3.5 h-8 text-xs font-bold text-slate-800 transition-all cursor-pointer shadow-xs hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 leading-none"
              title="Click to change location or use GPS"
            >
              <MapPin size={13} className="text-[#0066FF] shrink-0" />
              <span className="max-w-[125px] truncate capitalize leading-none pt-[1px]">{activeCity}</span>
              <ChevronDown size={12} className={`text-slate-500 shrink-0 transition-transform duration-200 ${showLocationModal ? 'rotate-180' : ''}`} />
            </button>

            {/* Location Dropdown Modal */}
            <AnimatePresence>
              {showLocationModal && (
                <motion.div
                  initial={{ opacity: 0, y: 8, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 8, scale: 0.96 }}
                  transition={{ duration: 0.15 }}
                  className="absolute right-0 top-full mt-2 w-72 bg-white rounded-2xl p-3 shadow-xl border border-blue-100 z-50 text-slate-800"
                >
                  <div className="text-[10.5px] font-black text-slate-400 uppercase tracking-wider mb-2 px-1">
                    Select Your City
                  </div>

                  {/* GPS Detect Button */}
                  <button
                    onClick={() => {
                      detectLocation();
                      setShowLocationModal(false);
                    }}
                    className="w-full flex items-center gap-2 px-3 py-2 rounded-xl bg-blue-50 text-[#0066FF] hover:bg-blue-100/80 transition-colors text-xs font-bold mb-2.5 cursor-pointer shadow-2xs"
                  >
                    {location.loading ? (
                      <Loader2 size={14} className="animate-spin" />
                    ) : (
                      <Navigation size={14} className="fill-[#0066FF]" />
                    )}
                    <span>Use Current Location (GPS)</span>
                  </button>

                  <div className="text-[10.5px] font-black text-slate-400 uppercase tracking-wider mb-1.5 px-1">
                    Popular Cities
                  </div>
                  <div className="grid grid-cols-2 gap-1 mb-1">
                    {popularCities.map((city) => (
                      <button
                        key={city}
                        onClick={() => {
                          setCustomLocation(city);
                          setShowLocationModal(false);
                        }}
                        className={`text-left text-xs px-2.5 py-1.5 rounded-lg transition-colors font-semibold truncate cursor-pointer ${
                          activeCity.toLowerCase().includes(city.toLowerCase())
                            ? 'bg-[#0066FF] text-white font-bold'
                            : 'hover:bg-slate-50 text-slate-700'
                        }`}
                      >
                        {city}
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="h-4 w-px bg-white/40" />

          {/* Discreet Sign In */}
          <Link 
            href="/login" 
            className="inline-flex items-center justify-center gap-1.5 text-xs font-extrabold text-slate-900 hover:text-[#0052CC] bg-white/90 hover:bg-white px-3.5 h-8 rounded-full shadow-2xs transition-all hover:-translate-y-0.5 leading-none"
          >
            <User size={13} className="text-slate-600" />
            <span className="leading-none pt-[1px]">Sign In</span>
          </Link>

          {/* Compact CTA */}
          <Link 
            href="/register" 
            className="inline-flex items-center justify-center gap-1.5 bg-[#0052CC] hover:bg-[#003db3] text-white text-xs font-extrabold px-4 h-8 rounded-full shadow-[0_2px_10px_rgba(0,40,150,0.35)] hover:shadow-[0_4px_16px_rgba(0,40,150,0.45)] border border-white/30 transition-all hover:-translate-y-0.5 leading-none"
          >
            <span className="leading-none pt-[1px]">+ List Business</span>
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          aria-label="Toggle mobile menu"
          className="lg:hidden p-2 rounded-xl text-slate-900 hover:text-white hover:bg-white/20 transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

      </div>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18 }}
            className="lg:hidden bg-[#d8efff] border-b border-blue-200/80 p-4 absolute top-full left-0 right-0 shadow-xl flex flex-col gap-3 z-50"
          >
            <div className="flex items-center bg-white border border-blue-200/80 rounded-xl px-3.5 py-2.5 shadow-2xs">
              <MapPin size={15} className="text-[#0066FF] mr-2 shrink-0" />
              <span className="text-xs font-bold text-slate-800 mr-1 flex-1 capitalize">{activeCity}</span>
              <span className="text-[10px] bg-blue-100 text-[#0066FF] font-bold px-1.5 py-0.5 rounded">GPS</span>
            </div>

            <nav className="flex flex-col gap-1">
              {navLinks.map((item) => (
                <Link 
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="py-2 px-3 rounded-lg text-xs font-extrabold text-slate-800 hover:bg-white hover:text-[#0052CC] transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-2 pt-2 border-t border-blue-200/60">
              <Link 
                href="/login" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex-1 flex items-center justify-center gap-1.5 text-slate-800 font-extrabold bg-white text-xs py-2.5 rounded-full shadow-2xs hover:bg-slate-50 transition-colors"
              >
                <User size={14} /> Sign In
              </Link>
              <Link 
                href="/register" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex-1 flex items-center justify-center gap-1.5 bg-[#0052CC] hover:bg-[#003db3] text-white font-extrabold text-xs py-2.5 rounded-full transition-all shadow-sm"
              >
                <span>+ List Business</span>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

