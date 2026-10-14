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
                <h4 className="font-bold text-slate-900 mb-1">Verbraucherstreitbeilegung / Universalschlichtungsstelle</h4>
                <p>
                  Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
                  Verbraucherschlichtungsstelle teilzunehmen.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-slate-900 mb-1">Haftung für Inhalte</h4>
                <p>
                  Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den
                  allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht
                  verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen
                  zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-slate-900 mb-1">Haftung für Links</h4>
                <p>
                  Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben.
                  Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der
                  verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-slate-900 mb-1">Urheberrecht</h4>
                <p>
                  Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen
                  Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der
                  Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
                </p>
              </div>
            </>
          ) : (
            <>
              <div>
                <h4 className="font-bold text-slate-900 mb-1">1. Datenschutz auf einen Blick</h4>
                <p>
                  Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten
                  passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie
                  persönlich identifiziert werden können.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-slate-900 mb-1">2. Verantwortliche Stelle</h4>
                <p>
                  Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber:
                  <br />
                  <strong>{TENNIS_DATA.general.owner}</strong>
                  <br />
                  {TENNIS_DATA.general.schoolName}
                  <br />
                  {TENNIS_DATA.general.address}
                  <br />
                  Telefon: {TENNIS_DATA.general.phone}
                  <br />
                  E-Mail: {TENNIS_DATA.general.email}
                </p>
              </div>

              <div>
                <h4 className="font-bold text-slate-900 mb-1">3. Keine Cookies & keine Tracking-Tools</h4>
                <p>
                  Diese Website verwendet <strong>keine Tracking-Cookies, keine Analyse-Dienste (wie Google Analytics) und kein Werbe-Tracking</strong>.
                  Daher ist für den Besuch dieser Website kein Cookie-Banner erforderlich.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-slate-900 mb-1">4. Lokale Bereitstellung aller Ressourcen (Keine Drittland-Übertragung)</h4>
                <p>
                  Alle Schriften (Systemschriftarten) und Bilddateien werden ausschließlich lokal von unserem eigenen Webserver
                  ausgeliefert. Es werden keine Verbindungen zu externen Servern (wie Google Fonts, CDN-Netzwerken oder externen Bilddatenbanken)
                  hergestellt. Ihre IP-Adresse wird zu keinem Zeitpunkt an externe Drittanbieter weitergegeben.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-slate-900 mb-1">5. Server-Log-Dateien</h4>
                <p>
                  Beim Aufruf unserer Website erhebt und speichert der Provider der Seiten automatisch Informationen in so genannten Server-Log-Dateien,
                  die Ihr Browser automatisch übermittelt. Dies sind: Browsertyp und Browserversion, verwendetes Betriebssystem, Referrer URL, Hostname
                  des zugreifenden Rechners, Uhrzeit der Serveranfrage und IP-Adresse. Grundlage für die Datenverarbeitung ist Art. 6 Abs. 1 lit. f DSGVO
                  zur Gewährleistung des sicheren und stabilen Betriebs der Website.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-slate-900 mb-1">6. Kontaktaufnahme & Schnupperstunden-Anfrage</h4>
                <p>
                  Wenn Sie uns per Formular, E-Mail oder Telefon Anfragen zukommen lassen, werden Ihre Angaben (z.B. Name, E-Mail, Telefonnummer,
                  Spielstärke, Wunsch-Standort) zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert.
                  Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO (vorvertragliche Maßnahmen) bzw. Art. 6 Abs. 1 lit. a DSGVO.
                  Wir geben diese Daten keinesfalls an unberechtigte Dritte weiter.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-slate-900 mb-1">7. Ihre Betroffenenrechte</h4>
                <p>
                  Sie haben nach der DSGVO jederzeit folgende Rechte bezüglich Ihrer personenbezogenen Daten:
                </p>
                <ul className="list-disc pl-5 mt-1 space-y-1">
                  <li>Recht auf Auskunft (Art. 15 DSGVO)</li>
                  <li>Recht auf Berichtigung (Art. 16 DSGVO)</li>
                  <li>Recht auf Löschung (Art. 17 DSGVO)</li>
                  <li>Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
                  <li>Recht auf Datenübertragbarkeit (Art. 20 DSGVO)</li>
                  <li>Widerspruchsrecht gegen die Verarbeitung (Art. 21 DSGVO)</li>
                </ul>
                <p className="mt-1">
                  Hierzu können Sie sich jederzeit an die oben angegebene Adresse wenden. Zudem steht Ihnen ein Beschwerderecht bei der
                  zuständigen Aufsichtsbehörde (z.B. dem Hessischen Beauftragten für Datenschutz und Informationsfreiheit) zu.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-slate-900 mb-1">8. SSL- bzw. TLS-Verschlüsselung</h4>
                <p>
                  Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte eine SSL- bzw. TLS-Verschlüsselung.
                  Eine verschlüsselte Verbindung erkennen Sie am Schloss-Symbol in Ihrer Browserzeile und dem Präfix &bdquo;https://&ldquo;.
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
