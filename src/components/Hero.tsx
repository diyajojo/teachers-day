"use client";
import Image from "next/image";

const pages = [
  {
    id: 0,
    content: (
      <div className="flex flex-col h-full p-6 md:p-10 font-[Georgia,serif] select-none">
        <p className="text-purple-400 text-xs md:text-sm tracking-widest uppercase mb-2 font-sans font-semibold">
          A note from the other side
        </p>
        <p className="text-gray-700 text-sm md:text-base leading-snug mb-4">
          Some things were left unsaid in the classroom, but we noticed and we remember. Here are a few honest, heartfelt words from the students who always meant them. ❤️
        </p>
        
        <div className="flex justify-center mt-4 mb-2 relative">
          <div className="relative group cursor-pointer" onClick={() => window.scrollTo({ top: window.innerHeight, behavior: "smooth" })}>
            {/* Washi tape effect */}
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-5 bg-pink-200/70 shadow-[0_1px_2px_rgba(0,0,0,0.1)] rotate-[-4deg] z-20 opacity-90 transition-transform duration-300 group-hover:rotate-[-2deg]"></div>
            
            <button
              className="relative overflow-hidden bg-white px-8 py-3 shadow-[2px_3px_5px_rgba(0,0,0,0.15)] hover:shadow-[4px_6px_10px_rgba(0,0,0,0.2)] transition-all duration-300 group-hover:-translate-y-1 border border-gray-200 rounded-sm transform rotate-2 group-hover:rotate-0"
            >
              {/* Notebook lines on button */}
              <div className="absolute inset-0 pointer-events-none">
                <div className="w-full h-[14px] border-b border-blue-200"></div>
                <div className="w-full h-[14px] border-b border-blue-200"></div>
              </div>
              <span className="relative z-10 font-[Georgia,serif] text-base italic font-semibold tracking-wide text-gray-700 ml-2 group-hover:text-pink-600 transition-colors">
                Read the notes 
              </span>
            </button>
          </div>
        </div>

        <div className="mt-auto flex items-end justify-between gap-3 pt-4">
          <div />
          <div className="flex gap-2">
            <div className="w-10 h-10 relative">
              <Image src="/assets/cat.png" alt="cat sticker" fill className="object-contain" />
            </div>
            <div className="w-10 h-10 relative">
              <Image src="/assets/dog.png" alt="dog sticker" fill className="object-contain" />
            </div>
          </div>
        </div>
      </div>
    ),
  },
];

export default function Hero() {
  return (
    <section
      className="relative w-full flex-1 min-h-0 flex flex-col items-center justify-center md:flex-row md:justify-between px-4 md:px-12 lg:px-24 py-4 md:py-8 gap-4 md:gap-12"
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

      {/* Left Column (Sticky Note) - Order 2 on mobile, 1 on desktop */}
      <div className="relative z-10 flex flex-col w-[85%] max-w-md md:w-full md:max-w-lg min-h-0 order-2 md:order-1 mt-4 md:mt-0">
        {/* Notebook */}
        <div className="relative w-full flex-1 min-h-0 flex flex-col">
        {/* Spiral binding */}
        <div className="absolute -top-4 left-6 right-6 md:left-10 md:right-10 flex justify-around z-20 pointer-events-none">
          {Array.from({ length: 14 }).map((_, i) => (
            <div key={i} className="w-2.5 h-9 rounded-full bg-gradient-to-b from-[#f3e8ff] via-[#d8b4fe] to-[#a855f7] shadow-[inset_1px_1px_2px_rgba(255,255,255,0.9),0_2px_3px_rgba(0,0,0,0.25)] border border-[#9333ea]/30" />
          ))}
        </div>

        {/* Book container */}
        <div className="relative bg-[#fef7d9] rounded-2xl overflow-hidden pt-4 flex-1 min-h-0 flex flex-col">

          {/* Notebook ruled lines */}
          <div className="absolute inset-0 pt-6 pointer-events-none">
            {Array.from({ length: 14 }).map((_, i) => (
              <div key={i} className="w-full border-b border-blue-100/60" style={{ height: "28px" }} />
            ))}
          </div>

          {/* Page content */}
          <div className="relative z-10 flex-1 min-h-0 overflow-y-auto">
            {pages[0].content}
          </div>
        </div>


      </div>

      </div>

      {/* Right Column: Cuddle Pile Image - Order 1 on mobile, 2 on desktop */}
      <div className="relative z-10 flex w-[65%] max-w-[280px] md:w-full md:max-w-lg lg:max-w-2xl justify-center mx-auto md:mx-0 order-1 md:order-2 mb-2 md:mb-0">
        <Image src="/assets/hero.png" alt="cuddle pile" width={700} height={600} className="object-contain drop-shadow-xl"/>
      </div>

    </section>
  );
}
