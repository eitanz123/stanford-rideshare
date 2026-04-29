"use client";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <div className="bg-[#8C1515] px-5 pt-14 pb-8">
        <div className="flex items-center gap-2 mb-1">
          <span className="text-white text-2xl">🚗</span>
          <span className="text-white font-semibold text-lg tracking-wide">Stanford RideShare</span>
        </div>
        <p className="text-red-200 text-sm">Ride smarter with your Stanford community</p>
      </div>

      {/* Profile bar */}
      <div className="bg-white px-5 py-3 flex items-center gap-3 border-b border-gray-100 shadow-sm">
        <div className="w-9 h-9 rounded-full bg-[#8C1515] flex items-center justify-center text-white font-bold text-sm">ED</div>
        <div>
          <p className="text-sm font-medium text-gray-800">Eitan Darwish</p>
          <p className="text-xs text-gray-500">MBA &apos;27 · ⭐ 4.9 · 12 rides</p>
        </div>
        <Link href="/profile" className="ml-auto text-[#8C1515] text-xs font-medium">Profile →</Link>
      </div>

      {/* Main CTAs */}
      <div className="px-5 pt-6 pb-4 flex flex-col gap-4">
        <Link href="/rides" className="block bg-[#8C1515] rounded-2xl p-5 text-white shadow-md active:scale-95 transition-transform">
          <div className="flex items-center gap-3">
            <span className="text-3xl">🔍</span>
            <div>
              <p className="font-semibold text-lg">Find a Ride</p>
              <p className="text-red-200 text-sm">Browse available rides near you</p>
            </div>
            <span className="ml-auto text-2xl">›</span>
          </div>
        </Link>

        <Link href="/post" className="block bg-white border-2 border-[#8C1515] rounded-2xl p-5 shadow-sm active:scale-95 transition-transform">
          <div className="flex items-center gap-3">
            <span className="text-3xl">🚘</span>
            <div>
              <p className="font-semibold text-lg text-[#8C1515]">Offer a Ride</p>
              <p className="text-gray-500 text-sm">Share your trip, split the cost</p>
            </div>
            <span className="ml-auto text-2xl text-[#8C1515]">›</span>
          </div>
        </Link>
      </div>

      {/* Upcoming ride */}
      <div className="px-5 pt-2 pb-4">
        <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-3">Your Upcoming Ride</p>
        <div className="bg-white rounded-2xl border border-gray-100 p-4 shadow-sm">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-lg">✈️</div>
            <div className="flex-1">
              <p className="text-sm font-semibold text-gray-800">Stanford → SFO</p>
              <p className="text-xs text-gray-500">Tomorrow · 6:30 AM · 3 seats left</p>
              <div className="flex gap-1 mt-2">
                <span className="bg-green-100 text-green-700 text-xs px-2 py-0.5 rounded-full font-medium">Confirmed</span>
                <span className="bg-gray-100 text-gray-600 text-xs px-2 py-0.5 rounded-full">$18/seat</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats strip */}
      <div className="px-5 pb-4">
        <div className="bg-red-50 rounded-2xl p-4 flex justify-around text-center">
          <div>
            <p className="text-2xl font-bold text-[#8C1515]">247</p>
            <p className="text-xs text-gray-500">Active riders</p>
          </div>
          <div className="w-px bg-red-200" />
          <div>
            <p className="text-2xl font-bold text-[#8C1515]">38</p>
            <p className="text-xs text-gray-500">Rides today</p>
          </div>
          <div className="w-px bg-red-200" />
          <div>
            <p className="text-2xl font-bold text-[#8C1515]">$12</p>
            <p className="text-xs text-gray-500">Avg cost</p>
          </div>
        </div>
      </div>

      {/* Popular routes */}
      <div className="px-5 pb-8">
        <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-3">Popular Routes</p>
        <div className="flex gap-2 overflow-x-auto pb-1">
          {["→ SFO", "→ Caltrain", "→ SF Downtown", "→ SJC", "→ Oakland"].map((route) => (
            <Link key={route} href="/rides" className="flex-shrink-0 bg-white border border-gray-200 rounded-full px-4 py-2 text-sm text-gray-700 font-medium shadow-sm">
              Stanford {route}
            </Link>
          ))}
        </div>
      </div>

      {/* Bottom nav */}
      <div className="sticky bottom-0 bg-white border-t border-gray-200 flex justify-around py-3 px-4">
        <Link href="/" className="flex flex-col items-center gap-0.5">
          <span className="text-xl">🏠</span>
          <span className="text-xs text-[#8C1515] font-medium">Home</span>
        </Link>
        <Link href="/rides" className="flex flex-col items-center gap-0.5">
          <span className="text-xl">🔍</span>
          <span className="text-xs text-gray-400">Find</span>
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
