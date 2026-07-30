"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Sparkles, Paintbrush, Wrench, Shield, CheckCircle2, Phone, ChevronRight } from "lucide-react";

const PRICING_TIERS = [
  {
    category: "Detailing & Coating",
    icon: Sparkles,
    plans: [
      { name: "Essential Detail", price: "$299", desc: "For periodic vehicle cleaning and minor swirl removals.", items: ["1-Stage paint polish", "Dashboard upholstery wipe", "Clay bar iron decontamination", "Engine bay wash refresh"] },
      { name: "Hype Ceramic Protect", price: "$899", desc: "Ultimate quartz liquid shield with 5-year hardness warranty.", items: ["3-Stage complete color compound", "2-Layers of 9H quartz seal", "Odor steam extraction cabin wash", "Wheel faces and glass seals"] },
    ]
  },
  {
    category: "Painting & Bodywork",
    icon: Paintbrush,
    plans: [
      { name: "Single Panel Bake", price: "$249", desc: "Glasurit factory code-matching paint for single fenders or doors.", items: ["Computer spectro matching", "Downdraft oven baking", "High-solid clear coat", "Hinges alignment check"] },
      { name: "Full Body Re-spray", price: "$2,499", desc: "Brings aging or scratched vehicles back to showroom condition.", items: ["Complete mask and sand", "Whole vehicle oven bake", "Wet-sanding mirror finishing", "5-Year paint warranty card"] },
    ]
  },
  {
    category: "Denting & Realignment",
    icon: Wrench,
    plans: [
      { name: "Crease Dent Pulling", price: "$149", desc: "Fixes door dings, creases, and shopping cart dents.", items: ["Stud welder crease puller", "PDR rods crease alignment", "Gap balance scan", "Paint touchup match prep"] },
      { name: "Frame Realignment", price: "$899", desc: "Heavy structural panel straightening to strict factory tolerances.", items: ["Computer measuring jig bench", "Airbag system node scan", "Laser track alignment", "Suspension mount balance audit"] },
    ]
  }
];

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0c] pt-32 pb-24 text-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Block */}
        <div className="max-w-3xl mb-20 text-left">
          <span className="text-xs font-bold text-primary uppercase tracking-widest">Service Rates</span>
          <h1 className="text-4xl sm:text-6xl font-black uppercase tracking-tight mt-4 mb-6">
            Transparent Pricing.
          </h1>
          <p className="text-sm text-white/50 leading-relaxed font-light">
            We provide upfront pricing rates for our certified workshop repairs, mechanical straightening, painting, and ceramic coating services.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid gap-16">
          {PRICING_TIERS.map((tier, idx) => {
            const Icon = tier.icon;
            return (
              <div key={tier.category} className="flex flex-col gap-8 text-left">
                <div className="flex items-center gap-3 border-b border-white/5 pb-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h2 className="text-xl font-bold uppercase tracking-wider text-white">
                    {tier.category}
                  </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {tier.plans.map((plan, planIdx) => (
                    <motion.div
                      key={plan.name}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: planIdx * 0.1 }}
                      className="glass-panel rounded-3xl p-8 border border-white/5 hover:border-primary/20 transition-all flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex justify-between items-start gap-4 mb-4">
                          <h3 className="text-base font-bold uppercase tracking-wide text-white">
                            {plan.name}
                          </h3>
                          <span className="text-2xl font-mono font-black text-primary shrink-0">
                            {plan.price}
                          </span>
                        </div>
                        
                        <p className="text-xs text-white/40 mb-6 font-light leading-relaxed">
                          {plan.desc}
                        </p>

                        <ul className="grid gap-3 border-t border-white/5 pt-6">
                          {plan.items.map((item) => (
                            <li key={item} className="flex gap-3 items-start text-xs text-white/60">
                              <CheckCircle2 className="h-4.5 w-4.5 text-primary shrink-0 mt-0.5" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="mt-8 flex gap-3">
                        <Link
                          href="/contact"
                          className="flex-1 flex items-center justify-center gap-1.5 rounded-full bg-primary hover:bg-primary/95 text-white py-3 text-xs font-bold uppercase tracking-wider transition-all"
                        >
                          Book Now <ChevronRight className="h-3.5 w-3.5" />
                        </Link>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
}
