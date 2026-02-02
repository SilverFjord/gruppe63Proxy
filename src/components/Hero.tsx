import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-food.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Colorful healthy food"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/40" />
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-4">
        <div className="max-w-2xl">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-6 animate-fade-in">
            🍳 Made by students, for students
          </span>
          
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight animate-fade-in text-balance">
            Delicious Recipes for the{" "}
            <span className="text-primary">Student Budget</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 animate-fade-in max-w-xl">
            Quick, affordable, and nutritious meals shared by students around
            the world. Eat well without breaking the bank.
          </p>

          {/* Search Bar */}
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search for recipes, ingredients..."
                className="w-full h-14 pl-12 pr-4 rounded-xl border-2 border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
              />
            </div>
            <Button variant="hero" size="xl">
              Find Recipes
            </Button>
          </div>

          {/* Quick Stats */}
          <div className="flex flex-wrap gap-8 mt-10 animate-fade-in">
            <div>
              <p className="text-2xl font-bold text-foreground">2,500+</p>
              <p className="text-sm text-muted-foreground">Recipes</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-foreground">15k+</p>
              <p className="text-sm text-muted-foreground">Students</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-foreground">4.8★</p>
              <p className="text-sm text-muted-foreground">Avg. Rating</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
