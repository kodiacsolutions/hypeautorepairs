"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, Clock, MessageSquare, ShieldCheck, ChevronRight } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    carModel: "",
    service: "car-detailing",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const resData = await response.json();

      if (response.ok && resData.success) {
        setSubmitted(true);
        // Reset form
        setFormData({
          name: "",
          email: "",
          phone: "",
          carModel: "",
          service: "car-detailing",
          message: "",
        });
      } else {
        setError(resData.error || "Something went wrong. Please try again.");
      }
    } catch (err: any) {
      setError("Failed to connect to the server. Please check your network and try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a0c] pt-32 pb-24 text-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Block */}
        <div className="max-w-3xl mb-20 text-left">
          <span className="text-xs font-bold text-primary uppercase tracking-widest">Connect with Us</span>
          <h1 className="text-4xl sm:text-6xl font-black uppercase tracking-tight mt-4 mb-6">
            Book Restoration.
          </h1>
          <p className="text-sm text-white/50 leading-relaxed font-light">
            Have questions about repair timelines or package rates? Leave a message below or call our diagnostics engineers.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Column: Form */}
          <div className="lg:col-span-7">
            {submitted ? (
              <div className="glass-panel rounded-3xl p-12 border border-primary/20 text-center flex flex-col items-center gap-6">
                <div className="h-16 w-16 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                  <ShieldCheck className="h-8 w-8 animate-bounce" />
                </div>
                <div>
                  <h3 className="text-xl font-bold uppercase tracking-wider text-white">Appointment Logged</h3>
                  <p className="text-xs text-white/50 mt-2 leading-relaxed max-w-sm">
                    Thank you. Our workshop supervisor will review your vehicle details and call you to confirm your inspection slot.
                  </p>
                </div>
                <button
                  onClick={() => setSubmitted(false)}
                  className="rounded-full border border-white/10 hover:border-primary bg-white/5 hover:bg-primary px-8 py-3 text-xs font-bold uppercase tracking-widest transition-all"
                >
                  New Booking
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="glass-panel rounded-3xl p-8 md:p-10 border border-white/5 flex flex-col gap-6 text-left">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-[10px] font-bold text-white/40 uppercase tracking-widest">Your Name</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Alexander Mercer"
                      className="rounded-xl border border-white/10 bg-black/40 px-4 py-3.5 text-xs text-white placeholder-white/20 focus:border-primary outline-none"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-[10px] font-bold text-white/40 uppercase tracking-widest">Email Address</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. alex@mercer.com"
                      className="rounded-xl border border-white/10 bg-black/40 px-4 py-3.5 text-xs text-white placeholder-white/20 focus:border-primary outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-[10px] font-bold text-white/40 uppercase tracking-widest">Phone Number</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="e.g. 0485 878 180"
                      className="rounded-xl border border-white/10 bg-black/40 px-4 py-3.5 text-xs text-white placeholder-white/20 focus:border-primary outline-none"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-[10px] font-bold text-white/40 uppercase tracking-widest">Car Model & Year</label>
                    <input
                      type="text"
                      required
                      value={formData.carModel}
                      onChange={(e) => setFormData({ ...formData, carModel: e.target.value })}
                      placeholder="e.g. Porsche Taycan 4S (2023)"
                      className="rounded-xl border border-white/10 bg-black/40 px-4 py-3.5 text-xs text-white placeholder-white/20 focus:border-primary outline-none"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-[10px] font-bold text-white/40 uppercase tracking-widest">Service Requested</label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="rounded-xl border border-white/10 bg-black px-4 py-3.5 text-xs text-white focus:border-primary outline-none"
                  >
                    <option value="car-detailing">Car Detailing & Compounding</option>
                    <option value="car-painting">Car Painting & Oven Bake</option>
                    <option value="denting">Denting & Panel Alignment</option>
                    <option value="accident-repair">Accident Restoration</option>
                    <option value="ceramic-coating">Ceramic Coating</option>
                    <option value="car-washing">Foam Washing</option>
                  </select>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-[10px] font-bold text-white/40 uppercase tracking-widest">Message details</label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe any paint damage, crease shapes, or detailing package targets..."
                    className="rounded-xl border border-white/10 bg-black/40 p-4 text-xs text-white placeholder-white/20 focus:border-primary outline-none resize-none"
                  />
                </div>

                {error && (
                  <div className="text-red-500 text-xs font-semibold text-center border border-red-500/20 bg-red-500/5 rounded-xl py-3 px-4">
                    {error}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className={`w-full flex items-center justify-center gap-2 rounded-xl text-white py-4 text-xs font-bold uppercase tracking-wider shadow-lg shadow-primary/20 transition-all hover:scale-[1.01] ${
                    loading ? "bg-primary/50 cursor-not-allowed" : "bg-primary hover:bg-primary/95"
                  }`}
                >
                  {loading ? "Sending Request..." : "Send Booking Request"}{" "}
                  {!loading && <ChevronRight className="h-4 w-4" />}
                </button>
              </form>
            )}
          </div>

          {/* Right Column: Info & Map mockup */}
          <div className="lg:col-span-5 flex flex-col gap-8 text-left">
            
            {/* Quick Contacts */}
            <div className="glass-panel rounded-3xl p-8 border border-white/5 flex flex-col gap-6">
              <h3 className="text-xs font-bold text-white uppercase tracking-widest border-b border-white/5 pb-4">
                Workshop Contacts
              </h3>
              
              <ul className="grid gap-4 text-xs text-white/60">
                <li className="flex items-center gap-3">
                  <Phone className="h-4.5 w-4.5 text-primary" />
                  <span>0485 878 180</span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="h-4.5 w-4.5 text-primary" />
                  <span>Hypeautorepairs@gmail.com</span>
                </li>
                <li className="flex items-center gap-3">
                  <MapPin className="h-4.5 w-4.5 text-primary" />
                  <span>5/172 Milperra Road, Revesby NSW 2212</span>
                </li>
                <li className="flex items-center gap-3">
                  <Clock className="h-4.5 w-4.5 text-primary" />
                  <span>Mon - Sat: 9:00 AM - 7:00 PM</span>
                </li>
              </ul>
            </div>

            {/* Google Map Mockup */}
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-white/10 bg-[#121216] flex items-center justify-center select-none">
              <div 
                className="absolute inset-0 bg-cover bg-center opacity-30 mix-blend-luminosity" 
                style={{ 
                  backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'><rect width='400' height='300' fill='%23121216'/><path d='M0 100 Q200 300 400 100 M0 200 L400 200' stroke='rgba(255,255,255,0.05)' stroke-width='2' fill='none'/></svg>")` 
                }}
              />
              <div className="relative z-10 flex flex-col items-center gap-3 text-center p-6">
                <MapPin className="h-8 w-8 text-primary animate-bounce" />
                <div>
                  <h4 className="font-bold text-white uppercase tracking-wider text-xs">Live Map Sandbox</h4>
                  <p className="text-[9px] text-white/40 mt-1 uppercase tracking-widest">Click to view location directions</p>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
