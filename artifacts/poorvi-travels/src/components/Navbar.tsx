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
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-md shadow-[#c9a227]/10 border-b border-[#e8e2d4]"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Main navigation">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a
            href="#home"
            onClick={(e) => { e.preventDefault(); handleNavClick("#home"); }}
            className="flex items-center gap-2.5 sm:gap-3 flex-shrink-0 min-w-0"
            aria-label="Poorvi Best Travels - Home"
          >
            <img
              src={logoPath}
              alt="Poorvi Best Travels Logo"
              className="h-9 sm:h-10 md:h-12 w-auto object-contain flex-shrink-0"
              width="120"
              height="56"
            />
            <div className="hidden sm:flex flex-col min-w-0 leading-tight border-l border-[#c9a227]/30 pl-2.5 sm:pl-3">
              <span
                className={`font-serif font-bold text-[11px] sm:text-sm md:text-base tracking-wide uppercase truncate ${
                  scrolled ? "gold-gradient-text" : "text-white drop-shadow-sm"
                }`}
              >
                POORVI BEST TRAVELS
              </span>
              <span
                className={`text-[9px] sm:text-[10px] font-semibold uppercase tracking-[0.18em] truncate ${
                  scrolled ? "text-[#8b6914]/80" : "text-[#f5e6b8]/90"
                }`}
              >
                Premium Airport Taxi
              </span>
            </div>
            <span
              className={`font-serif font-bold text-[10px] sm:hidden uppercase tracking-wide max-w-[120px] truncate ${
                scrolled ? "gold-gradient-text" : "text-white"
              }`}
            >
              POORVI BEST TRAVELS
            </span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                className={`text-sm font-semibold transition-colors duration-200 uppercase tracking-wider ${
                  scrolled ? "text-[#5c5c5c] hover:text-[#8b6914]" : "text-white/90 hover:text-[#f5e6b8]"
                }`}
                data-testid={`nav-link-${link.label.toLowerCase()}`}
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <a
              href="tel:+919902727466"
              className={`hidden sm:flex items-center gap-2 text-sm font-semibold transition-colors ${
                scrolled ? "text-[#8b6914] hover:text-[#c9a227]" : "text-[#f5e6b8] hover:text-white"
              }`}
              data-testid="nav-phone"
            >
              <Phone size={16} />
              <span>099027 27466</span>
            </a>
            <a
              href="https://wa.me/919902727466"
              target="_blank"
              rel="noopener noreferrer"
              className="gold-gradient-bg text-[#3f2e00] px-5 py-2 rounded-lg text-xs font-bold uppercase tracking-widest hover:brightness-110 transition-all hidden md:block luxury-shadow"
              data-testid="nav-book-now"
            >
              Book Now
            </a>
            <button
              className={`md:hidden p-2 ${scrolled ? "text-[#8b6914]" : "text-[#f5e6b8]"}`}
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              data-testid="nav-menu-toggle"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {mobileOpen && (
          <div className="md:hidden bg-white/98 backdrop-blur-md border-t border-[#e8e2d4] pb-6 pt-4 luxury-shadow">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                  className="text-sm font-semibold text-[#5c5c5c] hover:text-[#8b6914] hover:bg-[#faf8f3] px-4 py-3 rounded-lg transition-all uppercase tracking-wider"
                  data-testid={`mobile-nav-${link.label.toLowerCase()}`}
                >
                  {link.label}
                </a>
              ))}
              <div className="px-4 pt-3 flex flex-col gap-3">
                <a
                  href="tel:+919902727466"
                  className="flex items-center gap-2 text-[#8b6914] text-sm font-semibold"
                  data-testid="mobile-nav-phone"
                >
                  <Phone size={16} />
                  <span>099027 27466</span>
                </a>
                <a
                  href="https://wa.me/919902727466"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-center gold-gradient-bg text-[#3f2e00] px-5 py-3 rounded-lg text-sm font-bold uppercase tracking-widest"
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
