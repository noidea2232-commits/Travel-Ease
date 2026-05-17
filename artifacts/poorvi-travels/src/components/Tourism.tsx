const destinations = [
  {
    name: "Mysore Palace",
    distance: "150 km from Bengaluru",
    image: "https://images.unsplash.com/photo-1606298855673-a1a36f8b33e2?w=600&q=80",
    tag: "Heritage",
    description: "Explore the magnificent palace, markets, and the royal city of Mysore.",
    price: "From ₹2,500",
  },
  {
    name: "Coorg",
    distance: "265 km from Bengaluru",
    image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&q=80",
    tag: "Nature",
    description: "The Scotland of India — lush coffee estates, waterfalls and misty hills.",
    price: "From ₹3,500",
  },
  {
    name: "Hampi",
    distance: "350 km from Bengaluru",
    image: "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?w=600&q=80",
    tag: "UNESCO",
    description: "Discover the ancient ruins and boulder-strewn landscape of Hampi.",
    price: "From ₹4,500",
  },
  {
    name: "Ooty",
    distance: "275 km from Bengaluru",
    image: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?w=600&q=80",
    tag: "Hill Station",
    description: "The Queen of Hill Stations with breathtaking tea gardens and toy trains.",
    price: "From ₹3,800",
  },
  {
    name: "Chikmagalur",
    distance: "245 km from Bengaluru",
    image: "https://images.unsplash.com/photo-1611273427955-bbb8a13e1a45?w=600&q=80",
    tag: "Coffee Country",
    description: "Rolling coffee plantations, trekking trails, and misty mountain peaks.",
    price: "From ₹3,200",
  },
  {
    name: "Goa Western Coast",
    distance: "565 km from Bengaluru",
    image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=600&q=80",
    tag: "Beach",
    description: "Sun-kissed beaches, vibrant nightlife, and Portuguese heritage architecture.",
    price: "From ₹7,500",
  },
];

export default function Tourism() {
  return (
    <section id="tourism" className="py-20 lg:py-28 bg-[#081425]" aria-labelledby="tourism-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-[#ffdc8e] text-xs font-bold uppercase tracking-widest block mb-3">
            Explore Karnataka &amp; Beyond
          </span>
          <h2 id="tourism-heading" className="font-serif text-3xl md:text-4xl font-bold text-white mb-4">
            Curated Tourism Packages
          </h2>
          <p className="text-[#d0c5b3] max-w-xl mx-auto text-base">
            Popular outstation destinations from Bengaluru with experienced drivers who know every route. Custom itineraries available.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {destinations.map((dest, index) => (
            <article
              key={index}
              className="bg-[#111c2d] border border-[#4d4638]/50 hover:border-[#ffdc8e]/20 rounded-2xl overflow-hidden group transition-all duration-300 hover:shadow-xl hover:shadow-black/30 flex flex-col"
              data-testid={`destination-card-${index}`}
            >
              <div className="relative overflow-hidden">
                <img
                  src={dest.image}
                  alt={`${dest.name} tour package from Bengaluru — Poorvi Best Travels`}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  width="600"
                  height="192"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111c2d] via-transparent to-transparent" />
                <div className="absolute top-3 left-3">
                  <span className="bg-[#ffdc8e]/10 border border-[#ffdc8e]/30 backdrop-blur-sm text-[#ffdc8e] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    {dest.tag}
                  </span>
                </div>
                <div className="absolute bottom-3 right-3">
                  <span className="bg-[#081425]/80 backdrop-blur-sm text-[#ffdc8e] text-xs font-bold px-3 py-1.5 rounded-lg">
                    {dest.price}
                  </span>
                </div>
              </div>

              <div className="p-5 flex flex-col flex-grow">
                <h3 className="font-serif font-semibold text-white text-xl mb-1">{dest.name}</h3>
                <p className="text-[#ffdc8e] text-xs font-medium mb-2">{dest.distance}</p>
                <p className="text-[#d0c5b3] text-sm leading-relaxed mb-5 flex-grow">{dest.description}</p>

                <a
                  href={`https://wa.me/919902727466?text=Hi! I am interested in a trip to ${dest.name}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-center border border-[#ffdc8e]/30 text-[#ffdc8e] hover:bg-[#ffdc8e] hover:text-[#3f2e00] py-2.5 rounded-lg text-sm font-semibold transition-all duration-200"
                  data-testid={`destination-enquire-${index}`}
                >
                  Enquire Now
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 bg-[#111c2d] border border-[#ffdc8e]/10 rounded-2xl p-6 md:p-8 text-center">
          <h3 className="font-serif text-xl font-semibold text-white mb-2">Planning a Custom Trip?</h3>
          <p className="text-[#d0c5b3] text-sm mb-6 max-w-md mx-auto">
            Tell us your destination, group size, and dates — we'll build a custom itinerary and quote just for you.
          </p>
          <a
            href="https://wa.me/919902727466?text=Hi! I want to plan a custom outstation trip."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-[#ffdc8e] to-[#e3c06f] text-[#3f2e00] px-8 py-4 rounded-xl font-bold text-sm uppercase tracking-widest hover:brightness-110 transition-all"
            data-testid="custom-trip-cta"
          >
            Plan Custom Trip
          </a>
        </div>
      </div>
    </section>
  );
}
