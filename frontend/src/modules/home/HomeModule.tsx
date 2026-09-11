"use client";
import React, { useState, useEffect } from 'react';
import { motion, useScroll } from 'framer-motion';
import { useHomeData } from '@/lib/hooks/useHomeData';
import { useLocationContext } from '@/shared/context/LocationContext';

// Component Imports
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import CategoryRow from './components/CategoryRow';
import FeaturedBusinesses from './components/FeaturedBusinesses';
import PromoBanners from './components/PromoBanners';
import TopCities from './components/TopCities';
import HowBizDialWorks from './components/HowBizDialWorks';
import HowRankingWorks from './components/HowRankingWorks';
import BusinessReviews from './components/BusinessReviews';
import StatsStrip from './components/StatsStrip';
import Footer from './components/Footer';

const Home = ({ initialData }: { initialData?: any }) => {
  const { data, loading, error } = useHomeData(initialData);
  const { scrollYProgress } = useScroll();
  const { location } = useLocationContext();
  const userLocation = location.city || 'Tiruchirappalli';

  const featuredBusinesses = data?.featured_businesses ?? [];

  return (
    <div className="min-h-screen bg-white font-sans text-slate-800 overflow-x-hidden">
      {/* Top scroll progress bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-[3.5px] bg-[#0066FF] z-[60] origin-left"
        style={{ scaleX: scrollYProgress }}
      />
      
      <Header userLocation={userLocation} />
      
      <main>
        <HeroSection />

        <CategoryRow />

        <div className="max-w-[1400px] mx-auto px-4 lg:px-8 pb-6">
          <FeaturedBusinesses userLocation={userLocation} featuredBusinesses={featuredBusinesses} />
          
          <PromoBanners />
          
          <TopCities />
          
          <HowBizDialWorks />
          
          <HowRankingWorks />
          
          <BusinessReviews />
        </div>
        
        {/* Full width components */}
        <StatsStrip />
        

        
      </main>

      <Footer />
    </div>
  );
};

export default Home;
