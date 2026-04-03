export default function SpaceBackground() {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden hidden dark:block bg-[#020617] pointer-events-none">
      
      {/* ============================================ */}
      {/* LAYER 1: Ultra-Dense Starfield — 80 stars    */}
      {/* ============================================ */}
      {Array.from({ length: 80 }).map((_, i) => {
        // Varied star colors: white, blue-white, cyan, warm yellow
        const colors = ['bg-white', 'bg-blue-100', 'bg-cyan-200', 'bg-amber-100', 'bg-white'];
        const color = colors[i % colors.length];
        const size = (i % 4) + 1;
        return (
          <div
            key={i}
            className={`absolute rounded-full ${color} ${
              i % 3 === 0 ? 'animate-twinkle-1' : i % 3 === 1 ? 'animate-twinkle-2' : ''
            }`}
            style={{
              top: `${(i * 13 + i * i * 7) % 100}%`,
              left: `${(i * 29 + i * 3) % 100}%`,
              width: `${size}px`,
              height: `${size}px`,
              opacity: size > 2 ? 0.9 : (i % 2 === 0 ? 0.7 : 0.35),
              animationDelay: `${(i % 9) * 0.3}s`,
              boxShadow: size > 2 ? `0 0 ${size * 3}px rgba(255,255,255,0.4)` : 'none',
            }}
          />
        );
      })}

      {/* Extra bright accent stars with glow */}
      <div className="absolute top-[10%] left-[20%] w-1 h-1 bg-white rounded-full animate-twinkle-1" />
      <div className="absolute top-[30%] left-[80%] w-1.5 h-1.5 bg-white/80 rounded-full animate-twinkle-2" />
      <div className="absolute top-[80%] left-[70%] w-2 h-2 bg-white/40 rounded-full animate-twinkle-2 shadow-[0_0_10px_rgba(255,255,255,0.8)]" />
      <div className="absolute top-[55%] left-[45%] w-1 h-1 bg-cyan-300/60 rounded-full animate-twinkle-1 shadow-[0_0_6px_rgba(34,211,238,0.6)]" />
      <div className="absolute top-[15%] left-[65%] w-1.5 h-1.5 bg-indigo-300/50 rounded-full animate-twinkle-2 shadow-[0_0_6px_rgba(129,140,248,0.6)]" />
      <div className="absolute top-[42%] left-[12%] w-2.5 h-2.5 bg-amber-200/60 rounded-full animate-twinkle-1 shadow-[0_0_12px_rgba(251,191,36,0.4)]" />
      <div className="absolute top-[72%] left-[88%] w-2 h-2 bg-blue-200/50 rounded-full animate-twinkle-2 shadow-[0_0_10px_rgba(191,219,254,0.5)]" />

      {/* ============================================ */}
      {/* LAYER 2: Constellation Lines — desktop only  */}
      {/* ============================================ */}
      <svg className="absolute inset-0 w-full h-full hidden md:block opacity-[0.06]" xmlns="http://www.w3.org/2000/svg">
        {/* Orion-like constellation */}
        <line x1="20%" y1="25%" x2="22%" y2="30%" stroke="white" strokeWidth="0.5" />
        <line x1="22%" y1="30%" x2="18%" y2="35%" stroke="white" strokeWidth="0.5" />
        <line x1="18%" y1="35%" x2="24%" y2="40%" stroke="white" strokeWidth="0.5" />
        <line x1="24%" y1="40%" x2="20%" y2="45%" stroke="white" strokeWidth="0.5" />
        {/* Triangle constellation */}
        <line x1="70%" y1="60%" x2="75%" y2="55%" stroke="white" strokeWidth="0.5" />
        <line x1="75%" y1="55%" x2="80%" y2="62%" stroke="white" strokeWidth="0.5" />
        <line x1="80%" y1="62%" x2="70%" y2="60%" stroke="white" strokeWidth="0.5" />
        {/* Dipper-like */}
        <line x1="55%" y1="15%" x2="60%" y2="12%" stroke="white" strokeWidth="0.5" />
        <line x1="60%" y1="12%" x2="65%" y2="14%" stroke="white" strokeWidth="0.5" />
        <line x1="65%" y1="14%" x2="63%" y2="20%" stroke="white" strokeWidth="0.5" />
        <line x1="63%" y1="20%" x2="55%" y2="15%" stroke="white" strokeWidth="0.5" />
        <line x1="65%" y1="14%" x2="72%" y2="10%" stroke="white" strokeWidth="0.5" />
        <line x1="72%" y1="10%" x2="78%" y2="12%" stroke="white" strokeWidth="0.5" />
      </svg>

      {/* ============================================ */}
      {/* LAYER 3: Galaxy Swirl + Nebulas              */}
      {/* ============================================ */}
      <div className="absolute top-1/2 left-1/2 w-[120vw] h-[120vw] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-10 animate-[spinSlow_120s_linear_infinite] blur-[80px]" style={{ background: 'conic-gradient(from 0deg, transparent, rgba(99,102,241,0.5), transparent, rgba(168,85,247,0.5), transparent)' }} />
      
      {/* Drifting nebula clouds */}
      <div className="absolute top-1/4 left-1/4 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-sky-900/10 rounded-full blur-[150px] animate-nebula-drift" />
      <div className="absolute bottom-1/4 right-1/4 w-[350px] sm:w-[600px] h-[350px] sm:h-[600px] bg-indigo-900/10 rounded-full blur-[150px] animate-nebula-drift" style={{ animationDelay: '-7s' }} />
      <div className="absolute top-[60%] left-[60%] w-[250px] sm:w-[400px] h-[250px] sm:h-[400px] bg-purple-900/8 rounded-full blur-[120px] animate-nebula-drift" style={{ animationDelay: '-14s' }} />
      <div className="absolute top-[10%] right-[20%] w-[200px] sm:w-[350px] h-[200px] sm:h-[350px] bg-teal-900/8 rounded-full blur-[130px] animate-nebula-drift" style={{ animationDelay: '-3s' }} />
      {/* Deep crimson nebula */}
      <div className="absolute bottom-[10%] left-[40%] w-[200px] sm:w-[300px] h-[200px] sm:h-[300px] bg-rose-900/6 rounded-full blur-[140px] animate-nebula-drift" style={{ animationDelay: '-18s' }} />

      {/* ============================================ */}
      {/* LAYER 4: Technical Grid + CRT Overlay        */}
      {/* ============================================ */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_80%)]" />

      {/* CRT Scan-line overlay — desktop only */}
      <div className="hidden md:block absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{ backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,255,100,0.1) 2px, rgba(0,255,100,0.1) 4px)' }}
      />

      {/* ============================================ */}
      {/* LAYER 5: NASA Mission Control HUD            */}
      {/* ============================================ */}
      {/* Top-left telemetry */}
      <div className="absolute top-8 left-8 text-[11px] font-mono text-emerald-400/40 leading-tight tracking-[0.2em] hidden md:block select-none pointer-events-none">
        <p className="mb-1 text-emerald-400/60 border-b border-emerald-400/20 pb-1">SYS.ORBITAL_TELEMETRY</p>
        <p>ALT: 408.3 KM</p>
        <p>VEL: 7.66 KM/S</p>
        <p>INC: 51.6 DEG</p>
        <p className="mt-2 text-emerald-400/25">ORBIT: 16/DAY</p>
        <p>TEMP: -157°C / +121°C</p>
      </div>

      {/* Bottom-right status */}
      <div className="absolute bottom-8 right-8 text-[11px] font-mono text-emerald-400/40 leading-tight tracking-[0.2em] hidden md:block select-none pointer-events-none text-right">
        <p className="mb-1 text-emerald-400/60 border-b border-emerald-400/20 pb-1">SYS.MISSION_STATUS</p>
        <p>LIFE SUPPORT: NOMINAL</p>
        <p>O₂ LEVEL: 20.9%</p>
        <p>COMM: LINK ESTABLISHED</p>
        <p>PWR: SOLAR ARRAY ONLINE</p>
        <p className="mt-2 text-emerald-400/20 animate-pulse">● REC</p>
      </div>

      {/* Bottom-left mission timer */}
      <div className="absolute bottom-8 left-8 text-[11px] font-mono text-emerald-400/30 leading-tight tracking-[0.2em] hidden lg:block select-none pointer-events-none">
        <p className="text-emerald-400/50">MISSION ELAPSED TIME</p>
        <p className="text-emerald-400/40 text-[14px] font-bold animate-pulse">T+ 00:19:42:37</p>
      </div>

      {/* Top-right coordinates */}
      <div className="absolute top-8 right-8 text-[11px] font-mono text-emerald-400/30 leading-tight tracking-[0.2em] hidden lg:block select-none pointer-events-none text-right">
        <p>LAT: 28.573°N</p>
        <p>LON: -80.649°W</p>
        <p className="text-emerald-400/20 mt-1">KSC / LC-39A</p>
      </div>

      {/* ============================================ */}
      {/* LAYER 6: Target Crosshairs + Orbit Rings     */}
      {/* ============================================ */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border-[1px] border-emerald-400/10 rounded-full pointer-events-none hidden md:block">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1px] h-6 bg-emerald-400/40" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-[1px] h-6 bg-emerald-400/40" />
        <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 w-6 h-[1px] bg-emerald-400/40" />
        <div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 w-6 h-[1px] bg-emerald-400/40" />
      </div>
      {/* Inner orbit ring */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border-[1px] border-emerald-400/5 rounded-full pointer-events-none hidden md:block border-dashed animate-[spinSlow_60s_linear_infinite]" />

      {/* ============================================ */}
      {/* LAYER 7: CSS Moon/Planet with craters         */}
      {/* ============================================ */}
      <div className="absolute top-[12%] right-[8%] sm:top-[15%] sm:right-[10%] w-24 h-24 sm:w-40 sm:h-40 rounded-full animate-planet-glow"
        style={{ background: 'radial-gradient(circle at 35% 35%, #c4b5fd 0%, #7c3aed 40%, #3b0764 80%, transparent 100%)' }}
      >
        <div className="absolute top-[20%] left-[25%] w-3 sm:w-5 h-3 sm:h-5 rounded-full bg-black/10 blur-[1px]" />
        <div className="absolute top-[50%] left-[55%] w-2 sm:w-3 h-2 sm:h-3 rounded-full bg-black/15 blur-[1px]" />
        <div className="absolute top-[65%] left-[30%] w-2 sm:w-4 h-2 sm:h-4 rounded-full bg-black/10 blur-[1px]" />
        <div className="absolute top-[35%] left-[70%] w-1.5 sm:w-2.5 h-1.5 sm:h-2.5 rounded-full bg-black/8 blur-[0.5px]" />
        <div className="absolute inset-[-4px] sm:inset-[-8px] rounded-full border border-indigo-400/20 blur-[2px]" />
      </div>

      {/* ============================================ */}
      {/* LAYER 8: Distant Earth                       */}
      {/* ============================================ */}
      <div className="absolute bottom-[15%] right-[15%] sm:bottom-[20%] sm:right-[20%] w-16 h-16 sm:w-24 sm:h-24 rounded-full opacity-60 hidden sm:block"
        style={{
          background: 'radial-gradient(circle at 40% 40%, #60a5fa 0%, #2563eb 30%, #1e3a5f 60%, #0c1929 100%)',
          boxShadow: '0 0 30px 5px rgba(96,165,250,0.15), inset -8px 4px 15px rgba(0,0,0,0.6)',
        }}
      >
        {/* Continent-like patches */}
        <div className="absolute top-[25%] left-[30%] w-4 sm:w-6 h-2 sm:h-3 rounded-full bg-emerald-600/30 blur-[1px] rotate-12" />
        <div className="absolute top-[55%] left-[45%] w-3 sm:w-5 h-2 sm:h-3 rounded-full bg-emerald-700/25 blur-[1px] -rotate-6" />
        <div className="absolute top-[35%] left-[55%] w-2 sm:w-3 h-1.5 sm:h-2 rounded-full bg-emerald-600/20 blur-[1px]" />
        {/* Atmosphere glow */}
        <div className="absolute inset-[-3px] sm:inset-[-6px] rounded-full border border-cyan-400/15 blur-[3px]" />
        <div className="absolute inset-[-8px] sm:inset-[-12px] rounded-full bg-cyan-400/5 blur-[8px]" />
      </div>

      {/* ============================================ */}
      {/* LAYER 9: Shooting Stars + Comet              */}
      {/* ============================================ */}
      <div className="absolute top-[-50px] right-[20%] w-[100px] sm:w-[150px] h-[2px] bg-gradient-to-r from-transparent via-white to-white animate-[shootingStar_4s_linear_infinite] opacity-0" style={{ animationDelay: '2s' }} />
      <div className="absolute top-[20%] right-[-50px] w-[120px] sm:w-[200px] h-[2px] bg-gradient-to-r from-transparent via-white to-white animate-[shootingStar_6s_linear_infinite] opacity-0" style={{ animationDelay: '5s' }} />
      <div className="absolute top-[-50px] right-[70%] w-[80px] sm:w-[100px] h-[2px] bg-gradient-to-r from-transparent via-white to-white animate-[shootingStar_8s_linear_infinite] opacity-0" style={{ animationDelay: '1s' }} />
      <div className="absolute top-[40%] right-[45%] w-[60px] sm:w-[120px] h-[1px] bg-gradient-to-r from-transparent via-cyan-200 to-cyan-200 animate-[shootingStar_10s_linear_infinite] opacity-0" style={{ animationDelay: '8s' }} />
      <div className="absolute top-[-30px] right-[55%] w-[70px] sm:w-[90px] h-[1px] bg-gradient-to-r from-transparent via-indigo-200 to-indigo-200 animate-[shootingStar_7s_linear_infinite] opacity-0" style={{ animationDelay: '12s' }} />
      <div className="absolute top-[65%] right-[30%] w-[50px] sm:w-[80px] h-[1px] bg-gradient-to-r from-transparent via-amber-200 to-amber-200 animate-[shootingStar_9s_linear_infinite] opacity-0" style={{ animationDelay: '15s' }} />

      {/* Comet with glowing tail */}
      <div className="absolute animate-[cometFly_20s_linear_infinite] opacity-0" style={{ top: '-5%', left: '100%' }}>
        <div className="relative">
          <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-cyan-300 shadow-[0_0_15px_5px_rgba(34,211,238,0.6)]" />
          <div className="absolute top-1/2 left-full -translate-y-1/2 w-[60px] sm:w-[120px] h-[2px] bg-gradient-to-r from-cyan-300/80 via-cyan-300/20 to-transparent" />
          <div className="absolute top-1/2 left-full -translate-y-1/2 mt-[1px] w-[40px] sm:w-[80px] h-[1px] bg-gradient-to-r from-indigo-300/40 to-transparent" />
        </div>
      </div>

      {/* ============================================ */}
      {/* LAYER 10: ISS / Space Station                */}
      {/* ============================================ */}
      <div className="absolute animate-[issOrbit_50s_linear_infinite] opacity-0" style={{ top: '30%', left: '-5%' }}>
        <div className="relative w-10 h-4 sm:w-14 sm:h-6">
          {/* Central module */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 sm:w-6 h-1.5 sm:h-2 bg-slate-300/60 rounded-sm" />
          {/* Solar panels */}
          <div className="absolute top-0 left-0 w-3 sm:w-4 h-full bg-indigo-400/30 border border-indigo-300/20" />
          <div className="absolute top-0 right-0 w-3 sm:w-4 h-full bg-indigo-400/30 border border-indigo-300/20" />
          {/* Panel grid lines */}
          <div className="absolute top-1/2 left-0 w-3 sm:w-4 h-[0.5px] bg-indigo-200/30" />
          <div className="absolute top-1/2 right-0 w-3 sm:w-4 h-[0.5px] bg-indigo-200/30" />
          {/* Glint */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-white/80 rounded-full animate-pulse shadow-[0_0_6px_rgba(255,255,255,0.8)]" />
        </div>
      </div>

      {/* ============================================ */}
      {/* LAYER 11: Floating Astronaut                 */}
      {/* ============================================ */}
      <div className="absolute bottom-[20%] left-[5%] sm:left-[10%] w-16 h-16 sm:w-24 sm:h-24 text-white/40 animate-[floatAstronaut_6s_ease-in-out_infinite] drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]">
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C8.69 2 6 4.69 6 8v3c0 .16.03.31.06.46C5.45 11.83 5 12.63 5 13.5v2C5 16.33 5.67 17 6.5 17h.17A5.99 5.99 0 0 0 12 20c2.81 0 5.17-1.93 5.81-4.5h.69c.83 0 1.5-.67 1.5-1.5v-2c0-.87-.45-1.67-1.06-2.04.03-.15.06-.3.06-.46V8c0-3.31-2.69-6-6-6zm0 2c2.21 0 4 1.79 4 4v1.5h-8V8c0-2.21 1.79-4 4-4zm-4 7.5h8C16.85 11.5 18 12.65 18 14c0 1.35-1.15 2.5-2.5 2.5v1A3.49 3.49 0 0 1 12 21c-1.93 0-3.5-1.57-3.5-3.5v-1c-1.35 0-2.5-1.15-2.5-2.5 0-1.35 1.15-2.5 2.5-2.5zM7 14h1v2H7v-2zm9 0h1v2h-1v-2z" />
        </svg>
      </div>

      {/* ============================================ */}
      {/* LAYER 12: Satellite + Asteroids              */}
      {/* ============================================ */}
      <div className="absolute top-[0vh] left-[0vw] w-8 h-8 sm:w-12 sm:h-12 text-blue-200/50 drop-shadow-[0_0_15px_rgba(191,219,254,0.3)] animate-[satelliteOrbit_40s_linear_infinite]">
        <svg viewBox="0 0 24 24" fill="currentColor">
          <rect x="10" y="8" width="4" height="8" rx="0.5" />
          <path d="M4 9h5v6H4z M15 9h5v6h-5z" opacity="0.8" />
          <path d="M12 8V4 M10 4h4" stroke="currentColor" strokeWidth="1" strokeLinecap="square" />
        </svg>
      </div>

      <div className="absolute top-[0vh] left-[20vw] w-6 h-6 sm:w-8 sm:h-8 text-slate-500 animate-asteroidFall opacity-0" style={{ animationDuration: '25s', animationDelay: '10s' }}>
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M15 2l5 4-2 7-6 9-9-4L2 11l6-8z" />
        </svg>
      </div>
      <div className="absolute top-[0vh] left-[60vw] w-8 h-8 sm:w-12 sm:h-12 text-slate-600 animate-asteroidFall opacity-0" style={{ animationDuration: '35s', animationDelay: '5s' }}>
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M19 4l3 6-3 9-8 3-9-7L4 5l9-3z" />
        </svg>
      </div>
      {/* Smaller tumbling asteroid */}
      <div className="absolute top-[0vh] left-[85vw] w-4 h-4 sm:w-6 sm:h-6 text-slate-700 animate-asteroidFall opacity-0" style={{ animationDuration: '30s', animationDelay: '18s' }}>
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2l6 4-1 8-5 8-8-2-2-10z" />
        </svg>
      </div>

      {/* ============================================ */}
      {/* LAYER 13: Rocket exhaust particles           */}
      {/* ============================================ */}
      {Array.from({ length: 8 }).map((_, i) => (
        <div
          key={`exhaust-${i}`}
          className="absolute rounded-full animate-[rocketExhaust_3s_ease-out_infinite]"
          style={{
            bottom: `${20 + (i % 3) * 2}%`,
            left: `${7 + (i % 4) * 2}%`,
            width: `${(i % 3) + 2}px`,
            height: `${(i % 3) + 2}px`,
            background: i % 2 === 0 ? 'rgba(251,146,60,0.6)' : 'rgba(255,255,255,0.4)',
            animationDelay: `${i * 0.3}s`,
          }}
        />
      ))}

      {/* ============================================ */}
      {/* LAYER 14: Distant pulsing galaxies            */}
      {/* ============================================ */}
      <div className="absolute top-[75%] left-[25%] w-6 sm:w-10 h-3 sm:h-5 rounded-full blur-[2px] animate-pulse opacity-30 rotate-[30deg] hidden sm:block"
        style={{ background: 'radial-gradient(ellipse, rgba(168,85,247,0.6), transparent 70%)' }}
      />
      <div className="absolute top-[20%] left-[85%] w-5 sm:w-8 h-2 sm:h-3 rounded-full blur-[2px] animate-pulse opacity-20 -rotate-[15deg] hidden sm:block"
        style={{ background: 'radial-gradient(ellipse, rgba(99,102,241,0.6), transparent 70%)', animationDelay: '2s' }}
      />
      <div className="absolute top-[45%] left-[5%] w-4 sm:w-7 h-2 sm:h-3 rounded-full blur-[1px] animate-pulse opacity-25 rotate-[45deg] hidden sm:block"
        style={{ background: 'radial-gradient(ellipse, rgba(34,211,238,0.5), transparent 70%)', animationDelay: '4s' }}
      />
    </div>
  );
}
