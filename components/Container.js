export default function Container({ children }) {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-rose-50 via-sky-50 to-indigo-50 overflow-hidden">
      <div className="absolute inset-0 opacity-70">
        <div className="absolute top-0 left-0 w-48 sm:w-72 h-48 sm:h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
        <div className="absolute top-0 right-0 w-48 sm:w-72 h-48 sm:h-72 bg-sky-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-48 sm:w-72 h-48 sm:h-72 bg-indigo-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
        <div className="absolute top-[65vh] left-1/2 -translate-x-1/2 w-48 sm:w-72 h-48 sm:h-72 bg-fuchsia-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
        <div className="absolute top-[100vh] right-0 w-48 sm:w-72 h-48 sm:h-72 bg-emerald-200 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-3000"></div>
        <div className="absolute top-[140vh] left-0 w-48 sm:w-72 h-48 sm:h-72 bg-violet-200 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
        <div className="absolute top-[180vh] left-0 w-48 sm:w-72 h-48 sm:h-72 bg-amber-200 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
        <div className="absolute top-[180vh] right-0 w-48 sm:w-72 h-48 sm:h-72 bg-teal-200 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
        <div className="absolute top-[220vh] left-0 w-48 sm:w-72 h-48 sm:h-72 bg-amber-200 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
        <div className="absolute top-[220vh] right-0 w-48 sm:w-72 h-48 sm:h-72 bg-rose-200 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-3000"></div>
      </div>
      <div className="relative min-h-screen flex flex-col">{children}</div>
    </div>
  );
}
