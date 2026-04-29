"use client";
import Link from "next/link";
import { useState } from "react";

const rides = [
  {
    id: "1",
    driver: "Sarah K.",
    initials: "SK",
    rating: 4.9,
    rides: 34,
    from: "Stanford Campus",
    to: "SFO Terminal 2",
    date: "Today",
    time: "4:00 PM",
    seats: 2,
    price: 22,
    car: "Toyota Prius · Silver",
    tags: ["Airport", "Direct"],
    verified: true,
  },
  {
    id: "2",
    driver: "Marcus T.",
    initials: "MT",
    rating: 4.8,
    rides: 21,
    from: "GSB Campus",
    to: "Caltrain PA Station",
    date: "Today",
    time: "5:15 PM",
    seats: 3,
    price: 8,
    car: "Honda Civic · Blue",
    tags: ["Caltrain", "Quick"],
    verified: true,
  },
  {
    id: "3",
    driver: "Priya N.",
    initials: "PN",
    rating: 5.0,
    rides: 47,
    from: "Stanford Main Quad",
    to: "SF Downtown / Union Square",
    date: "Tomorrow",
    time: "10:00 AM",
    seats: 1,
    price: 28,
    car: "Tesla Model 3 · White",
    tags: ["SF", "EV"],
    verified: true,
  },
  {
    id: "4",
    driver: "James W.",
    initials: "JW",
    rating: 4.7,
    rides: 15,
    from: "Stanford Ave & Escondido",
    to: "SJC Airport",
    date: "Tomorrow",
    time: "7:30 AM",
    seats: 2,
    price: 19,
    car: "Subaru Outback · Gray",
    tags: ["Airport", "SJC"],
    verified: false,
  },
  {
    id: "5",
    driver: "Leila A.",
    initials: "LA",
    rating: 4.9,
    rides: 29,
    from: "Escondido Village",
    to: "Oakland Airport",
    date: "Fri Apr 30",
    time: "2:00 PM",
    seats: 3,
    price: 25,
    car: "Mazda CX-5 · Red",
    tags: ["Airport", "OAK"],
    verified: true,
  },
];

const filters = ["All", "Airport", "Caltrain", "SF", "SJC", "OAK"];

export default function RidesPage() {
  const [active, setActive] = useState("All");

  const filtered = active === "All" ? rides : rides.filter((r) => r.tags.includes(active));

  return (
    <div className="flex flex-col min-h-screen pb-20">
      {/* Header */}
      <div className="bg-[#8C1515] px-5 pt-14 pb-5">
        <div className="flex items-center gap-3 mb-4">
          <Link href="/" className="text-white text-xl">←</Link>
          <p className="text-white font-semibold text-lg">Available Rides</p>
        </div>
        {/* Search bar */}
        <div className="bg-white/20 rounded-xl px-4 py-3 flex items-center gap-2">
          <span className="text-white opacity-70">🔍</span>
          <input
            type="text"
            placeholder="Where are you going?"
            className="bg-transparent text-white placeholder-white/60 text-sm flex-1 outline-none"
          />
        </div>
      </div>

      {/* Filter chips */}
      <div className="px-5 py-3 flex gap-2 overflow-x-auto bg-white border-b border-gray-100">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setActive(f)}
            className={`flex-shrink-0 px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
              active === f
                ? "bg-[#8C1515] text-white"
                : "bg-gray-100 text-gray-600"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Rides list */}
      <div className="flex flex-col gap-3 px-5 pt-4">
        <p className="text-xs text-gray-400 font-medium">{filtered.length} rides available</p>
        {filtered.map((ride) => (
          <Link key={ride.id} href={`/rides/${ride.id}`}>
            <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 active:scale-98 transition-transform">
              {/* Driver row */}
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-[#8C1515] flex items-center justify-center text-white font-bold text-sm">
                  {ride.initials}
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <p className="text-sm font-semibold text-gray-800">{ride.driver}</p>
                    {ride.verified && <span className="text-blue-500 text-xs">✓</span>}
                  </div>
                  <p className="text-xs text-gray-500">⭐ {ride.rating} · {ride.rides} rides · {ride.car}</p>
                </div>
                <div className="ml-auto text-right">
                  <p className="text-lg font-bold text-[#8C1515]">${ride.price}</p>
                  <p className="text-xs text-gray-400">per seat</p>
                </div>
              </div>

              {/* Route */}
              <div className="flex items-center gap-2 mb-3">
                <div className="flex flex-col items-center gap-1">
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500" />
                  <div className="w-0.5 h-6 bg-gray-200" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#8C1515]" />
                </div>
                <div className="flex flex-col gap-3 flex-1">
                  <p className="text-sm text-gray-700">{ride.from}</p>
                  <p className="text-sm font-medium text-gray-800">{ride.to}</p>
                </div>
              </div>

              {/* Footer */}
              <div className="flex items-center gap-2">
                <span className="text-xs text-gray-500">🗓 {ride.date} · {ride.time}</span>
                <span className="text-xs text-gray-400">·</span>
                <span className="text-xs text-gray-500">💺 {ride.seats} seat{ride.seats > 1 ? "s" : ""} left</span>
                <div className="ml-auto flex gap-1">
                  {ride.tags.map((tag) => (
                    <span key={tag} className="bg-red-50 text-[#8C1515] text-xs px-2 py-0.5 rounded-full font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Bottom nav */}
      <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-md bg-white border-t border-gray-200 flex justify-around py-3 px-4">
        <Link href="/" className="flex flex-col items-center gap-0.5">
          <span className="text-xl">🏠</span>
          <span className="text-xs text-gray-400">Home</span>
        </Link>
        <Link href="/rides" className="flex flex-col items-center gap-0.5">
          <span className="text-xl">🔍</span>
          <span className="text-xs text-[#8C1515] font-medium">Find</span>
        </Link>
        <Link href="/post" className="flex flex-col items-center gap-0.5">
          <span className="text-xl">➕</span>
          <span className="text-xs text-gray-400">Post</span>
        </Link>
        <Link href="/profile" className="flex flex-col items-center gap-0.5">
          <span className="text-xl">👤</span>
          <span className="text-xs text-gray-400">Profile</span>
        </Link>
      </div>
    </div>
  );
}
