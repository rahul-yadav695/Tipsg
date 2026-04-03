import React, { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";

const PRODUCTS = [
  { id: 1, name: "Wireless Headphones", price: 3499, image: "https://source.unsplash.com/400x400/?wireless-headphones" },
  { id: 2, name: "Smart Watch", price: 4999, image: "https://source.unsplash.com/400x400/?smartwatch" },
  { id: 3, name: "Men's Sneakers", price: 2599, image: "https://source.unsplash.com/400x400/?sneakers" },
  { id: 4, name: "Minimal Lamp", price: 1899, image: "https://source.unsplash.com/400x400/?lamp" },
  { id: 5, name: "Yoga Mat", price: 1399, image: "https://source.unsplash.com/400x400/?yoga-mat" },
  { id: 6, name: "Hardcover Novel", price: 599, image: "https://source.unsplash.com/400x400/?book" }
];

export default function App() {
  const [cart, setCart] = useState([]);
  const [open, setOpen] = useState(false);

  const addToCart = (p) => {
    setCart((prev) => {
      const exists = prev.find((item) => item.id === p.id);
      if (exists) {
        return prev.map((item) =>
          item.id === p.id ? { ...item, qty: item.qty + 1 } : item
        );
      }
      return [...prev, { ...p, qty: 1 }];
    });
  };

  const inc = (id) => {
    setCart((prev) => prev.map((i) => i.id === id ? { ...i, qty: i.qty + 1 } : i))
  };

  const dec = (id) => {
    setCart((prev) =>
      prev.flatMap((i) =>
        i.id === id ? (i.qty > 1 ? [{ ...i, qty: i.qty - 1 }] : []) : [i]
      )
    );
  };

  const removeItem = (id) => setCart((prev) => prev.filter((i) => i.id !== id));

  const total = cart.reduce((sum, i) => sum + i.price * i.qty, 0);

  return (
    <div className="bg-gray-100 min-h-screen">

      {/* ✅ NAVBAR */}
      <div className="flex justify-between items-center p-4 bg-blue-500 text-white">
        <h1 className="text-xl font-bold">Mini Store 🛍️</h1>

        <div onClick={() => setOpen(true)} className="relative cursor-pointer text-2xl text-red-500">
          <FaShoppingCart size={22} />

          {cart.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs px-2 rounded-full">
              {cart.reduce((s, i) => s + i.qty, 0)}
            </span>
          )}
        </div>
      </div>

      {/* ✅ PRODUCTS */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-6">
        {PRODUCTS.map((p) => (
          <div key={p.id} className="bg-white p-3 rounded shadow text-center">
            <img src={p.image} className="h-36 w-full object-cover rounded" />
            <h2 className="font-semibold mt-2">{p.name}</h2>
            <p className="text-gray-600">₹{p.price}</p>

            <button
              onClick={() => addToCart(p)}
              className="mt-2 w-full py-2 bg-black text-white rounded"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      {/* ✅ CART DRAWER */}
      {open && (
        <div className="fixed inset-0 bg-black/40 flex justify-end" onClick={() => setOpen(false)}>
          <div onClick={(e) => e.stopPropagation()} className="w-80 h-full bg-white p-4 flex flex-col">

            <div className="flex justify-between items-center mb-3">
              <h2 className="text-lg font-semibold">Cart</h2>
              <button onClick={() => setOpen(false)}>✖</button>
            </div>

            <div className="flex-1 overflow-y-auto space-y-2">
              {cart.length === 0 ? (
                <p className="text-gray-500 text-center mt-10">Cart is empty</p>
              ) : (
                cart.map((item) => (
                  <div key={item.id} className="border p-2 rounded flex gap-2 items-center">
                    <img src={item.image} className="w-14 h-14 rounded object-cover" />

                    <div className="flex-1">
                      <p className="text-sm font-medium">{item.name}</p>
                      <p className="text-sm">₹{item.price}</p>

                      <div className="flex gap-2 mt-1 items-center">
                        <button onClick={() => dec(item.id)} className="px-2 border rounded">-</button>
                        <span>{item.qty}</span>
                        <button onClick={() => inc(item.id)} className="px-2 border rounded">+</button>
                      </div>
                    </div>

                    <button onClick={() => removeItem(item.id)} className="text-red-600 text-xs">
                      Remove
                    </button>
                  </div>
                ))
              )}
            </div>

            <div className="pt-3 border-t mt-2">
              <p className="font-semibold mb-2">Total: ₹{total}</p>
              <button className="w-full py-2 bg-black text-white rounded">
                Checkout
              </button>
            </div>

          </div>
        </div>
      )}
    </div>
  );
}