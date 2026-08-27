import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="relative w-full flex items-center justify-between px-6 md:px-12 pt-10 pb-4 z-10">

      {/* Subtle decorative path across the top */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M -50 70 Q 250 20, 500 60 T 1100 40 T 1500 70"
            fill="transparent"
            stroke="#d8b4fe"
            strokeWidth="1"
            strokeDasharray="5, 8"
            opacity="0.5"
          />
        </svg>
      </div>

      {/* Left: Excel Logo */}
      <div className="relative z-10 flex items-center gap-3 shrink-0">
        <div className="relative w-20 h-20 md:w-28 md:h-28">
          <Image
            src="/assets/excel26.png"
            alt="Excel Logo"
            fill
            className="object-contain"
          />
        </div>
      </div>

      {/* Center: Happy Teacher's Day — beautifully typeset */}
      <div className="absolute left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1 select-none">
    

        {/* Happy */}
        <p className="text-[#a07838] font-serif text-xs md:text-sm tracking-[0.4em] italic uppercase opacity-80">
          — happy —
        </p>

        {/* Teacher's Day */}
        <h1 className="text-[#5c3d6b] font-serif text-2xl md:text-4xl lg:text-5xl tracking-widest leading-none drop-shadow-sm">
          Teacher&apos;s Day
        </h1>

        {/* Date */}
        <p className="text-[#a0728a] font-serif text-[9px] md:text-[11px] tracking-[0.3em] italic opacity-75 mt-0.5">
          September 5, 2026
        </p>

        {/* Small heart row */}
        <div className="flex gap-2 mt-0.5 text-pink-300 text-xs opacity-60">
          <span>♡</span><span>♡</span><span>♡</span>
        </div>
      </div>

      {/* Right: Aeroplane decorative element */}
      <div className="relative z-10 flex items-center shrink-0">
        <div className="relative w-14 h-14 md:w-20 md:h-20 opacity-80">
          <Image src="/assets/aeroplane.png" alt="Aeroplane" fill className="object-contain rotate-6" />
        </div>
      </div>

    </nav>
  );
}
