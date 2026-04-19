import React from 'react';
import { Home, Database, Layers, Terminal, Send, Linkedin, User, GraduationCap, Award } from 'lucide-react';
import { Link } from 'react-scroll';

const Header = () => {
  const tabs = [
    { name: 'INDEX', to: 'hero', icon: Home },
    { name: 'SUMMARY', to: 'about', icon: User },
    { name: 'HISTORY', to: 'experience', icon: Layers },
    { name: 'HUB', to: 'projects', icon: Database },
    { name: 'SPECS', to: 'skills', icon: Terminal },
    { name: 'ACADEMICS', to: 'education', icon: GraduationCap },
    { name: 'CREDENTIALS', to: 'certifications', icon: Award },
    { name: 'CHAT', to: 'contact', icon: Send },
  ];

  return (
    <>
      {/* Desktop Vertical Sidebar */}
      <aside className="fixed top-0 left-0 h-full w-24 bg-alt-bg sidebar-border hidden lg:flex flex-col items-center py-10 z-[200]">
        <div className="w-12 h-12 bg-primary flex items-center justify-center font-black text-xs text-black mb-16 rounded-sm italic">DK</div>
        
        <nav className="flex-grow flex flex-col gap-8">
          {tabs.map((tab) => (
            <Link
              key={tab.name}
              to={tab.to}
              smooth={true}
              spy={true}
              activeClass="active-nav-item"
              className="text-white/20 hover:text-white transition-all cursor-pointer relative p-3 rounded-xl group flex items-center justify-center nav-item-link"
            >
              <tab.icon size={22} className="relative z-10 transition-colors" />
              <span className="absolute left-20 bg-primary text-black text-[9px] font-black px-3 py-1.5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none uppercase tracking-widest whitespace-nowrap z-[201]">
                 {tab.name}
              </span>
            </Link>
          ))}
        </nav>

        <div className="mt-auto flex flex-col gap-8 opacity-20">
           <a href="https://www.linkedin.com/in/kdeekshitha26/" target="_blank"><Linkedin size={20} /></a>
        </div>
      </aside>

      {/* Mobile Top Header */}
      <header className="lg:hidden fixed top-0 left-0 w-full z-[150] py-5 bg-dark-bg/95 border-b border-white/5 backdrop-blur-3xl px-6">
         <div className="flex justify-between items-center w-full">
            <span className="text-white text-xl font-black italic tracking-tighter uppercase">DK <span className="text-primary NOT-italic opacity-50">KOLLA.</span></span>
            <div className="w-4 h-4 bg-primary/20 rounded-full animate-pulse flex items-center justify-center">
               <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
            </div>
         </div>
      </header>
    </>
  );
};

export default Header;
