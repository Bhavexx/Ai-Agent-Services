import { Code2, TrendingUp, ShoppingCart, PhoneCall } from "lucide-react";
import glow from "@/assets/glow-card.jpg";

const features = [
  {
    icon: Code2,
    title: "AI Vibe Coding",
    desc: "Accelerate software creation with AI-assisted vibe coding. We help translate your creative vision into production-ready code seamlessly and intuitively.",
    featured: false,
  },
  {
    icon: TrendingUp,
    title: "Business Development",
    desc: "Empower your strategic growth. Our AI systems analyze market trends, generate qualified leads, and optimize your outreach pipelines automatically.",
    featured: false,
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce Solutions",
    desc: "Revolutionize the shopping experience. From intelligent product recommendations to automated inventory management, we scale your online store.",
    featured: false,
  },
  {
    icon: PhoneCall,
    title: "24/7 Agentic Calling",
    desc: "Never miss a customer interaction. Deploy sophisticated AI voice agents that handle support, scheduling, and inquiries round the clock with empathy.",
    featured: true,
  },
];

const Features = () => (
  <section id="services" className="relative py-32 px-6">
    <div className="max-w-7xl mx-auto mb-16 text-center">
      <div className="inline-flex items-center gap-2 nav-pill rounded-full px-4 py-1.5 mb-6 text-[12px] text-muted-foreground">
        <span className="w-1 h-1 rounded-full bg-foreground/60" /> Our Services
      </div>
      <h2 className="font-serif text-3xl md:text-5xl glow-text mb-6">
        Next-Generation AI Solutions
      </h2>
      <p className="text-muted-foreground max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
        We deliver enterprise-grade artificial intelligence services designed to automate workflows, accelerate development, and scale your business operations effortlessly.
      </p>
    </div>

    <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-6">
      {features.map((f, i) => {
        const Icon = f.icon;
        return (
          <div
            key={i}
            className={`relative glass-card rounded-3xl p-8 pt-10 min-h-[340px] flex flex-col items-center text-center overflow-hidden ${
              f.featured ? "md:-translate-y-4 shadow-[0_0_40px_hsl(var(--glow-blue)/0.15)]" : ""
            }`}
          >
            {f.featured && (
              <img
                src={glow}
                alt=""
                className="absolute inset-0 w-full h-full object-cover opacity-90 pointer-events-none"
                loading="lazy"
              />
            )}
            <div className="relative z-10 flex flex-col items-center">
              <div className="w-14 h-14 rounded-2xl border border-border bg-background/50 flex items-center justify-center mb-6 shadow-[0_0_30px_hsl(var(--glow-blue)/0.25)]">
                <Icon className="w-6 h-6 text-glow-cyan" strokeWidth={1.5} />
              </div>
              <h3 className="font-serif text-xl mb-4 leading-tight glow-text">
                {f.title}
              </h3>
              <p className="text-[13px] text-muted-foreground leading-relaxed">{f.desc}</p>
            </div>
          </div>
        );
      })}
    </div>
  </section>
);

export default Features;
