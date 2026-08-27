"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

const pages = [
  {
    id: 0,
    content: (
      <div className="flex flex-col h-full p-6 md:p-10 font-[Georgia,serif] select-none">
        <p className="text-pink-400 text-sm tracking-widest uppercase mb-4 font-sans">September 5, 2026</p>
        <h2 className="text-3xl md:text-4xl font-bold text-[#5c3d6b] leading-snug mb-4">
          Dear Teacher,
        </h2>
        <p className="text-gray-600 text-base md:text-lg leading-relaxed italic">
          "Some lessons you taught us never left the room. They followed us home, kept us up at night, and showed up again on the days we needed them most."
        </p>
        <div className="mt-auto flex items-end justify-between">
          <p className="text-xs text-gray-400 italic">— written with love, by your students</p>
          <div className="w-12 h-12 relative opacity-80">
            <Image src="/assets/cat.png" alt="cat sticker" fill className="object-contain" />
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 1,
    content: (
      <div className="flex flex-col h-full p-6 md:p-10 font-[Georgia,serif] select-none">
        <p className="text-purple-400 text-sm tracking-widest uppercase mb-4 font-sans">A note from us</p>
        <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-4">
          Every year, seniors from our college write down their most honest, heartfelt thoughts — a memory, a laugh, a lesson, a thank you.
        </p>
        <p className="text-gray-700 text-base md:text-lg leading-relaxed">
          These are those notes. Unfiltered. Real. Full of love. 💛
        </p>
        <div className="mt-auto flex items-end justify-between gap-3">
          <p className="text-xs text-gray-400 italic">Keep flipping →</p>
          <div className="flex gap-2">
            <div className="w-10 h-10 relative">
              <Image src="/assets/dog.png" alt="dog sticker" fill className="object-contain" />
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 2,
    content: (
      <div className="flex flex-col h-full p-6 md:p-10 font-[Georgia,serif] select-none items-center justify-center text-center gap-6">
        <div className="flex gap-3 items-center justify-center">
          <div className="w-10 h-10 relative"><Image src="/assets/cat.png" alt="cat" fill className="object-contain" /></div>
          <div className="w-10 h-10 relative"><Image src="/assets/dog.png" alt="dog" fill className="object-contain" /></div>
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-[#5c3d6b] leading-snug">
          50+ notes.<br />Infinite gratitude.
        </h2>
        <p className="text-gray-600 text-sm md:text-base leading-relaxed max-w-xs">
          Scroll down to read what your seniors wrote for the teachers who made their college life unforgettable.
        </p>
        <button
          onClick={() => window.scrollTo({ top: window.innerHeight, behavior: "smooth" })}
          className="mt-2 bg-[#e879a0] hover:bg-[#d63384] text-white font-semibold text-sm px-7 py-3 rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
        >
          Read the notes ✨
        </button>
      </div>
    ),
  },
];

export default function Hero() {
  const [currentPage, setCurrentPage] = useState(0);
  const [flipping, setFlipping] = useState(false);
  const [flipDirection, setFlipDirection] = useState<"next" | "prev">("next");
  const [displayedPage, setDisplayedPage] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  const goToPage = (dir: "next" | "prev") => {
    if (flipping) return;
    const next = dir === "next" ? currentPage + 1 : currentPage - 1;
    if (next < 0 || next >= pages.length) return;
    setFlipDirection(dir);
    setFlipping(true);
    setTimeout(() => {
      setCurrentPage(next);
      setDisplayedPage(next);
      setFlipping(false);
    }, 500);
  };

  useEffect(() => {
    if (!autoPlay) return;
    const interval = setInterval(() => {
      if (currentPage < pages.length - 1) {
        goToPage("next");
      } else {
        setCurrentPage(0);
        setDisplayedPage(0);
        setAutoPlay(false);
      }
    }, 3500);
    return () => clearInterval(interval);
  }, [currentPage, autoPlay, flipping]);

  return (
    <section
      className="relative w-full min-h-[calc(100vh-8rem)] flex flex-col items-start justify-center overflow-hidden px-8 md:px-24 py-8"
      onMouseEnter={() => setAutoPlay(false)}
    >
      {/* Floating decorations */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <span className="absolute top-[12%] left-[8%] text-pink-300/60 text-3xl animate-float">♡</span>
        <span className="absolute top-[30%] right-[6%] text-purple-300/50 text-2xl animate-float-delayed">✦</span>
        <span className="absolute bottom-[18%] left-[10%] text-pink-400/40 text-xl animate-float">✿</span>
        <span className="absolute bottom-[25%] right-[8%] text-yellow-300/60 text-2xl animate-float-delayed">⭐</span>
        <span className="absolute top-[55%] left-[4%] text-purple-200/70 text-4xl animate-float">♡</span>
        <span className="absolute top-[15%] right-[25%] text-pink-200/60 text-xl animate-float-delayed">✦</span>
      </div>

      {/* Notebook */}
      <div className="relative z-10 w-full max-w-md md:max-w-lg">
        {/* Spiral binding */}
        <div className="absolute -top-3 left-12 right-12 flex justify-around z-20 pointer-events-none">
          {Array.from({ length: 10 }).map((_, i) => (
            <div key={i} className="w-5 h-5 rounded-full border-[3px] border-[#c084fc] bg-white shadow-sm" />
          ))}
        </div>

        {/* Book container */}
        <div className="relative bg-white rounded-2xl shadow-[0_20px_60px_rgba(180,80,180,0.25)] overflow-hidden pt-4 min-h-[340px] md:min-h-[400px]">

          {/* Notebook ruled lines */}
          <div className="absolute inset-0 pt-6 pointer-events-none">
            {Array.from({ length: 14 }).map((_, i) => (
              <div key={i} className="w-full border-b border-blue-100/60" style={{ height: "28px" }} />
            ))}
            {/* Left margin line */}
            <div className="absolute top-0 left-14 h-full border-l-2 border-pink-200/50" />
          </div>

          {/* Page content with flip animation */}
          <div
            key={displayedPage}
            className={`relative z-10 ${
              flipping
                ? flipDirection === "next"
                  ? "animate-[flipOut_0.5s_ease_forwards]"
                  : "animate-[flipIn_0.5s_ease_forwards]"
                : ""
            }`}
            style={{
              animation: flipping
                ? `${flipDirection === "next" ? "flipOut" : "flipIn"} 0.5s ease forwards`
                : undefined,
            }}
          >
            {pages[displayedPage].content}
          </div>
        </div>

        {/* Page indicator dots */}
        <div className="flex justify-center gap-2 mt-4">
          {pages.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                const dir = i > currentPage ? "next" : "prev";
                setFlipDirection(dir);
                setFlipping(true);
                setTimeout(() => {
                  setCurrentPage(i);
                  setDisplayedPage(i);
                  setFlipping(false);
                }, 500);
              }}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                i === currentPage ? "bg-white scale-125 shadow-sm" : "bg-white/40"
              }`}
            />
          ))}
        </div>

        {/* Navigation arrows */}
        <div className="flex justify-between mt-3 px-2">
          <button
            onClick={() => { setAutoPlay(false); goToPage("prev"); }}
            disabled={currentPage === 0}
            className="text-white/60 hover:text-white text-xl transition-all disabled:opacity-20 disabled:cursor-not-allowed px-3"
          >
            ←
          </button>
          <p className="text-white/60 text-xs self-center italic">
            {currentPage + 1} / {pages.length}
          </p>
          <button
            onClick={() => { setAutoPlay(false); goToPage("next"); }}
            disabled={currentPage === pages.length - 1}
            className="text-white/60 hover:text-white text-xl transition-all disabled:opacity-20 disabled:cursor-not-allowed px-3"
          >
            →
          </button>
        </div>
      </div>

      {/* Cat & Dog peeking at the bottom */}
      <div className="relative z-10 flex justify-between w-full max-w-sm mt-6 px-4">
        <div className="w-14 h-14 relative animate-float-delayed">
          <Image src="/assets/cat.png" alt="cat" fill className="object-contain" />
        </div>
        <div className="w-14 h-14 relative animate-float">
          <Image src="/assets/dog.png" alt="dog" fill className="object-contain" />
        </div>
      </div>

    </section>
  );
}
