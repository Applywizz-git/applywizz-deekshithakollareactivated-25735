import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="relative py-32 bg-dark-bg overflow-hidden lg:pl-24">
      <div className="container-custom relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center mb-20 gap-12">
          <div>
            <span className="text-primary font-mono text-[10px] tracking-[0.6em] uppercase mb-4 block">CONNECTION_ESTABLISHED</span>
            <h2 className="text-white font-headlines uppercase text-6xl md:text-8xl italic font-black">TALK.</h2>
          </div>
          <div className="w-16 h-px bg-white/5 hidden md:block"></div>
        </div>

        <div className="grid lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-5 space-y-12">
            <p className="text-xl text-text-secondary leading-relaxed mb-16 italic font-medium">
              Engaging for distributed data systems, ETL architecture, and pipeline optimization.
            </p>

            <div className="architect-card p-10 group relative border border-white/5 bg-[#0D0D0D]">
              <div className="flex gap-8 items-center">
                <div className="w-14 h-14 bg-primary/10 rounded-sm flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-black transition-all">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-[10px] font-mono font-bold text-white/30 uppercase tracking-[0.4em] mb-2">Endpoint</p>
                  <a href="mailto:Kdeekshi06@gmail.com" className="text-xl md:text-2xl font-black text-white group-hover:text-primary transition-colors italic tracking-tighter">Kdeekshi06@gmail.com</a>
                </div>
              </div>
            </div>

            <div className="architect-card p-10 group relative border border-white/5 bg-[#0D0D0D]">
              <div className="flex gap-8 items-center">
                <div className="w-14 h-14 bg-primary/10 rounded-sm flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-black transition-all">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-[10px] font-mono font-bold text-white/30 uppercase tracking-[0.4em] mb-2">Line</p>
                  <a href="tel:+13147175290" className="text-xl md:text-2xl font-black text-white group-hover:text-primary transition-colors italic tracking-tighter">+1 (314) 717-5290</a>
                </div>
              </div>
            </div>
          </div>

          <form className="lg:col-span-7 architect-card p-12 md:p-16 space-y-8 bg-[#0D0D0D] border-white/5 border-l-4">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <label className="text-[10px] font-mono font-bold text-white/20 uppercase tracking-widest pl-2">Sender_ID</label>
                <input type="text" placeholder="Full Name" className="w-full bg-[#151515] border border-white/5 rounded-sm px-6 py-5 focus:border-primary outline-none text-white font-medium transition-all" />
              </div>
              <div className="space-y-4">
                <label className="text-[10px] font-mono font-bold text-white/20 uppercase tracking-widest pl-2">Response_Endpoint</label>
                <input type="email" placeholder="Email Address" className="w-full bg-[#151515] border border-white/5 rounded-sm px-6 py-5 focus:border-primary outline-none text-white font-medium transition-all" />
              </div>
            </div>
            <div className="space-y-4">
              <label className="text-[10px] font-mono font-bold text-white/20 uppercase tracking-widest pl-2">Payload_Brief</label>
              <textarea rows="4" placeholder="Brief project overview" className="w-full bg-[#151515] border border-white/5 rounded-sm px-6 py-5 focus:border-primary outline-none text-white font-medium resize-none transition-all"></textarea>
            </div>
            <button disabled className="w-full py-6 bg-primary text-black font-black uppercase tracking-[0.4em] rounded-sm hover:translate-x-3 transition-all flex items-center justify-center gap-4 opacity-80 cursor-not-allowed">
              SEND MESSAGE <Send size={20} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
