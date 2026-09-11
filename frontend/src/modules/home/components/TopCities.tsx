"use client";
import React, { useRef } from 'react';
import Link from 'next/link';
import { ArrowRight, ChevronRight, ChevronLeft } from 'lucide-react';

export default function TopCities() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const cities = [
    { name: 'Tiruchirappalli (Trichy)', state: 'Tamil Nadu', image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=600&q=85' },
    { name: 'Chennai', state: 'Tamil Nadu', image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=600&q=85' },
    { name: 'Coimbatore', state: 'Tamil Nadu', image: 'https://images.unsplash.com/photo-1605648916361-9bc12ad6a569?auto=format&fit=crop&w=600&q=85' },
    { name: 'Madurai', state: 'Tamil Nadu', image: 'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=600&q=85' },
    { name: 'Bengaluru', state: 'Karnataka', image: 'https://images.unsplash.com/photo-1596176530529-78163a4f7af2?auto=format&fit=crop&w=600&q=85' },
    { name: 'Kochi', state: 'Kerala', image: 'https://images.unsplash.com/photo-1605648916361-9bc12ad6a569?auto=format&fit=crop&w=600&q=85' },
    { name: 'Mumbai', state: 'Maharashtra', image: 'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=600&q=85' },
    { name: 'Delhi', state: 'Delhi', image: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=600&q=85' },
    { name: 'Hyderabad', state: 'Telangana', image: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=600&q=85' },
    { name: 'Pune', state: 'Maharashtra', image: 'https://images.unsplash.com/photo-1627894483216-2138af692e32?auto=format&fit=crop&w=600&q=85' },
  ];

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -300 : 300;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="mb-16">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-6 gap-3">
        <div>
          <span className="text-[#0066FF] text-[11px] font-bold tracking-widest uppercase mb-1 block">
            CITY LEADERBOARDS
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
            Top Ranked Cities in India
          </h2>
          <p className="text-slate-500 font-medium text-xs sm:text-sm mt-0.5">
            Explore #1 ranked verified businesses across major Indian cities
          </p>
        </div>
        <div className="flex items-center gap-4">
          <Link href="/cities" className="text-[#0066FF] font-bold text-sm flex items-center gap-1 hover:underline">
            Explore All Cities <ArrowRight size={16} />
          </Link>
          <div className="hidden sm:flex items-center gap-1.5">
            <button 
              onClick={() => scroll('left')}
              aria-label="Previous cities"
              className="w-8 h-8 rounded-full border border-slate-200 bg-white flex items-center justify-center text-slate-700 hover:text-[#0066FF] hover:border-[#0066FF] transition-colors shadow-2xs cursor-pointer"
            >
              <ChevronLeft size={16} />
            </button>
            <button 
              onClick={() => scroll('right')}
              aria-label="Next cities"
              className="w-8 h-8 rounded-full border border-slate-200 bg-white flex items-center justify-center text-slate-700 hover:text-[#0066FF] hover:border-[#0066FF] transition-colors shadow-2xs cursor-pointer"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>

      {/* Cities Row Grid */}
      <div 
        ref={scrollContainerRef}
        className="grid grid-flow-col auto-cols-[150px] sm:auto-cols-[165px] lg:grid-flow-row lg:grid-cols-8 gap-3.5 sm:gap-4 overflow-x-auto lg:overflow-visible pb-4 lg:pb-0 no-scrollbar"
      >
        {cities.map((city, idx) => (
          <Link 
            key={idx} 
            href={`/search?city=${encodeURIComponent(city.name)}`}
            className="group flex flex-col gap-2.5 bg-white rounded-2xl p-2 border border-slate-100 shadow-2xs hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
          >
            <div className="w-full h-24 sm:h-26 rounded-xl overflow-hidden shadow-2xs">
              <img 
                src={city.image} 
                alt={city.name} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
              />
            </div>
            <div className="flex items-center justify-between px-1 pb-1">
              <div>
                <h3 className="font-extrabold text-sm text-slate-900 leading-tight group-hover:text-[#0066FF] transition-colors">
                  {city.name}
                </h3>
                <p className="text-[11px] font-medium text-slate-400 mt-0.5">
                  {city.state}
                </p>
              </div>
              <div className="w-6 h-6 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 group-hover:border-[#0066FF] group-hover:bg-[#0066FF] group-hover:text-white transition-all shrink-0">
                <ChevronRight size={13} />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
