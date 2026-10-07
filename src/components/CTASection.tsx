"use client";

import React from "react";
import { Phone, Mail, Calendar, CheckCircle2, Trophy } from "lucide-react";
import { TENNIS_DATA } from "@/data/tennisData";

interface CTASectionProps {
  onOpenBooking: () => void;
}

/**
 * High-converting CTA section modeled after Rippner Tennis's "Ready to Start".
 */
export default function CTASection({ onOpenBooking }: CTASectionProps) {
  return (
    <section className="bg-slate-900 text-white py-20 md:py-28 relative overflow-hidden">
      {/* Decorative tennis court ring */}
      <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
        <div className="w-[800px] h-[800px] rounded-full border-8 border-white"></div>
      </div>

      <div className="container mx-auto max-w-4xl px-4 sm:px-6 text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 text-lime-400 text-xs font-black tracking-widest uppercase mb-4 border border-slate-700">
          <Trophy size={13} />
          <span>Dein nächstes Level beginnt hier</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight mb-6">
          Bereit für deinen ersten Aufschlag <br />
          <span className="text-lime-400">mit Cheftrainer Amir?</span>
        </h2>

        <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto mb-10 leading-relaxed">
          Schließe dich hunderten begeisterten Spielern in Darmstadt und
          Weiterstadt an. Schnupper unverbindlich rein, verbessere dein Spiel
          oder starte deine Turnierkarriere.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <button
            onClick={onOpenBooking}
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-lime-400 text-slate-950 font-black text-sm tracking-wide hover:bg-lime-300 transition-all shadow-xl active:scale-95 flex items-center justify-center gap-2"
          >
            <Calendar size={18} />
            <span>Kostenlose Schnupperstunde buchen</span>
          </button>

          <a
            href={`tel:${TENNIS_DATA.general.phone.replace(/[^0-9+]/g, "")}`}
            className="w-full sm:w-auto px-8 py-4 rounded-full border-2 border-slate-700 text-white font-bold text-sm hover:bg-slate-800 transition flex items-center justify-center gap-2"
          >
            <Phone size={16} className="text-lime-400" />
            <span>{TENNIS_DATA.general.phone}</span>
          </a>
        </div>

        {/* 4 Trust Signals */}
        <div className="flex flex-wrap justify-center gap-6 sm:gap-10 text-xs font-bold text-slate-300">
          <span className="flex items-center gap-2">
            <CheckCircle2 size={16} className="text-lime-400" />
            Keine Vereinsbindung nötig
          </span>
          <span className="flex items-center gap-2">
            <CheckCircle2 size={16} className="text-lime-400" />
            ATP A-Level Qualität
          </span>
          <span className="flex items-center gap-2">
            <CheckCircle2 size={16} className="text-lime-400" />
            2 Top-Standorte
          </span>
          <span className="flex items-center gap-2">
            <CheckCircle2 size={16} className="text-lime-400" />
            Leihschläger gratis
          </span>
        </div>
      </div>
    </section>
  );
}
