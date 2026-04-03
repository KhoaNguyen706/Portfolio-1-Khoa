"use client";

import { useEffect, useState } from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function VisitCounter() {
  const [visits, setVisits] = useState(0);

  useEffect(() => {
    const currentVisits = parseInt(localStorage.getItem("visits") || "0", 10);
    const newVisits = currentVisits + 1;
    localStorage.setItem("visits", newVisits.toString());
    setVisits(newVisits);
  }, []);

  const socials = [
    { icon: <FaEnvelope />, href: "mailto:anhkhoa17092006@gmail.com", label: "Email" },
    { icon: <FaGithub />, href: "https://github.com/KhoaNguyen706", label: "GitHub" },
    { icon: <FaLinkedin />, href: "https://www.linkedin.com/in/khoa-nguyen-558732335/", label: "LinkedIn" },
  ];

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 flex flex-col items-end gap-2 sm:gap-3 translate-x-0">
      <div className="glass px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-[10px] sm:text-xs font-bold tracking-widest text-foreground/70 uppercase shadow-lg">
        {visits.toString().padStart(4, "0")} VISITS
      </div>
      
      <div className="flex gap-1.5 sm:gap-2">
        {socials.map((social, i) => (
          <a
            key={i}
            href={social.href}
            target={social.href.startsWith("http") ? "_blank" : undefined}
            rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
            aria-label={social.label}
            className="flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-full glass hover:bg-accent/10 hover:text-accent transition-all duration-300 hover:scale-110 active:scale-95 shadow-lg text-sm sm:text-base"
          >
            {social.icon}
          </a>
        ))}
      </div>
    </div>
  );
}
