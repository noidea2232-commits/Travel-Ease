import { Star, Shield, Clock, IndianRupee, Users, HeartHandshake } from "lucide-react";

const stats = [
  { value: "5.0", label: "Google Rating", sub: "234 Reviews" },
  { value: "100+", label: "Happy Clients", sub: "Every Month" },
  { value: "24/7", label: "Available", sub: "365 Days" },
  { value: "10+", label: "Vehicle Types", sub: "All Sizes" },
];

const reasons = [
  {
    icon: <Star size={24} />,
    title: "5-Star Rated Service",
    description: "Consistently rated 5.0 on Google with 234 reviews. Our customers trust us for every trip.",
  },
  {
    icon: <IndianRupee size={24} />,
    title: "Affordable & Transparent",
    description: "No hidden fees, no surge pricing. You get the best price — always. Pay what you're quoted.",
  },
  {
    icon: <Clock size={24} />,
    title: "Always On Time",
    description: "We understand the value of your time. Our drivers arrive early, every single time.",
  },
  {
    icon: <Shield size={24} />,
    title: "Verified & Safe Drivers",
    description: "All our drivers are background-verified, licensed, and trained for professional service.",
  },
  {
    icon: <Users size={24} />,
    title: "Friendly Staff",
    description: "\"Friendly staff\" is our most common compliment. We treat every passenger like family.",
  },
  {
    icon: <HeartHandshake size={24} />,
    title: "Quick Response",
    description: "Book via WhatsApp and get an instant confirmation. We're always a message away.",
  },
];

export default function WhyUs() {
  return (
    <section className="py-20 lg:py-28 bg-white" aria-labelledby="why-us-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-5 mb-16 sm:mb-20">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="bg-[#faf8f3] border border-[#e8e2d4] rounded-2xl p-5 sm:p-6 text-center luxury-shadow hover:luxury-shadow-lg transition-shadow"
              data-testid={`stat-card-${i}`}
            >
              <div className="text-3xl md:text-4xl font-bold gold-gradient-text font-serif mb-1">{stat.value}</div>
              <div className="text-[#1c1c1c] text-sm font-semibold">{stat.label}</div>
              <div className="text-[#5c5c5c] text-xs mt-0.5">{stat.sub}</div>
            </div>
          ))}
        </div>

        <div className="text-center mb-14">
          <span className="text-[#8b6914] text-xs font-bold uppercase tracking-widest block mb-3">
            Why Choose Us
          </span>
          <h2 id="why-us-heading" className="font-serif text-3xl md:text-4xl font-bold text-[#1c1c1c] mb-4">
            Bengaluru's Most Trusted Travel Partner
          </h2>
          <p className="text-[#5c5c5c] max-w-xl mx-auto text-base">
            Hundreds of happy customers across Bengaluru choose Poorvi Best Travels for every kind of journey — here's why.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="bg-white border border-[#e8e2d4] hover:border-[#c9a227]/40 rounded-2xl p-6 transition-all duration-300 luxury-shadow hover:luxury-shadow-lg group"
              data-testid={`why-us-card-${index}`}
            >
              <div className="w-12 h-12 rounded-xl bg-[#faf8f3] border border-[#c9a227]/25 flex items-center justify-center text-[#8b6914] mb-5 group-hover:bg-[#f5e6b8]/30 transition-colors">
                {reason.icon}
              </div>
              <h3 className="text-[#1c1c1c] font-semibold text-lg mb-2">{reason.title}</h3>
              <p className="text-[#5c5c5c] text-sm leading-relaxed">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
