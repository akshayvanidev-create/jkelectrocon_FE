import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const LeadForm: React.FC = () => {
  const [status, setStatus] = React.useState<"idle" | "submitting" | "success">(
    "idle"
  );
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const left = sectionRef.current?.querySelector(".contact-info");
    const right = sectionRef.current?.querySelector(".contact-form");

    gsap.fromTo(
      left,
      { opacity: 0, x: -50 },
      {
        opacity: 1,
        x: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      }
    );

    gsap.fromTo(
      right,
      { opacity: 0, x: 50 },
      {
        opacity: 1,
        x: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      }
    );
  }, []);

  const nameRef = React.useRef<HTMLInputElement>(null);
  const phoneRef = React.useRef<HTMLInputElement>(null);
  const emailRef = React.useRef<HTMLInputElement>(null);
  const interestRef = React.useRef<HTMLSelectElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    // Collect form data
    const name = nameRef.current?.value || "";
    const phone = phoneRef.current?.value || "";
    const email = emailRef.current?.value || "";
    const interest = interestRef.current?.options[interestRef.current.selectedIndex]?.text || "";

    // Compose WhatsApp message
    const message = encodeURIComponent(
      `Name: ${name}\nPhone: ${phone}\nEmail: ${email}\nInterest: ${interest}`
    );
    const waUrl = `https://wa.me/+918817345776?text=${message}`;

    // Redirect to WhatsApp after a short delay for UX
    setTimeout(() => {
      window.location.href = waUrl;
      setStatus("success");
    }, 800);
  };

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="py-12 md:py-20 px-4 md:px-12 lg:px-20 bg-background relative"
    >
      {/* Decorative background blur */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-button/10 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-screen-2xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 lg:gap-24 items-start">
          {/* Brand Contact Information */}
          <div className="contact-info space-y-8 md:space-y-16 gsap-reveal">
            <div className="space-y-4 md:space-y-6">
              <h2 className="text-xs md:text-sm uppercase tracking-[0.4em] md:tracking-[0.6em] text-hover font-black">
                Concierge
              </h2>
              <h3 className="text-2xl sm:text-4xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-none text-button">
                Start Your <br />
                <span className="text-hover italic font-light">
                  Journey.
                </span>
              </h3>
              <p className="text-text text-sm md:text-lg lg:text-xl font-light max-w-md pt-2 md:pt-4">
                Our specialists are ready to curate your bespoke automation
                ecosystem.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-12">
              <div className="space-y-4 group cursor-default">
                <h4 className="text-xs font-black uppercase tracking-widest text-hover group-hover:text-hover transition-colors">
                  Headquarters
                </h4>
                <p className="text-sm sm:text-lg text-text font-light leading-relaxed group-hover:text-hover transition-colors">
                  Office No. 103, Plot No. 83, Near Medanta Hospital
                  <br />
                  Vijay Nagar, Ratna Lok Colony
                  <br />
                  Indore, Madhya Pradesh 452010
                </p>
              </div>

              <div className="space-y-4 group cursor-default">
                <h4 className="text-xs font-black uppercase tracking-widest text-hover group-hover:text-hover transition-colors">
                  Inquiries
                </h4>
                <p className="text-sm sm:text-lg text-text font-light leading-relaxed group-hover:text-hover transition-colors">
                  jkelectrocon@gmail.com
                  <br />
                  +918817345776
                  <br />
                  +919111444595
                </p>
              </div>
            </div>
          </div>

          {/* Re-designed Modern Lead Form */}
          <div className="contact-form relative gsap-reveal">
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-button/20 blur-[100px] rounded-full -z-10 animate-pulse-slow"></div>

            <div className="relative glass rounded-[3.5rem] p-10 md:p-16 border border-white/10 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.6)]">
              {status === "success" ? (
                  <div className="text-center py-20 animate-fade-in space-y-10">
                    <div className="relative inline-block">
                      <div className="absolute inset-0 bg-button/20 blur-2xl rounded-full"></div>
                      <div className="relative w-28 h-28 bg-gradient-to-tr from-button to-hover text-background rounded-full flex items-center justify-center mx-auto shadow-2xl">
                        <svg
                          className="w-14 h-14"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <h3 className="text-2xl sm:text-4xl font-bold tracking-tight text-button">
                        Transmission Complete
                      </h3>
                      <p className="text-text text-sm sm:text-lg font-light max-w-xs mx-auto">
                        Our curators are reviewing your request. We will connect
                        shortly.
                      </p>
                    </div>
                    <button
                      onClick={() => setStatus("idle")}
                      className="px-8 py-3 bg-card hover:bg-hover border border-button/20 rounded-full text-[10px] font-black uppercase tracking-widest text-button transition-all"
                    >
                      Send Another Request
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-8">
                    <div>
                      <label className="text-[10px] font-black uppercase tracking-widest text-hover mb-2 block group-focus-within/field:text-button transition-colors">
                        Client Identity
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Alexander Vance"
                        className="w-full bg-card border border-button/20 rounded-2xl py-3 px-4 focus:outline-none focus:border-hover focus:bg-hover/10 focus:ring-4 focus:ring-hover/10 transition-all placeholder:text-hover/40 text-base sm:text-lg font-light text-text"
                        ref={nameRef}
                      />
                    </div>
                    {/* Contact Row */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="relative group/field">
                        <label className="text-[10px] font-black uppercase tracking-widest text-hover mb-2 block group-focus-within/field:text-button transition-colors">
                          Direct Line
                        </label>
                        <input
                          type="tel"
                          required
                          placeholder="+91 ...."
                          className="w-full bg-card border border-button/20 rounded-2xl py-3 px-4 focus:outline-none focus:border-hover focus:bg-hover/10 transition-all placeholder:text-hover/40 text-base sm:text-lg font-light text-text"
                          ref={phoneRef}
                        />
                      </div>
                      <div className="relative group/field">
                        <label className="text-[10px] font-black uppercase tracking-widest text-hover mb-2 block group-focus-within/field:text-button transition-colors">
                          Email Channel
                        </label>
                        <input
                          type="email"
                          required
                          placeholder="vance@domain.com"
                          className="w-full bg-card border border-button/20 rounded-2xl py-3 px-4 focus:outline-none focus:border-hover focus:bg-hover/10 transition-all placeholder:text-hover/40 text-base sm:text-lg font-light text-text"
                          ref={emailRef}
                        />
                      </div>
                    </div>
                    {/* Interest Field */}
                    <div className="relative group/field">
                      <label className="text-[10px] font-black uppercase tracking-widest text-hover mb-2 block group-focus-within/field:text-button transition-colors">
                        Vision Interest
                      </label>
                      <select
                        required
                        className="w-full bg-card border border-button/20 rounded-2xl py-3 px-4 focus:outline-none focus:border-hover focus:bg-hover/10 transition-all appearance-none text-base sm:text-lg font-light text-text cursor-pointer"
                        ref={interestRef}
                      >
                        <option
                          value=""
                          disabled
                          selected
                          className="bg-background"
                        >
                          Select Objective
                        </option>
                        <option value="automation" className="bg-background">
                          Smart Home Ecosystem
                        </option>
                        <option value="theatre" className="bg-background">
                          Private Cinema & Hi-Fi
                        </option>
                        <option value="security" className="bg-background">
                          Advanced Bio-Security
                        </option>
                        <option value="climate" className="bg-background">
                          Pure Air & Climate
                        </option>
                      </select>
                      <div className="absolute right-6 bottom-[22px] pointer-events-none opacity-40">
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </div>
                    </div>
                    {/* Submit Button */}
                    <div className="pt-4">
                      <button
                        type="submit"
                        disabled={status === "submitting"}
                        className="w-full relative group/btn overflow-hidden bg-button text-background font-black py-6 rounded-2xl transition-all duration-700 disabled:opacity-50 hover:shadow-[0_20px_40px_rgba(212,175,55,0.15)]"
                      >
                        <span className="relative z-10 text-[11px] uppercase tracking-[0.5em] group-hover/btn:text-background transition-colors duration-500">
                          {status === "submitting"
                            ? "Processing..."
                            : "Secure Consultation"}
                        </span>
                        <div className="absolute inset-0 bg-hover -translate-x-full group-hover/btn:translate-x-0 transition-transform duration-700 ease-[cubic-bezier(0.19,1,0.22,1)]"></div>
                      </button>
                    </div>
                    <div className="flex items-center gap-4 justify-center opacity-20">
                      <div className="h-[1px] w-8 bg-white"></div>
                      <span className="text-[8px] font-black uppercase tracking-[0.5em]">
                        End-to-End Encrypted
                      </span>
                      <div className="h-[1px] w-8 bg-white"></div>
                    </div>
                  </form>
                )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadForm;
