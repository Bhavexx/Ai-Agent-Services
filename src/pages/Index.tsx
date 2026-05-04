import Nav from "@/components/site/Nav";
import { LeftLoader, RightSocial } from "@/components/site/SideRail";
import Hero from "@/components/site/Hero";
import Features from "@/components/site/Features";
import Terminal from "@/components/site/Terminal";
import OTC from "@/components/site/OTC";
import Contact from "@/components/site/Contact";
import Footer from "@/components/site/Footer";
import { WelcomeOverlay } from "@/components/site/WelcomeOverlay";
import { useEffect, useState } from "react";

const Index = () => {
  const [isRevealing, setIsRevealing] = useState(false);

  useEffect(() => {
    document.title = "TDA — Transforming Digital Asset Solutions";
    const desc = document.querySelector('meta[name="description"]');
    const content =
      "Trillion Digital Assets — institutional-grade OTC trading, multi-currency settlement and advanced trading platforms for digital assets.";
    if (desc) desc.setAttribute("content", content);
    else {
      const m = document.createElement("meta");
      m.name = "description";
      m.content = content;
      document.head.appendChild(m);
    }
  }, []);

  return (
    <div className="relative bg-bg-deep overflow-x-hidden">
      <WelcomeOverlay onComplete={() => setIsRevealing(true)} />
      
      <div className={`relative min-h-screen text-foreground ${isRevealing ? 'animate-page-reveal' : ''}`}>
        <Nav />
        <LeftLoader />
        <RightSocial />
        <main>
          <Hero />
          <Features />
          <Terminal />
          <OTC />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Index;
