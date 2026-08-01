import Link from "next/link";
import { notFound } from "next/navigation";
import { Sparkles, Paintbrush, Wrench, ShieldAlert, ShieldCheck, RefreshCw, Heart, Shield, CheckCircle2, HelpCircle, Phone, ArrowRight, ChevronRight, MessageSquare } from "lucide-react";

// 1. Static parameter list for static compilation exports
export async function generateStaticParams() {
  return [
    { service: "car-detailing" },
    { service: "car-painting" },
    { service: "denting" },
    { service: "accident-repair" },
    { service: "car-polishing" },
    { service: "ceramic-coating" },
    { service: "interior-cleaning" },
    { service: "car-washing" },
  ];
}

interface ServiceData {
  title: string;
  subtitle: string;
  icon: any;
  desc: string;
  overview: string;
  benefits: string[];
  stages: { name: string; desc: string }[];
  pricing: { title: string; price: string; items: string[] }[];
  faqs: { q: string; a: string }[];
}

const SERVICES_CATALOG: Record<string, ServiceData> = {
  "car-detailing": {
    title: "Car Detailing",
    subtitle: "Luxury Paint Rejuvenation & Deep Cabin Cleanse",
    icon: Sparkles,
    desc: "Multi-stage paint correction, leather hide conditioning, and micro-debris cabin extraction.",
    overview: "Our signature car detailing is a thorough correction process designed to clean, restore, and shield all surfaces of your vehicle. We remove 90%+ of paint swirls, polish the clear coat to a mirror finish, and sanitize the cabin space.",
    benefits: [
      "Eliminates 90%+ of clear coat swirl marks and light scratches.",
      "Rejuvenates dry leather seats and door trims.",
      "Enhances vehicle resale valuation and aesthetic appeal."
    ],
    stages: [
      { name: "Decontamination Wash", desc: "Chemical clay bar scrub to dissolve surface iron particles." },
      { name: "Paint Swirl Correction", desc: "Rotary compounding and dual-action micro-polishing." },
      { name: "Leather & Trim Nourishment", desc: "pH-neutral conditioning cream applied to leather fibers." }
    ],
    pricing: [
      { title: "Essential Detail", price: "$299", items: ["1-Stage Polish", "Leather cleaning", "Engine bay wash"] },
      { title: "Hype Premium Detail", price: "$599", items: ["3-Stage Compound Polish", "Deep steam sanitizing", "1-Year ceramic glaze"] }
    ],
    faqs: [
      { q: "How long does a detailing treatment take?", a: "A complete multi-stage correction takes between 6 to 12 hours depending on vehicle paint condition." },
      { q: "Will detailing remove deep key scratches?", a: "Detailing removes clear coat scratches. If a scratch has breached the paint layer down to the primer, touch-up painting is required." }
    ]
  },
  "car-painting": {
    title: "Car Painting",
    subtitle: "Oven-Baked Downdraft Premium Painting",
    icon: Paintbrush,
    desc: "Glasurit computer-assisted color matching, multi-layered paint base matching, and clear sealing.",
    overview: "We restore your car's factory paint finish inside climate-controlled downdraft ovens. Using computerized color matching and Glasurit high-solid paints, we ensure zero paint dust specs and identical matching.",
    benefits: [
      "Identical match to factory color codes.",
      "100% dust-free clear coat baking environment.",
      "Excellent resistance to paint fading and peeling."
    ],
    stages: [
      { name: "Sanding & Masking", desc: "Sanding panels down and applying professional protection tapes." },
      { name: "Computer Paint Matching", desc: "Digital spectro-matching to calculate aging base codes." },
      { name: "Glasurit Base & Baking", desc: "Multi-layered spraying followed by oven baking cycles." }
    ],
    pricing: [
      { title: "Single Panel Coat", price: "$249", items: ["Panel sanding", "Base coat match", "UV clear coat"] },
      { title: "Full Vehicle Bake", price: "$2,499", items: ["Complete body prep", "Chassis mask", "5-Year paint warranty"] }
    ],
    faqs: [
      { q: "Do you offer custom colors?", a: "Yes, we paint custom satin, matte, and metallic pigments besides factory-matching colors." },
      { q: "How long is the paint warranty?", a: "We provide a 5-Year warranty against peeling, clear coat fading, and paint bubbling." }
    ]
  },
  "denting": {
    title: "Denting & Panel realignments",
    icon: Wrench,
    subtitle: "Chassis Alignment & Metal Straightening",
    desc: "Panel dent pulling, structural balance realignment, and precise factory panel gap repairs.",
    overview: "We resolve cosmetic body creases and structural panel deformations. Using slide hammer pullers and computer alignment frames, we align panels back to factory panel gap tolerances.",
    benefits: [
      "Restores panel creases to original curves.",
      "Corrects misaligned door and hood gaps.",
      "Preserves the structural crash integrity of chassis rails."
    ],
    stages: [
      { name: "Crease Pulling", desc: "Applying stud welder keys to pull deep dent profiles outward." },
      { name: "Panel Fitting", desc: "Refitting hinge pins and adjusting latch points to level gaps." },
      { name: "Surface Glazing", desc: "Thin micro-filler application to level sheet surfaces before paint prep." }
    ],
    pricing: [
      { title: "Crease Dent Repair", price: "$149", items: ["Dent pulling", "Surface level scan", "Paint prep match"] },
      { title: "Multiple Panel realign", price: "$499", items: ["Chassis frame check", "Door hinge pin refits", "Gap leveling check"] }
    ],
    faqs: [
      { q: "Can you fix aluminum panels?", a: "Yes, we use specialized aluminum dent welding tools to straighten lightweight aluminum frames." },
      { q: "Do you do paintless dent repair (PDR)?", a: "Yes, for minor dents where the paint layer has not cracked, we offer PDR." }
    ]
  },
  "accident-repair": {
    title: "Accident Restoration",
    icon: ShieldAlert,
    subtitle: "Frame Realignment & Collision Repair",
    desc: "Heavy crash body rebuilds, computer frame pulls, and system recalibrations.",
    overview: "Our workshop is equipped with computer frame measuring benches to realign crashed vehicles back to factory measurements. We replace damaged subframes, refit body panels, and reset vehicle safety nodes.",
    benefits: [
      "Restores crash rails back to active factory safety profiles.",
      "Certified replacement of safety airbags and seatbelt pretensioners.",
      "Full electronic diagnostics verification scan."
    ],
    stages: [
      { name: "Frame Measurement", desc: "Chassis frame laser measurement to locate coordinate shifts." },
      { name: "Structural Rebuild", desc: "Replacing crash bars, subframe rails, and core supports." },
      { name: "Diagnostics Re-code", desc: "Clearing crash sensors, re-coding control blocks, and sensor checking." }
    ],
    pricing: [
      { title: "Standard Dent & Re-fit", price: "$899", items: ["Crash bar refit", "Panel painting", "Sensors check"] },
      { title: "Elite Frame Rebuild", price: "$3,499", items: ["Chassis jig realignment", "Suspension refits", "Airbag diagnostics reset"] }
    ],
    faqs: [
      { q: "Will the car drive straight after frame repair?", a: "Yes, we verify wheel track alignment on laser rigs to guarantee factory driving handling specs." }
    ]
  },
  "ceramic-coating": {
    title: "Ceramic Coating",
    icon: ShieldCheck,
    subtitle: "9H Quartz Hardness Nanotechnology Shields",
    desc: "Deep gloss nanotech sealants shielding panels from UV rays, acid rain, and swirls.",
    overview: "We apply multi-layered liquid quartz ceramic coatings that bond to your vehicle's factory clear coat. This creates a hard, glass-like barrier that repels water, prevents chemical stains, and provides high gloss.",
    benefits: [
      "9H pencil hardness scratch resistance.",
      "Hydrophobic rain repellant surface.",
      "Reduces dust buildup and makes washing easy."
    ],
    stages: [
      { name: "Paint Prep Polish", desc: "Removing surface scratches before sealing them under coating." },
      { name: "Base Liquid Seal", desc: "Applying liquid nano-quartz drops across panels." },
      { name: "UV Baking Lamp", desc: "Infrared curing lamps to hard-bake coating layers." }
    ],
    pricing: [
      { title: "3-Year Shield", price: "$499", items: ["1 Paint Correction pass", "Base coating layer", "Wheels face coat"] },
      { title: "Elite 5-Year Shield", price: "$899", items: ["2 Paint Correction passes", "2 Coating layers", "Glass & Interior seals"] }
    ],
    faqs: [
      { q: "Can I wash my car after coating?", a: "Avoid washing for 7 days while the ceramic coating fully cures to maximum hardness." },
      { q: "Does this replace wax?", a: "Yes, ceramic coating replaces wax and lasts years instead of weeks." }
    ]
  },
  "car-polishing": {
    title: "Car Polishing & Glazing",
    icon: RefreshCw,
    subtitle: "High-Reflective Paint Swirl Removal",
    desc: "Micro-swirl paint buffing and high-gloss glazes to restore depth and mirror finishes.",
    overview: "We remove hazing, micro-swirls, and oxidation layers from the vehicle's paint surface. Our polishing compound creates a smooth clear coat that reflects light evenly.",
    benefits: [
      "Restores dark paint colors to deep reflections.",
      "Removes oxidation haze and weather fading.",
      "Provides water spot removal."
    ],
    stages: [
      { name: "Surface Prep Wash", desc: "Deep wash followed by clay bar prep to lift embedded dust." },
      { name: "Buffer Compounding", desc: "Buffing paint layers to level out micro-creases." },
      { name: "Wax Glaze Seal", desc: "Applying protective gloss sealant to locks depth reflections." }
    ],
    pricing: [
      { title: "Standard Buff Polish", price: "$199", items: ["1-Stage polish buff", "Sanding spots check", "Wax glaze sealing"] },
      { title: "Deep Gloss Rejuvenate", price: "$349", items: ["2-Stage polish correction", "Water spot lift", "Synthetic wax layer"] }
    ],
    faqs: [
      { q: "Will polishing thin my paint?", a: "No, we use digital paint depth gauges to ensure we only remove microns of the clear coat, preserving paint life." },
      { q: "How often should I polish my car?", a: "Once or twice a year is sufficient to keep paint looking showroom fresh." }
    ]
  },
  "interior-cleaning": {
    title: "Interior Detailing",
    icon: Heart,
    subtitle: "Deep Steam Extraction & Leather Reconditioning",
    desc: "Upholstery steam cleaning, stain extraction, AC vent sanitation, and leather nourishment.",
    overview: "We restore vehicle interiors to pristine condition. We steam extract floor carpets, deep clean dashboard plastics, remove stubborn seat stains, condition leather surfaces, and disinfect HVAC vents.",
    benefits: [
      "Stops mold, bacteria, and dust allergens.",
      "Restores leather hides back to original soft textures.",
      "Neutralizes food and tobacco odors."
    ],
    stages: [
      { name: "Cabin Vacuum & Blowout", desc: "High-pressure air lines to clear dust from console gaps." },
      { name: "Steam Extraction", desc: "Steam injecting carpets to pull out embedded oils." },
      { name: "Leather Nourishment", desc: "Conditioning creams containing UV blocking filters." }
    ],
    pricing: [
      { title: "Cabin Refresh", price: "$149", items: ["Carpet wash", "Plastic detailing wipe", "AC vent ozone wash"] },
      { title: "Premium Deep Extraction", price: "$299", items: ["Full carpet steam clean", "Seat stain extraction", "Leather cream re-hydration"] }
    ],
    faqs: [
      { q: "Will steam cleaning damage electronic buttons?", a: "No, we use dry-vapor steam lines and protect screen areas before cleaning." },
      { q: "How long does it take for seats to dry?", a: "Our extractor vacuums pull 90% of moisture out, so interior seats dry within 2 hours." }
    ]
  },
  "car-washing": {
    title: "Foam Wash & Wash Care",
    icon: Shield,
    subtitle: "Scratch-Free pH-Neutral Snow Foam Treatment",
    desc: "Safe hand washing, undercarriage rinse, tire dress, and interior console dusting.",
    overview: "We offer a safe two-bucket washing process. By pre-soaking the vehicle in thick pH-neutral snow foam, we float dust off panels before washing, preventing micro-scratches.",
    benefits: [
      "Prevents micro-scratching from grit drag.",
      "Thorough undercarriage spray to remove salt dust.",
      "Dressed tires and clean wheel barrels."
    ],
    stages: [
      { name: "Foam Soak", desc: "Spraying thick pH-balanced foam to dissolve road grime." },
      { name: "Two-Bucket Wash", desc: "Gentle wash with grid-guarded buckets." },
      { name: "Air Dry finishing", desc: "Blown air lines to dry mirror hinges and panel gaps." }
    ],
    pricing: [
      { title: "Signature Wash", price: "$49", items: ["Snow foam hand wash", "Undercarriage flush", "Tire shine wipe"] },
      { title: "Hype Wash & Wax", price: "$99", items: ["Signature wash", "Clay bar panel polish", "Spray sealant wax"] }
    ],
    faqs: [
      { q: "Do you use automatic brush machines?", a: "Never. Automatic brush machines cause heavy swirl marks. We only perform safe hand washes." },
      { q: "Is the undercarriage wash included?", a: "Yes, our wash packages include undercarriage pressure flushing." }
    ]
  }
};

interface PageProps {
  params: Promise<{ service: string }>;
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { service } = await params;
  const data = SERVICES_CATALOG[service];

  if (!data) {
    notFound();
  }

  const Icon = data.icon;

  return (
    <div className="min-h-screen bg-[#0a0a0c] pt-32 pb-24 text-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-wider text-white/40 mb-12">
          <Link href="/" className="hover:text-primary transition-colors">Home</Link>
          <ChevronRight className="h-3 w-3" />
          <Link href="/services" className="hover:text-primary transition-colors">Services</Link>
          <ChevronRight className="h-3 w-3" />
          <span className="text-primary">{data.title}</span>
        </div>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Column: Details */}
          <div className="lg:col-span-8 flex flex-col gap-12 text-left">
            
            {/* Service Title */}
            <div>
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary mb-6">
                <Icon className="h-6 w-6" />
              </div>
              <h1 className="text-4xl sm:text-5xl font-black uppercase tracking-tight mb-4">
                {data.title}
              </h1>
              <p className="text-sm font-semibold tracking-wider text-primary uppercase">
                {data.subtitle}
              </p>
              <div className="h-px bg-white/10 my-8" />
              <p className="text-sm text-white/50 leading-relaxed font-light">
                {data.overview}
              </p>
            </div>

            {/* Key Benefits */}
            <div>
              <h2 className="text-lg font-bold uppercase tracking-wider mb-6 text-white">
                Service Benefits
              </h2>
              <ul className="grid gap-4">
                {data.benefits.map((benefit, idx) => (
                  <li key={idx} className="flex gap-4 items-start text-xs text-white/60">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Step-by-Step Stages */}
            <div>
              <h2 className="text-lg font-bold uppercase tracking-wider mb-6 text-white">
                How We Perform It
              </h2>
              <div className="grid gap-6 border-l border-white/5 pl-6">
                {data.stages.map((stage, idx) => (
                  <div key={idx} className="relative flex gap-6 items-start group">
                    {/* Step indicator dot */}
                    <div className="absolute -left-[31px] top-1.5 h-2 w-2 rounded-full bg-primary border-4 border-[#0a0a0c] group-hover:scale-125 transition-transform" />
                    <div>
                      <h3 className="text-sm font-bold text-white uppercase tracking-wider">
                        {stage.name}
                      </h3>
                      <p className="text-xs text-white/40 leading-relaxed mt-1 font-light">
                        {stage.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* FAQs */}
            <div>
              <h2 className="text-lg font-bold uppercase tracking-wider mb-6 text-white">
                Frequently Asked Questions
              </h2>
              <div className="grid gap-6">
                {data.faqs.map((faq, idx) => (
                  <div key={idx} className="glass-panel rounded-2xl p-6 border border-white/5">
                    <h3 className="text-xs font-bold text-white uppercase tracking-wider flex gap-2 items-center">
                      <HelpCircle className="h-4 w-4 text-primary" /> {faq.q}
                    </h3>
                    <p className="text-xs text-white/50 leading-relaxed mt-2 font-light pl-6">
                      {faq.a}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Sidebar (Pricing packages + Booking triggers) */}
          <div className="lg:col-span-4 lg:sticky lg:top-32 flex flex-col gap-8">
            
            {/* Pricing Packages */}
            <div className="glass-panel rounded-3xl p-8 border border-white/5 flex flex-col gap-6 text-left">
              <h3 className="text-xs font-bold text-white uppercase tracking-widest border-b border-white/5 pb-4">
                Available Packages
              </h3>
              
              <div className="grid gap-6">
                {data.pricing.map((pack) => (
                  <div key={pack.title} className="flex flex-col gap-3">
                    <div className="flex justify-between items-end">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-white/80">{pack.title}</h4>
                    </div>
                    <ul className="grid gap-1.5 pl-4 border-l border-primary/20">
                      {pack.items.map((item) => (
                        <li key={item} className="text-[10px] text-white/40">{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick booking link card */}
            <div className="rounded-3xl bg-primary/5 border border-primary/20 p-8 flex flex-col gap-6 text-center items-center">
              <Phone className="h-8 w-8 text-primary animate-bounce" />
              <div>
                <h3 className="text-sm font-bold text-white uppercase tracking-wider">Ready to Book?</h3>
                <p className="text-[10px] text-white/40 mt-1 font-light">
                  Get a free repair estimate and surveyor claim assist.
                </p>
              </div>
              <div className="grid gap-3 w-full">
                <Link
                  href="/contact"
                  className="flex items-center justify-center gap-2 rounded-full bg-primary hover:bg-primary/95 text-white py-3.5 text-xs font-bold uppercase tracking-wider shadow-lg shadow-primary/20 transition-all"
                >
                  Schedule Appointment <ChevronRight className="h-4 w-4" />
                </Link>
                <a
                  href="https://wa.me/61485878180"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 text-white py-3.5 text-xs font-bold uppercase tracking-wider transition-all"
                >
                  <MessageSquare className="h-4 w-4 text-primary" /> WhatsApp Chat
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
