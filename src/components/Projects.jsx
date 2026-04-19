import React from 'react';
import { motion } from 'framer-motion';
import { Network, Database, Layers, ArrowUpRight } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Data Quality Automation",
      category: "PySpark | AWS Glue | Snowflake",
      image: "/assets/project1.png",
      desc: "Architected a PySpark validation pipeline using AWS Glue and Snowflake to standardize multi-source healthcare claims ingestion.",
      stat: "31% Refresh ↑"
    },
    {
      title: "Risk Analytics Warehouse",
      category: "Redshift | dbt | Databricks",
      image: "/assets/project2.png",
      desc: "Modeled dimensional warehouse layers in Amazon Redshift using dbt to organize customer behavioral datasets for risk segmentation.",
      stat: "Lineage Tracked"
    },
    {
      title: "Data Lake Transformation",
      category: "Azure Data Factory | Synapse",
      image: "/assets/project3.png",
      desc: "Provisioned Azure ingestion pipelines integrating relational and flat-file datasets into ADLS zones supporting platform readiness.",
      stat: "Multi-Source"
    }
  ];

  return (
    <section id="projects" className="py-32 bg-dark-bg">
       <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-12">
             <div>
                <span className="text-primary font-mono text-[10px] tracking-[0.5em] uppercase mb-4 block">PROVISIONED_ASSETS</span>
                <h2 className="text-white text-6xl font-black uppercase tracking-tighter">PROJECTS.</h2>
             </div>
             <p className="text-text-secondary md:w-1/3 leading-relaxed text-right font-medium italic opacity-50">
                Production-grade data architectures deployed across AWS & Azure ecosystems.
             </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-10">
             {projects.map((proj, i) => (
               <motion.div 
                key={i} 
                whileHover={{ y: -10 }}
                className="architect-card flex flex-col h-full bg-[#0D0D0D] border-x border-white/5 rounded-sm p-4"
               >
                  <div className="relative aspect-video overflow-hidden rounded-sm mb-10">
                     <img src={proj.image} alt={proj.title} className="w-full h-full object-cover transition-all duration-700" />
                     <div className="absolute top-4 left-4">
                        <div className="px-3 py-1 bg-black/80 backdrop-blur-md rounded-sm border border-white/10 text-primary font-mono text-[8px] tracking-widest uppercase italic">
                           {proj.stat}
                        </div>
                     </div>
                  </div>
                  
                  <div className="px-4 pb-6 flex-grow flex flex-col justify-between">
                     <div>
                        <span className="text-primary font-mono text-[9px] tracking-widest uppercase mb-4 block">{proj.category}</span>
                        <h3 className="text-2xl md:text-3xl font-black text-white mb-6 italic tracking-tighter">{proj.title}</h3>
                        <p className="text-text-secondary leading-relaxed mb-10 font-medium">
                           {proj.desc}
                        </p>
                     </div>
                     <div className="flex justify-between items-center pt-8 border-t border-white/5">
                        <div className="flex gap-4">
                           <Network size={18} className="text-white/20" />
                           <Database size={18} className="text-white/20" />
                        </div>
                        <div className="w-10 h-10 border border-primary/20 flex items-center justify-center text-primary hover:bg-primary hover:text-black transition-all cursor-pointer">
                           <ArrowUpRight size={20} />
                        </div>
                     </div>
                  </div>
               </motion.div>
             ))}
          </div>
       </div>
    </section>
  );
};

export default Projects;
