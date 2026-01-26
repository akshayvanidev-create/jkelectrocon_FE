import React from "react";
import { BRANDS } from "../constants";

const Footer: React.FC = () => {
  return (
    <footer className="py-16 md:py-20 bg-gradient-to-b from-card to-background border-t border-button/20">
      <div className="max-w-screen-2xl mx-auto px-4 md:px-12 lg:px-20">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 md:gap-16 mb-16">
          {/* Brand Section */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 md:gap-4 mb-6">
              <img
                src="/assets/brand-logo.png"
                alt="JK Electrocon"
                className="h-10 md:h-12 w-auto object-contain"
              />
              <h2 className="text-xl md:text-3xl font-black tracking-tight flex items-baseline gap-1.5">
                <span className="text-button">JK</span>
                <span className="text-hover"> Electrocon</span>
              </h2>
            </div>
            <p className="text-text text-base md:text-lg max-w-md font-light leading-relaxed mb-8">
              Defining the future of residential luxury through cutting-edge
              intelligent automation and engineering excellence.
            </p>

            {/* Contact Info */}
            <div className="space-y-3 text-sm md:text-base">
              <a
                href="mailto:jkelectrocon@gmail.com"
                className="flex items-center gap-3 text-text hover:text-hover transition-colors group"
              >
                <div className="w-10 h-10 rounded-full bg-button/10 border border-button/20 flex items-center justify-center group-hover:bg-hover/20 group-hover:border-hover/40 transition-all">
                  <svg
                    className="w-5 h-5 text-button"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <span>jkelectrocon@gmail.com</span>
              </a>
              <a
                href="tel:+918817345776"
                className="flex items-center gap-3 text-text hover:text-hover transition-colors group"
              >
                <div className="w-10 h-10 rounded-full bg-button/10 border border-button/20 flex items-center justify-center group-hover:bg-hover/20 group-hover:border-hover/40 transition-all">
                  <svg
                    className="w-5 h-5 text-button"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <span>+918817345776</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="text-xs md:text-sm font-black uppercase tracking-widest mb-6 text-hover">
              Explore
            </h4>
            <ul className="space-y-3 text-sm md:text-base">
              <li>
                <a
                  href="#solutions"
                  className="text-muted hover:text-white hover:translate-x-1 inline-block transition-all duration-300"
                >
                  Solutions
                </a>
              </li>
              <li>
                <a
                  href="#portfolio"
                  className="text-muted hover:text-white hover:translate-x-1 inline-block transition-all duration-300"
                >
                  Technology Partners
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-muted hover:text-white hover:translate-x-1 inline-block transition-all duration-300"
                >
                  Contact Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-muted hover:text-white hover:translate-x-1 inline-block transition-all duration-300"
                >
                  Case Studies
                </a>
              </li>
            </ul>
          </div>

          {/* Partners Section */}
          <div className="lg:col-span-5">
            <h4 className="text-xs md:text-sm font-black uppercase tracking-widest mb-6 text-hover">
              Technology Partners
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 md:gap-4">
              {BRANDS.map((brand) => (
                <a
                  key={brand.name}
                  href={brand.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-center px-4 py-3 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-hover rounded-xl transition-all duration-300 hover:scale-105"
                >
                  <span className="text-xs md:text-sm font-bold text-muted group-hover:text-white transition-colors">
                    {brand.name}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-xs md:text-sm">
          <p className="text-muted">
            © 2026 JK Electrocon. All rights reserved.
          </p>
          <div className="flex items-center gap-8">
            <div className="flex gap-4">
              {/* Instagram */}
              <a
                href="https://www.instagram.com/jkelectrocon?igsh=aXhsNTJrbzhpOGZ6"
                className="w-8 h-8 rounded-full bg-white/5 hover:bg-blue-500 border border-white/10 hover:border-blue-500 flex items-center justify-center transition-all duration-300 group"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <svg
                  className="w-4 h-4 text-muted group-hover:text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
                </svg>
              </a>
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/company/jk-electrocon/"
                className="w-8 h-8 rounded-full bg-white/5 hover:bg-blue-600 border border-white/10 hover:border-blue-600 flex items-center justify-center transition-all duration-300 group"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <svg
                  className="w-4 h-4 text-muted group-hover:text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M19 0h-14C2.24 0 0 2.24 0 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5V5c0-2.76-2.24-5-5-5zM7.12 20.45H3.56V9h3.56v11.45zM5.34 7.67c-1.14 0-2.06-.93-2.06-2.07 0-1.14.92-2.07 2.06-2.07s2.06.93 2.06 2.07c0 1.14-.92 2.07-2.06 2.07zm15.11 12.78h-3.56v-5.6c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.95v5.69h-3.56V9h3.42v1.56h.05c.48-.91 1.65-1.85 3.39-1.85 3.63 0 4.3 2.39 4.3 5.5v6.24z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
