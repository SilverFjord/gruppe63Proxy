import { Link } from "react-router-dom";
import { ChefHat, Instagram, Twitter, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <ChefHat className="h-7 w-7 text-primary" />
              <span className="font-display text-xl font-bold">
                Student Kitchen
              </span>
            </Link>
            <p className="text-background/70 text-sm mb-4">
              Affordable, healthy recipes for busy students. Made by the
              community, for the community.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="text-background/70 hover:text-primary transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-background/70 hover:text-primary transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-background/70 hover:text-primary transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Explore</h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li>
                <Link to="/recipes" className="hover:text-primary transition-colors">
                  All Recipes
                </Link>
              </li>
              <li>
                <Link to="/categories" className="hover:text-primary transition-colors">
                  Categories
                </Link>
              </li>
              <li>
                <Link to="/popular" className="hover:text-primary transition-colors">
                  Popular This Week
                </Link>
              </li>
              <li>
                <Link to="/new" className="hover:text-primary transition-colors">
                  New Recipes
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-semibold mb-4">Categories</h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li>
                <Link to="/category/quick" className="hover:text-primary transition-colors">
                  Quick Meals
                </Link>
              </li>
              <li>
                <Link to="/category/budget" className="hover:text-primary transition-colors">
                  Budget Friendly
                </Link>
              </li>
              <li>
                <Link to="/category/vegetarian" className="hover:text-primary transition-colors">
                  Vegetarian
                </Link>
              </li>
              <li>
                <Link to="/category/healthy" className="hover:text-primary transition-colors">
                  Healthy
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li>
                <Link to="/about" className="hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/faq" className="hover:text-primary transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/guidelines" className="hover:text-primary transition-colors">
                  Community Guidelines
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-background/60">
            © 2026 Student Kitchen. Made with ❤️ for students.
          </p>
          <div className="flex gap-6 text-sm text-background/60">
            <Link to="/privacy" className="hover:text-primary transition-colors">
              Privacy
            </Link>
            <Link to="/terms" className="hover:text-primary transition-colors">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
