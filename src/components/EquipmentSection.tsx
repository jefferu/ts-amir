"use client";

import React from "react";
import { Wrench, Shield, CheckCircle, Sparkles, ArrowRight } from "lucide-react";

interface EquipmentSectionProps {
  onOpenBooking: () => void;
}

/**
 * Yonex partnership & 24h stringing service section.
 */
export default function EquipmentSection({ onOpenBooking }: EquipmentSectionProps) {
  return (
    <section id="yonex" className="bg-slate-900 text-white py-20 md:py-24 relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-lime-400/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="container mx-auto max-w-7xl px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 text-lime-400 text-xs font-black tracking-widest uppercase mb-4 border border-slate-700">
              <Sparkles size={13} />
              <span>Offizieller Ausrüster & Partner</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight leading-tight mb-4">
              Yonex Testcenter & <br />
              <span className="text-lime-400">24-Stunden Express Bespannung</span>
            </h2>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6">
              Als stolzer Yonex-Partner bieten wir dir exklusiven Zugang zu den
              neuesten Rackets (EZONE, VCORE, PERCEPT). Teste Schläger direkt im
              Training und profitiere von unserer professionellen
              Besaitungswerkstatt.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="bg-slate-800/80 rounded-2xl p-4 border border-slate-700">
                <div className="font-bold text-white text-sm mb-1 flex items-center gap-2">
                  <CheckCircle size={16} className="text-lime-400" />
                  Kostenlose Racket-Tests
                </div>
                <p className="text-xs text-slate-400">
                  Finde den perfekten Schläger für Schwunggeschwindigkeit und
                  Armschonung.
                </p>
              </div>

              <div className="bg-slate-800/80 rounded-2xl p-4 border border-slate-700">
                <div className="font-bold text-white text-sm mb-1 flex items-center gap-2">
                  <Wrench size={16} className="text-lime-400" />
                  24h Bespannungsservice
                </div>
                <p className="text-xs text-slate-400">
                  Präzise Härteabstimmung in Kilogramm (Mono- & Multifilament,
                  Hybrid).
                </p>
              </div>
            </div>

            <button
              onClick={onOpenBooking}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-lime-400 text-slate-950 font-black text-xs uppercase tracking-wide hover:bg-lime-300 transition shadow-lg"
            >
              <span>Testschläger oder Bespannung anfragen</span>
              <ArrowRight size={14} />
            </button>
          </div>

          <div className="lg:col-span-5">
            <div className="relative rounded-3xl overflow-hidden border border-slate-800 shadow-2xl bg-slate-950 p-8 text-center flex flex-col items-center justify-center min-h-[320px]">
              <div className="w-20 h-20 rounded-3xl bg-lime-400 text-slate-950 flex items-center justify-center font-black text-3xl mb-4 shadow-xl">
                Y
              </div>
              <h3 className="text-2xl font-black text-white mb-2">
                POWERED BY YONEX
              </h3>
              <p className="text-xs text-slate-400 max-w-xs mb-6">
                Premium Equipment für Turnierspieler und Nachwuchshoffnungen in
                Kooperation mit Yonex Germany.
              </p>
              <div className="flex items-center gap-3 text-xs font-bold text-slate-300">
                <span className="px-3 py-1 rounded-full bg-slate-900 border border-slate-800">
                  EZONE
                </span>
                <span className="px-3 py-1 rounded-full bg-slate-900 border border-slate-800">
                  VCORE
                </span>
                <span className="px-3 py-1 rounded-full bg-slate-900 border border-slate-800">
                  PERCEPT
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
