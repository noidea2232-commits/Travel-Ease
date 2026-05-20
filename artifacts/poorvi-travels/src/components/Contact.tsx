import { Phone, MapPin, Clock, MessageCircle, ExternalLink } from "lucide-react";
import { GOOGLE_MAPS_PLACE_URL } from "@/config/site";

export default function Contact() {
  return (
    <section id="contact" className="py-20 lg:py-28 bg-white" aria-labelledby="contact-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-[#8b6914] text-xs font-bold uppercase tracking-widest block mb-3">
            Get in Touch
          </span>
          <h2 id="contact-heading" className="font-serif text-3xl md:text-4xl font-bold text-[#1c1c1c] mb-4">
            Contact Poorvi Best Travels
          </h2>
          <p className="text-[#5c5c5c] max-w-xl mx-auto text-base">
            We're here 7 days a week. Reach us via WhatsApp for the fastest response — or give us a call.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-5">
            <a
              href="tel:+919902727466"
              className="flex items-start gap-5 bg-[#faf8f3] border border-[#e8e2d4] hover:border-[#c9a227]/40 rounded-2xl p-6 transition-all group luxury-shadow hover:luxury-shadow-lg"
              data-testid="contact-phone"
            >
              <div className="w-12 h-12 rounded-xl bg-white border border-[#c9a227]/25 flex items-center justify-center text-[#8b6914] flex-shrink-0 group-hover:bg-[#f5e6b8]/20 transition-colors">
                <Phone size={22} />
              </div>
              <div>
                <p className="text-xs text-[#5c5c5c] uppercase tracking-wider font-semibold mb-1">Call Us</p>
                <p className="text-[#1c1c1c] text-lg font-bold">099027 27466</p>
                <p className="text-[#5c5c5c] text-sm">Tap to call — we answer fast</p>
              </div>
            </a>

            <a
              href="https://wa.me/919902727466"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-5 bg-[#faf8f3] border border-[#e8e2d4] hover:border-[#25D366]/40 rounded-2xl p-6 transition-all group luxury-shadow hover:luxury-shadow-lg"
              data-testid="contact-whatsapp"
            >
              <div className="w-12 h-12 rounded-xl bg-[#25D366]/10 border border-[#25D366]/25 flex items-center justify-center text-[#25D366] flex-shrink-0 group-hover:bg-[#25D366]/15 transition-colors">
                <MessageCircle size={22} />
              </div>
              <div>
                <p className="text-xs text-[#5c5c5c] uppercase tracking-wider font-semibold mb-1">WhatsApp</p>
                <p className="text-[#1c1c1c] text-lg font-bold">wa.me/919902727466</p>
                <p className="text-[#5c5c5c] text-sm">Book instantly — instant reply</p>
              </div>
            </a>

            <div
              className="flex items-start gap-5 bg-[#faf8f3] border border-[#e8e2d4] rounded-2xl p-6 luxury-shadow"
              data-testid="contact-hours"
            >
              <div className="w-12 h-12 rounded-xl bg-white border border-[#c9a227]/25 flex items-center justify-center text-[#8b6914] flex-shrink-0">
                <Clock size={22} />
              </div>
              <div>
                <p className="text-xs text-[#5c5c5c] uppercase tracking-wider font-semibold mb-1">Operating Hours</p>
                <p className="text-[#1c1c1c] text-lg font-bold">Open Daily</p>
                <p className="text-[#5c5c5c] text-sm">6:00 AM – 10:00 PM · Closes at 10 PM</p>
              </div>
            </div>

            <a
              href={GOOGLE_MAPS_PLACE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-5 bg-[#faf8f3] border border-[#e8e2d4] hover:border-[#c9a227]/40 rounded-2xl p-6 transition-all group luxury-shadow hover:luxury-shadow-lg"
              data-testid="contact-address"
            >
              <div className="w-12 h-12 rounded-xl bg-white border border-[#c9a227]/25 flex items-center justify-center text-[#8b6914] flex-shrink-0 group-hover:bg-[#f5e6b8]/20 transition-colors">
                <MapPin size={22} />
              </div>
              <div>
                <p className="text-xs text-[#5c5c5c] uppercase tracking-wider font-semibold mb-1">Our Location</p>
                <p className="text-[#1c1c1c] text-base font-semibold leading-snug">J. P. Nagar, Bengaluru</p>
                <p className="text-[#5c5c5c] text-sm mt-1 leading-relaxed">
                  Water Tank, 14, Jambusawari Dinne Main Rd, opposite BWSSB, Pavamana Nagar, 8th Phase, J. P. Nagar, Kothnur, Karnataka 560076
                </p>
                <span className="inline-flex items-center gap-1 mt-2 text-[#8b6914] text-xs font-semibold group-hover:underline">
                  Open in Google Maps
                  <ExternalLink size={12} />
                </span>
              </div>
            </a>
          </div>

          {/* Map cutout — click opens Google Maps */}
          <a
            href={GOOGLE_MAPS_PLACE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-2xl overflow-hidden border border-[#e8e2d4] bg-[#faf8f3] min-h-[400px] flex flex-col luxury-shadow-lg group cursor-pointer hover:border-[#c9a227]/50 transition-all"
            data-testid="contact-map-cutout"
            aria-label="Open Poorvi Best Travels on Google Maps"
          >
            <div className="p-4 border-b border-[#e8e2d4] bg-white flex items-center justify-between">
              <div>
                <p className="text-[#1c1c1c] font-semibold text-sm">Find Us on the Map</p>
                <p className="text-[#5c5c5c] text-xs">J.P. Nagar, Bengaluru · Tap to open directions</p>
              </div>
              <ExternalLink size={18} className="text-[#8b6914] opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
            </div>
            <div className="relative flex-grow min-h-[350px] bg-[#1c1c1c]/5">
              <iframe
                title="Poorvi Best Travels location on Google Maps"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.2!2d77.5816039!3d12.8674872!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae6b343dfbe247%3A0xb8bd37233930a6b7!2sPoorvi%20Best%20Travels!5e0!3m2!1sen!2sin!4v1710000000000"
                className="absolute inset-0 w-full h-full pointer-events-none"
                style={{ minHeight: "350px", border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                tabIndex={-1}
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/0 group-hover:bg-black/10 transition-colors pointer-events-none">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center gap-2 px-4 text-center">
                  <MapPin size={32} className="text-[#c9a227]" />
                  <span className="text-[#1c1c1c] text-xs font-bold uppercase tracking-widest bg-white/90 px-3 py-1.5 rounded-full">
                    Open in Google Maps
                  </span>
                </div>
              </div>
            </div>
          </a>
        </div>

        <div className="mt-12 bg-[#faf8f3] border border-[#e8e2d4] rounded-2xl p-8 md:p-10 text-center luxury-shadow-lg">
          <h3 className="font-serif text-2xl md:text-3xl font-bold text-[#1c1c1c] mb-3">
            Ready to Travel? Let's Go.
          </h3>
          <p className="text-[#5c5c5c] text-base mb-8 max-w-md mx-auto">
            WhatsApp us your trip details and get an instant confirmation. It's that easy.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/919902727466?text=Hi! I want to book a cab."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 gold-gradient-bg text-[#3f2e00] px-8 py-4 rounded-xl font-bold text-sm uppercase tracking-widest hover:brightness-110 transition-all luxury-shadow"
              data-testid="contact-whatsapp-cta"
            >
              <MessageCircle size={18} />
              Book via WhatsApp
            </a>
            <a
              href="tel:+919902727466"
              className="inline-flex items-center justify-center gap-2 border border-[#c9a227]/40 text-[#8b6914] px-8 py-4 rounded-xl font-semibold text-sm hover:bg-white transition-all"
              data-testid="contact-call-cta"
            >
              <Phone size={18} />
              099027 27466
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
