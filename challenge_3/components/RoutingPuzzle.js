"use client";
import { useState } from "react";

export default function RoutingPuzzle() {
  const [path, setPath] = useState("");

  const routes = {
    "/home": "🏠 Home Piece",
    "/about": "ℹ️ About Piece",
    "/contact": "📞 Contact Piece",
    "/product/[id]": "📦 Dynamic Product Piece",
  };

  const getPiece = (p) => {
    if (routes[p]) return routes[p];
    if (p.startsWith("/product/")) return routes["/product/[id]"];
    return "❌ 404 Broken Piece";
  };

  return (
    <div className="p-6 max-w-md mx-auto text-center">
      <h2 className="text-xl font-bold mb-4">🧩 Routing Puzzle</h2>
      <p>Type a path to see which puzzle piece fits:</p>
      <input
        type="text"
        placeholder="/about or /product/42"
        value={path}
        onChange={(e) => setPath(e.target.value)}
        className="border p-2 rounded w-full mt-3"
      />
      <div className="mt-6 p-4 border rounded bg-gray-50">
        <p className="text-lg">{getPiece(path)}</p>
      </div>
    </div>
  );
}
