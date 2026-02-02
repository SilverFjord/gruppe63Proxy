import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Search, Menu, X, User, Heart, ChefHat } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-card/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <ChefHat className="h-8 w-8 text-primary" />
            <span className="font-display text-xl font-bold text-foreground">
              Student Kitchen
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              to="/recipes"
              className="text-muted-foreground hover:text-foreground transition-colors font-medium"
            >
              Recipes
            </Link>
            <Link
              to="/categories"
              className="text-muted-foreground hover:text-foreground transition-colors font-medium"
            >
              Categories
            </Link>
            <Link
              to="/about"
              className="text-muted-foreground hover:text-foreground transition-colors font-medium"
            >
              About
            </Link>
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-3">
            <Button variant="ghost" size="icon">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <Heart className="h-5 w-5" />
            </Button>
            <Link to="/auth">
              <Button variant="outline" size="sm">
                <User className="h-4 w-4" />
                Sign In
              </Button>
            </Link>
            <Button variant="hero" size="sm">
              Share Recipe
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-foreground" />
            ) : (
              <Menu className="h-6 w-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border animate-fade-in">
            <div className="flex flex-col gap-4">
              <Link
                to="/recipes"
                className="text-foreground font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Recipes
              </Link>
              <Link
                to="/categories"
                className="text-foreground font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Categories
              </Link>
              <Link
                to="/about"
                className="text-foreground font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <hr className="border-border" />
              <div className="flex gap-3">
                <Link to="/auth" className="flex-1">
                  <Button variant="outline" className="w-full">
                    Sign In
                  </Button>
                </Link>
                <Button variant="hero" className="flex-1">
                  Share Recipe
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
