"use client";

import React, { useState } from "react";
import { Check, ArrowRight, ShieldCheck, Gift } from "lucide-react";
import { TENNIS_DATA } from "@/data/tennisData";

interface PricingSectionProps {
  onOpenBooking: (program?: string) => void;
  onOpenVoucher?: () => void;
}

/**
 * Derives presentation metadata for pricing cards (target age group tag, display title, badge).
 *
 * @param title - Raw title from dataset.
 * @param idx - Card index within the currently active season grid.
 * @param isTwoCards - Indicates if a two-column layout (e.g. packages) is active.
 */
const getCardMetadata = (title: string, idx: number, isTwoCards: boolean) => {
  if (isTwoCards) {
    if (idx === 0) {
      return {
        tag: "1-zu-1 Intensiv",
        displayTitle: "Privattraining 10er-Karte",
        topBadge: "Höchste Intensität",
      };
    }
    return {
      tag: "Kostenlos",
      displayTitle: "Kostenloses Schnuppertraining",
      topBadge: "Für Neukunden",
    };
  }

  if (idx === 0) {
    return {
      tag: "5 – 8 Jahre",
      displayTitle: "Kids Ballschule",
      topBadge: undefined,
    };
  }
  if (idx === 1) {
    return {
      tag: "9 – 17 Jahre",
      displayTitle: "Jugendtraining",
      topBadge: "Am beliebtesten",
    };
  }
  return {
    tag: "Ab 18 Jahre",
    displayTitle: "Erwachsenentraining",
    topBadge: undefined,
  };
};

/**
 * Renders the seasonal pricing overview.
 *
 * Implements the approved "Vorschlag B: Plakative Farb-Header" architecture:
 * All cards feature a uniform terracotta-orange header block and deep nachtblau buttons,
 * combining brand cohesion with maximum call-to-action contrast.
 *
 * @param props - Properties containing modal triggers for booking and gift vouchers.
 * @returns The interactive pricing section element.
 */
export default function PricingSection({ onOpenBooking, onOpenVoucher }: PricingSectionProps) {
  const [season, setSeason] = useState<"winter" | "summer" | "packages">("winter");

  const currentCards =
    season === "winter"
      ? TENNIS_DATA.pricingTable.winter
      : season === "summer"
      ? TENNIS_DATA.pricingTable.summer
      : TENNIS_DATA.pricingTable.packages;

  const isTwoCards = currentCards.length === 2;

  return (
    <section id="pricing" className="bg-slate-50 py-20 md:py-28 border-t border-slate-200">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="px-3.5 py-1 rounded-full bg-slate-900 text-lime-400 text-xs font-black tracking-widest uppercase inline-block mb-3 shadow-sm">
            Faire &amp; Transparente Konditionen
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-950 tracking-tight">
            Saison-Angebote &amp; Trainingspreise
          </h2>
          <div className="mt-3.5 h-1.5 w-16 bg-lime-400 mx-auto rounded-full" />
          <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed">
            In Kooperation mit der SG Weiterstadt Tennis. Feste
            4er-Gruppen, geprüfte DTB/ATP-Trainer und volle Kostentransparenz.
          </p>
        </div>

        {/* Season Selector Tabs */}
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
              Privatstunden &amp; Schnuppern
            </button>
          </div>
        </div>

        {/* Cards Grid: Plakative Terracotta-Header + Nachtblau Buttons */}
        <div
          className={`grid gap-7 items-stretch ${
            isTwoCards
              ? "grid-cols-1 md:grid-cols-2 max-w-4xl mx-auto"
              : "grid-cols-1 md:grid-cols-3"
          }`}
        >
          {currentCards.map((card, idx) => {
            const meta = getCardMetadata(card.title, idx, isTwoCards);
            const isHighlighted = Boolean(meta.topBadge);

            return (
              <div
                key={idx}
                className={`relative rounded-3xl overflow-hidden bg-white flex flex-col justify-between transition-all duration-300 border-2 ${
                  isHighlighted
                    ? "border-[#d4742c] shadow-2xl scale-[1.02] md:scale-[1.03] z-10"
                    : "border-orange-200/80 hover:border-[#d4742c] shadow-lg hover:shadow-xl"
                }`}
              >
                {/* Popular / Focus Badge */}
                {meta.topBadge && (
                  <span className="absolute top-3 right-4 z-20 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-lime-400 text-slate-950 shadow-md">
                    {meta.topBadge}
                  </span>
                )}

                {/* Top Section: Plakativer Terracotta-Orange Farbblock */}
                <div>
                  <div className="bg-gradient-to-br from-[#df6a33] via-[#d4742c] to-[#b85e1e] p-7 sm:p-8 text-white relative">
                    <div className="flex items-center justify-between mb-3.5">
                      <span className="px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-white/25 text-white backdrop-blur-sm shadow-sm">
                        {meta.tag}
                      </span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-black text-white mb-1 tracking-tight">
                      {meta.displayTitle}
                    </h3>
                    <p className="text-xs font-semibold text-white/80 mb-6">
                      {card.period}
                    </p>

                    <div className="flex items-baseline gap-1.5 pt-2 border-t border-white/20">
                      <span className="text-4xl sm:text-5xl font-black text-white tracking-tight">
                        {card.price === "0" ? "Kostenlos" : `${card.price} €`}
                      </span>
                      {card.price !== "0" && (
                        <span className="text-xs font-semibold text-white/80">
                          / Person
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Body Section: Clean White Background with Terracotta Highlights */}
                  <div className="p-7 sm:p-8 bg-white">
                    <div className="space-y-3.5 mb-8">
                      {card.features.map((feature, fIdx) => (
                        <div
                          key={fIdx}
                          className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 leading-snug"
                        >
                          <span className="w-4 h-4 rounded-full bg-orange-100 text-[#d4742c] flex items-center justify-center flex-shrink-0 mt-0.5 font-black text-[10px]">
                            ✓
                          </span>
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom Section: Nachtblauer Button (Amir Signature Nachtblau) */}
                <div className="px-7 pb-7 sm:px-8 sm:pb-8 pt-0 bg-white">
                  <button
                    onClick={() => onOpenBooking(meta.displayTitle)}
                    className="w-full py-4 rounded-2xl font-black text-xs uppercase tracking-wider transition-all duration-200 bg-[#0a192f] hover:bg-[#112240] text-white hover:text-lime-400 flex items-center justify-center gap-2 shadow-lg shadow-slate-950/20 active:scale-95 group"
                  >
                    <span>
                      {card.price === "0" ? "Jetzt kostenlos testen" : "Jetzt anfragen"}
                    </span>
                    <ArrowRight
                      size={15}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Quality Guarantee Note */}
        <div className="mt-12 max-w-2xl mx-auto p-4 rounded-2xl bg-white border border-slate-200 text-xs text-slate-600 flex items-start gap-3 shadow-sm">
          <ShieldCheck size={20} className="text-[#d4742c] flex-shrink-0 mt-0.5" />
          <p>
            <strong>Qualitätsgarantie:</strong> Gruppengröße standardmäßig 4
            Spieler/innen pro Court. Ab 5 Personen werden parallel 2 Trainer
            eingesetzt, um maximale Betreuungsqualität und Schlaganzahl zu
            gewährleisten.
          </p>
        </div>

        {/* Gift Voucher Banner */}
        <div className="mt-8 max-w-3xl mx-auto bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 text-white rounded-3xl p-6 sm:p-7 border border-lime-400/30 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-5 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-40 h-40 bg-lime-400/10 rounded-full blur-3xl pointer-events-none" />
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-lime-400 text-slate-950 flex items-center justify-center flex-shrink-0 shadow-md">
              <Gift size={24} />
            </div>
            <div>
              <span className="text-[10px] font-black uppercase tracking-widest text-lime-400">
                Geschenkidee
              </span>
              <h3 className="text-lg sm:text-xl font-black text-white tracking-tight mt-0.5">
                Tennistraining als Gutschein verschenken
              </h3>
              <p className="text-xs text-slate-300 mt-1 max-w-md">
                Verschenken Sie sportliche Momente: Ob Einzeltraining, 10er-Karte oder flexibler Wertgutschein – digital per PDF oder als edle Geschenkkarte.
              </p>
            </div>
          </div>
          <button
            onClick={() => onOpenVoucher?.()}
            className="w-full sm:w-auto px-6 py-3 rounded-full bg-lime-400 hover:bg-lime-300 text-slate-950 font-bold text-xs uppercase tracking-wider transition-all shadow-md hover:shadow-lime-400/20 active:scale-95 flex-shrink-0 flex items-center justify-center gap-2"
          >
            <Gift size={15} />
            <span>Gutschein anfragen</span>
          </button>
        </div>
      </div>
    </section>
  );
}
