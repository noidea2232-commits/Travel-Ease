import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import logoPath from "@assets/WhatsApp_Image_2026-05-16_at_5.56.15_PM_1779026878315.jpeg";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Fleet", href: "#fleet" },
  { label: "Tourism", href: "#tourism" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[#081425]/95 backdrop-blur-md shadow-lg shadow-black/30" : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Main navigation">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => { e.preventDefault(); handleNavClick("#home"); }}
            className="flex items-center gap-3 flex-shrink-0"
            aria-label="Poorvi Best Travels - Home"
          >
            <img
              src={logoPath}
              alt="Poorvi Best Travels Logo"
              className="h-10 md:h-14 w-auto object-contain"
              width="120"
              height="56"
            />
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                className="text-sm font-semibold text-[#d0c5b3] hover:text-[#ffdc8e] transition-colors duration-200 uppercase tracking-wider"
                data-testid={`nav-link-${link.label.toLowerCase()}`}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-3">
            <a
              href="tel:+919902727466"
              className="hidden sm:flex items-center gap-2 text-[#ffdc8e] text-sm font-semibold hover:text-white transition-colors"
              data-testid="nav-phone"
            >
              <Phone size={16} />
              <span>099027 27466</span>
            </a>
            <a
              href="https://wa.me/919902727466"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-[#ffdc8e] to-[#e3c06f] text-[#3f2e00] px-5 py-2 rounded-lg text-xs font-bold uppercase tracking-widest hover:brightness-110 transition-all hidden md:block"
              data-testid="nav-book-now"
            >
              Book Now
            </a>
            <button
              className="md:hidden text-[#ffdc8e] p-2"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              data-testid="nav-menu-toggle"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="md:hidden bg-[#081425]/98 backdrop-blur-md border-t border-[#ffdc8e]/10 pb-6 pt-4">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                  className="text-sm font-semibold text-[#d0c5b3] hover:text-[#ffdc8e] hover:bg-[#ffdc8e]/5 px-4 py-3 rounded-lg transition-all uppercase tracking-wider"
                  data-testid={`mobile-nav-${link.label.toLowerCase()}`}
                >
                  {link.label}
                </a>
              ))}
              <div className="px-4 pt-3 flex flex-col gap-3">
                <a
                  href="tel:+919902727466"
                  className="flex items-center gap-2 text-[#ffdc8e] text-sm font-semibold"
                  data-testid="mobile-nav-phone"
                >
                  <Phone size={16} />
                  <span>099027 27466</span>
                </a>
                <a
                  href="https://wa.me/919902727466"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-center bg-gradient-to-r from-[#ffdc8e] to-[#e3c06f] text-[#3f2e00] px-5 py-3 rounded-lg text-sm font-bold uppercase tracking-widest"
                  data-testid="mobile-nav-book"
                >
                  Book on WhatsApp
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
