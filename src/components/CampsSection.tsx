"use client";

import React, { useState } from "react";
import { Sun, Calendar, Users, Trophy, Check, ArrowRight, Clock, MapPin, FileText, X } from "lucide-react";
import { getAssetUrl } from "@/utils/assets";

interface CampsSectionProps {
  onOpenBooking: (program?: string) => void;
}

type CampSeasonKey = "sommer" | "ostern" | "herbst" | "winter";

interface SeasonConfig {
  id: CampSeasonKey;
  tabLabel: string;
  seasonTitle: string;
  datesHeadline: string;
  weeks?: { label: string; dates: string }[];
  kindergarten: {
    price: string;
    time: string;
    dates: string;
    note: string;
  };
  jugend: {
    price: string;
    time: string;
    dates: string;
    note: string;
  };
  erwachsene: {
    price: string;
    time: string;
    dates: string;
    note: string;
  };
}

const SEASONS: SeasonConfig[] = [
  {
    id: "sommer",
    tabLabel: "☀️ Sommercamp (4 Wochen)",
    seasonTitle: "Sommerferien Hessen 2027",
    datesHeadline: "4 Sommercamp-Wochen auf der Anlage der SG Weiterstadt",
    weeks: [
      { label: "Woche 1", dates: "28.06. – 02.07.2027" },
      { label: "Woche 2", dates: "05.07. – 09.07.2027" },
      { label: "Woche 3", dates: "26.07. – 30.07.2027" },
      { label: "Woche 4", dates: "02.08. – 06.08.2027" },
    ],
    kindergarten: {
      price: "80 €",
      time: "10:30 – 11:30 Uhr",
      dates: "28.06.–02.07. · 05.07.–09.07. · 26.07.–30.07. · 02.08.–06.08.",
      note: "Täglich 1h spielerische Ballschule & Motorik",
    },
    jugend: {
      price: "249 €",
      time: "09:00 – 14:00 Uhr",
      dates: "Woche 1 bis 4 (jeweils Mo–Fr)",
      note: "Täglich 4h Tennis, Athletik & warmes Mittagessen",
    },
    erwachsene: {
      price: "180 €",
      time: "18:00 – 20:00 Uhr",
      dates: "W1: 28.06.–01.07. · W3: 26.07.–29.07. · W4: 02.08.–05.08.",
      note: "Feierabendkurs Mo–Do (2h pro Tag)",
    },
  },
  {
    id: "ostern",
    tabLabel: "🐣 Ostercamp",
    seasonTitle: "Osterferien Hessen 2027",
    datesHeadline: "Ostercamp: 30.03. – 02.04.2027 · SG Weiterstadt",
    kindergarten: {
      price: "64 €",
      time: "10:30 – 11:30 Uhr",
      dates: "30.03. – 02.04.2027 (4 Tage)",
      note: "Perfekt zum Kennenlernen & Saisonstart",
    },
    jugend: {
      price: "199 €",
      time: "09:00 – 14:00 Uhr",
      dates: "30.03. – 02.04.2027 (4 Tage)",
      note: "Vollzeit-Tenniscamp inkl. warmem Mittagessen",
    },
    erwachsene: {
      price: "180 €",
      time: "18:00 – 20:00 Uhr",
      dates: "30.03. – 02.04.2027 (Mo–Do)",
      note: "Intensiv-Feierabendkurs zur Saisonvorbereitung",
    },
  },
  {
    id: "herbst",
    tabLabel: "🍁 Herbstcamp",
    seasonTitle: "Herbstferien Hessen 2027",
    datesHeadline: "Herbstcamp: 04.10. – 08.10.2027 · SG Weiterstadt",
    kindergarten: {
      price: "80 €",
      time: "10:30 – 11:30 Uhr",
      dates: "04.10. – 08.10.2027 (5 Tage)",
      note: "Herbstlicher Tennisspaß für Kindergartenkinder",
    },
    jugend: {
      price: "249 €",
      time: "09:00 – 14:00 Uhr",
      dates: "04.10. – 08.10.2027 (Mo–Fr)",
      note: "Herbst-Intensivwoche mit Matchtraining & Halle",
    },
    erwachsene: {
      price: "180 €",
      time: "18:00 – 20:00 Uhr",
      dates: "04.10. – 07.10.2027 (Mo–Do)",
      note: "Technikfeinschliff & Hallenmatchpraxis",
    },
  },
  {
    id: "winter",
    tabLabel: "❄️ Weihnachtscamp",
    seasonTitle: "Winterferien Hessen 2027 (Weihnachtscamp)",
    datesHeadline: "Weihnachtscamp: 04.01. – 08.01.2027 · Beheizte Halle Weiterstadt",
    kindergarten: {
      price: "80 €",
      time: "10:30 – 11:30 Uhr",
      dates: "04.01. – 08.01.2027 (5 Tage)",
      note: "Winter-Ballschule in der warmen Tennishalle",
    },
    jugend: {
      price: "249 €",
      time: "09:00 – 14:00 Uhr",
      dates: "04.01. – 08.01.2027 (Mo–Fr)",
      note: "Hallen-Powercamp für einen starken Jahresstart",
    },
    erwachsene: {
      price: "180 €",
      time: "18:00 – 20:00 Uhr",
      dates: "04.01. – 07.01.2027 (Mo–Do)",
      note: "Winter-Feierabendkurs in der Tennishalle",
    },
  },
];

export default function CampsSection({ onOpenBooking }: CampsSectionProps) {
  const [activeSeason, setActiveSeason] = useState<CampSeasonKey>("sommer");
  const [flyerModal, setFlyerModal] = useState<"camp" | "kindergarten" | null>(null);

  const current = SEASONS.find((s) => s.id === activeSeason) || SEASONS[0];

  return (
    <section id="camps" className="bg-lime-400 py-16 md:py-24 text-slate-950 relative overflow-hidden">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-12">
          <span className="px-3.5 py-1 rounded-full bg-slate-950 text-lime-400 text-xs font-black tracking-widest uppercase inline-block mb-3.5 shadow-sm">
            Traditionelle Ferien-Highlights
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-950 tracking-tight leading-tight">
            Tenniscamps 2027 in Weiterstadt
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-900 font-semibold max-w-2xl mx-auto leading-relaxed">
            Zu allen 4 hessischen Schulferien! Geleitet von Davis-Cup-Spieler Amir Reza &amp; dem 10-köpfigen Trainerteam auf den Außenplätzen und in der Tennishalle SG Weiterstadt.
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-2.5 text-xs font-bold text-slate-950">
            <span className="px-3 py-1 rounded-full bg-slate-950 text-white">
              ✓ Täglich Tennis &amp; Athletik
            </span>
            <span className="px-3 py-1 rounded-full bg-slate-950 text-white">
              ✓ Warmes Mittagessen (Jugend)
            </span>
            <span className="px-3 py-1 rounded-full bg-slate-950 text-white">
              ✓ Schlechtwetter-Hallengarantie
            </span>
            <span className="px-3 py-1 rounded-full bg-slate-950 text-white">
              ✓ Auch jeweils für Anfänger
            </span>
          </div>
        </div>

        <div className="flex justify-center mb-6 sm:mb-8 overflow-x-auto pb-2 scrollbar-none">
          <div className="inline-flex p-1.5 bg-slate-950 rounded-2xl shadow-2xl gap-1 border border-slate-900">
            {SEASONS.map((s) => {
              const isActive = s.id === activeSeason;
              return (
                <button
                  key={s.id}
                  onClick={() => setActiveSeason(s.id)}
                  className={`px-4 sm:px-5 py-2.5 rounded-xl text-xs font-black transition-all whitespace-nowrap ${
                    isActive
                      ? "bg-lime-400 text-slate-950 shadow-md scale-100"
                      : "text-slate-300 hover:text-white hover:bg-slate-900"
                  }`}
                >
                  {s.tabLabel}
                </button>
              );
            })}
          </div>
        </div>

        <div className="bg-slate-950 text-white rounded-3xl p-5 sm:p-8 md:p-10 shadow-2xl border-4 border-slate-950">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between pb-6 border-b border-slate-800/80 gap-4 mb-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-lime-400/10 border border-lime-400/20 text-lime-400 text-[10px] font-black uppercase tracking-wider mb-2">
                <span className="w-1.5 h-1.5 rounded-full bg-lime-400 animate-pulse" />
                Ausgewählt: {current.seasonTitle}
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight">
                {current.datesHeadline}
              </h3>
            </div>

            {current.weeks && (
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {current.weeks.map((w, i) => (
                  <div
                    key={i}
                    className="px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-800 text-center"
                  >
                    <span className="block text-[10px] font-black text-lime-400 uppercase">
                      {w.label}
                    </span>
                    <span className="block text-xs font-bold text-white">
                      {w.dates}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-stretch">
            <div className="rounded-2xl bg-slate-900/90 border border-slate-800 p-5 sm:p-6 flex flex-col justify-between hover:border-amber-400/50 transition-all group">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="px-2.5 py-0.5 rounded-full bg-amber-400/20 text-amber-300 text-[10px] font-black uppercase tracking-wider">
                    4 – 6 Jahre
                  </span>
                  <span className="text-xs font-bold text-slate-400">Minis</span>
                </div>

                <h4 className="text-xl font-black text-white group-hover:text-amber-300 transition-colors">
                  Tenniskindergarten
                </h4>

                <div className="mt-2 text-3xl font-black text-amber-300">
                  {current.kindergarten.price}{" "}
                  <span className="text-xs text-slate-400 font-semibold tracking-normal">
                    / Woche
                  </span>
                </div>

                <p className="mt-3 text-xs text-slate-400 leading-relaxed font-medium">
                  {current.kindergarten.note}
                </p>

                <div className="mt-4 p-3 rounded-xl bg-slate-950 border border-slate-800/80 space-y-1.5">
                  <div className="flex items-center gap-2 text-xs font-bold text-white">
                    <Clock size={14} className="text-amber-400 flex-shrink-0" />
                    <span>{current.kindergarten.time}</span>
                  </div>
                  <div className="text-[11px] text-slate-400 truncate">
                    Termin: {current.kindergarten.dates}
                  </div>
                </div>
              </div>

              <button
                onClick={() => onOpenBooking(`Tenniskindergarten: ${current.seasonTitle}`)}
                className="mt-5 w-full py-3 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-xs uppercase tracking-wider transition shadow-md active:scale-95"
              >
                Mini-Camp anfragen
              </button>
            </div>

            <div className="rounded-2xl bg-slate-900/90 border-2 border-lime-400 p-5 sm:p-6 flex flex-col justify-between shadow-xl shadow-lime-400/5 relative group">
              <div className="absolute -top-3 right-5 px-3 py-0.5 rounded-full bg-lime-400 text-slate-950 text-[10px] font-black uppercase tracking-wider shadow">
                Sehr beliebt
              </div>

              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="px-2.5 py-0.5 rounded-full bg-lime-400/20 text-lime-400 text-[10px] font-black uppercase tracking-wider">
                    6 – 17 Jahre
                  </span>
                  <span className="text-xs font-bold text-lime-400">Vollzeit</span>
                </div>

                <h4 className="text-xl font-black text-white group-hover:text-lime-400 transition-colors">
                  Jugend-Intensivcamp
                </h4>

                <div className="mt-2 text-3xl font-black text-lime-400">
                  {current.jugend.price}{" "}
                  <span className="text-xs text-slate-400 font-semibold tracking-normal">
                    / Woche
                  </span>
                </div>

                <p className="mt-3 text-xs text-slate-300 leading-relaxed font-medium">
                  {current.jugend.note}
                </p>

                <div className="mt-4 p-3 rounded-xl bg-slate-950 border border-slate-800/80 space-y-1.5">
                  <div className="flex items-center gap-2 text-xs font-bold text-white">
                    <Clock size={14} className="text-lime-400 flex-shrink-0" />
                    <span>{current.jugend.time} (inkl. Mittagessen)</span>
                  </div>
                  <div className="text-[11px] text-slate-400 truncate">
                    Termin: {current.jugend.dates}
                  </div>
                </div>
              </div>

              <button
                onClick={() => onOpenBooking(`Jugendcamp: ${current.seasonTitle}`)}
                className="mt-5 w-full py-3 rounded-xl bg-lime-400 hover:bg-lime-300 text-slate-950 font-black text-xs uppercase tracking-wider transition shadow-md active:scale-95"
              >
                Jugendcamp anfragen
              </button>
            </div>

            <div className="rounded-2xl bg-slate-900/90 border border-slate-800 p-5 sm:p-6 flex flex-col justify-between hover:border-blue-400/50 transition-all group">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="px-2.5 py-0.5 rounded-full bg-blue-500/20 text-blue-400 text-[10px] font-black uppercase tracking-wider">
                    After Work · Ab 18 J.
                  </span>
                  <span className="text-xs font-bold text-slate-400">Erwachsene</span>
                </div>

                <h4 className="text-xl font-black text-white group-hover:text-blue-400 transition-colors">
                  Erwachsenencamp
                </h4>

                <div className="mt-2 text-3xl font-black text-blue-400">
                  {current.erwachsene.price}{" "}
                  <span className="text-xs text-slate-400 font-semibold tracking-normal">
                    / Woche
                  </span>
                </div>

                <p className="mt-3 text-xs text-slate-400 leading-relaxed font-medium">
                  {current.erwachsene.note}
                </p>

                <div className="mt-4 p-3 rounded-xl bg-slate-950 border border-slate-800/80 space-y-1.5">
                  <div className="flex items-center gap-2 text-xs font-bold text-white">
                    <Clock size={14} className="text-blue-400 flex-shrink-0" />
                    <span>{current.erwachsene.time} (Feierabend)</span>
                  </div>
                  <div className="text-[11px] text-slate-400 truncate">
                    Termin: {current.erwachsene.dates}
                  </div>
                </div>
              </div>

              <button
                onClick={() => onOpenBooking(`Erwachsenencamp: ${current.seasonTitle}`)}
                className="mt-5 w-full py-3 rounded-xl bg-blue-500 hover:bg-blue-400 text-white font-black text-xs uppercase tracking-wider transition shadow-md active:scale-95"
              >
                Erwachsenencamp anfragen
              </button>
            </div>
          </div>

          <div className="mt-8 pt-5 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
            <div className="flex items-center gap-2">
              <MapPin size={15} className="text-lime-400 flex-shrink-0" />
              <span>
                Anlage &amp; Tennishalle der Sportgemeinde 1886 e.V. Weiterstadt (Am Aulenberg 2-10 / Am Sportpark 1)
              </span>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => setFlyerModal("camp")}
                className="inline-flex items-center gap-1.5 text-xs text-lime-400 hover:text-lime-300 font-bold transition underline-offset-4 hover:underline"
              >
                <FileText size={14} />
                <span>Flyer Jugend &amp; Erw. ansehen</span>
              </button>
              <span>·</span>
              <button
                onClick={() => setFlyerModal("kindergarten")}
                className="inline-flex items-center gap-1.5 text-xs text-amber-300 hover:text-amber-200 font-bold transition underline-offset-4 hover:underline"
              >
                <FileText size={14} />
                <span>Flyer Kindergarten ansehen</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {flyerModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fade-in"
          onClick={() => setFlyerModal(null)}
        >
          <div
            className="relative bg-slate-900 border border-slate-700 rounded-3xl p-4 max-w-lg w-full max-h-[90vh] flex flex-col items-center shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="w-full flex items-center justify-between pb-3 border-b border-slate-800 mb-3 text-white">
              <span className="font-bold text-xs uppercase text-lime-400">
                {flyerModal === "camp" ? "Flyer Tenniscamp 2027" : "Flyer Tenniskindergarten 2027"}
              </span>
              <button
                onClick={() => setFlyerModal(null)}
                className="p-1 rounded-full text-slate-400 hover:text-white"
              >
                <X size={20} />
              </button>
            </div>
            <div className="overflow-y-auto max-h-[75vh] w-full flex justify-center">
              <img
                src={getAssetUrl(
                  flyerModal === "camp"
                    ? "/images/flyers/tenniscamp-2027.jpg"
                    : "/images/flyers/tenniskindergarten-2027.jpg"
                )}
                alt="Flyer Vorschau"
                className="max-h-full w-auto rounded-xl object-contain shadow-md"
              />
            </div>
            <div className="mt-3 w-full flex justify-end">
              <a
                href={getAssetUrl(
                  flyerModal === "camp"
                    ? "/images/flyers/tenniscamp-2027.jpg"
                    : "/images/flyers/tenniskindergarten-2027.jpg"
                )}
                download
                className="px-4 py-2 rounded-xl bg-lime-400 text-slate-950 font-bold text-xs"
              >
                Flyer herunterladen
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
