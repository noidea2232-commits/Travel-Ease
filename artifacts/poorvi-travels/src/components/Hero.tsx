import { useState } from "react";
import { MapPin, Calendar, Car, Phone } from "lucide-react";
import HeroBackgroundSlider from "@/components/HeroBackgroundSlider";

const tripTypes = ["Airport Transfer", "Outstation", "City Local", "Round Trip", "One Way"];

export default function Hero() {
  const [formData, setFormData] = useState({
    pickup: "",
    drop: "",
    tripType: "Airport Transfer",
    date: "",
    phone: "",
  });

  const handleBook = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Hi! I want to book a cab.\nPickup: ${formData.pickup}\nDrop: ${formData.drop}\nTrip Type: ${formData.tripType}\nDate: ${formData.date}\nPhone: ${formData.phone}`;
    window.open(`https://wa.me/919902727466?text=${encodeURIComponent(msg)}`, "_blank");
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-16 md:pt-20 overflow-hidden"
      aria-label="Hero section"
    >
      <HeroBackgroundSlider />

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c9a227]/50 to-transparent z-10" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          <div className="space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-[#e8d5a3]/30 rounded-full px-4 py-2 text-[#f5e6b8] text-xs font-bold uppercase tracking-widest shadow-lg">
              <span className="w-2 h-2 rounded-full bg-[#c9a227] animate-pulse shadow-[0_0_8px_#c9a227]" />
              5.0 Stars · 234 Google Reviews
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-white drop-shadow-lg">
              Premium Taxi &amp;{" "}
              <span className="gold-gradient-text">
                Travel Services
              </span>
              <br />
              <span className="text-white/90">in Bengaluru</span>
            </h1>

            <p className="text-lg text-white/80 max-w-lg mx-auto lg:mx-0 leading-relaxed">
              Your most trusted travel partner in J.P. Nagar — affordable rates,
              friendly drivers, and a fleet for every journey. Airport runs to
              mountain escapes, we've got you covered.
            </p>

            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              {["Certified Drivers", "24/7 Available", "Affordable Rates"].map((label) => (
                <div key={label} className="flex items-center gap-2 text-white/85 text-sm">
                  <div className="w-8 h-8 rounded-full bg-white/10 border border-[#c9a227]/40 flex items-center justify-center backdrop-blur-sm">
                    <span className="text-[#e8d5a3] text-xs">✓</span>
                  </div>
                  <span>{label}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
              <a
                href="https://wa.me/919902727466"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 gold-gradient-bg text-[#3f2e00] px-8 py-4 rounded-xl font-bold text-sm uppercase tracking-widest hover:brightness-110 transition-all luxury-shadow-lg"
                data-testid="hero-whatsapp-cta"
              >
                Book on WhatsApp
              </a>
              <a
                href="tel:+919902727466"
                className="inline-flex items-center justify-center gap-2 border border-[#e8d5a3]/50 text-[#f5e6b8] px-8 py-4 rounded-xl font-semibold text-sm hover:bg-white/10 backdrop-blur-sm transition-all"
                data-testid="hero-call-cta"
              >
                <Phone size={16} />
                Call Now
              </a>
            </div>
          </div>

          <div
            className="bg-white/95 backdrop-blur-xl border border-[#e8e2d4] rounded-2xl p-6 md:p-8 luxury-shadow-lg"
            data-testid="booking-form-card"
          >
            <div className="mb-6">
              <h2 className="font-serif text-2xl font-semibold gold-gradient-text mb-1">
                Get Instant Quote
              </h2>
              <p className="text-[#5c5c5c] text-sm">Fill in details — we reply within minutes on WhatsApp</p>
            </div>

            <form onSubmit={handleBook} className="space-y-4">
              <div>
                <label htmlFor="pickup" className="block text-xs font-bold text-[#5c5c5c] uppercase tracking-wider mb-1.5">
                  Pickup Location
                </label>
                <div className="relative">
                  <MapPin size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#c9a227]/70" />
                  <input
                    id="pickup"
                    type="text"
                    placeholder="Enter pickup area or landmark"
                    value={formData.pickup}
                    onChange={(e) => setFormData({ ...formData, pickup: e.target.value })}
                    className="w-full bg-[#faf8f3] border border-[#e8e2d4] focus:border-[#c9a227] text-[#1c1c1c] pl-9 pr-4 py-3 rounded-lg outline-none transition-colors text-sm placeholder:text-[#5c5c5c]/50 focus:ring-2 focus:ring-[#c9a227]/20"
                    data-testid="input-pickup"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="drop" className="block text-xs font-bold text-[#5c5c5c] uppercase tracking-wider mb-1.5">
                  Drop Location
                </label>
                <div className="relative">
                  <MapPin size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#8b6914]/70" />
                  <input
                    id="drop"
                    type="text"
                    placeholder="Enter destination"
                    value={formData.drop}
                    onChange={(e) => setFormData({ ...formData, drop: e.target.value })}
                    className="w-full bg-[#faf8f3] border border-[#e8e2d4] focus:border-[#c9a227] text-[#1c1c1c] pl-9 pr-4 py-3 rounded-lg outline-none transition-colors text-sm placeholder:text-[#5c5c5c]/50 focus:ring-2 focus:ring-[#c9a227]/20"
                    data-testid="input-drop"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="tripType" className="block text-xs font-bold text-[#5c5c5c] uppercase tracking-wider mb-1.5">
                    Trip Type
                  </label>
                  <div className="relative">
                    <Car size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#c9a227]/70 pointer-events-none" />
                    <select
                      id="tripType"
                      value={formData.tripType}
                      onChange={(e) => setFormData({ ...formData, tripType: e.target.value })}
                      className="w-full bg-[#faf8f3] border border-[#e8e2d4] focus:border-[#c9a227] text-[#1c1c1c] pl-9 pr-4 py-3 rounded-lg outline-none transition-colors text-sm appearance-none cursor-pointer focus:ring-2 focus:ring-[#c9a227]/20"
                      data-testid="select-trip-type"
                    >
                      {tripTypes.map((t) => (
                        <option key={t} value={t}>{t}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="date" className="block text-xs font-bold text-[#5c5c5c] uppercase tracking-wider mb-1.5">
                    Travel Date
                  </label>
                  <div className="relative">
                    <Calendar size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#c9a227]/70 pointer-events-none" />
                    <input
                      id="date"
                      type="date"
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="w-full bg-[#faf8f3] border border-[#e8e2d4] focus:border-[#c9a227] text-[#1c1c1c] pl-9 pr-2 py-3 rounded-lg outline-none transition-colors text-sm focus:ring-2 focus:ring-[#c9a227]/20"
                      data-testid="input-date"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label htmlFor="phone" className="block text-xs font-bold text-[#5c5c5c] uppercase tracking-wider mb-1.5">
                  Your Phone Number
                </label>
                <div className="relative">
                  <Phone size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#c9a227]/70" />
                  <input
                    id="phone"
                    type="tel"
                    placeholder="+91 XXXXX XXXXX"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-[#faf8f3] border border-[#e8e2d4] focus:border-[#c9a227] text-[#1c1c1c] pl-9 pr-4 py-3 rounded-lg outline-none transition-colors text-sm placeholder:text-[#5c5c5c]/50 focus:ring-2 focus:ring-[#c9a227]/20"
                    data-testid="input-phone"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full gold-gradient-bg text-[#3f2e00] py-4 rounded-xl font-bold text-sm uppercase tracking-widest hover:brightness-110 transition-all mt-2 luxury-shadow"
                data-testid="button-check-availability"
              >
                Check Availability on WhatsApp
              </button>

              <p className="text-center text-xs text-[#5c5c5c]/70">
                Open daily · Closes 10 PM · Instant reply
              </p>
            </form>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 hidden md:flex flex-col items-center gap-2 text-white/40 text-xs pointer-events-none">
        <div className="w-5 h-8 border border-white/25 rounded-full flex justify-center pt-1.5">
          <div className="w-1 h-2 bg-[#c9a227]/80 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}
