import React from 'react';
import { Home, Database, Layers, Terminal, Send, User, GraduationCap, Award } from 'lucide-react';
import { Link } from 'react-scroll';

const BottomNav = () => {
  const tabs = [
    { name: 'INDEX', to: 'hero', icon: Home },
    { name: 'ABOUT', to: 'about', icon: User },
    { name: 'HISTORY', to: 'experience', icon: Layers },
    { name: 'HUB', to: 'projects', icon: Database },
    { name: 'SPECS', to: 'skills', icon: Terminal },
    { name: 'EDU', to: 'education', icon: GraduationCap },
    { name: 'CERT', to: 'certifications', icon: Award },
    { name: 'CHAT', to: 'contact', icon: Send },
  ];

  return (
    <nav className="fixed bottom-0 left-0 w-full z-[150] lg:hidden">
      <div className="bg-dark-bg/95 backdrop-blur-3xl border-t border-white/5 flex justify-around items-center px-2 py-4">
        {tabs.map((tab) => (
          <Link
            key={tab.name}
            to={tab.to}
            smooth={true}
            activeClass="text-white bg-white/5 border border-white/20 rounded-md"
            spy={true}
            offset={-80}
            className="flex flex-col items-center justify-center p-2 transition-all duration-300 text-white/30 cursor-pointer"
          >
            <tab.icon size={16} strokeWidth={2.5} />
            <span className="text-[5px] font-black uppercase tracking-[0.1em] mt-1.5">{tab.name}</span>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default BottomNav;
