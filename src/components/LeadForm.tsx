
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const LeadForm: React.FC = () => {
  const [status, setStatus] = React.useState<'idle' | 'submitting' | 'success'>('idle');
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const left = sectionRef.current?.querySelector('.contact-info');
    const right = sectionRef.current?.querySelector('.contact-form');

    gsap.fromTo(left, 
      { opacity: 0, x: -50 },
      { 
        opacity: 1, 
        x: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        }
      }
    );

    gsap.fromTo(right, 
      { opacity: 0, x: 50 },
      { 
        opacity: 1, 
        x: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        }
      }
    );
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setTimeout(() => setStatus('success'), 1500);
  };

  return (
    <section ref={sectionRef} id="contact" className="py-20 px-4 md:px-20 bg-[#050B1F] relative">
      {/* Decorative background blur */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-blue-600/10 blur-[120px] rounded-full pointer-events-none"></div>
      
      <div className="max-w-screen-2xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
          
          {/* Brand Contact Information */}
          <div className="contact-info space-y-16 gsap-reveal">
            <div className="space-y-6">
              <h2 className="text-sm uppercase tracking-[0.6em] text-blue-500 font-black">Concierge</h2>
              <h3 className="text-6xl md:text-8xl font-bold tracking-tighter leading-none">
                Start Your <br/>
                <span className="text-white/30 italic font-light">Journey.</span>
              </h3>
              <p className="text-muted text-xl font-light max-w-md pt-4">
                Our specialists are ready to curate your bespoke automation ecosystem.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-4 group cursor-default">
                <h4 className="text-xs font-black uppercase tracking-widest text-blue-500/60 group-hover:text-blue-500 transition-colors">Headquarters</h4>
                <p className="text-lg text-muted font-light leading-relaxed group-hover:text-white transition-colors">
                  Elite Heights, Suite 402<br/>
                  Tech Corridor, Sector 18<br/>
                  New Delhi, India 110001
                </p>
              </div>

              <div className="space-y-4 group cursor-default">
                <h4 className="text-xs font-black uppercase tracking-widest text-blue-500/60 group-hover:text-blue-500 transition-colors">Inquiries</h4>
                <p className="text-lg text-muted font-light leading-relaxed group-hover:text-white transition-colors">
                  concierge@jkelectrocon.com<br/>
                  +91 98100 00000
                </p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="pt-4">
              <a 
                href="https://wa.me/919810000000" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-4 px-10 py-5 bg-[#25D366]/10 hover:bg-[#25D366] border border-[#25D366]/30 text-[#25D366] hover:text-white rounded-2xl transition-all duration-500 group w-full"
              >
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.937 3.659 1.432 5.628 1.433h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                <span className="text-xs font-black uppercase tracking-[0.3em]">Chat with Us</span>
              </a>
            </div>
          </div>

          {/* Re-designed Modern Lead Form */}
          <div className="contact-form relative gsap-reveal">
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-blue-500/20 blur-[100px] rounded-full -z-10 animate-pulse-slow"></div>
            
            <div className="relative glass rounded-[3.5rem] p-10 md:p-16 border border-white/10 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.6)]">
              {status === 'success' ? (
                <div className="text-center py-20 animate-fade-in space-y-10">
                  <div className="relative inline-block">
                    <div className="absolute inset-0 bg-blue-500/20 blur-2xl rounded-full"></div>
                    <div className="relative w-28 h-28 bg-gradient-to-tr from-blue-600 to-indigo-600 text-white rounded-full flex items-center justify-center mx-auto shadow-2xl">
                      <svg className="w-14 h-14" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-4xl font-bold tracking-tight">Transmission Complete</h3>
                    <p className="text-muted text-lg font-light max-w-xs mx-auto">Our curators are reviewing your request. We will connect shortly.</p>
                  </div>
                  <button 
                    onClick={() => setStatus('idle')}
                    className="px-8 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full text-[10px] font-black uppercase tracking-widest text-blue-400 transition-all"
                  >
                    Send Another Request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-10">
                  <div className="space-y-8">
                    {/* Name Field */}
                    <div className="relative group/field">
                      <label className="text-[10px] font-black uppercase tracking-widest text-blue-500/60 mb-2 block group-focus-within/field:text-blue-500 transition-colors">Client Identity</label>
                      <input 
                        type="text" 
                        required 
                        placeholder="e.g. Alexander Vance" 
                        className="w-full bg-white/5 border border-white/10 rounded-2xl py-5 px-6 focus:outline-none focus:border-blue-500 focus:bg-white/[0.08] focus:ring-4 focus:ring-blue-500/10 transition-all placeholder:text-white/10 text-lg font-light text-white"
                      />
                    </div>
                    
                    {/* Contact Row */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="relative group/field">
                        <label className="text-[10px] font-black uppercase tracking-widest text-blue-500/60 mb-2 block group-focus-within/field:text-blue-500 transition-colors">Direct Line</label>
                        <input 
                          type="tel" 
                          required 
                          placeholder="+91 ...." 
                          className="w-full bg-white/5 border border-white/10 rounded-2xl py-5 px-6 focus:outline-none focus:border-blue-500 focus:bg-white/[0.08] transition-all placeholder:text-white/10 text-lg font-light text-white"
                        />
                      </div>
                      <div className="relative group/field">
                        <label className="text-[10px] font-black uppercase tracking-widest text-blue-500/60 mb-2 block group-focus-within/field:text-blue-500 transition-colors">Email Channel</label>
                        <input 
                          type="email" 
                          required 
                          placeholder="vance@domain.com" 
                          className="w-full bg-white/5 border border-white/10 rounded-2xl py-5 px-6 focus:outline-none focus:border-blue-500 focus:bg-white/[0.08] transition-all placeholder:text-white/10 text-lg font-light text-white"
                        />
                      </div>
                    </div>

                    {/* Interest Field */}
                    <div className="relative group/field">
                      <label className="text-[10px] font-black uppercase tracking-widest text-blue-500/60 mb-2 block group-focus-within/field:text-blue-500 transition-colors">Vision Interest</label>
                      <select 
                        required
                        className="w-full bg-white/5 border border-white/10 rounded-2xl py-5 px-6 focus:outline-none focus:border-blue-500 focus:bg-white/[0.08] transition-all appearance-none text-lg font-light text-white cursor-pointer"
                      >
                        <option value="" disabled selected className="bg-[#050B1F]">Select Objective</option>
                        <option value="automation" className="bg-[#050B1F]">Smart Home Ecosystem</option>
                        <option value="theatre" className="bg-[#050B1F]">Private Cinema & Hi-Fi</option>
                        <option value="security" className="bg-[#050B1F]">Advanced Bio-Security</option>
                        <option value="climate" className="bg-[#050B1F]">Pure Air & Climate</option>
                      </select>
                      <div className="absolute right-6 bottom-[22px] pointer-events-none opacity-40">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  
                  {/* Submit Button */}
                  <div className="pt-4">
                    <button 
                      type="submit"
                      disabled={status === 'submitting'}
                      className="w-full relative group/btn overflow-hidden bg-white text-navy-900 font-black py-6 rounded-2xl transition-all duration-700 disabled:opacity-50 hover:shadow-[0_20px_40px_rgba(255,255,255,0.15)]"
                    >
                      <span className="relative z-10 text-[11px] uppercase tracking-[0.5em] group-hover/btn:text-white transition-colors duration-500">
                        {status === 'submitting' ? 'Processing...' : 'Secure Consultation'}
                      </span>
                      <div className="absolute inset-0 bg-blue-600 -translate-x-full group-hover/btn:translate-x-0 transition-transform duration-700 ease-[cubic-bezier(0.19,1,0.22,1)]"></div>
                    </button>
                  </div>

                  <div className="flex items-center gap-4 justify-center opacity-20">
                    <div className="h-[1px] w-8 bg-white"></div>
                    <span className="text-[8px] font-black uppercase tracking-[0.5em]">End-to-End Encrypted</span>
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
