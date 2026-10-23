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
  Gift,
  Camera,
} from "lucide-react";
import { TENNIS_DATA } from "@/data/tennisData";
import { getAssetUrl } from "@/utils/assets";

interface NavbarProps {
  onOpenBooking: (program?: string) => void;
  onOpenLegal: (type: "impressum" | "datenschutz") => void;
  onOpenVoucher?: () => void;
}

export default function Navbar({ onOpenBooking, onOpenLegal, onOpenVoucher }: NavbarProps) {
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
            ? "bg-gradient-to-r from-lime-400 via-lime-400 to-lime-300 backdrop-blur-md shadow-lg border-b border-lime-500/50 py-2"
            : "bg-gradient-to-r from-lime-400 via-lime-400 to-lime-300 backdrop-blur-md border-b border-lime-500/40 shadow-md py-3"
        }`}
      >
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5 sm:gap-3 group select-none py-0.5 shrink-0">
            <img
              src={getAssetUrl("/images/logo-amir.png")}
              alt="Tennisschule Amir"
              className="h-11 sm:h-12 w-auto object-contain transition-transform group-hover:scale-105 drop-shadow-sm shrink-0"
            />
            <div className="flex flex-col whitespace-nowrap">
              <span className="text-base sm:text-lg font-black tracking-tight text-slate-950 leading-tight">
                TENNISSCHULE <span className="text-slate-950">AMIR</span>
              </span>
              <span className="text-[9px] font-black tracking-widest text-slate-950/80 uppercase">
                Akademie Weiterstadt
              </span>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-0.5 xl:gap-1 whitespace-nowrap">
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown("about")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center gap-1 px-2.5 xl:px-3 py-2 text-xs font-black uppercase tracking-wider text-slate-950 hover:bg-slate-950/10 rounded-xl transition-colors whitespace-nowrap">
                <span>Über uns</span>
                <ChevronDown size={14} className="text-slate-950 shrink-0" />
              </button>

              {activeDropdown === "about" && (
                <div className="absolute top-full left-0 pt-2 w-64 animate-fade-in">
                  <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-2 text-sm whitespace-normal">
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
                      href="#gallery"
                      className="flex items-start gap-2.5 p-2.5 rounded-xl hover:bg-slate-50 transition text-slate-800"
                    >
                      <Camera size={16} className="text-lime-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="font-bold text-xs uppercase tracking-wide">Galerie & Einblicke</div>
                        <div className="text-[11px] text-slate-500">Fotos aus Training & Feriencamps</div>
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

            <a
              href="#locations"
              className="px-2.5 xl:px-3 py-2 text-xs font-black uppercase tracking-wider text-slate-950 hover:bg-slate-950/10 rounded-xl transition-colors whitespace-nowrap"
            >
              Standort
            </a>

            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown("programs")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center gap-1 px-2.5 xl:px-3 py-2 text-xs font-black uppercase tracking-wider text-slate-950 hover:bg-slate-950/10 rounded-xl transition-colors whitespace-nowrap">
                <span>Training</span>
                <ChevronDown size={14} className="text-slate-950 shrink-0" />
              </button>

              {activeDropdown === "programs" && (
                <div className="absolute top-full left-0 pt-2 w-72 animate-fade-in">
                  <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-2 text-sm whitespace-normal">
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
                      <div className="text-[11px] text-slate-500">1-zu-1 Intensivtraining mit Amir & Team</div>
                    </a>
                  </div>
                </div>
              )}
            </div>

            <a
              href="#camps"
              className="px-2.5 xl:px-3 py-2 text-xs font-black uppercase tracking-wider text-slate-950 hover:bg-slate-950/10 rounded-xl transition-colors whitespace-nowrap"
            >
              Camps
            </a>

            <a
              href="#pricing"
              className="px-2.5 xl:px-3 py-2 text-xs font-black uppercase tracking-wider text-slate-950 hover:bg-slate-950/10 rounded-xl transition-colors whitespace-nowrap"
            >
              Preise
            </a>

            <a
              href="#yonex"
              className="px-2.5 xl:px-3 py-2 text-xs font-black uppercase tracking-wider text-slate-950 hover:bg-slate-950/10 rounded-xl transition-colors whitespace-nowrap"
            >
              Yonex
            </a>

            <button
              onClick={() => onOpenVoucher?.()}
              className="px-2.5 xl:px-3 py-2 text-xs font-black uppercase tracking-wider text-slate-950 hover:bg-slate-950/10 rounded-xl transition-colors flex items-center gap-1.5 whitespace-nowrap"
            >
              <Gift size={13} className="text-slate-950 shrink-0" />
              <span>Gutschein</span>
            </button>
          </nav>

          <div className="hidden sm:flex items-center gap-2 xl:gap-2.5 shrink-0 whitespace-nowrap">
            <a
              href={`tel:${TENNIS_DATA.general.phone.replace(/[^0-9+]/g, "")}`}
              className="inline-flex items-center justify-center gap-1.5 p-2.5 xl:px-3 xl:py-2 text-xs font-black text-slate-950 bg-slate-950/5 hover:bg-slate-950/15 rounded-full transition whitespace-nowrap"
              title={`Direkt anrufen: ${TENNIS_DATA.general.phone}`}
              aria-label={`Direkt anrufen: ${TENNIS_DATA.general.phone}`}
            >
              <Phone size={14} className="text-slate-950 shrink-0" />
              <span className="hidden 2xl:inline">{TENNIS_DATA.general.phone}</span>
            </a>

            <button
              onClick={() => onOpenBooking()}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-slate-950 text-lime-400 text-xs font-black tracking-wide hover:bg-slate-900 hover:text-lime-300 transition-all shadow-md hover:shadow-xl active:scale-95 whitespace-nowrap"
            >
              <Calendar size={14} className="shrink-0" />
              <span>Probetraining buchen</span>
            </button>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl text-slate-950 hover:bg-slate-950/10 transition"
            aria-label="Menü öffnen"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

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
                Standort (SG Weiterstadt Tennis)
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
              <a
                href="#gallery"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2.5 text-base font-bold text-slate-900 border-b border-slate-100"
              >
                Galerie & Einblicke
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenVoucher?.();
                }}
                className="w-full text-left py-2.5 text-base font-bold text-slate-900 border-b border-slate-100 flex items-center justify-between"
              >
                <span>Gutschein verschenken</span>
                <Gift size={18} className="text-lime-600" />
              </button>
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
            <div className="mt-2 flex items-center justify-center gap-3 text-slate-600 font-semibold">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenLegal("impressum");
                }}
                className="hover:text-slate-900 transition underline-offset-2 hover:underline"
              >
                Impressum
              </button>
              <span>·</span>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenLegal("datenschutz");
                }}
                className="hover:text-slate-900 transition underline-offset-2 hover:underline"
              >
                Datenschutz
              </button>
            </div>
            <p className="mt-2 text-[11px] text-slate-400">© 2026 Tennisschule Amir Reza</p>
          </div>
        </div>
      )}
    </>
  );
}
