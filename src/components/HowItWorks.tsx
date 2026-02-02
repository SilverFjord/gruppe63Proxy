import { Search, BookOpen, Share2, Heart } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Find Recipes",
    description:
      "Search by ingredients, budget, or time. Filter to match your dietary needs.",
  },
  {
    icon: BookOpen,
    title: "Cook & Enjoy",
    description:
      "Follow easy step-by-step instructions with helpful tips from fellow students.",
  },
  {
    icon: Share2,
    title: "Share Your Own",
    description:
      "Got a great recipe? Share it with the community and help other students eat well.",
  },
  {
    icon: Heart,
    title: "Save Favorites",
    description:
      "Build your personal cookbook with recipes you love and access them anytime.",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-16 md:py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            How It Works
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Join thousands of students sharing and discovering affordable meals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="text-center animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 text-primary mb-4">
                <step.icon className="h-7 w-7" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                {step.title}
              </h3>
              <p className="text-muted-foreground text-sm">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
