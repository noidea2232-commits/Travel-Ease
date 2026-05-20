import { Phone, MapPin, Clock, MessageCircle } from "lucide-react";
import logoPath from "@assets/WhatsApp_Image_2026-05-16_at_5.56.15_PM_1779026878315.jpeg";

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "Fleet", href: "#fleet" },
  { label: "Tourism", href: "#tourism" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

const services = [
  "Airport Transfer",
  "Outstation Trips",
  "City Service",
  "Round Trips",
  "One-Way Booking",
  "Tempo Traveller",
  "Mini Bus",
  "Corporate Travel",
];

export default function Footer() {
  const handleNavClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-[#1c1c1c] border-t border-[#c9a227]/20" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          <div className="sm:col-span-2 lg:col-span-1">
            <img
              src={logoPath}
              alt="Poorvi Best Travels Logo"
              className="h-16 w-auto object-contain mb-4 brightness-110"
              width="140"
              height="64"
            />
            <p className="text-[#e8e2d4]/80 text-sm leading-relaxed mb-5">
              Your most trusted travel partner in Bengaluru. Car rental, outstation trips, city rides, and group travel — all vehicle types available.
            </p>
            <div className="flex items-center gap-1.5 text-[#c9a227]">
              {[1, 2, 3, 4, 5].map((i) => (
                <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
              <span className="text-[#e8e2d4]/70 text-xs ml-1.5">5.0 · 234 Reviews</span>
            </div>
          </div>

          <div>
            <h3 className="text-[#f5e6b8] font-semibold text-sm uppercase tracking-widest mb-5">Quick Links</h3>
            <nav aria-label="Footer navigation">
              <ul className="space-y-2.5">
                {quickLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                      className="text-[#e8e2d4]/70 hover:text-[#c9a227] text-sm transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div>
            <h3 className="text-[#f5e6b8] font-semibold text-sm uppercase tracking-widest mb-5">Our Services</h3>
            <ul className="space-y-2.5">
              {services.map((s) => (
                <li key={s} className="text-[#e8e2d4]/70 text-sm">{s}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[#f5e6b8] font-semibold text-sm uppercase tracking-widest mb-5">Contact Info</h3>
            <div className="space-y-4">
              <a href="tel:+919902727466" className="flex items-center gap-3 text-[#e8e2d4]/70 hover:text-[#c9a227] text-sm transition-colors group">
                <Phone size={15} className="text-[#c9a227] flex-shrink-0" />
                <span>099027 27466</span>
              </a>
              <a
                href="https://wa.me/919902727466"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-[#e8e2d4]/70 hover:text-[#25D366] text-sm transition-colors"
              >
                <MessageCircle size={15} className="text-[#25D366] flex-shrink-0" />
                <span>WhatsApp Booking</span>
              </a>
              <div className="flex items-start gap-3 text-[#e8e2d4]/70 text-sm">
                <Clock size={15} className="text-[#c9a227] flex-shrink-0 mt-0.5" />
                <span>Open Daily · Closes 10 PM</span>
              </div>
              <div className="flex items-start gap-3 text-[#e8e2d4]/70 text-sm">
                <MapPin size={15} className="text-[#c9a227] flex-shrink-0 mt-0.5" />
                <span>J. P. Nagar, 8th Phase, Bengaluru, Karnataka 560076</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-[#c9a227]/15 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[#e8e2d4]/50 text-xs text-center sm:text-left">
            &copy; {new Date().getFullYear()} Poorvi Best Travels. All rights reserved. · J.P. Nagar, Bengaluru, Karnataka
          </p>
          <p className="text-[#e8e2d4]/40 text-xs">
            Travel agency in Karnataka · 5.0 ⭐ Google Rated
          </p>
        </div>
      </div>
    </footer>
  );
}
