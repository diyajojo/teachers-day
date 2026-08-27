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
    let next = dir === "next" ? currentPage + 1 : currentPage - 1;
    if (next >= pages.length) next = 0;
    if (next < 0) next = pages.length - 1;
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
      goToPage("next");
    }, 5000);
    return () => clearInterval(interval);
  }, [currentPage, autoPlay, flipping]);

  return (
    <section
      className="relative w-full flex-1 flex flex-col md:flex-row items-center justify-between px-8 md:px-12 lg:px-24 py-8 gap-12"
      onMouseEnter={() => setAutoPlay(false)}
    >
      {/* Background scattered decorations (static, hand-drawn aesthetic) */}
      <div className="absolute inset-0 pointer-events-none">
        
        {/* Dotted flowing paths */}
        <svg className="absolute inset-0 w-full h-full opacity-30" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M -50 250 Q 300 450, 700 200 T 1500 400"
            fill="transparent"
            stroke="#d8b4fe"
            strokeWidth="1.5"
            strokeDasharray="6, 10"
          />
          <path
            d="M 100 600 Q 500 700, 900 500 T 1600 650"
            fill="transparent"
            stroke="#fbcfe8"
            strokeWidth="1.5"
            strokeDasharray="6, 10"
          />
          {/* New paths for more doodle density */}
          <path
            d="M -100 100 Q 200 -50, 600 150 T 1300 50"
            fill="transparent"
            stroke="#fbcfe8"
            strokeWidth="1.5"
            strokeDasharray="6, 10"
          />
          <path
            d="M 400 800 Q 800 600, 1100 750 T 1800 600"
            fill="transparent"
            stroke="#d8b4fe"
            strokeWidth="1.5"
            strokeDasharray="6, 10"
          />
        </svg>

        {/* Hand-drawn scattered elements */}
        {/* Pink heart 1 */}
        <svg className="absolute top-[12%] left-[8%] w-8 h-8 text-pink-300 opacity-60 -rotate-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
        </svg>

        {/* Pink heart 2 (New) */}
        <svg className="absolute top-[45%] right-[2%] w-6 h-6 text-pink-400 opacity-50 rotate-45" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
        </svg>

        {/* Purple/Pink flower 1 */}
        <svg className="absolute top-[35%] right-[8%] w-10 h-10 text-pink-300 opacity-70 rotate-12" viewBox="0 0 100 100" fill="currentColor">
          <circle cx="50" cy="50" r="10" fill="#fefce8" stroke="currentColor" strokeWidth="4"/>
          <path d="M50 35 C65 15, 80 30, 60 50 C80 65, 65 85, 50 65 C35 85, 20 65, 40 50 C20 30, 35 15, 50 35 Z" fill="#fbcfe8" stroke="currentColor" strokeWidth="3" strokeLinejoin="round"/>
        </svg>
        
        {/* Purple/Pink flower 2 (New) */}
        <svg className="absolute bottom-[10%] left-[25%] w-8 h-8 text-purple-300 opacity-60 -rotate-[25deg]" viewBox="0 0 100 100" fill="currentColor">
          <circle cx="50" cy="50" r="10" fill="#fefce8" stroke="currentColor" strokeWidth="4"/>
          <path d="M50 35 C65 15, 80 30, 60 50 C80 65, 65 85, 50 65 C35 85, 20 65, 40 50 C20 30, 35 15, 50 35 Z" fill="#e9d5ff" stroke="currentColor" strokeWidth="3" strokeLinejoin="round"/>
        </svg>
        
        {/* Fill the Center Gap */}
        <svg className="absolute top-[45%] left-[50%] w-6 h-6 text-pink-300 opacity-70 rotate-[15deg]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
        </svg>
        
        <svg className="absolute top-[65%] left-[45%] w-8 h-8 text-purple-300 opacity-50 -rotate-[10deg]" viewBox="0 0 100 100" fill="currentColor">
          <circle cx="50" cy="50" r="10" fill="none" stroke="currentColor" strokeWidth="5"/>
          <path d="M50 35 C65 15, 80 30, 60 50 C80 65, 65 85, 50 65 C35 85, 20 65, 40 50 C20 30, 35 15, 50 35 Z" fill="none" stroke="currentColor" strokeWidth="4" strokeLinejoin="round"/>
        </svg>

        <div className="absolute top-[55%] left-[55%] w-7 h-7 opacity-50 -rotate-[35deg]">
          <Image src="/assets/bow.png" alt="Bow" fill className="object-contain" />
        </div>

        {/* Purple heart 1 */}
        <svg className="absolute bottom-[20%] left-[10%] w-6 h-6 text-purple-300 opacity-60 rotate-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
        </svg>

        {/* Purple heart 2 (New) */}
        <svg className="absolute top-[18%] left-[45%] w-5 h-5 text-purple-400 opacity-50 -rotate-[15deg]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
        </svg>

        {/* Outline flower 1 */}
        <svg className="absolute top-[60%] left-[5%] w-7 h-7 text-purple-300 opacity-80 -rotate-12" viewBox="0 0 100 100" fill="currentColor">
          <circle cx="50" cy="50" r="10" fill="none" stroke="currentColor" strokeWidth="5"/>
          <path d="M50 35 C65 15, 80 30, 60 50 C80 65, 65 85, 50 65 C35 85, 20 65, 40 50 C20 30, 35 15, 50 35 Z" fill="none" stroke="currentColor" strokeWidth="4" strokeLinejoin="round"/>
        </svg>

        {/* Outline flower 2 (New) */}
        <svg className="absolute bottom-[30%] right-[35%] w-9 h-9 text-pink-300 opacity-60 rotate-45" viewBox="0 0 100 100" fill="currentColor">
          <circle cx="50" cy="50" r="10" fill="none" stroke="currentColor" strokeWidth="5"/>
          <path d="M50 35 C65 15, 80 30, 60 50 C80 65, 65 85, 50 65 C35 85, 20 65, 40 50 C20 30, 35 15, 50 35 Z" fill="none" stroke="currentColor" strokeWidth="4" strokeLinejoin="round"/>
        </svg>

        {/* Small bows */}
        <div className="absolute top-[20%] right-[30%] w-10 h-10 opacity-60 rotate-[20deg]">
          <Image src="/assets/bow.png" alt="Bow" fill className="object-contain" />
        </div>
        <div className="absolute bottom-[15%] right-[15%] w-8 h-8 opacity-50 -rotate-[15deg]">
          <Image src="/assets/bow.png" alt="Bow" fill className="object-contain" />
        </div>
        <div className="absolute top-[8%] left-[25%] w-7 h-7 opacity-45 rotate-[45deg]">
          <Image src="/assets/bow.png" alt="Bow" fill className="object-contain" />
        </div>
      </div>

      {/* Left Column */}
      <div className="relative z-10 flex flex-col w-full max-w-md md:max-w-lg shrink-0">
        {/* Notebook */}
        <div className="relative w-full">
        {/* Spiral binding */}
        <div className="absolute -top-4 left-10 right-10 flex justify-around z-20 pointer-events-none">
          {Array.from({ length: 14 }).map((_, i) => (
            <div key={i} className="w-2.5 h-9 rounded-full bg-gradient-to-b from-[#f3e8ff] via-[#d8b4fe] to-[#a855f7] shadow-[inset_1px_1px_2px_rgba(255,255,255,0.9),0_2px_3px_rgba(0,0,0,0.25)] border border-[#9333ea]/30" />
          ))}
        </div>

        {/* Book container */}
        <div className="relative bg-[#fef7d9] rounded-2xl    overflow-hidden pt-4 min-h-[340px] md:min-h-[400px]">

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
                i === currentPage ? "bg-[#c084fc] scale-125 shadow-sm" : "bg-[#c084fc]/30"
              }`}
            />
          ))}
        </div>

        {/* Navigation arrows */}
        <div className="flex justify-between mt-3 px-2">
          <button
            onClick={() => { setAutoPlay(false); goToPage("prev"); }}
            className="text-pink-500 hover:text-pink-700 transition-colors px-3 group"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="group-hover:-translate-x-1 transition-transform">
              <path d="M19 12H5M5 12L12 19M5 12L12 5" />
            </svg>
          </button>
          <p className="text-[#5c3d6b]/60 text-xs self-center italic font-semibold">
            {currentPage + 1} / {pages.length}
          </p>
          <button
            onClick={() => { setAutoPlay(false); goToPage("next"); }}
            className="text-pink-500 hover:text-pink-700 transition-colors px-3 group"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform">
              <path d="M5 12h14M19 12l-7 7M19 12l-7-7" />
            </svg>
          </button>
        </div>
      </div>

      </div>

      {/* Right Column: Cuddle Pile Image */}
      <div className="relative z-10 hidden md:flex w-full max-w-lg lg:max-w-2xl justify-center">
        <Image src="/assets/hero.png" alt="cuddle pile" width={700} height={600} className="object-contain drop-shadow-xl"/>
      </div>

    </section>
  );
}
