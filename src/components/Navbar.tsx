"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  ChevronDown,
  Menu,
  X,
  Phone,
  Calendar,
  Sparkles,
  MapPin,
  Trophy,
  Shield,
  Layers,
} from "lucide-react";
import { TENNIS_DATA } from "@/data/tennisData";
import { getAssetUrl } from "@/utils/assets";

interface NavbarProps {
  onOpenBooking: (program?: string) => void;
}

/**
 * Sticky responsive navigation modeled after Rippner Tennis.
 * Features hierarchical dropdowns, direct CTAs, and mobile drawer.
 */
export default function Navbar({ onOpenBooking }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-md border-b border-slate-200/80 py-2"
            : "bg-white/90 backdrop-blur-sm border-b border-slate-100 py-3"
        }`}
      >
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 flex items-center justify-between">
          {/* Brand Logo with Official TS-Amir Crest */}
          <Link href="/" className="flex items-center gap-2.5 sm:gap-3 group select-none py-0.5">
            <img
              src={getAssetUrl("/images/logo-amir.png")}
              alt="Tennisschule Amir"
              className="h-11 sm:h-12 w-auto object-contain transition-transform group-hover:scale-105"
            />
            <div className="flex flex-col">
              <span className="text-base sm:text-lg font-black tracking-tight text-slate-950 leading-tight">
                TENNISSCHULE <span className="text-lime-600">AMIR</span>
              </span>
              <span className="text-[9px] font-extrabold tracking-widest text-slate-500 uppercase">
                Akademie Darmstadt & Weiterstadt
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {/* Über uns Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown("about")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center gap-1 px-3 py-2 text-xs font-bold uppercase tracking-wider text-slate-700 hover:text-slate-950 rounded-lg hover:bg-slate-100 transition-colors">
                Über uns
                <ChevronDown size={14} className="text-slate-400" />
              </button>

              {activeDropdown === "about" && (
                <div className="absolute top-full left-0 pt-2 w-64 animate-fade-in">
                  <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-2 text-sm">
                    <a
                      href="#coach"
                      className="flex items-start gap-2.5 p-2.5 rounded-xl hover:bg-slate-50 transition text-slate-800"
                    >
                      <Trophy size={16} className="text-lime-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="font-bold text-xs uppercase tracking-wide">Cheftrainer Amir Reza</div>
                        <div className="text-[11px] text-slate-500">Davis Cup & ATP A-Level Lizenz</div>
                      </div>
                    </a>
                    <a
                      href="#philosophy"
                      className="flex items-start gap-2.5 p-2.5 rounded-xl hover:bg-slate-50 transition text-slate-800"
                    >
                      <Shield size={16} className="text-lime-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="font-bold text-xs uppercase tracking-wide">Philosophie & Methodik</div>
                        <div className="text-[11px] text-slate-500">Spaß, Technik & Spitzenleistung</div>
                      </div>
                    </a>
                    <a
                      href="#coach"
                      className="flex items-start gap-2.5 p-2.5 rounded-xl hover:bg-slate-50 transition text-slate-800"
                    >
                      <Sparkles size={16} className="text-lime-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="font-bold text-xs uppercase tracking-wide">Rafa Nadal Partner</div>
                        <div className="text-[11px] text-slate-500">Offizieller Talent Scout</div>
                      </div>
                    </a>
                  </div>
                </div>
              )}
            </div>

            {/* Standorte Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown("locations")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center gap-1 px-3 py-2 text-xs font-bold uppercase tracking-wider text-slate-700 hover:text-slate-950 rounded-lg hover:bg-slate-100 transition-colors">
                Standorte
                <ChevronDown size={14} className="text-slate-400" />
              </button>

              {activeDropdown === "locations" && (
                <div className="absolute top-full left-0 pt-2 w-72 animate-fade-in">
                  <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-2 text-sm">
                    <a
                      href="#locations"
                      className="flex items-start gap-2.5 p-2.5 rounded-xl hover:bg-slate-50 transition text-slate-800"
                    >
                      <MapPin size={16} className="text-lime-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="font-bold text-xs uppercase tracking-wide">SG Weiterstadt Tennis</div>
                        <div className="text-[11px] text-slate-500">Hauptstandort · Halle & Außenplätze</div>
                      </div>
                    </a>
                    <a
                      href="#locations"
                      className="flex items-start gap-2.5 p-2.5 rounded-xl hover:bg-slate-50 transition text-slate-800"
                    >
                      <MapPin size={16} className="text-lime-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="font-bold text-xs uppercase tracking-wide">TC Pfungstadt</div>
                        <div className="text-[11px] text-slate-500">Traditionspartner · Sandplätze & Jugend</div>
                      </div>
                    </a>
                  </div>
                </div>
              )}
            </div>

            {/* Programme Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown("programs")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center gap-1 px-3 py-2 text-xs font-bold uppercase tracking-wider text-slate-700 hover:text-slate-950 rounded-lg hover:bg-slate-100 transition-colors">
                Programme
                <ChevronDown size={14} className="text-slate-400" />
              </button>

              {activeDropdown === "programs" && (
                <div className="absolute top-full left-0 pt-2 w-72 animate-fade-in">
                  <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-2 text-sm">
                    <a
                      href="#programs"
                      className="block p-2 rounded-xl hover:bg-slate-50 text-slate-800"
                    >
                      <div className="font-bold text-xs uppercase">Kids Ballschule (5–8 Jahre)</div>
                      <div className="text-[11px] text-slate-500">Play & Stay Methodik & Motorik</div>
                    </a>
                    <a
                      href="#programs"
                      className="block p-2 rounded-xl hover:bg-slate-50 text-slate-800"
                    >
                      <div className="font-bold text-xs uppercase">Jugendförderung (9–17 Jahre)</div>
                      <div className="text-[11px] text-slate-500">Technikfeinschliff & Medenspiele</div>
                    </a>
                    <a
                      href="#programs"
                      className="block p-2 rounded-xl hover:bg-slate-50 text-slate-800"
                    >
                      <div className="font-bold text-xs uppercase">Erwachsenentraining</div>
                      <div className="text-[11px] text-slate-500">After Work, Hobby- & Mannschaftsspieler</div>
                    </a>
                    <a
                      href="#programs"
                      className="block p-2 rounded-xl hover:bg-slate-50 text-slate-800"
                    >
                      <div className="font-bold text-xs uppercase">Privatstunden & 10er-Karten</div>
                      <div className="text-[11px] text-slate-500">1-zu-1 Intensivtraining mit Amir</div>
                    </a>
                  </div>
                </div>
              )}
            </div>

            {/* Direkte Links */}
            <a
              href="#camps"
              className="px-3 py-2 text-xs font-bold uppercase tracking-wider text-slate-700 hover:text-slate-950 rounded-lg hover:bg-slate-100 transition-colors"
            >
              Feriencamps
            </a>

            <a
              href="#pricing"
              className="px-3 py-2 text-xs font-bold uppercase tracking-wider text-slate-700 hover:text-slate-950 rounded-lg hover:bg-slate-100 transition-colors"
            >
              Preise & Saison
            </a>

            <a
              href="#yonex"
              className="px-3 py-2 text-xs font-bold uppercase tracking-wider text-slate-700 hover:text-slate-950 rounded-lg hover:bg-slate-100 transition-colors"
            >
              Yonex Testcenter
            </a>
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={`tel:${TENNIS_DATA.general.phone.replace(/[^0-9+]/g, "")}`}
              className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-bold text-slate-700 hover:text-slate-950 transition"
              title="Direkt anrufen"
            >
              <Phone size={14} className="text-lime-600" />
              <span>{TENNIS_DATA.general.phone}</span>
            </a>

            <button
              onClick={() => onOpenBooking()}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-lime-400 text-slate-950 text-xs font-black tracking-wide hover:bg-lime-300 transition-all shadow-sm hover:shadow active:scale-95"
            >
              <Calendar size={14} />
              <span>Schnupperstunde buchen</span>
            </button>
          </div>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl text-slate-800 hover:bg-slate-100 transition"
            aria-label="Menü öffnen"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-[60px] z-30 bg-white/95 backdrop-blur-md lg:hidden p-6 overflow-y-auto flex flex-col justify-between border-t border-slate-200">
          <div className="space-y-4">
            <div className="space-y-1">
              <a
                href="#coach"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2.5 text-base font-bold text-slate-900 border-b border-slate-100"
              >
                Cheftrainer Amir Reza
              </a>
              <a
                href="#locations"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2.5 text-base font-bold text-slate-900 border-b border-slate-100"
              >
                Standorte (SG Weiterstadt & Pfungstadt)
              </a>
              <a
                href="#programs"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2.5 text-base font-bold text-slate-900 border-b border-slate-100"
              >
                Trainingsprogramme (Kids, Jugend, Erwachsene)
              </a>
              <a
                href="#camps"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2.5 text-base font-bold text-slate-900 border-b border-slate-100"
              >
                Feriencamps & Intensivtage
              </a>
              <a
                href="#pricing"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2.5 text-base font-bold text-slate-900 border-b border-slate-100"
              >
                Preise & Saison-Tarife
              </a>
              <a
                href="#yonex"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2.5 text-base font-bold text-slate-900 border-b border-slate-100"
              >
                Yonex Testcenter & Bespannung
              </a>
            </div>

            <div className="pt-4 space-y-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full py-3.5 rounded-2xl bg-lime-400 text-slate-950 font-black text-sm text-center shadow-md"
              >
                Kostenlose Schnupperstunde buchen
              </button>

              <a
                href={`tel:${TENNIS_DATA.general.phone.replace(/[^0-9+]/g, "")}`}
                className="flex items-center justify-center gap-2 w-full py-3 rounded-2xl bg-slate-900 text-white font-bold text-sm"
              >
                <Phone size={16} className="text-lime-400" />
                <span>{TENNIS_DATA.general.phone}</span>
              </a>
            </div>
          </div>

          <div className="pt-8 text-center text-xs text-slate-500">
            <p>Offizieller Partner der Rafa Nadal Academy</p>
            <p className="mt-1">© 2026 Tennisschule Amir Reza</p>
          </div>
        </div>
      )}
    </>
  );
}
