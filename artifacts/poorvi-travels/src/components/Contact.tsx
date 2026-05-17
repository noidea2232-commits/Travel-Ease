import { Phone, MapPin, Clock, MessageCircle, Mail } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-20 lg:py-28 bg-[#0a1628]" aria-labelledby="contact-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-[#ffdc8e] text-xs font-bold uppercase tracking-widest block mb-3">
            Get in Touch
          </span>
          <h2 id="contact-heading" className="font-serif text-3xl md:text-4xl font-bold text-white mb-4">
            Contact Poorvi Best Travels
          </h2>
          <p className="text-[#d0c5b3] max-w-xl mx-auto text-base">
            We're here 7 days a week. Reach us via WhatsApp for the fastest response — or give us a call.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Info Panel */}
          <div className="space-y-5">
            <a
              href="tel:+919902727466"
              className="flex items-start gap-5 bg-[#111c2d] border border-[#4d4638]/50 hover:border-[#ffdc8e]/20 rounded-2xl p-6 transition-all group"
              data-testid="contact-phone"
            >
              <div className="w-12 h-12 rounded-xl bg-[#ffdc8e]/10 border border-[#ffdc8e]/20 flex items-center justify-center text-[#ffdc8e] flex-shrink-0 group-hover:bg-[#ffdc8e]/15 transition-colors">
                <Phone size={22} />
              </div>
              <div>
                <p className="text-xs text-[#d0c5b3] uppercase tracking-wider font-semibold mb-1">Call Us</p>
                <p className="text-white text-lg font-bold">099027 27466</p>
                <p className="text-[#d0c5b3] text-sm">Tap to call — we answer fast</p>
              </div>
            </a>

            <a
              href="https://wa.me/919902727466"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-5 bg-[#111c2d] border border-[#4d4638]/50 hover:border-[#ffdc8e]/20 rounded-2xl p-6 transition-all group"
              data-testid="contact-whatsapp"
            >
              <div className="w-12 h-12 rounded-xl bg-[#25D366]/10 border border-[#25D366]/20 flex items-center justify-center text-[#25D366] flex-shrink-0 group-hover:bg-[#25D366]/15 transition-colors">
                <MessageCircle size={22} />
              </div>
              <div>
                <p className="text-xs text-[#d0c5b3] uppercase tracking-wider font-semibold mb-1">WhatsApp</p>
                <p className="text-white text-lg font-bold">wa.me/919902727466</p>
                <p className="text-[#d0c5b3] text-sm">Book instantly — instant reply</p>
              </div>
            </a>

            <div
              className="flex items-start gap-5 bg-[#111c2d] border border-[#4d4638]/50 rounded-2xl p-6"
              data-testid="contact-hours"
            >
              <div className="w-12 h-12 rounded-xl bg-[#ffdc8e]/10 border border-[#ffdc8e]/20 flex items-center justify-center text-[#ffdc8e] flex-shrink-0">
                <Clock size={22} />
              </div>
              <div>
                <p className="text-xs text-[#d0c5b3] uppercase tracking-wider font-semibold mb-1">Operating Hours</p>
                <p className="text-white text-lg font-bold">Open Daily</p>
                <p className="text-[#d0c5b3] text-sm">6:00 AM – 10:00 PM · Closes at 10 PM</p>
              </div>
            </div>

            <div
              className="flex items-start gap-5 bg-[#111c2d] border border-[#4d4638]/50 rounded-2xl p-6"
              data-testid="contact-address"
            >
              <div className="w-12 h-12 rounded-xl bg-[#ffdc8e]/10 border border-[#ffdc8e]/20 flex items-center justify-center text-[#ffdc8e] flex-shrink-0">
                <MapPin size={22} />
              </div>
              <div>
                <p className="text-xs text-[#d0c5b3] uppercase tracking-wider font-semibold mb-1">Our Location</p>
                <p className="text-white text-base font-semibold leading-snug">J. P. Nagar, Bengaluru</p>
                <p className="text-[#d0c5b3] text-sm mt-1 leading-relaxed">
                  Water Tank, 14, Jambusawari Dinne Main Rd, opposite BWSSB, Pavamana Nagar, 8th Phase, J. P. Nagar, Kothnur, Karnataka 560076
                </p>
                <a
                  href="https://maps.google.com/?q=Poorvi+Best+Travels+JP+Nagar+Bengaluru"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-2 text-[#ffdc8e] text-xs font-semibold hover:underline"
                >
                  Open in Google Maps →
                </a>
              </div>
            </div>
          </div>

          {/* Map embed */}
          <div className="rounded-2xl overflow-hidden border border-[#4d4638]/50 bg-[#111c2d] min-h-[400px] flex flex-col">
            <div className="p-4 border-b border-[#4d4638]/30">
              <p className="text-white font-semibold text-sm">Find Us on the Map</p>
              <p className="text-[#d0c5b3] text-xs">J.P. Nagar, Bengaluru, Karnataka</p>
            </div>
            <iframe
              title="Poorvi Best Travels location on Google Maps"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.5!2d77.5822!3d12.8982!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDUzJzUzLjUiTiA3N8KwMzQnNTYuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
              className="flex-grow w-full"
              style={{ minHeight: "350px", filter: "invert(90%) hue-rotate(180deg)" }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              aria-label="Map showing Poorvi Best Travels location in J.P. Nagar, Bengaluru"
            />
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 bg-gradient-to-r from-[#111c2d] to-[#152031] border border-[#ffdc8e]/10 rounded-2xl p-8 md:p-10 text-center">
          <h3 className="font-serif text-2xl md:text-3xl font-bold text-white mb-3">
            Ready to Travel? Let's Go.
          </h3>
          <p className="text-[#d0c5b3] text-base mb-8 max-w-md mx-auto">
            WhatsApp us your trip details and get an instant confirmation. It's that easy.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/919902727466?text=Hi! I want to book a cab."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#ffdc8e] to-[#e3c06f] text-[#3f2e00] px-8 py-4 rounded-xl font-bold text-sm uppercase tracking-widest hover:brightness-110 transition-all"
              data-testid="contact-whatsapp-cta"
            >
              <MessageCircle size={18} />
              Book via WhatsApp
            </a>
            <a
              href="tel:+919902727466"
              className="inline-flex items-center justify-center gap-2 border border-[#ffdc8e]/30 text-[#ffdc8e] px-8 py-4 rounded-xl font-semibold text-sm hover:bg-[#ffdc8e]/5 transition-all"
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
