import { CheckCircle2 } from "lucide-react";

const whatWeDo = [
  "Helping e-commerce websites scale effortlessly",
  "24/7 Agentic Calling available for support",
  "Assistance with Vibe Coding and rapid development",
  "Automating operations to reduce human effort",
];

const OTC = () => (
  <section id="about-us" className="relative py-32 px-6 overflow-hidden">
    {/* Gradient overlays */}
    <div className="absolute inset-0 bg-gradient-to-b from-bg-deep via-transparent to-bg-deep pointer-events-none" />

    {/* Text content */}
    <div className="relative z-10 max-w-7xl mx-auto min-h-[60vh] flex flex-col justify-center pointer-events-none">
      <div className="w-full flex flex-col md:flex-row gap-16 items-center md:items-start justify-between">
        
        <div className="flex-1 pointer-events-auto">
          {/* ① Badge */}
          <div className="inline-flex items-center gap-2 nav-pill rounded-full px-4 py-1.5 mb-6 text-[12px] text-muted-foreground">
            <span className="w-1 h-1 rounded-full bg-foreground/60" /> About Us
          </div>

          {/* ② Main headline */}
          <h2 className="font-serif text-3xl md:text-5xl max-w-2xl glow-text leading-tight text-left">
            Empowering Your Business With <em>Intelligent Agents.</em>
          </h2>

          {/* ③ Sub-headline */}
          <p className="mt-6 max-w-xl text-left text-base text-muted-foreground leading-relaxed">
            We specialize in building intelligent AI agents tailored to your unique needs. From supercharging e-commerce platforms to providing 24/7 agentic voice support and assisting with vibe coding, we transform how you work.
          </p>
        </div>
        
        <div className="flex-1 w-full pointer-events-auto">
          {/* ④ What We Do block */}
          <div className="max-w-xl w-full glass-card rounded-2xl p-8 ml-auto">
            <p className="text-[11px] uppercase tracking-widest text-muted-foreground mb-1">
              What We Do
            </p>
            <h3 className="font-serif text-xl md:text-2xl text-foreground mb-4 leading-snug">
              Comprehensive AI Agent Services
            </h3>
            <p className="text-xs text-muted-foreground mb-6 leading-relaxed">
              We design and deploy tailored AI systems that:
            </p>
            <ul className="space-y-4 mb-6">
              {whatWeDo.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-sm text-muted-foreground"
                >
                  <CheckCircle2
                    className="w-4 h-4 mt-0.5 shrink-0 text-glow-cyan"
                    strokeWidth={2}
                  />
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-[11px] text-muted-foreground/70 italic border-t border-border/40 pt-4">
              Available around the clock to ensure your operations never sleep.
            </p>
          </div>
        </div>

      </div>
    </div>
  </section>
);

export default OTC;
