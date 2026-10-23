"use client";

import React, { useState, useEffect, useCallback } from "react";
import { Camera, Maximize2, ChevronLeft, ChevronRight, X, Images } from "lucide-react";
import { getAssetUrl } from "@/utils/assets";

type GalleryCategory = "alle" | "camps" | "jugend" | "erwachsene" | "anlage";

interface GalleryItem {
  id: string;
  src: string;
  title: string;
  subtitle: string;
  category: Exclude<GalleryCategory, "alle">;
  badge: string;
}

const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "camp-pokale-jugend",
    src: "/images/gallery/camp-pokale-jugend.jpg",
    title: "Große Siegerehrung beim Feriencamp",
    subtitle: "Strahlende Gesichter & goldene Pokale nach dem Abschlussturnier in Weiterstadt",
    category: "camps",
    badge: "Feriencamps & Pokale",
  },
  {
    id: "camp-gruppe-weiterstadt",
    src: "/images/gallery/camp-gruppe-weiterstadt.jpg",
    title: "Sommercamp-Team auf roter Asche",
    subtitle: "Cheftrainer Amir Reza mit unseren Camp-Kids und Jugendlichen vor dem Akademie-Banner",
    category: "camps",
    badge: "Sommercamp",
  },
  {
    id: "erwachsene-camp-team",
    src: "/images/gallery/erwachsene-camp-team.jpg",
    title: "After-Work & Erwachsenentraining",
    subtitle: "Starker Teamspirit beim intensiven Abend- und Mannschaftstraining auf der Anlage",
    category: "erwachsene",
    badge: "Erwachsene",
  },
  {
    id: "jugend-team-yonex",
    src: "/images/gallery/jugend-team-yonex.jpg",
    title: "Nachwuchs-Mannschaft & Turnierkader",
    subtitle: "Systematische Jugendförderung im offiziellen Yonex-Teamoutfit mit Cheftrainer Amir",
    category: "jugend",
    badge: "Jugendkader",
  },
  {
    id: "minis-pokale-amir",
    src: "/images/gallery/minis-pokale-amir.jpg",
    title: "Tenniskindergarten & Ballschule",
    subtitle: "Spielerischer Einstieg für unsere Jüngsten (4–8 Jahre) mit eigenen Siegerpokalen",
    category: "jugend",
    badge: "Minis & Kids",
  },
  {
    id: "anlage-sandplaetze",
    src: "/images/gallery/anlage-sandplaetze.jpg",
    title: "12 Top-gepflegte Sandplätze",
    subtitle: "Weitläufige Außenanlage der SG Weiterstadt unter blauem Himmel",
    category: "anlage",
    badge: "Anlage Weiterstadt",
  },
  {
    id: "yonex-schlaeger-netz",
    src: "/images/gallery/yonex-schlaeger-netz.jpg",
    title: "Offizielles Yonex Testcenter",
    subtitle: "Aktuelle Turnierschläger direkt vor Ort auf dem Platz Probe spielen",
    category: "anlage",
    badge: "Yonex Partner",
  },
  {
    id: "yonex-racket-asche",
    src: "/images/gallery/yonex-racket-asche.jpg",
    title: "Präzision bis ins Detail",
    subtitle: "Professioneller 24h-Bespannungsservice & hochwertige Trainingsbälle",
    category: "anlage",
    badge: "Equipment",
  },
];

const CATEGORIES: { id: GalleryCategory; label: string }[] = [
  { id: "alle", label: "Alle Einblicke" },
  { id: "camps", label: "Feriencamps & Pokale" },
  { id: "jugend", label: "Kids & Jugend" },
  { id: "erwachsene", label: "Erwachsene" },
  { id: "anlage", label: "Anlage & Equipment" },
];

export default function GallerySection() {
  const [activeCategory, setActiveCategory] = useState<GalleryCategory>("alle");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredItems =
    activeCategory === "alle"
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  const bentoItems = filteredItems.slice(0, 5);
  const extraCount = Math.max(0, filteredItems.length - 5);

  const handlePrev = useCallback(() => {
    setLightboxIndex((prev) => {
      if (prev === null) return null;
      return (prev - 1 + filteredItems.length) % filteredItems.length;
    });
  }, [filteredItems.length]);

  const handleNext = useCallback(() => {
    setLightboxIndex((prev) => {
      if (prev === null) return null;
      return (prev + 1) % filteredItems.length;
    });
  }, [filteredItems.length]);

  useEffect(() => {
    if (lightboxIndex === null) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightboxIndex(null);
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [lightboxIndex, handlePrev, handleNext]);

  const currentLightboxItem =
    lightboxIndex !== null && filteredItems[lightboxIndex]
      ? filteredItems[lightboxIndex]
      : null;

  return (
    <section id="gallery" className="bg-white py-20 md:py-28 relative overflow-hidden">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-10 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-black tracking-widest text-slate-700 uppercase mb-3">
              <Camera size={14} className="text-[#C85A32]" />
              <span>Impressionen vom Platz</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight leading-tight">
              Einblicke ins Training &amp; Camp-Leben
            </h2>
            <div className="mt-4 h-1.5 w-16 bg-lime-400 rounded-full"></div>
            <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed">
              Echte Momente auf der Anlage der SG Weiterstadt: Von den ersten Pokalen
              im Tenniskindergarten über unsere Feriencamps bis zum After-Work-Training.
            </p>
          </div>

          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
            {CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => {
                    setActiveCategory(cat.id);
                    setLightboxIndex(null);
                  }}
                  className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all ${
                    isActive
                      ? "bg-slate-950 text-lime-400 shadow-md"
                      : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-12 gap-3 sm:gap-4 lg:gap-5">
          {bentoItems.map((item, idx) => {
            const isHeroTile = idx === 0;
            const isLastBentoTile = idx === 4 && extraCount > 0;

            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setLightboxIndex(idx)}
                className={`group relative rounded-2xl sm:rounded-3xl overflow-hidden bg-slate-900 text-left focus:outline-none focus:ring-2 focus:ring-lime-400 shadow-sm hover:shadow-xl transition-all duration-300 ${
                  isHeroTile
                    ? "col-span-2 lg:col-span-6 lg:row-span-2 aspect-[16/10] lg:aspect-auto lg:min-h-[460px]"
                    : "col-span-1 lg:col-span-3 aspect-square sm:aspect-[4/3] lg:aspect-auto lg:min-h-[220px]"
                }`}
              >
                <img
                  src={getAssetUrl(item.src)}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent opacity-90 group-hover:opacity-100 transition-opacity" />

                <div className="absolute top-3 left-3 sm:top-4 sm:left-4 flex items-center gap-2">
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-slate-950/80 text-lime-400 backdrop-blur-md border border-white/10">
                    {item.badge}
                  </span>
                </div>

                <div className="absolute top-3 right-3 sm:top-4 sm:right-4 w-8 h-8 rounded-full bg-white/15 backdrop-blur-md text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <Maximize2 size={14} />
                </div>

                <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 text-white">
                  <h3
                    className={`font-black leading-snug ${
                      isHeroTile ? "text-lg sm:text-2xl" : "text-xs sm:text-sm"
                    }`}
                  >
                    {item.title}
                  </h3>
                  {isHeroTile && (
                    <p className="mt-1 text-xs sm:text-sm text-slate-200 line-clamp-2">
                      {item.subtitle}
                    </p>
                  )}
                </div>

                {isLastBentoTile && (
                  <div className="absolute inset-0 bg-slate-950/75 backdrop-blur-[2px] flex flex-col items-center justify-center text-white p-4 text-center group-hover:bg-slate-950/65 transition-colors">
                    <span className="w-11 h-11 rounded-full bg-lime-400 text-slate-950 flex items-center justify-center font-black text-sm mb-2 shadow-lg group-hover:scale-110 transition-transform">
                      +{extraCount}
                    </span>
                    <span className="text-xs sm:text-sm font-black tracking-wide">
                      Alle {filteredItems.length} Fotos ansehen
                    </span>
                    <span className="text-[11px] text-slate-300 mt-0.5">
                      Galerie öffnen
                    </span>
                  </div>
                )}
              </button>
            );
          })}
        </div>

        <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-slate-100">
          <p className="text-xs text-slate-500">
            Klicke auf ein beliebiges Bild für die Vollbild-Ansicht zum Durchblättern.
          </p>
          <button
            type="button"
            onClick={() => setLightboxIndex(0)}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-slate-950 text-white hover:bg-slate-800 text-xs font-black tracking-wide transition shadow-sm"
          >
            <Images size={15} className="text-lime-400" />
            <span>Alle {filteredItems.length} Fotos in Großansicht öffnen</span>
          </button>
        </div>
      </div>

      {currentLightboxItem && lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-slate-950/95 backdrop-blur-md flex flex-col justify-between p-4 sm:p-6 animate-fade-in"
          onClick={() => setLightboxIndex(null)}
        >
          <div
            className="flex items-center justify-between max-w-6xl w-full mx-auto text-white"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 rounded-full bg-lime-400 text-slate-950 text-xs font-black uppercase tracking-wider">
                {currentLightboxItem.badge}
              </span>
              <span className="text-xs font-bold text-slate-400">
                Foto {lightboxIndex + 1} von {filteredItems.length}
              </span>
            </div>

            <button
              type="button"
              onClick={() => setLightboxIndex(null)}
              className="w-10 h-10 rounded-full bg-slate-800/80 hover:bg-slate-700 text-white flex items-center justify-center transition"
              aria-label="Galerie schließen"
            >
              <X size={20} />
            </button>
          </div>

          <div
            className="relative flex-1 flex items-center justify-center max-w-6xl w-full mx-auto my-4 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {filteredItems.length > 1 && (
              <button
                type="button"
                onClick={handlePrev}
                className="absolute left-2 sm:left-4 z-10 w-11 h-11 rounded-full bg-slate-900/85 hover:bg-lime-400 text-white hover:text-slate-950 border border-white/15 flex items-center justify-center transition shadow-xl"
                aria-label="Vorheriges Bild"
              >
                <ChevronLeft size={22} />
              </button>
            )}

            <div className="flex flex-col items-center max-h-full">
              <img
                src={getAssetUrl(currentLightboxItem.src)}
                alt={currentLightboxItem.title}
                className="max-h-[65vh] sm:max-h-[70vh] w-auto object-contain rounded-2xl shadow-2xl border border-white/10"
              />
              <div className="mt-4 text-center max-w-xl px-4">
                <h4 className="text-base sm:text-lg font-black text-white">
                  {currentLightboxItem.title}
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 mt-1">
                  {currentLightboxItem.subtitle}
                </p>
              </div>
            </div>

            {filteredItems.length > 1 && (
              <button
                type="button"
                onClick={handleNext}
                className="absolute right-2 sm:right-4 z-10 w-11 h-11 rounded-full bg-slate-900/85 hover:bg-lime-400 text-white hover:text-slate-950 border border-white/15 flex items-center justify-center transition shadow-xl"
                aria-label="Nächstes Bild"
              >
                <ChevronRight size={22} />
              </button>
            )}
          </div>

          <div
            className="max-w-4xl w-full mx-auto flex items-center justify-center gap-2 overflow-x-auto py-2 scrollbar-none"
            onClick={(e) => e.stopPropagation()}
          >
            {filteredItems.map((thumb, idx) => {
              const isSelected = idx === lightboxIndex;
              return (
                <button
                  key={thumb.id}
                  type="button"
                  onClick={() => setLightboxIndex(idx)}
                  className={`relative w-14 h-14 sm:w-16 sm:h-16 rounded-xl overflow-hidden flex-shrink-0 transition-all ${
                    isSelected
                      ? "ring-2 ring-lime-400 scale-105 opacity-100"
                      : "opacity-50 hover:opacity-85"
                  }`}
                >
                  <img
                    src={getAssetUrl(thumb.src)}
                    alt={thumb.title}
                    className="w-full h-full object-cover"
                  />
                </button>
              );
            })}
          </div>
        </div>
      )}
    </section>
  );
}
