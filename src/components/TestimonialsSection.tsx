"use client";

import React from "react";
import { Star, User } from "lucide-react";

interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  rating: number;
}

const TESTIMONIALS: Testimonial[] = [
  {
    id: "fluegge",
    quote:
      "„Amir versteht es meisterhaft, sportlichen Ehrgeiz mit Begeisterung zu verbinden. Die technischen Grundlagen, die er Patrice vermittelt hat, führten direkt zum Podest bei den Bezirksmeisterschaften und im DTB Ranglistenturnier.“",
    author: "Familie Flügge",
    role: "Eltern von Patrice (DTB Ranglistenspieler)",
    rating: 5,
  },
  {
    id: "weber",
    quote:
      "„Durch Amirs 10er-Karte im Privattraining habe ich meine Rückhand und den Aufschlag komplett neu stabilisiert. Sein ATP-Hintergrund ist in jeder Übung spürbar – hochpräzise, aber immer mit Humor und Freude.“",
    author: "Dr. Markus Weber",
    role: "Medenspieler Herren 40, SG Weiterstadt",
    rating: 5,
  },
  {
    id: "sabine-thomas",
    quote:
      "„Unsere Kinder zählen die Wochen bis zum nächsten Tenniscamp! Das Trainerteam ist jung, extrem motiviert und die Organisation auf der Anlage der SG Weiterstadt ist erstklassig. Eine echte Bereicherung für die Region.“",
    author: "Sabine & Thomas K.",
    role: "Eltern von zwei Feriencamp-Teilnehmern",
    rating: 5,
  },
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="bg-[#060b18] text-white py-20 md:py-28 relative overflow-hidden border-t border-slate-800/60">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 max-w-5xl h-48 bg-lime-500/5 blur-3xl pointer-events-none rounded-full" />

      <div className="container mx-auto max-w-7xl px-4 sm:px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-14 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
            Was Eltern & Spieler sagen
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-400">
            Authentisches Feedback aus unserer Tennisschul-Community
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {TESTIMONIALS.map((item) => (
            <div
              key={item.id}
              className="bg-[#0c1424] border border-slate-800/80 rounded-3xl p-7 sm:p-8 flex flex-col justify-between hover:border-slate-700/80 transition-all duration-300 shadow-xl"
            >
              <div>
                <div className="flex items-center gap-1.5 text-lime-400 mb-6">
                  {Array.from({ length: item.rating }).map((_, i) => (
                    <Star
                      key={i}
                      size={18}
                      className="fill-lime-400 text-lime-400"
                    />
                  ))}
                </div>

                <p className="text-slate-200 text-sm leading-relaxed italic font-normal">
                  {item.quote}
                </p>
              </div>

              <div className="flex items-center gap-3.5 pt-8 mt-6 border-t border-slate-800/50">
                <div className="w-11 h-11 rounded-full bg-[#062817] border border-emerald-500/40 flex items-center justify-center text-emerald-400 flex-shrink-0 shadow-inner">
                  <User size={19} className="text-emerald-400" />
                </div>
                <div>
                  <div className="font-bold text-white text-sm tracking-wide">
                    {item.author}
                  </div>
                  <div className="text-xs text-slate-400 mt-0.5">
                    {item.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
