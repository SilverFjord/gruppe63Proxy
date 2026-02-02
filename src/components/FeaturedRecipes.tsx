import RecipeCard from "./RecipeCard";
import CategoryFilter from "./CategoryFilter";
import recipePasta from "@/assets/recipe-pasta.jpg";
import recipeBowl from "@/assets/recipe-bowl.jpg";
import recipePancakes from "@/assets/recipe-pancakes.jpg";
import recipeStirfry from "@/assets/recipe-stirfry.jpg";
import recipeAvocado from "@/assets/recipe-avocado.jpg";
import recipeSoup from "@/assets/recipe-soup.jpg";

const recipes = [
  {
    id: "1",
    title: "Creamy Garlic Pasta Carbonara",
    image: recipePasta,
    author: "Emma S.",
    time: 20,
    price: "low" as const,
    rating: 4.8,
    category: "Quick Meals",
  },
  {
    id: "2",
    title: "Rainbow Buddha Bowl with Tahini",
    image: recipeBowl,
    author: "Marcus L.",
    time: 25,
    price: "medium" as const,
    rating: 4.9,
    category: "Healthy",
  },
  {
    id: "3",
    title: "Fluffy Berry Pancakes",
    image: recipePancakes,
    author: "Sofia K.",
    time: 15,
    price: "low" as const,
    rating: 4.7,
    category: "Breakfast",
  },
  {
    id: "4",
    title: "Ginger Chicken Stir Fry",
    image: recipeStirfry,
    author: "James W.",
    time: 25,
    price: "medium" as const,
    rating: 4.6,
    category: "Dinner",
  },
  {
    id: "5",
    title: "Avocado Toast with Poached Egg",
    image: recipeAvocado,
    author: "Olivia M.",
    time: 10,
    price: "low" as const,
    rating: 4.8,
    category: "Breakfast",
  },
  {
    id: "6",
    title: "Comfort Tomato Basil Soup",
    image: recipeSoup,
    author: "Noah P.",
    time: 30,
    price: "low" as const,
    rating: 4.5,
    category: "Comfort",
  },
];

const FeaturedRecipes = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-10">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Popular Recipes
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Discover what other students are cooking this week. From quick
            breakfasts to hearty dinners.
          </p>
        </div>

        {/* Category Filter */}
        <div className="mb-10">
          <CategoryFilter />
        </div>

        {/* Recipe Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {recipes.map((recipe, index) => (
            <div
              key={recipe.id}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <RecipeCard {...recipe} />
            </div>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <button className="text-primary font-medium hover:underline underline-offset-4">
            View all recipes →
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedRecipes;
