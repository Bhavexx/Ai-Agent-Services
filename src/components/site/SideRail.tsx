import { Twitter, Linkedin, Send, Instagram } from "lucide-react";
import { useEffect, useState } from "react";

export const LeftLoader = () => {
  const [pct, setPct] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      const p = max > 0 ? Math.round((h.scrollTop / max) * 100) : 0;
      setPct(Math.min(100, Math.max(0, p)));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div className="hidden md:flex fixed left-6 top-1/2 -translate-y-1/2 z-40 flex-col items-center gap-2">
      <div className="relative h-32 w-3 rounded-full border border-border/80 overflow-hidden bg-background/40">
        <div
          className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-glow-blue/80 to-glow-cyan/80 shadow-[0_0_20px_hsl(var(--glow-blue)/0.6)] transition-[height] duration-200 ease-out"
          style={{ height: `${pct}%` }}
        />
        <div className="absolute inset-0 bg-[repeating-linear-gradient(0deg,transparent_0_4px,hsl(var(--bg-deep))_4px_5px)] pointer-events-none" />
      </div>
      <span className="text-[10px] tracking-widest text-muted-foreground tabular-nums">
        {pct}%
      </span>
    </div>
  );
};

const socialLinks = [
  { Icon: Twitter, href: "https://x.com/bhaviknaik05", label: "Twitter / X" },
  { Icon: Linkedin, href: "https://www.linkedin.com/in/bhavik-naik-/", label: "LinkedIn" },
  { Icon: Instagram, href: "https://www.instagram.com/bhavik_naik/", label: "Instagram" },
];

export const RightSocial = () => (
  <div className="hidden md:flex fixed right-6 top-1/2 -translate-y-1/2 z-40 flex-col gap-2">
    {socialLinks.map(({ Icon, href, label }) => (
      <a
        key={label}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={label}
        className="w-9 h-9 rounded-lg nav-pill flex items-center justify-center text-foreground/80 hover:text-foreground hover:shadow-[0_0_18px_hsl(var(--glow-blue)/0.5)] transition-all"
      >
        <Icon className="w-4 h-4" />
      </a>
    ))}
  </div>
);
