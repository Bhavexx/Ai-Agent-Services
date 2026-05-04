import { Code2, TrendingUp, ShoppingCart, PhoneCall } from "lucide-react";

const cards = [
  {
    icon: Code2,
    title: "Intelligent",
    em: "Vibe Coding",
    desc: "Accelerate your development lifecycle with context-aware, AI-assisted code generation tailored to your exact standards.",
    chips: ["Rapid Prototyping", "Clean Code"],
  },
  {
    icon: TrendingUp,
    title: "Automated",
    em: "Business Growth",
    desc: "Harness AI to analyze market gaps, engage prospects, and drive qualified leads seamlessly into your sales funnel.",
    chips: ["Lead Generation", "Market Analysis"],
  },
  {
    icon: ShoppingCart,
    title: "Smart",
    em: "E-Commerce",
    desc: "Deliver personalized shopping experiences with AI-driven product recommendations and dynamic inventory management.",
    chips: ["Personalization", "Automation"],
  },
  {
    icon: PhoneCall,
    title: "24/7",
    em: "Agentic Calling",
    desc: "Ensure zero missed opportunities with sophisticated AI voice agents that handle customer inquiries with human-like empathy.",
    chips: ["Voice Agents", "Always Active"],
  },
];

const Terminal = () => (
  <section id="why-us" className="relative py-32 px-6 border-t border-border/40">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 nav-pill rounded-full px-4 py-1.5 mb-6 text-[12px] text-muted-foreground">
          <span className="w-1 h-1 rounded-full bg-foreground/60" /> Why choose us
        </div>
        <h2 className="font-serif text-4xl md:text-6xl tracking-tight glow-text max-w-3xl mx-auto leading-tight mb-6">
          Redefining Excellence With <em>AI Automation</em>
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
          We combine cutting-edge artificial intelligence with deep industry expertise to provide solutions that don't just solve problems—they create new opportunities.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {cards.map((c, i) => {
          const Icon = c.icon;
          return (
            <div
              key={i}
              className="glass-card rounded-3xl p-7 min-h-[400px] flex flex-col justify-between group hover:border-glow-blue/40 transition-all"
            >
              <div className="relative h-44 rounded-2xl border border-border/60 bg-gradient-to-br from-background/40 to-secondary/40 overflow-hidden grid-bg flex items-center justify-center">
                <div className="absolute inset-0 bg-glow-radial opacity-40" />
                <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-secondary to-background border border-border flex items-center justify-center shadow-[0_0_30px_hsl(var(--glow-blue)/0.4)] group-hover:scale-110 transition-transform duration-500">
                  <Icon className="w-7 h-7 text-glow-cyan" strokeWidth={1.4} />
                </div>
                <div className="absolute top-3 left-3 right-3 flex flex-wrap gap-2">
                  {c.chips.map((chip) => (
                    <span
                      key={chip}
                      className="text-[10px] px-2 py-1 rounded-full nav-pill text-muted-foreground"
                    >
                      {chip}
                    </span>
                  ))}
                </div>
              </div>
              <div className="mt-6 flex-1 flex flex-col">
                <h3 className="font-serif text-2xl leading-tight">
                  {c.title} <em className="text-foreground/85 block mt-1">{c.em}</em>
                </h3>
                <p className="mt-4 text-sm text-muted-foreground leading-relaxed flex-1">{c.desc}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);

export default Terminal;
