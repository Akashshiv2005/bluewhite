"use client";
import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { 
  Search, 
  ChevronDown, 
  ChevronUp, 
  Sparkles, 
  ArrowRight,
  Flame,
  ShieldCheck,
  Clock,
  PhoneCall
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// ==========================================
// Colorful Illustrated SVG Icons (68 Total)
// ==========================================

// --- Original 28 Categories (User Reference) ---
const AcIcon = () => (
  <svg viewBox="0 0 28 28" fill="none" className="w-6 h-6 shrink-0" xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="5" width="24" height="11" rx="2.5" fill="#F0F9FF" stroke="#0284C7" strokeWidth="1.8" />
    <line x1="5" y1="12" x2="23" y2="12" stroke="#0284C7" strokeWidth="1.4" />
    <circle cx="21" cy="8.5" r="1" fill="#0284C7" />
    <path d="M7 19c1.2-2.2 2.2-2.2 3.4 0m2.5 0c1.2-2.2 2.2-2.2 3.4 0m2.5 0c1.2-2.2 2.2-2.2 3.4 0" stroke="#38BDF8" strokeWidth="1.6" strokeLinecap="round" />
  </svg>
);

const AstrologersIcon = () => (
  <svg viewBox="0 0 28 28" fill="none" className="w-6 h-6 shrink-0" xmlns="http://www.w3.org/2000/svg">
    <circle cx="14" cy="14" r="11" fill="#CCFBF1" stroke="#0D9488" strokeWidth="1.8" />
    <polygon points="14,5 16.8,11 23,11.5 18.2,16 19.8,22.2 14,18.8 8.2,22.2 9.8,16 5,11.5 11.2,11" fill="#14B8A6" stroke="#0D9488" strokeWidth="1" />
  </svg>
);

const MassageIcon = () => (
  <svg viewBox="0 0 28 28" fill="none" className="w-6 h-6 shrink-0" xmlns="http://www.w3.org/2000/svg">
    <rect x="3" y="12" width="22" height="7" rx="2" fill="#E0E7FF" stroke="#4F46E5" strokeWidth="1.8" />
    <circle cx="7" cy="8.5" r="3" fill="#F472B6" />
    <path d="M15 6c-1 3-3.5 4.5-6 4.5" stroke="#4F46E5" strokeWidth="1.8" strokeLinecap="round" />
    <line x1="6" y1="19" x2="6" y2="24" stroke="#4F46E5" strokeWidth="1.8" strokeLinecap="round" />
    <line x1="22" y1="19" x2="22" y2="24" stroke="#4F46E5" strokeWidth="1.8" strokeLinecap="round" />
  </svg>
);

const BeautySpaIcon = () => (
  <svg viewBox="0 0 28 28" fill="none" className="w-6 h-6 shrink-0" xmlns="http://www.w3.org/2000/svg">
    <circle cx="14" cy="14" r="8" fill="#FCE7F3" stroke="#DB2777" strokeWidth="1.8" />
    <circle cx="14" cy="4.5" r="3" fill="#F472B6" />
    <path d="M10 13a4 4 0 0 0 8 0" stroke="#DB2777" strokeWidth="1.8" strokeLinecap="round" />
    <path d="M8 12c.5-3 2.5-5 6-5s5.5 2 6 5" stroke="#DB2777" strokeWidth="1.8" strokeLinecap="round" />
  </svg>
);

const CarHireIcon = () => (
  <svg viewBox="0 0 28 28" fill="none" className="w-6 h-6 shrink-0" xmlns="http://www.w3.org/2000/svg">
    <rect x="3" y="10" width="22" height="10" rx="3" fill="#FEF08A" stroke="#CA8A04" strokeWidth="1.8" />
    <path d="M6 10l2.5-6h11L22 10" fill="#FEF9C3" stroke="#CA8A04" strokeWidth="1.8" />
    <rect x="11" y="2" width="6" height="2.5" rx="1" fill="#1E293B" />
    <circle cx="7.5" cy="20" r="2.5" fill="#1E293B" />
    <circle cx="20.5" cy="20" r="2.5" fill="#1E293B" />
    <circle cx="6.5" cy="13.5" r="1.2" fill="#EAB308" />
    <circle cx="21.5" cy="13.5" r="1.2" fill="#EAB308" />
  </svg>
);

const CaterersIcon = () => (
  <svg viewBox="0 0 28 28" fill="none" className="w-6 h-6 shrink-0" xmlns="http://www.w3.org/2000/svg">
    <rect x="3" y="13" width="22" height="8" rx="2" fill="#FEE2E2" stroke="#DC2626" strokeWidth="1.8" />
    <path d="M5 10c0-4 4.5-6 9-6s9 2 9 6" fill="#FECACA" stroke="#DC2626" strokeWidth="1.8" />
    <circle cx="14" cy="3.5" r="1.5" fill="#DC2626" />
    <line x1="6" y1="21" x2="5" y2="25" stroke="#DC2626" strokeWidth="1.8" strokeLinecap="round" />
    <line x1="22" y1="21" x2="23" y2="25" stroke="#DC2626" strokeWidth="1.8" strokeLinecap="round" />
  </svg>
);

const AccountantIcon = () => (
  <svg viewBox="0 0 28 28" fill="none" className="w-6 h-6 shrink-0" xmlns="http://www.w3.org/2000/svg">
    <rect x="4" y="3" width="20" height="22" rx="3" fill="#EFF6FF" stroke="#2563EB" strokeWidth="1.8" />
    <rect x="7" y="6" width="14" height="5" rx="1" fill="#DBEAFE" stroke="#2563EB" strokeWidth="1.2" />
    <circle cx="9" cy="14" r="1.2" fill="#2563EB" />
    <circle cx="14" cy="14" r="1.2" fill="#2563EB" />
    <circle cx="19" cy="14" r="1.2" fill="#2563EB" />
    <circle cx="9" cy="19" r="1.2" fill="#2563EB" />
    <circle cx="14" cy="19" r="1.2" fill="#2563EB" />
    <rect x="17.5" y="17.5" width="3" height="3" rx="0.5" fill="#3B82F6" />
  </svg>
);

const ComputerTrainingIcon = () => (
  <svg viewBox="0 0 28 28" fill="none" className="w-6 h-6 shrink-0" xmlns="http://www.w3.org/2000/svg">
    <rect x="4" y="9" width="20" height="12" rx="2" fill="#E0F2FE" stroke="#0284C7" strokeWidth="1.8" />
    <line x1="2" y1="23" x2="26" y2="23" stroke="#0284C7" strokeWidth="2" strokeLinecap="round" />
    <polygon points="14,2 23,6 14,9.5 5,6" fill="#0284C7" />
    <path d="M21 7.5v4c0 1.8-3.1 3-7 3s-7-1.2-7-3v-4" stroke="#0284C7" strokeWidth="1.2" fill="none" />
  </svg>
);

const CourierIcon = () => (
  <svg viewBox="0 0 28 28" fill="none" className="w-6 h-6 shrink-0" xmlns="http://www.w3.org/2000/svg">
    <rect x="4" y="6" width="20" height="16" rx="2.5" fill="#FEF3C7" stroke="#D97706" strokeWidth="1.8" />
    <line x1="14" y1="6" x2="14" y2="22" stroke="#D97706" strokeWidth="1.8" />
    <line x1="4" y1="11" x2="24" y2="11" stroke="#D97706" strokeWidth="1.4" />
    <circle cx="20" cy="18" r="4.5" fill="#10B981" />
    <path d="M18 18l1.5 1.5 2.5-2.5" stroke="white" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" fill="none" />
  </svg>
);

const LaptopRepairIcon = () => (
  <svg viewBox="0 0 28 28" fill="none" className="w-6 h-6 shrink-0" xmlns="http://www.w3.org/2000/svg">
    <rect x="3" y="4" width="22" height="14" rx="2.5" fill="#FFFBEB" stroke="#D97706" strokeWidth="1.8" />
    <path d="M10 22h8m-4-4v4" stroke="#D97706" strokeWidth="2" strokeLinecap="round" />
    <circle cx="14" cy="11" r="3" fill="#F59E0B" />
    <path d="M14 8v1.5m0 3V14m3-3h-1.5m-3 0H11" stroke="#B45309" strokeWidth="1.4" strokeLinecap="round" />
  </svg>
);

const CarRepairIcon = () => (
  <svg viewBox="0 0 28 28" fill="none" className="w-6 h-6 shrink-0" xmlns="http://www.w3.org/2000/svg">
    <rect x="3" y="9" width="22" height="10" rx="3" fill="#FEE2E2" stroke="#DC2626" strokeWidth="1.8" />
    <path d="M6 9l2.5-5h11L22 9" fill="#FECACA" stroke="#DC2626" strokeWidth="1.8" />
    <circle cx="7.5" cy="19" r="2.5" fill="#1E293B" />
    <circle cx="20.5" cy="19" r="2.5" fill="#1E293B" />
    <path d="M17 4l4 4m0-4l-4 4" stroke="#DC2626" strokeWidth="1.8" strokeLinecap="round" />
  </svg>
);

const DermatologistIcon = () => (
  <svg viewBox="0 0 28 28" fill="none" className="w-6 h-6 shrink-0" xmlns="http://www.w3.org/2000/svg">
    <circle cx="14" cy="14" r="9" fill="#FCE7F3" stroke="#EC4899" strokeWidth="1.8" />
    <path d="M10 11h.01M18 11h.01" stroke="#BE185D" strokeWidth="2.5" strokeLinecap="round" />
    <path d="M11 16c1.5 1.5 4.5 1.5 6 0" stroke="#BE185D" strokeWidth="1.4" strokeLinecap="round" />
    <circle cx="21" cy="19" r="3.5" fill="#F43F5E" />
    <path d="M20 19h2m-1-1v2" stroke="white" strokeWidth="1.2" strokeLinecap="round" />
  </svg>
);

const DentistIcon = () => (
  <svg viewBox="0 0 28 28" fill="none" className="w-6 h-6 shrink-0" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 4c-4 0-5 5-5 9 0 6 3.5 11 6 11s2.5-4.5 5-4.5 2.5 4.5 5 4.5 6-5 6-11c0-4-1-9-5-9-2.5 0-3.5 2.5-6 2.5S10.5 4 8 4z" fill="#EFF6FF" stroke="#2563EB" strokeWidth="1.8" />
    <circle cx="19.5" cy="8.5" r="3.5" fill="#0284C7" />
    <path d="M19.5 6.5v4m-2-2h4" stroke="white" strokeWidth="1.2" strokeLinecap="round" />
  </svg>
);

const ElectricianIcon = () => (
  <svg viewBox="0 0 28 28" fill="none" className="w-6 h-6 shrink-0" xmlns="http://www.w3.org/2000/svg">
    <rect x="7" y="10" width="14" height="12" rx="3" fill="#E0F2FE" stroke="#0284C7" strokeWidth="1.8" />
    <line x1="10.5" y1="4" x2="10.5" y2="10" stroke="#0284C7" strokeWidth="2" strokeLinecap="round" />
    <line x1="17.5" y1="4" x2="17.5" y2="10" stroke="#0284C7" strokeWidth="2" strokeLinecap="round" />
    <polygon points="14,12 12,16 14,16 13,20 16.5,15.5 14.5,15.5" fill="#F59E0B" />
  </svg>
);

const EventOrganizerIcon = () => (
  <svg viewBox="0 0 28 28" fill="none" className="w-6 h-6 shrink-0" xmlns="http://www.w3.org/2000/svg">
    <path d="M2 6c6 3.5 18 3.5 24 0" stroke="#EF4444" strokeWidth="1.8" fill="none" strokeLinecap="round" />
    <polygon points="5,7.5 8,14 11,7.5" fill="#F59E0B" stroke="#D97706" strokeWidth="1" />
    <polygon points="12.5,8 15.5,15 18.5,8" fill="#3B82F6" stroke="#2563EB" strokeWidth="1" />
    <polygon points="20,7.5 23,13.5 26,7.5" fill="#10B981" stroke="#059669" strokeWidth="1" />
    <circle cx="6" cy="19" r="1.5" fill="#EC4899" />
    <circle cx="22" cy="18" r="1.5" fill="#8B5CF6" />
  </svg>
);

const RealEstateIcon = () => (
  <svg viewBox="0 0 28 28" fill="none" className="w-6 h-6 shrink-0" xmlns="http://www.w3.org/2000/svg">
    <polygon points="14,3 3,12 7,12 7,23 21,23 21,12 25,12" fill="#FEF3C7" stroke="#DC2626" strokeWidth="1.8" strokeLinejoin="round" />
    <path d="M14 12c-1.8-2-4.5 0-2 2.5l2 2 2-2c2.5-2.5-.2-4.5-2-2.5z" fill="#EF4444" />
  </svg>
);

const FabricatorsIcon = () => (
  <svg viewBox="0 0 28 28" fill="none" className="w-6 h-6 shrink-0" xmlns="http://www.w3.org/2000/svg">
    <circle cx="14" cy="11" r="7" fill="#FEF3C7" stroke="#D97706" strokeWidth="1.8" />
    <rect x="9" y="8" width="10" height="5" rx="1.5" fill="#1E293B" />
    <path d="M6 24v-3c0-3 3.5-4.5 8-4.5s8 1.5 8 4.5v3" fill="#FDE68A" stroke="#D97706" strokeWidth="1.8" />
    <path d="M21 14l3-2.5m-1 5l3-2.5" stroke="#F59E0B" strokeWidth="1.8" strokeLinecap="round" />
  </svg>
);

const FurnitureRepairIcon = () => (
  <svg viewBox="0 0 28 28" fill="none" className="w-6 h-6 shrink-0" xmlns="http://www.w3.org/2000/svg">
    <rect x="3" y="11" width="22" height="9" rx="2.5" fill="#DCFCE7" stroke="#16A34A" strokeWidth="1.8" />
    <path d="M5 11V7a2.5 2.5 0 0 1 2.5-2.5h13A2.5 2.5 0 0 1 23 7v4" fill="#BBF7D0" stroke="#16A34A" strokeWidth="1.8" />
    <line x1="6" y1="20" x2="6" y2="24" stroke="#16A34A" strokeWidth="2" strokeLinecap="round" />
    <line x1="22" y1="20" x2="22" y2="24" stroke="#16A34A" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const HospitalsIcon = () => (
  <svg viewBox="0 0 28 28" fill="none" className="w-6 h-6 shrink-0" xmlns="http://www.w3.org/2000/svg">
    <rect x="4" y="4" width="20" height="20" rx="3" fill="#FEF3C7" stroke="#CA8A04" strokeWidth="1.8" />
    <rect x="10" y="17" width="8" height="7" fill="#FDE047" />
    <path d="M14 7v6m-3-3h6" stroke="#DC2626" strokeWidth="2.2" strokeLinecap="round" />
  </svg>
);

const HousekeepingIcon = () => (
  <svg viewBox="0 0 28 28" fill="none" className="w-6 h-6 shrink-0" xmlns="http://www.w3.org/2000/svg">
    <rect x="6" y="9" width="14" height="12" rx="2" fill="#F1F5F9" stroke="#475569" strokeWidth="1.8" />
    <circle cx="10" cy="21" r="2.5" fill="#1E293B" />
    <circle cx="17" cy="21" r="2.5" fill="#1E293B" />
    <path d="M13 9V3m-4 0h8" stroke="#475569" strokeWidth="2" strokeLinecap="round" />
    <line x1="21" y1="13" x2="25" y2="22" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const HobbiesIcon = () => (
  <svg viewBox="0 0 28 28" fill="none" className="w-6 h-6 shrink-0" xmlns="http://www.w3.org/2000/svg">
    <circle cx="14" cy="5" r="3" fill="#0D9488" />
    <path d="M7 14l7-3 7 3m-10 0l-3 7m6-7l5 8" stroke="#0D9488" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const InteriorIcon = () => (
  <svg viewBox="0 0 28 28" fill="none" className="w-6 h-6 shrink-0" xmlns="http://www.w3.org/2000/svg">
    <rect x="5" y="11" width="16" height="10" rx="2.5" fill="#FCE7F3" stroke="#DB2777" strokeWidth="1.8" />
    <path d="M7 11V6a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v5" fill="#FBCFE8" stroke="#DB2777" strokeWidth="1.8" />
    <line x1="6" y1="21" x2="5" y2="25" stroke="#DB2777" strokeWidth="2" strokeLinecap="round" />
    <line x1="20" y1="21" x2="21" y2="25" stroke="#DB2777" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const WebsiteDesignIcon = () => (
  <svg viewBox="0 0 28 28" fill="none" className="w-6 h-6 shrink-0" xmlns="http://www.w3.org/2000/svg">
    <circle cx="13" cy="13" r="10" fill="#EFF6FF" stroke="#2563EB" strokeWidth="1.8" />
    <ellipse cx="13" cy="13" rx="5" ry="10" stroke="#2563EB" strokeWidth="1.4" fill="none" />
    <line x1="3" y1="13" x2="23" y2="13" stroke="#2563EB" strokeWidth="1.4" />
    <polygon points="17,14 24,18 19,20 21,25 19,26 17,21 14,23" fill="#2563EB" stroke="white" strokeWidth="1" />
  </svg>
);

const JewelleryIcon = () => (
  <svg viewBox="0 0 28 28" fill="none" className="w-6 h-6 shrink-0" xmlns="http://www.w3.org/2000/svg">
    <circle cx="14" cy="8" r="4.5" fill="#FEF3C7" stroke="#D97706" strokeWidth="1.8" />
    <path d="M7 22c0-5 3.5-7 7-7s7 2 7 7" fill="#FDE68A" stroke="#D97706" strokeWidth="1.8" />
    <polygon points="14,14 16,16.5 14,19 12,16.5" fill="#EF4444" />
  </svg>
);

const LawyersIcon = () => (
  <svg viewBox="0 0 28 28" fill="none" className="w-6 h-6 shrink-0" xmlns="http://www.w3.org/2000/svg">
    <rect x="10" y="4" width="7" height="13" rx="2" transform="rotate(45 13.5 10.5)" fill="#FED7AA" stroke="#C2410C" strokeWidth="1.8" />
    <line x1="8" y1="16" x2="2" y2="22" stroke="#C2410C" strokeWidth="3" strokeLinecap="round" />
    <rect x="15" y="19" width="10" height="3.5" rx="1.5" fill="#78350F" />
  </svg>
);

const TransportersIcon = () => (
  <svg viewBox="0 0 28 28" fill="none" className="w-6 h-6 shrink-0" xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="8" width="15" height="11" rx="2" fill="#E2E8F0" stroke="#475569" strokeWidth="1.8" />
    <path d="M17 11h4.5l3.5 3.5v4.5h-8V11z" fill="#CBD5E1" stroke="#475569" strokeWidth="1.8" />
    <circle cx="6.5" cy="19" r="2.5" fill="#1E293B" />
    <circle cx="21" cy="19" r="2.5" fill="#1E293B" />
  </svg>
);

const PhotographersIcon = () => (
  <svg viewBox="0 0 28 28" fill="none" className="w-6 h-6 shrink-0" xmlns="http://www.w3.org/2000/svg">
    <circle cx="14" cy="7" r="3.5" fill="#CCFBF1" stroke="#0F766E" strokeWidth="1.8" />
    <rect x="7" y="12" width="14" height="9" rx="2.5" fill="#5EEAD4" stroke="#0F766E" strokeWidth="1.8" />
    <circle cx="14" cy="16.5" r="2.5" fill="#1E293B" />
    <path d="M5 24l3.5-5m11 0l3.5 5" stroke="#0F766E" strokeWidth="1.8" strokeLinecap="round" />
  </svg>
);

const NursingIcon = () => (
  <svg viewBox="0 0 28 28" fill="none" className="w-6 h-6 shrink-0" xmlns="http://www.w3.org/2000/svg">
    <circle cx="14" cy="8" r="4.5" fill="#FEF3C7" stroke="#0284C7" strokeWidth="1.8" />
    <path d="M10 4h8v2h-8z" fill="#0284C7" />
    <path d="M6 24v-4.5c0-2.5 3.5-4 8-4s8 1.5 8 4v4.5" fill="#E0F2FE" stroke="#0284C7" strokeWidth="1.8" />
    <path d="M14 16.5v4m-2-2h4" stroke="#DC2626" strokeWidth="1.8" strokeLinecap="round" />
  </svg>
);

// --- Extended High-Demand Categories ---
const RestaurantsIcon = () => (
  <svg viewBox="0 0 28 28" fill="none" className="w-6 h-6 shrink-0" xmlns="http://www.w3.org/2000/svg">
    <rect x="3" y="10" width="22" height="12" rx="3" fill="#FEE2E2" stroke="#EF4444" strokeWidth="1.8" />
    <path d="M7 3v6m3-6v6m3-6v6m-6 3h6m-3 0v4" stroke="#DC2626" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M20 3c-1.5 0-3 1.5-3 4s1.5 3 3 3v7" stroke="#DC2626" strokeWidth="1.5" strokeLinecap="round" />
    <circle cx="14" cy="16" r="3" fill="#EF4444" />
  </svg>
);

const PlumbersIcon = () => (
  <svg viewBox="0 0 28 28" fill="none" className="w-6 h-6 shrink-0" xmlns="http://www.w3.org/2000/svg">
    <path d="M11 4v6a4 4 0 0 0 4 4h5" stroke="#0284C7" strokeWidth="2.5" strokeLinecap="round" />
    <path d="M9 2h4M18 12h4" stroke="#0369A1" strokeWidth="2" strokeLinecap="round" />
    <path d="M19 18c0 3-2.5 5-4 5s-4-2-4-5c0-2 4-5 4-5s4 3 4 5z" fill="#38BDF8" stroke="#0284C7" strokeWidth="1.5" />
  </svg>
);

const MoversIcon = () => (
  <svg viewBox="0 0 28 28" fill="none" className="w-6 h-6 shrink-0" xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="8" width="16" height="11" rx="2" fill="#FEF3C7" stroke="#D97706" strokeWidth="1.8" />
    <path d="M18 12h4l3 3v4h-7v-7z" fill="#FDE68A" stroke="#D97706" strokeWidth="1.8" />
    <circle cx="7" cy="19" r="2.5" fill="#1E293B" />
    <circle cx="21" cy="19" r="2.5" fill="#1E293B" />
    <rect x="6" y="11" width="5" height="5" fill="#D97706" rx="0.5" />
  </svg>
);

const PestControlIcon = () => (
  <svg viewBox="0 0 28 28" fill="none" className="w-6 h-6 shrink-0" xmlns="http://www.w3.org/2000/svg">
    <circle cx="14" cy="14" r="6" fill="#DCFCE7" stroke="#16A34A" strokeWidth="1.8" />
    <circle cx="14" cy="7" r="2.5" fill="#16A34A" />
    <line x1="14" y1="8" x2="14" y2="20" stroke="#16A34A" strokeWidth="1.8" />
    <path d="M9 11l-4-2m14 2l4-2m-4 5l4 2m-14-2l-4 2" stroke="#16A34A" strokeWidth="1.8" strokeLinecap="round" />
  </svg>
);

const GymsIcon = () => (
  <svg viewBox="0 0 28 28" fill="none" className="w-6 h-6 shrink-0" xmlns="http://www.w3.org/2000/svg">
    <rect x="3" y="10" width="3" height="8" rx="1.5" fill="#8B5CF6" />
    <rect x="6" y="12" width="2" height="4" fill="#A78BFA" />
    <line x1="8" y1="14" x2="20" y2="14" stroke="#6D28D9" strokeWidth="2.5" strokeLinecap="round" />
    <rect x="20" y="12" width="2" height="4" fill="#A78BFA" />
    <rect x="22" y="10" width="3" height="8" rx="1.5" fill="#8B5CF6" />
  </svg>
);

const HotelsIcon = () => (
  <svg viewBox="0 0 28 28" fill="none" className="w-6 h-6 shrink-0" xmlns="http://www.w3.org/2000/svg">
    <rect x="4" y="4" width="20" height="20" rx="3" fill="#E0E7FF" stroke="#4338CA" strokeWidth="1.8" />
    <rect x="7" y="7" width="4" height="4" rx="1" fill="#818CF8" />
    <rect x="17" y="7" width="4" height="4" rx="1" fill="#818CF8" />
    <rect x="7" y="13" width="4" height="4" rx="1" fill="#818CF8" />
    <rect x="17" y="13" width="4" height="4" rx="1" fill="#818CF8" />
    <rect x="11" y="18" width="6" height="6" fill="#3730A3" />
  </svg>
);

const PaintersIcon = () => (
  <svg viewBox="0 0 28 28" fill="none" className="w-6 h-6 shrink-0" xmlns="http://www.w3.org/2000/svg">
    <rect x="5" y="4" width="16" height="7" rx="2" fill="#FCE7F3" stroke="#DB2777" strokeWidth="1.8" />
    <path d="M21 7.5h2v6h-8v3m0 0v5m0-5h2m-2 0h-2" stroke="#BE185D" strokeWidth="2" strokeLinecap="round" />
    <rect x="13.5" y="19" width="3" height="5" rx="1" fill="#BE185D" />
    <circle cx="9" cy="7.5" r="1.5" fill="#F43F5E" />
  </svg>
);

const CCTVIcon = () => (
  <svg viewBox="0 0 28 28" fill="none" className="w-6 h-6 shrink-0" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 10l12-5 5 3-12 5z" fill="#E2E8F0" stroke="#475569" strokeWidth="1.8" />
    <circle cx="17" cy="10" r="2.5" fill="#EF4444" />
    <path d="M8 17v4m-3 0h6" stroke="#475569" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const PetClinicsIcon = () => (
  <svg viewBox="0 0 28 28" fill="none" className="w-6 h-6 shrink-0" xmlns="http://www.w3.org/2000/svg">
    <circle cx="8" cy="8" r="2.5" fill="#D97706" />
    <circle cx="20" cy="8" r="2.5" fill="#D97706" />
    <circle cx="14" cy="5" r="2.5" fill="#D97706" />
    <path d="M8 16c0-3.5 3-5 6-5s6 1.5 6 5c0 3-2.5 6-6 6s-6-3-6-6z" fill="#FEF3C7" stroke="#D97706" strokeWidth="1.8" />
    <circle cx="14" cy="18" r="1.5" fill="#D97706" />
  </svg>
);

const BorewellIcon = () => (
  <svg viewBox="0 0 28 28" fill="none" className="w-6 h-6 shrink-0" xmlns="http://www.w3.org/2000/svg">
    <polygon points="14,3 6,24 22,24" fill="#E0F2FE" stroke="#0284C7" strokeWidth="1.8" />
    <line x1="14" y1="3" x2="14" y2="24" stroke="#0284C7" strokeWidth="2" />
    <circle cx="14" cy="18" r="4" fill="#38BDF8" />
    <path d="M12 24v2m4-2v2" stroke="#0284C7" strokeWidth="2" />
  </svg>
);

const CarpentersIcon = () => (
  <svg viewBox="0 0 28 28" fill="none" className="w-6 h-6 shrink-0" xmlns="http://www.w3.org/2000/svg">
    <rect x="4" y="16" width="20" height="7" rx="1.5" fill="#FEF3C7" stroke="#B45309" strokeWidth="1.8" />
    <polygon points="8,4 18,10 8,16" fill="#FDE68A" stroke="#B45309" strokeWidth="1.8" />
    <circle cx="10" cy="10" r="2" fill="#B45309" />
  </svg>
);

const WeddingPlannersIcon = () => (
  <svg viewBox="0 0 28 28" fill="none" className="w-6 h-6 shrink-0" xmlns="http://www.w3.org/2000/svg">
    <circle cx="11" cy="15" r="6" stroke="#F59E0B" strokeWidth="2" fill="none" />
    <circle cx="17" cy="15" r="6" stroke="#EC4899" strokeWidth="2" fill="none" />
    <polygon points="11,6 13,9 11,11 9,9" fill="#38BDF8" />
    <polygon points="17,6 19,9 17,11 15,9" fill="#F472B6" />
  </svg>
);

const SolarIcon = () => (
  <svg viewBox="0 0 28 28" fill="none" className="w-6 h-6 shrink-0" xmlns="http://www.w3.org/2000/svg">
    <polygon points="5,11 23,8 21,21 3,24" fill="#E0F2FE" stroke="#0284C7" strokeWidth="1.8" />
    <line x1="14" y1="9.5" x2="12" y2="22.5" stroke="#0284C7" strokeWidth="1.5" />
    <line x1="4" y1="17.5" x2="22" y2="14.5" stroke="#0284C7" strokeWidth="1.5" />
    <circle cx="14" cy="4" r="2.5" fill="#F59E0B" />
  </svg>
);

const WaterPurifierIcon = () => (
  <svg viewBox="0 0 28 28" fill="none" className="w-6 h-6 shrink-0" xmlns="http://www.w3.org/2000/svg">
    <rect x="6" y="4" width="16" height="18" rx="3" fill="#F0F9FF" stroke="#0284C7" strokeWidth="1.8" />
    <line x1="6" y1="11" x2="22" y2="11" stroke="#0284C7" strokeWidth="1.5" />
    <path d="M14 14c-1.5 2-2 3-2 4a2 2 0 0 0 4 0c0-1-.5-2-2-4z" fill="#38BDF8" />
  </svg>
);

const DryCleanersIcon = () => (
  <svg viewBox="0 0 28 28" fill="none" className="w-6 h-6 shrink-0" xmlns="http://www.w3.org/2000/svg">
    <rect x="5" y="4" width="18" height="20" rx="3" fill="#F5F3FF" stroke="#7C3AED" strokeWidth="1.8" />
    <circle cx="14" cy="15" r="5" fill="#EDE9FE" stroke="#7C3AED" strokeWidth="1.5" />
    <circle cx="14" cy="15" r="2.5" fill="#8B5CF6" />
    <circle cx="9" cy="8" r="1.5" fill="#7C3AED" />
    <line x1="13" y1="8" x2="19" y2="8" stroke="#7C3AED" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const ArchitectsIcon = () => (
  <svg viewBox="0 0 28 28" fill="none" className="w-6 h-6 shrink-0" xmlns="http://www.w3.org/2000/svg">
    <circle cx="14" cy="5" r="2" fill="#2563EB" />
    <line x1="14" y1="7" x2="7" y2="24" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" />
    <line x1="14" y1="7" x2="21" y2="24" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" />
    <path d="M10 16h8" stroke="#3B82F6" strokeWidth="1.5" />
    <circle cx="7" cy="24" r="1.5" fill="#1E293B" />
    <circle cx="21" cy="24" r="1.5" fill="#1E293B" />
  </svg>
);

const ModularKitchenIcon = () => (
  <svg viewBox="0 0 28 28" fill="none" className="w-6 h-6 shrink-0" xmlns="http://www.w3.org/2000/svg">
    <rect x="3" y="11" width="22" height="13" rx="2" fill="#FEF2F2" stroke="#DC2626" strokeWidth="1.8" />
    <line x1="14" y1="11" x2="14" y2="24" stroke="#DC2626" strokeWidth="1.5" />
    <rect x="5" y="4" width="18" height="5" rx="1.5" fill="#FEE2E2" stroke="#DC2626" strokeWidth="1.5" />
    <circle cx="8.5" cy="14" r="1" fill="#DC2626" />
    <circle cx="19.5" cy="14" r="1" fill="#DC2626" />
  </svg>
);

const TailorsIcon = () => (
  <svg viewBox="0 0 28 28" fill="none" className="w-6 h-6 shrink-0" xmlns="http://www.w3.org/2000/svg">
    <circle cx="8" cy="10" r="2" fill="#F472B6" />
    <line x1="12" y1="12" x2="23" y2="23" stroke="#BE185D" strokeWidth="2.5" strokeLinecap="round" />
    <path d="M18 7c2 2 4 4 4 7" stroke="#EC4899" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const SchoolsIcon = () => (
  <svg viewBox="0 0 28 28" fill="none" className="w-6 h-6 shrink-0" xmlns="http://www.w3.org/2000/svg">
    <polygon points="14,3 3,9 25,9" fill="#FEF08A" stroke="#CA8A04" strokeWidth="1.8" />
    <rect x="6" y="9" width="16" height="15" rx="1" fill="#FEF9C3" stroke="#CA8A04" strokeWidth="1.8" />
    <rect x="11" y="16" width="6" height="8" fill="#B45309" />
    <circle cx="14" cy="12.5" r="1.5" fill="#CA8A04" />
  </svg>
);

const PrintingPressIcon = () => (
  <svg viewBox="0 0 28 28" fill="none" className="w-6 h-6 shrink-0" xmlns="http://www.w3.org/2000/svg">
    <rect x="5" y="9" width="18" height="10" rx="2" fill="#F1F5F9" stroke="#475569" strokeWidth="1.8" />
    <rect x="8" y="4" width="12" height="5" rx="1" fill="#E2E8F0" stroke="#475569" strokeWidth="1.5" />
    <rect x="8" y="16" width="12" height="7" rx="1" fill="#DBEAFE" stroke="#2563EB" strokeWidth="1.5" />
    <circle cx="19" cy="12" r="1" fill="#10B981" />
  </svg>
);

// --- NEW 20 Extra Local Categories ---
const EyeClinicsIcon = () => (
  <svg viewBox="0 0 28 28" fill="none" className="w-6 h-6 shrink-0" xmlns="http://www.w3.org/2000/svg">
    <circle cx="8" cy="14" r="5" fill="#EFF6FF" stroke="#0284C7" strokeWidth="1.8" />
    <circle cx="20" cy="14" r="5" fill="#EFF6FF" stroke="#0284C7" strokeWidth="1.8" />
    <path d="M13 13.5h2" stroke="#0284C7" strokeWidth="2" strokeLinecap="round" />
    <circle cx="8" cy="14" r="2" fill="#0284C7" />
    <circle cx="20" cy="14" r="2" fill="#0284C7" />
    <path d="M3 13c1.5-2 3-3 5-3m12 0c2 0 3.5 1 5 3" stroke="#38BDF8" strokeWidth="1.4" strokeLinecap="round" />
  </svg>
);

const DiagnosticLabsIcon = () => (
  <svg viewBox="0 0 28 28" fill="none" className="w-6 h-6 shrink-0" xmlns="http://www.w3.org/2000/svg">
    <path d="M7 4h6m-3 0v10l-4 8a2 2 0 0 0 2 3h8a2 2 0 0 0 2-3l-4-8V4" fill="#CCFBF1" stroke="#0D9488" strokeWidth="1.8" strokeLinecap="round" />
    <circle cx="11" cy="19" r="1.5" fill="#14B8A6" />
    <circle cx="14" cy="17" r="1" fill="#14B8A6" />
  </svg>
);

const PhysiotherapyIcon = () => (
  <svg viewBox="0 0 28 28" fill="none" className="w-6 h-6 shrink-0" xmlns="http://www.w3.org/2000/svg">
    <circle cx="14" cy="6" r="3" fill="#F59E0B" stroke="#D97706" strokeWidth="1.5" />
    <path d="M14 9v6l5 4m-5-2l-4 6" stroke="#0D9488" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M9 13h10" stroke="#0D9488" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const AyurvedicIcon = () => (
  <svg viewBox="0 0 28 28" fill="none" className="w-6 h-6 shrink-0" xmlns="http://www.w3.org/2000/svg">
    <path d="M14 24C14 14 5 13 5 4c8 0 16 2 16 11 0 5-3 9-7 9z" fill="#DCFCE7" stroke="#16A34A" strokeWidth="1.8" />
    <path d="M14 24C14 16 19 12 21 8" stroke="#15803D" strokeWidth="1.6" strokeLinecap="round" />
  </svg>
);

const PharmacyIcon = () => (
  <svg viewBox="0 0 28 28" fill="none" className="w-6 h-6 shrink-0" xmlns="http://www.w3.org/2000/svg">
    <rect x="4" y="4" width="20" height="20" rx="4" fill="#FEE2E2" stroke="#EF4444" strokeWidth="1.8" />
    <path d="M14 8v12m-6-6h12" stroke="#DC2626" strokeWidth="2.4" strokeLinecap="round" />
  </svg>
);

const YogaIcon = () => (
  <svg viewBox="0 0 28 28" fill="none" className="w-6 h-6 shrink-0" xmlns="http://www.w3.org/2000/svg">
    <circle cx="14" cy="5" r="2.5" fill="#8B5CF6" />
    <path d="M8 22c1.5-4 4-6 6-6s4.5 2 6 6" stroke="#7C3AED" strokeWidth="2" strokeLinecap="round" />
    <path d="M4 17l6-3 4 2 4-2 6 3" stroke="#8B5CF6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
  </svg>
);

const DigitalMarketingIcon = () => (
  <svg viewBox="0 0 28 28" fill="none" className="w-6 h-6 shrink-0" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 19l6-6 4 4 8-8" stroke="#4F46E5" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M17 9h5v5" stroke="#4F46E5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <line x1="3" y1="24" x2="25" y2="24" stroke="#94A3B8" strokeWidth="1.8" strokeLinecap="round" />
  </svg>
);

const TaxGstIcon = () => (
  <svg viewBox="0 0 28 28" fill="none" className="w-6 h-6 shrink-0" xmlns="http://www.w3.org/2000/svg">
    <rect x="4" y="3" width="20" height="22" rx="3" fill="#FEF3C7" stroke="#D97706" strokeWidth="1.8" />
    <path d="M8 8h12M8 12h12M8 16h6" stroke="#B45309" strokeWidth="1.8" strokeLinecap="round" />
    <circle cx="18" cy="18" r="3.5" fill="#F59E0B" />
    <text x="16" y="20.5" fontSize="7" fontWeight="bold" fill="white">₹</text>
  </svg>
);

const DrivingSchoolIcon = () => (
  <svg viewBox="0 0 28 28" fill="none" className="w-6 h-6 shrink-0" xmlns="http://www.w3.org/2000/svg">
    <circle cx="14" cy="14" r="10" fill="#FEF08A" stroke="#CA8A04" strokeWidth="1.8" />
    <circle cx="14" cy="14" r="3" fill="#CA8A04" />
    <line x1="14" y1="4" x2="14" y2="11" stroke="#CA8A04" strokeWidth="2" />
    <line x1="6" y1="18" x2="12" y2="15" stroke="#CA8A04" strokeWidth="2" />
    <line x1="22" y1="18" x2="16" y2="15" stroke="#CA8A04" strokeWidth="2" />
  </svg>
);

const CarWashIcon = () => (
  <svg viewBox="0 0 28 28" fill="none" className="w-6 h-6 shrink-0" xmlns="http://www.w3.org/2000/svg">
    <rect x="3" y="12" width="22" height="9" rx="3" fill="#E0F2FE" stroke="#0284C7" strokeWidth="1.8" />
    <circle cx="8" cy="21" r="2.5" fill="#1E293B" />
    <circle cx="20" cy="21" r="2.5" fill="#1E293B" />
    <circle cx="9" cy="6" r="2" fill="#38BDF8" />
    <circle cx="15" cy="5" r="2.5" fill="#0284C7" />
    <circle cx="20" cy="7" r="1.5" fill="#7DD3FC" />
  </svg>
);

const BikeRepairIcon = () => (
  <svg viewBox="0 0 28 28" fill="none" className="w-6 h-6 shrink-0" xmlns="http://www.w3.org/2000/svg">
    <circle cx="7" cy="18" r="4.5" fill="#F1F5F9" stroke="#334155" strokeWidth="1.8" />
    <circle cx="21" cy="18" r="4.5" fill="#F1F5F9" stroke="#334155" strokeWidth="1.8" />
    <path d="M7 18l5-7h4l4 7m-4-7l-3-4h-3" stroke="#0284C7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
  </svg>
);

const TyreDealersIcon = () => (
  <svg viewBox="0 0 28 28" fill="none" className="w-6 h-6 shrink-0" xmlns="http://www.w3.org/2000/svg">
    <circle cx="14" cy="14" r="10" fill="#334155" stroke="#0F172A" strokeWidth="1.8" />
    <circle cx="14" cy="14" r="5" fill="#94A3B8" stroke="#CBD5E1" strokeWidth="1.5" />
    <circle cx="14" cy="14" r="2" fill="#0F172A" />
  </svg>
);

const BanquetHallsIcon = () => (
  <svg viewBox="0 0 28 28" fill="none" className="w-6 h-6 shrink-0" xmlns="http://www.w3.org/2000/svg">
    <polygon points="14,3 4,9 24,9" fill="#FEF3C7" stroke="#D97706" strokeWidth="1.8" />
    <rect x="5" y="9" width="18" height="15" rx="1" fill="#FFFBEB" stroke="#D97706" strokeWidth="1.8" />
    <path d="M9 13h2v11H9zm8 0h2v11h-2z" fill="#D97706" />
    <circle cx="14" cy="14" r="2" fill="#F59E0B" />
  </svg>
);

const BakeryIcon = () => (
  <svg viewBox="0 0 28 28" fill="none" className="w-6 h-6 shrink-0" xmlns="http://www.w3.org/2000/svg">
    <rect x="4" y="12" width="20" height="11" rx="2.5" fill="#FED7AA" stroke="#EA580C" strokeWidth="1.8" />
    <path d="M4 12c2-2 4 1 6-1s4 1 6-1 4 1 6 0" stroke="#EA580C" strokeWidth="1.5" fill="none" />
    <line x1="14" y1="4" x2="14" y2="8" stroke="#EA580C" strokeWidth="2" strokeLinecap="round" />
    <circle cx="14" cy="3" r="1.5" fill="#EF4444" />
  </svg>
);

const FloristIcon = () => (
  <svg viewBox="0 0 28 28" fill="none" className="w-6 h-6 shrink-0" xmlns="http://www.w3.org/2000/svg">
    <circle cx="14" cy="9" r="3" fill="#F472B6" />
    <circle cx="10" cy="12" r="3" fill="#FB7185" />
    <circle cx="18" cy="12" r="3" fill="#FB7185" />
    <circle cx="14" cy="12" r="2.5" fill="#FDE047" />
    <path d="M14 15v10m-3-4c3-1 3-3 3-3m0 2c3-1 3-3 3-3" stroke="#16A34A" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const DeepCleaningIcon = () => (
  <svg viewBox="0 0 28 28" fill="none" className="w-6 h-6 shrink-0" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 10l6-6 4 4-6 6z" fill="#E0F2FE" stroke="#0284C7" strokeWidth="1.8" />
    <line x1="12" y1="14" x2="22" y2="24" stroke="#0284C7" strokeWidth="2.5" strokeLinecap="round" />
    <path d="M6 16c-2 2-3 4-3 5h8c0-1-1-3-3-5" fill="#BAE6FD" stroke="#0284C7" strokeWidth="1.5" />
    <circle cx="21" cy="7" r="1.5" fill="#F59E0B" />
  </svg>
);

const ApplianceRepairIcon = () => (
  <svg viewBox="0 0 28 28" fill="none" className="w-6 h-6 shrink-0" xmlns="http://www.w3.org/2000/svg">
    <rect x="5" y="4" width="18" height="20" rx="3" fill="#F1F5F9" stroke="#334155" strokeWidth="1.8" />
    <circle cx="14" cy="14" r="5" fill="#E2E8F0" stroke="#334155" strokeWidth="1.5" />
    <circle cx="14" cy="14" r="2.5" fill="#0284C7" />
    <line x1="8" y1="8" x2="12" y2="8" stroke="#334155" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const WaterproofingIcon = () => (
  <svg viewBox="0 0 28 28" fill="none" className="w-6 h-6 shrink-0" xmlns="http://www.w3.org/2000/svg">
    <polygon points="14,3 3,11 25,11" fill="#E0F2FE" stroke="#0284C7" strokeWidth="1.8" />
    <path d="M14 14c-2 3-3 4.5-3 6a3 3 0 0 0 6 0c0-1.5-1-3-3-6z" fill="#38BDF8" stroke="#0284C7" strokeWidth="1.5" />
  </svg>
);

const SecurityGuardsIcon = () => (
  <svg viewBox="0 0 28 28" fill="none" className="w-6 h-6 shrink-0" xmlns="http://www.w3.org/2000/svg">
    <path d="M14 3l9 4v7c0 6-9 11-9 11s-9-5-9-11V7l9-4z" fill="#EFF6FF" stroke="#1D4ED8" strokeWidth="1.8" />
    <path d="M10 13.5l3 3 5-5" stroke="#1D4ED8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const BatteryDealersIcon = () => (
  <svg viewBox="0 0 28 28" fill="none" className="w-6 h-6 shrink-0" xmlns="http://www.w3.org/2000/svg">
    <rect x="4" y="8" width="20" height="15" rx="2.5" fill="#FEF3C7" stroke="#D97706" strokeWidth="1.8" />
    <rect x="7" y="4" width="4" height="4" rx="1" fill="#D97706" />
    <rect x="17" y="4" width="4" height="4" rx="1" fill="#D97706" />
    <polygon points="14,11 11,16 14,16 13,20 17,15 14,15" fill="#EF4444" />
  </svg>
);


// ==========================================
// Top 8 Trending Visual Highlights
// ==========================================
const trendingSpotlights = [
  {
    title: "AC & Appliances",
    subtitle: "2-Hr Express Repair",
    badge: "Fast 2-Hr",
    badgeColor: "bg-sky-100 text-sky-800 border-sky-200",
    href: "/search?q=AC+Service",
    gradient: "from-sky-50 to-blue-50/50 hover:from-sky-100/70 hover:to-blue-100/60",
    border: "border-sky-200/80 hover:border-sky-400",
    icon: AcIcon,
  },
  {
    title: "Doctors & Clinics",
    subtitle: "100% KYC Verified",
    badge: "Verified",
    badgeColor: "bg-rose-100 text-rose-800 border-rose-200",
    href: "/search?q=Hospitals",
    gradient: "from-rose-50 to-red-50/50 hover:from-rose-100/70 hover:to-red-100/60",
    border: "border-rose-200/80 hover:border-rose-400",
    icon: HospitalsIcon,
  },
  {
    title: "Restaurants & Cafes",
    subtitle: "Top Rated Dining",
    badge: "Popular",
    badgeColor: "bg-amber-100 text-amber-800 border-amber-200",
    href: "/search?q=Restaurants+Cafes",
    gradient: "from-amber-50 to-orange-50/50 hover:from-amber-100/70 hover:to-orange-100/60",
    border: "border-amber-200/80 hover:border-amber-400",
    icon: RestaurantsIcon,
  },
  {
    title: "Car Care & Rentals",
    subtitle: "Doorstep & Self-Drive",
    badge: "Best Rates",
    badgeColor: "bg-yellow-100 text-yellow-800 border-yellow-200",
    href: "/search?q=Car+Repair+Services",
    gradient: "from-yellow-50 to-amber-50/50 hover:from-yellow-100/70 hover:to-amber-100/60",
    border: "border-yellow-200/80 hover:border-yellow-400",
    icon: CarRepairIcon,
  },
  {
    title: "Real Estate & Rent",
    subtitle: "Flats, Villas & Offices",
    badge: "Zero Broker",
    badgeColor: "bg-emerald-100 text-emerald-800 border-emerald-200",
    href: "/search?q=Real+Estate",
    gradient: "from-emerald-50 to-teal-50/50 hover:from-emerald-100/70 hover:to-teal-100/60",
    border: "border-emerald-200/80 hover:border-emerald-400",
    icon: RealEstateIcon,
  },
  {
    title: "Beauty, Spa & Salon",
    subtitle: "Bridal & Hair Care",
    badge: "Top Rated",
    badgeColor: "bg-pink-100 text-pink-800 border-pink-200",
    href: "/search?q=Beauty+Spa",
    gradient: "from-pink-50 to-fuchsia-50/50 hover:from-pink-100/70 hover:to-fuchsia-100/60",
    border: "border-pink-200/80 hover:border-pink-400",
    icon: BeautySpaIcon,
  },
  {
    title: "Electricians & Plumbers",
    subtitle: "At Home in 60 Mins",
    badge: "24/7 Doorstep",
    badgeColor: "bg-cyan-100 text-cyan-800 border-cyan-200",
    href: "/search?q=Electricians",
    gradient: "from-cyan-50 to-blue-50/50 hover:from-cyan-100/70 hover:to-blue-100/60",
    border: "border-cyan-200/80 hover:border-cyan-400",
    icon: ElectricianIcon,
  },
  {
    title: "Packers & Movers",
    subtitle: "Safe, Insured Relocation",
    badge: "Verified",
    badgeColor: "bg-indigo-100 text-indigo-800 border-indigo-200",
    href: "/search?q=Packers+Movers",
    gradient: "from-indigo-50 to-purple-50/50 hover:from-indigo-100/70 hover:to-purple-100/60",
    border: "border-indigo-200/80 hover:border-indigo-400",
    icon: MoversIcon,
  },
];


// ==========================================
// Comprehensive Master Category Directory (68)
// ==========================================
// NOTE: First 28 items strictly match user's reference image in exact row-by-row sequence.
const allCategories = [
  // --- ROW 1 (Reference) ---
  { name: 'AC Service', icon: AcIcon, href: '/search?q=AC+Service', group: 'home', badge: 'Popular', badgeType: 'popular' },
  { name: 'Astrologers', icon: AstrologersIcon, href: '/search?q=Astrologers', group: 'wellness' },
  { name: 'Body Massage Centers', icon: MassageIcon, href: '/search?q=Body+Massage+Centers', group: 'wellness' },
  { name: 'Beauty Spa', icon: BeautySpaIcon, href: '/search?q=Beauty+Spa', group: 'wellness', badge: 'Top Rated', badgeType: 'trending' },

  // --- ROW 2 (Reference) ---
  { name: 'Car Hire', icon: CarHireIcon, href: '/search?q=Car+Hire', group: 'auto', badge: 'Popular', badgeType: 'popular' },
  { name: 'Caterers', icon: CaterersIcon, href: '/search?q=Caterers', group: 'events', badge: 'Verified', badgeType: 'verified' },
  { name: 'Chartered Accountant', icon: AccountantIcon, href: '/search?q=Chartered+Accountant', group: 'pro', badge: 'Top', badgeType: 'popular' },
  { name: 'Computer Training Institutes', icon: ComputerTrainingIcon, href: '/search?q=Computer+Training+Institutes', group: 'tech' },

  // --- ROW 3 (Reference) ---
  { name: 'Courier Services', icon: CourierIcon, href: '/search?q=Courier+Services', group: 'auto' },
  { name: 'Computer & Laptop Repair & Services', icon: LaptopRepairIcon, href: '/search?q=Computer+Laptop+Repair', group: 'tech', badge: 'Fast Service', badgeType: 'trending' },
  { name: 'Car Repair & Services', icon: CarRepairIcon, href: '/search?q=Car+Repair+Services', group: 'auto', badge: 'Popular', badgeType: 'popular' },
  { name: 'Dermatologists', icon: DermatologistIcon, href: '/search?q=Dermatologists', group: 'health' },

  // --- ROW 4 (Reference) ---
  { name: 'Dentists', icon: DentistIcon, href: '/search?q=Dentists', group: 'health', badge: 'Verified', badgeType: 'verified' },
  { name: 'Electricians', icon: ElectricianIcon, href: '/search?q=Electricians', group: 'home', badge: '24/7 Doorstep', badgeType: 'doorstep' },
  { name: 'Event Organizer', icon: EventOrganizerIcon, href: '/search?q=Event+Organizer', group: 'events', badge: 'Top', badgeType: 'popular' },
  { name: 'Real Estate', icon: RealEstateIcon, href: '/search?q=Real+Estate', group: 'pro', badge: 'Zero Broker', badgeType: 'trending' },

  // --- ROW 5 (Reference) ---
  { name: 'Fabricators', icon: FabricatorsIcon, href: '/search?q=Fabricators', group: 'home' },
  { name: 'Furniture Repair Services', icon: FurnitureRepairIcon, href: '/search?q=Furniture+Repair+Services', group: 'home' },
  { name: 'Hospitals', icon: HospitalsIcon, href: '/search?q=Hospitals', group: 'health', badge: '24/7', badgeType: 'emergency' },
  { name: 'House keeping Services', icon: HousekeepingIcon, href: '/search?q=House+keeping+Services', group: 'home' },

  // --- ROW 6 (Reference) ---
  { name: 'Hobbies', icon: HobbiesIcon, href: '/search?q=Hobbies', group: 'tech' },
  { name: 'Interior Designers', icon: InteriorIcon, href: '/search?q=Interior+Designers', group: 'home', badge: 'Top Rated', badgeType: 'trending' },
  { name: 'Internet Website Designers', icon: WebsiteDesignIcon, href: '/search?q=Website+Designers', group: 'pro' },
  { name: 'Jewellery Showrooms', icon: JewelleryIcon, href: '/search?q=Jewellery+Showrooms', group: 'wellness', badge: 'Popular', badgeType: 'popular' },

  // --- ROW 7 (Reference) ---
  { name: 'Lawyers', icon: LawyersIcon, href: '/search?q=Lawyers', group: 'pro', badge: 'Verified', badgeType: 'verified' },
  { name: 'Transporters', icon: TransportersIcon, href: '/search?q=Transporters', group: 'auto' },
  { name: 'Photographers', icon: PhotographersIcon, href: '/search?q=Photographers', group: 'events' },
  { name: 'Nursing Services', icon: NursingIcon, href: '/search?q=Nursing+Services', group: 'health' },

  // --- EXPANDED HIGH-DEMAND CATEGORIES (40 Additional Services) ---
  { name: 'Restaurants & Cafes', icon: RestaurantsIcon, href: '/search?q=Restaurants+Cafes', group: 'events', badge: 'Popular', badgeType: 'popular' },
  { name: 'Plumbers & Sanitary', icon: PlumbersIcon, href: '/search?q=Plumbers', group: 'home', badge: '24/7', badgeType: 'emergency' },
  { name: 'Packers & Movers', icon: MoversIcon, href: '/search?q=Packers+Movers', group: 'auto', badge: 'Verified', badgeType: 'verified' },
  { name: 'Pest Control Services', icon: PestControlIcon, href: '/search?q=Pest+Control', group: 'home' },

  { name: 'Gyms & Fitness Studios', icon: GymsIcon, href: '/search?q=Gyms+Fitness', group: 'wellness', badge: 'Popular', badgeType: 'popular' },
  { name: 'Hotels & Resorts', icon: HotelsIcon, href: '/search?q=Hotels+Resorts', group: 'events' },
  { name: 'Painting Contractors', icon: PaintersIcon, href: '/search?q=Painters', group: 'home' },
  { name: 'CCTV & Security Systems', icon: CCTVIcon, href: '/search?q=CCTV+Security', group: 'home', badge: 'Safe', badgeType: 'verified' },

  { name: 'Pet Clinics & Vets', icon: PetClinicsIcon, href: '/search?q=Veterinary', group: 'health' },
  { name: 'Borewell Drilling', icon: BorewellIcon, href: '/search?q=Borewell', group: 'home' },
  { name: 'Carpenters & Woodwork', icon: CarpentersIcon, href: '/search?q=Carpenters', group: 'home' },
  { name: 'Wedding Planners', icon: WeddingPlannersIcon, href: '/search?q=Wedding+Planners', group: 'events', badge: 'Top', badgeType: 'trending' },

  { name: 'Solar Panel Dealers', icon: SolarIcon, href: '/search?q=Solar+Panels', group: 'tech' },
  { name: 'Water Purifier (RO) Service', icon: WaterPurifierIcon, href: '/search?q=Water+Purifier+Repair', group: 'home' },
  { name: 'Dry Cleaners & Laundry', icon: DryCleanersIcon, href: '/search?q=Dry+Cleaners', group: 'home' },
  { name: 'Architects & Engineers', icon: ArchitectsIcon, href: '/search?q=Architects', group: 'pro', badge: 'Verified', badgeType: 'verified' },

  { name: 'Modular Kitchen Dealers', icon: ModularKitchenIcon, href: '/search?q=Modular+Kitchen', group: 'home' },
  { name: 'Tailors & Boutiques', icon: TailorsIcon, href: '/search?q=Tailors', group: 'wellness' },
  { name: 'Schools & Colleges', icon: SchoolsIcon, href: '/search?q=Schools+Colleges', group: 'tech' },
  { name: 'Printing Press & Banners', icon: PrintingPressIcon, href: '/search?q=Printing+Press', group: 'pro' },

  { name: 'Eye Clinics & Opticians', icon: EyeClinicsIcon, href: '/search?q=Eye+Clinics', group: 'health' },
  { name: 'Diagnostic & Blood Test Labs', icon: DiagnosticLabsIcon, href: '/search?q=Diagnostic+Labs', group: 'health', badge: 'Home Sample', badgeType: 'doorstep' },
  { name: 'Physiotherapy Clinics', icon: PhysiotherapyIcon, href: '/search?q=Physiotherapy', group: 'health' },
  { name: 'Ayurvedic Treatment Centers', icon: AyurvedicIcon, href: '/search?q=Ayurvedic', group: 'health' },

  { name: 'Pharmacies & Chemist Shops', icon: PharmacyIcon, href: '/search?q=Pharmacies', group: 'health', badge: '24/7', badgeType: 'emergency' },
  { name: 'Yoga & Meditation Centers', icon: YogaIcon, href: '/search?q=Yoga+Centers', group: 'wellness' },
  { name: 'Digital Marketing Agencies', icon: DigitalMarketingIcon, href: '/search?q=Digital+Marketing', group: 'pro' },
  { name: 'GST & Tax Filing Consultants', icon: TaxGstIcon, href: '/search?q=GST+Consultants', group: 'pro', badge: 'Verified', badgeType: 'verified' },

  { name: 'Driving Schools', icon: DrivingSchoolIcon, href: '/search?q=Driving+Schools', group: 'auto' },
  { name: 'Car Wash & Detailing', icon: CarWashIcon, href: '/search?q=Car+Wash', group: 'auto', badge: 'Doorstep', badgeType: 'doorstep' },
  { name: 'Bike & Two Wheeler Service', icon: BikeRepairIcon, href: '/search?q=Bike+Repair', group: 'auto' },
  { name: 'Tyre & Battery Dealers', icon: TyreDealersIcon, href: '/search?q=Tyre+Dealers', group: 'pro' },

  { name: 'Banquet & Party Halls', icon: BanquetHallsIcon, href: '/search?q=Banquet+Halls', group: 'events', badge: 'Popular', badgeType: 'popular' },
  { name: 'Cake & Bakery Shops', icon: BakeryIcon, href: '/search?q=Bakery+Shops', group: 'events' },
  { name: 'Flower & Bouquet Delivery', icon: FloristIcon, href: '/search?q=Flower+Delivery', group: 'events', badge: 'Fast Delivery', badgeType: 'trending' },
  { name: 'Home Deep Cleaning', icon: DeepCleaningIcon, href: '/search?q=Deep+Cleaning', group: 'home', badge: 'Top Rated', badgeType: 'trending' },

  { name: 'Washing Machine & Appliance Repair', icon: ApplianceRepairIcon, href: '/search?q=Washing+Machine+Repair', group: 'home' },
  { name: 'Waterproofing Contractors', icon: WaterproofingIcon, href: '/search?q=Waterproofing', group: 'home' },
  { name: 'Security Guard Agencies', icon: SecurityGuardsIcon, href: '/search?q=Security+Guards', group: 'pro' },
  { name: 'Automobile Battery Dealers', icon: BatteryDealersIcon, href: '/search?q=Car+Battery', group: 'auto', badge: 'Emergency', badgeType: 'emergency' },
];

// Interactive Category Filter Tabs with dynamic counts
const categoryTabs = [
  { id: 'all', label: 'All Services', count: 68 },
  { id: 'home', label: 'Home & Repairs', count: 18 },
  { id: 'health', label: 'Health & Medical', count: 10 },
  { id: 'wellness', label: 'Beauty & Wellness', count: 7 },
  { id: 'auto', label: 'Auto & Transport', count: 8 },
  { id: 'pro', label: 'Business & Legal', count: 9 },
  { id: 'tech', label: 'Education & Tech', count: 7 },
  { id: 'events', label: 'Events & Dining', count: 9 },
];

export default function CategoryRow() {
  const [activeTab, setActiveTab] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [isExpanded, setIsExpanded] = useState(false);

  // Filter categories based on active tab and search query
  const filteredCategories = useMemo(() => {
    return allCategories.filter((cat) => {
      const matchesTab = activeTab === 'all' || cat.group === activeTab;
      const matchesSearch = cat.name.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesTab && matchesSearch;
    });
  }, [activeTab, searchTerm]);

  // If viewing all with no active search, show initial 28 (unless expanded)
  const displayedCategories = useMemo(() => {
    if (searchTerm.trim() !== '' || activeTab !== 'all' || isExpanded) {
      return filteredCategories;
    }
    return filteredCategories.slice(0, 28);
  }, [filteredCategories, isExpanded, searchTerm, activeTab]);

  return (
    <section id="categories" className="w-full relative z-10 mt-6 md:mt-8 mb-14 px-4 lg:px-8 scroll-mt-24">
      <div className="bg-white rounded-2xl lg:rounded-3xl shadow-[0_12px_45px_rgba(0,102,255,0.06)] border border-slate-100/90 p-5 sm:p-7 lg:p-9 max-w-[1400px] mx-auto">
        
        {/* ========================================== */}
        {/* TOP TRENDING CATEGORIES RAIL (High Impact)  */}
        {/* ========================================== */}
        <div className="mb-8">
          <div className="flex items-center justify-between gap-2 mb-3.5">
            <div className="flex items-center gap-2">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0066FF] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#0066FF]"></span>
              </span>
              <span className="text-xs font-black uppercase tracking-wider text-slate-900 flex items-center gap-1.5">
                <Flame size={14} className="text-orange-500 fill-orange-500" /> Most Booked Services Today
              </span>
            </div>
            <span className="text-[11.5px] font-semibold text-slate-500 hidden sm:inline">
              Verified local service partners with fast dispatch
            </span>
          </div>

          {/* Trending Cards Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2.5">
            {trendingSpotlights.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className={`group relative flex flex-col items-center text-center p-3 rounded-2xl bg-gradient-to-b ${item.gradient} border ${item.border} transition-all duration-200 hover:-translate-y-1 hover:shadow-md cursor-pointer`}
              >
                {/* Micro Badge */}
                <span className={`absolute top-1.5 right-1.5 inline-flex items-center justify-center h-4 px-1.5 text-[8.5px] font-black uppercase rounded-full border leading-none ${item.badgeColor}`}>
                  <span className="leading-none pt-[0.5px]">{item.badge}</span>
                </span>

                {/* Icon */}
                <div className="w-10 h-10 rounded-xl bg-white shadow-2xs border border-white/80 flex items-center justify-center mb-2 mt-1 group-hover:scale-110 transition-transform duration-200">
                  <item.icon />
                </div>

                {/* Title */}
                <span className="text-xs font-bold text-slate-900 group-hover:text-[#0066FF] leading-tight line-clamp-1 transition-colors">
                  {item.title}
                </span>
                
                {/* Subtitle */}
                <span className="text-[10px] font-medium text-slate-500 line-clamp-1 mt-0.5">
                  {item.subtitle}
                </span>
              </Link>
            ))}
          </div>
        </div>

        {/* ========================================== */}
        {/* DIRECTORY HEADER STRIP & LIVE SEARCH FILTER*/}
        {/* ========================================== */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 mb-6 border-b border-slate-100">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="inline-flex items-center justify-center h-6 gap-1.5 text-[10.5px] font-black uppercase tracking-wider text-[#0066FF] bg-blue-50/90 px-3 rounded-full border border-blue-200/60 shadow-2xs leading-none">
                <Sparkles size={12} className="text-[#0066FF]" /> 
                <span className="leading-none pt-[1px]">VERIFIED DIRECTORY</span>
              </span>
              <span className="text-xs font-bold text-slate-700">
                • 68+ Ranked Local Categories
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl lg:text-[26px] font-black text-slate-900 tracking-tight leading-tight">
              Explore Popular Services in Your City
            </h2>
          </div>

          {/* Quick Instant Search Bar */}
          <div className="relative w-full sm:w-80">
            <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500 pointer-events-none" />
            <input 
              type="text" 
              placeholder="Search category (e.g. dentist, AC, plumber, gym)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-8 py-2 text-xs sm:text-sm font-medium bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-[#0066FF] focus:bg-white focus:ring-3 focus:ring-blue-100 transition-all text-slate-800 placeholder:text-slate-500 shadow-2xs"
            />
            {searchTerm && (
              <button 
                onClick={() => setSearchTerm('')} 
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-bold text-slate-500 hover:text-slate-700"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* ========================================== */}
        {/* SECTOR FILTER TABS                         */}
        {/* ========================================== */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-3 mb-5">
          {categoryTabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveTab(tab.id);
                  setSearchTerm('');
                }}
                className={`inline-flex items-center justify-center h-8 px-3.5 rounded-full text-xs font-bold whitespace-nowrap transition-all gap-1.5 cursor-pointer leading-none ${
                  isActive 
                    ? 'bg-[#0066FF] text-white shadow-xs' 
                    : 'bg-slate-50 hover:bg-slate-100 text-slate-600 border border-slate-200/70 hover:text-slate-900'
                }`}
              >
                <span className="leading-none pt-[1px]">{tab.label}</span>
                <span className={`inline-flex items-center justify-center h-4.5 px-1.5 rounded-full text-[10px] font-black leading-none pt-[1px] ${
                  isActive ? 'bg-white/20 text-white' : 'bg-slate-200/80 text-slate-600'
                }`}>
                  {tab.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* ========================================== */}
        {/* 4-COLUMN COMPREHENSIVE DIRECTORY GRID      */}
        {/* ========================================== */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-5 lg:gap-x-7 gap-y-1 sm:gap-y-1.5 min-h-[300px]"
        >
          {displayedCategories.length > 0 ? (
            displayedCategories.map((cat) => (
              <Link 
                key={cat.name} 
                href={cat.href}
                className="flex items-center justify-between px-3.5 py-2 rounded-xl hover:bg-slate-50 transition-all duration-150 group cursor-pointer border border-transparent hover:border-slate-200/70 hover:shadow-2xs"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-8 h-8 rounded-lg bg-slate-50 group-hover:bg-blue-50/90 border border-slate-100 group-hover:border-blue-200 flex items-center justify-center shrink-0 group-hover:scale-105 transition-all duration-200 shadow-2xs">
                    <cat.icon />
                  </div>
                  <span className="text-[13.5px] lg:text-[14px] font-bold text-slate-800 group-hover:text-[#0066FF] transition-colors leading-tight truncate">
                    {cat.name}
                  </span>
                </div>

                {/* Badge Indicator */}
                {cat.badge ? (
                  <span className={`inline-flex items-center justify-center h-5 text-[9.5px] font-extrabold uppercase px-2 rounded-md transition-opacity shrink-0 ml-1.5 leading-none ${
                    cat.badgeType === 'emergency'
                      ? 'text-rose-700 bg-rose-50 border border-rose-200/60'
                      : cat.badgeType === 'doorstep'
                      ? 'text-cyan-800 bg-cyan-50 border border-cyan-200/60'
                      : cat.badgeType === 'popular'
                      ? 'text-amber-700 bg-amber-50 border border-amber-200/60'
                      : cat.badgeType === 'verified'
                      ? 'text-emerald-700 bg-emerald-50 border border-emerald-200/60'
                      : 'text-[#0066FF] bg-blue-50 border border-blue-200/60'
                  }`}>
                    <span className="leading-none pt-[0.5px]">{cat.badge}</span>
                  </span>
                ) : (
                  <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 text-slate-300 group-hover:text-[#0066FF] group-hover:translate-x-0.5 transition-all shrink-0 ml-1" />
                )}
              </Link>
            ))
          ) : (
            <div className="col-span-full py-12 text-center text-slate-500">
              <p className="font-bold text-base mb-1">No categories matching "{searchTerm}"</p>
              <button 
                onClick={() => { setSearchTerm(''); setActiveTab('all'); }} 
                className="text-xs font-bold text-[#0066FF] hover:underline cursor-pointer"
              >
                Reset Search & View All 68 Categories
              </button>
            </div>
          )}
        </motion.div>

        {/* ========================================== */}
        {/* BOTTOM EXPAND / VIEW MORE BAR              */}
        {/* ========================================== */}
        {activeTab === 'all' && !searchTerm && (
          <div className="pt-6 mt-5 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold text-slate-600">
                Showing <strong className="text-slate-900">{displayedCategories.length}</strong> of <strong className="text-slate-900">{allCategories.length}</strong> verified business categories
              </span>
              <div className="hidden sm:flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0066FF]" />
                <span className="text-[11px] font-medium text-slate-500">Includes Top 28 Essential Services</span>
              </div>
            </div>

            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="inline-flex items-center justify-center h-10 gap-2 text-xs sm:text-sm font-extrabold text-[#0066FF] hover:text-white bg-blue-50/90 hover:bg-[#0066FF] border border-blue-200/70 hover:border-[#0066FF] px-5 rounded-xl transition-all shadow-2xs group cursor-pointer leading-none"
            >
              <span className="leading-none pt-[1px]">{isExpanded ? 'Show Top 28 Categories' : 'View All 68+ Categories'}</span>
              {isExpanded ? (
                <ChevronUp size={16} className="group-hover:-translate-y-0.5 transition-transform shrink-0" />
              ) : (
                <ChevronDown size={16} className="group-hover:translate-y-0.5 transition-transform shrink-0" />
              )}
            </button>
          </div>
        )}

        {/* ========================================== */}
        {/* 24/7 EMERGENCY & URGENT SERVICES STRIP     */}
        {/* ========================================== */}
        <div className="mt-7 pt-5 border-t border-slate-100 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 bg-gradient-to-r from-red-50/60 via-slate-50 to-blue-50/60 p-4 rounded-2xl border border-red-100/60">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-red-100/80 text-red-600 flex items-center justify-center shrink-0">
              <PhoneCall size={16} />
            </div>
            <div>
              <span className="text-xs font-black text-slate-900 flex items-center gap-1.5">
                🚨 24x7 Emergency Assistance
              </span>
              <p className="text-[11px] font-medium text-slate-500">
                Instant connection to critical local emergency responders
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2 text-xs">
            <Link 
              href="/search?q=Ambulance" 
              className="inline-flex items-center justify-center h-8 px-3.5 rounded-xl bg-white border border-red-200 font-bold text-red-700 hover:bg-red-50 transition-colors shadow-2xs leading-none"
            >
              <span className="leading-none pt-[1px]">🚑 Ambulance Services</span>
            </Link>
            <Link 
              href="/search?q=Pharmacies" 
              className="inline-flex items-center justify-center h-8 px-3.5 rounded-xl bg-white border border-slate-200 font-bold text-slate-700 hover:text-[#0066FF] hover:border-blue-200 transition-colors shadow-2xs leading-none"
            >
              <span className="leading-none pt-[1px]">💊 24/7 Pharmacy</span>
            </Link>
            <Link 
              href="/search?q=Electricians" 
              className="inline-flex items-center justify-center h-8 px-3.5 rounded-xl bg-white border border-slate-200 font-bold text-slate-700 hover:text-[#0066FF] hover:border-blue-200 transition-colors shadow-2xs leading-none"
            >
              <span className="leading-none pt-[1px]">⚡ Emergency Electrician</span>
            </Link>
            <Link 
              href="/search?q=Breakdown+Towing" 
              className="inline-flex items-center justify-center h-8 px-3.5 rounded-xl bg-white border border-slate-200 font-bold text-slate-700 hover:text-[#0066FF] hover:border-blue-200 transition-colors shadow-2xs leading-none"
            >
              <span className="leading-none pt-[1px]">🚗 Breakdown Towing</span>
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
