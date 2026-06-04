import { useEffect, useState } from 'react';

function App() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center overflow-hidden relative">
      {/* Subtle background texture */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-50 via-gray-100 to-gray-200" />

      {/* Thin horizontal line accent */}
      <div
        className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-400/20 to-transparent"
        style={{ transform: 'translateY(-180px)' }}
      />

      <div
        className="relative z-10 text-center px-6 sm:px-8 transition-all duration-1000 ease-out"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateY(0)' : 'translateY(24px)',
        }}
      >
        {/* Top label */}
        <div className="mb-8 sm:mb-12 flex items-center justify-center gap-3">
          <div className="h-px w-10 sm:w-12 bg-slate-400/60" />
          <span className="text-slate-600 text-sm sm:text-base tracking-[0.3em] uppercase font-light">
            公開準備中
          </span>
          <div className="h-px w-10 sm:w-12 bg-slate-400/60" />
        </div>

        {/* Main heading */}
        <h1 className="text-gray-800 font-extralight tracking-[0.15em] mb-6 sm:mb-8" style={{ fontSize: 'clamp(2.2rem, 9vw, 4.5rem)', letterSpacing: '0.12em' }}>
          Coming Soon
        </h1>

        {/* Thin separator */}
        <div className="flex items-center justify-center gap-4 my-8 sm:my-10">
          <div className="h-px w-8 sm:w-10 bg-gray-300" />
          <div className="w-1.5 h-1.5 rounded-full bg-gray-300" />
          <div className="h-px w-8 sm:w-10 bg-gray-300" />
        </div>

        {/* Sub text */}
        <p className="text-gray-500 font-light tracking-widest text-sm sm:text-base mb-12 sm:mb-16">
          ただいまサイトを準備しております
        </p>

        {/* Bottom decorative element */}
        <div className="flex items-center justify-center gap-2">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="w-1.5 h-1.5 rounded-full bg-gray-300"
              style={{
                animation: `pulse 2s ease-in-out ${i * 0.4}s infinite`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Corner accents */}
      <div className="absolute top-6 sm:top-8 left-6 sm:left-8 w-4 sm:w-6 h-4 sm:h-6 border-l border-t border-gray-300" />
      <div className="absolute top-6 sm:top-8 right-6 sm:right-8 w-4 sm:w-6 h-4 sm:h-6 border-r border-t border-gray-300" />
      <div className="absolute bottom-6 sm:bottom-8 left-6 sm:left-8 w-4 sm:w-6 h-4 sm:h-6 border-l border-b border-gray-300" />
      <div className="absolute bottom-6 sm:bottom-8 right-6 sm:right-8 w-4 sm:w-6 h-4 sm:h-6 border-r border-b border-gray-300" />
    </div>
  );
}

export default App;
