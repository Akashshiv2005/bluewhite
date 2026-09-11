"use client";
import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { 
  Star, 
  MapPin, 
  Phone, 
  ArrowRight, 
  ShieldCheck, 
  Heart, 
  ChevronLeft, 
  ChevronRight, 
  Grid, 
  Utensils, 
  Plus, 
  Smartphone, 
  Scissors, 
  Car, 
  Home as HomeIcon, 
  GraduationCap, 
  MoreHorizontal,
  Award 
} from 'lucide-react';
import Link from 'next/link';

interface FeaturedBusinessesProps {
  userLocation: string;
  featuredBusinesses?: any[];
}

export default function FeaturedBusinesses({ userLocation, featuredBusinesses }: FeaturedBusinessesProps) {
  const [activeFilter, setActiveFilter] = useState('All');
  const [favorites, setFavorites] = useState<{ [key: number]: boolean }>({});
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const defaultBusinesses = [
    {
      id: 1,
      name: 'Sangeetha Pure Veg Restaurant',
      categoryType: 'Restaurants',
      category: 'South Indian & Multi Cuisine',
      rating: 4.9,
      reviews: '1.4K',
      location: 'Thillai Nagar, Trichy',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=85',
      icon: Utensils,
      iconBg: 'bg-blue-50',
      iconColor: 'text-[#0066FF]'
    },
    {
      id: 2,
      name: 'Kauvery Hospital',
      categoryType: 'Hospitals',
      category: 'Multi Speciality Hospital',
      rating: 4.8,
      reviews: '1.8K',
      location: 'Cantonment, Trichy',
      image: 'https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?auto=format&fit=crop&w=800&q=85',
      icon: Plus,
      iconBg: 'bg-red-50',
      iconColor: 'text-rose-600'
    },
    {
      id: 3,
      name: 'Supreme Mobiles',
      categoryType: 'Mobile Shops',
      category: 'Smartphones & Gadgets',
      rating: 4.7,
      reviews: '950',
      location: 'Singarathope, Trichy',
      image: 'https://images.unsplash.com/photo-1550009158-9ebf69173e03?auto=format&fit=crop&w=800&q=85',
      icon: Smartphone,
      iconBg: 'bg-blue-50',
      iconColor: 'text-[#0066FF]'
    },
    {
      id: 4,
      name: 'Naturals Unisex Salon & Spa',
      categoryType: 'Salons',
      category: 'Beauty, Hair & Bridal Care',
      rating: 4.8,
      reviews: '820',
      location: 'Thillai Nagar, Trichy',
      image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=800&q=85',
      icon: Scissors,
      iconBg: 'bg-purple-50',
      iconColor: 'text-purple-600'
    },
    {
      id: 5,
      name: 'Trichy Dream Homes Realty',
      categoryType: 'Real Estate',
      category: 'Plots, Villas & Commercial',
      rating: 4.9,
      reviews: '460',
      location: 'KK Nagar, Trichy',
      image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=85',
      icon: HomeIcon,
      iconBg: 'bg-emerald-50',
      iconColor: 'text-emerald-600'
    },
    {
      id: 6,
      name: 'Sri Ram Bosch Car Care',
      categoryType: 'Car Service',
      category: 'Automobile Service & Detailing',
      rating: 4.8,
      reviews: '580',
      location: 'Karur Bypass Road, Trichy',
      image: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=800&q=85',
      icon: Car,
      iconBg: 'bg-amber-50',
      iconColor: 'text-amber-600'
    },
    {
      id: 7,
      name: 'Everest Coaching Academy',
      categoryType: 'Education',
      category: 'NEET, JEE & Tuitions',
      rating: 4.9,
      reviews: '720',
      location: 'Cantonment, Trichy',
      image: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=800&q=85',
      icon: GraduationCap,
      iconBg: 'bg-indigo-50',
      iconColor: 'text-indigo-600'
    },
    {
      id: 8,
      name: 'Sri Ranga Home Care Solutions',
      categoryType: 'More',
      category: 'Electrician, Plumbing & AC',
      rating: 4.8,
      reviews: '630',
      location: 'Srirangam, Trichy',
      image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=800&q=85',
      icon: Award,
      iconBg: 'bg-teal-50',
      iconColor: 'text-teal-600'
    }
  ];

  // If backend returns incomplete listings or fewer than 3 listings, use the 5 curated businesses
  const hasCompleteData = featuredBusinesses && featuredBusinesses.length >= 4 && featuredBusinesses.every(b => b.image || b.image_url);
  const businesses = hasCompleteData ? featuredBusinesses : defaultBusinesses;

  const filters = [
    { name: 'All', icon: Grid },
    { name: 'Restaurants', icon: Utensils },
    { name: 'Hospitals', icon: Plus },
    { name: 'Mobile Shops', icon: Smartphone },
    { name: 'Salons', icon: Scissors },
    { name: 'Car Service', icon: Car },
    { name: 'Real Estate', icon: HomeIcon },
    { name: 'Education', icon: GraduationCap },
    { name: 'More', icon: MoreHorizontal },
  ];

  const filteredBusinesses = activeFilter === 'All' 
    ? businesses 
    : businesses.filter(b => b.categoryType === activeFilter || b.category?.toLowerCase().includes(activeFilter.toLowerCase()));

  const toggleFavorite = (id: number) => {
    setFavorites(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -340 : 340;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id="businesses" className="mb-16 bg-[#F8FAFC] py-10 px-4 sm:px-6 lg:px-8 rounded-3xl border border-slate-100 scroll-mt-24">
      
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-7 gap-4">
        <div>
          <span className="text-[#0066FF] text-[11px] font-bold tracking-widest uppercase mb-1.5 block">
            VERIFIED LEADERBOARD
          </span>
          <h2 className="text-3xl lg:text-[32px] font-black text-slate-900 mb-1.5 leading-tight tracking-tight">
            Top Ranked Businesses in <span className="animate-text-shimmer">{userLocation || 'Trichy'}</span>
          </h2>
          <p className="text-slate-500 font-medium text-sm">
            Ranked by verified customer reviews, service quality, and credibility score
          </p>
        </div>
        
        <div className="flex items-center gap-4">
          <Link href="/businesses" className="text-[#0066FF] font-bold text-sm flex items-center gap-1 hover:underline">
            View All Rankings <ArrowRight size={16} />
          </Link>
          <div className="hidden sm:flex items-center gap-2">
            <button 
              onClick={() => scroll('left')}
              aria-label="Scroll left"
              className="w-9 h-9 rounded-full border border-slate-200 bg-white flex items-center justify-center text-slate-700 hover:text-[#0066FF] hover:border-[#0066FF] transition-colors shadow-2xs cursor-pointer"
            >
              <ChevronLeft size={18} />
            </button>
            <button 
              onClick={() => scroll('right')}
              aria-label="Scroll right"
              className="w-9 h-9 rounded-full border border-slate-200 bg-white flex items-center justify-center text-slate-700 hover:text-[#0066FF] hover:border-[#0066FF] transition-colors shadow-2xs cursor-pointer"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>

      {/* Filter Chips */}
      <div className="flex overflow-x-auto gap-2.5 pb-4 mb-6 no-scrollbar">
        {filters.map((filter) => {
          const isActive = activeFilter === filter.name;
          return (
            <button 
              key={filter.name}
              onClick={() => setActiveFilter(filter.name)}
              className={`inline-flex items-center justify-center h-8 px-4 rounded-full font-bold text-xs whitespace-nowrap transition-all cursor-pointer shadow-2xs gap-2 leading-none ${
                isActive 
                  ? 'bg-[#0066FF] text-white shadow-sm' 
                  : 'bg-white text-slate-700 border border-slate-200 hover:border-slate-300 hover:text-[#0066FF]'
              }`}
            >
              <filter.icon size={15} className={`shrink-0 ${filter.name === 'Hospitals' && !isActive ? 'text-rose-500' : ''}`} /> 
              <span className="leading-none pt-[1px]">{filter.name}</span>
            </button>
          );
        })}
      </div>

      {/* Cards 5-Column Grid / Carousel */}
      <div 
        ref={scrollContainerRef}
        className="grid grid-flow-col auto-cols-[280px] lg:grid-flow-row lg:grid-cols-5 gap-4.5 overflow-x-auto lg:overflow-visible pb-4 lg:pb-0 no-scrollbar"
      >
        {(filteredBusinesses.length > 0 ? filteredBusinesses : defaultBusinesses).map((business, idx) => {
          const IconComp = business.icon || Utensils;
          const isFav = favorites[business.id];

          return (
            <motion.div 
              key={business.id || idx}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="bg-white rounded-2xl border border-slate-100 shadow-2xs overflow-hidden group hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
            >
              {/* Image Box */}
              <div className="relative h-44 w-full overflow-visible">
                <div className="w-full h-full overflow-hidden rounded-t-2xl">
                  <img 
                    src={business.image || 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=85'} 
                    alt={business.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                
                {/* Rank & Verified Badges */}
                <div className="absolute top-3 left-3 flex items-center gap-1.5 z-10">
                  <span className="bg-[#0066FF] text-white text-[11px] font-black px-2.5 h-6 rounded-md inline-flex items-center justify-center gap-1 shadow-sm leading-none">
                    <Award size={13} strokeWidth={3} className="shrink-0" /> 
                    <span className="leading-none pt-[1px]">#{idx + 1}</span>
                  </span>
                  <span className="bg-[#10B981] text-white text-[10.5px] font-bold px-2 h-6 rounded-md inline-flex items-center justify-center gap-1 shadow-sm leading-none">
                    <ShieldCheck size={12} strokeWidth={2.5} className="shrink-0" /> 
                    <span className="leading-none pt-[1px]">Verified</span>
                  </span>
                </div>
                
                {/* Favorite Button */}
                <button 
                  onClick={() => toggleFavorite(business.id)}
                  aria-label="Save to favorites"
                  className="absolute top-3 right-3 w-8 h-8 bg-black/35 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white hover:text-rose-500 transition-all cursor-pointer"
                >
                  <Heart size={15} className={isFav ? 'fill-rose-500 text-rose-500' : ''} />
                </button>

                {/* Overlapping Category Icon Circle */}
                <div className={`absolute -bottom-4 left-4 w-9 h-9 ${business.iconBg || 'bg-blue-50'} rounded-full flex items-center justify-center shadow-md border-2 border-white z-10`}>
                  <IconComp size={18} className={business.iconColor || 'text-[#0066FF]'} strokeWidth={2.2} />
                </div>
              </div>

              {/* Content Box */}
              <div className="p-4 pt-6 flex-1 flex flex-col">
                <h3 className="font-extrabold text-[16px] text-slate-900 mb-1 line-clamp-1 group-hover:text-[#0066FF] transition-colors">
                  {business.name}
                </h3>
                
                {/* Ratings */}
                <div className="flex items-center gap-1 mb-1.5">
                  <Star size={14} className="fill-amber-400 text-amber-400" />
                  <span className="font-bold text-xs text-slate-900">{business.rating}</span>
                  <span className="text-xs text-slate-500 font-medium">({business.reviews} reviews)</span>
                </div>
                
                {/* Category */}
                <p className="text-xs text-slate-500 font-medium mb-2.5 line-clamp-1">
                  {business.category}
                </p>
                
                {/* Location */}
                <div className="flex items-center gap-1 text-slate-600 text-xs font-semibold mb-4">
                  <MapPin size={13} className="text-[#0066FF] shrink-0" /> 
                  <span className="truncate">{business.location || userLocation}</span>
                </div>

                {/* Bottom Actions */}
                <div className="mt-auto grid grid-cols-2 gap-2">
                  <button 
                    onClick={() => alert(`Calling ${business.name}...`)}
                    className="inline-flex items-center justify-center gap-1.5 h-8.5 rounded-lg border border-[#0066FF] text-[#0066FF] font-bold text-xs hover:bg-blue-50 transition-colors cursor-pointer leading-none"
                  >
                    <Phone size={13} className="shrink-0" />
                    <span className="leading-none pt-[1px]">Call</span>
                  </button>
                  <Link 
                    href={`/business/${business.id}`} 
                    className="inline-flex items-center justify-center h-8.5 rounded-lg bg-[#0066FF] text-white font-bold text-xs hover:bg-[#0052CC] transition-colors shadow-2xs leading-none text-center"
                  >
                    <span className="leading-none pt-[1px]">View Details</span>
                  </Link>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
