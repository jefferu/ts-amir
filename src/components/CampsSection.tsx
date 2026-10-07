"use client";

import React from "react";
import { Sun, Calendar, Users, Trophy, Check, ArrowRight } from "lucide-react";

interface CampsSectionProps {
  onOpenBooking: (program?: string) => void;
}

/**
 * Feriencamps spotlight section (Ostern & Sommer).
 */
export default function CampsSection({ onOpenBooking }: CampsSectionProps) {
  return (
    <section id="camps" className="bg-lime-400 py-20 md:py-24 text-slate-950 relative overflow-hidden">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <span className="px-3.5 py-1 rounded-full bg-slate-950 text-lime-400 text-xs font-black tracking-widest uppercase inline-block mb-4">
              Traditionelle Ferien-Highlights
            </span>

            <h2 className="text-3xl sm:text-5xl font-black text-slate-950 tracking-tight leading-tight mb-4">
              Sommer- & Oster-Camps 2026
            </h2>

            <p className="text-base sm:text-lg text-slate-900/90 leading-relaxed max-w-2xl mb-8 font-medium">
              Seit über einem Jahrzehnt sind die Tenniscamps von TS-Amir mit
              über 100 Teilnehmern pro Jahr eine feste Institution in Darmstadt
              und Weiterstadt. Ideal für schnelle Fortschritte, neue
              Tennisfreundschaften und jede Menge Ferienspaß!
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {[
                "Täglich 4 Stunden Tennistraining & Athletik",
                "Gemeinsames Mittagessen & Erfrischungen inklusive",
                "Einteilung nach Alter (ab 5 Jahre) und Spielstärke",
                "Großes Abschlussturnier mit Pokalen & Urkunden",
                "Betreuung durch Cheftrainer Amir & lizenziertes Team",
                "Schlechtwetter-Hallenplatzgarantie Weiterstadt",
              ].map((feat, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm font-bold text-slate-950">
                  <div className="w-5 h-5 rounded-full bg-slate-950 text-lime-400 flex items-center justify-center flex-shrink-0 text-xs">
                    ✓
                  </div>
                  <span>{feat}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 items-center">
              <button
                onClick={() => onOpenBooking("Feriencamp 2026")}
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-slate-950 text-white font-black text-sm tracking-wide hover:bg-slate-900/90 transition shadow-xl flex items-center justify-center gap-2"
              >
                <span>Camp-Platz jetzt anfragen</span>
                <ArrowRight size={16} className="text-lime-400" />
              </button>
              <span className="text-xs font-bold text-slate-800">
                Begrenzte Teilnehmerzahl pro Camp-Woche!
              </span>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="bg-slate-950 text-white rounded-3xl p-7 sm:p-8 shadow-2xl border-4 border-slate-950">
              <div className="flex items-center justify-between mb-4 pb-4 border-b border-slate-800">
                <div>
                  <span className="text-xs font-black text-lime-400 uppercase tracking-widest">
                    Camp-Termine
                  </span>
                  <h3 className="text-xl font-black text-white">Saison 2026</h3>
                </div>
                <div className="w-10 h-10 rounded-xl bg-lime-400 text-slate-950 flex items-center justify-center font-bold">
                  ☀️
                </div>
              </div>

              <div className="space-y-4 text-xs">
                <div className="p-3.5 rounded-2xl bg-slate-900 border border-slate-800">
                  <div className="font-bold text-lime-400 uppercase text-[10px] tracking-wider mb-0.5">
                    Osterferien Hessen
                  </div>
                  <div className="font-black text-white text-sm">
                    Ostercamp Woche 1 & 2
                  </div>
                  <div className="text-slate-400 mt-1">
                    Mo–Do jeweils 09:30 – 15:00 Uhr · SG Weiterstadt
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl bg-slate-900 border border-slate-800">
                  <div className="font-bold text-lime-400 uppercase text-[10px] tracking-wider mb-0.5">
                    Sommerferien Hessen
                  </div>
                  <div className="font-black text-white text-sm">
                    Sommercamp Serien Teil 1 bis 4
                  </div>
                  <div className="text-slate-400 mt-1">
                    Juli & August 2026 · SG Weiterstadt & TC Pfungstadt
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl bg-slate-900 border border-slate-800">
                  <div className="font-bold text-lime-400 uppercase text-[10px] tracking-wider mb-0.5">
                    Herbstferien Hessen
                  </div>
                  <div className="font-black text-white text-sm">
                    Herbst-Intensivtag
                  </div>
                  <div className="text-slate-400 mt-1">
                    Oktober 2026 · Matchtraining & Technik
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800 text-center">
                <span className="text-xs text-slate-300">
                  Preise ab <strong>180 €</strong> pro Teilnehmer inkl. Mittagessen
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
