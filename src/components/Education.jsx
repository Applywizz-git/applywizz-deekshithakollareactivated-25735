import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: "Master of Science in Computer and Information Systems Security",
      school: "Saint Louis University",
      period: "Aug 2023 - May 2025",
      location: "USA"
    },
    {
      degree: "Bachelor of Technology in Computer Science",
      school: "Presidency University",
      period: "Mar 2018 - Jun 2022",
      location: "Bangalore, India"
    }
  ];

  return (
    <section id="education" className="relative py-32 bg-dark-bg lg:pl-24 border-b border-white/5">
      <div className="container-custom">
        <div className="mb-20">
          <span className="text-primary font-mono text-[10px] tracking-[0.5em] uppercase mb-4 block">QUALIFICATIONS</span>
          <h2 className="text-white text-5xl md:text-7xl font-black uppercase tracking-tighter italic leading-none">EDUCATION.</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
            {education.map((edu, i) => (
              <motion.div 
              key={i} 
              whileHover={{ y: -10 }}
              className="architect-card p-10 bg-[#0D0D0D] border-white/5 relative group"
              >
                <div className="absolute top-10 right-10 text-white/5 group-hover:text-primary transition-colors">
                  <GraduationCap size={40} />
                </div>
                <p className="text-primary font-mono text-xs tracking-widest uppercase mb-4">{edu.period}</p>
                <h3 className="text-2xl font-black text-white mb-4 italic tracking-tighter uppercase leading-tight">{edu.degree}</h3>
                <p className="text-text-secondary font-bold text-lg uppercase tracking-widest">{edu.school}</p>
                <p className="text-white/20 font-mono text-[10px] mt-2 tracking-widest uppercase">{edu.location}</p>
              </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
