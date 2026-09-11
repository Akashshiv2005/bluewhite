"use client";
import React from 'react';
import { ShieldCheck, Users, MapPin, Star } from 'lucide-react';

export default function StatsStrip() {
  return (
    <section className="w-full bg-[#002B7F] text-white relative overflow-hidden my-16 py-9 lg:py-11">
      {/* Abstract Skyline Silhouette Background */}
      <div 
        className="absolute bottom-0 inset-x-0 h-full opacity-15 pointer-events-none bg-repeat-x"
        style={{
          backgroundImage: "url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"280\" height=\"80\" viewBox=\"0 0 280 80\"><path d=\"M0 80V65h8v-12h12v-18h16v30h12v-14h14v-22h22v36h12v-10h16v18h18v-28h16v12h18v-16h12v26h12v-6h12v10h12v18H0z\" fill=\"%23ffffff\"/></svg>')",
          backgroundSize: "280px 100%",
          backgroundPosition: "bottom center"
        }}
      />
      
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          
          {/* 4 Stats Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 w-full lg:w-auto flex-1">
            
            {/* Stat 1 */}
            <div className="flex items-center gap-3.5 sm:gap-4">
              <div className="w-12 h-12 rounded-full border border-white/25 flex items-center justify-center shrink-0 bg-white/10 backdrop-blur-sm shadow-inner">
                <ShieldCheck size={24} className="text-white" />
              </div>
              <div>
                <div className="font-black text-2xl sm:text-[26px] leading-tight">5M+</div>
                <div className="text-xs sm:text-[13px] text-blue-200 font-medium leading-tight">Ranked Businesses</div>
              </div>
            </div>

            {/* Stat 2 */}
            <div className="flex items-center gap-3.5 sm:gap-4">
              <div className="w-12 h-12 rounded-full border border-white/25 flex items-center justify-center shrink-0 bg-white/10 backdrop-blur-sm shadow-inner">
                <Users size={24} className="text-white" />
              </div>
              <div>
                <div className="font-black text-2xl sm:text-[26px] leading-tight">10M+</div>
                <div className="text-xs sm:text-[13px] text-blue-200 font-medium leading-tight">Audited Reviews</div>
              </div>
            </div>

            {/* Stat 3 */}
            <div className="flex items-center gap-3.5 sm:gap-4">
              <div className="w-12 h-12 rounded-full border border-white/25 flex items-center justify-center shrink-0 bg-white/10 backdrop-blur-sm shadow-inner">
                <MapPin size={24} className="text-white" />
              </div>
              <div>
                <div className="font-black text-2xl sm:text-[26px] leading-tight">100+</div>
                <div className="text-xs sm:text-[13px] text-blue-200 font-medium leading-tight">City Leaderboards</div>
              </div>
            </div>

            {/* Stat 4 */}
            <div className="flex items-center gap-3.5 sm:gap-4">
              <div className="w-12 h-12 rounded-full border border-white/25 flex items-center justify-center shrink-0 bg-white/10 backdrop-blur-sm shadow-inner">
                <Star size={24} className="text-amber-400 fill-amber-400" />
              </div>
              <div>
                <div className="font-black text-2xl sm:text-[26px] leading-tight">4.8★</div>
                <div className="text-xs sm:text-[13px] text-blue-200 font-medium leading-tight">Top Quality Standard</div>
              </div>
            </div>

          </div>

          {/* Right Support Local Text Graphic */}
          <div className="hidden xl:flex items-center justify-end shrink-0 pl-10 border-l border-white/20 relative select-none">
            <div className="text-right">
              <span className="font-serif italic text-lg block text-blue-200 font-semibold leading-tight">
                Proven Local Excellence
              </span>
              <span className="font-serif italic text-2xl block text-white font-black leading-tight">
                Ranked with Transparency
              </span>
              <div className="w-32 h-1 mt-1.5 ml-auto rounded-full bg-gradient-to-r from-orange-400 via-white to-green-500 shadow-sm" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
