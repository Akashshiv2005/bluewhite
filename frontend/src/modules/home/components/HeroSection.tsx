"use client";
import React from 'react';
import { motion } from 'framer-motion';
import SearchBar from '@/modules/search/SearchBar';

export default function HeroSection() {
  return (
    <div 
      className="relative z-40 bg-[#eaf4fd] bg-cover bg-no-repeat bg-right lg:bg-center overflow-visible pt-6 pb-12 sm:pt-8 sm:pb-16 lg:pt-10 lg:pb-20 border-b border-gray-100"
      style={{ backgroundImage: `url('/india-monuments-bg.png')` }}
    >
      {/* Soft left gradient overlay for immaculate contrast on text */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/50 to-transparent lg:w-1/2 pointer-events-none z-10" />
      
      <div className="max-w-[1400px] mx-auto px-4 lg:px-8 relative z-20">
        
        {/* Main Hero Row */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
          
          {/* Left Column: Headlines & Search */}
          <div className="flex-1 w-full text-center lg:text-left">
            
            {/* Top Tag Badge */}
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center justify-center gap-2 px-3.5 h-7 rounded-full bg-[#FFF6EB] border border-[#FFE2C2] shadow-sm mb-3.5"
            >
              <span className="text-sm leading-none flex items-center">🏆</span>
              <span className="text-[11px] font-bold text-slate-800 tracking-wider uppercase leading-none pt-[1px]">
                INDIA&apos;S #1 LOCAL BUSINESS RANKING DIRECTORY
              </span>
            </motion.div>

            {/* Headline with Elegant Continuous Text Shimmer Animation */}
            <motion.h1 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.6, delay: 0.1 }} 
              className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] xl:text-[62px] font-black tracking-tight leading-[1.12] mb-3"
            >
              <motion.span 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.15 }}
                className="text-slate-900 block"
              >
                Rank Your Business.
              </motion.span>
              <motion.span 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="block animate-text-shimmer"
              >
                Find Top Rated.
              </motion.span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.6, delay: 0.2 }} 
              className="text-sm sm:text-base md:text-[16px] text-slate-600 mb-4 sm:mb-5 max-w-xl mx-auto lg:mx-0 font-normal leading-relaxed"
            >
              Discover top-ranked verified businesses, authentic customer ratings, and trusted reviews in Trichy.<br className="hidden sm:inline" />
              Get your business listed, rank higher, and connect with customers.
            </motion.p>

            {/* Search Bar */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mb-3 relative z-30 w-full max-w-3xl mx-auto lg:mx-0"
            >
              <SearchBar />
            </motion.div>

            {/* Popular Searches */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-1.5 sm:gap-2 text-xs mt-2.5"
            >
              <span className="font-bold text-slate-800 mr-1 text-xs inline-flex items-center gap-1.5 shrink-0 leading-none">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0066FF]" />
                Popular:
              </span>
              {[
                'Top Restaurants', 'Top Hospitals', 'Mobile Shops', 'Salons & Spa', 'Car Service', 'Real Estate', 'Tuition Centers', 'Home Services'
              ].map((tag) => (
                <a 
                  key={tag}
                  href={`/search?q=${encodeURIComponent(tag)}`}
                  className="inline-flex items-center justify-center h-7 px-3.5 bg-white/95 hover:bg-white text-slate-700 hover:text-[#0066FF] rounded-full text-xs font-semibold leading-none border border-slate-200/90 shadow-2xs hover:shadow-xs transition-all whitespace-nowrap backdrop-blur-sm cursor-pointer"
                >
                  <span className="leading-none pt-[1px]">{tag}</span>
                </a>
              ))}
            </motion.div>

          </div>

        </div>
      </div>
    </div>
  );
}
