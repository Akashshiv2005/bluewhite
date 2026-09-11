"use client";
import React from 'react';
import Link from 'next/link';
import { 
  Search, 
  FileText, 
  TrendingUp, 
  CheckCircle2, 
  Users, 
  Store, 
  Star, 
  ArrowRight, 
  MapPin, 
  Phone, 
  Compass, 
  ChevronDown,
  Utensils,
  PlusSquare,
  Scissors,
  ShoppingBag,
  MoreHorizontal
} from 'lucide-react';
import { motion } from 'framer-motion';

export default function HowBizDialWorks() {
  return (
    <section 
      id="how-it-works" 
      className="mb-24 relative overflow-hidden bg-gradient-to-b from-[#F7FAFE] via-[#FFFFFF] to-[#EFF6FF] rounded-[2.5rem] border border-blue-200/70 p-6 sm:p-10 lg:p-12 shadow-[0_12px_45px_rgba(0,102,255,0.05)] scroll-mt-24"
    >
      {/* Background Ambience & Soft Sky Watermarks */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-blue-200/20 via-sky-100/10 to-transparent rounded-full filter blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-sky-200/20 via-blue-100/10 to-transparent rounded-full filter blur-3xl pointer-events-none" />

      {/* Top Header Row */}
      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 mb-12 relative z-10">
        
        {/* Left: Eyebrow + Main Title + Subtitle */}
        <div className="max-w-xl">
          <div className="inline-flex items-center justify-center gap-1.5 px-3 h-6.5 rounded-full bg-blue-50/90 border border-blue-200/80 mb-3 shadow-2xs leading-none">
            <span className="text-[#0066FF] text-[11px] font-black tracking-widest uppercase leading-none pt-[1px]">
              — SIMPLE • FAST • EFFECTIVE —
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-black text-slate-900 tracking-tight mb-2.5 leading-tight">
            How <span className="text-slate-900">Biz</span><span className="text-[#0066FF]">Dial</span> Works?
          </h2>

          <p className="text-sm sm:text-[15px] font-medium text-slate-600 leading-relaxed">
            Get your business discovered by thousands of <strong className="font-extrabold text-slate-900">local customers</strong> in just a few simple steps.
          </p>
        </div>

        {/* Center: "Local Businesses Stronger India" with Tricolor Ribbon */}
        <div className="hidden xl:flex flex-col items-center justify-center px-4">
          <div className="font-serif italic text-xl font-bold text-[#0066FF] -rotate-3 tracking-wide text-center leading-tight drop-shadow-2xs">
            Local Businesses<br />
            <span className="text-[#0052CC]">Stronger India</span>
          </div>
          {/* Tricolor ribbon stroke */}
          <div className="w-28 h-2.5 mt-1.5 relative flex flex-col justify-between -rotate-3">
            <div className="h-[2.5px] bg-[#FF9933] rounded-full w-full" />
            <div className="h-[2px] bg-white rounded-full w-5/6 mx-auto" />
            <div className="h-[2.5px] bg-[#128807] rounded-full w-4/5 mx-auto" />
          </div>
        </div>

        {/* Right: Trusted By Badge */}
        <div className="hidden md:flex items-center gap-3 bg-white/95 backdrop-blur-md border border-blue-100/90 px-4 py-2.5 rounded-2xl shadow-xs">
          <div className="w-11 h-11 rounded-full bg-blue-50 text-[#0066FF] flex items-center justify-center shrink-0 border border-blue-100">
            <Users size={22} className="text-[#0066FF]" />
          </div>
          <div>
            <div className="text-[11px] font-semibold text-slate-500">Trusted by</div>
            <div className="text-base font-black text-slate-900 leading-tight">10,000+</div>
            <div className="text-[10px] font-bold text-slate-400">Local Businesses</div>
          </div>
        </div>

      </div>

      {/* Main Content: 3 Step Cards (Left) + Dual-Layer Showcase (Right) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 xl:gap-8 items-center mb-10 relative z-10">
        
        {/* Left Column: 3 Step Cards (7 cols on lg, 7 cols on xl) */}
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-5 relative pt-6">
          
          {/* Step 01: Discover */}
          <motion.div 
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="bg-white rounded-3xl p-5 sm:p-6 pt-10 border border-blue-100/80 shadow-[0_10px_30px_-10px_rgba(0,102,255,0.06)] hover:shadow-lg transition-all relative flex flex-col justify-between group"
          >
            {/* Top Icon Circle */}
            <div className="absolute -top-6 left-6">
              <div className="w-13 h-13 rounded-full bg-[#0066FF] text-white flex items-center justify-center shadow-[0_10px_25px_-5px_rgba(0,102,255,0.45)] border-[3px] border-white group-hover:scale-105 transition-transform">
                <Search size={22} strokeWidth={2.6} />
              </div>
            </div>

            {/* Connecting Dashed Arc from Step 1 to Step 2 (visible on sm+) */}
            <div className="hidden sm:block absolute -right-5 top-1 w-10 h-6 pointer-events-none z-20">
              <svg className="w-full h-full" viewBox="0 0 40 24" fill="none">
                <path d="M 4 20 Q 20 4 36 14" stroke="#60a5fa" strokeWidth="2" strokeDasharray="3 3" />
                <polygon points="36,14 29,11 31,18" fill="#3b82f6" />
              </svg>
            </div>

            <div>
              <span className="text-sm font-black text-[#0066FF] block mb-0.5">01</span>
              <h3 className="text-xl font-black text-slate-900 mb-1">Discover</h3>
              <p className="text-xs text-slate-500 font-medium mb-5 leading-relaxed">
                Find the right customers in your area.
              </p>

              <ul className="space-y-2.5">
                {[
                  'Search by location',
                  'Browse categories',
                  'Explore nearby businesses'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-xs font-bold text-slate-700">
                    <div className="w-4 h-4 rounded-full bg-[#0066FF] text-white flex items-center justify-center shrink-0">
                      <CheckCircle2 size={12} className="fill-[#0066FF] text-white" />
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Step 02: Build */}
          <motion.div 
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="bg-white rounded-3xl p-5 sm:p-6 pt-10 border border-orange-100/80 shadow-[0_10px_30px_-10px_rgba(255,107,0,0.06)] hover:shadow-lg transition-all relative flex flex-col justify-between group"
          >
            {/* Top Icon Circle */}
            <div className="absolute -top-6 left-6">
              <div className="w-13 h-13 rounded-full bg-[#FF6B00] text-white flex items-center justify-center shadow-[0_10px_25px_-5px_rgba(255,107,0,0.45)] border-[3px] border-white group-hover:scale-105 transition-transform">
                <FileText size={22} strokeWidth={2.4} />
              </div>
            </div>

            {/* Connecting Dashed Arc from Step 2 to Step 3 (visible on sm+) */}
            <div className="hidden sm:block absolute -right-5 top-1 w-10 h-6 pointer-events-none z-20">
              <svg className="w-full h-full" viewBox="0 0 40 24" fill="none">
                <path d="M 4 20 Q 20 4 36 14" stroke="#60a5fa" strokeWidth="2" strokeDasharray="3 3" />
                <polygon points="36,14 29,11 31,18" fill="#3b82f6" />
              </svg>
            </div>

            <div>
              <span className="text-sm font-black text-[#FF6B00] block mb-0.5">02</span>
              <h3 className="text-xl font-black text-slate-900 mb-1">Build</h3>
              <p className="text-xs text-slate-500 font-medium mb-5 leading-relaxed">
                Create your business profile in minutes.
              </p>

              <ul className="space-y-2.5">
                {[
                  'Add business details',
                  'Upload photos & services',
                  'Get SEO optimized'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-xs font-bold text-slate-700">
                    <div className="w-4 h-4 rounded-full bg-[#FF6B00] text-white flex items-center justify-center shrink-0">
                      <CheckCircle2 size={12} className="fill-[#FF6B00] text-white" />
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Step 03: Grow */}
          <motion.div 
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="bg-white rounded-3xl p-5 sm:p-6 pt-10 border border-emerald-100/80 shadow-[0_10px_30px_-10px_rgba(16,185,129,0.06)] hover:shadow-lg transition-all relative flex flex-col justify-between group"
          >
            {/* Top Icon Circle */}
            <div className="absolute -top-6 left-6">
              <div className="w-13 h-13 rounded-full bg-[#10B981] text-white flex items-center justify-center shadow-[0_10px_25px_-5px_rgba(16,185,129,0.45)] border-[3px] border-white group-hover:scale-105 transition-transform">
                <TrendingUp size={22} strokeWidth={2.6} />
              </div>
            </div>

            <div>
              <span className="text-sm font-black text-[#10B981] block mb-0.5">03</span>
              <h3 className="text-xl font-black text-slate-900 mb-1">Grow</h3>
              <p className="text-xs text-slate-500 font-medium mb-5 leading-relaxed">
                Get discovered, rank higher and receive quality leads.
              </p>

              <ul className="space-y-2.5">
                {[
                  'Show up in local search',
                  'Rank at the top',
                  'Receive calls & messages'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-xs font-bold text-slate-700">
                    <div className="w-4 h-4 rounded-full bg-[#10B981] text-white flex items-center justify-center shrink-0">
                      <CheckCircle2 size={12} className="fill-[#10B981] text-white" />
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

        </div>

        {/* Right Column: Dual-Layer Showcase (Map + BizDial App UI) (5 cols on lg) */}
        <div className="lg:col-span-5 relative flex items-center justify-center mt-6 lg:mt-0">
          
          {/* Back Layer: Map Widget */}
          <div className="hidden sm:block absolute -left-6 md:-left-10 lg:-left-12 top-1 w-[260px] md:w-[280px] h-[340px] rounded-3xl overflow-hidden border border-blue-200/80 shadow-md bg-[#eef5fa] z-0">
            {/* SVG Map Graphic */}
            <svg className="w-full h-full opacity-75" viewBox="0 0 300 360" fill="none">
              {/* Land / City blocks */}
              <rect width="300" height="360" fill="#E8F1F7" />
              <path d="M-10 180 C80 160, 160 220, 320 170" stroke="#D3E5F3" strokeWidth="45" fill="none" />
              <path d="M80 -10 C100 120, 150 200, 140 370" stroke="#FFFFFF" strokeWidth="20" fill="none" />
              <path d="M-10 90 L310 80" stroke="#FFFFFF" strokeWidth="16" fill="none" />
              <path d="M-10 270 L310 290" stroke="#FFFFFF" strokeWidth="18" fill="none" />
              <path d="M220 -10 L240 370" stroke="#FFFFFF" strokeWidth="12" fill="none" />
              <path d="M30 40 L90 80 L30 140 Z" fill="#DCEBF4" />
              <path d="M160 100 L210 90 L210 160 L160 150 Z" fill="#DCEBF4" />
              <path d="M160 220 L280 200 L280 270 L160 280 Z" fill="#DCEBF4" />
              <path d="M20 200 L70 200 L70 260 L20 260 Z" fill="#DCEBF4" />
            </svg>

            {/* Map Pin 1 (Top Right Orange) */}
            <div className="absolute top-16 right-16 z-10 animate-bounce">
              <div className="w-6 h-6 rounded-full bg-[#FF6B00] text-white flex items-center justify-center shadow-md border-2 border-white">
                <MapPin size={13} />
              </div>
            </div>

            {/* Map Pin 2 (Center Blue with Pulse) */}
            <div className="absolute top-36 left-28 z-10">
              <span className="absolute -inset-1 rounded-full bg-blue-500/30 animate-ping" />
              <div className="w-7 h-7 rounded-full bg-[#0066FF] text-white flex items-center justify-center shadow-lg border-2 border-white relative z-10">
                <MapPin size={15} />
              </div>
            </div>

            {/* Map Pin 3 (Bottom Orange) */}
            <div className="absolute bottom-24 right-20 z-10">
              <div className="w-6 h-6 rounded-full bg-[#FF6B00] text-white flex items-center justify-center shadow-md border-2 border-white">
                <MapPin size={13} />
              </div>
            </div>

            {/* Floating Pill Top Left on Map: ↑ 68% More Visibility */}
            <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md rounded-xl px-2.5 py-1.5 shadow-sm border border-emerald-100 flex items-center gap-1.5 z-20">
              <div className="w-5 h-5 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center">
                <TrendingUp size={12} className="stroke-[2.8]" />
              </div>
              <div>
                <div className="text-[11px] font-black text-emerald-600 leading-none">↑ 68%</div>
                <div className="text-[9px] font-bold text-slate-500">More Visibility</div>
              </div>
            </div>

            {/* Floating Badge Bottom on Map: Join thousands of growing businesses */}
            <div className="absolute bottom-4 left-3 right-3 bg-white/95 backdrop-blur-md rounded-2xl p-2 px-3 shadow-md border border-blue-100 flex items-center justify-between z-20">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2 overflow-hidden">
                  <img className="inline-block h-6 w-6 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=60&auto=format&fit=crop&q=80" alt="avatar" />
                  <img className="inline-block h-6 w-6 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&auto=format&fit=crop&q=80" alt="avatar" />
                  <img className="inline-block h-6 w-6 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=60&auto=format&fit=crop&q=80" alt="avatar" />
                </div>
                <div className="text-[10px] font-bold text-slate-700 leading-tight">
                  Join thousands of<br />growing businesses
                </div>
              </div>
              <div className="w-6 h-6 rounded-full bg-[#0066FF] text-white flex items-center justify-center shrink-0 shadow-2xs">
                <ArrowRight size={12} />
              </div>
            </div>
          </div>

          {/* Foreground Layer: BizDial Mobile App Preview Card */}
          <div className="relative z-10 ml-auto w-full sm:w-[350px] md:w-[365px] bg-white rounded-3xl p-4 sm:p-5 border border-slate-200/90 shadow-[0_20px_50px_-12px_rgba(0,102,255,0.18)]">
            
            {/* App Header */}
            <div className="flex items-center justify-between mb-3.5 pb-2 border-b border-slate-100">
              <div className="flex items-baseline">
                <span className="text-base font-black tracking-tight text-slate-900">Biz</span>
                <span className="text-base font-black tracking-tight text-[#0066FF]">Dial</span>
                <span className="inline-block w-1 h-1 rounded-full bg-[#0066FF] ml-0.5 mb-0.5" />
              </div>
              <div className="flex items-center gap-1 text-[11px] font-bold text-slate-700 bg-slate-50 border border-slate-200 px-2 py-1 rounded-lg">
                <span>Kochi</span>
                <ChevronDown size={12} className="text-slate-500" />
              </div>
            </div>

            {/* App Search Bar */}
            <div className="flex items-center bg-slate-50 border border-slate-200/90 rounded-xl px-2.5 py-1.5 shadow-2xs mb-4">
              <input 
                type="text" 
                readOnly 
                value="Search for restaurants, salons, hospitals..." 
                className="bg-transparent text-[11px] font-medium text-slate-500 w-full outline-none truncate cursor-default"
              />
              <div className="w-7 h-7 rounded-lg bg-[#0066FF] text-white flex items-center justify-center shrink-0 ml-1">
                <Search size={13} strokeWidth={2.5} />
              </div>
            </div>

            {/* 5 Quick Category Pills */}
            <div className="flex items-center justify-between gap-1 mb-4 text-center">
              {[
                { label: 'Restaurants', icon: Utensils, bg: 'bg-orange-50 text-orange-600' },
                { label: 'Hospitals', icon: PlusSquare, bg: 'bg-red-50 text-red-600' },
                { label: 'Salons', icon: Scissors, bg: 'bg-pink-50 text-pink-600' },
                { label: 'Shops', icon: ShoppingBag, bg: 'bg-blue-50 text-[#0066FF]' },
                { label: 'More', icon: MoreHorizontal, bg: 'bg-slate-100 text-slate-600' },
              ].map((cat, i) => (
                <div key={i} className="flex flex-col items-center">
                  <div className={`w-8 h-8 rounded-xl ${cat.bg} flex items-center justify-center mb-1 shadow-2xs`}>
                    <cat.icon size={14} />
                  </div>
                  <span className="text-[9.5px] font-bold text-slate-600">{cat.label}</span>
                </div>
              ))}
            </div>

            {/* Top Businesses Near You Heading */}
            <div className="flex items-center justify-between mb-2.5">
              <h4 className="text-xs font-black text-slate-900">Top Businesses Near You</h4>
              <span className="text-[10px] font-extrabold text-[#0066FF] flex items-center gap-0.5 cursor-pointer hover:underline">
                View All <ArrowRight size={10} />
              </span>
            </div>

            {/* Featured Business Item: The Brew House */}
            <div className="bg-slate-50/80 border border-slate-200/70 rounded-2xl p-2.5 flex items-center justify-between gap-2.5 shadow-2xs">
              <div className="flex items-center gap-2.5">
                <img 
                  src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=160&auto=format&fit=crop&q=80" 
                  alt="The Brew House" 
                  className="w-14 h-14 rounded-xl object-cover shrink-0 shadow-xs"
                />
                <div>
                  <h5 className="text-xs font-black text-slate-900 leading-snug">The Brew House</h5>
                  <div className="flex items-center gap-1 text-[10px] font-bold text-slate-600 mt-0.5">
                    <span className="text-amber-500 font-extrabold flex items-center">★ 4.8</span>
                    <span className="text-slate-400">(320 reviews)</span>
                  </div>
                  <div className="text-[10px] font-medium text-slate-500 flex items-center gap-0.5 mt-0.5">
                    <MapPin size={10} className="text-slate-400 shrink-0" />
                    <span>Kochi, Kerala</span>
                  </div>
                  <div className="flex items-center gap-1 mt-1">
                    <span className="text-[8.5px] font-bold text-slate-600 bg-white px-1.5 py-0.5 rounded border border-slate-200/60">Cafe</span>
                    <span className="text-[8.5px] font-bold text-slate-600 bg-white px-1.5 py-0.5 rounded border border-slate-200/60">Coffee</span>
                    <span className="text-[8.5px] font-bold text-slate-600 bg-white px-1.5 py-0.5 rounded border border-slate-200/60">Fast Food</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons on Right */}
              <div className="flex flex-col gap-1.5 shrink-0">
                <button className="flex items-center gap-1 bg-[#0066FF] text-white text-[10px] font-extrabold px-2.5 py-1.5 rounded-lg shadow-2xs hover:bg-[#0052CC] transition-colors">
                  <Phone size={10} /> Call
                </button>
                <button className="flex items-center gap-1 bg-blue-50 text-[#0066FF] border border-blue-200 text-[10px] font-extrabold px-2.5 py-1.5 rounded-lg hover:bg-blue-100 transition-colors">
                  <Compass size={10} /> Directions
                </button>
              </div>
            </div>

          </div>

        </div>

      </div>

      {/* Bottom Horizontal Stats Bar */}
      <div className="mt-8 bg-white/95 backdrop-blur-md rounded-3xl lg:rounded-full p-4 sm:p-5 lg:px-8 border border-blue-100/90 shadow-[0_6px_25px_rgba(0,102,255,0.04)] flex flex-col lg:flex-row items-center justify-between gap-6 relative z-10">
        
        {/* 4 Stat Metrics */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 w-full lg:w-auto">
          {/* Stat 1: 10,000+ Businesses */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-blue-50 text-[#0066FF] flex items-center justify-center shrink-0 border border-blue-100">
              <Store size={18} />
            </div>
            <div>
              <div className="text-base font-black text-slate-900 leading-tight">10,000+</div>
              <div className="text-[11px] font-semibold text-slate-500">Businesses Listed</div>
            </div>
          </div>

          {/* Stat 2: 500,000+ Customers */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-blue-50 text-[#0066FF] flex items-center justify-center shrink-0 border border-blue-100">
              <Users size={18} />
            </div>
            <div>
              <div className="text-base font-black text-slate-900 leading-tight">500,000+</div>
              <div className="text-[11px] font-semibold text-slate-500">Monthly Customers</div>
            </div>
          </div>

          {/* Stat 3: 3x More Visibility */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-blue-50 text-[#0066FF] flex items-center justify-center shrink-0 border border-blue-100">
              <TrendingUp size={18} />
            </div>
            <div>
              <div className="text-base font-black text-slate-900 leading-tight">3x</div>
              <div className="text-[11px] font-semibold text-slate-500">More Visibility</div>
            </div>
          </div>

          {/* Stat 4: 4.7/5 Average Rating */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-blue-50 text-[#0066FF] flex items-center justify-center shrink-0 border border-blue-100">
              <Star size={18} className="fill-[#0066FF] text-[#0066FF]" />
            </div>
            <div>
              <div className="text-base font-black text-slate-900 leading-tight">4.7/5</div>
              <div className="text-[11px] font-semibold text-slate-500">Average Business Rating</div>
            </div>
          </div>
        </div>

        {/* Right Action Button & Subtext */}
        <div className="flex flex-col items-center lg:items-end shrink-0 w-full lg:w-auto">
          <Link 
            href="/register" 
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#0066FF] hover:bg-[#0052CC] text-white text-xs sm:text-sm font-extrabold px-7 py-3 rounded-full shadow-md hover:shadow-lg transition-all hover:scale-105"
          >
            <span>List Your Business Today</span>
            <ArrowRight size={15} />
          </Link>
          <span className="text-[11px] text-slate-400 font-medium mt-1">
            It's free and only takes a few minutes.
          </span>
        </div>

      </div>

    </section>
  );
}