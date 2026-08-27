import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full flex-1 flex flex-col justify-center overflow-hidden">
      {/* Decorative background elements (floating leaves & sparkles) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <span className="absolute top-1/4 right-[10%] text-pink-300 animate-float-delayed text-xl">🍂</span>
        <span className="absolute top-1/3 right-[30%] text-orange-300 animate-float text-sm">🍁</span>
        <span className="absolute bottom-1/4 right-[20%] text-pink-400 animate-float-delayed text-lg">🍂</span>
        <span className="absolute top-1/2 left-[5%] text-orange-200 animate-float text-xl">✨</span>
        <span className="absolute bottom-1/3 left-[40%] text-pink-300 animate-float text-2xl">🍁</span>
      </div>

      <div className="w-full max-w-7xl mx-auto px-6 py-8 md:py-16 flex flex-col md:flex-row items-center justify-between gap-12 relative z-10">
        {/* Left Side: Cute Appreciation Message */}
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
          <div className="relative group">
            {/* Soft bubbly background for the text */}
            <div className="absolute -inset-6 bg-gradient-to-br from-white/80 to-pink-100/80 backdrop-blur-sm rounded-[3rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-pink-200/50 -z-10 transition-transform duration-500 group-hover:scale-[1.02]"></div>

            <div className="relative z-10 p-4 md:p-8">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#d63384] leading-tight drop-shadow-sm">
                Some lessons <br />
                <span className="italic text-pink-400 font-light">never leave</span> <br />
                the room they <br />
                were taught in.
              </h2>

              <div className="mt-8 space-y-4">
                <p className="text-gray-600 text-lg md:text-xl font-medium leading-relaxed">
                  To the ones who make learning magical 🌸
                </p>
                <p className="text-gray-500 text-sm md:text-base leading-relaxed max-w-md">
                  Thank you for the patience, the warm smiles, and the endless encouragement on all our ordinary days. You don&apos;t just teach lessons, you shape futures and touch hearts.
                  <br />
                  <br />
                  <span className="font-semibold text-pink-400">This is our little attempt at saying a massive THANK YOU! 💖</span>
                </p>
              </div>
            </div>

            {/* Cute floating decoration near the text box */}
            <div className="absolute -bottom-6 -right-6 text-3xl animate-float">🧸</div>
          </div>
        </div>

        {/* Right Side: Cute Teacher Illustration */}
        <div className="w-full md:w-1/2 flex justify-center items-center relative">
          <div className="relative w-72 h-72 md:w-[28rem] md:h-[28rem] animate-float-delayed drop-shadow-xl">
            {/* A soft glowing blob behind the teacher */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-pink-200/30 rounded-full blur-3xl -z-10"></div>
            <Image
              src="/assets/teacher.png"
              alt="Cute Teacher Illustration"
              fill
              className="object-contain"
              priority
            />
          </div>

          {/* Floating paper aeroplane around the teacher */}
          <div className="absolute top-10 right-10 w-12 h-12 transform rotate-[15deg] animate-float">
            <Image
              src="/assets/aeroplane.png"
              alt="Aeroplane"
              fill
              className="object-contain opacity-80"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
