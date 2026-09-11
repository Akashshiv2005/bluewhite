"use client";
import React, { useState, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Star, 
  TrendingUp, 
  Users, 
  PhoneCall, 
  BarChart3, 
  ShieldCheck, 
  Play, 
  X, 
  ChevronDown, 
  ArrowRight, 
  Rocket, 
  Quote, 
  CheckCircle2,
  GraduationCap
} from 'lucide-react';

interface ReviewItem {
  id: string;
  name: string;
  role: string;
  city: string;
  avatar: string;
  rating: number;
  review: string;
  highlightMetric: string;
  highlightLabel: string;
  category: 'leads' | 'visibility' | 'easy' | 'support';
  metricColor: 'green' | 'purple' | 'blue' | 'pink' | 'teal' | 'amber';
  date: string;
}

interface VideoStory {
  id: string;
  title: string;
  business: string;
  city: string;
  image: string;
  duration: string;
  quote: string;
  growth: string;
  ownerName: string;
}

export default function BusinessReviews() {
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'leads' | 'visibility' | 'easy' | 'support'>('all');
  const [sortOrder, setSortOrder] = useState<'latest' | 'rating' | 'growth'>('latest');
  const [activeVideo, setActiveVideo] = useState<VideoStory | null>(null);

  // Reviews Data matching user design mockup - Trichy local business partners
  const reviews: ReviewItem[] = [
    {
      id: '1',
      name: 'R. Ajeesh Kumar',
      role: 'Electronics Store',
      city: 'Singarathope, Trichy',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
      rating: 5.0,
      review: 'Since joining BizDial, we have received more genuine inquiries and footfall to our electronics showroom in Singarathope. The platform is simple and effective.',
      highlightMetric: '+70%',
      highlightLabel: 'Increase in Customer Inquiries',
      category: 'leads',
      metricColor: 'green',
      date: '2026-03-05'
    },
    {
      id: '2',
      name: 'Sneha Varghese',
      role: 'Beauty & Bridal Salon',
      city: 'Thillai Nagar, Trichy',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80',
      rating: 4.8,
      review: 'BizDial helped our salon in Thillai Nagar get discovered by brides and new clients across Trichy. The support team is very responsive.',
      highlightMetric: '+60%',
      highlightLabel: 'New Customer Visits',
      category: 'visibility',
      metricColor: 'purple',
      date: '2026-03-01'
    },
    {
      id: '3',
      name: 'Faisal Rahman',
      role: 'Car Service Center',
      city: 'Karur Bypass, Trichy',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80',
      rating: 4.9,
      review: 'Great platform for local businesses. We started getting vehicle service calls within days of listing on BizDial. Very satisfied with the service.',
      highlightMetric: '+120%',
      highlightLabel: 'More Phone Calls',
      category: 'leads',
      metricColor: 'blue',
      date: '2026-02-28'
    },
    {
      id: '4',
      name: 'Priya Nair',
      role: 'Tuition & Coaching Academy',
      city: 'Cantonment, Trichy',
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&auto=format&fit=crop&q=80',
      rating: 4.8,
      review: 'BizDial has really improved our visibility in local search across Trichy. We get quality leads and genuine parents\' inquiries for student admissions.',
      highlightMetric: '+65%',
      highlightLabel: 'Increase in Admissions',
      category: 'visibility',
      metricColor: 'pink',
      date: '2026-02-20'
    },
    {
      id: '5',
      name: 'Vishnu Das',
      role: 'Furniture Store',
      city: 'Main Guard Gate, Trichy',
      avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&auto=format&fit=crop&q=80',
      rating: 4.7,
      review: 'Affordable and result-oriented. Our furniture showroom near Main Guard Gate got tremendous exposure and we are seeing consistent growth.',
      highlightMetric: '+80%',
      highlightLabel: 'Profile Views',
      category: 'easy',
      metricColor: 'teal',
      date: '2026-02-15'
    },
    {
      id: '6',
      name: 'Anjali Ramesh',
      role: 'Silks & Boutique',
      city: 'NSB Road, Trichy',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
      rating: 5.0,
      review: 'Listing on BizDial was the best decision for our boutique on NSB Road. It\'s easy to use and really helps local small businesses like ours.',
      highlightMetric: '+50%',
      highlightLabel: 'Increase in Sales Enquiries',
      category: 'support',
      metricColor: 'amber',
      date: '2026-02-10'
    }
  ];

  // Video Stories Data - Trichy business success stories
  const videoStories: VideoStory[] = [
    {
      id: 'v1',
      title: 'More customers, more growth',
      business: 'Electronics Store',
      city: 'Singarathope, Trichy',
      image: '/reviews/video-electronics.jpg',
      duration: '1:45',
      ownerName: 'Sunil Kumar',
      growth: '+140% annual revenue',
      quote: 'Within 3 months of getting verified on BizDial, footfall to our electronics showroom in Singarathope doubled. Customers trust the verified badge.'
    },
    {
      id: 'v2',
      title: 'Easy to use and effective',
      business: 'Beauty & Bridal Salon',
      city: 'Thillai Nagar, Trichy',
      image: '/reviews/video-salon.jpg',
      duration: '2:10',
      ownerName: 'Meera Krishnan',
      growth: '+85 appointment bookings/mo',
      quote: 'BizDial gave us strong brand presence in Trichy without expensive billboards. New bridal clients find our salon directly through BizDial.'
    },
    {
      id: 'v3',
      title: 'Best platform for local business',
      business: 'Car Care & Detailing',
      city: 'Karur Bypass Road, Trichy',
      image: '/reviews/video-car.jpg',
      duration: '1:55',
      ownerName: 'Rajesh Nambiar',
      growth: '+120 emergency roadside calls',
      quote: 'When vehicle owners need urgent repairs or maintenance around Trichy, they call us directly from our BizDial verified listing.'
    }
  ];

  // Filter & Sort Logic
  const filteredReviews = useMemo(() => {
    let list = reviews.filter((r) => {
      if (selectedFilter === 'all') return true;
      return r.category === selectedFilter;
    });

    if (sortOrder === 'rating') {
      list.sort((a, b) => b.rating - a.rating);
    } else if (sortOrder === 'growth') {
      list.sort((a, b) => parseInt(b.highlightMetric) - parseInt(a.highlightMetric));
    } else {
      list.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    }
    return list;
  }, [selectedFilter, sortOrder]);

  const filterTabs = [
    { id: 'all', label: 'All Reviews' },
    { id: 'leads', label: 'Increased Leads' },
    { id: 'visibility', label: 'Better Visibility' },
    { id: 'easy', label: 'Easy to Use' },
    { id: 'support', label: 'Customer Support' },
  ];

  // Metric badge color helpers
  const getMetricStyles = (color: string) => {
    switch (color) {
      case 'green':
        return {
          bg: 'bg-emerald-50/90 border-emerald-100/90 text-emerald-800',
          icon: <TrendingUp className="w-4 h-4 text-emerald-600" />
        };
      case 'purple':
        return {
          bg: 'bg-purple-50/90 border-purple-100/90 text-purple-800',
          icon: <Users className="w-4 h-4 text-purple-600" />
        };
      case 'blue':
        return {
          bg: 'bg-blue-50/90 border-blue-100/90 text-[#0066FF]',
          icon: <PhoneCall className="w-4 h-4 text-[#0066FF]" />
        };
      case 'pink':
        return {
          bg: 'bg-pink-50/90 border-pink-100/90 text-pink-800',
          icon: <GraduationCap className="w-4 h-4 text-pink-600" />
        };
      case 'teal':
        return {
          bg: 'bg-teal-50/90 border-teal-100/90 text-teal-800',
          icon: <BarChart3 className="w-4 h-4 text-teal-600" />
        };
      case 'amber':
      default:
        return {
          bg: 'bg-amber-50/90 border-amber-100/90 text-amber-800',
          icon: <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
        };
    }
  };

  return (
    <section id="reviews" className="pt-8 pb-14 sm:pt-12 sm:pb-20 scroll-mt-20">
      
      {/* 1. Top Section: Headlines, Stats & Featured Partner Visual */}
      <div className="bg-gradient-to-b from-[#F3F8FF] via-white to-white rounded-3xl p-6 sm:p-8 lg:p-12 border border-blue-100/70 shadow-sm mb-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Side: Headlines & Stats */}
          <div className="lg:col-span-7">
            
            {/* Small uppercase tag */}
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center justify-center h-6.5 gap-1.5 px-3 rounded-full bg-blue-50/80 border border-blue-200/80 text-[11px] font-bold tracking-widest text-[#0066FF] uppercase mb-4 leading-none"
            >
              <span className="leading-none pt-[1px]">REAL BUSINESS OWNERS. REAL STORIES.</span>
            </motion.div>

            {/* Main Section Heading */}
            <motion.h2 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl sm:text-4xl lg:text-[46px] font-black tracking-tight leading-[1.12] text-slate-900 mb-4"
            >
              What Our Business <br className="hidden sm:block" />
              Partners Say About <span className="text-slate-900">Biz</span><span className="animate-text-shimmer font-black">Dial</span>
            </motion.h2>

            {/* Subtitle */}
            <motion.p 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-slate-600 text-base sm:text-[17px] leading-relaxed max-w-xl mb-8"
            >
              Hear from business owners who have grown their business with BizDial. Real feedback, real results.
            </motion.p>

            {/* 4 Stat Badges Row */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 pt-2 border-t border-slate-100"
            >
              {/* Stat 1 */}
              <div className="flex items-center gap-3 p-2.5 rounded-xl bg-white border border-slate-100 shadow-2xs">
                <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center shrink-0">
                  <Users className="w-5 h-5 text-[#0066FF]" />
                </div>
                <div>
                  <div className="text-base font-extrabold text-slate-900 leading-none mb-1">10,000+</div>
                  <div className="text-[11px] font-medium text-slate-500 leading-tight">Happy Business Owners</div>
                </div>
              </div>

              {/* Stat 2 */}
              <div className="flex items-center gap-3 p-2.5 rounded-xl bg-white border border-slate-100 shadow-2xs">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center shrink-0">
                  <TrendingUp className="w-5 h-5 text-emerald-600" />
                </div>
                <div>
                  <div className="text-base font-extrabold text-slate-900 leading-none mb-1">65%</div>
                  <div className="text-[11px] font-medium text-slate-500 leading-tight">Average Business Growth</div>
                </div>
              </div>

              {/* Stat 3 */}
              <div className="flex items-center gap-3 p-2.5 rounded-xl bg-white border border-slate-100 shadow-2xs">
                <div className="w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center shrink-0">
                  <Star className="w-5 h-5 text-amber-500 fill-amber-500" />
                </div>
                <div>
                  <div className="text-base font-extrabold text-slate-900 leading-none mb-1">4.8/5</div>
                  <div className="text-[11px] font-medium text-slate-500 leading-tight">Owner Satisfaction</div>
                </div>
              </div>

              {/* Stat 4 */}
              <div className="flex items-center gap-3 p-2.5 rounded-xl bg-white border border-slate-100 shadow-2xs">
                <div className="w-10 h-10 rounded-xl bg-sky-50 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-5 h-5 text-sky-600" />
                </div>
                <div>
                  <div className="text-base font-extrabold text-slate-900 leading-none mb-1">Trusted</div>
                  <div className="text-[11px] font-medium text-slate-500 leading-tight">Across 50+ Cities</div>
                </div>
              </div>
            </motion.div>

          </div>

          {/* Right Side: Featured Partner Showcase Visual */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative rounded-3xl overflow-hidden bg-gradient-to-tr from-blue-100/60 via-slate-100/40 to-blue-50 border border-blue-100 p-2 shadow-xl">
              
              {/* Main Partner Photo */}
              <div className="relative h-[340px] sm:h-[380px] w-full rounded-2xl overflow-hidden shadow-inner">
                <Image 
                  src="/reviews/cafe-owner.jpg" 
                  alt="R. Sundaram - Cafe Owner, Cantonment, Trichy"
                  fill
                  className="object-cover object-top hover:scale-102 transition-transform duration-700"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

                {/* Floating Top-Right "Local Businesses Stronger Together" Pill */}
                <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-md rounded-2xl p-2.5 px-3.5 shadow-lg border border-blue-50 flex flex-col items-end">
                  <div className="text-right">
                    <span className="text-[13px] font-black text-[#0052CC] italic tracking-tight block">
                      Local Businesses
                    </span>
                    <span className="text-[13px] font-black text-[#0066FF] italic tracking-tight block -mt-1">
                      Stronger Together
                    </span>
                  </div>
                  {/* Indian Tricolor Accent Curve */}
                  <div className="flex items-center gap-0.5 mt-1">
                    <span className="w-4 h-1 rounded-full bg-[#FF9933]" />
                    <span className="w-4 h-1 rounded-full bg-white border border-slate-200" />
                    <span className="w-4 h-1 rounded-full bg-[#138808]" />
                  </div>
                </div>

                {/* Floating Bottom-Left Testimonial Card */}
                <div className="absolute bottom-4 left-4 right-4 sm:right-auto sm:max-w-[320px] bg-white/95 backdrop-blur-md p-3.5 sm:p-4 rounded-2xl shadow-xl border border-slate-100">
                  <div className="flex items-start gap-2.5 mb-1.5">
                    <Quote className="w-5 h-5 text-[#0066FF] fill-[#0066FF]/10 shrink-0 mt-0.5" />
                    <p className="text-xs sm:text-[13px] font-semibold text-slate-800 leading-snug">
                      &quot;BizDial brought more local customers and catering orders to our store in Cantonment. Highly recommended for Trichy businesses!&quot;
                    </p>
                  </div>
                  <div className="pl-7">
                    <div className="text-xs font-bold text-slate-900">R. Sundaram</div>
                    <div className="text-[11px] text-slate-500">Cafe Owner, Cantonment, Trichy</div>
                  </div>
                </div>

              </div>

            </div>
          </motion.div>

        </div>
      </div>

      {/* 2. Interactive Filter & Sorting Bar */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
        
        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center gap-2">
          {filterTabs.map((tab) => {
            const isActive = selectedFilter === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setSelectedFilter(tab.id as any)}
                className={`inline-flex items-center justify-center h-8 sm:h-9 px-4 sm:px-5 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer leading-none ${
                  isActive
                    ? 'bg-[#0066FF] text-white shadow-md shadow-blue-500/25 scale-102'
                    : 'bg-slate-100 hover:bg-slate-200/80 text-slate-700'
                }`}
              >
                <span className="leading-none pt-[1px]">{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Sorting Dropdown */}
        <div className="flex items-center gap-2 self-end sm:self-auto shrink-0">
          <div className="relative inline-flex items-center">
            <select
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value as any)}
              className="appearance-none bg-white border border-slate-200 rounded-full h-8 sm:h-9 px-4 pr-9 text-xs sm:text-sm font-bold text-slate-700 hover:border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer shadow-2xs leading-none"
            >
              <option value="latest">Latest First</option>
              <option value="rating">Highest Rated</option>
              <option value="growth">Top Growth</option>
            </select>
            <ChevronDown className="w-3.5 h-3.5 text-slate-500 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>
        </div>

      </div>

      {/* 3. 6 Business Partner Review Cards Grid */}
      <motion.div 
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
      >
        <AnimatePresence>
          {filteredReviews.map((item) => {
            const metricStyle = getMetricStyles(item.metricColor);
            return (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-2xl border border-slate-200/80 p-6 shadow-sm hover:shadow-xl hover:border-blue-200 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Author Header Row */}
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-11 h-11 rounded-full overflow-hidden relative border-2 border-blue-50 shrink-0 bg-slate-100">
                        <Image 
                          src={item.avatar}
                          alt={item.name}
                          width={44}
                          height={44}
                          className="object-cover w-full h-full"
                          unoptimized
                        />
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 text-[15px] group-hover:text-[#0066FF] transition-colors leading-tight">
                          {item.name}
                        </h4>
                        <p className="text-xs text-slate-500 font-medium">
                          {item.role}, {item.city}
                        </p>
                      </div>
                    </div>

                    {/* Star Rating Badge */}
                    <div className="flex items-center gap-1 shrink-0">
                      <div className="flex items-center text-amber-400">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            size={13} 
                            className="fill-amber-400 text-amber-400" 
                          />
                        ))}
                      </div>
                      <span className="text-xs font-bold text-slate-800 ml-0.5">
                        {item.rating.toFixed(1)}
                      </span>
                    </div>
                  </div>

                  {/* Review Text */}
                  <p className="text-slate-600 text-sm leading-relaxed mb-6 font-normal italic">
                    &ldquo;{item.review}&rdquo;
                  </p>
                </div>

                {/* Highlight Metric Pill */}
                <div className={`flex items-center gap-2 px-3 py-2 rounded-xl border font-bold text-xs ${metricStyle.bg}`}>
                  <div className="p-1 rounded-lg bg-white/80 shadow-2xs">
                    {metricStyle.icon}
                  </div>
                  <div>
                    <span className="font-extrabold text-sm mr-1.5">{item.highlightMetric}</span>
                    <span className="font-medium text-[11px] opacity-90">{item.highlightLabel}</span>
                  </div>
                </div>

              </motion.div>
            );
          })}
        </AnimatePresence>
      </motion.div>

      {/* 4. Success Stories: Business Owners Share Their Experience */}
      <div className="bg-slate-50/70 border border-slate-200/70 rounded-3xl p-6 sm:p-8 lg:p-10 mb-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Side: Success Stories Intro */}
          <div className="lg:col-span-4">
            <span className="text-[11px] font-extrabold text-[#0066FF] tracking-wider uppercase block mb-2">
              SUCCESS STORIES
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight leading-tight mb-3">
              Business Owners <br />
              Share Their <span className="text-[#0066FF]">Experience</span>
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed mb-6">
              See how BizDial is making a difference for local businesses across Trichy and Tamil Nadu.
            </p>
            <button 
              onClick={() => setActiveVideo(videoStories[0])}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#0066FF] hover:bg-[#0052CC] text-white font-bold text-xs sm:text-sm shadow-md shadow-blue-500/20 hover:shadow-lg transition-all cursor-pointer group"
            >
              <span>Watch All Videos</span>
              <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Right Side: 3 Video Cards */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {videoStories.map((video) => (
              <div
                key={video.id}
                onClick={() => setActiveVideo(video)}
                className="bg-white rounded-2xl overflow-hidden border border-slate-200/80 shadow-sm hover:shadow-lg transition-all cursor-pointer group flex flex-col"
              >
                {/* Video Thumbnail with Play Button */}
                <div className="relative aspect-video w-full overflow-hidden bg-slate-900">
                  <Image 
                    src={video.image} 
                    alt={video.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                  />
                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/10 transition-colors">
                    <div className="w-11 h-11 rounded-full bg-white/90 group-hover:bg-white text-slate-900 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      <Play className="w-5 h-5 text-slate-900 fill-slate-900 ml-0.5" />
                    </div>
                  </div>
                  {/* Duration Tag */}
                  <span className="absolute bottom-2 right-2 px-2 py-0.5 rounded-md bg-black/70 text-white text-[10px] font-semibold">
                    {video.duration}
                  </span>
                </div>

                {/* Video Meta */}
                <div className="p-3.5 flex-1 flex flex-col justify-between">
                  <h4 className="font-bold text-xs sm:text-[13px] text-slate-900 group-hover:text-[#0066FF] transition-colors leading-snug mb-1">
                    &ldquo;{video.title}&rdquo;
                  </h4>
                  <p className="text-[11px] text-slate-500 font-medium">
                    - {video.business}, {video.city}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* 5. Bottom Deep Blue CTA Banner */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative overflow-hidden rounded-2xl lg:rounded-3xl bg-gradient-to-r from-[#003B99] via-[#0052CC] to-[#0066FF] text-white p-6 sm:p-8 lg:p-10 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6"
      >
        {/* Background Graphic Accents */}
        <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-white/10 rounded-full blur-2xl pointer-events-none" />
        <div className="absolute -left-10 -top-10 w-64 h-64 bg-blue-400/10 rounded-full blur-2xl pointer-events-none" />

        {/* Left Info with Rocket Icon */}
        <div className="flex items-center gap-4 sm:gap-5 relative z-10 text-center md:text-left">
          <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-white/15 backdrop-blur-md border border-white/20 flex items-center justify-center shrink-0 shadow-lg text-white">
            <Rocket className="w-7 h-7 sm:w-8 sm:h-8 text-white animate-bounce" />
          </div>
          <div>
            <h3 className="text-xl sm:text-2xl lg:text-[26px] font-black tracking-tight text-white mb-1">
              Join Thousands of Successful Businesses
            </h3>
            <p className="text-blue-100 text-xs sm:text-sm font-normal">
              List your business on BizDial and experience the growth.
            </p>
          </div>
        </div>

        {/* Right Button & "Together for a Stronger India" Accent */}
        <div className="flex flex-col sm:flex-row items-center gap-4 relative z-10">
          <Link 
            href="/business/register" 
            className="px-6 py-3 rounded-xl bg-white hover:bg-slate-50 text-[#0052CC] font-black text-sm tracking-wide shadow-lg hover:shadow-2xl transition-all hover:scale-103 flex items-center gap-2 group whitespace-nowrap"
          >
            <span>List Your Business Now</span>
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>

          {/* Slogan Pill */}
          <div className="hidden xl:flex flex-col items-start pl-4 border-l border-white/20">
            <span className="text-[12px] font-extrabold italic text-white/90">
              Together for a
            </span>
            <span className="text-[12px] font-extrabold italic text-blue-200 -mt-1">
              Stronger India 🇮🇳
            </span>
          </div>
        </div>
      </motion.div>

      {/* Interactive Video Testimonial Modal */}
      <AnimatePresence>
        {activeVideo && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white rounded-3xl overflow-hidden max-w-2xl w-full shadow-2xl border border-slate-200 relative"
            >
              {/* Close Button */}
              <button 
                onClick={() => setActiveVideo(null)}
                className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-black/60 hover:bg-black text-white flex items-center justify-center transition-colors cursor-pointer"
              >
                <X size={18} />
              </button>

              {/* Video Player Area */}
              <div className="relative aspect-video w-full bg-slate-950 overflow-hidden">
                <Image 
                  src={activeVideo.image}
                  alt={activeVideo.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-white text-center p-6">
                  <div className="w-16 h-16 rounded-full bg-[#0066FF] text-white flex items-center justify-center mb-4 shadow-xl animate-pulse">
                    <Play size={28} className="fill-white ml-1" />
                  </div>
                  <div className="font-extrabold text-lg sm:text-xl text-white mb-1">
                    &ldquo;{activeVideo.title}&rdquo;
                  </div>
                  <div className="text-xs sm:text-sm text-blue-200">
                    Video Story with {activeVideo.ownerName} ({activeVideo.business}, {activeVideo.city})
                  </div>
                </div>
              </div>

              {/* Video Story Details */}
              <div className="p-6">
                <div className="flex items-center justify-between gap-4 mb-3">
                  <div>
                    <h4 className="font-black text-slate-900 text-lg">
                      {activeVideo.ownerName}
                    </h4>
                    <p className="text-xs font-semibold text-slate-500">
                      {activeVideo.business} &bull; {activeVideo.city}
                    </p>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 font-extrabold text-xs border border-emerald-200">
                    {activeVideo.growth}
                  </span>
                </div>
                <p className="text-slate-700 text-sm leading-relaxed mb-4 italic">
                  &ldquo;{activeVideo.quote}&rdquo;
                </p>
                <div className="flex items-center justify-between pt-3 border-t border-slate-100">
                  <span className="text-xs font-bold text-slate-500 flex items-center gap-1.5">
                    <CheckCircle2 size={15} className="text-emerald-500" />
                    Verified BizDial Partner Story
                  </span>
                  <button 
                    onClick={() => setActiveVideo(null)}
                    className="px-4 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition-colors cursor-pointer"
                  >
                    Close
                  </button>
                </div>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}
