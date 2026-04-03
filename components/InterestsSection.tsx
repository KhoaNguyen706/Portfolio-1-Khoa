"use client";

import Image from "next/image";
import {
  FaGamepad,
  FaFilm,
  FaFutbol,
  FaRunning,
  FaHeart
} from "react-icons/fa";

const mainInterests = [
  { label: "Anime", value: "Attack on Titan", image: "/assets/interests/anime_aot1.png", span: "col-span-1 sm:col-span-1 md:col-span-2 md:row-span-1" },
  { label: "Movie", value: "Interstellar", image: "/assets/interests/interstellar.jpg", span: "col-span-1 sm:col-span-1 md:col-span-2 md:row-span-1" },
  { label: "GOAT", value: "Lionel Messi", image: "/assets/interests/messi.png", span: "col-span-2 md:col-span-2 md:row-span-2" },
  { label: "Music", value: "See You Again", image: "/assets/interests/seeyouagain.png", span: "col-span-1 sm:col-span-1 md:col-span-2 md:row-span-1" },
  { label: "World Class", value: "Kevin De Bruyne", image: "/assets/interests/kdb.png", span: "col-span-1 sm:col-span-1 md:col-span-1 md:row-span-2" },
  { label: "World Class", value: "Julian Alvarez", image: "/assets/interests/alvarez_action.png", span: "col-span-1 sm:col-span-1 md:col-span-1 md:row-span-1" },
  { label: "Vietnamese Food", value: "Com Tam", image: "/assets/interests/food.png", span: "col-span-1 sm:col-span-1 md:col-span-1 md:row-span-1" },
  { label: "Sport", value: "Soccer", image: "/assets/interests/soccer_goal.png", span: "col-span-1 sm:col-span-1 md:col-span-1 md:row-span-1" },
  { label: "Fastfood", value: "In-N-Out", image: "/assets/interests/inandout.png", span: "col-span-1 sm:col-span-1 md:col-span-1 md:row-span-1" },
  { label: "Music", value: "Phonk, Lo-Fi", image: "/assets/interests/lofi.png", span: "col-span-2 md:col-span-2 md:row-span-1" },
  { label: "Team", value: "Manchester City", image: "/assets/interests/mancity.png", span: "col-span-2 md:col-span-2 md:row-span-1" },
];

export default function InterestsSection() {
  return (
    <section id="interests" className="relative px-4 py-16 sm:py-24 bg-foreground/[0.01]">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8 sm:mb-12 text-right">
          <h2 className="text-sm font-bold tracking-[0.2em] text-accent-secondary uppercase mb-3 sm:mb-4">Passions & Interests</h2>
          <h3 className="text-2xl sm:text-4xl md:text-5xl font-black text-foreground">What keeps me inspired.</h3>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 auto-rows-[150px] sm:auto-rows-[180px] md:auto-rows-[200px]">
          {/* Main Visual Interests */}
          {mainInterests.map((item, idx) => (
            <div
              key={idx}
              className={`bento-card overflow-hidden p-0 group relative cursor-pointer select-none
                transition-all duration-500 hover:shadow-2xl
                active:scale-105 active:z-50 active:shadow-accent/40 active:translate-y-[-8px] ${item.span}`}
            >
              <Image
                src={item.image}
                alt={item.label}
                fill
                className={`transition-transform duration-700 opacity-60 group-hover:opacity-100 object-cover ${["Attack on Titan", "Kevin De Bruyne", "Interstellar", "See You Again", "Julian Alvarez"].includes(item.value) ? "object-top" : "object-center"
                  } group-hover:scale-110`}
              />
              <div className="absolute inset-x-0 bottom-0 p-3 sm:p-6 bg-gradient-to-t from-background/90 to-transparent">
                <p className="text-[10px] sm:text-xs font-bold text-foreground/40 uppercase tracking-widest mb-0.5 sm:mb-1">{item.label}</p>
                <p className="text-sm sm:text-lg font-bold">{item.value}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
