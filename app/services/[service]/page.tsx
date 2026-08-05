import Link from "next/link";
import { notFound } from "next/navigation";
import { 
  Paintbrush, Wrench, ShieldAlert, FileText, 
  Settings, Cpu, Disc, BookOpen, Droplet, Wind,
  CheckCircle2, ChevronRight, Phone, HelpCircle
} from "lucide-react";

// 1. Static parameter list for static compilation exports
export async function generateStaticParams() {
  return [
    { service: "car-painting" },
    { service: "denting" },
    { service: "accident-repair" },
    { service: "insurance-claims" },
    { service: "part-replacement" },
    { service: "fault-diagnosing" },
    { service: "tyre-replacement" },
    { service: "logbook-service" },
    { service: "oil-change" },
    { service: "aircon-regas" },
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
      { title: "Single Panel Coat", price: "Custom Quote", items: ["Panel sanding", "Base coat match", "UV clear coat"] },
      { title: "Full Vehicle Bake", price: "Custom Quote", items: ["Complete body prep", "Chassis mask", "5-Year paint warranty"] }
    ],
    faqs: [
      { q: "Do you offer custom colors?", a: "Yes, we paint custom satin, matte, and metallic pigments besides factory-matching colors." },
      { q: "How long is the paint warranty?", a: "We provide a 5-Year warranty against peeling, clear coat fading, and paint bubbling." }
    ]
  },
  "denting": {
    title: "Denting & Panel Alignment",
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
      { title: "Crease Dent Repair", price: "Custom Quote", items: ["Dent pulling", "Surface level scan", "Paint prep match"] },
      { title: "Multiple Panel realign", price: "Custom Quote", items: ["Chassis frame check", "Door hinge pin refits", "Gap leveling check"] }
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
      { title: "Standard Dent & Re-fit", price: "Custom Quote", items: ["Crash bar refit", "Panel painting", "Sensors check"] },
      { title: "Elite Frame Rebuild", price: "Custom Quote", items: ["Chassis jig realignment", "Suspension refits", "Airbag diagnostics reset"] }
    ],
    faqs: [
      { q: "Will the car drive straight after frame repair?", a: "Yes, we verify wheel track alignment on laser rigs to guarantee factory driving handling specs." }
    ]
  },
  "insurance-claims": {
    title: "Insurance Claims Assistance",
    icon: FileText,
    subtitle: "Direct Filing Coordination with Cashless Approvals",
    desc: "Paperwork filing, photo reports, surveyor coordination, and direct insurance billing support.",
    overview: "We coordinate with insurance surveyors to inspect the vehicle at our workshop, prepare digital estimation forms, submit claim pictures, and handle direct billing.",
    benefits: [
      "Saves you hours of phone calls and paperwork.",
      "Secures repair clearance approvals within 24-48 hours.",
      "Integrates direct cashless settlement pathways."
    ],
    stages: [
      { name: "Claim Setup", desc: "Gathering driver license copies, policy notes, and accident reports." },
      { name: "Surveyor Audit", desc: "Hosting insurance inspectors to audit damage points at our workshop." },
      { name: "Billing Handover", desc: "Direct billing to the carrier, saving you out-of-pocket costs." }
    ],
    pricing: [
      { title: "Standard Filing", price: "Free", items: ["Filing claim forms", "Uploading photos", "Hosting surveyor check"] },
      { title: "Cashless Priority File", price: "Free", items: ["Direct corporate billing", "Fast-track parts pre-orders", "No paperwork"] }
    ],
    faqs: [
      { q: "Which insurance companies do you work with?", a: "We work with all major national and private car insurance providers." },
      { q: "Do I have to pay anything out of pocket?", a: "Only the policy deductible and any depreciation elements dictated by your insurance policy structure." }
    ]
  },
  "part-replacement": {
    title: "Part Replacement",
    icon: Settings,
    subtitle: "Premium OEM & Certified Parts Replacement",
    desc: "Replacing worn or damaged components with high-quality OEM or certified parts.",
    overview: "We diagnose and replace faulty parts including suspension components, brake rotors, belts, hoses, and filters. All parts are sourced from premium suppliers to maintain warranty.",
    benefits: [
      "Maintains vehicle manufacturer warranty.",
      "Ensures optimal safety and performance.",
      "All replacements come with parts and labor warranty."
    ],
    stages: [
      { name: "Diagnostic Check", desc: "Testing components to locate wear and tear points." },
      { name: "OEM Sourcing", desc: "Sourcing certified parts matching your vehicle spec." },
      { name: "Installation", desc: "Precise installation and torque calibration to factory specs." }
    ],
    pricing: [
      { title: "Basic Wear Replacements", price: "Custom Quote", items: ["Brake pad swap", "Belt adjustments", "Filter change"] },
      { title: "Major Assembly Swap", price: "Custom Quote", items: ["Suspension struts", "Alternator replace", "Radiator replacement"] }
    ],
    faqs: [
      { q: "Do you use genuine parts?", a: "Yes, we prioritize genuine OEM parts or certified premium aftermarket equivalents." }
    ]
  },
  "fault-diagnosing": {
    title: "Fault Diagnosing",
    icon: Cpu,
    subtitle: "Advanced Computerized Diagnostics Scan",
    desc: "Complete vehicle diagnostics scanning, warning light checks, and sensor testing.",
    overview: "Our advanced scan tools read diagnostic trouble codes from your vehicle's engine control unit (ECU). We troubleshoot check engine lights, transmission errors, ABS faults, and sensor failures.",
    benefits: [
      "Locates electrical and mechanical issues instantly.",
      "Prevents minor faults from turning into costly repairs.",
      "Ensures all safety systems are fully calibrated."
    ],
    stages: [
      { name: "ECU Scan", desc: "Connecting diagnostic tools to read error code history." },
      { name: "Live Data Feed", desc: "Checking sensor output readings during active engine cycles." },
      { name: "Fault Analysis", desc: "Isolating faulty relays, sensors, or mechanical wear points." }
    ],
    pricing: [
      { title: "Standard Diagnostics Scan", price: "Custom Quote", items: ["OBD-II scan", "Clear error codes", "Estimate printout"] },
      { title: "Advanced Electrical Scope", price: "Custom Quote", items: ["Sensor wave checks", "Wiring harness trace", "Safety system reset"] }
    ],
    faqs: [
      { q: "What does a check engine light mean?", a: "It indicates a fault in the emissions or engine control system. A scan tool is required to read the specific code." }
    ]
  },
  "tyre-replacement": {
    title: "Tyre Replacement",
    icon: Disc,
    subtitle: "Premium Tyre Replacement & Balancing",
    desc: "Fitting, balancing, and alignment of passenger, performance, and commercial tyres.",
    overview: "We supply and fit a wide range of premium tyres. Our service includes tyre mounting, high-speed wheel balancing, valve replacement, and digital wheel alignment checks.",
    benefits: [
      "Improves road traction and braking safety.",
      "Reduces uneven tyre wear and road noise.",
      "Optimizes fuel efficiency through correct rolling balance."
    ],
    stages: [
      { name: "Tyre Stripping", desc: "Removing old tyres from rims safely using clean clamping machines." },
      { name: "Fitting & Balancing", desc: "Mounting new tyres and applying wheel weights on spin balancers." },
      { name: "Alignment Check", desc: "Adjusting toe and camber parameters on laser aligners." }
    ],
    pricing: [
      { title: "Single Tyre Mount & Balance", price: "Custom Quote", items: ["New tyre fitment", "Wheel spin balance", "Valve swap"] },
      { title: "Full Set & Wheel Align", price: "Custom Quote", items: ["4 Tyre replacements", "4 Wheel balance", "Laser wheel alignment"] }
    ],
    faqs: [
      { q: "How often should I align my wheels?", a: "We recommend a wheel alignment check every 12 months or when fitting new tyres." }
    ]
  },
  "logbook-service": {
    title: "Logbook Service",
    icon: BookOpen,
    subtitle: "Warranty-Approved Scheduled Services",
    desc: "Scheduled maintenance checks, fluid swaps, filters, and official logbook stamps.",
    overview: "We perform scheduled servicing according to your vehicle manufacturer's guidelines. We use approved filters and lubricants to ensure your new car warranty remains fully protected.",
    benefits: [
      "Keeps your manufacturer warranty 100% valid.",
      "Maintains a complete service history record.",
      "Keeps engine components running under peak oil specs."
    ],
    stages: [
      { name: "Logbook Checkpoint", desc: "Reviewing scheduled checkpoints for your vehicle age/km mark." },
      { name: "Fluid & Filter Swap", desc: "Replacing engine oil, oil filters, cabin filters, and fluids." },
      { name: "Logbook Stamp", desc: "Stamping your vehicle service booklet for official records." }
    ],
    pricing: [
      { title: "Minor Logbook Check", price: "Custom Quote", items: ["Oil & filter change", "Safety checks scan", "Fluid level top-ups"] },
      { title: "Major Logbook Check", price: "Custom Quote", items: ["Spark plug swap", "Brake fluid flush", "Engine diagnostics review"] }
    ],
    faqs: [
      { q: "Will this service void my warranty?", a: "No. Under Australian law, certified independent workshops can perform logbook services without voiding manufacturer warranties." }
    ]
  },
  "oil-change": {
    title: "Basic Oil Change",
    icon: Droplet,
    subtitle: "Premium Engine Oil & Filter Change",
    desc: "Quick synthetic oil drain, new filter replacement, and vehicle fluid checks.",
    overview: "Keep your engine running cool and clean. We drain old oil, install a premium spin-on oil filter, fill with approved full-synthetic engine oil, and check your safety vitals.",
    benefits: [
      "Reduces friction wear on internal pistons and bearings.",
      "Draws heat away from vital combustion chambers.",
      "Prevents engine sludge buildup."
    ],
    stages: [
      { name: "Sump Drain", desc: "Draining hot, contaminated oil from the engine sump block." },
      { name: "Filter Swap", desc: "Installing a brand new high-capacity filtration element." },
      { name: "Refill & Level", desc: "Refilling with premium synthetic oil matching factory weight specs." }
    ],
    pricing: [
      { title: "Standard Oil Service", price: "Custom Quote", items: ["Up to 5L synthetic oil", "Premium oil filter", "Under-bonnet fluid check"] },
      { title: "SUV & Diesel Service", price: "Custom Quote", items: ["Up to 8L diesel synthetic oil", "Heavy-duty filter", "Brake & safety check"] }
    ],
    faqs: [
      { q: "How often should I change my engine oil?", a: "We recommend changes every 10,000 km or 6 months, whichever comes first." }
    ]
  },
  "aircon-regas": {
    title: "Aircon Regas",
    icon: Wind,
    subtitle: "Ice-Cold Cabin Air Conditioning Recharge",
    desc: "A/C refrigerant vacuum testing, gas recharge, and leak diagnostics.",
    overview: "Restore your air conditioning system's cooling power. We vacuum test your system for micro-leaks, evacuate old gas, recharge with fresh R134a or R1234yf refrigerant, and add compressor lubricant.",
    benefits: [
      "Restores air conditioning to ice-cold cabin temperatures.",
      "Lubricates internal AC compressor seal gaskets.",
      "Leak testing prevents environmental gas escape."
    ],
    stages: [
      { name: "Pressure Vacuum Test", desc: "Draining air conditioning lines and holding vacuum to check for leaks." },
      { name: "Lubricant Injection", desc: "Adding synthetic PAG compressor oils into lines." },
      { name: "Refrigerant Charge", desc: "Weighing and charging gas matching your dash plate spec." }
    ],
    pricing: [
      { title: "Standard R134a Regas", price: "Custom Quote", items: ["Vacuum pressure test", "R134a gas recharge", "Vent temp verify"] },
      { title: "Premium R1234yf Regas", price: "Custom Quote", items: ["New model gas recharge", "Ozone sanitation", "AC cabin filter swap"] }
    ],
    faqs: [
      { q: "Why is my air conditioner blowing warm air?", a: "It is usually due to low refrigerant levels caused by micro-leaks, or a compressor clutch failure. A vacuum test will identify the issue." }
    ]
  }
};

import { Metadata } from "next";

interface PageProps {
  params: Promise<{ service: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { service } = await params;
  const data = SERVICES_CATALOG[service];
  
  if (!data) {
    return {
      title: "Service Not Found | Hype Mechanical & Smash Repairs",
    };
  }
  
  return {
    title: `${data.title} | Hype Mechanical & Smash Repairs Revesby`,
    description: `${data.desc} Professional car mechanical services and smash repairs at Revesby NSW. Get a free quote today.`,
    alternates: {
      canonical: `https://hypeautorepairs.com.au/services/${service}`,
    },
    openGraph: {
      title: `${data.title} | Hype Mechanical & Smash Repairs`,
      description: data.desc,
      url: `https://hypeautorepairs.com.au/services/${service}`,
      images: [
        {
          url: "https://hypeautorepairs.com.au/logo-footer.png",
          width: 800,
          height: 600,
          alt: data.title,
        }
      ]
    }
  };
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
                  Get a free diagnostic check or repair quotation.
                </p>
              </div>
              <div className="grid gap-3 w-full">
                <Link
                  href="/contact"
                  className="flex items-center justify-center gap-2 rounded-full bg-primary hover:bg-primary/95 text-white py-3.5 text-xs font-bold uppercase tracking-wider shadow-lg shadow-primary/20 transition-all"
                >
                  Schedule Appointment <ChevronRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
