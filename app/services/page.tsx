"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Sparkles, Paintbrush, Wrench, ShieldAlert, ShieldCheck, Heart, Shield, RefreshCw, ArrowRight } from "lucide-react";

const ALL_SERVICES = [
  {
    slug: "car-detailing",
    title: "Car Detailing",
    icon: Sparkles,
    desc: "Multi-stage paint correction, leather conditioning, and comprehensive interior extraction. We restore your vehicle to a flawless showroom finish.",
    features: ["Paint Correction", "Leather Rejuvenation", "Decontamination"],
  },
  {
    slug: "car-painting",
    title: "Car Painting",
    icon: Paintbrush,
    desc: "Precision computer-assisted color matching using high-solid Glasurit paints and baked in climate-controlled downdraft ovens.",
    features: ["Color Matching", "Downdraft Baking", "Clear Coat Sealing"],
  },
  {
    slug: "denting",
    title: "Denting & Panel Alignment",
    icon: Wrench,
    desc: "Metal straightening, structural point alignment, and panel fitment to factory-original specifications and tight panel gaps.",
    features: ["Dent Pulling", "Panel Re-alignment", "Chassis Balancing"],
  },
  {
    slug: "accident-repair",
    title: "Accident Restoration",
    icon: ShieldAlert,
    desc: "End-to-end crash repair, chassis straightening, frame balancing, electrical systems calibration, and cosmetic restoration.",
    features: ["Frame Re-alignment", "Electronics Calibration", "Major Part Refit"],
  },
  {
    slug: "ceramic-coating",
    title: "Ceramic Coating Protection",
    icon: ShieldCheck,
    desc: "Ultra-hard 9H ceramic quartz coating overlays shielding your vehicle from UV oxidation, swirl marks, chemicals, and acid rain.",
    features: ["9H Hydrophobic Protection", "UV Block Filters", "Swirl Resistance"],
  },
  {
    slug: "car-polishing",
    title: "Car Polishing & Glazing",
    icon: RefreshCw,
    desc: "Deep buffing cycles to remove micro-swirls, spider-web scratches, and oxidation layers, delivering deep mirror reflections.",
    features: ["Micro-swirl Removal", "High-Gloss Glaze", "Speed Polish Finishing"],
  },
  {
    slug: "interior-cleaning",
    title: "Luxury Interior Detailing",
    icon: Heart,
    desc: "Steam cleaning upholstery, extracting dirt, nourishing leather hides, and cleaning AC vents to ensure premium comfort.",
    features: ["Steam Sanitation", "Leather Conditioning", "Odor Neutralization"],
  },
  {
    slug: "car-washing",
    title: "Signature Foam Washing",
    icon: Shield,
    desc: "Safe two-bucket hand wash using pH-balanced snow foam soaps, microfiber mitts, and warm air dryers to guarantee zero swirl marks.",
    features: ["pH-Neutral Snow Foam", "Undercarriage Flush", "Microfiber Drying"],
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0c] pt-32 pb-24 text-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Block */}
        <div className="max-w-3xl mb-20 text-left">
          <span className="text-xs font-bold text-primary uppercase tracking-widest">Workshop Catalog</span>
          <h1 className="text-4xl sm:text-6xl font-black uppercase tracking-tight mt-4 mb-6">
            Elite Restoration <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-primary">
              Services.
            </span>
          </h1>
          <p className="text-sm text-white/50 leading-relaxed font-light">
            We provide a complete suite of certified mechanical repairs, bodywork dent pulling, computer-matched paint baking, and high-end detailing treatments. 
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ALL_SERVICES.map((srv, idx) => {
            const Icon = srv.icon;
            return (
              <motion.div
                key={srv.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: idx * 0.05, ease: [0.16, 1, 0.3, 1] }}
                className="glass-panel group rounded-3xl p-8 border border-white/5 hover:border-primary/20 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/5 flex flex-col justify-between"
              >
                <div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/5 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    <Icon className="h-5 w-5" />
                  </div>
                  
                  <h2 className="text-xl font-bold uppercase tracking-wide mt-6 text-white group-hover:text-primary transition-colors">
                    {srv.title}
                  </h2>
                  
                  <p className="text-xs text-white/50 leading-relaxed mt-4 font-light min-h-[64px]">
                    {srv.desc}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {srv.features.map((feat) => (
                      <span 
                        key={feat}
                        className="text-[9px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded bg-white/5 border border-white/5 text-white/40"
                      >
                        {feat}
                      </span>
                    ))}
                  </div>
                </div>

                <Link 
                  href={`/services/${srv.slug}`}
                  className="mt-8 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary hover:text-white transition-colors self-start"
                >
                  View Details <ArrowRight className="h-4 w-4" />
                </Link>
              </motion.div>
            );
          })}
        </div>

      </div>
    </div>
  );
}
