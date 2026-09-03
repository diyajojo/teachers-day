"use client";
import { useState } from "react";
import { notes } from "@/data/content";

export default function NotesSection({ onBack }: { onBack?: () => void }) {
  const [selectedNote, setSelectedNote] = useState<typeof notes[0] | null>(null);

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
              onClick={() => setSelectedNote(note)}
              className={`break-inside-avoid shadow-sm hover:shadow-md transition-all hover:-translate-y-1 cursor-pointer flex flex-col rounded-sm`}
              style={{ backgroundColor: note.bgColor, padding: '2rem' }}
            >
              <p className={`text-[10px] font-sans font-semibold uppercase tracking-widest opacity-60 mb-6 ${note.textColor}`}>
                {note.tag}
              </p>
              <h3 className={`font-[Georgia,serif] text-xl md:text-2xl font-bold mb-4 leading-tight ${note.textColor}`}>
                {note.title}
              </h3>
              {note.body && (
                <p className={`font-[Georgia,serif] text-base md:text-lg mb-8 leading-snug opacity-90 line-clamp-5 ${note.textColor}`}>
                  {note.body}
                </p>
              )}
              <div className={`mt-auto pt-4 text-xs opacity-70 whitespace-pre-wrap font-sans leading-relaxed ${note.textColor}`}>
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
            className="relative z-10 w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-md shadow-2xl flex flex-col transition-transform"
            style={{ backgroundColor: selectedNote.bgColor, padding: '3rem' }}
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={() => setSelectedNote(null)}
              className={`absolute top-6 right-6 opacity-50 hover:opacity-100 transition-opacity ${selectedNote.textColor}`}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
            <p className={`text-xs font-sans font-semibold uppercase tracking-widest opacity-60 mb-6 ${selectedNote.textColor}`}>
              {selectedNote.tag}
            </p>
            <h3 className={`font-[Georgia,serif] text-3xl md:text-4xl font-bold mb-6 leading-tight ${selectedNote.textColor}`}>
              {selectedNote.title}
            </h3>
            {selectedNote.body && (
              <p className={`font-[Georgia,serif] text-lg md:text-xl mb-10 leading-relaxed opacity-95 whitespace-pre-wrap ${selectedNote.textColor}`}>
                {selectedNote.body}
              </p>
            )}
            <div className={`mt-auto text-sm opacity-80 whitespace-pre-wrap font-sans leading-relaxed border-t border-black/10 pt-6 ${selectedNote.textColor}`}>
              <strong>{selectedNote.author}</strong><br/>
              {selectedNote.subtext}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
