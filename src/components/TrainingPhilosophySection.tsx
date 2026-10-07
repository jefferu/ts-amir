"use client";

import React from "react";
import { Zap, HeartPulse, Brain, Target, Shield, CheckCircle } from "lucide-react";

/**
 * Training Philosophy and modern stroke technique showcase.
 * Emphasizes Rafael Nadal topspin methodology, mental conditioning, and footwork.
 */
export default function TrainingPhilosophySection() {
  const pillars = [
    {
      icon: Zap,
      title: "Moderner Topspin & Schlagmechanik",
      subtitle: "Vorbild Rafael Nadal",
      description:
        "Der moderne Topspin hat das Damentennis und Herrentennis revolutioniert. Wir vermitteln von klein auf die korrekte Peitschen- und Hüftrotation für maximale Ballsicherheit bei hohem Tempo.",
      badge: "Technik",
    },
    {
      icon: HeartPulse,
      title: "Beinarbeit & Explosivkraft",
      subtitle: "Die Basis jedes Gewinnschlags",
      description:
        "Die beste Schlagtechnik nützt wenig bei müden Beinen. Ein sauberer Aufschlag und zügige Richtungswechsel basieren auf Rhythmus, Split-Step und gezieltem Beinkraft-Training.",
      badge: "Athletik",
    },
    {
      icon: Brain,
      title: "Mentale Stärke & Matchhärte",
      subtitle: "Spielen, um zu gewinnen",
      description:
        "Viele Matches werden im Kopf entschieden. Amir trainiert gezielt den Umgang mit Breakbällen und engen Spielständen, damit Spieler mit Mut und Entschlossenheit vollenden.",
      badge: "Mental",
    },
    {
      icon: Target,
      title: "Taktischer Spielaufbau",
      subtitle: "Vom ersten Punkt zum Matchball",
      description:
        "Winkelspiel, Tempowechsel, Slice-Variationen und gezieltes Angreifen der gegnerischen Schwachstellen. Wir lehren kluges Tennis mit System.",
      badge: "Taktik",
    },
  ];

  return (
    <section id="philosophy" className="bg-white py-20 md:py-28">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="px-3 py-1 rounded-full bg-lime-100 text-lime-850 text-xs font-black tracking-widest uppercase inline-block mb-3">
            Die Amir-Reza Methode
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-950 tracking-tight">
            Vier Säulen für Ihren persönlichen Matcherfolg
          </h2>
          <div className="mt-3.5 h-1.5 w-16 bg-lime-400 mx-auto rounded-full"></div>
          <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed">
            Unser ganzheitlicher Trainingsansatz kombiniert die Faszination und
            den Spaß des Tennissports mit den Erkenntnissen internationaler
            Spitzenakademien.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="bg-slate-50 rounded-3xl p-7 border border-slate-200/80 hover:bg-white hover:shadow-xl hover:border-slate-300 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-slate-900 text-lime-400 flex items-center justify-center shadow-md group-hover:scale-110 group-hover:bg-lime-400 group-hover:text-slate-950 transition-all">
                      <Icon size={24} />
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-md bg-white border border-slate-200 text-slate-600">
                      {pillar.badge}
                    </span>
                  </div>

                  <h3 className="text-lg font-black text-slate-900 mb-1 leading-snug">
                    {pillar.title}
                  </h3>
                  <div className="text-xs font-bold text-lime-700 mb-3">
                    {pillar.subtitle}
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
