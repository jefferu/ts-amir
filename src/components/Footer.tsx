"use client";

import React from "react";
import Link from "next/link";
import { Phone, Mail, MapPin, Trophy, ShieldCheck, Heart } from "lucide-react";
import { TENNIS_DATA } from "@/data/tennisData";

interface FooterProps {
  onOpenLegal: (type: "impressum" | "datenschutz") => void;
  onOpenBooking: () => void;
}

/**
 * Modern footer modeled after Rippner Tennis.
 * Includes complete German legal notices, partner certifications, and quick links.
 */
export default function Footer({ onOpenLegal, onOpenBooking }: FooterProps) {
  return (
    <footer className="bg-slate-950 text-white pt-16 pb-12 border-t border-slate-900">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-14">
          {/* Brand Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-xl bg-lime-400 text-slate-950 flex items-center justify-center font-black text-lg">
                🎾
              </div>
              <span className="text-xl font-black tracking-tight text-white">
                TS-<span className="text-lime-400">AMIR</span> TENNIS
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm mb-6">
              Ihre moderne Tennisschule und Akademie in Darmstadt und
              Weiterstadt. Geleitet von Davis-Cup-Spieler und ATP A-Level Coach
              Amir Reza. Powered by Yonex.
            </p>

            {/* Partner Badges */}
            <div className="flex flex-wrap items-center gap-2 text-[10px] font-bold text-slate-300">
              <span className="px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-lime-400">
                ★ GPTCA / ATP A-Level
              </span>
              <span className="px-3 py-1 rounded-full bg-slate-900 border border-slate-800">
                Rafa Nadal Academy Scout
              </span>
              <span className="px-3 py-1 rounded-full bg-slate-900 border border-slate-800">
                Yonex Testcenter
              </span>
            </div>
          </div>

          {/* Quick Links / Programs */}
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
                  Feriencamps & Ostercamps
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
            </ul>
          </div>

          {/* Standorte */}
          <div>
            <h4 className="text-xs font-bold tracking-widest text-white/50 uppercase mb-4">
              Standorte
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
                  Am Sportpark 1, 64331 Weiterstadt
                </p>
                <p className="text-[10px] text-lime-400 font-semibold mt-0.5">
                  Halle & Außenplätze
                </p>
              </div>

              <div>
                <a
                  href="#locations"
                  className="font-bold text-white hover:text-lime-400 transition block mb-1"
                >
                  TC Pfungstadt
                </a>
                <p className="text-[11px] text-slate-400">
                  Christian-Stock-Str. 34, 64319 Pfungstadt
                </p>
                <p className="text-[10px] text-slate-400 font-semibold mt-0.5">
                  7 Sandplätze im Grünen
                </p>
              </div>
            </div>
          </div>

          {/* Direct Contact & Hours */}
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
                Montag – Sonntag: 08:00 – 22:00 Uhr
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

        {/* Bottom Legal & Copyright Bar */}
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
