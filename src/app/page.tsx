import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <div className="h-[100dvh] bg-[#2e1f14] overflow-hidden flex items-center justify-center relative p-2 md:p-0">

      {/* Paper clip — pinned at the top, slightly offset to match the tilt */}
      <div className="absolute top-[3vh] md:top-[2.5vh] left-[49%] z-50 pointer-events-none -rotate-[1.5deg]">
        <svg width="30" height="56" viewBox="0 0 30 56" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M15 1 C15 1, 4 3, 4 13 C4 23, 15 25, 15 25 C15 25, 26 23, 26 13 C26 8, 21 6, 15 6 L15 34 C15 34, 6 36, 6 44 C6 52, 15 55, 15 55"
            stroke="url(#cg)"
            strokeWidth="2.8"
            strokeLinecap="round"
            fill="none"
          />
          <path
            d="M15 1 C15 1, 4 3, 4 13 C4 23, 15 25, 15 25"
            stroke="#e8e8e8"
            strokeWidth="1"
            strokeLinecap="round"
            fill="none"
            opacity="0.65"
          />
          <defs>
            <linearGradient id="cg" x1="4" y1="1" x2="26" y2="55" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#d0d0d0" />
              <stop offset="45%" stopColor="#7a7a7a" />
              <stop offset="100%" stopColor="#b8b8b8" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* The canvas — rotated slightly to look casually pinned */}
      <div
        className="canvas-texture bg-[#faf6f0] w-[90vw] h-[90dvh] md:w-[94vw] md:h-[92dvh] rounded-xl md:rounded-2xl flex flex-col justify-evenly relative shadow-[0_15px_40px_rgba(0,0,0,0.5)] md:shadow-[0_25px_80px_rgba(0,0,0,0.6)] overflow-hidden"
        style={{ transform: "rotate(-1.5deg)" }}
      >
        <Navbar />
        <Hero />
      </div>

    </div>
  );
}
