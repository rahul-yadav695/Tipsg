import React, { useState } from "react";

const PRODUCTS = [
    { id: 1, name: "Wireless Headphones", price: 3499, image: "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Rockerz_650_pp_renders_main_banner.124.png?v=1740735495" },
    { id: 2, name: "Smart Watch", price: 4999, image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9" },
    { id: 3, name: "Men's Sneakers", price: 2599, image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff" },
    { id: 4, name: "Minimal Lamp", price: 1899, image: "https://images.unsplash.com/photo-1484101403633-562f891dc89a" },
    { id: 5, name: "Yoga Mat", price: 1399, image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b" },
    { id: 6, name: "Hardcover Novel", price: 599, image: "https://images.unsplash.com/photo-1519681393784-d120267933ba" },
    { id: 7, name: "Smartphone Tripod", price: 1099, image: "https://images.unsplash.com/photo-1583223969211-7a886f5a3e5a" },
    { id: 8, name: "Gaming Mouse", price: 1499, image: "https://images.unsplash.com/photo-1587202372775-98926bb047ba" },
    { id: 9, name: "Duffle Bag", price: 1799, image: "https://images.unsplash.com/photo-1547949003-9792a18a2601" },
    { id: 10, name: "Cricket Bat", price: 3499, image: "https://trogoncricket.com/cdn/shop/articles/Cricket_Bat_buyers_guide_new_1f0d0cae-d085-4484-8033-d44182561c15.png?v=1759922624&width=1100" },
    { id: 11, name: "Bluetooth Speaker", price: 2299, image: "https://images.unsplash.com/photo-1585386959984-a4155224a1ad" },
    { id: 12, name: "Laptop Stand", price: 1299, image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3" }
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
        setCart((prev) => prev.flatMap((i) => i.id === id ? (i.qty > 1 ? [{ ...i, qty: i.qty - 1 }] : []) : [i]))
    };
    const removeItem = (id) => setCart((prev) => prev.filter((i) => i.id !== id));

    const total = cart.reduce((sum, i) => sum + i.price * i.qty, 0);

    return (
        <div className="p-6 bg-gray-100 min-h-screen">
 
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-xl font-bold">Mini Store 🛍️</h1>
                <button onClick={() => setOpen(true)} className="relative px-4 py-2 border rounded">
                    🛒
                    {cart.length > 0 && (
                        <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs px-2 rounded-full">
                            {cart.reduce((s, i) => s + i.qty, 0)}
                        </span>
                    )}
                </button>
            </div> 
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
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
                                        <button onClick={() => removeItem(item.id)} className="text-red-600 text-xs">Remove</button>
                                    </div>
                                ))
                            )}
                        </div>

                        <div className="pt-3 border-t mt-2">
                            <p className="font-semibold mb-2">Total: ₹{total}</p>
                            <button className="w-full py-2 bg-black text-white rounded">Checkout</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
