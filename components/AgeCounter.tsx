"use client";

import { useEffect, useState } from "react";

const BIRTH_DATE = new Date("2006-09-17T18:00:00");

function formatAge() {
  const now = new Date();
  let years = now.getFullYear() - BIRTH_DATE.getFullYear();
  let latestBirthday = new Date(now.getFullYear(), BIRTH_DATE.getMonth(), BIRTH_DATE.getDate());
  
  if (now < latestBirthday) {
    years--;
    latestBirthday = new Date(now.getFullYear() - 1, BIRTH_DATE.getMonth(), BIRTH_DATE.getDate());
  }
  
  const diffTime = Math.abs(now.getTime() - latestBirthday.getTime());
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
  
  return { years, days: diffDays };
}

export default function AgeCounter() {
  const [age, setAge] = useState(() => formatAge());

  useEffect(() => {
    const interval = window.setInterval(() => {
      setAge(formatAge());
    }, 60000);
    return () => window.clearInterval(interval);
  }, []);

  return (
    <div className="flex items-baseline gap-1.5 sm:gap-2">
      <span className="text-3xl sm:text-4xl md:text-5xl font-black text-foreground">{age.years}</span>
      <span className="text-xs sm:text-sm font-bold text-foreground/40 uppercase tracking-widest">Years</span>
      <span className="text-xl sm:text-2xl md:text-3xl font-black text-foreground ml-1.5 sm:ml-2">{age.days}</span>
      <span className="text-xs sm:text-sm font-bold text-foreground/40 uppercase tracking-widest">Days</span>
    </div>
  );
}
