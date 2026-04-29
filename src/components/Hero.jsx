import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Database, ArrowRight, Download, Linkedin, Cpu, Zap } from 'lucide-react';

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-32 lg:pt-0 overflow-hidden bg-dark-bg">
      {/* Background Matrix Grid */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{ backgroundImage: 'linear-gradient(#10B981 1px, transparent 1px), linear-gradient(90deg, #10B981 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
      </div>

      <div className="container-custom relative z-10 w-full px-6 md:px-12 lg:px-20">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          <div className="lg:col-span-7 relative z-20">
            <motion.div initial={{ x: -30, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.8 }}>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-10 leading-[0.85] tracking-tighter uppercase">
                DEEKSHITHA <br /> <span className="text-primary italic">KOLLA.</span>
              </h1>

              <p className="text-lg md:text-2xl text-text-secondary leading-relaxed max-w-lg mb-12 md:mb-16 font-medium italic">
                Data Engineer specializing in building scalable ETL and Data Warehousing pipelines. Supporting datasets processing <span className="text-white border-b border-primary/20">15M+ records daily</span>.
              </p>

              <div className="flex flex-wrap gap-6 md:gap-8 items-center mb-16">
                <a
                  href="/resume.pdf"
                  download
                  className="px-8 md:px-12 py-5 md:py-6 bg-primary text-black font-black text-[11px] md:text-[12px] tracking-[0.2em] rounded-sm hover:translate-x-2 transition-all cursor-pointer uppercase flex items-center gap-4 shadow-[10px_10px_0_rgba(16,185,129,0.2)] active:translate-y-1"
                >
                  DOWNLOAD_CORE_RESUME <Download size={18} />
                </a>
                <a
                  href="https://www.linkedin.com/in/kdeekshitha26/"
                  target="_blank"
                  className="text-white/40 hover:text-primary transition-colors flex items-center gap-2 font-mono text-[10px] md:text-xs uppercase tracking-widest"
                >
                  <Linkedin size={20} /> LinkedIn_ID_v26
                </a>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 opacity-40">
                {[
                  { label: 'Throughput', val: '15M+' },
                  { label: 'Latency', val: '-25%' },
                  { label: 'Ingestion', val: 'Hub' },
                  { label: 'System', val: 'Active' }
                ].map((stat, i) => (
                  <div key={stat.label} className="border-l border-white/10 pl-4">
                    <span className="text-white/40 font-mono text-[8px] uppercase tracking-widest block mb-1">{stat.label}</span>
                    <span className="text-sm font-black text-white italic">{stat.val}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-5 flex justify-center lg:justify-end relative z-10 lg:pl-4">
            <motion.div
              initial={{ scale: 0.9, opacity: 0, rotate: 5 }}
              animate={{ scale: 1, opacity: 1, rotate: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative"
            >
              <div className="w-72 h-72 md:w-96 md:h-96 rounded-full border-2 border-primary/30 p-4 bg-gradient-to-br from-primary/10 to-transparent shadow-[0_0_50px_rgba(16,185,129,0.1)]">
                <div className="w-full h-full rounded-full overflow-hidden border-4 border-dark-bg">
                  <img src="/assets/image.jfif" alt="Deekshitha Kolla" className="w-full h-full object-cover" />
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
