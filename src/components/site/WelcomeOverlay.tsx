import { useEffect, useState } from "react";

export const WelcomeOverlay = ({ onComplete }: { onComplete: () => void }) => {
  const [show, setShow] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const hasVisited = localStorage.getItem("visited_before");
    if (hasVisited) {
      setShow(true);
      setIsVisible(true);
      // Faster, more snapier timing
      const timer = setTimeout(() => {
        setIsVisible(false);
        onComplete();
        setTimeout(() => setShow(false), 800);
      }, 1500);
      return () => clearTimeout(timer);
    } else {
      localStorage.setItem("visited_before", "true");
    }
  }, [onComplete]);

  if (!show) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-bg-deep transition-opacity duration-700 ${
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none" />
      <div className="absolute inset-0 bg-glow-radial opacity-30 pointer-events-none" />
      
      <div className="relative z-10 text-center animate-text-focus px-6">
        <div className="inline-flex items-center gap-2 nav-pill rounded-full px-4 py-1.5 mb-8 text-[11px] text-muted-foreground uppercase tracking-[0.2em]">
          <span className="w-1 h-1 rounded-full bg-glow-cyan shadow-[0_0_8px_hsl(var(--glow-cyan))]" />
          System Recognition
        </div>
        <h2 className="font-serif text-5xl md:text-8xl text-white glow-text leading-[1.1] tracking-tight">
          Welcome back to <br />
          <em className="italic font-serif text-foreground/80">AI Agent Services</em>
        </h2>
        <div className="mt-12 flex justify-center gap-2">
          {[0, 1, 2].map((i) => (
            <div 
              key={i}
              className="w-1 h-1 rounded-full bg-glow-cyan animate-pulse" 
              style={{ animationDelay: `${i * 150}ms` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
