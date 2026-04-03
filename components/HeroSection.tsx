import AgeCounter from "./AgeCounter";

export default function HeroSection() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center px-4 pt-24 sm:pt-32 pb-16 sm:pb-20">
      <div className="z-10 w-full max-w-5xl text-center space-y-6 sm:space-y-8">
        <div className="inline-flex items-center gap-2 px-2.5 sm:px-3 py-1 rounded-full glass text-[10px] sm:text-xs font-semibold tracking-wider text-accent uppercase animate-fade-in">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
          </span>
          <span className="hidden sm:inline">Software Engineer Intern @ SCE · Open for internships</span>
          <span className="sm:hidden">SWE Intern @ SCE · Open for internships</span>
        </div>

        <h1 className="text-3xl sm:text-5xl md:text-8xl font-black tracking-tight text-foreground leading-[1.1]">
          I&apos;m{" "}
          <span className="relative inline-block">
            <span className="bg-gradient-to-r from-accent via-accent-secondary to-accent bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">Khoa Nguyen</span>
            
            {/* Orbiting Space Shuttle (Dark Mode, Desktop Only) */}
            <div className="absolute inset-0 hidden md:dark:block pointer-events-none animate-[spin_8s_linear_infinite] z-20">
              <div className="absolute -top-12 left-1/2 -ml-4 w-8 h-8 text-white rotate-45 transform origin-center animate-pulse drop-shadow-[0_0_8px_rgba(34,211,238,0.8)]">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.34 5.34l-1.42-1.42c-.39-.39-1.02-.39-1.41 0L15.1 5.34c-1.89.54-3.56 1.63-4.82 3.12L3.18 4.79C2.79 4.4 2.16 4.4 1.77 4.79l-1.42 1.42c-.39.39-.39 1.02 0 1.41l5.58 5.58-1.74 3.01L1.44 19.46c-.39.39-.39 1.02 0 1.41l1.41 1.41c.39.39 1.02.39 1.41 0l3.25-2.75 3.01-1.74 5.58 5.58c.39.39 1.02.39 1.41 0l1.41-1.41c.39-.39.39-1.02 0-1.41l-3.66-7.1c1.48-1.27 2.58-2.93 3.12-4.82l1.42-1.42c.39-.39.39-1.02 0-1.41zM14.65 6.76l1.41-1.41 1.41 1.41-1.41 1.41-1.41-1.41zm-6.57 6.57l-1.41 1.41-1.41-1.41 1.41-1.41 1.41 1.41z" />
                </svg>
              </div>
            </div>
          </span>
        </h1>
        
        <p className="max-w-2xl mx-auto text-base sm:text-xl md:text-2xl font-medium text-foreground/60 leading-relaxed px-2">
          CS student at SJSU, building 
          <span className="text-foreground"> Backend, AI, and DevOps </span> 
          systems that scale — not just look good in a demo.
        </p>

        <div className="pt-8 sm:pt-12 flex flex-col items-center gap-6 sm:gap-8">
          <div className="bento-card inline-block">
            <p className="text-xs sm:text-sm font-semibold text-foreground/40 uppercase tracking-widest mb-2">Current Age</p>
            <AgeCounter />
          </div>
          
          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 w-full sm:w-auto px-4 sm:px-0">
            <a 
              href="#projects" 
              className="w-full sm:w-auto text-center px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-foreground text-background font-bold transition-all hover:scale-105 active:scale-95 shadow-xl"
            >
              View My Work
            </a>
            <a 
              href="#about" 
              className="w-full sm:w-auto text-center px-6 sm:px-8 py-3 sm:py-4 rounded-full glass font-bold transition-all hover:bg-foreground/5 active:scale-95"
            >
              About Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}