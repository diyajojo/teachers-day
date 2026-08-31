"use client";
import { useState } from "react";

const envelopes = [
  // Row 1
  { id: 1,  color: "#f9a8d4", flap: "#f472b6", top: "15%", left: "15%", rotate: "-8deg"  }, // Pink
  { id: 2,  color: "#a5f3fc", flap: "#67e8f9", top: "12%", left: "45%", rotate: "5deg"   }, // Cyan
  { id: 3,  color: "#fde68a", flap: "#fcd34d", top: "16%", left: "75%", rotate: "-4deg"  }, // Yellow
  
  // Row 2
  { id: 4,  color: "#bbf7d0", flap: "#6ee7b7", top: "32%", left: "25%", rotate: "10deg"  }, // Green
  { id: 5,  color: "#ddd6fe", flap: "#a78bfa", top: "28%", left: "52%", rotate: "-6deg"  }, // Purple
  { id: 6,  color: "#fed7aa", flap: "#fb923c", top: "34%", left: "78%", rotate: "7deg"   }, // Orange
  
  // Row 3
  { id: 7,  color: "#fca5a5", flap: "#f87171", top: "49%", left: "12%", rotate: "-9deg"  }, // Red
  { id: 8,  color: "#c7d2fe", flap: "#818cf8", top: "46%", left: "48%", rotate: "3deg"   }, // Indigo
  { id: 9,  color: "#a5f3fc", flap: "#67e8f9", top: "51%", left: "72%", rotate: "-5deg"  }, // Cyan
  
  // Row 4
  { id: 10, color: "#fde68a", flap: "#fcd34d", top: "66%", left: "20%", rotate: "8deg"   }, // Yellow
  { id: 11, color: "#f9a8d4", flap: "#f472b6", top: "63%", left: "55%", rotate: "-12deg" }, // Pink
  { id: 12, color: "#bbf7d0", flap: "#6ee7b7", top: "68%", left: "78%", rotate: "4deg"   }, // Green
  
  // Row 5
  { id: 13, color: "#fed7aa", flap: "#fb923c", top: "83%", left: "18%", rotate: "6deg"   }, // Orange
  { id: 14, color: "#fca5a5", flap: "#f87171", top: "85%", left: "45%", rotate: "-7deg"  }, // Red
  { id: 15, color: "#c7d2fe", flap: "#818cf8", top: "81%", left: "75%", rotate: "9deg"   }, // Indigo
];

function EnvelopeSVG({ color, flap, isOpen }: {
  color: string; flap: string; isOpen: boolean;
}) {
  return (
    <svg viewBox="0 0 80 60" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-md">
      {/* Dashed outer border for a cute doodle effect */}
      <rect x="2" y="18" width="76" height="40" rx="4" fill={color} stroke="rgba(0,0,0,0.15)" strokeWidth="1.5" strokeDasharray="3, 3" />
      
      {/* Side flaps */}
      <polygon points="2,58 40,36 2,18" fill={flap} opacity="0.4" />
      <polygon points="78,58 40,36 78,18" fill={flap} opacity="0.4" />
      
      {/* Bottom flap */}
      <polygon points="2,58 40,38 78,58" fill={color} stroke="rgba(0,0,0,0.1)" strokeWidth="1" strokeLinejoin="round" />

      {/* Top flap (animated) */}
      <g style={{
          transformOrigin: "40px 18px",
          transform: isOpen ? "perspective(200px) rotateX(-160deg)" : "rotateX(0deg)",
          transition: "transform 0.4s ease",
      }}>
        {/* Back side of the top flap */}
        <polygon points="2,18 40,2 78,18" fill={flap} opacity="0.8" />
        {/* Front side of the top flap */}
        <polygon points="2,18 40,38 78,18" fill={flap} stroke="rgba(0,0,0,0.15)" strokeWidth="1" strokeLinejoin="round" strokeDasharray="3,3" />
      </g>

      {/* Cute heart seal */}
      {!isOpen && (
        <path 
          d="M 40 44 C 40 44, 33 37, 33 33 C 33 29, 38 27, 40 31 C 42 27, 47 29, 47 33 C 47 37, 40 44, 40 44 Z" 
          fill="#ff4d4d" 
          stroke="white" 
          strokeWidth="1.5" 
          strokeLinejoin="round" 
        />
      )}
    </svg>
  );
}

export default function NotesSection({ onBack }: { onBack: () => void }) {
  const [openEnvelope, setOpenEnvelope] = useState<number | null>(null);
  const [animating, setAnimating] = useState<number | null>(null);

  const handleClick = (id: number) => {
    setAnimating(id);
    setTimeout(() => {
      setOpenEnvelope(id);
      setAnimating(null);
    }, 350);
  };

  const closeModal = () => setOpenEnvelope(null);
  const selected = envelopes.find((e) => e.id === openEnvelope);

  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden">

      {/* ── Notebook ruled lines background ── */}
      <div className="absolute inset-0 pt-14 pointer-events-none">
        {Array.from({ length: 30 }).map((_, i) => (
          <div key={i} className="w-full border-b border-blue-100/60" style={{ height: "28px" }} />
        ))}
      </div>

      {/* ── Soft dotted paths ── */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20" xmlns="http://www.w3.org/2000/svg">
        <path d="M -50 200 Q 250 350, 600 150 T 1200 300" fill="transparent" stroke="#d8b4fe" strokeWidth="1.5" strokeDasharray="6, 10" />
        <path d="M 100 500 Q 400 600, 800 400 T 1400 550" fill="transparent" stroke="#fbcfe8" strokeWidth="1.5" strokeDasharray="6, 10" />
        <path d="M 0 80 Q 300 -30, 700 120 T 1400 50" fill="transparent" stroke="#fbcfe8" strokeWidth="1.2" strokeDasharray="5, 12" />
      </svg>

      {/* ── Decorative doodles ── */}
      {/* Hearts */}
      <svg className="absolute top-[22%] left-[28%] w-5 h-5 text-pink-300 opacity-60 rotate-[-12deg] pointer-events-none" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
      </svg>
      <svg className="absolute top-[55%] left-[42%] w-4 h-4 text-purple-300 opacity-50 rotate-[10deg] pointer-events-none" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
      </svg>
      <svg className="absolute bottom-[20%] right-[28%] w-5 h-5 text-pink-200 opacity-70 -rotate-[8deg] pointer-events-none" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
      </svg>

      {/* Stars */}
      <svg className="absolute top-[15%] right-[22%] w-4 h-4 text-yellow-300 opacity-60 rotate-[20deg] pointer-events-none" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z"/>
      </svg>
      <svg className="absolute bottom-[30%] left-[33%] w-3 h-3 text-yellow-300 opacity-50 -rotate-[10deg] pointer-events-none" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z"/>
      </svg>
      <svg className="absolute top-[68%] right-[12%] w-4 h-4 text-purple-300 opacity-50 rotate-[15deg] pointer-events-none" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z"/>
      </svg>

      {/* Small outline flowers */}
      <svg className="absolute top-[38%] right-[32%] w-7 h-7 text-pink-200 opacity-60 rotate-[12deg] pointer-events-none" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="4">
        <circle cx="50" cy="50" r="10" />
        <path d="M50 35 C65 15, 80 30, 60 50 C80 65, 65 85, 50 65 C35 85, 20 65, 40 50 C20 30, 35 15, 50 35 Z" strokeLinejoin="round" />
      </svg>
      <svg className="absolute bottom-[15%] left-[48%] w-6 h-6 text-purple-200 opacity-50 -rotate-[18deg] pointer-events-none" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="4">
        <circle cx="50" cy="50" r="10" />
        <path d="M50 35 C65 15, 80 30, 60 50 C80 65, 65 85, 50 65 C35 85, 20 65, 40 50 C20 30, 35 15, 50 35 Z" strokeLinejoin="round" />
      </svg>

     

      {/* Scattered envelopes */}
      {envelopes.map((env) => (
        <button
          key={env.id}
          onClick={() => handleClick(env.id)}
          className="absolute hover:scale-110 active:scale-95 transition-transform duration-200 cursor-pointer"
          style={{
            top: env.top,
            left: env.left,
            width: "clamp(44px, 7vw, 70px)",
            transform: `rotate(${env.rotate}) scale(${animating === env.id ? 1.15 : 1})`,
            transition: "transform 0.2s ease",
          }}
        >
          <EnvelopeSVG
            color={env.color}
            flap={env.flap}
            isOpen={animating === env.id}
          />
        </button>
      ))}

      {/* Letter pop-up modal */}
      {openEnvelope !== null && selected && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center"
          onClick={closeModal}
        >
          <div className="absolute inset-0 bg-black/20 backdrop-blur-[2px]" />
          <div
            className="relative z-10 bg-white rounded-sm shadow-[0_20px_60px_rgba(0,0,0,0.25)] p-6 md:p-10 mx-4 max-w-xs md:max-w-sm w-full"
            style={{ transform: `rotate(${parseInt(selected.rotate) * 0.3}deg)` }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Notebook ruled lines */}
            <div className="absolute inset-0 pt-8 pointer-events-none overflow-hidden rounded-sm">
              {Array.from({ length: 20 }).map((_, i) => (
                <div key={i} className="w-full border-b border-blue-100" style={{ height: "24px" }} />
              ))}
            </div>

            {/* Washi tape at top */}
            <div
              className="absolute -top-3 left-1/2 w-14 h-4 rounded-sm shadow-sm"
              style={{
                backgroundColor: selected.flap,
                opacity: 0.75,
                transform: `translateX(-50%) rotate(${parseInt(selected.rotate) * -0.5}deg)`,
              }}
            />

            {/* Cute heart sticker */}
            <div className="relative z-10 w-6 h-6 mb-4 text-pink-400 -rotate-12 drop-shadow-sm">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
              </svg>
            </div>

            {/* Letter content */}
            <p className="relative z-10 font-[Georgia,serif] text-gray-700 text-sm md:text-base italic leading-relaxed">
              hello
            </p>

            {/* Close */}
            <button
              onClick={closeModal}
              className="relative z-10 mt-6 text-xs font-[Georgia,serif] italic text-gray-400 hover:text-gray-600 transition-colors flex items-center gap-1 group"
            >
              <svg className="w-3 h-3 group-hover:-translate-x-0.5 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <path d="M19 12H5M12 5l-7 7 7 7" />
              </svg>
              fold it back
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
