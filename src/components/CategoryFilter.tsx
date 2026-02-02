import { useState } from "react";

const categories = [
  { id: "all", label: "All Recipes", emoji: "🍽️" },
  { id: "quick", label: "Under 15 min", emoji: "⚡" },
  { id: "budget", label: "Budget Friendly", emoji: "💰" },
  { id: "healthy", label: "Healthy", emoji: "🥗" },
  { id: "vegetarian", label: "Vegetarian", emoji: "🥬" },
  { id: "vegan", label: "Vegan", emoji: "🌱" },
  { id: "comfort", label: "Comfort Food", emoji: "🍝" },
  { id: "breakfast", label: "Breakfast", emoji: "🍳" },
];

const CategoryFilter = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  return (
    <div className="flex flex-wrap gap-2 justify-center">
      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => setActiveCategory(category.id)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
            activeCategory === category.id
              ? "bg-primary text-primary-foreground shadow-soft"
              : "bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground"
          }`}
        >
          <span className="mr-1.5">{category.emoji}</span>
          {category.label}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;
