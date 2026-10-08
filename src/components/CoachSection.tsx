"use client";

import React from "react";
import {
  Trophy,
  Award,
  Medal,
  CheckCircle2,
  Quote,
  Sparkles,
  ExternalLink,
  ChevronRight,
} from "lucide-react";
import { TENNIS_DATA } from "@/data/tennisData";
import { getAssetUrl } from "@/utils/assets";

interface CoachSectionProps {
  onOpenBooking: () => void;
}

/**
 * High-authority Cheftrainer section showcasing Amir Reza's ATP credentials,
 * Davis Cup experience, and Rafa Nadal Academy scouting role.
 */
export default function CoachSection({ onOpenBooking }: CoachSectionProps) {
  return (
    <section id="coach" className="bg-white py-20 md:py-28 border-t border-slate-200">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6">
        {/* Top Split: Coach Bio & Visual */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          {/* Visual Column */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md rounded-3xl overflow-hidden shadow-2xl border-4 border-slate-100 bg-gradient-to-b from-slate-800 to-slate-950 flex items-center justify-center pt-6">
              <img
                src={getAssetUrl("/images/amir.png")}
                alt="Cheftrainer Amir Reza"
                className="w-auto h-[480px] object-contain object-bottom hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent pointer-events-none"></div>

              {/* Floating Quote Card */}
              <div className="absolute bottom-5 left-5 right-5 p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200 shadow-xl">
                <Quote size={20} className="text-lime-600 mb-1" />
                <p className="text-xs text-slate-800 font-bold italic leading-snug">
                  "{TENNIS_DATA.coach.quote}"
                </p>
                <span className="block mt-2 text-[10px] font-black uppercase tracking-wider text-slate-500">
                  – Amir Reza, Cheftrainer
                </span>
              </div>
            </div>
          </div>

          {/* Bio & Authority Details */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 text-lime-400 text-xs font-black tracking-widest uppercase mb-4">
              <Trophy size={13} />
              <span>Internationales Spitzenniveau</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-black text-slate-950 tracking-tight leading-tight mb-2">
              Cheftrainer Amir Reza
            </h2>
            <p className="text-sm font-extrabold uppercase tracking-wider text-lime-700 mb-6">
              Ehemaliger Davis-Cup-Spieler & ATP / GPTCA A-Level Coach
            </p>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6">
              {TENNIS_DATA.coach.bio}
            </p>

            <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200 mb-8">
              <div className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <Sparkles size={14} className="text-lime-600" />
                <span>Profispieler-Historie & Challenger Tour</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Als Profi und Nationalspieler stand Amir unter anderem gegen
                Weltklasse-Profis wie <strong>Thomas Johansson (ATP 7)</strong>,{" "}
                <strong>Andrej Pavel (ATP 13)</strong>,{" "}
                <strong>Hernan Gumy (ATP 39)</strong> und{" "}
                <strong>Sjeng Schalken (ATP 11)</strong> auf dem Court. Dieses
                taktische Verständnis gibt er heute direkt an seine Schüler
                weiter.
              </p>
            </div>

            {/* Direct CTA */}
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={onOpenBooking}
                className="px-6 py-3.5 rounded-full bg-slate-900 text-white font-bold text-xs tracking-wide hover:bg-slate-800 transition shadow-md flex items-center justify-center gap-2"
              >
                <span>Training bei Amir anfragen</span>
                <ChevronRight size={14} className="text-lime-400" />
              </button>

              <a
                href="#pricing"
                className="px-6 py-3.5 rounded-full border border-slate-300 text-slate-800 font-bold text-xs tracking-wide hover:bg-slate-100 transition text-center"
              >
                10er-Karten & Tarife ansehen
              </a>
            </div>
          </div>
        </div>

        {/* Credentials Grid */}
        <div className="mb-20">
          <div className="text-center max-w-xl mx-auto mb-10">
            <h3 className="text-2xl font-black text-slate-950">
              Offizielle Trainer-Lizenzen & Partnerschaften
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 mt-2">
              Zertifiziert durch die renommiertesten Tennisverbände der Welt
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {TENNIS_DATA.coach.credentials.map((cred, idx) => (
              <div
                key={idx}
                className={`p-6 rounded-2xl border transition-all ${
                  cred.highlight
                    ? "bg-slate-900 text-white border-slate-800 shadow-xl"
                    : "bg-slate-50 text-slate-900 border-slate-200"
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <span
                    className={`text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-md ${
                      cred.highlight
                        ? "bg-lime-400 text-slate-950"
                        : "bg-slate-200 text-slate-700"
                    }`}
                  >
                    {cred.issuer}
                  </span>
                  <Award
                    size={18}
                    className={cred.highlight ? "text-lime-400" : "text-lime-600"}
                  />
                </div>
                <h4 className="text-base font-bold mb-2">{cred.title}</h4>
                <p
                  className={`text-xs leading-relaxed ${
                    cred.highlight ? "text-slate-300" : "text-slate-600"
                  }`}
                >
                  {cred.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Student Achievements / Hall of Fame */}
        <div className="bg-slate-900 rounded-3xl p-8 sm:p-12 text-white relative overflow-hidden">
          <div className="relative z-10">
            <div className="max-w-xl mb-8">
              <span className="text-lime-400 text-xs font-black tracking-widest uppercase block mb-1">
                Erfolgreiche Nachwuchsförderung
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-white">
                Erfolge unserer Schützlinge
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-2">
                Zahlreiche Bezirksmeister, Kreispokalsieger und
                ITF-Turniergewinner haben ihre Grundlagen bei TS-Amir erlernt.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {TENNIS_DATA.coach.studentSuccesses.map((s, idx) => (
                <div
                  key={idx}
                  className="bg-slate-800/80 rounded-2xl p-5 border border-slate-700/80 backdrop-blur-sm"
                >
                  <div className="flex items-center gap-2 text-lime-400 text-xs font-black uppercase mb-1">
                    <Medal size={14} />
                    <span>{s.competition}</span>
                  </div>
                  <h4 className="text-base font-black text-white mb-1">
                    {s.player}
                  </h4>
                  <div className="text-xs font-bold text-lime-300 mb-2">
                    {s.title}
                  </div>
                  <p className="text-[11px] text-slate-300 leading-normal">
                    {s.details}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
