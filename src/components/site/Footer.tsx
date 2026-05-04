import { Globe } from "lucide-react";

type ColItem = { label: string; href: string };
type Col = { title: string; items: ColItem[] };

const cols: Col[] = [
  { title: "Contacts", items: [{ label: "Contact", href: "#" }, { label: "Schedule a call", href: "#" }] },
  { title: "Company", items: [{ label: "About us", href: "#" }, { label: "Solutions", href: "#" }, { label: "Our clients", href: "#" }] },
  { title: "Legal", items: [{ label: "Licenses", href: "#" }, { label: "AML/CTF", href: "#" }, { label: "Disclosures", href: "#" }] },
  { title: "Resources", items: [{ label: "FAQ", href: "#" }, { label: "Careers", href: "#" }, { label: "Referrals", href: "#" }] },
  {
    title: "Follow us",
    items: [
      { label: "LinkedIn", href: "https://www.linkedin.com/in/bhavik-naik-/" },
      { label: "Twitter", href: "https://x.com/bhaviknaik05" },
      { label: "Instagram", href: "https://www.instagram.com/bhavik_naik/" },
    ],
  },
];

const Footer = () => (
  <footer className="relative pt-24 pb-10 px-6 overflow-hidden border-t border-border/40">
    <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-glow-blue/15 blur-3xl pointer-events-none" />
    <div className="relative max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-16 mb-16">
        <div>
          <div className="flex items-center gap-3 mb-8">
            <span className="relative inline-flex items-center justify-center w-12 h-12">
              <span className="absolute inset-0 rounded-full border border-foreground/60" />
              <span className="absolute inset-2 rounded-full bg-foreground/80" />
            </span>
            <span className="font-medium tracking-[0.25em] text-3xl">Agent Services </span>
          </div>
          <div className="inline-flex items-center gap-2 nav-pill rounded-full px-4 py-2 text-xs text-muted-foreground">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_10px_hsl(140_100%_50%)]" />
            All systems operational
          </div>
          <p className="mt-8 text-[11px] text-muted-foreground/70 leading-relaxed max-w-md">
            This material is for informational purposes only and is not intended to provide
            accounting, legal, tax, or investment recommendations. Any services made available
            in the future will be subject to and made on the terms of the legal agreements
            relating thereto.
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-6">
          {cols.map((col) => (
            <div key={col.title}>
              <h4 className="font-serif italic text-base mb-4 text-foreground">{col.title}</h4>
              <ul className="space-y-2">
                {col.items.map((it) => (
                  <li key={it.label}>
                    <a
                      href={it.href}
                      target={it.href !== "#" ? "_blank" : undefined}
                      rel={it.href !== "#" ? "noopener noreferrer" : undefined}
                      className="text-xs text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {it.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center pt-8 border-t border-border/40 gap-4">
        <p className="text-[11px] text-muted-foreground">
          2026 © Trillion Digital Assets. All Rights Reserved.
        </p>
        <div className="flex items-center gap-6 text-[11px] text-muted-foreground">
          <a href="#" className="hover:text-foreground">Privacy Terms</a>
          <a href="#" className="hover:text-foreground">Cookies Policy</a>
          <span className="inline-flex items-center gap-1.5"><Globe className="w-3 h-3" /> English</span>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
