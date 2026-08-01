"use client";

import Link from "next/link";
import { ChevronRight, Scale } from "lucide-react";

export default function TermsPage() {
  const sections = [
    {
      num: "01",
      title: "Introduction",
      content: "Welcome to Hype Mechanical & Smash Repairs. By accessing or using this website, you agree to comply with these Terms & Conditions. If you do not agree with any part of these terms, please discontinue using our website."
    },
    {
      num: "02",
      title: "Services",
      content: "We provide automotive services including but not limited to: Accident repairs, Vehicle restoration, Car detailing, Denting & painting, Insurance claim assistance, Mechanical repairs, Vehicle inspection, and General automotive maintenance. All services are subject to availability and physical inspection of the vehicle at our workshop."
    },
    {
      num: "03",
      title: "Estimates & Quotations",
      content: "All quotations provided through our website, phone, email, or in person are estimates only. Final pricing may vary depending on actual vehicle condition, hidden damages discovered during dismantling, availability of parts, additional repairs required, or customer-approved modifications. No work requiring additional charges will begin without prior customer approval."
    },
    {
      num: "04",
      title: "Appointments",
      content: "Appointments requested through the website are subject to confirmation by our team. We reserve the right to reschedule appointments due to workshop capacity, technician availability, parts backorders, or other unforeseen operational circumstances."
    },
    {
      num: "05",
      title: "Customer Responsibilities",
      content: "Customers agree to provide accurate vehicle information, remove all personal belongings and valuables before handing over the vehicle, inform us of any existing mechanical or electrical issues, and collect the vehicle promptly after completion of work. We are not responsible for valuables left inside the vehicle."
    },
    {
      num: "06",
      title: "Insurance Claims",
      content: "Where applicable, we may assist customers with insurance claim documentation and coordinator audits. However, approval of insurance claims remains solely at the discretion of the insurance provider. We cannot guarantee claim approval, processing timelines, coverage amounts, or policy eligibility."
    },
    {
      num: "07",
      title: "Payment",
      content: "Payment must be completed in full before the release of the vehicle unless otherwise agreed in writing. Accepted payment methods include Cash, Credit/Debit Cards, Bank Transfer, and approved digital payment gateways. Late payments may incur storage or administration fees where permitted by law."
    },
    {
      num: "08",
      title: "Warranty",
      content: "Where applicable, workmanship warranties are provided for eligible collision and paint services. Warranty does not cover normal wear and tear, customer misuse, accidents after repair, unauthorized repairs performed elsewhere, or damage caused by external factors. Manufacturer warranties on replacement parts remain subject to the respective manufacturer's terms."
    },
    {
      num: "09",
      title: "Website Content",
      content: "All content including images, logos, graphics, videos, text, and service descriptions are the property of Hype Mechanical & Smash Repairs unless otherwise stated. Unauthorized copying, reproduction, or distribution of this content is strictly prohibited."
    },
    {
      num: "10",
      title: "Limitation of Liability",
      content: "While we strive to provide accurate information, we do not guarantee that the website is free from errors or omissions. To the maximum extent permitted by law, we shall not be liable for indirect damages, loss of profits, data loss, vehicle downtime, or third-party service delays."
    },
    {
      num: "11",
      title: "Third-Party Links",
      content: "Our website may contain links to external websites for customer convenience. We are not responsible for the content, policies, or practices of third-party websites."
    },
    {
      num: "12",
      title: "Changes to Terms",
      content: "We reserve the right to update these Terms & Conditions at any time without prior notice. Continued use of the website constitutes acceptance of the updated terms."
    },
    {
      num: "13",
      title: "Governing Law",
      content: "These Terms & Conditions shall be governed by and construed in accordance with the laws of New South Wales, Australia, where our business operates."
    }
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0c] pt-32 pb-24 text-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-wider text-white/40 mb-12">
          <Link href="/" className="hover:text-primary transition-colors">Home</Link>
          <ChevronRight className="h-3 w-3" />
          <span className="text-primary">Terms & Conditions</span>
        </div>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Column: Terms Content */}
          <div className="lg:col-span-8 flex flex-col gap-12 text-left">
            <div>
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary mb-6">
                <Scale className="h-6 w-6" />
              </div>
              <h1 className="text-4xl sm:text-5xl font-black uppercase tracking-tight mb-4">
                Terms & Conditions
              </h1>
              <p className="text-sm font-semibold tracking-wider text-primary uppercase">
                Effective Date: July 31, 2026
              </p>
              <div className="h-px bg-white/10 my-8" />
              <p className="text-xs text-white/40 leading-relaxed font-light">
                Please read these terms carefully before using our website or booking repairs. By accessing our services, you agree to be bound by the terms outlined below.
              </p>
            </div>

            {/* Terms Sections */}
            <div className="grid gap-8">
              {sections.map((sec) => (
                <div key={sec.num} className="glass-panel rounded-2xl p-8 border border-white/5 flex gap-6 items-start">
                  <span className="h-8 w-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center font-bold text-xs shrink-0 font-mono">
                    {sec.num}
                  </span>
                  <div>
                    <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-2">{sec.title}</h3>
                    <p className="text-xs text-white/50 leading-relaxed font-light">{sec.content}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* Right Column: Contact info Sidebar */}
          <div className="lg:col-span-4 lg:sticky lg:top-32 flex flex-col gap-8">
            <div className="glass-panel rounded-3xl p-8 border border-white/5 flex flex-col gap-6 text-left">
              <h3 className="text-xs font-bold text-white uppercase tracking-widest border-b border-white/5 pb-4">
                Legal Contact
              </h3>
              <p className="text-xs text-white/40 leading-relaxed font-light">
                For questions regarding our terms, warranties, or claims policies, please reach out to our administration office.
              </p>
              <ul className="grid gap-4 text-xs text-white/60">
                <li className="flex flex-col gap-1">
                  <span className="text-[10px] text-white/30 uppercase font-bold tracking-wider">Business Name</span>
                  <span className="text-white font-medium">Hype Mechanical & Smash Repairs</span>
                </li>
                <li className="flex flex-col gap-1">
                  <span className="text-[10px] text-white/30 uppercase font-bold tracking-wider">Email Address</span>
                  <span className="text-primary hover:underline">Hypeautorepairs@gmail.com</span>
                </li>
                <li className="flex flex-col gap-1">
                  <span className="text-[10px] text-white/30 uppercase font-bold tracking-wider">Phone Number</span>
                  <span className="text-white">0485 878 180</span>
                </li>
                <li className="flex flex-col gap-1">
                  <span className="text-[10px] text-white/30 uppercase font-bold tracking-wider">Address</span>
                  <span className="text-white leading-relaxed">5/172 Milperra Road, Revesby NSW 2212</span>
                </li>
              </ul>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
