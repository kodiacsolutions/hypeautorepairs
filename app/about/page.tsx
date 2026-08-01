"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Users, Wrench, Sparkles, Award, MapPin } from "lucide-react";

export default function AboutPage() {
  const values = [
    { title: "OEM Restoration Standards", icon: ShieldCheck, desc: "We utilize official manufacturer color codes, structural blueprints, and diagnostic scanners to restore cars to factory condition." },
    { title: "Certified Automotive Craftsmen", icon: Users, desc: "Our technicians undergo direct brand training for alloy frame welds, complex panel reballing, and structural repairs." },
    { title: "Awwwards-Class Machinery", icon: Wrench, desc: "Equipped with computer measuring jigs, downdraft baking booths, and dust-free polishing labs." },
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0c] pt-32 pb-24 text-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Story Intro */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center mb-32">
          <div className="lg:col-span-6 flex flex-col gap-6 text-left">
            <span className="text-xs font-bold text-primary uppercase tracking-widest">Our Legacy</span>
            <h1 className="text-4xl sm:text-6xl font-black uppercase tracking-tight leading-none">
              Restoring Elite <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-primary">
                Automotive Art.
              </span>
            </h1>
            <p className="text-sm text-white/50 leading-relaxed font-light mt-2">
              Founded in 2011, Hype Mechanical & Smash Repairs began with a singular focus: to elevate automotive body repair and detailing beyond simple utility fixes. We envisioned a clinical laboratory setup where mechanical repairs, high-solid paint matching, and ceramic coatings are executed like fine craftsmanship.
            </p>
            <p className="text-sm text-white/50 leading-relaxed font-light">
              Over the last decade, we have repaired over 5,000 sports cars, luxury crossovers, and daily drivers, earning the trust of private collectors and automotive enthusiasts.
            </p>
          </div>

          {/* Luxury Frame Mockup */}
          <div className="lg:col-span-6 select-none relative aspect-[4/3] rounded-3xl overflow-hidden border border-white/10 bg-[#121216] flex items-center justify-center">
            <div 
              className="absolute inset-0 bg-cover bg-center opacity-30 mix-blend-luminosity" 
              style={{ 
                backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='600' height='400' viewBox='0 0 600 400'><rect width='600' height='400' fill='%23121216'/><line x1='50' y1='200' x2='550' y2='200' stroke='rgba(227,6,19,0.1)' stroke-width='4'/><circle cx='300' cy='200' r='100' fill='none' stroke='rgba(227,6,19,0.15)' stroke-width='2'/></svg>")` 
              }}
            />
            <div className="relative z-10 flex flex-col items-center gap-4 text-center p-8">
              <Award className="h-12 w-12 text-primary animate-pulse" />
              <div>
                <h4 className="font-bold text-white uppercase tracking-wider text-sm">Class-A Certified Lab</h4>
                <p className="text-[10px] text-white/40 mt-1 uppercase tracking-widest">Zone #05 Luxury Detailing Hub</p>
              </div>
            </div>
          </div>
        </div>

        {/* Vision & Mission */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-32 text-left">
          <div className="glass-panel rounded-3xl p-8 md:p-12 border border-white/5">
            <span className="text-[10px] font-bold text-primary uppercase tracking-widest">Our Vision</span>
            <h2 className="text-xl font-bold uppercase tracking-wider mt-2 mb-4 text-white">To Redefine Garage Expectations</h2>
            <p className="text-xs sm:text-sm text-white/50 leading-relaxed font-light">
              To transform the traditional greasy garage concept into a premium, transparent, clinical laboratory workspace. We design our client flow to build complete trust through photographic reports, digital estimations, and showroom delivery.
            </p>
          </div>
          <div className="glass-panel rounded-3xl p-8 md:p-12 border border-white/5">
            <span className="text-[10px] font-bold text-primary uppercase tracking-widest">Our Mission</span>
            <h2 className="text-xl font-bold uppercase tracking-wider mt-2 mb-4 text-white">No-Compromise Engineering</h2>
            <p className="text-xs sm:text-sm text-white/50 leading-relaxed font-light">
              We employ precision stud welding, laser alignment tracking, computerized mixing codes, and high-hydrophobic nanotechnology seals to achieve 100% factory specifications in cosmetic and safety aspects.
            </p>
          </div>
        </div>

        {/* Core Values */}
        <div className="mb-24 text-left">
          <div className="max-w-2xl mb-16">
            <span className="text-xs font-bold text-primary uppercase tracking-widest">Our Core Values</span>
            <h2 className="text-3xl font-black uppercase tracking-tight mt-2 text-white">Why We Stand Out.</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((val, idx) => {
              const Icon = val.icon;
              return (
                <motion.div
                  key={val.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="glass-panel rounded-2xl p-8 border border-white/5"
                >
                  <div className="h-10 w-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-6">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-3">
                    {val.title}
                  </h3>
                  <p className="text-xs text-white/40 leading-relaxed font-light">
                    {val.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
}
