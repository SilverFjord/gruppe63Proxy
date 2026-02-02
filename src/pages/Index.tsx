import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturedRecipes from "@/components/FeaturedRecipes";
import HowItWorks from "@/components/HowItWorks";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <FeaturedRecipes />
      <HowItWorks />
      <Footer />
    </div>
  );
};

export default Index;
