"use client";
import { useState } from "react";

const envelopes = [
  { id: 1,  color: "#f9a8d4", flap: "#f472b6", seal: "#ec4899", label: "A", top: "12%", left: "8%",  rotate: "-8deg"  },
  { id: 2,  color: "#a5f3fc", flap: "#67e8f9", seal: "#22d3ee", label: "B", top: "20%", left: "35%", rotate: "5deg"   },
  { id: 3,  color: "#fde68a", flap: "#fcd34d", seal: "#f59e0b", label: "C", top: "8%",  left: "60%", rotate: "-4deg"  },
  { id: 4,  color: "#bbf7d0", flap: "#6ee7b7", seal: "#10b981", label: "D", top: "38%", left: "15%", rotate: "10deg"  },
  { id: 5,  color: "#ddd6fe", flap: "#a78bfa", seal: "#7c3aed", label: "E", top: "45%", left: "55%", rotate: "-6deg"  },
  { id: 6,  color: "#fed7aa", flap: "#fb923c", seal: "#ea580c", label: "F", top: "55%", left: "28%", rotate: "7deg"   },
  { id: 7,  color: "#fca5a5", flap: "#f87171", seal: "#dc2626", label: "G", top: "62%", left: "70%", rotate: "-9deg"  },
  { id: 8,  color: "#c7d2fe", flap: "#818cf8", seal: "#4f46e5", label: "H", top: "30%", left: "78%", rotate: "3deg"   },
  { id: 9,  color: "#d1fae5", flap: "#34d399", seal: "#059669", label: "I", top: "72%", left: "10%", rotate: "-5deg"  },
  { id: 10, color: "#fef3c7", flap: "#fde68a", seal: "#d97706", label: "J", top: "75%", left: "48%", rotate: "8deg"   },
  { id: 11, color: "#fbcfe8", flap: "#f9a8d4", seal: "#db2777", label: "K", top: "18%", left: "88%", rotate: "-12deg" },
  { id: 12, color: "#e0f2fe", flap: "#7dd3fc", seal: "#0284c7", label: "L", top: "83%", left: "80%", rotate: "4deg"   },
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
      {/* Back button */}
      <button
        onClick={onBack}
        className="absolute top-4 left-4 z-30 flex items-center gap-1.5 font-[Georgia,serif] italic text-gray-400 hover:text-gray-600 text-xs md:text-sm transition-colors group"
      >
        <svg className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M19 12H5M12 5l-7 7 7 7" />
        </svg>
        go back
      </button>

      <p className="absolute top-4 left-1/2 -translate-x-1/2 z-10 font-[Georgia,serif] italic text-gray-300 text-xs pointer-events-none select-none whitespace-nowrap animate-pulse">
        tap an envelope to read ✉️
      </p>

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
