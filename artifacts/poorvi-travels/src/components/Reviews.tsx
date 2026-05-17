const reviews = [
  {
    name: "Abhi Kutty",
    rating: 5,
    text: "Affordable price quick response friendly staff tq",
    avatar: "AK",
    date: "Google Review",
  },
  {
    name: "Boddu Venkatesh",
    rating: 5,
    text: "Very good experience of the service opted to travel from poorvi best travels.",
    avatar: "BV",
    date: "Google Review",
  },
  {
    name: "Prashanth Radha PR",
    rating: 5,
    text: "Well maintained cars and very friendly drivers thanks Poorvi travels",
    avatar: "PR",
    date: "Google Review",
  },
  {
    name: "Verified Customer",
    rating: 5,
    text: "Booked a Tempo Traveller for our family trip to Coorg. Everything was perfectly arranged. Driver was punctual and very helpful throughout the journey.",
    avatar: "VC",
    date: "Google Review",
  },
  {
    name: "Happy Traveller",
    rating: 5,
    text: "Used their airport transfer service multiple times. Always on time, clean car, and polite driver. Highly recommend Poorvi Best Travels!",
    avatar: "HT",
    date: "Google Review",
  },
  {
    name: "Corporate Client",
    rating: 5,
    text: "Our company uses Poorvi Best Travels for all employee pickups and client transfers. Reliable, professional, and the pricing is very competitive.",
    avatar: "CC",
    date: "Facebook Review",
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="w-4 h-4 text-[#ffdc8e] fill-current" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Reviews() {
  return (
    <section id="reviews" className="py-20 lg:py-28 bg-[#0a1628]" aria-labelledby="reviews-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-[#ffdc8e] text-xs font-bold uppercase tracking-widest block mb-3">
            Client Experiences
          </span>
          <h2 id="reviews-heading" className="font-serif text-3xl md:text-4xl font-bold text-white mb-4">
            What Our Travelers Say
          </h2>

          {/* Overall rating */}
          <div className="inline-flex items-center gap-4 bg-[#111c2d] border border-[#ffdc8e]/15 rounded-2xl px-6 py-4 mt-2">
            <div className="text-5xl font-bold text-[#ffdc8e] font-serif">5.0</div>
            <div className="text-left">
              <div className="flex gap-0.5 mb-1">
                {[1,2,3,4,5].map(i => (
                  <svg key={i} className="w-5 h-5 text-[#ffdc8e] fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-[#d0c5b3] text-sm">Based on <strong className="text-white">234 Google reviews</strong></p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {reviews.map((review, index) => (
            <article
              key={index}
              className="bg-[#111c2d] border border-[#4d4638]/50 hover:border-[#ffdc8e]/20 rounded-2xl p-6 transition-all duration-300 hover:shadow-lg hover:shadow-black/20 flex flex-col gap-4"
              data-testid={`review-card-${index}`}
            >
              <div className="flex items-center justify-between">
                <StarRating count={review.rating} />
                <span className="text-[#d0c5b3] text-xs">{review.date}</span>
              </div>

              <blockquote className="text-[#d8e3fb] text-sm leading-relaxed flex-grow">
                "{review.text}"
              </blockquote>

              <div className="flex items-center gap-3 pt-2 border-t border-[#4d4638]/30">
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#ffdc8e] to-[#e3c06f] flex items-center justify-center text-[#3f2e00] text-xs font-bold flex-shrink-0">
                  {review.avatar}
                </div>
                <div>
                  <p className="text-white text-sm font-semibold">{review.name}</p>
                  <p className="text-[#d0c5b3] text-xs">Verified Traveler</p>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href="https://maps.google.com/?q=Poorvi+Best+Travels+JP+Nagar+Bengaluru"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-[#ffdc8e]/30 text-[#ffdc8e] px-6 py-3 rounded-xl text-sm font-semibold hover:bg-[#ffdc8e]/5 transition-all"
            data-testid="view-all-reviews"
          >
            View All 234 Reviews on Google
          </a>
        </div>
      </div>
    </section>
  );
}
