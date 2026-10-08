"use client";

import React from "react";
import { ArrowRight, Trophy, Sparkles, CheckCircle2, ShieldCheck, MapPin } from "lucide-react";
import { TENNIS_DATA } from "@/data/tennisData";
import { getAssetUrl } from "@/utils/assets";
import TennisBall from "@/components/TennisBall";

interface HeroSectionProps {
  onOpenBooking: (program?: string) => void;
}

export default function HeroSection({ onOpenBooking }: HeroSectionProps) {
  return (
    <section className="relative pt-28 pb-16 md:pt-36 lg:pt-40 md:pb-24 overflow-hidden bg-gradient-to-b from-white via-slate-50 to-slate-100">
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] select-none flex items-center justify-center">
        <div className="w-[1200px] h-[600px] border-4 border-slate-900 relative">
          <div className="absolute inset-y-0 left-1/2 w-0.5 bg-slate-900"></div>
          <div className="absolute inset-x-0 top-1/2 h-0.5 bg-slate-900"></div>
        </div>
      </div>

      <div className="container mx-auto max-w-7xl px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-900 text-lime-400 text-xs font-black tracking-widest uppercase mb-6 self-start shadow-sm">
              <TennisBall size={15} />
              <span>{TENNIS_DATA.general.tagline}</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-950 tracking-tight leading-[1.08] mb-6">
              Darmstadts Adresse <br />
              <span className="text-lime-600 bg-clip-text">für modernes Tennis.</span>
            </h1>

            <div className="h-1.5 w-20 bg-lime-400 rounded-full mb-6"></div>

            <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed max-w-2xl mb-8">
              {TENNIS_DATA.general.heroSubheading}
            </p>

            <div className="flex flex-wrap gap-2.5 mb-8">
              {[
                { label: "Kids Ballschule (5–8 J.)", id: "kids" },
                { label: "Jugendförderung", id: "juniors" },
                { label: "Erwachsenentraining", id: "adults" },
                { label: "Privatstunden & 10er-Karte", id: "private" },
                { label: "Feriencamps 2026", id: "camps" },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => onOpenBooking(item.id)}
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-slate-300 bg-white/90 text-xs font-bold text-slate-800 hover:border-lime-500 hover:bg-lime-50/70 hover:text-slate-950 transition-all shadow-sm active:scale-95"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-lime-500"></span>
                  {item.label}
                </button>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 sm:items-center">
              <button
                onClick={() => onOpenBooking()}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-full bg-slate-950 text-white font-black text-sm tracking-wide hover:bg-slate-800 transition-all shadow-xl hover:shadow-2xl active:scale-95 group"
              >
                <span>Kostenlose Schnupperstunde buchen</span>
                <span className="w-6 h-6 rounded-full bg-lime-400 text-slate-950 flex items-center justify-center text-xs group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </button>

              <a
                href="#locations"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full border-2 border-slate-300 text-slate-800 font-bold text-sm hover:border-slate-900 hover:bg-slate-100/60 transition-all"
              >
                <MapPin size={16} className="text-lime-600" />
                <span>Standorte & Hallen</span>
              </a>
            </div>

            <div className="mt-10 pt-6 border-t border-slate-200/80 grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs font-bold text-slate-600">
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-lime-600 flex-shrink-0" />
                <span>Keine Vereinsbindung nötig</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-lime-600 flex-shrink-0" />
                <span>ATP A-Level zertifiziert</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-lime-600 flex-shrink-0" />
                <span>Leihschläger kostenfrei</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-900 aspect-[4/5]">
                <img
                  src={getAssetUrl("/images/amir-hero.jpg")}
                  alt="Cheftrainer Amir Reza GPTCA ATP Lizenz"
                  className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent"></div>

                <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full text-[11px] font-black tracking-wider uppercase bg-lime-400 text-slate-950 shadow-md">
                    SG Weiterstadt & TCP
                  </span>
                  <span className="px-3 py-1 rounded-full text-[11px] font-bold bg-white/90 text-slate-900 backdrop-blur-md shadow-md">
                    Winter & Sommer
                  </span>
                </div>

                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <div className="flex items-center gap-2 text-lime-400 text-xs font-black uppercase tracking-wider mb-1">
                    <Trophy size={14} />
                    <span>Davis Cup Erfahrung</span>
                  </div>
                  <h3 className="text-2xl font-black leading-tight text-white mb-2">
                    Cheftrainer Amir Reza
                  </h3>
                  <p className="text-xs text-slate-300 leading-snug line-clamp-2">
                    Ehemaliger Weltranglistenspieler, GPTCA/ATP A-Level zertifiziert & Talent Scout der Rafa Nadal Academy.
                  </p>
                </div>
              </div>

              <div className="absolute top-4 -right-2 sm:-right-4 hidden sm:flex items-center gap-3 p-3.5 rounded-2xl bg-slate-950/95 text-white backdrop-blur-md shadow-2xl border border-slate-800 z-10 animate-fade-in">
                <img
                  src={getAssetUrl("/images/official_atp_certified.png")}
                  alt="Official ATP Certified"
                  className="h-8 w-auto object-contain"
                />
                <div className="pr-1">
                  <div className="text-[10px] font-extrabold uppercase tracking-widest text-lime-400">
                    Höchste Lizenz
                  </div>
                  <div className="text-xs font-black text-white whitespace-nowrap">
                    GPTCA A-Level Coach
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-4 -left-2 sm:-left-4 hidden sm:flex items-center gap-3 p-3.5 rounded-2xl bg-white/95 backdrop-blur-md shadow-xl border border-slate-200 z-10 animate-fade-in">
                <div className="w-10 h-10 rounded-xl bg-lime-400 text-slate-950 flex items-center justify-center font-black text-sm shadow-sm">
                  RNA
                </div>
                <div className="pr-1">
                  <div className="text-[10px] font-extrabold uppercase tracking-widest text-slate-500">
                    Offizieller Partner
                  </div>
                  <div className="text-xs font-black text-slate-900 whitespace-nowrap">
                    Rafa Nadal Academy Scout
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
