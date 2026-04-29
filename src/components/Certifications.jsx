import React from 'react';
import { motion } from 'framer-motion';
import { Award } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    "AWS Certified Data Engineer - AWS (In Progress)",
    "IBM Data Engineering Professional Certificate - Coursera",
    "Data Engineering on Google Cloud Specialization - Coursera",
    "Modern Data Engineering with Databricks - Coursera",
    "Microsoft Azure Data Engineering Foundations - Coursera",
    "Python for Data Engineering, AI & Development - Coursera"
  ];

  return (
    <section id="certifications" className="relative py-32 bg-alt-bg/30 lg:pl-24">
      <div className="container-custom">
        <div className="mb-20">
          <h2 className="text-white text-5xl md:text-7xl font-black uppercase tracking-tighter italic leading-none">CERTIFICATIONS.</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
           {certifications.map((cert, i) => (
             <motion.div 
              key={i} 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ x: 5 }}
              className="flex items-center gap-6 p-8 bg-[#0D0D0D] border border-white/5 rounded-sm hover:border-primary/30 transition-all group shadow-xl"
             >
                <div className="w-12 h-12 border border-white/10 flex items-center justify-center text-primary/40 group-hover:text-primary group-hover:bg-primary/5 transition-all">
                   <Award size={22} />
                </div>
                <span className="text-text-secondary font-bold text-xs md:text-sm tracking-wide uppercase group-hover:text-white transition-colors">{cert}</span>
             </motion.div>
           ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
