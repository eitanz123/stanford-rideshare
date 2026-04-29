"use client";
import Link from "next/link";

const rideHistory = [
  { to: "SFO Terminal 2", date: "Apr 24", role: "Rider", price: 22, status: "completed" },
  { to: "Caltrain PA Station", date: "Apr 21", role: "Driver", price: 8, status: "completed" },
  { to: "SF Downtown", date: "Apr 18", role: "Rider", price: 28, status: "completed" },
  { to: "SJC Airport", date: "Apr 10", role: "Rider", price: 19, status: "completed" },
];

const badges = [
  { icon: "🌱", label: "Early Adopter" },
  { icon: "⭐", label: "Top Rated" },
  { icon: "✈️", label: "Frequent Flyer" },
  { icon: "🤝", label: "10 Rides" },
];

export default function ProfilePage() {
  return (
    <div className="flex flex-col min-h-screen pb-20">
      {/* Header */}
      <div className="bg-[#8C1515] px-5 pt-14 pb-10">
        <div className="flex items-center gap-3 mb-6">
          <Link href="/" className="text-white text-xl">←</Link>
          <p className="text-white font-semibold text-lg">My Profile</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center text-[#8C1515] font-bold text-xl border-2 border-red-300">
            ED
          </div>
          <div>
            <p className="text-white font-bold text-lg">Eitan Darwish</p>
            <p className="text-red-200 text-sm">MBA &apos;27 · GSB</p>
            <div className="flex items-center gap-2 mt-1">
              <span className="text-yellow-300 text-sm">⭐ 4.9</span>
              <span className="text-red-300 text-sm">·</span>
              <span className="text-red-200 text-sm">12 total rides</span>
            </div>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="-mt-4 mx-5 bg-white rounded-2xl shadow-md p-4 flex justify-around text-center mb-4">
        <div>
          <p className="text-2xl font-bold text-[#8C1515]">8</p>
          <p className="text-xs text-gray-500">As Rider</p>
        </div>
        <div className="w-px bg-gray-100" />
        <div>
          <p className="text-2xl font-bold text-[#8C1515]">4</p>
          <p className="text-xs text-gray-500">As Driver</p>
        </div>
        <div className="w-px bg-gray-100" />
        <div>
          <p className="text-2xl font-bold text-[#8C1515]">$96</p>
          <p className="text-xs text-gray-500">Saved</p>
        </div>
      </div>

      {/* Badges */}
      <div className="px-5 mb-4">
        <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-3">Badges</p>
        <div className="flex gap-3">
          {badges.map((b, i) => (
            <div key={i} className="flex flex-col items-center gap-1">
              <div className="w-12 h-12 rounded-full bg-red-50 border border-red-100 flex items-center justify-center text-xl">{b.icon}</div>
              <p className="text-xs text-gray-500 text-center w-14 leading-tight">{b.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Trust & verification */}
      <div className="px-5 mb-4">
        <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-3">Verification</p>
        <div className="bg-white rounded-2xl border border-gray-100 divide-y divide-gray-50">
          {[
            { icon: "🎓", label: "Stanford Email", status: "Verified" },
            { icon: "📱", label: "Phone Number", status: "Verified" },
            { icon: "🪪", label: "Stanford ID", status: "Verified" },
            { icon: "🚗", label: "Driver License", status: "Add" },
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-3 px-4 py-3">
              <span className="text-lg">{item.icon}</span>
              <p className="text-sm text-gray-700 flex-1">{item.label}</p>
              <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${
                item.status === "Verified"
                  ? "bg-green-100 text-green-700"
                  : "bg-gray-100 text-gray-500"
              }`}>{item.status}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Ride history */}
      <div className="px-5">
        <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-3">Recent Rides</p>
        <div className="flex flex-col gap-2">
          {rideHistory.map((r, i) => (
            <div key={i} className="bg-white rounded-2xl border border-gray-100 p-4 flex items-center gap-3">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm ${
                r.role === "Driver" ? "bg-blue-100" : "bg-red-50"
              }`}>
                {r.role === "Driver" ? "🚘" : "🧍"}
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-800">→ {r.to}</p>
                <p className="text-xs text-gray-400">{r.date} · {r.role}</p>
              </div>
              <div className="text-right">
                <p className="text-sm font-semibold text-[#8C1515]">${r.price}</p>
                <span className="text-xs text-green-600 bg-green-50 px-1.5 py-0.5 rounded-full">Done</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom nav */}
      <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-md bg-white border-t border-gray-200 flex justify-around py-3 px-4">
        <Link href="/" className="flex flex-col items-center gap-0.5">
          <span className="text-xl">🏠</span>
          <span className="text-xs text-gray-400">Home</span>
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
          <span className="text-xs text-[#8C1515] font-medium">Profile</span>
        </Link>
      </div>
    </div>
  );
}
