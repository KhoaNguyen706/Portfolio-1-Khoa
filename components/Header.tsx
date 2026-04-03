"use client";

import { useEffect, useState } from "react";
import { HiMoon, HiSun, HiMenu, HiX } from "react-icons/hi";

export default function Header() {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("theme") as "light" | "dark" | null;
    const preferred = window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
    const initial = stored ?? preferred;
    setTheme(initial);
    document.documentElement.classList.toggle("dark", initial === "dark");
    setMounted(true);

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme, mounted]);

  const toggleTheme = () =>
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));

  const isDark = mounted && theme === "dark";

  const navItems = [
    { name: "About", href: "#about" },
    { name: "Interests", href: "#interests" },
    { name: "Projects", href: "#projects" },
  ];

  return (
    <header
      className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[92%] max-w-2xl transition-all duration-300 ${
        scrolled ? "top-4" : "top-6"
      }`}
    >
      <nav className="glass rounded-full px-4 sm:px-6 py-2.5 sm:py-3 flex items-center justify-between shadow-lg">
        <div className="flex items-center gap-4 sm:gap-6">
          <a href="#" className="text-lg font-bold bg-gradient-to-r from-accent to-accent-secondary bg-clip-text text-transparent">
            KN.
          </a>
          {/* Desktop nav links */}
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-foreground/70 hover:text-accent transition-colors"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
            onClick={toggleTheme}
            className="relative flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-foreground/5 hover:bg-foreground/10 transition-all duration-300 active:scale-95"
          >
            {isDark ? (
              <HiMoon className="h-4 w-4 sm:h-5 sm:w-5 text-accent" />
            ) : (
              <HiSun className="h-4 w-4 sm:h-5 sm:w-5 text-amber-500" />
            )}
          </button>

          {/* Mobile hamburger */}
          <button
            type="button"
            aria-label="Menu"
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden relative flex h-9 w-9 items-center justify-center rounded-full bg-foreground/5 hover:bg-foreground/10 transition-all duration-300 active:scale-95"
          >
            {menuOpen ? (
              <HiX className="h-4 w-4 text-foreground" />
            ) : (
              <HiMenu className="h-4 w-4 text-foreground" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <div className="md:hidden mt-2 glass rounded-2xl px-4 py-3 shadow-lg animate-menu-slide">
          <div className="flex flex-col gap-3">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="text-sm font-medium text-foreground/70 hover:text-accent transition-colors py-1"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
