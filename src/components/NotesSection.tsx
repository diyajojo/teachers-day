"use client";

import { notes } from "@/data/content";

export default function NotesSection({ onBack }: { onBack?: () => void }) {
  return (
    <div className="relative w-full h-full bg-[#f6f5f1] overflow-y-auto p-4 md:p-8 lg:p-12">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Title */}
        <div className="flex justify-center items-center mb-10 mt-4 px-2">
          <div className="flex items-center gap-3">
            <p className="font-[Georgia,serif] italic text-gray-500/90 text-2xl md:text-3xl font-bold tracking-wide">
              we love youu teachers
            </p>
            <img src="/assets/teddy.png" alt="cute teddy" className="w-12 h-12 md:w-16 md:h-16 object-contain drop-shadow-sm shrink-0" />
          </div>
        </div>
        
        {/* Masonry Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 md:gap-6 space-y-4 md:gap-y-6 md:space-y-6">
          {notes.map(note => (
            <div 
              key={note.id} 
              className={`break-inside-avoid shadow-sm hover:shadow-md transition-shadow flex flex-col rounded-sm`}
              style={{ backgroundColor: note.bgColor, padding: '2rem' }}
            >
              <p className={`text-[10px] font-sans font-semibold uppercase tracking-widest opacity-60 mb-6 ${note.textColor}`}>
                {note.tag}
              </p>
              <h3 className={`font-[Georgia,serif] text-2xl md:text-3xl font-bold mb-4 leading-tight ${note.textColor}`}>
                {note.title}
              </h3>
              {note.body && (
                <p className={`font-[Georgia,serif] text-lg md:text-xl mb-8 leading-snug opacity-90 ${note.textColor}`}>
                  {note.body}
                </p>
              )}
              <div className={`mt-10 text-xs opacity-70 whitespace-pre-wrap font-sans leading-relaxed ${note.textColor}`}>
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
