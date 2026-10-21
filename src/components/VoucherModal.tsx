"use client";

import React, { useState } from "react";
import { X, CheckCircle2, Gift, Mail, Phone, Sparkles, Send, Copy, Check } from "lucide-react";
import { TENNIS_DATA } from "@/data/tennisData";
import { getAssetUrl } from "@/utils/assets";

interface VoucherModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const VOUCHER_PRESETS = [
  { id: "50eur", label: "50 €", description: "Wertgutschein" },
  { id: "100eur", label: "100 €", description: "Beliebter Wert" },
  { id: "150eur", label: "150 €", description: "Intensiv" },
  { id: "1h_single", label: "1 Std. Einzeltraining", description: "Inkl. Trainer & Platz" },
  { id: "10er_card", label: "10er-Karte", description: "Privattraining-Paket" },
  { id: "camp", label: "Feriencamp", description: "Camp-Teilnahme" },
  { id: "custom", label: "Wunschbetrag", description: "Frei wählbar" },
];

export default function VoucherModal({ isOpen, onClose }: VoucherModalProps) {
  const [selectedPreset, setSelectedPreset] = useState("100eur");
  const [customAmount, setCustomAmount] = useState("");
  const [recipientName, setRecipientName] = useState("");
  const [senderName, setSenderName] = useState("");
  const [senderEmail, setSenderEmail] = useState("");
  const [senderPhone, setSenderPhone] = useState("");
  const [message, setMessage] = useState("");
  const [deliveryType, setDeliveryType] = useState<"digital" | "postal">("digital");
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const currentVoucherTitle =
    selectedPreset === "custom"
      ? customAmount
        ? `${customAmount} € Gutschein`
        : "Individueller Wertgutschein"
      : VOUCHER_PRESETS.find((p) => p.id === selectedPreset)?.label || "Gutschein";

  const emailSubject = `Gutscheinanfrage: ${currentVoucherTitle} für ${recipientName || "einen Tennisfreund"}`;
  const emailBody = `Hallo Amir,

ich möchte gerne einen Tennisschule-Gutschein anfragen:

- Gutschein: ${currentVoucherTitle}
- Beschenkte(r): ${recipientName || "Nicht angegeben"}
- Persönliche Grußbotschaft:
"${message || "Keine persönliche Nachricht"}"

- Gewünschtes Format: ${deliveryType === "digital" ? "Digital per PDF (zum Selbstausdrucken)" : "Gedruckte Geschenkkarte"}

Kontaktdaten für Rückfragen & Abwicklung:
- Name des Bestellers: ${senderName || "Nicht angegeben"}
- E-Mail: ${senderEmail || "Nicht angegeben"}
- Telefon: ${senderPhone || "Nicht angegeben"}

Bitte senden Sie mir die Zahlungsdetails und die weiteren Schritte zu.

Sportliche Grüße,
${senderName || ""}`;

  const mailtoUrl = `mailto:${TENNIS_DATA.general.email}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (typeof window !== "undefined") {
      window.location.href = mailtoUrl;
    }
    setSubmitted(true);
  };

  const handleCopyText = () => {
    if (navigator?.clipboard) {
      navigator.clipboard.writeText(`${emailSubject}\n\n${emailBody}`);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/75 backdrop-blur-sm animate-fade-in">
      <div
        className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="bg-slate-900 text-white px-6 py-5 flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-lime-400 text-slate-950 flex items-center justify-center shadow-md">
              <Gift size={20} className="text-slate-950" />
            </div>
            <div>
              <span className="text-[10px] font-bold tracking-widest text-lime-400 uppercase">
                Geschenkidee
              </span>
              <h3 className="text-lg sm:text-xl font-black text-white">
                Tennis-Gutschein verschenken
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

        <div className="p-5 sm:p-7 overflow-y-auto flex-1">
          {submitted ? (
            <div className="text-center py-6">
              <div className="w-16 h-16 bg-lime-100 text-lime-600 rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce">
                <CheckCircle2 size={36} />
              </div>
              <h4 className="text-2xl font-black text-slate-900 mb-2">
                Gutscheinanfrage vorbereitet!
              </h4>
              <p className="text-slate-600 max-w-md mx-auto mb-6 text-sm leading-relaxed">
                Vielen Dank, <strong>{senderName || "Tennisfreund"}</strong>! Ihre Gutscheinanfrage wurde für Cheftrainer Amir Reza erstellt. Ihr E-Mail-Programm sollte sich soeben mit der vorbereiteten E-Mail geöffnet haben.
              </p>

              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 max-w-md mx-auto mb-6 text-left space-y-2.5 text-xs text-slate-700">
                <div className="font-bold text-slate-900 text-sm border-b border-slate-200 pb-2 flex items-center justify-between">
                  <span>Zusammenfassung:</span>
                  <span className="text-lime-600">{currentVoucherTitle}</span>
                </div>
                <div>
                  <span className="text-slate-500">Für:</span> <strong>{recipientName || "Freund/in"}</strong>
                </div>
                <div>
                  <span className="text-slate-500">Zustellung:</span> <strong>{deliveryType === "digital" ? "PDF per E-Mail" : "Gedruckte Geschenkkarte"}</strong>
                </div>
                <div>
                  <span className="text-slate-500">Empfänger:</span> <strong>{TENNIS_DATA.general.email}</strong>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 justify-center mb-4">
                <a
                  href={mailtoUrl}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-lime-400 text-slate-950 font-bold text-xs hover:bg-lime-300 transition shadow"
                >
                  <Mail size={16} /> E-Mail jetzt absenden
                </a>
                <button
                  onClick={handleCopyText}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-slate-900 text-white font-bold text-xs hover:bg-slate-800 transition"
                >
                  {copied ? <Check size={16} className="text-lime-400" /> : <Copy size={16} />}
                  <span>{copied ? "In Zwischenablage kopiert" : "Mailtext kopieren"}</span>
                </button>
              </div>

              <button
                onClick={handleReset}
                className="text-xs text-slate-500 hover:text-slate-800 underline transition"
              >
                Fenster schließen
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white rounded-2xl p-4 sm:p-5 border border-lime-400/30 shadow-lg relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-lime-400/10 rounded-full blur-2xl pointer-events-none" />
                <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-3">
                  <div className="flex items-center gap-2">
                    <img
                      src={getAssetUrl("/images/logo-amir.png")}
                      alt="Logo"
                      className="h-7 w-auto object-contain"
                    />
                    <span className="text-[10px] font-black tracking-widest text-lime-400 uppercase">
                      Geschenkgutschein · Tennisschule Amir
                    </span>
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full bg-lime-400/20 text-lime-400 text-[10px] font-bold">
                    Vorschau
                  </span>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3">
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-slate-400 block">
                      Gutschein über:
                    </span>
                    <span className="text-lg sm:text-xl font-black text-white text-lime-400">
                      {currentVoucherTitle}
                    </span>
                    <div className="mt-1 text-xs text-slate-300">
                      Für: <strong className="text-white">{recipientName || "Name des Beschenkten"}</strong>
                    </div>
                  </div>
                  {message && (
                    <div className="text-[11px] text-slate-400 italic max-w-xs border-l-2 border-lime-400/40 pl-2">
                      &bdquo;{message}&ldquo;
                    </div>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">
                  1. Gutschein-Art & Wert auswählen
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {VOUCHER_PRESETS.map((preset) => (
                    <button
                      type="button"
                      key={preset.id}
                      onClick={() => setSelectedPreset(preset.id)}
                      className={`p-2.5 rounded-xl border text-left transition-all ${
                        selectedPreset === preset.id
                          ? "bg-slate-900 text-white border-slate-900 ring-2 ring-lime-400/40 shadow-sm"
                          : "bg-white text-slate-800 border-slate-200 hover:bg-slate-50"
                      }`}
                    >
                      <div className="font-bold text-xs truncate">{preset.label}</div>
                      <div className={`text-[10px] ${selectedPreset === preset.id ? "text-lime-300" : "text-slate-500"}`}>
                        {preset.description}
                      </div>
                    </button>
                  ))}
                </div>

                {selectedPreset === "custom" && (
                  <div className="mt-2.5">
                    <label className="block text-[11px] font-semibold text-slate-700 mb-1">
                      Wunschbetrag in Euro (€):
                    </label>
                    <input
                      type="number"
                      min="10"
                      step="5"
                      required
                      placeholder="z. B. 75"
                      value={customAmount}
                      onChange={(e) => setCustomAmount(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-lime-400"
                    />
                  </div>
                )}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-900 uppercase tracking-wider mb-1.5">
                    2. Name des Beschenkten
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="z. B. Patrice Mustermann"
                    value={recipientName}
                    onChange={(e) => setRecipientName(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-lime-400"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-900 uppercase tracking-wider mb-1.5">
                    Format & Zustellung
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() => setDeliveryType("digital")}
                      className={`p-2 rounded-xl border text-xs font-bold transition text-center ${
                        deliveryType === "digital"
                          ? "bg-slate-900 text-white border-slate-900"
                          : "bg-white text-slate-700 border-slate-200 hover:bg-slate-50"
                      }`}
                    >
                      PDF zum Drucken
                    </button>
                    <button
                      type="button"
                      onClick={() => setDeliveryType("postal")}
                      className={`p-2 rounded-xl border text-xs font-bold transition text-center ${
                        deliveryType === "postal"
                          ? "bg-slate-900 text-white border-slate-900"
                          : "bg-white text-slate-700 border-slate-200 hover:bg-slate-50"
                      }`}
                    >
                      Geschenkkarte
                    </button>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-900 uppercase tracking-wider mb-1.5">
                  Persönliche Grußnachricht (optional auf dem Gutschein)
                </label>
                <textarea
                  rows={2}
                  placeholder="z. B. Alles Liebe zum Geburtstag! Viel Spaß beim Training mit Amir."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-lime-400 resize-none"
                />
              </div>

              <div className="pt-2 border-t border-slate-200">
                <label className="block text-xs font-bold text-slate-900 uppercase tracking-wider mb-3">
                  3. Ihre Kontaktdaten (Besteller)
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div>
                    <input
                      type="text"
                      required
                      placeholder="Ihr Name *"
                      value={senderName}
                      onChange={(e) => setSenderName(e.target.value)}
                      className="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-lime-400"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      required
                      placeholder="Ihre E-Mail *"
                      value={senderEmail}
                      onChange={(e) => setSenderEmail(e.target.value)}
                      className="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-lime-400"
                    />
                  </div>
                  <div>
                    <input
                      type="tel"
                      placeholder="Telefon (optional)"
                      value={senderPhone}
                      onChange={(e) => setSenderPhone(e.target.value)}
                      className="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-lime-400"
                    />
                  </div>
                </div>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
                <p className="text-[11px] text-slate-500 leading-tight">
                  Unverbindliche Anfrage. Amir Reza meldet sich persönlich bei Ihnen mit den Zahlungs- & Abwicklungsdetails.
                </p>
                <button
                  type="submit"
                  className="w-full sm:w-auto px-6 py-3 rounded-full bg-slate-950 text-lime-400 hover:bg-slate-900 font-bold text-xs uppercase tracking-wider transition shadow flex items-center justify-center gap-2 flex-shrink-0"
                >
                  <Send size={14} />
                  <span>Gutschein jetzt anfragen</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
