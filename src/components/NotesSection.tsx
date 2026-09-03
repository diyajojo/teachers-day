"use client";

const notes = [
  {
    id: 1,
    tag: "LETTER",
    title: "Dear Ma'am,",
    body: "Your class was the reason I stopped being afraid of getting things wrong.",
    author: "Ananya Rao",
    subtext: "for Mrs. Anjali Menon\nClass of 2024 · Mumbai\n\nWritten after the final bell.",
    bgColor: "#e27c70",
    textColor: "text-gray-900",
  },
  {
    id: 2,
    tag: "CLASSROOM MEMORY",
    title: "The year everything changed.",
    body: "And the year Ms. Farah let us keep the class plant.",
    author: "Ishita Kapoor",
    subtext: "for Ms. Farah Ali\nDelhi Public School · 2009\n\nSaved from a classroom memory.",
    bgColor: "#ffffff",
    textColor: "text-gray-900",
  },
  {
    id: 3,
    tag: "FOR MY TEACHER",
    title: "The last bench club",
    body: "We learned algebra, friendship, and how to share one samosa between four people.",
    author: "Neha Singh",
    subtext: "for Mr. Arvind Kumar\nLucknow · 2012",
    bgColor: "#ffffff",
    textColor: "text-gray-900",
  },
  {
    id: 4,
    tag: "A SMALL CONFESSION",
    title: "You made reading feel like a place I could go to.",
    body: "I still carry that place with me.",
    author: "Meera Nair",
    subtext: "for Mrs. Priya Iyer\nBengaluru · 2016",
    bgColor: "#d5cce6",
    textColor: "text-gray-900",
  },
  {
    id: 5,
    tag: "FROM THE NOTEBOOK",
    title: "You taught me to ask better questions.",
    body: "That turned out to be the answer.",
    author: "Sana Khan",
    subtext: "for Dr. Rao\nHyderabad · 2017",
    bgColor: "#e8c85a",
    textColor: "text-gray-900",
  },
  {
    id: 6,
    tag: "A LITTLE NOTE",
    title: "Thank you for believing in me",
    body: "before I knew how to believe in myself.",
    author: "Dev Patel",
    subtext: "for Mrs. Kavita Shah\nClass 10-B · Ahmedabad",
    bgColor: "#efdf6d",
    textColor: "text-gray-900",
  },
  {
    id: 7,
    tag: "SOMETHING TRUE",
    title: "Some teachers teach subjects.",
    body: "The best ones teach you how to see the world.",
    author: "Rohan Mehta",
    subtext: "for Mr. Thomas\nSt. Xavier's · 2018",
    bgColor: "#3d4040",
    textColor: "text-white",
  },
  {
    id: 8,
    tag: "ONE SENTENCE",
    title: "To the teacher who stayed after class.",
    body: "",
    author: "Aarav Joshi",
    subtext: "for Ms. Farah Ali\nPune · 2021\n\nSomebody wrote this at 2:14 AM.",
    bgColor: "#a4c1a7",
    textColor: "text-gray-900",
  },
  {
    id: 9,
    tag: "CLASS PHOTO",
    title: "The people who made school feel like home.",
    body: "Somewhere between the bells, we grew up.",
    author: "Class 8C",
    subtext: "for Mrs. Joseph\nKolkata · 2020",
    bgColor: "#e8a786",
    textColor: "text-gray-900",
  },
  {
    id: 10,
    tag: "THANK YOU",
    title: "For making ordinary days feel important.",
    body: "Happy Teacher's Day to the original storyteller.",
    author: "Kabir Khan",
    subtext: "for Mr. Joseph\nKolkata · 2020",
    bgColor: "#a2c3d4",
    textColor: "text-gray-900",
  },
];

export default function NotesSection({ onBack }: { onBack?: () => void }) {
  return (
    <div className="relative w-full h-full bg-[#f6f5f1] overflow-y-auto p-4 md:p-8 lg:p-12">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Title with Back button if needed */}
        <div className="flex justify-between items-center mb-10 mt-4 px-2">
          <div className="flex items-center gap-3">
            <p className="font-[Georgia,serif] italic text-gray-500/90 text-2xl md:text-3xl font-bold tracking-wide">
              we love youu teachers
            </p>
            <img src="/assets/teddy.png" alt="cute teddy" className="w-12 h-12 md:w-16 md:h-16 object-contain drop-shadow-sm shrink-0" />
          </div>
          {onBack && (
            <button
              onClick={onBack}
              className="text-sm font-[Georgia,serif] italic text-gray-500 hover:text-gray-800 transition-colors flex items-center gap-2 group bg-white/50 px-4 py-2 rounded-full shadow-sm"
            >
              <svg className="w-4 h-4 group-hover:-translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <path d="M19 12H5M12 5l-7 7 7 7" />
              </svg>
              Go Back
            </button>
          )}
        </div>
        
        {/* Masonry Grid */}
        <div className="columns-2 md:columns-3 lg:columns-4 xl:columns-5 gap-3 md:gap-5 space-y-3 md:space-y-5">
          {notes.map(note => (
            <div 
              key={note.id} 
              className={`break-inside-avoid shadow-sm hover:shadow-md transition-shadow flex flex-col rounded-sm p-4 md:p-6 lg:p-8`}
              style={{ backgroundColor: note.bgColor }}
            >
              <p className={`text-[9px] md:text-[10px] font-sans font-semibold uppercase tracking-widest opacity-60 mb-4 md:mb-6 ${note.textColor}`}>
                {note.tag}
              </p>
              <h3 className={`font-[Georgia,serif] text-lg md:text-2xl lg:text-3xl font-bold mb-3 md:mb-4 leading-tight ${note.textColor}`}>
                {note.title}
              </h3>
              {note.body && (
                <p className={`font-[Georgia,serif] text-sm md:text-lg lg:text-xl mb-6 md:mb-8 leading-snug opacity-90 ${note.textColor}`}>
                  {note.body}
                </p>
              )}
              <div className={`mt-6 md:mt-10 text-[10px] md:text-xs opacity-70 whitespace-pre-wrap font-sans leading-relaxed ${note.textColor}`}>
                <strong>{note.author}</strong><br/>
                {note.subtext}
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
