import { Plane, Route, MapPin, RotateCcw, ArrowRight, Car, Bus, Truck, Users, Building2, Clock } from "lucide-react";

const services = [
  {
    icon: <Plane size={28} />,
    title: "Airport Transfer",
    description: "Stress-free pickups and drops to Kempegowda International Airport, 24/7.",
  },
  {
    icon: <Route size={28} />,
    title: "Outstation Trips",
    description: "Comfortable multi-day trips across Karnataka and neighboring states.",
  },
  {
    icon: <MapPin size={28} />,
    title: "City Service",
    description: "Reliable hourly city rides for shopping, meetings, and daily errands.",
  },
  {
    icon: <RotateCcw size={28} />,
    title: "Round Trips",
    description: "Book a full round trip with a dedicated driver for your comfort.",
  },
  {
    icon: <ArrowRight size={28} />,
    title: "One-Way Booking",
    description: "Affordable one-way drops to any destination — no return charges.",
  },
  {
    icon: <Car size={28} />,
    title: "Mini / Sedan Cab",
    description: "Compact and comfortable cabs for solo and couple travel.",
  },
  {
    icon: <Car size={28} />,
    title: "XUV / SUV",
    description: "Premium SUVs for family trips, corporate travel, and long drives.",
  },
  {
    icon: <Truck size={28} />,
    title: "Tempo Traveller",
    description: "Spacious 10–14 seater tempo travellers for group outings.",
  },
  {
    icon: <Bus size={28} />,
    title: "Mini Bus",
    description: "Mini buses for medium groups — school trips, pilgrimages, events.",
  },
  {
    icon: <Bus size={28} />,
    title: "Big Bus",
    description: "Full-size luxury and standard buses for large groups and tours.",
  },
  {
    icon: <Users size={28} />,
    title: "Corporate Travel",
    description: "Employee pickup and drop, conference transfers, and business tours.",
  },
  {
    icon: <Clock size={28} />,
    title: "24/7 Availability",
    description: "Available round the clock — early morning flights to late night events.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 lg:py-28 bg-[#081425]" aria-labelledby="services-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-[#ffdc8e] text-xs font-bold uppercase tracking-widest block mb-3">
            Our Offerings
          </span>
          <h2 id="services-heading" className="font-serif text-3xl md:text-4xl font-bold text-white mb-4">
            Travel Services Tailored for You
          </h2>
          <p className="text-[#d0c5b3] max-w-xl mx-auto text-base">
            From a quick airport run to a week-long outstation adventure — we have the right vehicle and driver for every journey.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-[#111c2d] border border-[#4d4638]/50 hover:border-[#ffdc8e]/30 rounded-xl p-5 md:p-6 transition-all duration-300 hover:bg-[#152031] hover:shadow-lg hover:shadow-[#e3c06f]/5"
              data-testid={`service-card-${index}`}
            >
              <div className="text-[#ffdc8e] mb-4 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="font-semibold text-white text-sm md:text-base mb-2 leading-snug">
                {service.title}
              </h3>
              <p className="text-[#d0c5b3] text-xs md:text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://wa.me/919902727466?text=Hi! I want to book a service."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-[#ffdc8e] to-[#e3c06f] text-[#3f2e00] px-8 py-4 rounded-xl font-bold text-sm uppercase tracking-widest hover:brightness-110 transition-all"
            data-testid="services-book-now"
          >
            Book Your Ride
          </a>
        </div>
      </div>
    </section>
  );
}
