"use client";

import React from "react";
import { ArrowRight, BellRing, Sparkles, Calendar, Check } from "lucide-react";
import { TENNIS_DATA } from "@/data/tennisData";

interface AnnouncementsSectionProps {
  onOpenBooking: (program?: string) => void;
}

export default function AnnouncementsSection({
  onOpenBooking,
}: AnnouncementsSectionProps) {
  return (
    <section className="bg-slate-100/80 py-16 md:py-20 border-y border-slate-200">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-black tracking-widest text-slate-700 uppercase mb-2">
              <BellRing size={14} className="text-lime-600" />
              <span>Aktuelles & Highlights</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-950 tracking-tight">
              Ankündigungen & Events
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-500 max-w-md sm:text-right">
            Verpasse keine Anmeldefristen für Saisonkurse, Feriencamps und
            unsere exklusiven Yonex Testtage in Weiterstadt.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TENNIS_DATA.announcements.map((item) => (
            <div
              key={item.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-200/90 flex flex-col"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-slate-900">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent"></div>

                <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[10px] font-black tracking-wider uppercase bg-lime-400 text-slate-950 shadow-sm">
                  {item.badge}
                </span>

                <span className="absolute top-3 right-3 px-2.5 py-1 rounded-full text-[10px] font-bold bg-white/90 text-slate-800 backdrop-blur-sm">
                  {item.tag}
                </span>
              </div>

              <div className="p-5 flex flex-col flex-1 justify-between bg-white">
                <div>
                  <h3 className="text-base font-bold text-slate-900 mb-2 leading-snug group-hover:text-lime-700 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed line-clamp-3 mb-4">
                    {item.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[11px] font-bold text-slate-500 flex items-center gap-1">
                    <Calendar size={12} className="text-lime-600" />
                    {item.date}
                  </span>

                  <button
                    onClick={() => onOpenBooking(item.id)}
                    className="inline-flex items-center gap-1 text-xs font-black text-slate-950 hover:text-lime-600 transition-colors"
                  >
                    <span>{item.ctaText}</span>
                    <ArrowRight size={13} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
