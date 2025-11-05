import React, { useState } from "react";

const DESTINATIONS = [
  { id: 1, name: "Jaipur", price: 4999, image: "https://images.unsplash.com/photo-1603264040594-0e7b0e77c4e7" },
  { id: 2, name: "Goa", price: 6999, image: "https://images.unsplash.com/photo-1560930950-1401bcd2c974" },
  { id: 3, name: "Manali", price: 5999, image: "https://images.unsplash.com/photo-1612459284971-95c6f52ff5f0" },
  { id: 4, name: "Ladakh", price: 10999, image: "https://images.unsplash.com/photo-1552728089-57bdde30beb3" },
  { id: 5, name: "Kerala", price: 7999, image: "https://images.unsplash.com/photo-1560343090-f0409e92791a" },
  { id: 6, name: "Udaipur", price: 5499, image: "https://images.unsplash.com/photo-1580894906475-0b09da7d3d9b" },
  { id: 7, name: "Andaman", price: 12999, image: "https://images.unsplash.com/photo-1597165821826-8185b9e17138" },
  { id: 8, name: "Darjeeling", price: 5799, image: "https://images.unsplash.com        /photo-1617968928935-7955afb3df35" },
  { id: 9, name: "Rishikesh", price: 5299, image: "https://images.unsplash.com/photo-1562157873-818bc0726f68" },
  { id: 10, name: "Varanasi", price: 4499, image: "https://images.unsplash.com/photo-1532453288672-3a27e9be9efd" },
  { id: 11, name: "Mumbai", price: 6499, image: "https://images.unsplash.com/photo-1531811245198-76f44d7c3621" },
  { id: 12, name: "Shimla", price: 5599, image: "https://images.unsplash.com/photo-1616259658395-3bb2d0bbd10e" }
];

export default function TravelApp() {
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");

  const list = [...DESTINATIONS]
    .filter(d => d.name.toLowerCase().includes(search.toLowerCase()))
    .sort((a, b) =>
      sort === "low" ? a.price - b.price :
      sort === "high" ? b.price - a.price : 0
    );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white text-gray-900">

      {/* Navbar */}
      <div className="backdrop-blur-xl bg-white/80 border-b shadow-sm px-6 py-4 text-2xl font-bold sticky top-0 z-10 flex items-center">
        ✈️ <span className="ml-1">Travel</span><span className="text-blue-600">Find</span>
      </div>

      {/* Search + Sort */}
      <div className="max-w-5xl mx-auto px-4 py-6 flex flex-col sm:flex-row gap-3">
        <div className="flex items-center w-full bg-white/70 backdrop-blur-md border rounded-full px-4 shadow-sm h-12">
          <span className="text-gray-500 mr-2">🔍</span>
          <input
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Search destination..."
            className="flex-1 bg-transparent outline-none"
          />
        </div>

        <select
          onChange={e => setSort(e.target.value)}
          className="h-12 px-4 rounded-full border shadow-sm bg-white/70 backdrop-blur-md focus:ring-2 focus:ring-blue-400"
        >
          <option value="">Sort by Price</option>
          <option value="low">Low → High</option>
          <option value="high">High → Low</option>
        </select>
      </div>

      {/* Cards */}
      <div className="max-w-5xl mx-auto px-4 pb-10 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
        {list.map(d => (
          <div
            key={d.id}
            className="rounded-2xl overflow-hidden bg-white shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
          >
            <div className="relative group">
              <img src={d.image} alt={d.name} className="h-52 w-full object-cover group-hover:scale-110 transition duration-500" />
              <span className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold shadow">
                ₹{d.price}
              </span>
            </div>

            <div className="p-4 space-y-3">
              <h3 className="text-lg font-bold">{d.name}</h3>

              <button
                onClick={() => alert(`Booked: ${d.name}`)}
                className="w-full h-11 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium shadow-md hover:shadow-lg hover:-translate-y-0.5 transition"
              >
                Book Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
