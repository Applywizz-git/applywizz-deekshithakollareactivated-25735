import React, { useEffect, useState, Suspense, lazy } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Lenis from 'lenis';
import { motion, AnimatePresence } from 'framer-motion';

// Components
const Header = lazy(() => import('./components/Header'));
const Hero = lazy(() => import('./components/Hero'));
const About = lazy(() => import('./components/About'));
const Experience = lazy(() => import('./components/Experience'));
const Projects = lazy(() => import('./components/Projects'));
const Skills = lazy(() => import('./components/Skills'));
const Education = lazy(() => import('./components/Education'));
const Certifications = lazy(() => import('./components/Certifications'));
const Contact = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));
const BottomNav = lazy(() => import('./components/BottomNav'));

const Loader = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => (prev < 100 ? prev + 1 : 100));
    }, 20);
    return () => clearInterval(timer);
  }, []);

  return (
    <motion.div 
      exit={{ y: '-100%', opacity: 0 }}
      transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
      className="fixed inset-0 z-[9999] bg-dark-bg flex flex-col items-center justify-center overflow-hidden"
    >
      <div className="w-full max-w-[500px] px-10">
        <div className="flex justify-between items-end mb-4 font-mono">
           <span className="text-[10px] font-black text-primary tracking-[0.5em] uppercase">DEEKSHITHA KOLLA</span>
           <span className="text-white font-black text-5xl">{progress}%</span>
        </div>
        
        <div className="relative h-px w-full bg-white/5 border-b border-white/5">
           <motion.div 
             className="absolute h-px bg-primary shadow-[0_0_20px_rgba(16,185,129,1)]"
             initial={{ width: 0 }}
             animate={{ width: `${progress}%` }}
           />
        </div>

        <div className="mt-8 grid grid-cols-2 text-[7px] font-mono text-white/5 uppercase tracking-[0.6em] gap-10">
           <div>
              Pipelining_Data_Core... OK<br/>
              Snowflake_Hub_Init... OK<br/>
              Cloud_Infrastructure_Sync...
           </div>
           <div className="text-right">
              DEEKSHITHA_KOLLA<br/>
              SYSTEMS_ARCHITECT<br/>
              v2026.04.19
           </div>
        </div>
      </div>
    </motion.div>
  );
};

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
    const lenis = new Lenis({ duration: 1.5 });
    function raf(time) { lenis.raf(time); requestAnimationFrame(raf); }
    requestAnimationFrame(raf);
    const timer = setTimeout(() => setLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-dark-bg selection:bg-primary selection:text-black">
      <AnimatePresence>{loading && <Loader />}</AnimatePresence>
      <Suspense fallback={<div />}>
        <Header />
        <main className="lg:pl-24 pb-32 lg:pb-0">
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Skills />
          <Education />
          <Certifications />
          <Contact />
        </main>
        <Footer />
        <BottomNav />
      </Suspense>
    </div>
  );
}

export default App;
