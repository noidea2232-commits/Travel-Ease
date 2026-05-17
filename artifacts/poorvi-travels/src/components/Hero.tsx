import { useState } from "react";
import { MapPin, Calendar, Car, Phone } from "lucide-react";

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
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=80"
          alt="Premium taxi and travel services in Bengaluru"
          className="w-full h-full object-cover"
          loading="eager"
          width="1920"
          height="1080"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#081425]/60 via-[#081425]/75 to-[#081425]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#081425]/80 to-transparent" />
      </div>

      {/* Animated gold line accent */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#e3c06f]/40 to-transparent z-10" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left — Headline */}
          <div className="space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-[#ffdc8e]/10 border border-[#ffdc8e]/20 rounded-full px-4 py-2 text-[#ffdc8e] text-xs font-bold uppercase tracking-widest">
              <span className="w-2 h-2 rounded-full bg-[#ffdc8e] animate-pulse" />
              5.0 Stars · 234 Google Reviews
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-white">
              Premium Taxi &amp;{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ffdc8e] to-[#e3c06f]">
                Travel Services
              </span>
              <br />
              <span className="text-[#d8e3fb]">in Bengaluru</span>
            </h1>

            <p className="text-lg text-[#d0c5b3] max-w-lg mx-auto lg:mx-0 leading-relaxed">
              Your most trusted travel partner in J.P. Nagar — affordable rates,
              friendly drivers, and a fleet for every journey. Airport runs to
              mountain escapes, we've got you covered.
            </p>

            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <div className="flex items-center gap-2 text-[#d8e3fb] text-sm">
                <div className="w-8 h-8 rounded-full bg-[#ffdc8e]/10 border border-[#ffdc8e]/20 flex items-center justify-center">
                  <span className="text-[#ffdc8e] text-xs">✓</span>
                </div>
                <span>Certified Drivers</span>
              </div>
              <div className="flex items-center gap-2 text-[#d8e3fb] text-sm">
                <div className="w-8 h-8 rounded-full bg-[#ffdc8e]/10 border border-[#ffdc8e]/20 flex items-center justify-center">
                  <span className="text-[#ffdc8e] text-xs">✓</span>
                </div>
                <span>24/7 Available</span>
              </div>
              <div className="flex items-center gap-2 text-[#d8e3fb] text-sm">
                <div className="w-8 h-8 rounded-full bg-[#ffdc8e]/10 border border-[#ffdc8e]/20 flex items-center justify-center">
                  <span className="text-[#ffdc8e] text-xs">✓</span>
                </div>
                <span>Affordable Rates</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
              <a
                href="https://wa.me/919902727466"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#ffdc8e] to-[#e3c06f] text-[#3f2e00] px-8 py-4 rounded-xl font-bold text-sm uppercase tracking-widest hover:brightness-110 transition-all shadow-lg shadow-[#e3c06f]/20"
                data-testid="hero-whatsapp-cta"
              >
                Book on WhatsApp
              </a>
              <a
                href="tel:+919902727466"
                className="inline-flex items-center justify-center gap-2 border border-[#ffdc8e]/30 text-[#ffdc8e] px-8 py-4 rounded-xl font-semibold text-sm hover:bg-[#ffdc8e]/5 transition-all"
                data-testid="hero-call-cta"
              >
                <Phone size={16} />
                Call Now
              </a>
            </div>
          </div>

          {/* Right — Booking Form */}
          <div
            className="bg-[#111c2d]/80 backdrop-blur-xl border border-[#ffdc8e]/10 rounded-2xl p-6 md:p-8 shadow-2xl shadow-black/40"
            data-testid="booking-form-card"
          >
            <div className="mb-6">
              <h2 className="font-serif text-2xl font-semibold text-[#ffdc8e] mb-1">
                Get Instant Quote
              </h2>
              <p className="text-[#d0c5b3] text-sm">Fill in details — we reply within minutes on WhatsApp</p>
            </div>

            <form onSubmit={handleBook} className="space-y-4">
              <div>
                <label htmlFor="pickup" className="block text-xs font-bold text-[#d0c5b3] uppercase tracking-wider mb-1.5">
                  Pickup Location
                </label>
                <div className="relative">
                  <MapPin size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#ffdc8e]/60" />
                  <input
                    id="pickup"
                    type="text"
                    placeholder="Enter pickup area or landmark"
                    value={formData.pickup}
                    onChange={(e) => setFormData({ ...formData, pickup: e.target.value })}
                    className="w-full bg-[#081425] border border-[#4d4638] focus:border-[#ffdc8e] text-[#d8e3fb] pl-9 pr-4 py-3 rounded-lg outline-none transition-colors text-sm placeholder:text-[#d0c5b3]/40"
                    data-testid="input-pickup"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="drop" className="block text-xs font-bold text-[#d0c5b3] uppercase tracking-wider mb-1.5">
                  Drop Location
                </label>
                <div className="relative">
                  <MapPin size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#e3c06f]/60" />
                  <input
                    id="drop"
                    type="text"
                    placeholder="Enter destination"
                    value={formData.drop}
                    onChange={(e) => setFormData({ ...formData, drop: e.target.value })}
                    className="w-full bg-[#081425] border border-[#4d4638] focus:border-[#ffdc8e] text-[#d8e3fb] pl-9 pr-4 py-3 rounded-lg outline-none transition-colors text-sm placeholder:text-[#d0c5b3]/40"
                    data-testid="input-drop"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="tripType" className="block text-xs font-bold text-[#d0c5b3] uppercase tracking-wider mb-1.5">
                    Trip Type
                  </label>
                  <div className="relative">
                    <Car size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#ffdc8e]/60 pointer-events-none" />
                    <select
                      id="tripType"
                      value={formData.tripType}
                      onChange={(e) => setFormData({ ...formData, tripType: e.target.value })}
                      className="w-full bg-[#081425] border border-[#4d4638] focus:border-[#ffdc8e] text-[#d8e3fb] pl-9 pr-4 py-3 rounded-lg outline-none transition-colors text-sm appearance-none cursor-pointer"
                      data-testid="select-trip-type"
                    >
                      {tripTypes.map((t) => (
                        <option key={t} value={t}>{t}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="date" className="block text-xs font-bold text-[#d0c5b3] uppercase tracking-wider mb-1.5">
                    Travel Date
                  </label>
                  <div className="relative">
                    <Calendar size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#ffdc8e]/60 pointer-events-none" />
                    <input
                      id="date"
                      type="date"
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="w-full bg-[#081425] border border-[#4d4638] focus:border-[#ffdc8e] text-[#d8e3fb] pl-9 pr-2 py-3 rounded-lg outline-none transition-colors text-sm"
                      data-testid="input-date"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label htmlFor="phone" className="block text-xs font-bold text-[#d0c5b3] uppercase tracking-wider mb-1.5">
                  Your Phone Number
                </label>
                <div className="relative">
                  <Phone size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#ffdc8e]/60" />
                  <input
                    id="phone"
                    type="tel"
                    placeholder="+91 XXXXX XXXXX"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-[#081425] border border-[#4d4638] focus:border-[#ffdc8e] text-[#d8e3fb] pl-9 pr-4 py-3 rounded-lg outline-none transition-colors text-sm placeholder:text-[#d0c5b3]/40"
                    data-testid="input-phone"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#ffdc8e] to-[#e3c06f] text-[#3f2e00] py-4 rounded-xl font-bold text-sm uppercase tracking-widest hover:brightness-110 transition-all mt-2 shadow-lg shadow-[#e3c06f]/20"
                data-testid="button-check-availability"
              >
                Check Availability on WhatsApp
              </button>

              <p className="text-center text-xs text-[#d0c5b3]/60">
                Open daily · Closes 10 PM · Instant reply
              </p>
            </form>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 hidden md:flex flex-col items-center gap-2 text-[#d0c5b3]/40 text-xs">
        <div className="w-5 h-8 border border-[#d0c5b3]/20 rounded-full flex justify-center pt-1.5">
          <div className="w-1 h-2 bg-[#ffdc8e]/60 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}
