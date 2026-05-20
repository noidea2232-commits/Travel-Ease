import { useState } from "react";
import { MapPin, Plane, Calendar, Users, Send } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

const WA_NUMBER = "919902727466";

export interface BookNowModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  vehicleName: string;
  bookingType?: "airport" | "outstation" | "local";
}

function buildWhatsAppMessage(
  vehicleName: string,
  pickup: string,
  flightInfo: string,
  date: string,
  passengers: string,
) {
  return [
    "Hello, I would like to book an airport taxi with POORVI BEST TRAVELS.",
    "",
    `Vehicle: ${vehicleName}`,
    `Pickup Location: ${pickup || "—"}`,
    `Flight Number / Arrival Time: ${flightInfo || "—"}`,
    `Date: ${date || "—"}`,
    `Passengers: ${passengers || "—"}`,
  ].join("\n");
}

export default function BookNowModal({
  open,
  onOpenChange,
  vehicleName,
}: BookNowModalProps) {
  const [pickup, setPickup] = useState("");
  const [flightInfo, setFlightInfo] = useState("");
  const [date, setDate] = useState("");
  const [passengers, setPassengers] = useState("");

  const resetForm = () => {
    setPickup("");
    setFlightInfo("");
    setDate("");
    setPassengers("");
  };

  const handleOpenChange = (next: boolean) => {
    if (!next) resetForm();
    onOpenChange(next);
  };

  const handleSend = () => {
    const message = buildWhatsAppMessage(vehicleName, pickup, flightInfo, date, passengers);
    const url = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank", "noopener,noreferrer");
    handleOpenChange(false);
  };

  const inputClass =
    "w-full bg-[#faf8f3] border border-[#e8e2d4] focus:border-[#c9a227] text-[#1c1c1c] pl-10 pr-4 py-3 rounded-xl outline-none transition-all text-sm placeholder:text-[#5c5c5c]/50 focus:ring-2 focus:ring-[#c9a227]/20";

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent className="sm:max-w-md border-[#e8e2d4] bg-white p-0 overflow-hidden gap-0 luxury-shadow-lg [&>button]:text-[#3f2e00] [&>button]:hover:opacity-100 [&>button]:top-5">
        <div className="gold-gradient-bg px-6 py-5">
          <DialogHeader className="text-left space-y-1">
            <DialogTitle className="font-serif text-xl text-[#3f2e00] pr-8">
              Book Your Ride
            </DialogTitle>
            <DialogDescription className="text-[#3f2e00]/80 text-sm">
              {vehicleName}
            </DialogDescription>
          </DialogHeader>
        </div>

        <form
          className="px-6 py-6 space-y-4"
          onSubmit={(e) => {
            e.preventDefault();
            handleSend();
          }}
        >
          <div>
            <label htmlFor="book-pickup" className="block text-xs font-bold text-[#5c5c5c] uppercase tracking-wider mb-1.5">
              Pickup Location
            </label>
            <div className="relative">
              <MapPin size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#c9a227]/70" />
              <input
                id="book-pickup"
                type="text"
                placeholder="Airport, hotel, or area"
                value={pickup}
                onChange={(e) => setPickup(e.target.value)}
                className={inputClass}
                data-testid="book-modal-pickup"
              />
            </div>
          </div>

          <div>
            <label htmlFor="book-flight" className="block text-xs font-bold text-[#5c5c5c] uppercase tracking-wider mb-1.5">
              Flight Number / Arrival Time
            </label>
            <div className="relative">
              <Plane size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#c9a227]/70" />
              <input
                id="book-flight"
                type="text"
                placeholder="e.g. 6E 123 · 10:30 PM"
                value={flightInfo}
                onChange={(e) => setFlightInfo(e.target.value)}
                className={inputClass}
                data-testid="book-modal-flight"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="book-date" className="block text-xs font-bold text-[#5c5c5c] uppercase tracking-wider mb-1.5">
                Date
              </label>
              <div className="relative">
                <Calendar size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#c9a227]/70 pointer-events-none" />
                <input
                  id="book-date"
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className={inputClass}
                  data-testid="book-modal-date"
                />
              </div>
            </div>

            <div>
              <label htmlFor="book-passengers" className="block text-xs font-bold text-[#5c5c5c] uppercase tracking-wider mb-1.5">
                Number of Passengers
              </label>
              <div className="relative">
                <Users size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#c9a227]/70" />
                <input
                  id="book-passengers"
                  type="number"
                  min={1}
                  max={50}
                  placeholder="e.g. 4"
                  value={passengers}
                  onChange={(e) => setPassengers(e.target.value)}
                  className={inputClass}
                  data-testid="book-modal-passengers"
                />
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 gold-gradient-bg text-[#3f2e00] py-4 rounded-xl font-bold text-sm uppercase tracking-widest hover:brightness-110 transition-all luxury-shadow mt-2"
            data-testid="book-modal-send"
          >
            <Send size={16} />
            Send via WhatsApp
          </button>

          <p className="text-center text-[10px] text-[#5c5c5c]/70">
            Opens WhatsApp with your details pre-filled — tap send to confirm.
          </p>
        </form>
      </DialogContent>
    </Dialog>
  );
}
