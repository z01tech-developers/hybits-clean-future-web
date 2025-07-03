import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import heroImage from "@/assets/hero-dishes.jpg";

const Home = () => {
  const [counters, setCounters] = useState({
    plastic: 0,
    dishes: 0,
  });

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
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-background via-muted/20 to-accent/10 py-20 lg:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                  It's not just clean.{" "}
                  <span className="eco-gradient bg-clip-text text-transparent">
                    It's Hybits clean.
                  </span>
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  India's first reusable dishware & centralized dishwashing solution
                </p>
              </div>

              {/* Value Propositions */}
              <div className="grid sm:grid-cols-3 gap-6">
                <div className="text-center p-4 rounded-lg bg-accent/20 border border-accent">
                  <div className="text-2xl mb-2">🧼</div>
                  <h3 className="font-semibold text-sm">100% Sterilized Dishes</h3>
                </div>
                <div className="text-center p-4 rounded-lg bg-accent/20 border border-accent">
                  <div className="text-2xl mb-2">♻️</div>
                  <h3 className="font-semibold text-sm">90% Less Plastic Waste</h3>
                </div>
                <div className="text-center p-4 rounded-lg bg-accent/20 border border-accent">
                  <div className="text-2xl mb-2">🚚</div>
                  <h3 className="font-semibold text-sm">Zero Hassle Pickup & Delivery</h3>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="btn-eco-primary">Get a Quote</Button>
                <Button className="btn-eco-secondary">Book a Demo</Button>
              </div>
            </div>

            <div className="relative">
              <img
                src={heroImage}
                alt="UV-sterilized dishes"
                className="w-full h-auto rounded-2xl eco-shadow animate-float"
              />
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full animate-pulse-glow"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-accent/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 text-center">
            <div className="space-y-2">
              <div className="counter">{counters.plastic.toLocaleString()}+ kg</div>
              <p className="text-muted-foreground">Plastic Waste Saved</p>
            </div>
            <div className="space-y-2">
              <div className="counter">{counters.dishes.toLocaleString()}</div>
              <p className="text-muted-foreground">Dishes Washed</p>
            </div>
          </div>
        </div>
      </section>

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
              <Card key={index} className="p-6 service-card">
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