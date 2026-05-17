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
    <section className="py-20 lg:py-28 bg-[#081425]" aria-labelledby="why-us-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Stats bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="bg-[#111c2d] border border-[#ffdc8e]/10 rounded-2xl p-6 text-center"
              data-testid={`stat-card-${i}`}
            >
              <div className="text-3xl md:text-4xl font-bold text-[#ffdc8e] font-serif mb-1">{stat.value}</div>
              <div className="text-white text-sm font-semibold">{stat.label}</div>
              <div className="text-[#d0c5b3] text-xs mt-0.5">{stat.sub}</div>
            </div>
          ))}
        </div>

        <div className="text-center mb-14">
          <span className="text-[#ffdc8e] text-xs font-bold uppercase tracking-widest block mb-3">
            Why Choose Us
          </span>
          <h2 id="why-us-heading" className="font-serif text-3xl md:text-4xl font-bold text-white mb-4">
            Bengaluru's Most Trusted Travel Partner
          </h2>
          <p className="text-[#d0c5b3] max-w-xl mx-auto text-base">
            Hundreds of happy customers across Bengaluru choose Poorvi Best Travels for every kind of journey — here's why.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="bg-[#111c2d] border border-[#4d4638]/50 hover:border-[#ffdc8e]/20 rounded-2xl p-6 transition-all duration-300 hover:shadow-lg hover:shadow-black/20 group"
              data-testid={`why-us-card-${index}`}
            >
              <div className="w-12 h-12 rounded-xl bg-[#ffdc8e]/10 border border-[#ffdc8e]/20 flex items-center justify-center text-[#ffdc8e] mb-5 group-hover:bg-[#ffdc8e]/15 transition-colors">
                {reason.icon}
              </div>
              <h3 className="text-white font-semibold text-lg mb-2">{reason.title}</h3>
              <p className="text-[#d0c5b3] text-sm leading-relaxed">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
