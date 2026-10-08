"use client";

import React, { useState } from "react";
import { Check, ArrowRight, ShieldCheck, Sparkles, HelpCircle } from "lucide-react";
import { TENNIS_DATA } from "@/data/tennisData";

interface PricingSectionProps {
  onOpenBooking: (program?: string) => void;
}

export default function PricingSection({ onOpenBooking }: PricingSectionProps) {
  const [season, setSeason] = useState<"winter" | "summer" | "packages">("winter");

  const currentCards =
    season === "winter"
      ? TENNIS_DATA.pricingTable.winter
      : season === "summer"
      ? TENNIS_DATA.pricingTable.summer
      : TENNIS_DATA.pricingTable.packages;

  return (
    <section id="pricing" className="bg-slate-50 py-20 md:py-28 border-t border-slate-200">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="px-3 py-1 rounded-full bg-slate-900 text-lime-400 text-xs font-black tracking-widest uppercase inline-block mb-3">
            Faire & Transparente Konditionen
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-950 tracking-tight">
            Saison-Angebote & Trainingspreise
          </h2>
          <div className="mt-3.5 h-1.5 w-16 bg-lime-400 mx-auto rounded-full"></div>
          <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed">
            In Kooperation mit der SG Weiterstadt und dem TC Pfungstadt. Feste
            4er-Gruppen, geprüfte DTB/ATP-Trainer und volle Kostentransparenz.
          </p>
        </div>

        <div className="flex justify-center mb-14">
          <div className="inline-flex p-1.5 bg-white rounded-full border border-slate-200 shadow-sm">
            <button
              onClick={() => setSeason("winter")}
              className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all ${
                season === "winter"
                  ? "bg-slate-900 text-lime-400 shadow-md"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              Wintersaison (inkl. Halle)
            </button>
            <button
              onClick={() => setSeason("summer")}
              className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all ${
                season === "summer"
                  ? "bg-slate-900 text-lime-400 shadow-md"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              Sommersaison (Outdoor)
            </button>
            <button
              onClick={() => setSeason("packages")}
              className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all ${
                season === "packages"
                  ? "bg-slate-900 text-lime-400 shadow-md"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              Privatstunden & Schnuppern
            </button>
          </div>
        </div>

        <div
          className={`grid gap-6 ${
            currentCards.length === 2
              ? "grid-cols-1 md:grid-cols-2 max-w-4xl mx-auto"
              : "grid-cols-1 md:grid-cols-3"
          }`}
        >
          {currentCards.map((card, idx) => (
            <div
              key={idx}
              className={`relative rounded-3xl p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 ${
                card.popular
                  ? "bg-white border-2 border-slate-950 shadow-2xl scale-[1.02]"
                  : "bg-white border border-slate-200 shadow-sm hover:shadow-lg"
              }`}
            >
              {card.popular && (
                <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-lime-400 text-slate-950 text-[10px] font-black uppercase tracking-wider shadow-md">
                  Am beliebtesten
                </span>
              )}

              <div>
                <h3 className="text-xl font-black text-slate-900 mb-1">
                  {card.title}
                </h3>
                <p className="text-xs font-medium text-slate-500 mb-6">
                  {card.period}
                </p>

                <div className="flex items-baseline gap-1 mb-6 pb-6 border-b border-slate-100">
                  <span className="text-4xl sm:text-5xl font-black text-slate-950">
                    {card.price === "0" ? "Kostenlos" : `${card.price} €`}
                  </span>
                  {card.price !== "0" && (
                    <span className="text-xs font-semibold text-slate-500">
                      / Person
                    </span>
                  )}
                </div>

                <div className="space-y-3 mb-8">
                  {card.features.map((f, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                      <Check size={16} className="text-lime-600 flex-shrink-0 mt-0.5" />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <button
                  onClick={() => onOpenBooking(card.title)}
                  className={`w-full py-3.5 rounded-2xl font-bold text-xs tracking-wide transition shadow-sm flex items-center justify-center gap-2 ${
                    card.popular
                      ? "bg-slate-950 text-white hover:bg-slate-800"
                      : "bg-slate-100 text-slate-900 hover:bg-slate-200"
                  }`}
                >
                  <span>{card.price === "0" ? "Jetzt kostenlos testen" : "Jetzt anfragen"}</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 max-w-2xl mx-auto p-4 rounded-2xl bg-white border border-slate-200 text-xs text-slate-600 flex items-start gap-3">
          <ShieldCheck size={20} className="text-lime-600 flex-shrink-0 mt-0.5" />
          <p>
            <strong>Qualitätsgarantie:</strong> Gruppengröße standardmäßig 4
            Spieler/innen pro Court. Ab 5 Personen werden parallel 2 Trainer
            eingesetzt, um maximale Betreuungsqualität und Schlaganzahl zu
            gewährleisten.
          </p>
        </div>
      </div>
    </section>
  );
}
