import React, { useState } from "react";

const DESTINATIONS = [
  { id: 1, name: "Jaipur", price: 4999, image: "https://images.unsplash.com/photo-1599661046289-e31897846e41" },
  { id: 2, name: "Goa", price: 6999, image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e" },
  { id: 3, name: "Manali", price: 5999, image: "https://images.unsplash.com/photo-1605649487212-47bdab064df7" },
  { id: 4, name: "Ladakh", price: 10999, image: "https://images.unsplash.com/photo-1593693411515-c20261bcad6e" },
  { id: 5, name: "Kerala", price: 7999, image: "https://images.unsplash.com/photo-1593693397690-362cb9666fc2" },
  { id: 6, name: "Udaipur", price: 5499, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQX6GwKzso8-DW9klFa6XZJTId2lHxeivt9Rg&s" },
  { id: 7, name: "Andaman", price: 12999, image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e" },
  { id: 8, name: "Darjeeling", price: 5799, image: "https://trekinsikkim.in/_next/image?url=https%3A%2F%2Fupload.trekinsikkim.in%2Fuploads%2Fmedia-gallery%2Ffiles-1748685567719-977695027&w=3840&q=75" },
  { id: 9, name: "Rishikesh", price: 5299, image: "https://upload.wikimedia.org/wikipedia/commons/7/74/Trayambakeshwar_Temple_VK.jpg" },
  { id: 10, name: "Varanasi", price: 4499, image: "https://images.unsplash.com/photo-1561361513-2d000a50f0dc" }
];

export default function TravelApp() {
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const addToCart = (item) => {
    if (cart.find(c => c.id === item.id)) return;
    setCart([...cart, item]);
  };

  const removeFromCart = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="min-h-screen bg-gray-50">

      <div className="flex justify-between items-center p-4 bg-white shadow sticky top-0 z-10">
        <h1 className="text-xl font-bold">✈️ TravelFind</h1>

        <div className="relative cursor-pointer text-3xl" onClick={() => setShowCart(true)}>
          🧳
          {cart.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs px-2 rounded-full">
              {cart.length}
            </span>
          )}
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-5 p-5">
        {DESTINATIONS.map(d => (
          <div key={d.id} className="bg-white rounded-xl shadow p-3">
            <img src={d.image} className="h-40 w-full object-cover rounded-lg" />
            <h3 className="mt-2 font-bold">{d.name}</h3>
            <p>₹{d.price}</p>

            <button
              onClick={() => addToCart(d)}
              disabled={cart.some(c => c.id === d.id)}
              className={`mt-2 w-full py-2 rounded ${cart.some(c => c.id === d.id)
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-blue-600 text-white"
                }`}
            >
              {cart.some(c => c.id === d.id) ? "Added" : "Book Now"}
            </button>
          </div>
        ))}
      </div>

      <div
        className={`fixed inset-0 bg-black/40 transition-opacity duration-300 ${showCart ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
        onClick={() => setShowCart(false)}
      />

      <div
        className={`fixed top-0 right-0 h-full w-80 bg-white shadow-lg transform transition-transform duration-300 z-20 ${showCart ? "translate-x-0" : "translate-x-full"
          }`}
      >
        <div className="p-4 border-b flex justify-between items-center">
          <h2 className="font-bold text-lg">Your Trips</h2>
          <button onClick={() => setShowCart(false)}>❌</button>
        </div>

        <div className="p-4 space-y-4 overflow-y-auto h-[70%]">
          {cart.length === 0 ? (
            <p>No bookings</p>
          ) : (
            cart.map(item => (
              <div key={item.id} className="flex items-center justify-between">
                <div className="flex gap-3 items-center">
                  <img src={item.image} className="w-16 h-16 object-cover rounded-lg" />
                  <div>
                    <h4 className="font-semibold">{item.name}</h4>
                    <p className="text-sm text-gray-600">₹{item.price}</p>
                  </div>
                </div>

                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-500 hover:text-red-700 text-lg">❌
                </button>
              </div>
            ))
          )}
        </div>

        <div className="absolute bottom-0 w-full p-4 border-t bg-white">
          <div className="flex justify-between font-bold mb-3">
            <span>Total</span>
            <span>₹{total}</span>
          </div>

          <button className="w-full py-3 bg-green-600 text-white rounded-xl">
            Checkout
          </button>
        </div>
      </div>

    </div>
  );
}