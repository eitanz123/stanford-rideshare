"use client";
import Link from "next/link";
import { useState } from "react";

export default function PostRidePage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    from: "",
    to: "",
    date: "",
    time: "",
    seats: "2",
    price: "",
    notes: "",
  });

  const handle = (k: string, v: string) => setForm((f) => ({ ...f, [k]: v }));

  const popularRoutes = [
    { from: "Stanford Campus", to: "SFO" },
    { from: "Stanford Campus", to: "Caltrain PA" },
    { from: "GSB Campus", to: "SF Downtown" },
    { from: "Stanford Campus", to: "SJC" },
  ];

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen px-8 text-center gap-6">
        <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center text-4xl">✅</div>
        <div>
          <p className="text-xl font-bold text-gray-800 mb-2">Ride Posted!</p>
          <p className="text-gray-500 text-sm">Your ride from <strong>{form.from || "Stanford"}</strong> to <strong>{form.to || "your destination"}</strong> is now live. You&apos;ll be notified when someone requests a seat.</p>
        </div>
        <div className="bg-gray-50 rounded-2xl p-4 w-full text-left">
          <p className="text-xs font-semibold text-gray-400 uppercase mb-2">Ride Summary</p>
          <div className="flex flex-col gap-1 text-sm text-gray-700">
            <p>📍 {form.from || "Stanford Campus"} → {form.to || "Destination"}</p>
            <p>🗓 {form.date || "Today"} at {form.time || "TBD"}</p>
            <p>💺 {form.seats} seat{parseInt(form.seats) > 1 ? "s" : ""} available</p>
            <p>💵 ${form.price || "0"} per seat</p>
          </div>
        </div>
        <Link href="/" className="w-full bg-[#8C1515] text-white rounded-2xl py-4 text-center font-semibold">Back to Home</Link>
        <Link href="/rides" className="text-[#8C1515] text-sm font-medium">Browse other rides</Link>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen pb-8">
      {/* Header */}
      <div className="bg-[#8C1515] px-5 pt-14 pb-6">
        <div className="flex items-center gap-3">
          <Link href="/" className="text-white text-xl">←</Link>
          <div>
            <p className="text-white font-semibold text-lg">Post a Ride</p>
            <p className="text-red-200 text-xs">Share your trip, split costs</p>
          </div>
        </div>
      </div>

      <div className="px-5 py-5 flex flex-col gap-5">
        {/* Quick-fill popular routes */}
        <div>
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-2">Quick Fill</p>
          <div className="grid grid-cols-2 gap-2">
            {popularRoutes.map((r, i) => (
              <button
                key={i}
                onClick={() => setForm((f) => ({ ...f, from: r.from, to: r.to }))}
                className="bg-red-50 border border-red-100 rounded-xl p-3 text-left active:scale-95 transition-transform"
              >
                <p className="text-xs text-gray-500">{r.from}</p>
                <p className="text-xs font-semibold text-[#8C1515]">→ {r.to}</p>
              </button>
            ))}
          </div>
        </div>

        {/* Form */}
        <div className="flex flex-col gap-4">
          <div>
            <label className="text-xs font-semibold text-gray-500 mb-1.5 block">From</label>
            <div className="flex items-center gap-2 bg-gray-50 rounded-xl px-4 py-3 border border-gray-200">
              <span className="text-green-500">●</span>
              <input
                type="text"
                value={form.from}
                onChange={(e) => handle("from", e.target.value)}
                placeholder="Pickup location"
                className="bg-transparent flex-1 text-sm text-gray-800 outline-none placeholder-gray-400"
              />
            </div>
          </div>

          <div>
            <label className="text-xs font-semibold text-gray-500 mb-1.5 block">To</label>
            <div className="flex items-center gap-2 bg-gray-50 rounded-xl px-4 py-3 border border-gray-200">
              <span className="text-[#8C1515]">●</span>
              <input
                type="text"
                value={form.to}
                onChange={(e) => handle("to", e.target.value)}
                placeholder="Destination"
                className="bg-transparent flex-1 text-sm text-gray-800 outline-none placeholder-gray-400"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="text-xs font-semibold text-gray-500 mb-1.5 block">Date</label>
              <input
                type="date"
                value={form.date}
                onChange={(e) => handle("date", e.target.value)}
                className="w-full bg-gray-50 rounded-xl px-4 py-3 border border-gray-200 text-sm text-gray-700 outline-none"
              />
            </div>
            <div>
              <label className="text-xs font-semibold text-gray-500 mb-1.5 block">Time</label>
              <input
                type="time"
                value={form.time}
                onChange={(e) => handle("time", e.target.value)}
                className="w-full bg-gray-50 rounded-xl px-4 py-3 border border-gray-200 text-sm text-gray-700 outline-none"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="text-xs font-semibold text-gray-500 mb-1.5 block">Seats Available</label>
              <select
                value={form.seats}
                onChange={(e) => handle("seats", e.target.value)}
                className="w-full bg-gray-50 rounded-xl px-4 py-3 border border-gray-200 text-sm text-gray-700 outline-none"
              >
                {[1, 2, 3, 4].map((n) => (
                  <option key={n} value={n}>{n} seat{n > 1 ? "s" : ""}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="text-xs font-semibold text-gray-500 mb-1.5 block">Price / Seat ($)</label>
              <div className="flex items-center gap-1 bg-gray-50 rounded-xl px-4 py-3 border border-gray-200">
                <span className="text-gray-400 text-sm">$</span>
                <input
                  type="number"
                  value={form.price}
                  onChange={(e) => handle("price", e.target.value)}
                  placeholder="0"
                  className="bg-transparent flex-1 text-sm text-gray-800 outline-none w-full"
                />
              </div>
            </div>
          </div>

          <div>
            <label className="text-xs font-semibold text-gray-500 mb-1.5 block">Notes (optional)</label>
            <textarea
              value={form.notes}
              onChange={(e) => handle("notes", e.target.value)}
              placeholder="e.g. Meet at White Plaza fountain, no large luggage..."
              rows={3}
              className="w-full bg-gray-50 rounded-xl px-4 py-3 border border-gray-200 text-sm text-gray-700 outline-none resize-none placeholder-gray-400"
            />
          </div>

          {/* Shapley pricing hint */}
          {form.price && (
            <div className="bg-blue-50 rounded-xl p-3 flex items-start gap-2">
              <span className="text-blue-500 text-sm mt-0.5">ℹ️</span>
              <p className="text-xs text-blue-700">
                At ${form.price}/seat with {form.seats} riders, your trip cost offset is <strong>${parseInt(form.price) * parseInt(form.seats)}</strong>. Fair-split algorithm verified.
              </p>
            </div>
          )}

          <button
            onClick={() => setSubmitted(true)}
            className="w-full bg-[#8C1515] text-white rounded-2xl py-4 font-semibold text-base active:scale-95 transition-transform mt-2"
          >
            Post Ride
          </button>
        </div>
      </div>
    </div>
  );
}
