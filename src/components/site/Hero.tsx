import { Suspense, lazy } from "react";
import { ArrowDown, Loader2 } from "lucide-react";

const Spline = lazy(() => import("@splinetool/react-spline"));

const Hero = () => (
  <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
    {/* Background cubes */}
    <div className="absolute inset-0 w-full h-full opacity-90">
      <Suspense 
        fallback={
          <div className="w-full h-full bg-bg-deep flex items-center justify-center">
            <Loader2 className="w-8 h-8 text-glow-cyan animate-spin opacity-50" />
          </div>
        }
      >
        <Spline
          scene="https://prod.spline.design/qck-bBrhz3l7pFMz/scene.splinecode"
          style={{ width: "100%", height: "100%" }}
        />
      </Suspense>
    </div>
    <div className="absolute inset-0 bg-hero-radial pointer-events-none" />
    <div className="absolute inset-0 bg-gradient-to-b from-bg-deep/60 via-transparent to-bg-deep pointer-events-none" />

    <div className="relative z-10 text-center px-6 max-w-5xl mx-auto animate-fade-up pointer-events-none">
      <div className="inline-flex items-center gap-2 nav-pill rounded-full px-4 py-1.5 mb-8 text-[12px] text-muted-foreground pointer-events-auto tracking-wide uppercase">
        <span className="w-1.5 h-1.5 rounded-full bg-glow-cyan shadow-[0_0_8px_hsl(var(--glow-cyan))]" />
        AI Agent Services  
      </div>
      <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-[5.5rem] leading-[1.1] tracking-tight text-balance glow-text max-w-4xl mx-auto">
        AI Agents That Work 24/7
        <br />
        For <em className="italic font-serif text-foreground/85">Your Business</em>
      </h1>
      <p className="mt-8 max-w-2xl mx-auto text-base md:text-lg text-muted-foreground leading-relaxed font-light">
        Automate tasks, handle customer conversations, generate leads, and streamline operations with intelligent AI agents built for growth.
      </p>
      
      <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 pointer-events-auto">
        <button className="nav-pill rounded-full px-8 py-3 text-sm font-medium text-foreground hover:bg-white/5 transition-all w-full sm:w-auto">
          Explore Services
        </button>
        <button className="btn-primary-glow rounded-full px-8 py-3 text-sm font-medium text-white w-full sm:w-auto">
          Book a Consultation
        </button>
      </div>
    </div>

    {/* Scroll indicator */}
    <div className="absolute bottom-8 right-8 z-10 flex items-center gap-2 text-[12px] text-muted-foreground pointer-events-none">
      <ArrowDown className="w-3.5 h-3.5" />
      <span>Scroll <span className="text-foreground">down</span></span>
    </div>
  </section>
);

export default Hero;
