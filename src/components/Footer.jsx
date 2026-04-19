import React from 'react';

const Footer = () => {
  return (
    <footer className="py-24 bg-dark-bg text-white border-t border-white/5 relative z-10 lg:pl-24">
       <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-center gap-12">
             <div className="text-center md:text-left">
                <h3 className="text-3xl font-black font-headlines tracking-tighter italic uppercase text-white hover:text-primary transition-colors cursor-default">DEEKSHITHA KOLLA</h3>
                <p className="text-primary font-mono text-[10px] font-bold uppercase tracking-[0.5em] mt-2">Data Infrastructure Engineer</p>
             </div>
             
             <div className="flex flex-col items-center md:items-end gap-3 text-center md:text-right opacity-30 font-mono">
                <div className="flex gap-8 mb-2">
                   {['SNOWFLAKE', 'PYSPARK', 'AWS'].map(stack => (
                     <span key={stack} className="text-[8px] font-black tracking-widest">{stack}</span>
                   ))}
                </div>
                <p className="text-[9px] font-bold uppercase tracking-[0.4em]">&copy; 2026 DK_SYSTEM_VER_4.2</p>
             </div>
          </div>
       </div>
    </footer>
  );
};

export default Footer;
