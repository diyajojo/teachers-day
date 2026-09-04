"use client";
import { useState } from "react";
import { notes } from "@/data/content";

export default function NotesSection({ onBack }: { onBack?: () => void }) {
  const [selectedNote, setSelectedNote] = useState<typeof notes[0] | null>(null);

  return (
    <div className="relative w-full h-full bg-[#f6f5f1] overflow-y-auto p-4 md:p-8 lg:p-12">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Title */}
        <div className="flex justify-center items-center mb-10 mt-12 md:mt-6 px-2">
          <div className="flex items-center gap-3">
            <p className="font-[Georgia,serif] italic text-gray-500/90 text-[1.1rem] sm:text-2xl md:text-3xl font-bold tracking-wide text-center whitespace-nowrap">
              Things We Never Got to Say
            </p>
          </div>
        </div>
        
        {/* Masonry Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-2 xl:columns-3 gap-4 md:gap-10 space-y-4 md:space-y-10">
          {notes.map((note, index) => (
            <div 
              key={note.id} 
              onClick={() => setSelectedNote(note)}
              className={`break-inside-avoid shadow-sm hover:shadow-md transition-all hover:-translate-y-1 cursor-pointer flex flex-col rounded-sm p-6 md:p-14 ${index % 2 === 0 ? 'rotate-1' : '-rotate-1 hover:rotate-0'}`}
              style={{ backgroundColor: note.bgColor }}
            >
              <p className={`text-[8px] md:text-[10px] font-sans font-semibold uppercase tracking-widest opacity-60 mb-4 md:mb-6 ${note.textColor}`}>
                {note.tag}
              </p>
              <h3 className={`font-[Georgia,serif] text-xl md:text-4xl font-bold mb-4 md:mb-6 leading-tight break-words ${note.textColor}`}>
                {note.title}
              </h3>
              {note.body && (
                <p className={`font-[Georgia,serif] text-base md:text-2xl mb-8 md:mb-10 leading-snug opacity-90 line-clamp-4 md:line-clamp-5 break-words ${note.textColor}`}>
                  {note.body}
                </p>
              )}
              <div className={`mt-auto pt-3 text-[10px] md:text-xs opacity-70 whitespace-pre-wrap font-sans leading-relaxed break-words ${note.textColor}`}>
                <strong>{note.author}</strong><br/>
                {note.subtext}
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Note Popup Modal */}
      {selectedNote && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
          onClick={() => setSelectedNote(null)}
        >
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity" />
          <div 
            className="relative z-10 w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-md shadow-2xl flex flex-col p-5 pt-10 md:p-12"
            style={{ backgroundColor: selectedNote.bgColor }}
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={() => setSelectedNote(null)}
              className={`absolute top-4 right-4 md:top-6 md:right-6 opacity-50 hover:opacity-100 transition-opacity ${selectedNote.textColor}`}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
            <p className={`text-[10px] md:text-xs font-sans font-semibold uppercase tracking-widest opacity-60 mb-4 ${selectedNote.textColor}`}>
              {selectedNote.tag}
            </p>
            <h3 className={`font-[Georgia,serif] text-xl md:text-4xl font-bold mb-4 leading-tight break-words ${selectedNote.textColor}`}>
              {selectedNote.title}
            </h3>
            {selectedNote.body && (
              <p className={`font-[Georgia,serif] text-sm md:text-xl mb-6 leading-relaxed opacity-95 whitespace-pre-wrap break-words ${selectedNote.textColor}`}>
                {selectedNote.body}
              </p>
            )}
            <div className={`mt-auto text-xs md:text-sm opacity-80 whitespace-pre-wrap font-sans leading-relaxed border-t border-black/10 pt-4 break-words ${selectedNote.textColor}`}>
              <strong>{selectedNote.author}</strong><br/>
              {selectedNote.subtext}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
