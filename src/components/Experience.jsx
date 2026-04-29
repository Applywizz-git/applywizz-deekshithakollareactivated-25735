import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
  const experiences = [
    {
      company: "CVS Health",
      role: "Data Engineer",
      period: "Mar 2025 - Present",
      metrics: "35% Speed ↑ | 25M+ Records",
      bullets: [
        "Engineered PySpark ETL on AWS Glue/S3 processing 25M+ healthcare records daily.",
        "Optimized Snowflake models using dbt, reducing query execution latency by 32%.",
        "Developed transformation pipelines in Databricks accelerating processing cycles by 35%."
      ]
    },
    {
      company: "Citi Bank",
      role: "Data Engineer",
      period: "Dec 2023 - Feb 2025",
      metrics: "30% Optimization | 12 Source Hubs",
      bullets: [
        "Designed Snowflake ETL integrating 12+ financial data sources into centralized warehouses.",
        "Automated Azure Data Factory pipelines for Synapse Analytics supporting regulatory platforms.",
        "Enhanced SQL performance by 30% through query tuning for credit risk analytics."
      ]
    },
    {
      company: "PwC",
      role: "Data Engineer",
      period: "May 2021 - Jul 2023",
      metrics: "24% Refresh ↑ | CI/CD Flow",
      bullets: [
        "Constructed dimensional data models for finance and operations reporting datasets.",
        "Automated batch ingestion pipelines using Azure Data Factory into ADLS storage.",
        "Optimized SQL transformation logic improving refresh execution speed by 24%."
      ]
    }
  ];

  return (
    <section id="experience" className="relative py-32 bg-alt-bg/50 border-y border-white/5">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-start mb-24 gap-12">
           <div className="md:w-1/2">
              <h2 className="text-white text-6xl font-black uppercase tracking-tighter">EXPERIENCE.</h2>
           </div>
           <p className="text-text-secondary md:w-1/3 leading-relaxed border-l-2 border-primary/20 pl-8 font-medium">
              Architecting secure and reliable data platforms for Global Finance and Healthcare.
           </p>
        </div>

        <div className="space-y-16">
           {experiences.map((exp, i) => (
             <motion.div 
               key={i} 
               whileHover={{ x: 10 }}
               className="architect-card p-10 md:p-14 group"
             >
                <div className="flex flex-col lg:flex-row justify-between items-start gap-10">
                   <div className="lg:w-1/3">
                      <p className="text-primary font-mono text-xs tracking-widest uppercase mb-4">{exp.period}</p>
                      <h3 className="text-4xl font-black text-white mb-2 italic tracking-tighter">{exp.role}</h3>
                      <p className="text-white/40 font-bold text-lg mb-8 uppercase tracking-widest">{exp.company}</p>
                      <div className="px-4 py-2 bg-primary/10 border border-primary/20 rounded-sm text-primary font-mono text-[10px] tracking-widest inline-block">
                         {exp.metrics}
                      </div>
                   </div>
                   <div className="lg:w-2/3 border-l border-white/5 pl-10">
                      <ul className="space-y-6">
                         {exp.bullets.map((bullet, idx) => (
                           <li key={idx} className="flex gap-6 group/item text-text-secondary hover:text-white transition-colors">
                              <span className="text-primary font-mono text-xs pt-1.5 opacity-30 italic">[{idx+1}]</span>
                              <span className="leading-relaxed text-lg font-medium">
                                 {bullet}
                              </span>
                           </li>
                         ))}
                      </ul>
                   </div>
                </div>
             </motion.div>
           ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
