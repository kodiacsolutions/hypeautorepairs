"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { 
  Car, Wrench, CheckCircle2, Paintbrush, 
  Clock, ShieldAlert, ArrowUpRight, FileText, Cpu, BookOpen,
  Phone, ChevronRight, Star, ChevronLeft, Award
} from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const STATS = [
  { value: 15, label: "Years Experience", suffix: "+" },
  { value: 5000, label: "Cars Restored", suffix: "+" },
  { value: 98, label: "Satisfaction Rate", suffix: "%" },
  { value: 24, label: "Turnaround Hours", suffix: "/7" },
];

const SERVICES = [
  {
    title: "Car Painting",
    icon: Paintbrush,
    desc: "Glasurit computer-matched premium paint coats baked in low-dust downdraft booths.",
    href: "/services/car-painting",
    bg: "/service-2.png"
  },
  {
    title: "Denting & Panel Alignment",
    icon: Wrench,
    desc: "Precision structural realignment and dent pulling to strict factory tolerances.",
    href: "/services/denting",
    bg: "/service-3.png"
  },
  {
    title: "Accident Restoration",
    icon: ShieldAlert,
    desc: "Comprehensive panel replacement, structural alignment, and post-collision electronics resetting.",
    href: "/services/accident-repair",
    bg: "/service-4.png"
  },
  {
    title: "Insurance Claims",
    icon: FileText,
    desc: "We coordinate surveyor audits, estimate reports, and handle digital filings for direct billing.",
    href: "/services/insurance-claims",
    bg: "/service-5.png"
  },
  {
    title: "Fault Diagnosing",
    icon: Cpu,
    desc: "Advanced computerized scans to troubleshoot warning lights, ECU codes, and electrical issues.",
    href: "/services/fault-diagnosing",
    bg: "/service-1.png"
  },
  {
    title: "Logbook Service",
    icon: BookOpen,
    desc: "Scheduled fluid swaps, filters, and safety checks stamped officially to protect your new car warranty.",
    href: "/services/logbook-service",
    bg: "/service-6.png"
  },
];

const REPAIR_PROCESS_STEPS = [
  { step: "01", name: "Inspection", desc: "Surgical inspection of structural chassis, alignment points, and electrical nodes." },
  { step: "02", name: "Assessment", desc: "Detailed breakdown of repair sequences, part requirements, and visual maps." },
  { step: "03", name: "Parts Pre-order", desc: "Sourcing genuine OEM components and custom paint codes for your vehicle." },
  { step: "04", name: "Precision Repair", desc: "Heavy metal straightening, dent removal, panel fits, and electronic refits." },
  { step: "05", name: "Glasurit Painting", desc: "Multi-layered primer coating, base matching, clear sealing, and oven baking." },
  { step: "06", name: "Quality Audit", desc: "30-point diagnostics scan, paint scan, road checks, and safety clears." },
  { step: "07", name: "Handover Delivery", desc: "Pristine detailing wipe down followed by final client walkthrough." },
];

const TESTIMONIALS = [
  {
    quote: "Hype restored my Porsche Taycan after a severe front fender scrape. The paint match is indistinguishable from the factory coat.",
    author: "Alexander Mercer",
    title: "Taycan 4S Owner",
    rating: 5,
  },
  {
    quote: "Unbelievable service. They realigned my Audi's front bumper perfectly, matched the metallic paint flawlessly, and completed the work ahead of schedule.",
    author: "Elena Rostova",
    title: "Audi RS5 Coupe",
    rating: 5,
  },
  {
    quote: "Their ceramic coating and detailing work is next level. The car looks cleaner than the day I drove it off the showroom floor.",
    author: "Vikram Malhotra",
    title: "Mercedes-AMG GT",
    rating: 5,
  },
];

const GALLERY_IMGS = [
  { category: "Painting", label: "Glasurit Premium Paint Spraying", img: "/gallery/painting-spray-2.png" },
  { category: "Detailing", label: "Lexus LC500 High-Gloss Finish", img: "/gallery/lexus-lc500-quarter.jpg" },
  { category: "Restoration", label: "BMW X7 Precision Frame Alignment", img: "/gallery/bmw-x7-front-grille.jpg" },
  { category: "Painting", label: "Post-Baking High Gloss Polish Finish", img: "/gallery/painting-finished-3.png" },
];

export default function HomePage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const processRef = useRef<HTMLDivElement>(null);
  
  // Before & After slider state
  const [sliderPos, setSliderPos] = useState(50);
  const [isSliding, setIsSliding] = useState(false);
  
  // Testimonials state
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  useEffect(() => {
    // 1. Text reveals
    const revealTexts = document.querySelectorAll(".reveal-text");
    revealTexts.forEach((el) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power4.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
          },
        }
      );
    });

    // 2. Count up stats animation
    const statBoxes = document.querySelectorAll(".stat-box-value");
    statBoxes.forEach((box) => {
      const target = parseInt(box.getAttribute("data-target") || "0", 10);
      gsap.fromTo(
        box,
        { textContent: "0" },
        {
          textContent: target,
          duration: 2,
          ease: "power2.out",
          snap: { textContent: 1 },
          scrollTrigger: {
            trigger: box,
            start: "top 90%",
          },
        }
      );
    });

    // 4. Parallax Hero Image
    gsap.to(".hero-parallax", {
      yPercent: 15,
      ease: "none",
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  // Handle slider movement
  const handleSliderMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isSliding && e.type === "mousedown") return;
    const container = document.getElementById("slider-container");
    if (!container) return;

    const rect = container.getBoundingClientRect();
    const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
    const offset = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (offset / rect.width) * 100));
    setSliderPos(percentage);
  };

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  return (
    <div ref={containerRef} className="flex flex-col w-full bg-brand-dark text-white overflow-x-hidden">
      
      {/* ── SECTION 1: HERO STORY ── */}
      <section ref={heroRef} className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        {/* Background Parallax Mesh */}
        <div className="hero-parallax absolute inset-0 bg-[#0d0d11] select-none pointer-events-none">
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-40 mix-blend-luminosity scale-110"
            style={{ 
              backgroundImage: `url("/hero-bg.png")`
            }}
          />
          {/* Crimson ambient bottom glow */}
          <div className="absolute bottom-0 inset-x-0 h-[40vh] bg-gradient-to-t from-primary/10 to-transparent blur-3xl pointer-events-none" />
          <div className="absolute top-[20vh] right-[10vw] w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col justify-center items-center text-center gap-8 mt-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-[10px] font-bold text-primary tracking-widest uppercase animate-pulse">
            <Award className="h-3.5 w-3.5" /> Luxury Detailing & Accident Restoration
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-8xl font-black tracking-tight leading-[0.95] uppercase max-w-5xl">
            We Bring Your Car <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-primary to-white bg-size-200">
              Back To Life.
            </span>
          </h1>

          <p className="max-w-xl text-sm sm:text-base text-white/50 leading-relaxed font-light">
            Certified multi-stage paint correction, computerized panel reconstruction, and bespoke color matching. Completed to factory standards.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 w-full justify-center max-w-md mt-4">
            <Link
              href="/contact"
              className="flex items-center justify-center gap-2 rounded-full bg-primary hover:bg-primary/95 text-white px-8 py-4 text-xs font-bold uppercase tracking-wider shadow-lg shadow-primary/20 transition-all duration-300 hover:scale-[1.02]"
            >
              Book Service <ChevronRight className="h-4 w-4" />
            </Link>
            <a
              href="tel:0485878180"
              className="flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 text-white px-8 py-4 text-xs font-bold uppercase tracking-wider transition-all duration-300"
            >
              <Phone className="h-4 w-4 text-primary" /> Call Workshop
            </a>
          </div>
        </div>
      </section>

      {/* ── SECTION 2: STATS ROW ── */}
      <section ref={statsRef} className="py-20 bg-brand-dark border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {STATS.map((stat, idx) => (
              <div key={idx} className="flex flex-col gap-2 items-center text-center">
                <span className="text-4xl sm:text-5xl font-black text-white tracking-tight font-mono flex items-center">
                  <span className="stat-box-value" data-target={stat.value}>0</span>
                  <span className="text-primary">{stat.suffix}</span>
                </span>
                <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 3: SERVICES GRID ── */}
      <section className="py-32 bg-[#09090b] relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col items-start gap-4 mb-20 text-left reveal-text">
            <span className="text-xs font-bold text-primary uppercase tracking-widest">Certified Services</span>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight uppercase leading-none">
              Precision Engineering.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((srv, idx) => {
              const Icon = srv.icon;
              return (
                <div 
                  key={idx}
                  className="glass-panel group rounded-3xl p-8 flex flex-col justify-between min-h-[320px] border border-white/5 hover:border-primary/20 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/5 relative overflow-hidden"
                >
                  {/* Card Background Pattern */}
                  <div 
                    className="absolute inset-0 bg-cover bg-center opacity-10 group-hover:opacity-25 transition-all duration-700 pointer-events-none group-hover:scale-105" 
                    style={{ backgroundImage: `url("${srv.bg}")` }}
                  />
                  
                  <div>
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/5 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-lg font-bold uppercase tracking-wide mt-6 text-white group-hover:text-primary transition-colors">
                      {srv.title}
                    </h3>
                    <p className="text-xs text-white/50 leading-relaxed mt-3">
                      {srv.desc}
                    </p>
                  </div>

                  <Link 
                    href={srv.href} 
                    className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-primary hover:text-white mt-8 transition-colors self-start"
                  >
                    Explore Service <ArrowUpRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── SECTION 4: REPAIR STORYTELLING STEPS (STICKY FLOW) ── */}
      <section ref={processRef} className="py-32 bg-brand-dark w-full relative z-10 border-t border-white/5 overflow-hidden">
        {/* Background Image overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-25 mix-blend-luminosity pointer-events-none select-none"
          style={{ backgroundImage: 'url("/cycle-bg.png")' }}
        />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            
            {/* Left sticky column */}
            <div className="lg:col-span-5 lg:sticky lg:top-32 flex flex-col gap-6 items-start text-left">
              <span className="text-xs font-bold text-primary uppercase tracking-widest">Our Blueprint</span>
              <h2 className="text-3xl md:text-5xl font-black tracking-tight leading-none uppercase">
                The Restorations <br/>
                Cycle.
              </h2>
              <p className="text-xs sm:text-sm text-white/50 leading-relaxed max-w-sm font-light">
                From incoming scan to final showroom detailing, each phase is certified to meet original manufacturer quality targets.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 hover:border-primary bg-white/5 hover:bg-primary px-6 py-3.5 text-[10px] font-bold uppercase tracking-widest transition-all duration-300"
              >
                Schedule Inspection <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>

            {/* Right scrolling steps list */}
            <div className="lg:col-span-7 flex flex-col gap-12 border-l border-white/5 pl-6 md:pl-10">
              {REPAIR_PROCESS_STEPS.map((step, idx) => (
                <motion.div 
                  key={idx} 
                  initial={{ opacity: 0.2, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false, amount: 0.25 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="process-step-item flex gap-6 md:gap-8 items-start text-left group"
                >
                  <span className="text-2xl font-black font-mono text-primary/30 group-hover:text-primary transition-colors duration-300">
                    {step.step}
                  </span>
                  <div>
                    <h3 className="text-lg font-bold text-white uppercase tracking-wide">
                      {step.name}
                    </h3>
                    <p className="text-xs text-white/50 leading-relaxed mt-2 font-light max-w-lg">
                      {step.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* ── SECTION 5: BEFORE / AFTER SPLIT COMPARISON SLIDER ── */}
      <section className="py-32 bg-[#09090b] border-t border-white/5 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col items-center gap-4 text-center mb-16 reveal-text">
            <span className="text-xs font-bold text-primary uppercase tracking-widest">Visual Integrity</span>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight uppercase">
              See the Transformation.
            </h2>
            <p className="text-xs text-white/50 max-w-md mt-1">
              Drag the center slider control line to compare a damaged vehicle with its post-restoration factory clear-coat finish.
            </p>
          </div>

          <div 
            id="slider-container"
            className="relative w-full max-w-4xl aspect-[16/9] mx-auto rounded-[32px] overflow-hidden border border-white/10 select-none cursor-ew-resize"
            onMouseMove={handleSliderMove}
            onTouchMove={handleSliderMove}
            onMouseDown={() => setIsSliding(true)}
            onMouseUp={() => setIsSliding(false)}
            onMouseLeave={() => setIsSliding(false)}
            onTouchStart={() => setIsSliding(true)}
            onTouchEnd={() => setIsSliding(false)}
          >
            {/* Damaged State Layer (Background) */}
            <div className="absolute inset-0 bg-[#121216]">
              <div 
                className="w-full h-full bg-cover bg-center flex items-center justify-center"
                style={{ 
                  backgroundImage: `url("/restoration-before.png")` 
                }}
              />
              <div className="absolute top-6 left-6 rounded-full bg-black/60 px-4 py-1.5 text-[9px] font-bold tracking-widest text-red-500 uppercase border border-red-500/20 backdrop-blur-md">
                Pre-Restoration (Damaged)
              </div>
            </div>

            {/* Restored State Layer (Foreground Clip Path) */}
            <div 
              className="absolute inset-0 bg-[#0e0e12]"
              style={{ clipPath: `polygon(0 0, ${sliderPos}% 0, ${sliderPos}% 100%, 0 100%)` }}
            >
              <div 
                className="w-full h-full bg-cover bg-center flex items-center justify-center"
                style={{ 
                  backgroundImage: `url("/restoration-after.png")` 
                }}
              />
              <div className="absolute top-6 left-6 rounded-full bg-primary px-4 py-1.5 text-[9px] font-bold tracking-widest text-white uppercase shadow-lg shadow-primary/20">
                Post-Restoration (Pristine)
              </div>
            </div>

            {/* Slider Divider Bar */}
            <div 
              className="absolute top-0 bottom-0 w-0.5 bg-primary/60 cursor-ew-resize"
              style={{ left: `${sliderPos}%` }}
            >
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 h-10 w-10 rounded-full bg-primary border-4 border-white/20 shadow-2xl flex items-center justify-center text-white">
                <Wrench className="h-4 w-4" />
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* ── SECTION 7: TESTIMONIALS AUTOMATIC CAROUSEL ── */}
      <section className="py-32 bg-[#09090b] border-t border-white/5">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="flex flex-col items-center gap-4 mb-16">
            <span className="text-xs font-bold text-primary uppercase tracking-widest">Client Testimonials</span>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight uppercase">
              The Verdict.
            </h2>
          </div>

          <div className="glass-panel rounded-[32px] p-8 md:p-16 border border-white/5 relative min-h-[250px] flex flex-col justify-between">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTestimonial}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="flex flex-col gap-6"
              >
                <div className="flex justify-center gap-1">
                  {[...Array(TESTIMONIALS[activeTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-base md:text-xl italic text-white/80 leading-relaxed">
                  "{TESTIMONIALS[activeTestimonial].quote}"
                </p>
                <div className="mt-4">
                  <h4 className="font-bold text-sm text-white uppercase tracking-wider">
                    {TESTIMONIALS[activeTestimonial].author}
                  </h4>
                  <p className="text-[10px] text-primary uppercase tracking-widest font-semibold mt-1">
                    {TESTIMONIALS[activeTestimonial].title}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation buttons */}
            <div className="flex justify-center gap-4 mt-8">
              <button 
                onClick={prevTestimonial}
                className="p-2.5 rounded-full border border-white/10 hover:border-primary text-white/60 hover:text-white transition-all bg-white/5"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button 
                onClick={nextTestimonial}
                className="p-2.5 rounded-full border border-white/10 hover:border-primary text-white/60 hover:text-white transition-all bg-white/5"
                aria-label="Next testimonial"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 8: GALLERY MASONRY HIGHLIGHTS ── */}
      <section className="py-32 bg-brand-dark border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 text-left reveal-text">
            <div className="flex flex-col gap-4">
              <span className="text-xs font-bold text-primary uppercase tracking-widest">Visual Portfolio</span>
              <h2 className="text-3xl md:text-5xl font-black tracking-tight uppercase leading-none">
                Showroom Finishes.
              </h2>
            </div>
            <Link
              href="/gallery"
              className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-primary hover:text-white transition-colors"
            >
              View Full Gallery <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 select-none">
            {GALLERY_IMGS.map((item, idx) => (
              <div 
                key={idx} 
                className="group relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/10"
              >
                <div 
                  className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-700"
                  style={{ backgroundImage: `url("${item.img}")` }}
                />
                {/* Ambient dark gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-xs font-bold text-white uppercase tracking-wider">{item.label}</span>
                  <span className="text-[9px] font-bold text-primary uppercase tracking-widest px-2 py-0.5 rounded bg-primary/10 border border-primary/20">
                    {item.category}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 9: CALL TO ACTION ── */}
      <section className="py-32 bg-[#09090b] border-t border-white/5 relative overflow-hidden">
        {/* Glow ambient background element */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary/5 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[250px] bg-primary/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center flex flex-col items-center gap-8">
          <span className="text-xs font-bold text-primary uppercase tracking-widest animate-pulse">Schedule Today</span>
          
          <h2 className="text-3xl sm:text-5xl md:text-7xl font-black uppercase tracking-tight leading-none max-w-3xl">
            Ready to Restore <br/>
            Your Car?
          </h2>

          <p className="text-xs sm:text-sm text-white/50 max-w-lg font-light leading-relaxed">
            Get an instant computerized estimate, request custom-quoted services, or speak directly with our diagnostics workshop engineers.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 w-full justify-center max-w-md mt-4">
            <Link
              href="/contact"
              className="flex items-center justify-center gap-2 rounded-full bg-primary hover:bg-primary/95 text-white px-8 py-4 text-xs font-bold uppercase tracking-wider shadow-lg shadow-primary/20 transition-all duration-300 hover:scale-[1.02]"
            >
              Book Appointment <ChevronRight className="h-4 w-4" />
            </Link>
            <a
              href="tel:0485878180"
              className="flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 text-white px-8 py-4 text-xs font-bold uppercase tracking-wider transition-all duration-300"
            >
              <Phone className="h-4 w-4 text-primary" /> Call Workshop
            </a>
          </div>
        </div>
      </section>

      {/* Schema.org Structured Data for Local Business SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AutoRepair",
            "name": "Hype Mechanical & Smash Repairs",
            "image": "https://hypeautorepairs.com.au/logo-footer.png",
            "url": "https://hypeautorepairs.com.au",
            "telephone": "0485 878 180",
            "email": "Hypeautorepairs@gmail.com",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "5/172 Milperra Road",
              "addressLocality": "Revesby",
              "addressRegion": "NSW",
              "postalCode": "2212",
              "addressCountry": "AU"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": -33.935560,
              "longitude": 151.018260
            },
            "openingHoursSpecification": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday"
              ],
              "opens": "09:00",
              "closes": "19:00"
            },
            "sameAs": [
              "https://www.instagram.com/hypesmashrepairs?igsh=dXNtZjdzbzhiY3di"
            ],
            "priceRange": "$$"
          })
        }}
      />
    </div>
  );
}
