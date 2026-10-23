"use client";

import React from "react";
import Link from "next/link";
import { Phone, Mail, MapPin, Trophy, ShieldCheck, Heart } from "lucide-react";
import { TENNIS_DATA } from "@/data/tennisData";
import { getAssetUrl } from "@/utils/assets";

interface FooterProps {
  onOpenLegal: (type: "impressum" | "datenschutz") => void;
  onOpenBooking: () => void;
  onOpenVoucher?: () => void;
}

export default function Footer({ onOpenLegal, onOpenBooking, onOpenVoucher }: FooterProps) {
  return (
    <footer className="bg-slate-950 text-white pt-16 pb-12 border-t border-slate-900">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-14">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img
                src={getAssetUrl("/images/logo-amir.png")}
                alt="Tennisschule Amir Logo"
                className="h-12 w-auto object-contain"
              />
              <div>
                <span className="text-lg font-black tracking-tight text-white block">
                  TENNISSCHULE <span className="text-lime-400">AMIR</span>
                </span>
                <span className="text-[10px] text-slate-400 tracking-wider uppercase font-semibold">
                  Akademie Weiterstadt
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm mb-6">
              Ihre moderne Tennisschule und Akademie in Weiterstadt. Geleitet
              von Davis-Cup-Spieler Amir Reza mit einem 10-köpfigen Trainerteam
              für alle Alters- und Spielklassen. Powered by Yonex.
            </p>

            <div className="flex flex-wrap items-center gap-2 text-[10px] font-bold text-slate-300">
              <span className="px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-lime-400">
                ★ 10-köpfiges Trainerteam
              </span>
              <span className="px-3 py-1 rounded-full bg-slate-900 border border-slate-800">
                GPTCA / ATP A-Level
              </span>
              <span className="px-3 py-1 rounded-full bg-slate-900 border border-slate-800">
                Rafa Nadal Academy Scout
              </span>
              <span className="px-3 py-1 rounded-full bg-slate-900 border border-slate-800">
                Yonex Testcenter
              </span>
            </div>

            <div className="mt-6 flex items-center gap-3">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                Folge uns:
              </span>
              <div className="flex items-center gap-2.5">
                <a
                  href={TENNIS_DATA.general.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Tennisschule Amir auf Instagram"
                  className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-lime-400 hover:border-lime-400/40 hover:bg-slate-800/80 hover:scale-110 active:scale-95 transition-all duration-300 shadow-sm group"
                >
                  <svg
                    viewBox="0 0 24 24"
                    width={18}
                    height={18}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="transition-transform duration-300 group-hover:scale-110"
                  >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                </a>
                <a
                  href={TENNIS_DATA.general.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Amir Academy auf Facebook"
                  className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-lime-400 hover:border-lime-400/40 hover:bg-slate-800/80 hover:scale-110 active:scale-95 transition-all duration-300 shadow-sm group"
                >
                  <svg
                    viewBox="0 0 24 24"
                    width={18}
                    height={18}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="transition-transform duration-300 group-hover:scale-110"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-bold tracking-widest text-white/50 uppercase mb-4">
              Programme
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>
                <a href="#programs" className="hover:text-lime-400 transition">
                  Kids Ballschule (5–8 J.)
                </a>
              </li>
              <li>
                <a href="#programs" className="hover:text-lime-400 transition">
                  Jugendförderung (9–17 J.)
                </a>
              </li>
              <li>
                <a href="#programs" className="hover:text-lime-400 transition">
                  Erwachsenentraining
                </a>
              </li>
              <li>
                <a href="#camps" className="hover:text-lime-400 transition">
                  Feriencamps (Ostern, Sommer, Herbst, Winter)
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-lime-400 transition">
                  Privattraining 10er-Karte
                </a>
              </li>
              <li>
                <a href="#yonex" className="hover:text-lime-400 transition">
                  Yonex Bespannungsservice
                </a>
              </li>
              <li>
                <button
                  onClick={() => onOpenVoucher?.()}
                  className="hover:text-lime-400 transition text-left"
                >
                  Gutschein verschenken
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold tracking-widest text-white/50 uppercase mb-4">
              Standort
            </h4>
            <div className="space-y-4 text-xs text-slate-400">
              <div>
                <a
                  href="#locations"
                  className="font-bold text-white hover:text-lime-400 transition block mb-1"
                >
                  SG Weiterstadt Tennis
                </a>
                <p className="text-[11px] text-slate-400">
                  Am Aulberg 2, 64331 Weiterstadt
                </p>
                <p className="text-[10px] text-lime-400 font-semibold mt-0.5">
                  Halle & Außenplätze
                </p>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-bold tracking-widest text-white/50 uppercase mb-4">
              Direktkontakt
            </h4>
            <ul className="space-y-3 text-xs text-slate-400">
              <li>
                <a
                  href={`tel:${TENNIS_DATA.general.phone.replace(/[^0-9+]/g, "")}`}
                  className="hover:text-lime-400 transition flex items-center gap-2 font-bold text-white"
                >
                  <Phone size={14} className="text-lime-400" />
                  <span>{TENNIS_DATA.general.phone}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${TENNIS_DATA.general.email}`}
                  className="hover:text-lime-400 transition flex items-center gap-2"
                >
                  <Mail size={14} className="text-lime-400" />
                  <span>{TENNIS_DATA.general.email}</span>
                </a>
              </li>
              <li className="pt-2 text-[11px] text-slate-400 leading-normal">
                Montag – Sonntag: 08:00 – 21:00 Uhr
                <br />
                Termine nach Vereinbarung
              </li>
              <li className="pt-2">
                <button
                  onClick={onOpenBooking}
                  className="w-full py-2 px-3 rounded-xl bg-lime-400 text-slate-950 font-bold text-[11px] text-center hover:bg-lime-300 transition"
                >
                  Schnupperstunde buchen
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-12 pb-10 border-t border-slate-900">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-3 mb-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-lime-400/10 border border-lime-400/20 text-lime-400 text-[10px] font-bold uppercase tracking-widest mb-2">
                <span className="w-1.5 h-1.5 rounded-full bg-lime-400 animate-pulse" />
                Netzwerk & Sponsoren
              </div>
              <h3 className="text-lg sm:text-xl font-black text-white tracking-tight">
                Offizielle Partner & Marken
              </h3>
            </div>
            <p className="text-xs text-slate-400 max-w-md">
              Ausgewählte Kooperationen mit weltweiten Tennismarken sowie etablierten Förderern und Traditionsunternehmen aus Darmstadt und der Region.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
            {TENNIS_DATA.partners.map((partner) => {
              const CardContent = (
                <div className="h-full bg-slate-900/60 hover:bg-slate-900 border border-slate-800/80 hover:border-lime-400/50 rounded-2xl p-3.5 flex flex-col items-center justify-between text-center transition-all duration-300 group hover:-translate-y-1 hover:shadow-lg hover:shadow-lime-400/5">
                  <div className="w-full h-14 rounded-xl bg-white flex items-center justify-center p-2 mb-3 shadow-inner overflow-hidden group-hover:scale-105 transition-transform duration-300">
                    <img
                      src={getAssetUrl(partner.logo)}
                      alt={`${partner.name} Logo`}
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>
                  <div className="w-full">
                    <span className="block text-xs font-bold text-white group-hover:text-lime-400 transition-colors truncate">
                      {partner.name}
                    </span>
                    <span className="block text-[10px] text-slate-400 leading-tight mt-0.5 font-medium line-clamp-1">
                      {partner.role}
                    </span>
                  </div>
                </div>
              );

              return partner.url ? (
                <a
                  key={partner.id}
                  href={partner.url}
                  target={partner.url.startsWith("http") ? "_blank" : undefined}
                  rel={partner.url.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="block h-full"
                >
                  {CardContent}
                </a>
              ) : (
                <div key={partner.id} className="block h-full">
                  {CardContent}
                </div>
              );
            })}
          </div>
        </div>

        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            <p>
              © 2026 Tennisschule Amir Reza. Alle Rechte
              vorbehalten.
            </p>
          </div>

          <div className="flex items-center gap-4 text-xs">
            <button
              onClick={() => onOpenLegal("impressum")}
              className="hover:text-white transition underline-offset-4 hover:underline"
            >
              Impressum
            </button>
            <span>·</span>
            <button
              onClick={() => onOpenLegal("datenschutz")}
              className="hover:text-white transition underline-offset-4 hover:underline"
            >
              Datenschutz
            </button>
            <span>·</span>
            <span className="text-slate-400">Powered by Yonex</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
