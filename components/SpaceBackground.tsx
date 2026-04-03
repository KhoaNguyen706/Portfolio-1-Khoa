export default function SpaceBackground() {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden hidden dark:block bg-[#020617] pointer-events-none">
      {/* Dense Starfield */}
      {Array.from({ length: 30 }).map((_, i) => (
        <div
          key={i}
          className={`absolute rounded-full bg-white opacity-${i % 2 === 0 ? '80' : '40'} ${
            i % 3 === 0 ? 'animate-twinkle-1' : 'animate-twinkle-2'
          }`}
          style={{
            top: `${(i * 17) % 100}%`,
            left: `${(i * 31) % 100}%`,
            width: `${(i % 3) + 1}px`,
            height: `${(i % 3) + 1}px`,
            animationDelay: `${(i % 5) * 0.5}s`,
          }}
        />
      ))}
      <div className="absolute top-[10%] left-[20%] w-1 h-1 bg-white rounded-full animate-twinkle-1" />
      <div className="absolute top-[30%] left-[80%] w-1.5 h-1.5 bg-white/80 rounded-full animate-twinkle-2" />
      <div className="absolute top-[80%] left-[70%] w-2 h-2 bg-white/40 rounded-full animate-twinkle-2 shadow-[0_0_10px_rgba(255,255,255,0.8)]" />
      
      {/* Deep Space Nebulas & Rotating Galaxy Swirl */}
      <div className="absolute top-1/2 left-1/2 w-[120vw] h-[120vw] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-10 animate-spinSlow blur-[80px]" style={{ background: 'conic-gradient(from 0deg, transparent, rgba(99,102,241,0.5), transparent, rgba(168,85,247,0.5), transparent)' }} />
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-sky-900/10 rounded-full blur-[150px] animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-indigo-900/10 rounded-full blur-[150px] animate-pulse delay-700" />
      
      {/* Technical Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_80%)]" />

      {/* NASA Telemetry HUD */}
      <div className="absolute top-8 left-8 text-[11px] font-mono text-emerald-400/40 leading-tight tracking-[0.2em] hidden md:block select-none pointer-events-none">
        <p className="mb-2">SYS.ORBITAL_TELEMETRY</p>
        <p>ALT: 408.3 KM</p>
        <p>VEL: 7.66 KM/S</p>
        <p>INC: 51.6 DEG</p>
      </div>

      <div className="absolute bottom-8 right-8 text-[11px] font-mono text-emerald-400/40 leading-tight tracking-[0.2em] hidden md:block select-none pointer-events-none text-right">
        <p>LIFE SUPPORT: NOMINAL</p>
        <p>COMM: LINK ESTABLISHED</p>
        <p className="mt-2 text-emerald-400/20 animate-pulse">RECORDING</p>
      </div>
      
      {/* Target Crosshairs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border-[1px] border-emerald-400/10 rounded-full pointer-events-none hidden md:block">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1px] h-6 bg-emerald-400/40" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-[1px] h-6 bg-emerald-400/40" />
        <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 w-6 h-[1px] bg-emerald-400/40" />
        <div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 w-6 h-[1px] bg-emerald-400/40" />
      </div>

      {/* CSS Glowing Planet/Moon */}
      <div className="absolute top-[15%] right-[10%] w-40 h-40 rounded-full bg-gradient-to-br from-indigo-500/30 to-transparent shadow-[-10px_10px_30px_rgba(99,102,241,0.1)] blur-[2px]" />
      
      {/* Shooting Stars */}
      <div className="absolute top-[-50px] right-[20%] w-[150px] h-[2px] bg-gradient-to-r from-transparent via-white to-white animate-[shootingStar_4s_linear_infinite] opacity-0" style={{ animationDelay: '2s' }} />
      <div className="absolute top-[20%] right-[-50px] w-[200px] h-[2px] bg-gradient-to-r from-transparent via-white to-white animate-[shootingStar_6s_linear_infinite] opacity-0" style={{ animationDelay: '5s' }} />
      <div className="absolute top-[-50px] right-[70%] w-[100px] h-[2px] bg-gradient-to-r from-transparent via-white to-white animate-[shootingStar_8s_linear_infinite] opacity-0" style={{ animationDelay: '1s' }} />

      {/* Floating Astronaut SVG */}
      <div className="absolute bottom-[20%] left-[10%] w-24 h-24 text-white/40 animate-[floatAstronaut_6s_ease-in-out_infinite] drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]">
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C8.69 2 6 4.69 6 8v3c0 .16.03.31.06.46C5.45 11.83 5 12.63 5 13.5v2C5 16.33 5.67 17 6.5 17h.17A5.99 5.99 0 0 0 12 20c2.81 0 5.17-1.93 5.81-4.5h.69c.83 0 1.5-.67 1.5-1.5v-2c0-.87-.45-1.67-1.06-2.04.03-.15.06-.3.06-.46V8c0-3.31-2.69-6-6-6zm0 2c2.21 0 4 1.79 4 4v1.5h-8V8c0-2.21 1.79-4 4-4zm-4 7.5h8C16.85 11.5 18 12.65 18 14c0 1.35-1.15 2.5-2.5 2.5v1A3.49 3.49 0 0 1 12 21c-1.93 0-3.5-1.57-3.5-3.5v-1c-1.35 0-2.5-1.15-2.5-2.5 0-1.35 1.15-2.5 2.5-2.5zM7 14h1v2H7v-2zm9 0h1v2h-1v-2z" />
        </svg>
      </div>

      {/* Satellite SVG Drifting By */}
      <div className="absolute top-[0vh] left-[0vw] w-12 h-12 text-blue-200/50 drop-shadow-[0_0_15px_rgba(191,219,254,0.3)] animate-[satelliteOrbit_40s_linear_infinite]">
        <svg viewBox="0 0 24 24" fill="currentColor">
          <rect x="10" y="8" width="4" height="8" rx="0.5" />
          <path d="M4 9h5v6H4z M15 9h5v6h-5z" opacity="0.8" />
          <path d="M12 8V4 M10 4h4" stroke="currentColor" strokeWidth="1" strokeLinecap="square" />
        </svg>
      </div>

      {/* Falling Asteroids */}
      <div className="absolute top-[0vh] left-[20vw] w-8 h-8 text-slate-500 animate-asteroidFall opacity-0" style={{ animationDuration: '25s', animationDelay: '10s' }}>
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M15 2l5 4-2 7-6 9-9-4L2 11l6-8z" />
        </svg>
      </div>
      <div className="absolute top-[0vh] left-[60vw] w-12 h-12 text-slate-600 animate-asteroidFall opacity-0" style={{ animationDuration: '35s', animationDelay: '5s' }}>
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M19 4l3 6-3 9-8 3-9-7L4 5l9-3z" />
        </svg>
      </div>
    </div>
  );
}
