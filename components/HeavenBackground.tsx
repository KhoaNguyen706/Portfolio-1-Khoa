import Clouds from "./Clouds";

export default function HeavenBackground() {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden dark:hidden pointer-events-none">
      {/* Heavenly gradient rays */}
      <div className="absolute top-0 inset-x-0 h-[800px] bg-gradient-to-b from-sky-200/80 via-white/40 to-transparent" />
      
      {/* Drifting Clouds */}
      <div className="relative w-full h-full opacity-80">
        <Clouds />
      </div>
      
      {/* Subtle heavenly glow pulses */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-yellow-100/40 rounded-full blur-[150px] animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-sky-100/50 rounded-full blur-[150px] animate-pulse delay-700" />
      
      {/* Floating Light Orbs */}
      <div className="absolute top-[60%] left-[80%] w-32 h-32 bg-white/40 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-[20%] left-[10%] w-40 h-40 bg-yellow-200/20 rounded-full blur-3xl animate-pulse delay-500" />
    </div>
  );
}
