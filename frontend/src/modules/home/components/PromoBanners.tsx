"use client";
import React from 'react';
import Link from 'next/link';
import { 
  Award, 
  CheckCircle2, 
  ArrowRight, 
  BarChart3, 
  Star, 
  ShieldCheck, 
  Trophy,
  Store 
} from 'lucide-react';
import { motion } from 'framer-motion';

export default function PromoBanners() {
  return (
    <section className="grid grid-cols-1 xl:grid-cols-12 gap-6 mb-16 items-stretch">
      
      {/* Left Large Banner (7 cols): For Business Owners to Rank & Prove */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="xl:col-span-7 rounded-3xl overflow-hidden relative bg-gradient-to-br from-[#F8FAFF] via-[#EEF4FE] to-[#DCEBFE] p-7 sm:p-9 lg:p-10 border border-blue-200/80 shadow-[0_12px_40px_rgba(0,102,255,0.06)] flex flex-col justify-between min-h-[480px]"
      >
        <div className="relative z-10 sm:max-w-[53%] lg:max-w-[50%] flex flex-col justify-between h-full py-1">
          {/* Top Pill Badge */}
          <div className="inline-flex items-center gap-2 text-[#0066FF] text-xs font-black tracking-wider mb-4 uppercase bg-white/95 backdrop-blur-md px-4 py-1.5 rounded-full border border-blue-200/70 shadow-2xs w-fit">
            <Award size={14} className="text-[#0066FF]" /> BUILD TRUST • GET NOTICED
          </div>
          
          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-black mb-3 leading-[1.12] text-slate-900 tracking-tight">
            Rank Your Business <br />on <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0066FF] to-[#0052CC]">BizDial</span>
          </h2>
          
          {/* Subtext */}
          <p className="text-slate-600 font-medium mb-6 text-sm sm:text-[14.5px] leading-relaxed max-w-[430px]">
            Prove your reputation with verified customer ratings, climb to #1 in your city, and let customers choose you with confidence.
          </p>

          {/* Checklist */}
          <ul className="space-y-3.5 mb-8">
            {[
              'Prove your rank with verified ratings & audits',
              'Display official #1 / Top Ranked trust badges',
              'Climb city leaderboards in your category',
              'Receive direct phone calls with zero middleman fee'
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-3 text-xs sm:text-[13.5px] font-bold text-slate-800">
                <div className="w-5 h-5 rounded-full bg-[#0066FF] text-white flex items-center justify-center shrink-0 shadow-[0_2px_6px_rgba(0,102,255,0.3)]">
                  <CheckCircle2 size={13} className="fill-[#0066FF] text-white" />
                </div>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          
          {/* CTA Button + Micro Trust */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3.5">
            <Link 
              href="/register" 
              className="inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-[#0066FF] to-[#0052CC] hover:from-[#0052CC] hover:to-[#003db3] text-white font-extrabold px-8 py-3.5 rounded-xl transition-all shadow-[0_8px_20px_rgba(0,102,255,0.3)] hover:shadow-[0_12px_28px_rgba(0,102,255,0.4)] hover:-translate-y-0.5 text-sm group w-fit"
            >
              Rank Your Business 
              <ArrowRight size={17} className="group-hover:translate-x-1.5 transition-transform" />
            </Link>
            <span className="text-xs font-semibold text-slate-500">
              ⚡ 2-min instant setup
            </span>
          </div>
        </div>

        {/* Right Businessman/woman Portrait + Floating Callouts */}
        <div className="hidden sm:block absolute right-0 bottom-0 w-[47%] lg:w-[49%] h-full pointer-events-none overflow-hidden">
          {/* Person Image */}
          <img 
            src="/banners/woman-main.png" 
            alt="Ranked Business Owner" 
            className="w-full h-full object-cover object-top"
          />

          {/* Left Edge Seamless Blend Overlay (replaces buggy CSS mask) */}
          <div className="absolute inset-y-0 left-0 w-20 sm:w-28 bg-gradient-to-r from-[#F0F7FF] via-[#F0F7FF]/60 to-transparent pointer-events-none z-10" />

          {/* Top Right Floating Badge: #1 Trusted Business */}
          <div className="absolute top-5 right-5 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-2xl shadow-[0_10px_25px_rgba(0,0,0,0.08)] border border-amber-200/70 flex items-center gap-2 z-20">
            <span className="text-xl select-none leading-none">👑</span>
            <div>
              <div className="font-black text-xs text-slate-900 leading-tight">#1 Trusted</div>
              <div className="text-[9px] font-bold text-[#0066FF] uppercase tracking-wider leading-tight">Business</div>
            </div>
          </div>

          {/* Unified Bottom Floating Glass Trust Card */}
          <div className="absolute bottom-5 left-3 right-4 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-2xl shadow-[0_12px_30px_rgba(0,0,0,0.09)] border border-blue-100/90 flex items-center justify-between z-20">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-blue-50 text-[#0066FF] flex items-center justify-center shrink-0">
                <BarChart3 size={18} />
              </div>
              <div>
                <div className="font-black text-sm text-slate-900 leading-tight">10K+</div>
                <div className="text-[9.5px] text-slate-500 font-bold leading-tight">
                  Ranked Businesses
                </div>
              </div>
            </div>

            <div className="h-6 w-[1px] bg-slate-200" />

            <div className="flex items-center gap-2.5">
              <div>
                <div className="flex items-center gap-0.5 text-amber-400 text-xs mb-0.5">
                  {[...Array(5)].map((_, idx) => (
                    <Star key={idx} size={11} className="fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <div className="font-black text-[11px] text-slate-900 leading-tight">Verified Reviews</div>
              </div>
              <div className="w-6 h-6 rounded-full bg-emerald-500 text-white flex items-center justify-center shrink-0 shadow-2xs">
                <ShieldCheck size={13} className="text-white" />
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Right Banners (5 cols) */}
      <div className="xl:col-span-5 flex flex-col gap-6 justify-between">
        
        {/* Top Right: How Businesses Get Ranked */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="rounded-3xl overflow-hidden relative bg-gradient-to-br from-[#F5FAFF] via-[#EEF5FD] to-[#DCEBFE] p-6 sm:p-7 border border-blue-100/70 shadow-xs flex flex-col justify-between min-h-[235px] flex-1"
        >
          <div className="relative z-10 max-w-[55%] sm:max-w-[53%]">
            <div className="inline-flex items-center gap-1.5 text-[#0066FF] text-[10px] font-black tracking-wider uppercase bg-white/95 px-3 py-1 rounded-full mb-2.5 shadow-2xs border border-blue-100 w-fit">
              <BarChart3 size={12} className="text-[#0066FF]" /> TRANSPARENT CRITERIA
            </div>
            <h3 className="text-xl sm:text-[22px] font-black text-slate-900 mb-1.5 leading-tight tracking-tight">
              How Businesses Get Ranked
            </h3>
            <p className="text-xs sm:text-[13px] font-medium text-slate-600 mb-3 leading-snug">
              Rankings are proven through authentic customer reviews, response speed, and verification.
            </p>
            
            {/* Ranking factor chips */}
            <div className="flex flex-wrap gap-1.5 mb-4">
              <span className="text-[10px] font-bold text-slate-700 bg-white/90 px-2 py-0.5 rounded-md border border-slate-200/60 shadow-2xs">
                ⭐ Real Reviews
              </span>
              <span className="text-[10px] font-bold text-slate-700 bg-white/90 px-2 py-0.5 rounded-md border border-slate-200/60 shadow-2xs">
                ⚡ Response Speed
              </span>
              <span className="text-[10px] font-bold text-slate-700 bg-white/90 px-2 py-0.5 rounded-md border border-slate-200/60 shadow-2xs">
                🛡️ KYC Audited
              </span>
            </div>

            <a 
              href="#ranking" 
              onClick={(e) => {
                e.preventDefault();
                const target = document.getElementById('ranking') || document.getElementById('how-it-works');
                if (target) {
                  target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  window.history.pushState(null, '', '#ranking');
                }
              }}
              className="inline-flex items-center gap-1.5 bg-[#0066FF] hover:bg-[#0052CC] text-white text-xs sm:text-sm font-extrabold px-5 py-2.5 rounded-xl transition-all shadow-sm hover:shadow-md group w-fit cursor-pointer"
            >
              How Ranking Works 
              <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>

          {/* Graphic / Callout */}
          <div className="hidden sm:flex absolute right-0 bottom-0 w-[45%] h-full items-end justify-end pointer-events-none">
            <img 
              src="/banners/woman-laptop.jpg" 
              alt="Top Ranking Factors" 
              className="w-auto h-[96%] object-contain object-bottom drop-shadow-md" 
            />
          </div>
        </motion.div>

        {/* Bottom Right: For Business Owners / Get More Customers */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="rounded-3xl overflow-hidden relative bg-gradient-to-br from-[#F5FAFF] via-[#EEF5FD] to-[#DCEBFE] p-6 sm:p-7 border border-blue-100/70 shadow-xs flex flex-col justify-between min-h-[235px] flex-1"
        >
          <div className="relative z-10 max-w-[58%] sm:max-w-[55%]">
            <div className="inline-flex items-center gap-1.5 text-[#0066FF] text-[10px] font-black tracking-wider uppercase bg-blue-50/90 px-3 py-1 rounded-full mb-2.5 shadow-2xs border border-blue-200/70 w-fit">
              <Store size={12} className="text-[#0066FF]" /> FOR BUSINESS OWNERS
            </div>
            <h3 className="text-xl sm:text-[22px] font-black text-slate-900 mb-1 leading-tight tracking-tight">
              Get More <br />Customers
            </h3>
            <p className="text-xs sm:text-[13px] font-medium text-slate-600 mb-3 leading-snug">
              Grow your business with a stronger online presence on BizDial.
            </p>
            
            <ul className="space-y-1.5 mb-4">
              <li className="flex items-center gap-2 text-xs font-bold text-slate-700">
                <CheckCircle2 size={13} className="text-[#0066FF] shrink-0" />
                <span>Reach customers searching in your area</span>
              </li>
              <li className="flex items-center gap-2 text-xs font-bold text-slate-700">
                <CheckCircle2 size={13} className="text-[#0066FF] shrink-0" />
                <span>Showcase your products &amp; services</span>
              </li>
              <li className="flex items-center gap-2 text-xs font-bold text-slate-700">
                <CheckCircle2 size={13} className="text-[#0066FF] shrink-0" />
                <span>Get direct calls and enquiries</span>
              </li>
            </ul>

            <div className="flex items-center gap-2.5">
              <Link 
                href="/register" 
                className="inline-flex items-center gap-1.5 bg-[#0066FF] hover:bg-[#0052CC] text-white text-xs sm:text-sm font-extrabold px-4.5 py-2.5 rounded-xl shadow-sm hover:shadow-md transition-all shrink-0"
              >
                List Your Business <ArrowRight size={14} />
              </Link>
              <Link 
                href="/learn-more" 
                className="inline-flex items-center gap-1 bg-white hover:bg-slate-50 text-slate-800 border border-slate-200/80 text-xs sm:text-sm font-extrabold px-4.5 py-2.5 rounded-xl shadow-2xs hover:shadow-xs transition-all shrink-0"
              >
                Learn More
              </Link>
            </div>
          </div>

          {/* Visual + Callout */}
          <div className="hidden sm:flex absolute right-0 bottom-0 w-[45%] h-full items-end justify-end pointer-events-none">
            <img 
              src="/banners/woman-phone.png" 
              alt="Business Owner" 
              className="w-auto h-[96%] object-contain object-bottom drop-shadow-md" 
            />
          </div>
        </motion.div>

      </div>

    </section>
  );
}
