"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { 
  Paintbrush, Wrench, ShieldAlert, FileText, 
  Settings, Cpu, Disc, BookOpen, Droplet, Wind, ArrowRight 
} from "lucide-react";

const SMASH_REPAIRS = [
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
    slug: "insurance-claims",
    title: "Insurance Claims",
    icon: FileText,
    desc: "We coordinate audits, generate digital estimates, and handle paper filings with all top insurance firms.",
    features: ["Surveyor Coordination", "Digital Estimates", "Claims Filing"],
  },
];

const MECHANICAL_SERVICES = [
  {
    slug: "part-replacement",
    title: "Part Replacement",
    icon: Settings,
    desc: "Replacing worn or damaged components with high-quality OEM or certified parts.",
    features: ["OEM Parts", "Suspension & Brakes", "Belt Replacement"],
  },
  {
    slug: "fault-diagnosing",
    title: "Fault Diagnosing",
    icon: Cpu,
    desc: "Advanced computerized scanning and troubleshooting of engine, transmission, electrical, and safety systems.",
    features: ["Computerized Scan", "Engine Lights", "Electrical Diagnostics"],
  },
  {
    slug: "tyre-replacement",
    title: "Tyre Replacement",
    icon: Disc,
    desc: "Fitting, balancing, and alignment of passenger, performance, and commercial tyres.",
    features: ["Tyre Fitting", "Wheel Balancing", "Wheel Alignment"],
  },
  {
    slug: "logbook-service",
    title: "Logbook Service",
    icon: BookOpen,
    desc: "Scheduled maintenance checks, fluid swaps, filters, and official logbook stamps.",
    features: ["Warranty Safe", "Stamp Verification", "Full Checkup"],
  },
  {
    slug: "oil-change",
    title: "Basic Oil Change",
    icon: Droplet,
    desc: "Quick synthetic oil drain, new filter replacement, and vehicle fluid checks.",
    features: ["Premium Synthetic Oil", "Filter Replacement", "Fluid Level Top-up"],
  },
  {
    slug: "aircon-regas",
    title: "Aircon Regas",
    icon: Wind,
    desc: "A/C refrigerant vacuum testing, gas recharge, and leak diagnostics.",
    features: ["Refrigerant Recharge", "Leak Detection", "Cabin Filter Check"],
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
            Workshop <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-primary">
              Services.
            </span>
          </h1>
          <p className="text-sm text-white/50 leading-relaxed font-light">
            We provide a complete suite of certified smash repairs and mechanical service offerings. 
          </p>
        </div>

        {/* Smash Repairs Section */}
        <div className="mb-24">
          <div className="border-b border-white/5 pb-4 mb-10 text-left">
            <h2 className="text-xl sm:text-2xl font-black uppercase tracking-wider text-white">
              Smash Repairs
            </h2>
            <p className="text-xs text-white/40 mt-1">High-end panel alignment, accident restoration, and paint baking.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {SMASH_REPAIRS.map((srv, idx) => {
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
                    
                    <h3 className="text-lg font-bold uppercase tracking-wide mt-6 text-white group-hover:text-primary transition-colors">
                      {srv.title}
                    </h3>
                    
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

        {/* Mechanical Services Section */}
        <div>
          <div className="border-b border-white/5 pb-4 mb-10 text-left">
            <h2 className="text-xl sm:text-2xl font-black uppercase tracking-wider text-white">
              Mechanical Services
            </h2>
            <p className="text-xs text-white/40 mt-1">Certified diagnostics, scheduled logbook servicing, and parts replacement.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {MECHANICAL_SERVICES.map((srv, idx) => {
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
                    
                    <h3 className="text-lg font-bold uppercase tracking-wide mt-6 text-white group-hover:text-primary transition-colors">
                      {srv.title}
                    </h3>
                    
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
    </div>
  );
}
