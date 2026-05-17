const vehicles = [
  {
    name: "Mini / Hatchback",
    image: "https://images.unsplash.com/photo-1550355291-bbee04a92027?w=600&q=80",
    seats: "4 Passengers",
    bestFor: "City rides, short trips",
    features: ["AC", "Luggage space", "Comfortable seats"],
    starting: "₹999",
    badge: "Most Popular",
  },
  {
    name: "Sedan",
    image: "https://images.unsplash.com/photo-1617654112368-307921291f42?w=600&q=80",
    seats: "4 Passengers",
    bestFor: "Airport, outstation, business",
    features: ["Premium AC", "Boot space", "Clean interiors"],
    starting: "₹1,499",
    badge: null,
  },
  {
    name: "XUV / SUV",
    image: "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=600&q=80",
    seats: "6–7 Passengers",
    bestFor: "Family trips, hill stations",
    features: ["Spacious", "4WD option", "Premium comfort"],
    starting: "₹2,299",
    badge: "Best for Families",
  },
  {
    name: "Tempo Traveller",
    image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=600&q=80",
    seats: "10–14 Passengers",
    bestFor: "Group outings, pilgrimages",
    features: ["Push-back seats", "AC", "Entertainment"],
    starting: "₹3,999",
    badge: null,
  },
  {
    name: "Mini Bus",
    image: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?w=600&q=80",
    seats: "15–25 Passengers",
    bestFor: "Events, school tours, picnics",
    features: ["Comfortable seating", "AC", "Driver included"],
    starting: "₹6,999",
    badge: null,
  },
  {
    name: "Full Size Bus",
    image: "https://images.unsplash.com/photo-1567443024551-f3e3cc2be870?w=600&q=80",
    seats: "35–50 Passengers",
    bestFor: "Corporate, large group tours",
    features: ["Luxury seating", "AC", "Onboard facilities"],
    starting: "₹12,999",
    badge: null,
  },
];

export default function Fleet() {
  return (
    <section id="fleet" className="py-20 lg:py-28 bg-[#0a1628]" aria-labelledby="fleet-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-[#ffdc8e] text-xs font-bold uppercase tracking-widest block mb-3">
            The Fleet
          </span>
          <h2 id="fleet-heading" className="font-serif text-3xl md:text-4xl font-bold text-white mb-4">
            Transparent Pricing
          </h2>
          <p className="text-[#d0c5b3] max-w-xl mx-auto text-base">
            Choose the right vehicle for your journey. All vehicles are well-maintained, AC-equipped, and driven by verified professional drivers.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {vehicles.map((vehicle, index) => (
            <article
              key={index}
              className="bg-[#111c2d] border border-[#4d4638]/50 hover:border-[#ffdc8e]/20 rounded-2xl overflow-hidden transition-all duration-300 group hover:shadow-xl hover:shadow-black/30 flex flex-col"
              data-testid={`vehicle-card-${index}`}
            >
              <div className="relative overflow-hidden">
                <img
                  src={vehicle.image}
                  alt={`${vehicle.name} cab available at Poorvi Best Travels`}
                  className="w-full h-44 object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  width="600"
                  height="176"
                />
                {vehicle.badge && (
                  <div className="absolute top-3 left-3 bg-gradient-to-r from-[#ffdc8e] to-[#e3c06f] text-[#3f2e00] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    {vehicle.badge}
                  </div>
                )}
                <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#111c2d] to-transparent" />
              </div>

              <div className="p-5 flex flex-col flex-grow">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="font-semibold text-white text-lg leading-tight">{vehicle.name}</h3>
                    <p className="text-[#ffdc8e] text-xs font-medium mt-0.5">{vehicle.seats}</p>
                  </div>
                  <div className="text-right">
                    <span className="text-[#d0c5b3] text-xs">Starting at</span>
                    <p className="text-[#ffdc8e] text-xl font-bold leading-tight">{vehicle.starting}</p>
                  </div>
                </div>

                <p className="text-[#d0c5b3] text-xs mb-3">
                  <span className="font-semibold text-[#d8e3fb]">Best for:</span> {vehicle.bestFor}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-5 flex-grow">
                  {vehicle.features.map((f, i) => (
                    <span
                      key={i}
                      className="bg-[#081425] border border-[#4d4638]/50 text-[#d0c5b3] text-xs px-2.5 py-1 rounded-full"
                    >
                      {f}
                    </span>
                  ))}
                </div>

                <a
                  href={`https://wa.me/919902727466?text=Hi! I want to book a ${vehicle.name}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-center border border-[#ffdc8e]/30 text-[#ffdc8e] hover:bg-[#ffdc8e] hover:text-[#3f2e00] py-2.5 rounded-lg text-sm font-semibold transition-all duration-200"
                  data-testid={`vehicle-book-${index}`}
                >
                  Book Now
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
