import { CheckCircle2 } from "lucide-react";
import { FormEvent, useState } from "react";

const Contact = () => {
  const [status, setStatus] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const firstName = String(formData.get("firstName") || "").trim();
    const lastName = String(formData.get("lastName") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const phone = String(formData.get("phone") || "").trim();
    const message = String(formData.get("message") || "").trim();

    const subject = encodeURIComponent(`Inquiry from ${firstName} ${lastName}`);
    const body = encodeURIComponent(
      `First Name: ${firstName}\nLast Name: ${lastName}\nEmail: ${email}\nPhone: ${phone}\n\n${message}`
    );

    window.location.href = `mailto:contact@trilliondigitalassets.com?subject=${subject}&body=${body}`;
    setStatus("Your email application is opening with your inquiry.");
  };

  return (
    <section id="contact-us" className="relative py-32 px-6 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-hero-radial opacity-40 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        {/* LEFT SIDE: Content */}
        <div className="animate-fade-up">
          <p className="text-[11px] uppercase tracking-[0.3em] text-glow-cyan mb-4 font-semibold">
            Get In Touch
          </p>

          <h2 className="font-serif text-4xl md:text-6xl text-white leading-[1.1] mb-6">
            Ready to Build Your <br />
            <em className="italic text-foreground/90">AI Agent?</em>
          </h2>

          <p className="text-white/60 text-lg leading-relaxed max-w-xl mb-10">
            We provide intelligent AI-powered solutions to automate workflows,
            improve customer experience, and scale your business operations with
            modern technology.
          </p>

          <div className="grid sm:grid-cols-2 gap-y-4 gap-x-8">
            {[
              "AI Agent Development",
              "AI Web Development",
              "AI Chatbots",
              "Workflow Automation",
              "SaaS Platforms",
              "24/7 AI Support",
              "Lead Generation",
              "Business Automation",
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-3 text-sm text-white/80"
              >
                <CheckCircle2 className="w-4 h-4 text-glow-cyan shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT SIDE: Form */}
        <div className="relative animate-fade-up" style={{ animationDelay: '0.2s' }}>
          <div className="absolute -inset-4 bg-glow-cyan/5 blur-3xl rounded-full pointer-events-none" />
          
          <form
            onSubmit={handleSubmit}
            className="relative w-full bg-white p-8 md:p-10 rounded-[2.5rem] shadow-[0_30px_100px_rgba(0,0,0,0.4)]"
          >
            <div className="mb-8">
              <h3 className="text-3xl font-serif text-black leading-tight">
                Send a Message
              </h3>
              <p className="text-sm text-black/50 mt-2">
                Fill the form below and we’ll contact you within 24 hours.
              </p>
            </div>

            <div className="grid gap-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-black/40 ml-1">First Name</label>
                  <input name="firstName" required placeholder="John" className="input" />
                </div>
                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-black/40 ml-1">Last Name</label>
                  <input name="lastName" required placeholder="Doe" className="input" />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-[10px] font-bold uppercase tracking-widest text-black/40 ml-1">Email</label>
                <input name="email" required type="email" placeholder="john@example.com" className="input" />
              </div>
              
              <div className="space-y-1.5">
                <label className="text-[10px] font-bold uppercase tracking-widest text-black/40 ml-1">Phone</label>
                <input name="phone" required placeholder="+1 (555) 000-0000" className="input" />
              </div>

              <div className="space-y-1.5">
                <label className="text-[10px] font-bold uppercase tracking-widest text-black/40 ml-1">Message</label>
                <textarea name="message" required placeholder="How can we help?" className="input h-32 py-3" />
              </div>
            </div>

            {status && (
              <div className="mt-6 p-4 rounded-xl bg-emerald-50 border border-emerald-100 text-emerald-700 text-sm font-medium">
                {status}
              </div>
            )}

            <button type="submit" className="mt-8 w-full bg-black hover:bg-black/90 text-white py-4 rounded-full font-semibold transition-all shadow-xl active:scale-[0.98]">
              Send Inquiry
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;