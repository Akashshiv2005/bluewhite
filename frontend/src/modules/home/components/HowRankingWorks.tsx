"use client";
import React from 'react';
import Link from 'next/link';
import { 
  Star, 
  Search, 
  Code2, 
  MapPin, 
  ArrowRight, 
  ArrowDown,
  Sparkles, 
  CheckCircle2, 
  Zap, 
  Globe,
  Cpu,
  ShieldCheck,
  Crown,
  Check
} from 'lucide-react';
import { motion } from 'framer-motion';

export default function HowRankingWorks() {
  // 4 Core Ranking Pillar Cards
  const rankingPillars = [
    {
      icon: Star,
      iconColor: 'text-amber-500',
      bgGradient: 'from-amber-50 to-amber-100/50',
      borderColor: 'border-amber-200/80',
      pill: 'Ratings & Trust',
      pillColor: 'bg-amber-100 text-amber-800 border-amber-300',
      title: 'Ratings & Verified Reviews',
      tagline: 'Higher Rating = Higher Ranking',
      description: 'Authentic 4★ & 5★ customer ratings directly boost your leaderboard score and feed Google AggregateRating rich stars in search results.',
      footerStatus: 'Powers Google star snippets',
      footerColor: 'text-amber-600'
    },
    {
      icon: Globe,
      iconColor: 'text-[#0066FF]',
      bgGradient: 'from-blue-50 to-blue-100/50',
      borderColor: 'border-blue-200/80',
      pill: 'SEO Engine',
      pillColor: 'bg-blue-100 text-blue-800 border-blue-300',
      title: 'Automated Meta & Keywords',
      tagline: 'Targeted Titles & Local Keywords',
      description: "BizDial's template engine automatically generates custom SEO meta titles, descriptions, and city tags to rank on Google and Bing searches.",
      footerStatus: 'Auto-indexed on Google & Bing',
      footerColor: 'text-[#0066FF]'
    },
    {
      icon: Code2,
      iconColor: 'text-[#0284C7]',
      bgGradient: 'from-sky-50 to-blue-100/50',
      borderColor: 'border-sky-200/80',
      pill: 'Google Schema',
      pillColor: 'bg-sky-100 text-sky-800 border-sky-300',
      title: 'Schema.org & Rich Snippets',
      tagline: 'Structured JSON-LD Data',
      description: 'Every listing is enriched with Schema.org LocalBusiness, Breadcrumbs, and FAQ JSON-LD code for clickable rich snippet cards on Google.',
      footerStatus: 'Schema.org LocalBusiness JSON-LD',
      footerColor: 'text-[#0284C7]'
    },
    {
      icon: MapPin,
      iconColor: 'text-emerald-600',
      bgGradient: 'from-emerald-50 to-emerald-100/50',
      borderColor: 'border-emerald-200/80',
      pill: 'Local SEO',
      pillColor: 'bg-emerald-100 text-emerald-800 border-emerald-300',
      title: 'Hyperlocal Search Proximity',
      tagline: 'Nearest Local Customers First',
      description: 'When buyers search in your city or area, our GPS Haversine proximity engine matches and ranks your business at the top of their neighborhood.',
      footerStatus: 'Geotargeted neighborhood leads',
      footerColor: 'text-emerald-600'
    }
  ];

  // 5 Step Up-To-Down Vertical Flow Line Steps
  const verticalFlowSteps = [
    {
      step: '01',
      phase: 'STAGE 1 • USER INPUT',
      title: 'Customer Enters Search Query & Location',
      icon: Search,
      iconBg: 'from-[#0066FF] to-[#0052CC]',
      borderColor: 'border-blue-200/90',
      tagBg: 'bg-blue-50 text-[#0066FF] border-blue-200',
      description: 'A customer searches e.g. "Best AC Repair in Kochi" or clicks a specific category. Their precise GPS coordinates and search intent are captured instantly.',
      previewText: 'Query: "AC Repair" • Kochi 📍',
      logicSnippet: 'input.query = "AC Repair" & coords(9.9312, 76.2673)',
      executionTime: '0ms'
    },
    {
      step: '02',
      phase: 'STAGE 2 • SEO & CATEGORY MATCHING',
      title: 'Semantic SEO Keywords & Schema Match',
      icon: Cpu,
      iconBg: 'from-[#0284C7] to-[#0369A1]',
      borderColor: 'border-sky-200/90',
      tagBg: 'bg-sky-50 text-[#0284C7] border-sky-200',
      description: 'BizDial’s SEO engine matches the query with automated Schema.org LocalBusiness categories, page meta titles, and indexed business service keywords.',
      previewText: 'Relevance: 99.4% Category Match',
      logicSnippet: 'weight_category_match * 1.5 + seo_keywords',
      executionTime: '35ms'
    },
    {
      step: '03',
      phase: 'STAGE 3 • HYPERLOCAL PROXIMITY',
      title: 'Haversine GPS Distance Calculation',
      icon: MapPin,
      iconBg: 'from-[#2563EB] to-[#1D4ED8]',
      borderColor: 'border-indigo-200/90',
      tagBg: 'bg-indigo-50 text-[#2563EB] border-indigo-200',
      description: 'The backend calculates the exact spherical distance between the customer and candidate businesses using the Haversine formula (0–5 km priority radius).',
      previewText: 'Distance: 1.8 km (Within 5km Priority Zone)',
      logicSnippet: 'haversine(user_lat, user_lon, biz_lat, biz_lon) <= 5.0km',
      executionTime: '65ms'
    },
    {
      step: '04',
      phase: 'STAGE 4 • TRUST & QUALITY AUDIT',
      title: 'Live Rating, Reviews & Verification Scoring',
      icon: ShieldCheck,
      iconBg: 'from-[#4F46E5] to-[#3730A3]',
      borderColor: 'border-purple-200/90',
      tagBg: 'bg-purple-50 text-[#4F46E5] border-purple-200',
      description: 'Every business is scored across 4 dimensions: authentic customer star ratings (0–5★ × 20), verified reviews volume (capped anti-spam), and government KYC audit status.',
      previewText: 'Score: 4.8★ (120+ reviews) + KYC Verified',
      logicSnippet: 'score = (rating*20) + min(reviews*2, 50) + verified(20)',
      executionTime: '95ms'
    },
    {
      step: '05',
      phase: 'STAGE 5 • WINNER OUTPUT',
      title: '#1 Top Ranked Business Displayed First',
      icon: Crown,
      iconBg: 'from-[#059669] to-[#047857]',
      borderColor: 'border-emerald-300',
      tagBg: 'bg-emerald-50 text-emerald-700 border-emerald-300',
      description: 'The highest-scoring, closest verified business takes the #1 featured spotlight on search results with 1-tap Call and WhatsApp buttons for instant leads.',
      previewText: '🏆 Top Ranked: 1-Tap Direct Call & Leads',
      logicSnippet: 'rank_order == 1 (Direct 1-Tap Lead Generated)',
      executionTime: '118ms Total'
    }
  ];

  return (
    <section id="ranking" className="mb-24 scroll-mt-24">
      
      {/* Top Header */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center justify-center gap-2 px-3.5 h-7 rounded-full bg-blue-50 border border-blue-200 shadow-2xs mb-3.5 leading-none">
          <Sparkles size={14} className="text-[#0066FF] shrink-0" />
          <span className="text-[#0066FF] text-[11px] font-black tracking-wider uppercase leading-none pt-[1px]">
            BACKEND SEO &amp; RANKING ENGINE
          </span>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-black text-slate-900 mb-3 tracking-tight">
          How Our SEO Engine Ranks Your Business
        </h2>
        <p className="text-sm sm:text-base font-medium text-slate-600 max-w-2xl mx-auto leading-relaxed">
          BizDial’s built-in SEO engine automatically structures, tags, and optimizes your business listing so you rank at the top of local search and Google.
        </p>
      </div>

      {/* 4 SEO & Ranking Pillar Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        {rankingPillars.map((pillar, idx) => (
          <motion.div
            key={pillar.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.08, duration: 0.4 }}
            className={`bg-white rounded-3xl p-6 border ${pillar.borderColor} shadow-xs hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group`}
          >
            <div>
              {/* Icon & Pill */}
              <div className="flex items-center justify-between mb-5">
                <div className={`w-13 h-13 rounded-2xl bg-gradient-to-br ${pillar.bgGradient} flex items-center justify-center ${pillar.iconColor} group-hover:scale-105 transition-transform shadow-xs`}>
                  <pillar.icon size={26} strokeWidth={2.3} />
                </div>
                <span className={`inline-flex items-center justify-center h-6 text-[10.5px] font-black tracking-wider uppercase px-2.5 rounded-full border leading-none ${pillar.pillColor}`}>
                  <span className="leading-none pt-[1px]">{pillar.pill}</span>
                </span>
              </div>

              {/* Title & Tagline */}
              <h3 className="text-lg font-black text-slate-900 mb-1 group-hover:text-[#0066FF] transition-colors leading-snug">
                {pillar.title}
              </h3>
              <div className="text-[12px] font-extrabold text-[#0066FF] mb-3">
                {pillar.tagline}
              </div>

              {/* Description */}
              <p className="text-xs sm:text-[13px] text-slate-600 font-medium leading-relaxed">
                {pillar.description}
              </p>
            </div>

            {/* Bottom check status */}
            <div className="pt-4 mt-5 border-t border-slate-100 flex items-center gap-2 text-xs font-bold text-slate-700">
              <CheckCircle2 size={15} className={`${pillar.footerColor} shrink-0`} />
              <span>{pillar.footerStatus}</span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* UP-TO-DOWN VERTICAL FLOW LINE CONTAINER */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="rounded-[2.5rem] bg-gradient-to-b from-[#F8FAFF] via-[#EEF5FE] to-[#E5F0FF] p-6 sm:p-10 lg:p-12 border border-blue-200/80 shadow-[0_12px_45px_rgba(0,102,255,0.06)] mb-14 relative overflow-hidden"
      >
        {/* Subtle Background Radial Highlights */}
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-blue-300/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-sky-200/20 rounded-full blur-3xl pointer-events-none" />

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 relative z-10">
          <div className="inline-flex items-center justify-center gap-2 px-3.5 h-7 rounded-full bg-blue-100/80 border border-blue-300/80 text-[#0052CC] text-[11px] font-black tracking-wider uppercase mb-3 shadow-2xs leading-none">
            <Cpu size={14} className="shrink-0" />
            <span className="leading-none pt-[1px]">LIVE ALGORITHM PIPELINE • UP TO DOWN FLOW</span>
          </div>
          <h3 className="text-2xl sm:text-3xl lg:text-[34px] font-black text-slate-900 tracking-tight mb-2.5">
            How A User Search Ranks The Relevant Business #1
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">
            Follow the real-time pipeline from top to bottom — from the moment a customer enters a search to the exact moment the top business ranks first:
          </p>
        </div>

        {/* Vertical Pipeline Container */}
        <div className="max-w-3xl mx-auto relative z-10">
          
          {/* Unbroken Vertical Flow Track (Running behind nodes from Up to Down) */}
          <div className="absolute left-6 sm:left-8 top-10 bottom-10 w-[3.5px] bg-gradient-to-b from-[#0066FF] via-[#0284C7] via-[#2563EB] to-[#059669] rounded-full z-0 hidden xs:block" />

          {/* 5 Stacked Vertical Steps */}
          <div className="flex flex-col gap-6 sm:gap-7 relative">
            {verticalFlowSteps.map((item, idx) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08, duration: 0.4 }}
                className="flex items-start gap-4 sm:gap-6 relative group"
              >
                {/* Left: Node on Vertical Rail */}
                <div className="flex flex-col items-center z-10 shrink-0">
                  {/* Glowing Round Node Icon */}
                  <div className={`w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br ${item.iconBg} flex items-center justify-center text-white shadow-lg border-[3px] border-white group-hover:scale-105 transition-transform`}>
                    <item.icon size={24} strokeWidth={2.4} className="sm:w-7 sm:h-7" />
                  </div>

                  {/* Downward Flow Arrow Between Steps (Up to Down indicator) */}
                  {idx < verticalFlowSteps.length - 1 && (
                    <div className="w-6 h-6 rounded-full bg-white border border-blue-200/90 shadow-2xs flex items-center justify-center text-[#0066FF] my-2 z-10">
                      <ArrowDown size={13} strokeWidth={2.6} />
                    </div>
                  )}
                </div>

                {/* Right: Full Details Card */}
                <div className={`flex-1 bg-white/95 backdrop-blur-md rounded-3xl p-5 sm:p-6 border ${item.borderColor} shadow-[0_8px_25px_-5px_rgba(0,102,255,0.06)] hover:shadow-lg hover:border-blue-300 transition-all duration-300 flex flex-col justify-between`}>
                  
                  {/* Top Bar: Phase, Step Badge & Execution Timing */}
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2.5 pb-2 border-b border-slate-100">
                    <div className="flex items-center gap-2">
                      <span className={`inline-flex items-center justify-center h-5 text-[10px] font-black tracking-wider uppercase px-2.5 rounded-full border leading-none ${item.tagBg}`}>
                        <span className="leading-none pt-[0.5px]">Step {item.step}</span>
                      </span>
                      <span className="text-[11px] font-extrabold text-[#0066FF] uppercase tracking-wider">
                        {item.phase}
                      </span>
                    </div>

                    <span className="inline-flex items-center justify-center h-5 text-[10.5px] font-bold text-slate-600 bg-slate-100 px-2 rounded-md leading-none">
                      <span className="leading-none pt-[0.5px]">⚡ {item.executionTime}</span>
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h4 className="text-lg sm:text-xl font-black text-slate-900 mb-1.5 group-hover:text-[#0066FF] transition-colors leading-snug">
                    {item.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed mb-4">
                    {item.description}
                  </p>

                  {/* Bottom Strip: Simulation Result & Backend Logic */}
                  <div className="pt-3 border-t border-slate-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs">
                    <div className="font-bold text-slate-800 bg-slate-50 border border-slate-200/80 px-2.5 py-1 rounded-xl">
                      {item.previewText}
                    </div>
                    <code className="text-[10px] font-mono font-bold text-slate-600 bg-slate-50 border border-slate-200/60 px-2 py-1 rounded-lg">
                      {item.logicSnippet}
                    </code>
                  </div>

                </div>
              </motion.div>
            ))}
          </div>

        </div>

        {/* Pipeline Bottom Summary Footer */}
        <div className="mt-10 pt-6 border-t border-blue-200/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left relative z-10">
          <div className="flex items-center gap-2 text-xs font-bold text-slate-700">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping shrink-0" />
            <span>End-to-end execution completed in under 120ms: Query parsing, GPS Haversine filtering, and verified rating calculation.</span>
          </div>

          <Link
            href="/register"
            className="inline-flex items-center gap-1.5 text-xs font-black text-[#0066FF] hover:text-[#0052CC] transition-colors shrink-0"
          >
            <span>Optimize Your Business Profile</span>
            <ArrowRight size={13} />
          </Link>
        </div>

      </motion.div>

      {/* Simple Trust Banner */}
      <div className="rounded-3xl bg-gradient-to-r from-blue-50 via-indigo-50/50 to-blue-50/70 border border-blue-100/90 p-6 sm:p-8 flex flex-col lg:flex-row items-center justify-between gap-6 shadow-xs">
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 text-center sm:text-left">
          <div className="w-12 h-12 rounded-2xl bg-[#0066FF] text-white flex items-center justify-center shrink-0 shadow-md">
            <Zap size={22} className="fill-white" />
          </div>
          <div>
            <h4 className="text-lg font-black text-slate-900 mb-1">
              Want your business to rank #1 on Google and reach nearby customers?
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 font-medium max-w-2xl">
              List your business for free. BizDial’s SEO engine automatically builds your Schema.org markup, generates meta tags, and indexes your listing across local search engines.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <Link
            href="/register"
            className="inline-flex items-center justify-center gap-2 bg-[#0066FF] hover:bg-[#0052CC] text-white text-xs sm:text-sm font-extrabold px-6 h-11 rounded-xl shadow-md hover:shadow-lg transition-all hover:scale-105 leading-none"
          >
            <span className="leading-none pt-[1px]">List Your Business Free</span>
            <ArrowRight size={15} />
          </Link>
        </div>
      </div>

    </section>
  );
}
