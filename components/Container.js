"use client";

export default function Container({ children }) {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-rose-50 via-sky-50 to-indigo-50 overflow-hidden">
      <div className="absolute inset-0 opacity-70" style={{ contain: 'content', willChange: 'transform' }}>
        {/* Landing page blobs - keeping these 3 */}
        <div 
          className="absolute top-0 left-0 w-48 sm:w-72 h-48 sm:h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-lg animate-blob" 
          style={{ backfaceVisibility: 'hidden', transform: 'translateZ(0)' }}
        ></div>
        <div 
          className="absolute top-0 right-0 w-48 sm:w-72 h-48 sm:h-72 bg-sky-300 rounded-full mix-blend-multiply filter blur-lg animate-blob animation-delay-2000"
          style={{ backfaceVisibility: 'hidden', transform: 'translateZ(0)' }}
        ></div>
        <div 
          className="absolute -bottom-8 left-20 w-48 sm:w-72 h-48 sm:h-72 bg-indigo-300 rounded-full mix-blend-multiply filter blur-lg animate-blob animation-delay-4000"
          style={{ backfaceVisibility: 'hidden', transform: 'translateZ(0)' }}
        ></div>
        
        {/* Additional blobs for scrolling sections - reduced to 2 */}
        <div 
          className="absolute top-[140vh] left-0 w-48 sm:w-72 h-48 sm:h-72 bg-violet-200 rounded-full mix-blend-multiply filter blur-lg animate-blob"
          style={{ backfaceVisibility: 'hidden', transform: 'translateZ(0)' }}
        ></div>
        <div 
          className="absolute top-[180vh] right-0 w-48 sm:w-72 h-48 sm:h-72 bg-teal-200 rounded-full mix-blend-multiply filter blur-lg animate-blob animation-delay-2000"
          style={{ backfaceVisibility: 'hidden', transform: 'translateZ(0)' }}
        ></div>
      </div>
      <div className="relative min-h-screen flex flex-col" style={{ contain: 'content' }}>{children}</div>
    </div>
  );
}
