"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Image as ImageIcon, Camera, Crop } from "lucide-react";

const CATEGORIES = ["All", "Before & After", "Painting", "Detailing", "Restoration"];

const ITEMS = [
  { id: 1, title: "Chassis Painting Prep & Spray", category: "Painting", img: "/gallery/painting-spray-1.png" },
  { id: 2, title: "Glasurit Premium Paint Coat Application", category: "Painting", img: "/gallery/painting-spray-2.png" },
  { id: 3, title: "Post-Baking High Gloss Polish Finish", category: "Painting", img: "/gallery/painting-finished-3.png" },
  { id: 4, title: "Sedan Exterior Paint & Body Renewal", category: "Before & After", img: "/gallery/restoration-suzuki.png" },
  { id: 5, title: "Volkswagen Polo Paint Correction", category: "Before & After", img: "/gallery/detailing-polo.png" },
  { id: 6, title: "Hyundai Elantra Deep Gloss Correction & Polish", category: "Detailing", img: "/gallery/detailing-hyundai.png" },
  { id: 7, title: "Full Body Respray & Shine Restoration", category: "Restoration", img: "/gallery/restoration-suzuki-alt.png" },
  { id: 8, title: "Renault Logan Peel Correction & Respray", category: "Restoration", img: "/gallery/restoration-renault.png" },
  { id: 9, title: "Lexus LC500 Orange Pearl High-Gloss Polish", category: "Detailing", img: "/gallery/lexus-lc500-quarter.jpg" },
  { id: 10, title: "Lexus LC500 Mirror Side Profile Polish", category: "Detailing", img: "/gallery/lexus-lc500-profile.jpg" },
  { id: 11, title: "Lexus LC500 Premium Ceramic Coating Cure", category: "Detailing", img: "/gallery/lexus-lc500-front-workshop.jpg" },
  { id: 12, title: "Lexus LC500 Outdoor Paint Reflections", category: "Detailing", img: "/gallery/lexus-lc500-front-outdoor.jpg" },
  { id: 13, title: "Lexus LC500 Carbon Fiber Hood Restoration", category: "Restoration", img: "/gallery/lexus-lc500-carbon-hood.jpg" },
  { id: 14, title: "BMW X7 Mineral White Metallic Detailing", category: "Detailing", img: "/gallery/bmw-x7-front-three-quarter.jpg" },
  { id: 15, title: "BMW X7 Wheel & Fender Precision Cleaning", category: "Restoration", img: "/gallery/bmw-x7-wheel-detail.jpg" },
  { id: 16, title: "BMW X7 Gloss Enhancement Paint Correction", category: "Detailing", img: "/gallery/bmw-x7-rear-three-quarter.jpg" },
  { id: 17, title: "BMW X7 Rear Taillight & Panel Polish", category: "Detailing", img: "/gallery/bmw-x7-taillight-detail.jpg" },
  { id: 18, title: "BMW X7 Premium Paint Protective Sealant", category: "Detailing", img: "/gallery/bmw-x7-side-profile.jpg" },
  { id: 19, title: "BMW X7 Front Headlight & Hood Reflections", category: "Detailing", img: "/gallery/bmw-x7-headlight-detail.jpg" },
  { id: 20, title: "BMW X7 Signature Grille & Frame Alignment", category: "Restoration", img: "/gallery/bmw-x7-front-grille.jpg" },
  { id: 21, title: "BMW X7 Deep Mirror Paint Correction Finish", category: "Detailing", img: "/gallery/bmw-x7-side-reflection.jpg" },
];

export default function GalleryPage() {
  const [filter, setFilter] = useState("All");

  const filteredItems = filter === "All" 
    ? ITEMS 
    : ITEMS.filter(item => item.category === filter);

  return (
    <div className="min-h-screen bg-[#0a0a0c] pt-32 pb-24 text-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Title */}
        <div className="max-w-3xl mb-16 text-left">
          <span className="text-xs font-bold text-primary uppercase tracking-widest">Visual Portfolio</span>
          <h1 className="text-4xl sm:text-6xl font-black uppercase tracking-tight mt-4 mb-6">
            Workshop Gallery.
          </h1>
          <p className="text-sm text-white/50 leading-relaxed font-light">
            Browse through real photographs documenting our mechanical frame realignments, Glasurit baking, paint-compounding detailings, and nano-coat finishes.
          </p>
        </div>

        {/* Category Filter triggers */}
        <div className="flex flex-wrap gap-3 mb-12 select-none">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`text-[10px] font-bold uppercase tracking-widest px-6 py-3 rounded-full border transition-all duration-300 ${
                filter === cat
                  ? "bg-primary border-primary text-white"
                  : "border-white/10 hover:border-primary text-white/60 hover:text-white bg-white/5"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry-style Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="group relative aspect-[4/3] rounded-3xl overflow-hidden border border-white/10 bg-[#121216]"
              >
                <div 
                  className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-700"
                  style={{ backgroundImage: `url("${item.img}")` }}
                />
                
                {/* Visual Glass gradient hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="absolute bottom-6 left-6 right-6 flex flex-col gap-2 items-start text-left opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                  <span className="text-[9px] font-bold text-primary uppercase tracking-widest px-2.5 py-1 rounded bg-primary/10 border border-primary/20">
                    {item.category}
                  </span>
                  <h3 className="text-sm font-bold text-white uppercase tracking-wider mt-1">{item.title}</h3>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>
    </div>
  );
}
