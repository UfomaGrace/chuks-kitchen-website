import React, { useState } from "react";

export default function MenuCategories() {
  const categories = [
    "Popular",
    "Jollof Rice & Entrees",
    "Swallow & Soups",
    "Grills & sides",
    "Beverages",
    "Desserts",
  ];

  const [activeCategory, setActiveCategory] = useState("Popular");

  return (
    <div className="bg-gray-200 py-6 lg:py-12 lg:px-18 px-4 rounded-md w-full">
      <div className="bg-white rounded-2xl p-4">
        {/* Title */}
      <h3 className="text-lg font-bold mb-2">Menu Categories</h3>

      {/* List */}
      <ul className="space-y-0.5">
        {categories.map((item) => (
          <li
            key={item}
            onClick={() => setActiveCategory(item)}
            className={`px-3 py-2 rounded-md cursor-pointer transition-all ${
              activeCategory === item
                ? "bg-orange-200 text-black font-medium"
                : "hover:bg-gray-200"
            }`}
          >
            {item}
          </li>
        ))}
      </ul>
      </div>
    </div>
  );
}