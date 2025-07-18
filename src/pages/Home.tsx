import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import heroImagejpg from "@/assets/hero-dishes.jpg";
import SmartStats from "@/components/SmartStats";
import DishJourney from "@/components/DishJourney";
import ZeroWasteMeter from "@/components/ZeroWasteMeter";
import UnboxingAnimation from "@/components/UnboxingAnimation";
import LifecycleSlider from "@/components/LifecycleSlider";
import HybitsDNA from "@/components/HybitsDNA";

const Home = () => {
  const [counters, setCounters] = useState({
    plastic: 0,
    dishes: 0,
  });
  const navigate = useNavigate();

  // Animate counters on load
  useEffect(() => {
    const animateCounter = (target: number, key: keyof typeof counters) => {
      let current = 0;
      const increment = target / 50;
      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          current = target;
          clearInterval(timer);
        }
        setCounters(prev => ({ ...prev, [key]: Math.floor(current) }));
      }, 50);
    };

    const timer = setTimeout(() => {
      animateCounter(10000, 'plastic');
      animateCounter(250000, 'dishes');
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const testimonials = [
    {
      name: "Priya Sharma",
      title: "Event Manager, Green Events Co.",
      quote: "Hybits transformed our sustainability goals. Zero plastic waste at our last conference!"
    },
    {
      name: "Rajesh Kumar",
      title: "Food Court Owner",
      quote: "The sterilization quality is outstanding. Our customers love the eco-friendly approach."
    },
    {
      name: "Dr. Anjali Patel",
      title: "Hospital Administrator",
      quote: "Perfect for our cafeteria. Hygienic, sustainable, and hassle-free operations."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Smart Stats Banner */}
      <SmartStats />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-background/80 to-secondary py-20 lg:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                  It's not just clean.{" "}
                  <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                    It's Hybits clean.
                  </span>
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  India's first reusable dishware & centralized dishwashing solution
                </p>
              </div>

              {/* Value Propositions */}
              <div className="grid sm:grid-cols-3 gap-6">
                <div className="text-center p-4 rounded-lg bg-card border border-primary">
                  <div className="text-2xl mb-2">🧼</div>
                  <h3 className="font-semibold text-sm">100% Sterilized Dishes</h3>
                </div>
                <div className="text-center p-4 rounded-lg bg-card border border-primary">
                  <div className="text-2xl mb-2">♻️</div>
                  <h3 className="font-semibold text-sm">90% Less Plastic Waste</h3>
                </div>
                <div className="text-center p-4 rounded-lg bg-card border border-primary">
                  <div className="text-2xl mb-2">🚚</div>
                  <h3 className="font-semibold text-sm">Zero Hassle Pickup & Delivery</h3>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-3 px-8 rounded-xl transition-smooth transform hover:scale-105 shadow-lg"
                  onClick={() => navigate("/contact")}
                >
                  Get a Quote
                </Button>
              </div>
            </div>

            <div className="relative">
              <img
                src={heroImagejpg}
                srcSet={`${heroImagejpg} 584w`}
                sizes="(max-width: 600px) 320px, 584px"
                alt="UV-sterilized dishes"
                className="w-full h-auto rounded-2xl shadow-lg animate-float"
                fetchPriority="high"
              />
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full animate-pulse-glow"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Counters Section */}
      <section className="py-16 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="text-center space-y-2">
              <div className="counter">{counters.plastic.toLocaleString()}+ kg</div>
              <p className="text-muted-foreground">Plastic Waste Saved</p>
            </div>
            <div className="text-center space-y-2">
              <div className="counter">{counters.dishes.toLocaleString()}</div>
              <p className="text-muted-foreground">Dishes Washed</p>
            </div>
          </div>
        </div>
      </section>

      {/* Zero Waste Meter Section */}
      <section className="py-12 bg-background">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <ZeroWasteMeter />
        </div>
      </section>

      {/* Unboxing Animation */}
      <UnboxingAnimation />

      {/* Lifecycle Loop Slider */}
      <LifecycleSlider />

      {/* Hybits DNA Section */}
      <HybitsDNA />

      {/* Testimonials Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Trusted by events, food courts, and institutions across India
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6 bg-card border border-primary shadow-md">
                <blockquote className="text-muted-foreground mb-4 italic">
                  "{testimonial.quote}"
                </blockquote>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;