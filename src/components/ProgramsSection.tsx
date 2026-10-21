"use client";

import React, { useState } from "react";
import { Check, Users, Sparkles, ArrowRight } from "lucide-react";
import { TENNIS_DATA, Program } from "@/data/tennisData";

interface ProgramsSectionProps {
  onOpenBooking: (program?: string) => void;
}

interface ProgramTheme {
  cardBg: string;
  borderColor: string;
  ageBadge: string;
  highlightBadge: string;
  titleHover: string;
  levelColor: string;
  checkColor: string;
  dividerColor: string;
}

const PROGRAM_THEMES: Record<string, ProgramTheme> = {
  kids: {
    cardBg: "bg-gradient-to-b from-orange-50/80 via-white to-white",
    borderColor: "border-orange-200/90 hover:border-orange-400",
    ageBadge: "bg-orange-100 text-orange-950 border border-orange-200/80",
    highlightBadge: "bg-orange-500 text-white shadow-sm",
    titleHover: "group-hover:text-orange-700",
    levelColor: "text-orange-700",
    checkColor: "text-orange-600",
    dividerColor: "border-orange-100",
  },
  juniors: {
    cardBg: "bg-gradient-to-b from-[#faede8] via-white to-white",
    borderColor: "border-[#f1cdc1] hover:border-[#c84b2c]",
    ageBadge: "bg-[#fae2db] text-[#782410] border border-[#f0c0b3]",
    highlightBadge: "bg-[#c84b2c] text-white shadow-sm",
    titleHover: "group-hover:text-[#c84b2c]",
    levelColor: "text-[#b53d1f]",
    checkColor: "text-[#c84b2c]",
    dividerColor: "border-[#fae2db]",
  },
  adults: {
    cardBg: "bg-gradient-to-b from-sky-50/80 via-white to-white",
    borderColor: "border-sky-200/90 hover:border-sky-400",
    ageBadge: "bg-sky-100 text-sky-950 border border-sky-200/80",
    highlightBadge: "bg-sky-600 text-white shadow-sm",
    titleHover: "group-hover:text-sky-700",
    levelColor: "text-sky-700",
    checkColor: "text-sky-600",
    dividerColor: "border-sky-100",
  },
  private: {
    cardBg: "bg-gradient-to-b from-indigo-50/75 via-white to-white",
    borderColor: "border-indigo-200/90 hover:border-indigo-400",
    ageBadge: "bg-indigo-100 text-indigo-950 border border-indigo-200/80",
    highlightBadge: "bg-indigo-600 text-white shadow-sm",
    titleHover: "group-hover:text-indigo-700",
    levelColor: "text-indigo-700",
    checkColor: "text-indigo-600",
    dividerColor: "border-indigo-100",
  },
  camps: {
    cardBg: "bg-gradient-to-b from-amber-50/80 via-white to-white",
    borderColor: "border-amber-200/90 hover:border-amber-400",
    ageBadge: "bg-amber-100 text-amber-950 border border-amber-200/80",
    highlightBadge: "bg-amber-500 text-slate-950 font-black shadow-sm",
    titleHover: "group-hover:text-amber-700",
    levelColor: "text-amber-800",
    checkColor: "text-amber-600",
    dividerColor: "border-amber-100",
  },
};

const DEFAULT_THEME: ProgramTheme = {
  cardBg: "bg-white",
  borderColor: "border-slate-200 hover:border-slate-400",
  ageBadge: "bg-slate-100 text-slate-700",
  highlightBadge: "bg-lime-400 text-slate-950 font-black",
  titleHover: "group-hover:text-lime-700",
  levelColor: "text-lime-700",
  checkColor: "text-lime-600",
  dividerColor: "border-slate-100",
};

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
            Einzelcoaching: Unser 10-köpfiges Trainerteam garantiert unter Leitung
            von Amir schnelle Lernerfolge, beste Betreuung und dauerhafte Spielfreude.
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
          {filteredPrograms.map((p) => {
            const theme = PROGRAM_THEMES[p.id] || DEFAULT_THEME;

            return (
              <div
                key={p.id}
                className={`${theme.cardBg} rounded-3xl p-6 sm:p-7 border ${theme.borderColor} shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group`}
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className={`px-2.5 py-1 rounded-lg text-[11px] font-bold ${theme.ageBadge}`}>
                      {p.age}
                    </span>
                    {p.badge && (
                      <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider ${theme.highlightBadge}`}>
                        {p.badge}
                      </span>
                    )}
                  </div>

                  <h3 className={`text-xl font-bold text-slate-900 mb-1 ${theme.titleHover} transition-colors`}>
                    {p.title}
                  </h3>
                  <p className={`text-xs font-semibold ${theme.levelColor} mb-4`}>
                    {p.level}
                  </p>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                    {p.description}
                  </p>

                  <div className={`space-y-2 mb-6 pt-4 border-t ${theme.dividerColor}`}>
                    {p.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                        <Check size={14} className={`${theme.checkColor} flex-shrink-0 mt-0.5`} />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className={`pt-4 border-t ${theme.dividerColor}`}>
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
                    className="w-full py-3.5 rounded-2xl bg-lime-400 text-slate-950 font-black text-xs tracking-wide hover:bg-lime-300 transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 border border-lime-500/30 active:scale-95"
                  >
                    <span>Schnuppern / Platz anfragen</span>
                    <ArrowRight size={15} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
