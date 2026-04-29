import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Database, Zap } from 'lucide-react';

const About = () => {
  const points = [
    {
      title: "Data Pipelines",
      text: "4+ years building scalable ETL and DW pipelines processing 15M+ records daily.",
      icon: Database
    },
    {
      title: "Cloud Platforms",
      text: "Expertise in AWS and Azure (S3, Glue, Databricks, Synapse, ADLS).",
      icon: Zap
    },
    {
      title: "Pipeline Reliability",
      text: "Implementing DataOps frameworks and reducing reporting latency by 25%+.",
      icon: ShieldCheck
    }
  ];

  return (
    <section id="about" className="relative py-32 bg-alt-bg/30 lg:pl-24">
      <div className="container-custom">
        <div className="grid lg:grid-cols-12 gap-20 items-start">
           <div className="lg:col-span-5">
              <h2 className="text-white text-5xl md:text-7xl font-black uppercase tracking-tighter italic leading-none mb-10">PROFESSIONAL <br/> <span className="text-white/20">SUMMARY.</span></h2>
              <div className="w-20 h-1 bg-primary mb-10"></div>
           </div>
           
           <div className="lg:col-span-7">
              <p className="text-xl md:text-2xl text-text-secondary leading-relaxed font-medium italic mb-20 border-l border-white/5 pl-10">
                 Data Engineer with 4+ years of experience building scalable ETL and Data Warehousing pipelines using Python, SQL, PySpark, Snowflake, Redshift, Airflow, and dbt. Known for improving Big Data pipeline reliability through DataOps-aligned frameworks and optimizing SQL performance.
              </p>

              <div className="grid md:grid-cols-1 gap-10">
                 {points.map((p, i) => (
                   <motion.div 
                     key={i} 
                     whileHover={{ x: 10 }}
                     className="architect-card p-10 flex gap-10 items-center bg-[#0D0D0D] border-white/5 group shadow-2xl"
                   >
                      <div className="w-16 h-16 bg-primary/10 rounded-sm flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-black transition-all">
                         <p.icon size={32} />
                      </div>
                      <div>
                        <h3 className="text-xl font-black text-white italic tracking-widest uppercase mb-2">{p.title}</h3>
                        <p className="text-text-secondary font-medium leading-relaxed">{p.text}</p>
                      </div>
                   </motion.div>
                 ))}
              </div>
           </div>
        </div>
      </div>
    </section>
  );
};

export default About;
