import { useState } from "react";
import { X, MapPin, Clock, Car, ChevronRight } from "lucide-react";
import imgMunnar from "@assets/tourism/munnar.png";
import imgJogFalls from "@assets/tourism/jog-falls.png";
import imgKeralaTrip from "@assets/hero/hero-01.png";

const WA = "https://wa.me/919902727466";

/* ── Destination Data ──────────────────────────────────────────────────────── */
interface Destination {
  name: string;
  dist: string;
  heroImg: string;
  images: string[];
  desc: string;
  highlights: string[];
  duration: string;
  vehicle: string;
}

interface Phase {
  id: number;
  name: string;
  subtitle: string;
  bannerImg: string;
  accent: string;
  destinations: Destination[];
}

const phases: Phase[] = [
  {
    id: 1,
    name: "Heritage & Royalty",
    subtitle: "Palaces · Temples · Royal History",
    bannerImg: "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=900&q=90",
    accent: "#c9a84c",
    destinations: [
      {
        name: "Mysuru",
        dist: "150 km from Bengaluru",
        heroImg: "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=900&q=90",
        images: [
          "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=600&q=80",
          "https://images.unsplash.com/photo-1548013146-72479768bada?w=600&q=80",
          "https://images.unsplash.com/photo-1567157577867-05ccb1388e66?w=600&q=80",
        ],
        desc: "The City of Palaces — home to the magnificent Mysore Palace illuminated by 100,000 bulbs every Sunday. Chamundi Hill, Brindavan Gardens, and the fragrant Devaraja Market make Mysuru an unforgettable royal experience.",
        highlights: ["Mysore Palace (night illumination)", "Chamundi Hill Temple", "Brindavan Gardens", "Devaraja Market", "St. Philomena's Church"],
        duration: "1–2 Days",
        vehicle: "Sedan / Innova Crysta",
      },
      {
        name: "Srirangapatna",
        dist: "130 km from Bengaluru",
        heroImg: "https://images.unsplash.com/photo-1544531585-9847b68c8c86?w=900&q=90",
        images: [
          "https://images.unsplash.com/photo-1544531585-9847b68c8c86?w=600&q=80",
          "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=600&q=80",
        ],
        desc: "The historic island fortress town of Tipu Sultan — walk through centuries of Deccan history at the fort, dungeons, mosque, and the serene Kaveri riverbanks.",
        highlights: ["Tipu Sultan's Fort", "Gumbaz Mausoleum", "Daria Daulat Palace", "Ranganathaswamy Temple", "Kaveri River Rafting"],
        duration: "Half Day – 1 Day",
        vehicle: "Sedan / Ertiga",
      },
      {
        name: "Halebidu",
        dist: "220 km from Bengaluru",
        heroImg: "https://images.unsplash.com/photo-1548013146-72479768bada?w=900&q=90",
        images: [
          "https://images.unsplash.com/photo-1548013146-72479768bada?w=600&q=80",
          "https://images.unsplash.com/photo-1544531585-9847b68c8c86?w=600&q=80",
        ],
        desc: "The ancient capital of the Hoysala Empire — marvel at intricate soapstone carvings that have survived 800 years. Often combined with Belur for a full Hoysala heritage trail.",
        highlights: ["Hoysaleswara Temple", "Belur Chennakeshava Temple", "Archaeological Museum", "Intricate stone carvings", "Hoysala architecture"],
        duration: "1 Day",
        vehicle: "Sedan / Innova",
      },
    ],
  },
  {
    id: 2,
    name: "Coffee Hills & Wildlife",
    subtitle: "Coffee Estates · Misty Hills · Safari",
    bannerImg: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=900&q=90",
    accent: "#5a9a4a",
    destinations: [
      {
        name: "Chikmagalur",
        dist: "245 km from Bengaluru",
        heroImg: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=900&q=90",
        images: [
          "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&q=80",
          "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80",
          "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=600&q=80",
        ],
        desc: "The birthplace of Indian coffee — rolling estates, misty Mullayanagiri peaks, and serene hill trails. Perfect for nature lovers and trekkers seeking cool weather and fresh brews.",
        highlights: ["Mullayanagiri Peak (1,930m)", "Coffee Estate Tours", "Bhadra Wildlife Sanctuary", "Hebbe Falls", "Z-Point Viewpoint"],
        duration: "2–3 Days",
        vehicle: "Innova / Ertiga",
      },
      {
        name: "Coorg / Madikeri",
        dist: "265 km from Bengaluru",
        heroImg: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=900&q=90",
        images: [
          "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&q=80",
          "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80",
          "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=600&q=80",
        ],
        desc: "The Scotland of India — lush coffee and spice estates, Abbey Falls, Raja's Seat viewpoint, and the warm Kodava culture. A favourite monsoon escape with breathtaking mist-covered valleys.",
        highlights: ["Raja's Seat", "Abbey Falls", "Namdroling Monastery", "Coffee Plantation Stays", "Dubare Elephant Camp"],
        duration: "2–3 Days",
        vehicle: "Innova Crysta / Hycross",
      },
      {
        name: "Kabini",
        dist: "220 km from Bengaluru",
        heroImg: "https://images.unsplash.com/photo-1549366021-9f761d450615?w=900&q=90",
        images: [
          "https://images.unsplash.com/photo-1549366021-9f761d450615?w=600&q=80",
          "https://images.unsplash.com/photo-1575550959106-5a7defe28b56?w=600&q=80",
          "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&q=80",
        ],
        desc: "One of India's finest wildlife destinations — Kabini's backwaters and Nagarhole National Park are home to tigers, elephants, leopards, and rich birdlife. Best explored by jeep safari and boat.",
        highlights: ["Nagarhole Tiger Reserve", "Jeep & Boat Safari", "Black Panther Sightings", "Kabini Backwaters", "Luxury Forest Lodges"],
        duration: "2 Days",
        vehicle: "Innova / Fortuner",
      },
    ],
  },
  {
    id: 3,
    name: "Ruins & Sacred Coasts",
    subtitle: "Ancient Ruins · Beaches · Temples",
    bannerImg: "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?w=900&q=90",
    accent: "#c97c3a",
    destinations: [
      {
        name: "Hampi",
        dist: "350 km from Bengaluru",
        heroImg: "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?w=900&q=90",
        images: [
          "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?w=600&q=80",
          "https://images.unsplash.com/photo-1563207153-f403bf289096?w=600&q=80",
          "https://images.unsplash.com/photo-1448375240586-882707db888b?w=600&q=80",
        ],
        desc: "A UNESCO World Heritage Site — the ruins of the Vijayanagara Empire spread across a surreal boulder-strewn landscape. The Virupaksha Temple, Vittala Temple, and Stone Chariot are iconic landmarks.",
        highlights: ["Virupaksha Temple", "Vittala Temple & Stone Chariot", "Tungabhadra River Coracle", "Hampi Bazaar", "Elephant Stables"],
        duration: "2–3 Days",
        vehicle: "Innova / Tempo Traveller",
      },
      {
        name: "Gokarna",
        dist: "485 km from Bengaluru",
        heroImg: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=900&q=90",
        images: [
          "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&q=80",
          "https://images.unsplash.com/photo-1519046904884-53103b34b206?w=600&q=80",
          "https://images.unsplash.com/photo-1530866495561-507c9faab2ed?w=600&q=80",
        ],
        desc: "A pristine pilgrimage town with some of Karnataka's most beautiful beaches — Om Beach, Paradise Beach, and Kudle Beach. A perfect mix of spirituality and nature.",
        highlights: ["Om Beach", "Mahabaleshwar Temple", "Paradise Beach Trek", "Kudle Beach", "Half Moon Beach"],
        duration: "2–3 Days",
        vehicle: "Innova Crysta / Hycross",
      },
      {
        name: "Udupi",
        dist: "400 km from Bengaluru",
        heroImg: "https://images.unsplash.com/photo-1548013146-72479768bada?w=900&q=90",
        images: [
          "https://images.unsplash.com/photo-1548013146-72479768bada?w=600&q=80",
          "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&q=80",
        ],
        desc: "Famous for its Sri Krishna Temple and authentic Udupi cuisine. Malpe Beach, St. Mary's Island, and the cultural richness of coastal Karnataka make this a delightful cultural getaway.",
        highlights: ["Sri Krishna Temple", "Malpe Beach & St. Mary's Island", "Authentic Udupi Cuisine", "Manipal University Town", "Kaup Lighthouse"],
        duration: "1–2 Days",
        vehicle: "Sedan / Innova",
      },
    ],
  },
  {
    id: 4,
    name: "Kerala Trip",
    subtitle: "Backwaters · Tea Hills · Spice Forests",
    bannerImg: imgKeralaTrip,
    accent: "#2a9d8f",
    destinations: [
      {
        name: "Alleppey / Alappuzha",
        dist: "605 km from Bengaluru",
        heroImg: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=900&q=90",
        images: [
          "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=600&q=80",
          "https://images.unsplash.com/photo-1588416936097-41850ab3d86d?w=600&q=80",
          "https://images.unsplash.com/photo-1519046904884-53103b34b206?w=600&q=80",
        ],
        desc: "The Venice of the East — glide through serene Kerala backwaters on a traditional houseboat. Alleppey's canals, lagoons, and paddy fields create an unforgettable slow-travel experience.",
        highlights: ["Houseboat Stay", "Backwater Canals", "Vembanad Lake", "Kuttanad Paddy Fields", "Alappuzha Beach"],
        duration: "2 Days",
        vehicle: "Innova Crysta / Hycross",
      },
      {
        name: "Munnar",
        dist: "465 km from Bengaluru",
        heroImg: imgMunnar,
        images: [
          imgMunnar,
          "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=600&q=80",
          "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80",
        ],
        desc: "A breathtaking high-altitude hill station carpeted in tea estates. The rolling green hills, cool mist, and cascading waterfalls make Munnar one of South India's most romantic destinations.",
        highlights: ["Tea Plantation Tours", "Eravikulam National Park", "Mattupetty Dam & Lake", "Top Station Viewpoint", "Attukal Waterfalls"],
        duration: "2–3 Days",
        vehicle: "Innova / Hycross",
      },
      {
        name: "Thekkady / Periyar",
        dist: "470 km from Bengaluru",
        heroImg: "https://images.unsplash.com/photo-1575550959106-5a7defe28b56?w=900&q=90",
        images: [
          "https://images.unsplash.com/photo-1575550959106-5a7defe28b56?w=600&q=80",
          "https://images.unsplash.com/photo-1549366021-9f761d450615?w=600&q=80",
          "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&q=80",
        ],
        desc: "Home to Periyar Tiger Reserve — take a boat ride on Periyar Lake surrounded by wild elephants and exotic birds. The spice plantations and Kathakali performances add cultural richness.",
        highlights: ["Periyar Lake Boat Safari", "Elephant Spotting", "Spice Plantation Tours", "Kathakali Show", "Bamboo Rafting"],
        duration: "2 Days",
        vehicle: "Innova / Ertiga",
      },
      {
        name: "Kochi / Fort Kochi",
        dist: "560 km from Bengaluru",
        heroImg: "https://images.unsplash.com/photo-1580674684081-7617fbf3d745?w=900&q=90",
        images: [
          "https://images.unsplash.com/photo-1580674684081-7617fbf3d745?w=600&q=80",
          "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=600&q=80",
        ],
        desc: "A vibrant port city where Arabian, Portuguese, Dutch, and British cultures intertwine. Fort Kochi's Chinese fishing nets at sunset, the Jew Town spice market, and Mattancherry Palace are unforgettable.",
        highlights: ["Chinese Fishing Nets", "Mattancherry Palace", "Jew Town & Synagogue", "Fort Kochi Heritage Walk", "Kerala Backwater Ferry"],
        duration: "1–2 Days",
        vehicle: "Sedan / Innova",
      },
      {
        name: "Wayanad",
        dist: "285 km from Bengaluru",
        heroImg: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=900&q=90",
        images: [
          "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&q=80",
          "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=600&q=80",
          "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80",
        ],
        desc: "A lush forest district bordering Karnataka — tribal culture, ancient caves, bamboo forests, and the majestic Chembra Peak make Wayanad a hidden gem for nature lovers.",
        highlights: ["Chembra Peak Trek (Heart Lake)", "Edakkal Caves", "Banasura Sagar Dam", "Pookode Lake", "Soochipara Falls"],
        duration: "2–3 Days",
        vehicle: "Innova / Fortuner",
      },
    ],
  },
  {
    id: 5,
    name: "Adventure & Beach Finale",
    subtitle: "River Rafting · Beaches · Nightlife",
    bannerImg: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=900&q=90",
    accent: "#e76f51",
    destinations: [
      {
        name: "Dandeli",
        dist: "455 km from Bengaluru",
        heroImg: "https://images.unsplash.com/photo-1530866495561-507c9faab2ed?w=900&q=90",
        images: [
          "https://images.unsplash.com/photo-1530866495561-507c9faab2ed?w=600&q=80",
          "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=600&q=80",
          "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&q=80",
        ],
        desc: "Karnataka's adventure capital — white-water rafting on the Kali River, jungle safaris, kayaking, zip-lining, and night camping in dense forests. A paradise for thrill-seekers.",
        highlights: ["White Water Rafting (Kali River)", "Dandeli Wildlife Sanctuary", "Kayaking & Coracle", "Night Jungle Safari", "Zip-lining & Trekking"],
        duration: "2–3 Days",
        vehicle: "Innova / Tempo Traveller",
      },
      {
        name: "Goa",
        dist: "565 km from Bengaluru",
        heroImg: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=900&q=90",
        images: [
          "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=600&q=80",
          "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&q=80",
          "https://images.unsplash.com/photo-1519046904884-53103b34b206?w=600&q=80",
        ],
        desc: "India's beach paradise — sun-kissed shores, Portuguese heritage churches, world-class seafood, vibrant nightlife, and water sports. From the quiet beaches of North Goa to the untouched South Goa.",
        highlights: ["Baga & Anjuna Beach", "Old Goa Churches (UNESCO)", "Water Sports — Parasailing, Jet Ski", "Dudhsagar Falls Day Trip", "Sunset Cruise on Mandovi"],
        duration: "3–4 Days",
        vehicle: "Innova Crysta / Tempo Traveller / Urbania",
      },
    ],
  },
  {
    id: 6,
    name: "Western Ghats Treasures",
    subtitle: "Waterfalls · Rainforests · Coastal Temples",
    bannerImg: imgJogFalls,
    accent: "#4895ef",
    destinations: [
      {
        name: "Agumbe",
        dist: "350 km from Bengaluru",
        heroImg: "https://images.unsplash.com/photo-1448375240586-882707db888b?w=900&q=90",
        images: [
          "https://images.unsplash.com/photo-1448375240586-882707db888b?w=600&q=80",
          "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80",
          "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=600&q=80",
        ],
        desc: "The Cherrapunji of the South — the greenest corner of Karnataka with lush rainforests, king cobra territory, and spectacular sunsets over the Arabian Sea. A must for nature purists.",
        highlights: ["Barkana Falls (850ft drop)", "Sunset Point", "King Cobra Research Centre", "Rainforest Treks", "Kunchikal Falls"],
        duration: "1–2 Days",
        vehicle: "Innova / Hycross",
      },
      {
        name: "Jog Falls",
        dist: "380 km from Bengaluru",
        heroImg: imgJogFalls,
        images: [
          imgJogFalls,
          "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80",
          "https://images.unsplash.com/photo-1448375240586-882707db888b?w=600&q=80",
        ],
        desc: "India's second highest waterfall — the Raja, Rani, Rover, and Roarer cascades plunge 253 metres into the gorge below. Best visited during or just after the monsoon for maximum grandeur.",
        highlights: ["Jog Falls (253m drop)", "Linganamakki Dam", "Sharavathi Valley Wildlife Sanctuary", "Gorge Viewpoints", "Nearby Unchalli Falls"],
        duration: "1–2 Days",
        vehicle: "Innova / Ertiga",
      },
      {
        name: "Murudeshwar",
        dist: "480 km from Bengaluru",
        heroImg: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=900&q=90",
        images: [
          "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&q=80",
          "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&q=80",
          "https://images.unsplash.com/photo-1519046904884-53103b34b206?w=600&q=80",
        ],
        desc: "Home to the world's second tallest Shiva statue at 37 metres — standing against the backdrop of the Arabian Sea. The Murudeshwar Temple on a rocky promontory and the crystal-blue waters make this a divine coastal destination.",
        highlights: ["37m Shiva Statue", "Murudeshwar Temple", "Netrani Island Scuba Diving", "Murudeshwar Beach", "RN Shetty Tower Viewpoint"],
        duration: "1–2 Days",
        vehicle: "Innova / Hycross",
      },
    ],
  },
];

/* ── Modal ─────────────────────────────────────────────────────────────────── */
function DestinationModal({
  dest,
  onClose,
}: {
  dest: Destination;
  onClose: () => void;
}) {
  const waMsg = `Hi! I want to book a tour to ${dest.name} (${dest.duration}). Recommended vehicle: ${dest.vehicle}. Please share the package details and price. — Poorvi Best Travels 099027 27466`;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`${dest.name} Tour Details`}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />

      {/* Card */}
      <div
        className="relative z-10 bg-[#0d1a2b] border border-[#ffdc8e]/20 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Hero */}
        <div className="relative h-56 sm:h-72 overflow-hidden rounded-t-2xl">
          <img
            src={dest.heroImg}
            alt={dest.name}
            className="w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0d1a2b] via-black/30 to-transparent" />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 bg-black/50 hover:bg-black/80 text-white rounded-full p-1.5 transition-colors"
            aria-label="Close"
          >
            <X size={18} />
          </button>
          <div className="absolute bottom-4 left-5">
            <h3 className="font-serif text-3xl font-bold text-white">{dest.name}</h3>
            <p className="text-[#ffdc8e] text-sm flex items-center gap-1 mt-1">
              <MapPin size={12} />{dest.dist}
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="p-5 sm:p-7">
          <p className="text-[#d0c5b3] text-sm leading-relaxed mb-5">{dest.desc}</p>

          {/* Image gallery */}
          {dest.images.length > 1 && (
            <div className="grid grid-cols-3 gap-2 mb-5">
              {dest.images.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt={`${dest.name} ${i + 1}`}
                  className="w-full h-20 sm:h-24 object-cover rounded-lg"
                  loading="lazy"
                />
              ))}
            </div>
          )}

          {/* Highlights */}
          <div className="mb-5">
            <h4 className="text-[#ffdc8e] text-xs font-bold uppercase tracking-widest mb-3">Highlights</h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
              {dest.highlights.map((h, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-[#d0c5b3]">
                  <span className="text-[#ffdc8e] mt-0.5 flex-shrink-0">✦</span>{h}
                </li>
              ))}
            </ul>
          </div>

          {/* Meta */}
          <div className="flex flex-wrap gap-3 mb-6">
            <div className="flex items-center gap-2 bg-[#1a2940] border border-[#ffdc8e]/10 rounded-lg px-3 py-2">
              <Clock size={14} className="text-[#ffdc8e]" />
              <div>
                <p className="text-[10px] text-[#8a9ab0] uppercase">Duration</p>
                <p className="text-white text-xs font-semibold">{dest.duration}</p>
              </div>
            </div>
            <div className="flex items-center gap-2 bg-[#1a2940] border border-[#ffdc8e]/10 rounded-lg px-3 py-2">
              <Car size={14} className="text-[#ffdc8e]" />
              <div>
                <p className="text-[10px] text-[#8a9ab0] uppercase">Recommended Vehicle</p>
                <p className="text-white text-xs font-semibold">{dest.vehicle}</p>
              </div>
            </div>
          </div>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href={`${WA}?text=${encodeURIComponent(waMsg)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-gradient-to-r from-[#ffdc8e] to-[#e3c06f] text-[#3f2e00] font-black text-sm py-3 px-5 rounded-xl text-center transition-all hover:brightness-110"
            >
              Book This Tour
            </a>
            <a
              href={`${WA}?text=${encodeURIComponent(`Hi! I need more info about ${dest.name} tour from Poorvi Best Travels.`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bf5a] text-white font-bold text-sm py-3 px-5 rounded-xl transition-colors"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp Inquiry
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── Phase Gallery Modal ───────────────────────────────────────────────────── */
function PhaseModal({
  phase,
  onClose,
}: {
  phase: Phase;
  onClose: () => void;
}) {
  const [selectedDest, setSelectedDest] = useState<Destination | null>(null);

  if (selectedDest) {
    return <DestinationModal dest={selectedDest} onClose={() => setSelectedDest(null)} />;
  }

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />
      <div
        className="relative z-10 bg-[#0d1a2b] border border-[#ffdc8e]/20 rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Phase Hero */}
        <div className="relative h-44 overflow-hidden rounded-t-2xl">
          <img src={phase.bannerImg} alt={phase.name} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0d1a2b] via-black/40 to-transparent" />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 bg-black/50 hover:bg-black/80 text-white rounded-full p-1.5 transition-colors"
            aria-label="Close"
          >
            <X size={18} />
          </button>
          <div className="absolute bottom-4 left-5">
            <span className="text-xs font-bold uppercase tracking-widest mb-1 block" style={{ color: phase.accent }}>
              Phase {phase.id}
            </span>
            <h3 className="font-serif text-2xl font-bold text-white">{phase.name}</h3>
            <p className="text-[#d0c5b3] text-xs mt-1">{phase.subtitle}</p>
          </div>
        </div>

        {/* Destination grid */}
        <div className="p-5 sm:p-7">
          <p className="text-[#8a9ab0] text-xs uppercase font-bold tracking-widest mb-4">
            {phase.destinations.length} Destinations — click to explore
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {phase.destinations.map((dest, i) => (
              <button
                key={i}
                onClick={() => setSelectedDest(dest)}
                className="text-left group bg-[#1a2940] hover:bg-[#1e3252] border border-[#ffdc8e]/10 hover:border-[#ffdc8e]/30 rounded-xl overflow-hidden transition-all duration-200"
              >
                <div className="relative h-40 overflow-hidden">
                  <img
                    src={dest.heroImg}
                    alt={dest.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3">
                    <p className="text-white font-bold text-base">{dest.name}</p>
                    <p className="text-[#ffdc8e] text-xs">{dest.dist}</p>
                  </div>
                </div>
                <div className="p-3 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs text-[#d0c5b3]">
                    <Clock size={11} className="text-[#ffdc8e]" />{dest.duration}
                    <span className="mx-1 text-[#4d5a6b]">·</span>
                    <Car size={11} className="text-[#ffdc8e]" />{dest.vehicle}
                  </div>
                  <ChevronRight size={14} className="text-[#ffdc8e] group-hover:translate-x-1 transition-transform" />
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── Main Component ───────────────────────────────────────────────────────── */
export default function Tourism() {
  const [selectedPhase, setSelectedPhase] = useState<Phase | null>(null);

  return (
    <section id="tourism" className="py-20 lg:py-28 bg-white" aria-labelledby="tourism-heading">
      <div className="max-w-6xl mx-auto px-4">

        {/* Heading */}
        <div className="text-center mb-14">
          <span className="text-[#8b6914] text-xs font-bold uppercase tracking-widest block mb-3">
            Explore Karnataka &amp; Beyond
          </span>
          <h2 id="tourism-heading" className="font-serif text-3xl md:text-4xl font-bold text-[#1c1c1c] mb-4">
            Curated Tourism Packages
          </h2>
          <p className="text-[#5c5c5c] max-w-xl mx-auto text-sm">
            19 handpicked destinations across 6 tour themes. Click any phase to explore destinations, highlights, and book your trip instantly via WhatsApp.
          </p>
        </div>

        {/* 6 Phase Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {phases.map((phase) => (
            <article
              key={phase.id}
              className="relative rounded-2xl overflow-hidden cursor-pointer group border border-[#e8e2d4] hover:border-[#c9a227]/40 transition-all duration-300 luxury-shadow hover:luxury-shadow-lg hover:-translate-y-1"
              onClick={() => setSelectedPhase(phase)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === "Enter" && setSelectedPhase(phase)}
              aria-label={`Explore Phase ${phase.id}: ${phase.name}`}
            >
              {/* Banner */}
              <div className="relative h-52 overflow-hidden">
                <img
                  src={phase.bannerImg}
                  alt={phase.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1c1c1c]/80 via-black/40 to-black/10" />

                {/* Phase number badge */}
                <div
                  className="absolute top-3 left-3 text-xs font-black px-2.5 py-1 rounded-full uppercase tracking-widest"
                  style={{ background: phase.accent, color: "#fff" }}
                >
                  Phase {phase.id}
                </div>

                {/* Destination count */}
                <div className="absolute top-3 right-3 bg-black/50 backdrop-blur-sm text-white text-xs font-bold px-2.5 py-1 rounded-full border border-white/20">
                  {phase.destinations.length} Destinations
                </div>
              </div>

              {/* Card body */}
              <div className="bg-white p-5 border-t border-[#e8e2d4]">
                <h3 className="font-serif text-lg font-bold text-[#1c1c1c] mb-1">{phase.name}</h3>
                <p className="text-xs text-[#5c5c5c] mb-4">{phase.subtitle}</p>

                {/* Destination pills */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {phase.destinations.map((d, i) => (
                    <span
                      key={i}
                      className="text-[10px] font-semibold px-2.5 py-1 rounded-full border"
                      style={{
                        color: phase.accent,
                        borderColor: phase.accent + "40",
                        background: phase.accent + "15",
                      }}
                    >
                      {d.name}
                    </span>
                  ))}
                </div>

                <button
                  className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl border font-bold text-sm transition-all group-hover:bg-gradient-to-r group-hover:from-[#f5e6b8] group-hover:via-[#d4af37] group-hover:to-[#c9a227] group-hover:text-[#3f2e00] group-hover:border-[#c9a227]"
                  style={{ borderColor: phase.accent + "60", color: phase.accent }}
                  tabIndex={-1}
                >
                  Explore Destinations <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-14 bg-[#faf8f3] border border-[#e8e2d4] rounded-2xl p-7 text-center luxury-shadow-lg">
          <h3 className="font-serif text-xl font-semibold text-[#1c1c1c] mb-2">Want a Custom Tour?</h3>
          <p className="text-[#5c5c5c] text-sm mb-6 max-w-md mx-auto">
            Tell us your group size, dates, and dream destination — we'll craft a custom itinerary and quote just for you.
          </p>
          <a
            href={`${WA}?text=${encodeURIComponent("Hi! I want to plan a custom outstation trip with Poorvi Best Travels. Please help me with an itinerary.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 gold-gradient-bg text-[#3f2e00] px-8 py-4 rounded-xl font-black text-sm uppercase tracking-widest hover:brightness-110 transition-all luxury-shadow"
          >
            Plan Custom Trip
          </a>
        </div>
      </div>

      {/* Phase modal */}
      {selectedPhase && (
        <PhaseModal phase={selectedPhase} onClose={() => setSelectedPhase(null)} />
      )}
    </section>
  );
}
