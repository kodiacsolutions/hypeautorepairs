import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Clock, MessageSquare } from "lucide-react";
import { FaInstagram, FaFacebook, FaTiktok } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const servicesLinks = [
    { name: "Car Detailing", href: "/services/car-detailing" },
    { name: "Car Painting", href: "/services/car-painting" },
    { name: "Denting & Bodywork", href: "/services/denting" },
    { name: "Accident Repair", href: "/services/accident-repair" },
    { name: "Insurance Claims", href: "/services/insurance-claims" },
    { name: "Ceramic Coating", href: "/services/ceramic-coating" },
  ];

  const quickLinks = [
    { name: "Our Services", href: "/services" },
    { name: "Before & After Gallery", href: "/gallery" },
    { name: "Service Packages", href: "/pricing" },
    { name: "About Workshop", href: "/about" },
    { name: "Book Consultation", href: "/contact" },
  ];

  return (
    <footer className="w-full border-t border-white/10 bg-[#060608] text-white/70 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-2">
              <div className="relative h-32 w-64">
                <Image
                  src="/logo-footer.png"
                  alt="Hype Mechanical & Smash Repairs"
                  fill
                  className="object-contain object-left"
                />
              </div>
            </div>
            <p className="text-xs text-white/50 leading-relaxed">
              High-quality smash repairs, precision accident restoration, and
              comprehensive mechanical services for all makes and models.
            </p>
            <div className="flex gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full border border-white/5 bg-white/5 text-white/60 hover:text-white hover:border-primary transition-all duration-300"
                aria-label="Instagram"
              >
                <FaInstagram className="h-4 w-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full border border-white/5 bg-white/5 text-white/60 hover:text-white hover:border-primary transition-all duration-300"
                aria-label="Facebook"
              >
                <FaFacebook className="h-4 w-4" />
              </a>
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full border border-white/5 bg-white/5 text-white/60 hover:text-white hover:border-primary transition-all duration-300"
                aria-label="TikTok"
              >
                <FaTiktok className="h-4 w-4" />
              </a>
              <a
                href="https://wa.me/61485878180"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full border border-white/5 bg-white/5 text-white/60 hover:text-white hover:border-primary transition-all duration-300"
                aria-label="WhatsApp"
              >
                <MessageSquare className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div>
            <h3 className="mb-6 text-xs font-bold text-white uppercase tracking-widest">
              Workshop
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-xs text-white/50 hover:text-primary transition-all duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="mb-6 text-xs font-bold text-white uppercase tracking-widest">
              Services
            </h3>
            <ul className="space-y-3">
              {servicesLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-xs text-white/50 hover:text-primary transition-all duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Hours Column */}
          <div className="flex flex-col gap-6">
            <div>
              <h3 className="mb-4 text-xs font-bold text-white uppercase tracking-widest">
                Contact & Location
              </h3>
              <ul className="space-y-3 text-xs text-white/50">
                <li className="flex items-start gap-3">
                  <MapPin className="h-4 w-4 text-primary shrink-0" />
                  <span>5/172 Milperra Road, Revesby NSW 2212</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="h-4 w-4 text-primary shrink-0" />
                  <span>0485 878 180</span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="h-4 w-4 text-primary shrink-0" />
                  <span>info@hypemechanical.com.au</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="mb-2 text-xs font-bold text-white uppercase tracking-widest">
                Business Hours
              </h3>
              <div className="flex items-center gap-3 text-xs text-white/50">
                <Clock className="h-4 w-4 text-primary shrink-0" />
                <span>Mon - Sat: 9:00 AM - 7:00 PM</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-white/30 uppercase tracking-widest">
          <p>
            © {currentYear} Hype Mechanical & Smash Repairs. All rights
            reserved.
          </p>
          <div className="flex gap-6">
            <Link
              href="/privacy-policy"
              className="hover:text-primary transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="hover:text-primary transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
