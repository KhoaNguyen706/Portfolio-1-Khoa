import Clouds from "./Clouds";

export default function HeavenBackground() {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden dark:hidden pointer-events-none">
      {/* Warm heavenly gradient base */}
      <div className="absolute top-0 inset-x-0 h-[600px] sm:h-[800px] bg-gradient-to-b from-sky-200/80 via-white/40 to-transparent" />
      
      {/* God-ray burst from top center */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[200vw] h-[60vh] animate-god-ray origin-top"
        style={{
          background: 'conic-gradient(from 180deg at 50% 0%, transparent 0deg, rgba(255,215,0,0.06) 15deg, transparent 30deg, rgba(255,215,0,0.04) 45deg, transparent 60deg, rgba(255,215,0,0.06) 75deg, transparent 90deg, rgba(255,215,0,0.04) 105deg, transparent 120deg, rgba(255,215,0,0.06) 135deg, transparent 150deg, rgba(255,215,0,0.04) 165deg, transparent 180deg, rgba(255,215,0,0.04) 195deg, transparent 210deg, rgba(255,215,0,0.06) 225deg, transparent 240deg, rgba(255,215,0,0.04) 255deg, transparent 270deg, rgba(255,215,0,0.06) 285deg, transparent 300deg, rgba(255,215,0,0.04) 315deg, transparent 330deg, rgba(255,215,0,0.06) 345deg, transparent 360deg)',
        }}
      />

      {/* Sun orb at top */}
      <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-40 h-40 sm:w-60 sm:h-60 rounded-full bg-gradient-to-br from-yellow-200/60 via-amber-100/40 to-transparent blur-3xl animate-pulse" />

      {/* Rainbow arc */}
      <div className="absolute top-[5%] left-1/2 -translate-x-1/2 w-[90vw] sm:w-[70vw] h-[45vw] sm:h-[35vw] rounded-t-full border-t-[3px] sm:border-t-[4px] animate-rainbow"
        style={{
          borderImage: 'linear-gradient(90deg, rgba(255,0,0,0.15), rgba(255,165,0,0.15), rgba(255,255,0,0.15), rgba(0,128,0,0.15), rgba(0,0,255,0.15), rgba(75,0,130,0.15), rgba(238,130,238,0.15)) 1',
        }}
      />
      
      {/* Drifting Clouds — enhanced with more */}
      <div className="relative w-full h-full opacity-80">
        <Clouds />
      </div>
      
      {/* Subtle heavenly glow pulses */}
      <div className="absolute top-1/4 left-1/4 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-yellow-100/40 rounded-full blur-[100px] sm:blur-[150px] animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-[350px] sm:w-[600px] h-[350px] sm:h-[600px] bg-sky-100/50 rounded-full blur-[100px] sm:blur-[150px] animate-pulse delay-700" />
      
      {/* Floating Light Orbs */}
      <div className="absolute top-[60%] left-[80%] w-20 h-20 sm:w-32 sm:h-32 bg-white/40 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-[20%] left-[10%] w-24 h-24 sm:w-40 sm:h-40 bg-yellow-200/20 rounded-full blur-3xl animate-pulse delay-500" />
      <div className="absolute top-[40%] right-[15%] w-16 h-16 sm:w-28 sm:h-28 bg-amber-100/30 rounded-full blur-3xl animate-pulse delay-1000" />

      {/* Golden floating dust particles */}
      {Array.from({ length: 15 }).map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full animate-dust-float"
          style={{
            left: `${(i * 23 + 5) % 95}%`,
            bottom: `${(i * 7) % 30}%`,
            width: `${(i % 3) + 2}px`,
            height: `${(i % 3) + 2}px`,
            background: i % 2 === 0 ? 'rgba(255,215,0,0.4)' : 'rgba(255,255,255,0.5)',
            animationDuration: `${12 + (i % 8) * 2}s`,
            animationDelay: `${(i % 6) * 2}s`,
          }}
        />
      ))}

      {/* Warm vignette edges */}
      <div className="absolute inset-0 pointer-events-none" 
        style={{
          background: 'radial-gradient(ellipse at center, transparent 50%, rgba(255,235,200,0.15) 100%)',
        }}
      />
    </div>
  );
}
