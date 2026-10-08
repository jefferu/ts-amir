"use client";

import React, { useState } from "react";
import { Check, Users, Sparkles, ArrowRight, Calendar, UserCheck } from "lucide-react";
import { TENNIS_DATA, Program } from "@/data/tennisData";

interface ProgramsSectionProps {
  onOpenBooking: (program?: string) => void;
}

export default function ProgramsSection({ onOpenBooking }: ProgramsSectionProps) {
  const [activeTab, setActiveTab] = useState<string>("all");

  const categories = [
    { id: "all", label: "Alle Programme" },
    { id: "kids", label: "Kids (5 – 8 J.)" },
    { id: "juniors", label: "Jugend (9 – 17 J.)" },
    { id: "adults", label: "Erwachsene" },
    { id: "private", label: "Privattraining" },
    { id: "camps", label: "Feriencamps" },
  ];

  const filteredPrograms =
    activeTab === "all"
      ? TENNIS_DATA.programs
      : TENNIS_DATA.programs.filter((p) => p.category === activeTab);

  return (
    <section id="programs" className="bg-slate-50/60 py-20 md:py-28 border-t border-slate-200">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-lime-100 text-lime-800 text-xs font-black tracking-widest uppercase mb-3">
            <Sparkles size={13} />
            <span>Trainingsangebot für jedes Level</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-950 tracking-tight">
            Von den ersten Ballkontakten bis zur Turnier-Perfektion
          </h2>
          <div className="mt-3.5 h-1.5 w-16 bg-lime-400 mx-auto rounded-full"></div>
          <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed">
            In homogenen Kleingruppen (max. 4 Spieler) oder im intensiven
            Einzelcoaching: Unsere strukturierte Methodik garantiert schnelle
            Lernerfolge und dauerhafte Spielfreude.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                activeTab === cat.id
                  ? "bg-slate-900 text-lime-400 shadow-md scale-105"
                  : "bg-white border border-slate-200 text-slate-700 hover:border-slate-400 hover:bg-slate-100"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPrograms.map((p) => (
            <div
              key={p.id}
              className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="px-2.5 py-1 rounded-lg bg-slate-100 text-[11px] font-bold text-slate-700">
                    {p.age}
                  </span>
                  {p.badge && (
                    <span className="px-2.5 py-0.5 rounded-full bg-lime-400 text-slate-950 text-[10px] font-black uppercase tracking-wider shadow-xs">
                      {p.badge}
                    </span>
                  )}
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-1 group-hover:text-lime-700 transition-colors">
                  {p.title}
                </h3>
                <p className="text-xs font-semibold text-lime-700 mb-4">
                  {p.level}
                </p>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                  {p.description}
                </p>

                <div className="space-y-2 mb-6 pt-4 border-t border-slate-100">
                  {p.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                      <Check size={14} className="text-lime-600 flex-shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100">
                <div className="flex items-center justify-between text-xs text-slate-500 mb-4">
                  <span className="flex items-center gap-1 font-medium">
                    <Users size={14} className="text-slate-400" />
                    {p.groupSize}
                  </span>
                  {p.priceWinter && (
                    <span className="font-extrabold text-slate-900">
                      Ab {p.priceSummer || p.priceWinter}
                    </span>
                  )}
                </div>

                <button
                  onClick={() => onOpenBooking(p.id)}
                  className="w-full py-3 rounded-2xl bg-slate-900 text-white font-bold text-xs tracking-wide hover:bg-slate-800 transition shadow flex items-center justify-center gap-2 group-hover:bg-lime-400 group-hover:text-slate-950"
                >
                  <span>Schnuppern / Platz anfragen</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
