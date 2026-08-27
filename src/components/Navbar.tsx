import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="relative z-10 w-full h-32 bg-transparent flex items-center justify-between px-6 md:px-16">
      {/* Background Dotted Paths */}
      <div className="absolute inset-0 pointer-events-none opacity-30 overflow-hidden">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M -50 50 Q 150 100, 300 30 T 700 80 T 1200 40"
            fill="transparent"
            stroke="#c084fc"
            strokeWidth="1.5"
            strokeDasharray="6, 6"
          />
          <path
            d="M 200 120 Q 300 -20, 500 50 T 900 120 T 1400 20"
            fill="transparent"
            stroke="#f9a8d4"
            strokeWidth="1.5"
            strokeDasharray="4, 6"
          />
        </svg>
      </div>

      {/* Background Hearts */}
      <div className="absolute bottom-2 left-6 pointer-events-none opacity-60 flex flex-col gap-1 text-pink-400">
        <span className="text-sm">♡</span>
        <span className="text-xs ml-4">♡</span>
        <span className="text-lg">♡</span>
      </div>

      {/* Left Section: Logo & Brand */}
      <div className="relative z-10 flex items-center gap-3">
        <div className="relative w-24 h-24 md:w-32 md:h-32">
          <Image
            src="/assets/excel26.png"
            alt="Excel Logo"
            fill
            className="object-contain"
          />
        </div>
      </div>

      {/* Right Section: Title and Assets */}
      <div className="relative z-10 flex flex-col items-center">
        {/* Bow Image */}
        <div className="absolute -top-6 -left-8 md:-left-12 w-10 h-10 md:w-14 md:h-14 transform -rotate-12">
          <Image
            src="/assets/bow.png"
            alt="Bow"
            fill
            className="object-contain"
          />
        </div>

        {/* Aeroplane Image */}
        <div className="absolute -top-6 -right-10 md:-right-16 w-12 h-12 md:w-16 md:h-16 transform rotate-12">
          <Image
            src="/assets/aeroplane.png"
            alt="Aeroplane"
            fill
            className="object-contain"
          />
        </div>

        <h1 className="text-[#5c3d6b] font-serif text-2xl md:text-4xl lg:text-5xl tracking-widest drop-shadow-sm">
          TEACHER&apos;S DAY
        </h1>
        <p className="text-[#a0728a] font-serif text-[10px] md:text-xs tracking-[0.2em] italic mt-1 opacity-90">
          SEPTEMBER 5, 2026
        </p>
      </div>
    </nav>
  );
}
