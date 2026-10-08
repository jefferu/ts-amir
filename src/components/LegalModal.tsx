"use client";

import React from "react";
import { X, ShieldCheck, FileText } from "lucide-react";
import { TENNIS_DATA } from "@/data/tennisData";

interface LegalModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: "impressum" | "datenschutz";
}

export default function LegalModal({ isOpen, onClose, type }: LegalModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-fade-in">
      <div
        className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden max-h-[85vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="bg-slate-900 text-white px-6 py-4 flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center gap-2.5">
            {type === "impressum" ? (
              <FileText className="text-lime-400" size={20} />
            ) : (
              <ShieldCheck className="text-lime-400" size={20} />
            )}
            <h3 className="text-lg font-black text-white">
              {type === "impressum" ? "Impressum & Anbieterkennzeichnung" : "Datenschutzerklärung"}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-slate-400 hover:text-white hover:bg-slate-800 transition"
          >
            <X size={18} />
          </button>
        </div>

        <div className="p-6 sm:p-8 overflow-y-auto flex-1 space-y-4 text-xs sm:text-sm text-slate-600 leading-relaxed">
          {type === "impressum" ? (
            <>
              <div>
                <h4 className="font-bold text-slate-900 mb-1">Angaben gemäß § 5 TMG</h4>
                <p>
                  <strong>{TENNIS_DATA.general.schoolName}</strong>
                  <br />
                  Inhaber: {TENNIS_DATA.general.owner}
                  <br />
                  {TENNIS_DATA.general.address}
                </p>
              </div>

              <div>
                <h4 className="font-bold text-slate-900 mb-1">Kontakt</h4>
                <p>
                  Telefon: {TENNIS_DATA.general.phone}
                  <br />
                  E-Mail: {TENNIS_DATA.general.email}
                  <br />
                  Webseite: www.ts-amir.de
                </p>
              </div>

              <div>
                <h4 className="font-bold text-slate-900 mb-1">Steuernummer</h4>
                <p>Steuernummer: {TENNIS_DATA.general.taxNumber}</p>
              </div>

              <div>
                <h4 className="font-bold text-slate-900 mb-1">Trainingsstätten & Kooperationspartner</h4>
                <p>
                  • SG Weiterstadt Tennis (Am Sportpark 1, 64331 Weiterstadt)
                  <br />
                  • TC Pfungstadt (Christian-Stock-Straße 34, 64319 Pfungstadt)
                </p>
              </div>

              <div>
                <h4 className="font-bold text-slate-900 mb-1">Haftungsausschluss</h4>
                <p>
                  Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die
                  Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine
                  Gewähr übernehmen. Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene
                  Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich.
                </p>
              </div>
            </>
          ) : (
            <>
              <div>
                <h4 className="font-bold text-slate-900 mb-1">1. Datenschutz auf einen Blick</h4>
                <p>
                  Wir freuen uns über Ihr Interesse an unserer Tennisschule. Der Schutz Ihrer
                  persönlichen Daten ist uns ein wichtiges Anliegen. Nachfolgend informieren wir Sie
                  über die Verarbeitung personenbezogener Daten bei Nutzung unseres Angebots.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-slate-900 mb-1">2. Verantwortliche Stelle</h4>
                <p>
                  {TENNIS_DATA.general.owner}
                  <br />
                  {TENNIS_DATA.general.address}
                  <br />
                  E-Mail: {TENNIS_DATA.general.email}
                </p>
              </div>

              <div>
                <h4 className="font-bold text-slate-900 mb-1">3. Erhebung von Daten bei Schnupperanfragen</h4>
                <p>
                  Wenn Sie über unser Kontaktformular oder zur Buchung einer Schnupperstunde Daten
                  übermitteln (Name, Telefonnummer, E-Mail-Adresse, Spielstärke), werden diese
                  ausschließlich zur Durchführung und Terminvereinbarung der Trainingsstunde genutzt.
                  Eine Weitergabe an unberechtigte Dritte findet niemals statt.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-slate-900 mb-1">4. Ihre Rechte</h4>
                <p>
                  Sie haben jederzeit das Recht auf unentgeltliche Auskunft über Ihre gespeicherten
                  personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck der
                  Datenverarbeitung sowie ein Recht auf Berichtigung, Sperrung oder Löschung dieser
                  Daten.
                </p>
              </div>
            </>
          )}
        </div>

        <div className="bg-slate-50 px-6 py-3 border-t border-slate-200 text-right">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-full bg-slate-900 text-white font-bold text-xs hover:bg-slate-800 transition"
          >
            Schließen
          </button>
        </div>
      </div>
    </div>
  );
}
