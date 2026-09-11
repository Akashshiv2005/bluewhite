import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer id="about" className="bg-white border-t border-slate-100 pt-16 pb-8 relative overflow-hidden scroll-mt-24">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 mb-14">
          
          {/* Logo & Social (3 cols) */}
          <div className="lg:col-span-3">
            <Link href="/" className="flex flex-col shrink-0 mb-3 inline-block">
              <div className="flex items-center text-3xl font-black tracking-tight">
                <span className="text-[#0066FF]">Biz</span>
                <span className="text-slate-900">Dial</span>
              </div>
              <span className="text-[10px] text-slate-500 font-medium mt-0.5 tracking-wider uppercase">
                India&apos;s Business Ranking Directory
              </span>
            </Link>
            <p className="text-xs font-semibold text-slate-500 mb-5">
              Rank. Prove. Grow.
            </p>
            
            {/* Social Brand Icons */}
            <div className="flex items-center gap-2.5">
              {/* Facebook */}
              <a href="#" aria-label="Facebook" className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-[#0066FF] hover:text-white transition-colors">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              {/* Instagram */}
              <a href="#" aria-label="Instagram" className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-[#0066FF] hover:text-white transition-colors">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
              {/* LinkedIn */}
              <a href="#" aria-label="LinkedIn" className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-[#0066FF] hover:text-white transition-colors">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.738-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
              {/* YouTube */}
              <a href="#" aria-label="YouTube" className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-[#0066FF] hover:text-white transition-colors">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              </a>
              {/* X */}
              <a href="#" aria-label="X" className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-[#0066FF] hover:text-white transition-colors">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
            </div>
          </div>

          {/* Quick Links (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="font-extrabold text-slate-900 mb-3.5 text-sm tracking-tight">Quick Links</h4>
            <ul className="space-y-2.5 text-xs sm:text-[13px] font-semibold text-slate-600">
              <li><Link href="/" className="hover:text-[#0066FF] transition-colors">Home</Link></li>
              <li><Link href="/categories" className="hover:text-[#0066FF] transition-colors">Top Categories</Link></li>
              <li><Link href="/businesses" className="hover:text-[#0066FF] transition-colors">Ranked Businesses</Link></li>
              <li><Link href="#how-it-works" className="hover:text-[#0066FF] transition-colors">How Ranking Works</Link></li>
              <li><Link href="/register" className="hover:text-[#0066FF] transition-colors">Rank Your Business</Link></li>
              <li><Link href="/about" className="hover:text-[#0066FF] transition-colors">About Us</Link></li>
            </ul>
          </div>

          {/* Top Categories (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="font-extrabold text-slate-900 mb-3.5 text-sm tracking-tight">Top Categories</h4>
            <ul className="space-y-2.5 text-xs sm:text-[13px] font-semibold text-slate-600">
              <li><Link href="/search?q=restaurants" className="hover:text-[#0066FF] transition-colors">Restaurants</Link></li>
              <li><Link href="/search?q=hospitals" className="hover:text-[#0066FF] transition-colors">Hospitals</Link></li>
              <li><Link href="/search?q=automobiles" className="hover:text-[#0066FF] transition-colors">Automobiles</Link></li>
              <li><Link href="/search?q=real-estate" className="hover:text-[#0066FF] transition-colors">Real Estate</Link></li>
              <li><Link href="/search?q=education" className="hover:text-[#0066FF] transition-colors">Education</Link></li>
              <li><Link href="/search?q=beauty" className="hover:text-[#0066FF] transition-colors">Beauty &amp; Salon</Link></li>
            </ul>
          </div>

          {/* Support (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="font-extrabold text-slate-900 mb-3.5 text-sm tracking-tight">Support</h4>
            <ul className="space-y-2.5 text-xs sm:text-[13px] font-semibold text-slate-600">
              <li><Link href="/help" className="hover:text-[#0066FF] transition-colors">Help Center</Link></li>
              <li><Link href="/contact" className="hover:text-[#0066FF] transition-colors">Contact Us</Link></li>
              <li><Link href="/privacy" className="hover:text-[#0066FF] transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-[#0066FF] transition-colors">Terms &amp; Conditions</Link></li>
              <li><Link href="/enquiry" className="hover:text-[#0066FF] transition-colors">Business Enquiry</Link></li>
              <li><Link href="/sitemap" className="hover:text-[#0066FF] transition-colors">Sitemap</Link></li>
            </ul>
          </div>

          {/* Newsletter (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="font-extrabold text-slate-900 mb-2 text-sm tracking-tight">
              Ranking Reports Newsletter
            </h4>
            <p className="text-xs font-medium text-slate-500 mb-4 leading-relaxed">
              Receive verified city leaderboard reports, quality updates, and ranking insights.
            </p>
            <form className="flex items-center gap-2 mb-4" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="flex-1 px-3.5 py-2.5 rounded-lg border border-slate-200 outline-none text-xs focus:border-[#0066FF] text-slate-800"
              />
              <button 
                type="submit" 
                className="bg-[#0066FF] hover:bg-[#0052CC] text-white font-bold px-4 py-2.5 rounded-lg transition-colors text-xs cursor-pointer"
              >
                Subscribe
              </button>
            </form>

            {/* Script Callout Accent */}
            <div className="pt-2 select-none">
              <span className="font-serif italic font-bold text-sm text-slate-600 block">
                A Stronger India Together
              </span>
              <div className="w-24 h-1 mt-1 rounded-full bg-gradient-to-r from-orange-400 via-slate-300 to-green-500" />
            </div>
          </div>

        </div>

        {/* Footer Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between border-t border-slate-100 pt-6 text-xs text-slate-500 font-medium gap-3">
          <p>© 2026 BizDial. Verified Business Ranking Directory. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link href="/privacy" className="hover:text-[#0066FF] transition-colors">Privacy</Link>
            <span>•</span>
            <Link href="/terms" className="hover:text-[#0066FF] transition-colors">Terms</Link>
            <span>•</span>
            <Link href="/sitemap" className="hover:text-[#0066FF] transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
