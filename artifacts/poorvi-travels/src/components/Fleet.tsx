import { useState } from "react";
import { Plane, Car, Clock } from "lucide-react";

const WA_BASE = "https://wa.me/919902727466";

/* ─────────────────────────────────────────────────────────────────────────────
   Clean white-background vehicle images sourced from Wikipedia Commons /
   public CDNs — presented with object-contain so they look like product shots.
───────────────────────────────────────────────────────────────────────────── */
const IMG = {
  /* Hatchback — Maruti Swift side view */
  hatchback:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/MARUTI_SUZUKI_SWIFT_VXIVS_2018.jpg/320px-MARUTI_SUZUKI_SWIFT_VXIVS_2018.jpg",
  /* Sedan — Toyota Etios / Dzire */
  sedan:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/2012_Toyota_Etios_sedan_%28Australia%29%2C_front_8.15.17.jpg/320px-2012_Toyota_Etios_sedan_%28Australia%29%2C_front_8.15.17.jpg",
  /* Prime Sedan — Honda City / Verna */
  sedanPrime:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Honda-city-2020.jpg/320px-Honda-city-2020.jpg",
  /* Ertiga — Maruti Suzuki Ertiga */
  ertiga:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/2019_Maruti_Suzuki_Ertiga.jpg/320px-2019_Maruti_Suzuki_Ertiga.jpg",
  /* Innova */
  innova:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Toyota_Innova_Crysta_2.4_G_AT_%28facelift%2C_silver%29%2C_front_8.30.19.jpg/320px-Toyota_Innova_Crysta_2.4_G_AT_%28facelift%2C_silver%29%2C_front_8.30.19.jpg",
  /* Innova Crysta */
  innovaCrysta:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Toyota_Innova_Crysta_2.4_V_AT_%28facelift%29%2C_front_8.15.19.jpg/320px-Toyota_Innova_Crysta_2.4_V_AT_%28facelift%29%2C_front_8.15.19.jpg",
  /* Hycross / Hycross Sunroof */
  hycross:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/2022_Toyota_Innova_Zenix_%28Indonesia%2C_gasoline_variant%29.jpg/320px-2022_Toyota_Innova_Zenix_%28Indonesia%2C_gasoline_variant%29.jpg",
  /* Fortuner */
  fortuner:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Toyota_Fortuner_2020_-_Front.jpg/320px-Toyota_Fortuner_2020_-_Front.jpg",
  /* Tempo Traveller */
  tempo:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Force_Traveller_%28facelift%29_at_the_2016_Auto_Expo.jpg/320px-Force_Traveller_%28facelift%29_at_the_2016_Auto_Expo.jpg",
  /* Urbania 16-seater */
  urbania:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Force_Urbania_2022.jpg/320px-Force_Urbania_2022.jpg",
  /* Mini Bus */
  minibus:
    "https://images.unsplash.com/photo-1567443024551-f3e3cc2be870?w=400&q=80",
};

/* Fallback for any broken Wikipedia image */
const FALLBACK: Record<string, string> = {
  hatchback:   "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?w=400&q=80",
  sedan:       "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=400&q=80",
  sedanPrime:  "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=400&q=80",
  ertiga:      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=400&q=80",
  innova:      "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=400&q=80",
  innovaCrysta:"https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=400&q=80",
  hycross:     "https://images.unsplash.com/photo-1542362567-b07e54358753?w=400&q=80",
  fortuner:    "https://images.unsplash.com/photo-1502877338535-766e1452684a?w=400&q=80",
  tempo:       "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=400&q=80",
  urbania:     "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?w=400&q=80",
  minibus:     "https://images.unsplash.com/photo-1567443024551-f3e3cc2be870?w=400&q=80",
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
    <span className="absolute top-2 right-2 bg-[#f5a623] text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full z-10 leading-none shadow-sm">
      A/C
    </span>
  );
}

function VehicleImage({ imgKey, alt }: { imgKey: string; alt: string }) {
  return (
    <div className="w-full h-28 bg-white rounded flex items-center justify-center overflow-hidden mb-3">
      <img
        src={IMG[imgKey as keyof typeof IMG]}
        alt={alt}
        className="max-h-24 max-w-full object-contain"
        loading="lazy"
        width="180"
        height="96"
        onError={(e) => {
          const t = e.currentTarget;
          const fb = FALLBACK[imgKey];
          if (fb && t.src !== fb) t.src = fb;
        }}
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
        className="flex-1 flex items-center justify-center gap-1 bg-[#f5a623] hover:bg-[#e09510] text-white text-xs font-bold py-2 px-2 rounded transition-colors whitespace-nowrap"
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
        className="flex-1 flex items-center justify-center gap-1 bg-[#1a1a2e] hover:bg-[#111122] text-white text-xs font-bold py-2 px-2 rounded transition-colors whitespace-nowrap"
      >
        <svg className="w-3.5 h-3.5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
        Whatsapp
      </a>
    </div>
  );
}

function VehicleCard({ imgKey, alt, name, seats, children }: {
  imgKey: string;
  alt: string;
  name: string;
  seats: string;
  children: React.ReactNode;
}) {
  return (
    <article className="bg-white rounded-lg shadow border border-gray-100 p-3 relative flex flex-col">
      <AcBadge />
      <VehicleImage imgKey={imgKey} alt={alt} />
      <h3 className="text-center font-black text-gray-900 text-xs sm:text-sm uppercase tracking-wide leading-tight">
        {name}
        <span className="text-gray-500 font-semibold"> ({seats})</span>
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
    `flex items-center gap-1.5 px-4 sm:px-6 py-2.5 text-xs sm:text-sm font-bold transition-colors focus:outline-none ${
      tab === t ? "bg-[#f5a623] text-white" : "bg-white text-gray-700 hover:bg-gray-50"
    }`;

  return (
    <section id="fleet" className="py-12 bg-[#eef0f5]" aria-labelledby="fleet-heading">
      <div className="max-w-5xl mx-auto px-4">
        <h2 id="fleet-heading" className="sr-only">Our Fleet &amp; Pricing</h2>

        {/* Tab Bar */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex rounded border border-gray-300 bg-white overflow-hidden shadow divide-x divide-gray-300">
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
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {airportTaxi.map((v, i) => (
              <VehicleCard key={i} imgKey={v.imgKey} alt={`${v.name} airport taxi Bengaluru`} name={v.name} seats={v.seats}>
                <div className="text-center mt-1.5">
                  <span className="text-[#f5a623] font-bold text-xl">₹ {v.price}</span>
                </div>
                <div className="flex items-center justify-between mt-1.5 text-xs text-gray-500">
                  <span className="flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-[#f5a623] inline-block flex-shrink-0" />
                    {v.toll}
                  </span>
                  <span>{v.km}</span>
                </div>
                <CardButtons waMsg={`Hi! I want to book an Airport Taxi — ${v.name} (${v.seats}) at ₹${v.price}. Please confirm availability. Contact: Poorvi Best Travels 099027 27466`} />
              </VehicleCard>
            ))}
          </div>
        )}

        {/* Outstation */}
        {tab === "outstation" && (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {outstation.map((v, i) => (
              <VehicleCard key={i} imgKey={v.imgKey} alt={`${v.name} outstation cab Bengaluru`} name={v.name} seats={v.seats}>
                <div className="text-center mt-1.5">
                  <span className="text-gray-700 text-xs font-semibold">A/C </span>
                  <span className="text-[#f5a623] font-bold text-xl">₹ {v.rate}/km</span>
                </div>
                <p className="text-center text-xs text-gray-500 mt-0.5">Driver bata: ₹{v.bata}</p>
                <p className="text-center text-xs text-gray-400 mt-0.5">(Toll &amp; Parking Charges Extra)</p>
                <CardButtons waMsg={`Hi! I want to book an Outstation cab — ${v.name} (${v.seats}) at ₹${v.rate}/km. Please confirm availability. Contact: Poorvi Best Travels 099027 27466`} />
              </VehicleCard>
            ))}
          </div>
        )}

        {/* Local */}
        {tab === "local" && (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {local.map((v, i) => (
              <VehicleCard key={i} imgKey={v.imgKey} alt={`${v.name} local city cab Bengaluru`} name={v.name} seats={v.seats}>
                <div className="text-center mt-1.5 leading-snug">
                  <p className="text-gray-700 text-xs">{v.pkg} A/C</p>
                  <span className="text-[#f5a623] font-bold text-xl">₹ {v.price}</span>
                </div>
                <p className="text-center text-xs text-gray-400 mt-0.5">(Toll &amp; Parking Charges Extra)</p>
                <CardButtons waMsg={`Hi! I want to book a Local cab — ${v.name} (${v.seats}), ${v.pkg} package at ₹${v.price}. Please confirm availability. Contact: Poorvi Best Travels 099027 27466`} />
              </VehicleCard>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
