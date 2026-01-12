
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-16 bg-navy-900 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
        <div className="col-span-1 md:col-span-2">
          <div className="flex items-center gap-4 mb-6">
            <img src="/assets/brand-logo.jpeg" alt="JK Electrocon" className="h-12 w-auto" />
            <h2 className="text-2xl font-black tracking-tighter uppercase">JK Electrocon</h2>
          </div>
          <p className="text-muted max-w-sm font-light">
            Defining the future of residential luxury through cutting-edge intelligent automation and engineering excellence.
          </p>
        </div>
        
        <div>
          <h4 className="text-sm font-bold uppercase tracking-widest mb-6">Explore</h4>
          <ul className="space-y-4 text-muted font-light">
            <li><a href="#solutions" className="hover:text-white transition-colors">Solutions</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Case Studies</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Experience Centers</a></li>
          </ul>
        </div>
        
        <div>
          <h4 className="text-sm font-bold uppercase tracking-widest mb-6">Partners</h4>
          <ul className="space-y-4 text-muted font-light">
            <li><a href="#" className="hover:text-white transition-colors">Zemote</a></li>
            <li><a href="#" className="hover:text-white transition-colors">KEF Audio</a></li>
            <li><a href="#" className="hover:text-white transition-colors">TIS Control</a></li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted">
        <p>© 2026 JK Electrocon. All rights reserved.</p>
        <div className="flex gap-8">
          <a href="#" className="hover:text-white transition-colors">Privacy</a>
          <a href="#" className="hover:text-white transition-colors">Terms</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
