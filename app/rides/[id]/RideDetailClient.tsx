"use client";
import Link from "next/link";
import { useState } from "react";

const rides: Record<string, {
  driver: string; initials: string; rating: number; rides: number;
  from: string; to: string; date: string; time: string; seats: number;
  price: number; car: string; tags: string[]; bio: string; dept: string;
  reviews: { name: string; text: string; stars: number }[];
  waypoints: string[];
}> = {
  "1": {
    driver: "Sarah K.", initials: "SK", rating: 4.9, rides: 34,
    from: "Stanford Campus (White Plaza)", to: "SFO Terminal 2",
    date: "Today", time: "4:00 PM", seats: 2, price: 22,
    car: "Toyota Prius · Silver · 4XBR291",
    tags: ["Airport", "Direct"], dept: "Computer Science PhD",
    bio: "CS PhD student. I make this run to SFO every other week — always on time.",
    reviews: [
      { name: "Alex M.", text: "Super reliable, great driver!", stars: 5 },
      { name: "Priya N.", text: "Comfortable and safe drive.", stars: 5 },
      { name: "James W.", text: "Great conversation, punctual.", stars: 5 },
    ],
    waypoints: ["White Plaza", "Embarcadero Rd", "101-N", "SFO Terminal 2"],
  },
  "2": {
    driver: "Marcus T.", initials: "MT", rating: 4.8, rides: 21,
    from: "GSB Campus (Knight Mgmt)", to: "Caltrain PA Station",
    date: "Today", time: "5:15 PM", seats: 3, price: 8,
    car: "Honda Civic · Blue · 7KZP443",
    tags: ["Caltrain", "Quick"], dept: "MBA '26",
    bio: "MBA '26. Run this route every weekday evening.",
    reviews: [
      { name: "Sarah K.", text: "Friendly and quick drop-off.", stars: 5 },
      { name: "Noah A.", text: "Perfect timing for the Caltrain.", stars: 4 },
    ],
    waypoints: ["Knight Mgmt", "Campus Dr", "El Camino Real", "Caltrain Station"],
  },
  "3": {
    driver: "Priya N.", initials: "PN", rating: 5.0, rides: 47,
    from: "Stanford Main Quad", to: "SF Downtown / Union Square",
    date: "Tomorrow", time: "10:00 AM", seats: 1, price: 28,
    car: "Tesla Model 3 · White · PRYAN1",
    tags: ["SF", "EV"], dept: "Law School JD",
    bio: "JD student going to SF weekly. Tesla, smooth ride, great playlist.",
    reviews: [
      { name: "Eitan D.", text: "Best ride ever, 10/10!", stars: 5 },
      { name: "Chris W.", text: "Clean car, amazing driver.", stars: 5 },
    ],
    waypoints: ["Main Quad", "Palm Dr", "101-N", "Union Square"],
  },
  "4": {
    driver: "James W.", initials: "JW", rating: 4.7, rides: 15,
    from: "Stanford Ave & Escondido", to: "SJC Airport",
    date: "Tomorrow", time: "7:30 AM", seats: 2, price: 19,
    car: "Subaru Outback · Gray · 8MNP102",
    tags: ["Airport", "SJC"], dept: "Engineering PhD",
    bio: "Eng PhD, commuting to SJC regularly. Reliable and on time.",
    reviews: [
      { name: "Leila A.", text: "Smooth ride, great communication.", stars: 5 },
    ],
    waypoints: ["Escondido Village", "El Camino Real", "101-S", "SJC Terminal B"],
  },
  "5": {
    driver: "Leila A.", initials: "LA", rating: 4.9, rides: 29,
    from: "Escondido Village", to: "Oakland Airport",
    date: "Fri Apr 30", time: "2:00 PM", seats: 3, price: 25,
    car: "Mazda CX-5 · Red · 3RQW554",
    tags: ["Airport", "OAK"], dept: "MBA '27",
    bio: "MBA '27. Making the OAK run for the long weekend.",
    reviews: [
      { name: "Marcus T.", text: "Great driver, very punctual!", stars: 5 },
      { name: "Sarah K.", text: "Would ride again, 5 stars.", stars: 5 },
    ],
    waypoints: ["Escondido Village", "Campus Dr", "880-N", "OAK Terminal 1"],
  },
};

export function RideDetailClient({ id }: { id: string }) {
  const [requested, setRequested] = useState(false);
  const ride = rides[id] ?? rides["1"];

  return (
    <div className="flex flex-col min-h-screen pb-28">
      {/* Map placeholder */}
      <div className="bg-gradient-to-br from-gray-200 to-gray-300 h-52 relative flex items-center justify-center">
        <div className="absolute inset-0 flex items-center justify-center opacity-30 text-6xl">🗺️</div>
        <div className="bg-white/90 rounded-full px-4 py-2 text-sm font-medium text-gray-700 shadow z-10">
          {ride.from.split("(")[0].trim()} → {ride.to}
        </div>
        <Link href="/rides/" className="absolute top-14 left-4 bg-white rounded-full w-10 h-10 flex items-center justify-center shadow text-gray-700 text-lg">
          ←
        </Link>
      </div>

      {/* Driver card */}
      <div className="bg-white px-5 pt-5 pb-4 border-b border-gray-100">
        <div className="flex items-center gap-3">
          <div className="w-14 h-14 rounded-full bg-[#8C1515] flex items-center justify-center text-white font-bold text-lg">
            {ride.initials}
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-2">
              <p className="font-semibold text-gray-800">{ride.driver}</p>
              <span className="text-blue-500 text-sm">✓ Verified</span>
            </div>
            <p className="text-xs text-gray-500">{ride.dept}</p>
            <div className="flex items-center gap-2 mt-1">
              <span className="text-xs text-gray-600">⭐ {ride.rating}</span>
              <span className="text-gray-300">·</span>
              <span className="text-xs text-gray-600">{ride.rides} rides</span>
            </div>
          </div>
          <button className="bg-gray-100 rounded-full px-3 py-2 text-sm text-gray-600">💬 Chat</button>
        </div>
        <p className="text-sm text-gray-500 mt-3">{ride.bio}</p>
      </div>

      {/* Ride details */}
      <div className="bg-white px-5 py-4 mt-2 border-b border-gray-100">
        <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-3">Trip Details</p>
        <div className="flex gap-3 mb-4">
          <div className="flex flex-col items-center gap-1 pt-1">
            <div className="w-3 h-3 rounded-full bg-green-500" />
            <div className="w-0.5 flex-1 bg-gray-200 min-h-8" />
            <div className="w-3 h-3 rounded-full bg-[#8C1515]" />
          </div>
          <div className="flex flex-col gap-4 flex-1">
            <div>
              <p className="text-sm font-medium text-gray-800">{ride.from}</p>
              <p className="text-xs text-gray-400">{ride.date} · {ride.time} departure</p>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-800">{ride.to}</p>
              <p className="text-xs text-gray-400">~45 min estimated</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-3 mt-3">
          <div className="bg-gray-50 rounded-xl p-3 text-center">
            <p className="text-lg font-bold text-[#8C1515]">${ride.price}</p>
            <p className="text-xs text-gray-500">per seat</p>
          </div>
          <div className="bg-gray-50 rounded-xl p-3 text-center">
            <p className="text-lg font-bold text-gray-700">{ride.seats}</p>
            <p className="text-xs text-gray-500">seats left</p>
          </div>
          <div className="bg-gray-50 rounded-xl p-3 text-center">
            <p className="text-lg font-bold text-gray-700">~45m</p>
            <p className="text-xs text-gray-500">duration</p>
          </div>
        </div>

        <div className="mt-3 bg-gray-50 rounded-xl p-3">
          <p className="text-xs text-gray-500 mb-1">🚗 Vehicle</p>
          <p className="text-sm font-medium text-gray-700">{ride.car}</p>
        </div>
      </div>

      {/* Route waypoints */}
      <div className="bg-white px-5 py-4 mt-2 border-b border-gray-100">
        <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-3">Route</p>
        <div className="flex gap-1 overflow-x-auto">
          {ride.waypoints.map((wp, i) => (
            <div key={i} className="flex items-center gap-1 flex-shrink-0">
              <span className="bg-red-50 text-[#8C1515] text-xs px-2 py-1 rounded-lg font-medium">{wp}</span>
              {i < ride.waypoints.length - 1 && <span className="text-gray-300 text-xs">›</span>}
            </div>
          ))}
        </div>
      </div>

      {/* Reviews */}
      <div className="bg-white px-5 py-4 mt-2">
        <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-3">Reviews</p>
        <div className="flex flex-col gap-3">
          {ride.reviews.map((r, i) => (
            <div key={i} className="flex gap-3">
              <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-xs font-bold text-gray-600 flex-shrink-0">
                {r.name[0]}
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <p className="text-xs font-semibold text-gray-700">{r.name}</p>
                  <span className="text-xs text-yellow-400">{"⭐".repeat(r.stars)}</span>
                </div>
                <p className="text-xs text-gray-500">{r.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Book button */}
      <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-md bg-white border-t border-gray-200 px-5 py-4">
        <button
          onClick={() => setRequested(true)}
          className={`w-full py-4 rounded-2xl font-semibold text-base transition-all ${
            requested
              ? "bg-green-500 text-white"
              : "bg-[#8C1515] text-white active:scale-95"
          }`}
        >
          {requested ? "✓ Ride Requested! Driver will confirm shortly." : `Request Ride · $${ride.price}`}
        </button>
        <p className="text-center text-xs text-gray-400 mt-2">Payment via Stanford student account · No charge until confirmed</p>
      </div>
    </div>
  );
}
