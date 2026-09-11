"use client";
import React, { useState, useEffect, useRef } from 'react';
import { Search, MapPin, Loader2, Navigation, ChevronDown, Check } from 'lucide-react';
import { useLocationContext } from '@/shared/context/LocationContext';
import { motion, AnimatePresence } from 'framer-motion';
import { API_BASE } from '@/shared/services/config';

interface Suggestion {
  type: 'category' | 'business';
  text: string;
}

export default function SearchBar() {
  const { location, detectLocation, setCustomLocation } = useLocationContext();
  
  const [query, setQuery] = useState('');
  const [cityInput, setCityInput] = useState('');
  const [suggestions, setSuggestions] = useState<Suggestion[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [loadingSuggestions, setLoadingSuggestions] = useState(false);
  const [showLocationDropdown, setShowLocationDropdown] = useState(false);
  
  const wrapperRef = useRef<HTMLDivElement>(null);
  const locationBoxRef = useRef<HTMLDivElement>(null);

  const trichyLocalities = [
    'Thillai Nagar',
    'Cantonment',
    'Srirangam',
    'Singarathope',
    'KK Nagar',
    'Karur Bypass Road',
    'Anna Nagar',
    'Main Guard Gate'
  ];

  const popularCities = [
    'Tiruchirappalli',
    'Chennai',
    'Coimbatore',
    'Madurai',
    'Bangalore',
    'Kochi'
  ];

  const searchPlaceholders = [
    "Search top-rated restaurants in Thillai Nagar...",
    "Search multi-speciality hospitals in Cantonment...",
    "Search verified mobile shops in Singarathope...",
    "Search bridal salons & spas in Trichy...",
    "Search car service on Karur Bypass Road...",
    "Search 10,000+ local businesses in Trichy..."
  ];
  const [placeholderIndex, setPlaceholderIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPlaceholderIndex((prev) => (prev + 1) % searchPlaceholders.length);
    }, 2800);
    return () => clearInterval(interval);
  }, [searchPlaceholders.length]);

  // Sync cityInput whenever location.city updates from GPS or Header, default to Tiruchirappalli
  useEffect(() => {
    if (location.city) {
      setCityInput(location.city);
    } else {
      setCityInput('Tiruchirappalli');
    }
  }, [location.city]);

  // Handle outside clicks to close suggestion or location dropdown
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setShowSuggestions(false);
      }
      if (locationBoxRef.current && !locationBoxRef.current.contains(event.target as Node)) {
        setShowLocationDropdown(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Fetch search keyword suggestions
  useEffect(() => {
    if (query.length < 2) {
      setSuggestions([]);
      return;
    }
    
    const fetchSuggestions = async () => {
      setLoadingSuggestions(true);
      try {
        const res = await fetch(`${API_BASE}/search/suggestions?q=${encodeURIComponent(query)}`);
        if (res.ok) {
          const data = await res.json();
          setSuggestions(data);
        }
      } catch (err) {
        console.error(err);
      }
      setLoadingSuggestions(false);
    };

    const debounce = setTimeout(fetchSuggestions, 300);
    return () => clearTimeout(debounce);
  }, [query]);

  // When user finishes typing or leaves the location field, update shared location context
  const handleCityChange = (newCity: string) => {
    setCityInput(newCity);
    if (newCity.trim()) {
      setCustomLocation(newCity.trim());
    }
  };

  const handleCitySelect = (selectedCity: string) => {
    setCityInput(selectedCity);
    setCustomLocation(selectedCity);
    setShowLocationDropdown(false);
  };

  const handleSearch = () => {
    if (cityInput && cityInput !== location.city) {
      setCustomLocation(cityInput);
    }
    let url = `/search?q=${encodeURIComponent(query)}`;
    if (cityInput) url += `&city=${encodeURIComponent(cityInput)}`;
    window.location.href = url;
  };

  const handleSuggestionClick = (text: string) => {
    setQuery(text);
    setShowSuggestions(false);
    setTimeout(() => {
      let url = `/search?q=${encodeURIComponent(text)}`;
      if (cityInput) url += `&city=${encodeURIComponent(cityInput)}`;
      window.location.href = url;
    }, 50);
  };

  return (
    <div ref={wrapperRef} className="relative z-50 w-full">
      {/* Search Bar Container with Dynamic Elevation Animation Effect */}
      <motion.div 
        initial={{ opacity: 0, y: 15 }} 
        animate={{ 
          opacity: 1, 
          y: [0, -3.5, 0],
          boxShadow: [
            "0 12px 35px -8px rgba(0, 102, 255, 0.12), 0 4px 16px rgba(0, 0, 0, 0.04)",
            "0 22px 50px -10px rgba(0, 102, 255, 0.22), 0 8px 24px rgba(0, 0, 0, 0.07)",
            "0 12px 35px -8px rgba(0, 102, 255, 0.12), 0 4px 16px rgba(0, 0, 0, 0.04)"
          ]
        }} 
        transition={{ 
          opacity: { duration: 0.5, delay: 0.2 },
          y: { duration: 4.5, repeat: Infinity, ease: "easeInOut" },
          boxShadow: { duration: 4.5, repeat: Infinity, ease: "easeInOut" }
        }} 
        whileHover={{ 
          y: -5, 
          boxShadow: "0 28px 65px -12px rgba(0, 102, 255, 0.28), 0 0 0 2px rgba(0, 102, 255, 0.25)",
          transition: { duration: 0.25 }
        }}
        className="bg-white p-2 md:p-2.5 rounded-2xl lg:rounded-3xl border border-slate-200/90 flex flex-col md:flex-row items-center w-full gap-1 md:gap-0 relative z-30 transition-all focus-within:-translate-y-1 focus-within:shadow-[0_28px_65px_-12px_rgba(0,102,255,0.28)] focus-within:ring-2 focus-within:ring-[#0066FF]"
      >
        {/* Location Dropdown / Input (Synchronized with User Entry & GPS) */}
        <div 
          ref={locationBoxRef}
          className="relative md:w-[205px] lg:w-[230px] shrink-0 w-full"
        >
          <div 
            onClick={() => setShowLocationDropdown(true)}
            className="flex items-center gap-2 px-3 py-2.5 border-b md:border-b-0 md:border-r border-slate-200 w-full hover:bg-slate-50/70 transition-colors cursor-pointer rounded-xl md:rounded-l-2xl md:rounded-r-none"
          >
            <div className="w-6 h-6 rounded-full bg-blue-50 text-[#0066FF] flex items-center justify-center shrink-0">
              <MapPin size={15} className="fill-[#0066FF] text-[#0066FF]" />
            </div>
            <input 
              type="text" 
              value={cityInput}
              onChange={(e) => handleCityChange(e.target.value)}
              onFocus={() => setShowLocationDropdown(true)}
              placeholder="Trichy or location..." 
              className="w-full outline-none text-sm font-bold text-slate-900 bg-transparent placeholder-slate-400 cursor-text truncate" 
              onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
            />
            <ChevronDown 
              size={14} 
              className={`text-slate-400 shrink-0 transition-transform duration-200 ${showLocationDropdown ? 'rotate-180 text-[#0066FF]' : ''}`} 
            />
          </div>

          {/* Location Picker Popover Dropdown */}
          <AnimatePresence>
            {showLocationDropdown && (
              <motion.div
                initial={{ opacity: 0, y: 8, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 8, scale: 0.97 }}
                transition={{ duration: 0.15 }}
                className="absolute left-0 top-full mt-2.5 w-80 sm:w-96 bg-white rounded-2xl p-3.5 shadow-2xl border border-blue-100 z-[100] text-slate-800 max-h-[420px] overflow-y-auto"
              >
                {/* Real-time GPS Detection Button */}
                <button
                  onClick={() => {
                    detectLocation();
                    setShowLocationDropdown(false);
                  }}
                  className="w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl bg-blue-50 text-[#0066FF] hover:bg-blue-100/90 transition-all text-xs font-extrabold mb-3 cursor-pointer shadow-2xs group"
                >
                  <div className="flex items-center gap-2">
                    {location.loading ? (
                      <Loader2 size={15} className="animate-spin text-[#0066FF]" />
                    ) : (
                      <Navigation size={15} className="fill-[#0066FF] text-[#0066FF] group-hover:scale-110 transition-transform" />
                    )}
                    <span>Use My Current Location (GPS)</span>
                  </div>
                  <span className="text-[10px] bg-white px-2 py-0.5 rounded-md text-[#0066FF] font-black uppercase shadow-2xs">
                    Detect
                  </span>
                </button>

                {/* Trichy Localities Section */}
                <div className="flex items-center justify-between mb-1.5 px-1">
                  <div className="text-[10.5px] font-black text-slate-400 uppercase tracking-wider">
                    Trichy Localities
                  </div>
                  <span className="text-[9.5px] font-bold text-[#0066FF] bg-blue-50 px-1.5 py-0.5 rounded">
                    Popular Areas
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-1.5 mb-3">
                  {trichyLocalities.map((loc) => {
                    const isSelected = cityInput.toLowerCase().includes(loc.toLowerCase());
                    return (
                      <button
                        key={loc}
                        onClick={() => handleCitySelect(`${loc}, Trichy`)}
                        className={`text-left text-xs px-2.5 py-2 rounded-xl transition-all font-bold truncate flex items-center justify-between cursor-pointer ${
                          isSelected
                            ? 'bg-[#0066FF] text-white shadow-xs'
                            : 'bg-slate-50/80 hover:bg-blue-50 hover:text-[#0066FF] text-slate-700'
                        }`}
                      >
                        <span className="truncate">{loc}</span>
                        {isSelected && <Check size={12} className="shrink-0 ml-1" />}
                      </button>
                    );
                  })}
                </div>

                {/* Major Cities Section */}
                <div className="text-[10.5px] font-black text-slate-400 uppercase tracking-wider mb-1.5 px-1 border-t border-slate-100 pt-2.5">
                  Major Cities
                </div>
                <div className="grid grid-cols-2 gap-1.5">
                  {popularCities.map((city) => {
                    const isSelected = cityInput.toLowerCase().includes(city.toLowerCase());
                    return (
                      <button
                        key={city}
                        onClick={() => handleCitySelect(city)}
                        className={`text-left text-xs px-2.5 py-2 rounded-xl transition-all font-bold truncate flex items-center justify-between cursor-pointer ${
                          isSelected
                            ? 'bg-[#0066FF] text-white shadow-xs'
                            : 'hover:bg-slate-50 text-slate-600'
                        }`}
                      >
                        <span className="truncate">{city}</span>
                        {isSelected && <Check size={12} className="shrink-0 ml-1" />}
                      </button>
                    );
                  })}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Keyword Search Input with Animated Dynamic Placeholder */}
        <div className="flex-[2.2] flex items-center gap-3 px-4 py-2.5 w-full hover:bg-slate-50/60 transition-colors relative">
          <Search size={19} className="text-slate-400 shrink-0" />
          <input 
            type="text" 
            value={query}
            onChange={(e) => { setQuery(e.target.value); setShowSuggestions(true); }}
            onFocus={() => { if (query.length >= 2) setShowSuggestions(true); }}
            placeholder={searchPlaceholders[placeholderIndex]} 
            className="w-full outline-none text-sm font-medium text-slate-800 bg-transparent placeholder-slate-400 placeholder:transition-opacity placeholder:duration-300" 
            onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
          />
          {loadingSuggestions && (
            <motion.div 
              animate={{ rotate: 360 }} 
              transition={{ repeat: Infinity, duration: 1, ease: 'linear' }} 
              className="absolute right-4 top-1/2 -translate-y-1/2"
            >
              <Loader2 className="text-slate-400" size={16} />
            </motion.div>
          )}
        </div>

        {/* Search Action Button with Elevation Animation */}
        <div className="w-full md:w-auto shrink-0 px-1 pb-1 md:p-0">
          <motion.button 
            whileHover={{ scale: 1.04, boxShadow: "0 8px 24px rgba(0, 102, 255, 0.45)" }}
            whileTap={{ scale: 0.98 }}
            onClick={handleSearch}
            className="w-full md:w-auto px-8 py-3.5 bg-gradient-to-r from-[#0066FF] to-[#0052CC] hover:from-[#0052CC] hover:to-[#003db3] text-white rounded-xl lg:rounded-2xl font-extrabold transition-all shadow-md flex items-center justify-center text-sm cursor-pointer"
          >
            Search
          </motion.button>
        </div>
      </motion.div>

      {/* Auto-suggest Search Dropdown */}
      <AnimatePresence>
        {showSuggestions && suggestions.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            className="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden z-50 w-full"
          >
            <ul className="py-2">
              {suggestions.map((s, idx) => (
                <li 
                  key={idx}
                  onClick={() => handleSuggestionClick(s.text)}
                  className="px-4 py-2.5 hover:bg-blue-50/80 cursor-pointer flex items-center gap-3 transition-colors"
                >
                  <Search size={14} className="text-[#0066FF]" />
                  <span className="text-sm font-semibold text-slate-800">{s.text}</span>
                  <span className="text-[10px] uppercase font-bold text-[#0066FF] bg-blue-50 px-2 py-0.5 rounded-full border border-blue-100 ml-auto">
                    {s.type}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
