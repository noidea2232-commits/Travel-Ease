import { useState } from "react";
import { Plane, Car, Clock } from "lucide-react";

import imgHatchback    from "@assets/image_1779029263723.png";
import imgSedan        from "@assets/image_1779029281791.png";
import imgSedanPrime   from "@assets/image_1779029297172.png";
import imgErtiga       from "@assets/image_1779029306486.png";
import imgInnova       from "@assets/image_1779029319947.png";
import imgInnovaCrysta from "@assets/image_1779029330191.png";
import imgHycross      from "@assets/image_1779029344124.png";
import imgFortune      from "@assets/image_1779029359005.png";
import imgTempo        from "@assets/image_1779029372201.png";
import imgUrbania      from "@assets/image_1779029388859.png";
import imgMinibus      from "@assets/image_1779029739512.png";

const WA_BASE = "https://wa.me/919902727466";

const IMG: Record<string, string> = {
  hatchback:    imgHatchback,
  sedan:        imgSedan,
  sedanPrime:   imgSedanPrime,
  ertiga:       imgErtiga,
  innova:       imgInnova,
  innovaCrysta: imgInnovaCrysta,
  hycross:      imgHycross,
  fortuner:     imgFortune,
  tempo:        imgTempo,
  urbania:      imgUrbania,
  minibus:      imgMinibus,
};

/* ── Data ─────────────────────────────────────────────────────────────────── */
const airportTaxi = [
  { name: "HATCHBACK",       seats: "3+1", price: "799",   toll: "Toll Optional", km: "Upto 30 km", imgKey: "hatchback" },
  { name: "SEDAN",           seats: "4+1", price: "999",   toll: "Toll Optional", km: "Upto 40 km", imgKey: "sedan" },
  { name: "PRIME SEDAN",     seats: "4+1", price: "1,199", toll: "Toll Optional", km: "Upto 40 km", imgKey: "sedanPrime" },
  { name: "SUV ERTIGA",      seats: "6+1", price: "1,499", toll: "Toll Optional", km: "Upto 40 km", imgKey: "ertiga" },
  { name: "INNOVA",          seats: "7+1", price: "1,799", toll: "Toll Optional", km: "Upto 40 km", imgKey: "innova" },
  { name: "INNOVA CRYSTA",   seats: "7+1", price: "2,199", toll: "Toll Optional", km: "Upto 40 km", imgKey: "innovaCrysta" },
  { name: "INNOVA HYCROSS",  seats: "7+1", price: "2,499", toll: "Toll Optional", km: "Upto 40 km", imgKey: "hycross" },
  { name: "HYCROSS SUNROOF", seats: "7+1", price: "3,999", toll: "Toll Optional", km: "Upto 40 km", imgKey: "hycross" },
  { name: "TOYOTA FORTUNER", seats: "7+1", price: "5,000", toll: "Toll Optional", km: "Upto 40 km", imgKey: "fortuner" },
];

const outstation = [
  { name: "SEDAN",           seats: "4+1",  rate: "12", bata: "400",  imgKey: "sedan" },
  { name: "PRIME SEDAN",     seats: "4+1",  rate: "14", bata: "400",  imgKey: "sedanPrime" },
  { name: "SUV ERTIGA",      seats: "6+1",  rate: "16", bata: "500",  imgKey: "ertiga" },
  { name: "INNOVA",          seats: "7+1",  rate: "18", bata: "500",  imgKey: "innova" },
  { name: "INNOVA CRYSTA",   seats: "7+1",  rate: "20", bata: "500",  imgKey: "innovaCrysta" },
  { name: "HYCROSS HYBRID",  seats: "7+1",  rate: "22", bata: "500",  imgKey: "hycross" },
  { name: "TEMPO TRAVELLER", seats: "12+1", rate: "23", bata: "1000", imgKey: "tempo" },
  { name: "URBANIA",         seats: "16+1", rate: "45", bata: "1000", imgKey: "urbania" },
  { name: "MINI BUS",        seats: "21+1", rate: "45", bata: "1000", imgKey: "minibus" },
];

const local = [
  { name: "SEDAN",           seats: "4+1",  pkg: "4Hrs 40Kms", price: "1,400", imgKey: "sedan" },
  { name: "SEDAN",           seats: "4+1",  pkg: "8Hrs 80Kms", price: "2,300", imgKey: "sedan" },
  { name: "PRIME SEDAN",     seats: "4+1",  pkg: "8Hrs 80Kms", price: "2,500", imgKey: "sedanPrime" },
  { name: "ERTIGA",          seats: "6+1",  pkg: "8Hrs 80Kms", price: "2,800", imgKey: "ertiga" },
  { name: "INNOVA",          seats: "7+1",  pkg: "8Hrs 80Kms", price: "3,200", imgKey: "innova" },
  { name: "INNOVA CRYSTA",   seats: "7+1",  pkg: "8Hrs 80Kms", price: "3,500", imgKey: "innovaCrysta" },
  { name: "HYCROSS HYBRID",  seats: "7+1",  pkg: "8Hrs 80Kms", price: "4,500", imgKey: "hycross" },
  { name: "TEMPO TRAVELLER", seats: "12+1", pkg: "8Hrs 80Kms", price: "6,000", imgKey: "tempo" },
  { name: "URBANIA",         seats: "16+1", pkg: "8Hrs 80Kms", price: "8,000", imgKey: "urbania" },
  { name: "MINI BUS",        seats: "21+1", pkg: "8Hrs 80Kms", price: "9,000", imgKey: "minibus" },
];

/* ── Sub-components ───────────────────────────────────────────────────────── */
function AcBadge() {
  return (
    <span className="absolute top-2 right-2 bg-[#ffdc8e] text-[#3f2e00] text-[10px] font-black px-2.5 py-0.5 rounded-full z-10 leading-none shadow-sm">
      A/C
    </span>
  );
}

function VehicleImage({ imgKey, alt }: { imgKey: string; alt: string }) {
  return (
    <div className="w-full bg-white rounded-lg flex items-center justify-center overflow-hidden mb-3 p-2" style={{ height: "120px" }}>
      <img
        src={IMG[imgKey]}
        alt={alt}
        className="max-h-full max-w-full object-contain"
        loading="lazy"
        width="200"
        height="110"
      />
    </div>
  );
}

function CardButtons({ waMsg }: { waMsg: string }) {
  const url = `${WA_BASE}?text=${encodeURIComponent(waMsg)}`;
  return (
    <div className="flex gap-2 mt-auto pt-3">
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 flex items-center justify-center gap-1 bg-[#ffdc8e] hover:bg-[#e3c06f] text-[#3f2e00] text-xs font-black py-2 px-2 rounded-lg transition-colors whitespace-nowrap"
      >
        <svg className="w-3.5 h-3.5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z" />
        </svg>
        Book Now
      </a>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 flex items-center justify-center gap-1 bg-[#1a2940] hover:bg-[#243550] border border-[#ffdc8e]/20 text-white text-xs font-bold py-2 px-2 rounded-lg transition-colors whitespace-nowrap"
      >
        <svg className="w-3.5 h-3.5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
        WhatsApp
      </a>
    </div>
  );
}

function VehicleCard({ imgKey, alt, name, seats, children }: {
  imgKey: string; alt: string; name: string; seats: string; children: React.ReactNode;
}) {
  return (
    <article className="bg-[#0f1e33] border border-[#ffdc8e]/10 hover:border-[#ffdc8e]/40 rounded-xl p-3 relative flex flex-col transition-all duration-300 hover:shadow-xl hover:shadow-black/50 hover:-translate-y-1 active:scale-[0.98]">
      <AcBadge />
      <VehicleImage imgKey={imgKey} alt={alt} />
      <h3 className="text-center font-black text-white text-xs sm:text-sm uppercase tracking-wide leading-tight">
        {name}
        <span className="text-[#d0c5b3] font-medium"> ({seats})</span>
      </h3>
      {children}
    </article>
  );
}

/* ── Main Component ───────────────────────────────────────────────────────── */
type Tab = "airport" | "outstation" | "local";

export default function Fleet() {
  const [tab, setTab] = useState<Tab>("airport");

  const tabCls = (t: Tab) =>
    `flex items-center gap-1.5 px-3 sm:px-6 py-2.5 text-[11px] sm:text-sm font-bold transition-all duration-200 focus:outline-none ${
      tab === t
        ? "bg-[#ffdc8e] text-[#3f2e00]"
        : "bg-[#111c2d] text-[#d0c5b3] hover:text-white hover:bg-[#182640]"
    }`;

  return (
    <section id="fleet" className="py-16 bg-[#081425]" aria-labelledby="fleet-heading">
      <div className="max-w-6xl mx-auto px-4">

        {/* Heading */}
        <div className="text-center mb-10">
          <span className="text-[#ffdc8e] text-xs font-bold uppercase tracking-widest block mb-3">
            Choose Your Ride
          </span>
          <h2 id="fleet-heading" className="font-serif text-3xl md:text-4xl font-bold text-white mb-3">
            Our Fleet &amp; Pricing
          </h2>
          <p className="text-[#d0c5b3] max-w-lg mx-auto text-sm">
            All vehicles are well-maintained, air-conditioned, and driven by experienced professionals.
          </p>
        </div>

        {/* Tab Bar */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex rounded-xl border border-[#ffdc8e]/20 overflow-hidden divide-x divide-[#ffdc8e]/20">
            <button onClick={() => setTab("airport")} className={tabCls("airport")} data-testid="tab-airport">
              <Plane size={14} />AIRPORT TAXI
            </button>
            <button onClick={() => setTab("outstation")} className={tabCls("outstation")} data-testid="tab-outstation">
              <Car size={14} />OUTSTATION
            </button>
            <button onClick={() => setTab("local")} className={tabCls("local")} data-testid="tab-local">
              <Clock size={14} />LOCAL
            </button>
          </div>
        </div>

        {/* Airport Taxi */}
        {tab === "airport" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {airportTaxi.map((v, i) => (
              <VehicleCard key={i} imgKey={v.imgKey} alt={`${v.name} airport taxi Bengaluru`} name={v.name} seats={v.seats}>
                <div className="text-center mt-2">
                  <span className="text-[#ffdc8e] font-bold text-xl">₹ {v.price}</span>
                </div>
                <div className="flex items-center justify-between mt-1.5 text-xs text-[#d0c5b3]">
                  <span className="flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#ffdc8e] inline-block flex-shrink-0" />
                    {v.toll}
                  </span>
                  <span>{v.km}</span>
                </div>
                <CardButtons waMsg={`Hi! I'd like to book an Airport Taxi with Poorvi Best Travels.\n\n🚗 Vehicle: ${v.name} (${v.seats} seater)\n💰 Rate: ₹${v.price}\n\n📍 Pickup Location: [Please fill]\n✈️ Flight No. / Arrival Time: [Please fill]\n📅 Date: [Please fill]\n👥 No. of Passengers: [Please fill]\n\nKindly confirm availability. Thank you!\n📞 099027 27466`} />
              </VehicleCard>
            ))}
          </div>
        )}

        {/* Outstation */}
        {tab === "outstation" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {outstation.map((v, i) => (
              <VehicleCard key={i} imgKey={v.imgKey} alt={`${v.name} outstation cab Bengaluru`} name={v.name} seats={v.seats}>
                <div className="text-center mt-2">
                  <span className="text-[#ffdc8e] font-bold text-xl">₹ {v.rate}/km</span>
                </div>
                <p className="text-center text-xs text-[#d0c5b3] mt-0.5">Driver bata: ₹{v.bata}</p>
                <p className="text-center text-[10px] text-[#8a9ab0] mt-0.5">Toll &amp; Parking Extra</p>
                <CardButtons waMsg={`Hi! I'd like to book an Outstation cab with Poorvi Best Travels.\n\n🚗 Vehicle: ${v.name} (${v.seats} seater)\n💰 Rate: ₹${v.rate}/km + Driver Bata ₹${v.bata}\n\n📍 From (Bengaluru area): [Please fill]\n📍 To (Destination): [Please fill]\n📅 Travel Date: [Please fill]\n↩️ Return Trip: Yes / No\n👥 No. of Passengers: [Please fill]\n\nToll & Parking charges extra. Please confirm availability. Thank you!\n📞 099027 27466`} />
              </VehicleCard>
            ))}
          </div>
        )}

        {/* Local */}
        {tab === "local" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {local.map((v, i) => (
              <VehicleCard key={i} imgKey={v.imgKey} alt={`${v.name} local city cab Bengaluru`} name={v.name} seats={v.seats}>
                <div className="text-center mt-2 leading-snug">
                  <p className="text-[#8a9ab0] text-xs">{v.pkg} A/C</p>
                  <span className="text-[#ffdc8e] font-bold text-xl">₹ {v.price}</span>
                </div>
                <p className="text-center text-[10px] text-[#8a9ab0] mt-0.5">Toll &amp; Parking Extra</p>
                <CardButtons waMsg={`Hi! I'd like to book a Local cab with Poorvi Best Travels.\n\n🚗 Vehicle: ${v.name} (${v.seats} seater)\n📦 Package: ${v.pkg} A/C\n💰 Rate: ₹${v.price}\n\n📍 Pickup Location: [Please fill]\n📅 Date: [Please fill]\n🕐 Start Time: [Please fill]\n👥 No. of Passengers: [Please fill]\n\nToll & Parking charges extra. Please confirm availability. Thank you!\n📞 099027 27466`} />
              </VehicleCard>
            ))}
          </div>
        )}

        {/* Footer note */}
        <p className="text-center text-xs text-[#8a9ab0] mt-8">
          All prices are indicative. Final quote shared on WhatsApp based on pickup location & date.
        </p>
      </div>
    </section>
  );
}
