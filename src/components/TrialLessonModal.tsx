"use client";

import React, { useState } from "react";
import { X, CheckCircle2, Calendar, Phone, MapPin, Award, Clock } from "lucide-react";
import { TENNIS_DATA } from "@/data/tennisData";

interface TrialLessonModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialProgram?: string;
}

/**
 * Interactive trial lesson and booking modal.
 * Enables prospective players to book free trial sessions or camp inquiries.
 */
export default function TrialLessonModal({
  isOpen,
  onClose,
  initialProgram,
}: TrialLessonModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    ageGroup: "jugend",
    skillLevel: "anfaenger",
    location: "weiterstadt",
    program: initialProgram || "schnuppern",
    notes: "",
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate real-time submission
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-fade-in">
      <div
        className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-slate-900 text-white px-6 py-5 flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-lime-400 flex items-center justify-center text-slate-950 font-black shadow-md">
              🎾
            </div>
            <div>
              <span className="text-[11px] font-bold tracking-widest text-lime-400 uppercase">
                TS-Amir Tennis Akademie
              </span>
              <h3 className="text-xl font-black text-white">
                Kostenlose Schnupperstunde buchen
              </h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            aria-label="Schließen"
          >
            <X size={20} />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 overflow-y-auto flex-1">
          {submitted ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-lime-100 text-lime-600 rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce">
                <CheckCircle2 size={36} />
              </div>
              <h4 className="text-2xl font-black text-slate-900 mb-2">
                Anfrage erfolgreich gesendet!
              </h4>
              <p className="text-slate-600 max-w-md mx-auto mb-6 text-sm leading-relaxed">
                Vielen Dank, <strong>{formData.name || "Sportfreund"}</strong>!
                Cheftrainer Amir Reza meldet sich innerhalb von 24 Stunden
                telefonisch oder per E-Mail bei dir, um den optimalen Termin für
                deine Schnupperstunde abzustimmen.
              </p>

              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 max-w-md mx-auto mb-6 text-left space-y-2 text-xs text-slate-700">
                <div className="flex items-center gap-2">
                  <MapPin size={15} className="text-lime-600 flex-shrink-0" />
                  <span>
                    Gewählter Standort:{" "}
                    <strong>
                      {formData.location === "weiterstadt"
                        ? "SG Weiterstadt (Halle & Sand)"
                        : "TC Pfungstadt"}
                    </strong>
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Award size={15} className="text-lime-600 flex-shrink-0" />
                  <span>
                    Schläger & Bälle:{" "}
                    <strong>Werden kostenfrei zur Verfügung gestellt</strong>
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock size={15} className="text-lime-600 flex-shrink-0" />
                  <span>
                    Dauer: <strong>45 Min. persönliche Analyse & Match</strong>
                  </span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href={`tel:${TENNIS_DATA.general.phone.replace(/[^0-9+]/g, "")}`}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-slate-900 text-white font-bold text-sm hover:bg-slate-800 transition"
                >
                  <Phone size={16} /> Direkt anrufen ({TENNIS_DATA.general.phone})
                </a>
                <button
                  onClick={handleReset}
                  className="px-6 py-3 rounded-full border border-slate-300 text-slate-700 font-bold text-sm hover:bg-slate-100 transition"
                >
                  Fenster schließen
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="bg-lime-50 border border-lime-200 rounded-2xl p-3.5 flex items-start gap-3 text-xs text-lime-900">
                <Award className="w-5 h-5 text-lime-700 flex-shrink-0 mt-0.5" />
                <p>
                  <strong>Unverbindlich & Kostenfrei:</strong> Schnupperstunden
                  sind für Neukunden 100% kostenlos. Leihschläger von Yonex und
                  Bälle stellen wir dir vor Ort bereit!
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Vollständiger Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    placeholder="z.B. Alex Müller"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-lime-400 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Telefonnummer *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    placeholder="0170 1234567"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-lime-400 focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  E-Mail Adresse *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  placeholder="ihre.email@example.de"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-lime-400 focus:border-transparent"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Altersgruppe
                  </label>
                  <select
                    value={formData.ageGroup}
                    onChange={(e) =>
                      setFormData({ ...formData, ageGroup: e.target.value })
                    }
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-lime-400 bg-white"
                  >
                    <option value="kids">Kids (5 – 8 Jahre)</option>
                    <option value="jugend">Jugend (9 – 17 Jahre)</option>
                    <option value="erwachsene">Erwachsene (ab 18)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Spielstärke
                  </label>
                  <select
                    value={formData.skillLevel}
                    onChange={(e) =>
                      setFormData({ ...formData, skillLevel: e.target.value })
                    }
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-lime-400 bg-white"
                  >
                    <option value="anfaenger">Kompletter Anfänger</option>
                    <option value="wiedereinsteiger">Wiedereinsteiger</option>
                    <option value="fortgeschritten">Fortgeschritten</option>
                    <option value="turnierspieler">Meden- / Turnierspieler</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Wunsch-Standort
                  </label>
                  <select
                    value={formData.location}
                    onChange={(e) =>
                      setFormData({ ...formData, location: e.target.value })
                    }
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-lime-400 bg-white"
                  >
                    <option value="weiterstadt">SG Weiterstadt</option>
                    <option value="pfungstadt">TC Pfungstadt</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Nachricht oder Terminwunsch (optional)
                </label>
                <textarea
                  rows={2}
                  value={formData.notes}
                  onChange={(e) =>
                    setFormData({ ...formData, notes: e.target.value })
                  }
                  placeholder="z.B. Bevorzugt Dienstag oder Donnerstag ab 17:00 Uhr..."
                  className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-lime-400 resize-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-2xl bg-slate-950 text-white hover:bg-slate-800 font-black text-sm tracking-wide transition shadow-lg flex items-center justify-center gap-2 group"
                >
                  <span>Kostenlose Schnupperstunde absenden</span>
                  <span className="w-6 h-6 rounded-full bg-lime-400 text-slate-900 inline-flex items-center justify-center font-bold text-xs group-hover:scale-110 transition-transform">
                    →
                  </span>
                </button>
              </div>

              <p className="text-[11px] text-center text-slate-500">
                Ihre Angaben werden vertraulich gemäß DSGVO verarbeitet und nicht an
                Dritte weitergegeben.
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
