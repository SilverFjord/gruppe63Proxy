import { Clock, DollarSign, Star, Heart } from "lucide-react";
import { useState } from "react";

interface RecipeCardProps {
  id: string;
  title: string;
  image: string;
  author: string;
  time: number;
  price: "low" | "medium" | "high";
  rating: number;
  category: string;
}

const RecipeCard = ({
  title,
  image,
  author,
  time,
  price,
  rating,
  category,
}: RecipeCardProps) => {
  const [isLiked, setIsLiked] = useState(false);

  const priceIndicator = {
    low: { label: "Budget", dots: 1 },
    medium: { label: "Moderate", dots: 2 },
    high: { label: "Splurge", dots: 3 },
  };

  return (
    <article className="group bg-card rounded-xl overflow-hidden shadow-card hover:shadow-hover transition-all duration-300 hover:-translate-y-1">
      {/* Image Container */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        
        {/* Category Badge */}
        <span className="absolute top-3 left-3 bg-card/90 backdrop-blur-sm text-foreground text-xs font-medium px-3 py-1 rounded-full">
          {category}
        </span>
        
        {/* Like Button */}
        <button
          onClick={() => setIsLiked(!isLiked)}
          className="absolute top-3 right-3 p-2 bg-card/90 backdrop-blur-sm rounded-full transition-all hover:scale-110"
        >
          <Heart
            className={`h-4 w-4 transition-colors ${
              isLiked ? "fill-primary text-primary" : "text-muted-foreground"
            }`}
          />
        </button>
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="font-display text-lg font-semibold text-foreground mb-1 line-clamp-2 group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-sm text-muted-foreground mb-3">by {author}</p>

        {/* Meta Info */}
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center gap-3">
            {/* Time */}
            <div className="flex items-center gap-1 text-muted-foreground">
              <Clock className="h-4 w-4" />
              <span>{time} min</span>
            </div>

            {/* Price */}
            <div className="flex items-center gap-1 text-muted-foreground">
              {Array.from({ length: 3 }).map((_, i) => (
                <DollarSign
                  key={i}
                  className={`h-3 w-3 ${
                    i < priceIndicator[price].dots
                      ? "text-secondary"
                      : "text-muted"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Rating */}
          <div className="flex items-center gap-1">
            <Star className="h-4 w-4 fill-accent text-accent" />
            <span className="font-medium text-foreground">{rating.toFixed(1)}</span>
          </div>
        </div>
      </div>
    </article>
  );
};

export default RecipeCard;
