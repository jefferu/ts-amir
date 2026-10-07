"use client";

import React from "react";
import { MapPin, Clock, Shield, Check, Phone, Mail, ArrowUpRight } from "lucide-react";
import { TENNIS_DATA } from "@/data/tennisData";

interface LocationsSectionProps {
  onOpenBooking: (program?: string) => void;
}

/**
 * Locations section inspired by Rippner Tennis ("Where To Find Us").
 * Displays the primary tennis training hubs (SG Weiterstadt & TC Pfungstadt).
 */
export default function LocationsSection({ onOpenBooking }: LocationsSectionProps) {
  return (
    <section id="locations" className="bg-white py-20 md:py-28">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6">
        {/* Section Heading */}
        <div className="max-w-xl mb-14">
          <div className="inline-flex items-center gap-1.5 text-xs font-black tracking-widest text-slate-700 uppercase mb-3">
            <MapPin size={14} className="text-lime-600" />
            <span>Wo wir trainieren</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-950 tracking-tight leading-tight">
            Zwei Top-Standorte im Raum Darmstadt & Weiterstadt
          </h2>
          <div className="mt-4 h-1.5 w-16 bg-lime-400 rounded-full"></div>
          <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed">
            Egal ob im Winter in der modernen, beheizten Tennishalle oder im
            Sommer auf bestens gepflegter roter Asche – wir bieten ganzjährige
            Top-Bedingungen für jedes Match.
          </p>
        </div>

        {/* Locations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {TENNIS_DATA.locations.map((loc) => (
            <div
              key={loc.id}
              className="group bg-slate-50/70 rounded-3xl overflow-hidden border border-slate-200 hover:shadow-2xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Visual Header */}
                <div className="relative h-60 overflow-hidden bg-slate-900">
                  <img
                    src={
                      loc.id === "weiterstadt"
                        ? "https://images.unsplash.com/photo-1554068865-24cecd4e34b8?auto=format&fit=crop&w=1000&q=80"
                        : "https://images.unsplash.com/photo-1622279457486-62dcc4a431d6?auto=format&fit=crop&w=1000&q=80"
                    }
                    alt={loc.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent"></div>

                  <span
                    className={`absolute top-4 left-4 px-3 py-1 rounded-full text-[11px] font-black uppercase tracking-wider shadow-sm ${loc.badgeColor}`}
                  >
                    {loc.badge}
                  </span>

                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="text-2xl font-black">{loc.name}</h3>
                    <p className="text-xs text-slate-300 flex items-center gap-1.5 mt-0.5">
                      <MapPin size={13} className="text-lime-400" />
                      {loc.address}, {loc.city}
                    </p>
                  </div>
                </div>

                {/* Body Details */}
                <div className="p-6 sm:p-8 space-y-5">
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {loc.description}
                  </p>

                  {/* Quick Facilities Chips */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-700 pt-2 border-t border-slate-200">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-lime-500"></span>
                      <span>{loc.courts}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-lime-500"></span>
                      <span>{loc.indoor}</span>
                    </div>
                  </div>

                  {/* Highlights Bullet List */}
                  <div className="space-y-2 pt-2 border-t border-slate-200">
                    <span className="text-[11px] font-extrabold uppercase tracking-wider text-slate-400 block">
                      Ausstattung & Vorteile:
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
                      {loc.highlights.map((h, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <Check size={14} className="text-lime-600 flex-shrink-0" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Card Footer / Action */}
              <div className="p-6 sm:px-8 bg-slate-100/90 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-xs text-slate-600">
                  <Clock size={14} className="text-slate-500" />
                  <span>{loc.hours}</span>
                </div>

                <button
                  onClick={() => onOpenBooking(loc.id)}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-5 py-2.5 rounded-full bg-slate-900 text-white font-bold text-xs hover:bg-slate-800 transition shadow-sm"
                >
                  <span>Training anfragen</span>
                  <ArrowUpRight size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Note under locations */}
        <div className="mt-12 text-center text-xs sm:text-sm text-slate-500 flex flex-wrap items-center justify-center gap-4">
          <span className="flex items-center gap-1.5">
            <Check size={16} className="text-lime-600" /> Keine feste Vereinsmitgliedschaft zum Schnuppern nötig
          </span>
          <span className="hidden sm:inline">·</span>
          <span>
            Fragen zu Weiterstadt?{" "}
            <a
              href="mailto:tennis@sg-weiterstadt.de"
              className="text-slate-900 font-bold hover:underline"
            >
              tennis@sg-weiterstadt.de
            </a>
          </span>
        </div>
      </div>
    </section>
  );
}
