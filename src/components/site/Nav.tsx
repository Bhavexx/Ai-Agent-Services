import { Globe, Plus } from "lucide-react";

const links = ["Home", "Services", "About Us", "Contact Us"];

const Nav = () => (
  <header className="fixed top-0 left-0 right-0 z-50 px-6 lg:px-10 pt-5">
    <div className="flex items-center justify-between">
      {/* Logo */}
      <a href="#" className="flex items-center gap-2 text-foreground">
        <span className="relative inline-flex items-center justify-center w-7 h-7">
          <span className="absolute inset-0 rounded-full border border-foreground/70" />
          <span className="absolute inset-[5px] rounded-full bg-foreground/80" />
        </span>
        <span className="font-medium tracking-[0.25em] text-sm">AI Agent Services </span>
      </a>

      {/* Center pill nav */}
      <nav className="hidden md:flex nav-pill rounded-full px-2 py-1.5">
        {links.map((l) => (
          <a
            key={l}
            href={`#${l.toLowerCase().replace(/\s+/g, "-")}`}
            className="px-4 py-1.5 text-[13px] text-muted-foreground hover:text-foreground transition-colors rounded-full"
          >
            {l}
          </a>
        ))}
      </nav>

      {/* Right actions */}
      <div className="flex items-center gap-2">
        <button className="hidden sm:flex nav-pill rounded-full items-center gap-1.5 px-3.5 py-1.5 text-[13px] text-muted-foreground hover:text-foreground transition-colors">
          <Globe className="w-3.5 h-3.5" /> English
        </button>
        <button className="hidden sm:flex nav-pill rounded-full items-center gap-1.5 px-3.5 py-1.5 text-[13px] text-foreground/90 hover:text-foreground transition-colors">
          <Plus className="w-3.5 h-3.5" /> Log In
        </button>
        <button className="btn-primary-glow rounded-full px-4 py-1.5 text-[13px] font-medium text-white">
          Sign up
        </button>
      </div>
    </div>
  </header>
);

export default Nav;
