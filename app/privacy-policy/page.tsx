"use client";

import Link from "next/link";
import { ChevronRight, ShieldCheck } from "lucide-react";

export default function PrivacyPolicyPage() {
  const sections = [
    {
      num: "01",
      title: "Introduction",
      content: "Your privacy is important to us. This Privacy Policy explains how Hype Mechanical & Smash Repairs collects, uses, and protects your information when you use our website or our automotive services."
    },
    {
      num: "02",
      title: "Information We Collect",
      content: "We may collect: Personal Information (Full Name, Phone Number, Email Address, Billing/Postal Address), Vehicle Information (Registration plate number, VIN/Chassis number, make, model, year, and service history), and Technical Information (IP Address, Browser Type, Device Information, Pages Visited, and Website Usage Statistics)."
    },
    {
      num: "03",
      title: "How We Use Your Information",
      content: "Your information is used to schedule appointments, respond to inquiries, provide repair quotations, deliver requested services, process insurance assistance claims, improve our website and services, send service updates/reminders, and respond to customer support requests. We do not sell your personal information."
    },
    {
      num: "04",
      title: "Cookies",
      content: "Our website may use cookies to improve user experience, analyze website traffic, remember preferences, and enhance overall website performance. You may disable cookies through your browser settings, though some site functionalities may become restricted."
    },
    {
      num: "05",
      title: "Information Sharing",
      content: "We may share information only when necessary with: Insurance providers (for claim audits), Vehicle parts suppliers (to order components), Payment processors (to secure transactions), Legal authorities (when required by law), and Service providers assisting in business operations. We never sell customer information to third parties."
    },
    {
      num: "06",
      title: "Data Security",
      content: "We implement reasonable technical and organizational security measures to protect your information against unauthorized access, loss, misuse, alteration, or disclosure. However, no internet transmission or electronic storage method can be guaranteed to be 100% secure."
    },
    {
      num: "07",
      title: "Data Retention",
      content: "We retain customer information only for as long as necessary to complete requested services, maintain historical service/warranty records, comply with legal and taxation obligations, and resolve disputes."
    },
    {
      num: "08",
      title: "Your Rights",
      content: "Depending on applicable privacy law, you may request to access your personal data, correct inaccurate information, delete your personal information, withdraw consent where applicable, or request data portability. Requests may be submitted using the contact details below."
    },
    {
      num: "09",
      title: "Third-Party Services",
      content: "Our website may integrate with third-party services such as Google Maps, payment gateways, analytics providers, and communication channels. These providers maintain their own privacy policies."
    },
    {
      num: "10",
      title: "Children's Privacy",
      content: "Our website is not intended for children under 13 years of age, and we do not knowingly collect personal information from children."
    },
    {
      num: "11",
      title: "Updates to This Policy",
      content: "We may revise this Privacy Policy periodically. Any updates will be posted on this page with the revised effective date."
    }
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0c] pt-32 pb-24 text-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-wider text-white/40 mb-12">
          <Link href="/" className="hover:text-primary transition-colors">Home</Link>
          <ChevronRight className="h-3 w-3" />
          <span className="text-primary">Privacy Policy</span>
        </div>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Column: Privacy Policy Content */}
          <div className="lg:col-span-8 flex flex-col gap-12 text-left">
            <div>
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary mb-6">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <h1 className="text-4xl sm:text-5xl font-black uppercase tracking-tight mb-4">
                Privacy Policy
              </h1>
              <p className="text-sm font-semibold tracking-wider text-primary uppercase">
                Effective Date: July 31, 2026
              </p>
              <div className="h-px bg-white/10 my-8" />
              <p className="text-xs text-white/40 leading-relaxed font-light">
                We value your privacy and are committed to safeguarding the personal and vehicle data you share with us. This policy describes how we collect and manage your information.
              </p>
            </div>

            {/* Privacy Sections */}
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
                Privacy Contact
              </h3>
              <p className="text-xs text-white/40 leading-relaxed font-light">
                For questions regarding data access requests, corrections, or privacy concerns, please contact our data coordinator.
              </p>
              <ul className="grid gap-4 text-xs text-white/60">
                <li className="flex flex-col gap-1">
                  <span className="text-[10px] text-white/30 uppercase font-bold tracking-wider">Business Name</span>
                  <span className="text-white font-medium">Hype Mechanical & Smash Repairs</span>
                </li>
                <li className="flex flex-col gap-1">
                  <span className="text-[10px] text-white/30 uppercase font-bold tracking-wider">Email Address</span>
                  <span className="text-primary hover:underline">info@hypemechanical.com.au</span>
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
