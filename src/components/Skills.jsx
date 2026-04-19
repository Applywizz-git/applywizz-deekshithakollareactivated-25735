import React from 'react';
import { motion } from 'framer-motion';
import { Database, Cpu, Settings, Cloud, Share2, Layers, BarChart3, Search } from 'lucide-react';

const Skills = () => {
  const stacks = [
    { name: "Core Engineering", skills: ["Python", "SQL", "PySpark", "ETL/ELT Development"], icon: Cpu },
    { name: "Warehousing", skills: ["Snowflake", "Amazon Redshift", "Synapse Analytics", "ADLS"], icon: Database },
    { name: "Orchestration", skills: ["dbt", "Apache Airflow", "Azure Data Factory"], icon: Settings },
    { name: "Cloud Platforms", skills: ["AWS (S3, Glue, Lambda)", "Azure (Databricks, Synapse)"], icon: Cloud },
    { name: "Analytics & BI", skills: ["Dimensional Modeling", "Relational Databases", "Reporting Engineering"], icon: BarChart3 },
    { name: "Ops & Governance", skills: ["Data Lineage", "Data Validation", "Git", "CI/CD"], icon: Layers }
  ];

  return (
    <section id="skills" className="relative py-32 bg-alt-bg/50 border-y border-white/5">
       <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-center mb-24 gap-12">
             <div>
                <span className="text-secondary font-mono text-[10px] tracking-[0.5em] uppercase mb-4 block">TECH_SPECS</span>
                <h2 className="text-white text-6xl font-black uppercase tracking-tighter italic">CAPABILITIES.</h2>
             </div>
             <div className="flex gap-1">
                {[...Array(8)].map((_, i) => (
                  <div key={i} className="w-4 h-1 bg-primary/20 animate-pulse" style={{ animationDelay: `${i * 0.1}s` }}></div>
                ))}
             </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-12">
             {stacks.map((stack, i) => (
               <motion.div 
                 key={i} 
                 initial={{ opacity: 0, x: -20 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 transition={{ delay: i * 0.1 }}
                 className="flex flex-col group"
               >
                  <div className="flex items-center gap-6 mb-8">
                     <div className="w-14 h-14 border border-white/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-black transition-all rounded-sm shadow-xl">
                        <stack.icon size={24} />
                     </div>
                     <h3 className="text-xl font-bold text-white tracking-widest">{stack.name}</h3>
                  </div>
                  
                  <div className="flex flex-col gap-4 border-l border-white/5 pl-10">
                     {stack.skills.map((skill, idx) => (
                       <div key={idx} className="flex items-center gap-3">
                          <div className="w-1 h-1 bg-primary/40 rounded-full"></div>
                          <span className="text-text-secondary font-mono text-sm group-hover:text-white transition-colors">
                             {skill}
                          </span>
                       </div>
                     ))}
                  </div>
               </motion.div>
             ))}
          </div>
       </div>
    </section>
  );
};

export default Skills;
