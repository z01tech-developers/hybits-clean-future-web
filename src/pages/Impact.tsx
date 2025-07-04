import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Impact = () => {
  const [counters, setCounters] = useState({
    plastic: 0,
    water: 0,
    events: 0,
    dishes: 0,
  });

  // Animate counters on load
  useEffect(() => {
    const animateCounter = (target: number, key: keyof typeof counters, duration = 2000) => {
      let current = 0;
      const increment = target / (duration / 50);
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
      animateCounter(15000, 'plastic');
      animateCounter(50000, 'water');
      animateCounter(850, 'events');
      animateCounter(400000, 'dishes');
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const caseStudies = [
    {
      title: "Tech Conference 2024",
      type: "Corporate Event",
      stats: "2,500 attendees, 3 days",
      impact: "Saved 750kg plastic waste compared to disposables",
      quote: "Seamless execution and exceptional hygiene standards made our event truly sustainable.",
      client: "TechCorp India"
    },
    {
      title: "Green Campus Initiative",
      type: "Educational Institution",
      stats: "5,000 students daily",
      impact: "Reduced cafeteria waste by 85% in first semester",
      quote: "Students love the quality and sustainability. It's changed our entire campus culture.",
      client: "Delhi University"
    },
    {
      title: "Royal Wedding Celebration",
      type: "Wedding Event",
      stats: "1,200 guests, 5 events",
      impact: "Zero plastic waste while maintaining premium presentation",
      quote: "Our guests couldn't stop praising the elegant dishware and eco-friendly approach.",
      client: "Sharma Family"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary via-secondary/10 to-background/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header */}
        <div className="text-center mb-20">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Making a <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Real Difference</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Every dish washed, every event served, every choice made contributes to a more sustainable future
          </p>
        </div>

        {/* Impact Counters */}
        <div className="grid md:grid-cols-4 gap-8 mb-20">
          <Card className="p-8 text-center bg-card border border-primary shadow-md">
            <div className="text-3xl mb-4">♻️</div>
            <div className="counter text-2xl mb-2">{counters.plastic.toLocaleString()}+</div>
            <div className="text-sm font-medium text-primary mb-1">Kilograms</div>
            <p className="text-muted-foreground text-sm">Plastic Waste Reduced</p>
          </Card>
          
          <Card className="p-8 text-center bg-card border border-primary shadow-md">
            <div className="text-3xl mb-4">💧</div>
            <div className="counter text-2xl mb-2">{counters.water.toLocaleString()}+</div>
            <div className="text-sm font-medium text-secondary mb-1">Liters</div>
            <p className="text-muted-foreground text-sm">Water Saved Through Efficiency</p>
          </Card>

          <Card className="p-8 text-center bg-card border border-primary shadow-md">
            <div className="text-3xl mb-4">🎉</div>
            <div className="counter text-2xl mb-2">{counters.events.toLocaleString()}+</div>
            <div className="text-sm font-medium text-primary mb-1">Events</div>
            <p className="text-muted-foreground text-sm">Successfully Served</p>
          </Card>

          <Card className="p-8 text-center bg-card border border-primary shadow-md">
            <div className="text-3xl mb-4">🍽️</div>
            <div className="counter text-2xl mb-2">{counters.dishes.toLocaleString()}+</div>
            <div className="text-sm font-medium text-secondary mb-1">Dishes</div>
            <p className="text-muted-foreground text-sm">Processed & Sterilized</p>
          </Card>
        </div>

        {/* Environmental Impact */}
        <div className="bg-card rounded-3xl p-8 lg:p-12 shadow-lg mb-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">
                Our Environmental Commitment
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Every Hybits service directly contributes to reducing India's plastic waste crisis. 
                Our centralized washing system uses 60% less water than traditional methods while 
                achieving hospital-grade cleanliness standards.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                    <span className="text-primary font-bold">85%</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">Waste Reduction</h4>
                    <p className="text-muted-foreground text-sm">Compared to single-use alternatives</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center">
                    <span className="text-secondary font-bold">60%</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">Water Efficiency</h4>
                    <p className="text-muted-foreground text-sm">Through optimized washing cycles</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                    <span className="text-primary font-bold">100%</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">Eco-Friendly Detergents</h4>
                    <p className="text-muted-foreground text-sm">Biodegradable cleaning solutions</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="w-full h-80 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl flex items-center justify-center">
                <div className="text-8xl animate-float">🌱</div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/30 rounded-full animate-pulse-glow"></div>
            </div>
          </div>
        </div>

        {/* Case Studies */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Success Stories</h2>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <Card key={index} className="p-6 bg-card border border-primary shadow-md">
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-bold">{study.title}</h3>
                    <p className="text-sm text-primary font-medium">{study.type}</p>
                    <p className="text-sm text-muted-foreground">{study.stats}</p>
                  </div>
                  
                  <div className="p-4 bg-secondary/20 rounded-lg">
                    <p className="text-sm font-medium text-accent-foreground">{study.impact}</p>
                  </div>
                  
                  <blockquote className="text-sm text-muted-foreground italic">
                    "{study.quote}"
                  </blockquote>
                  
                  <p className="text-xs font-medium text-right">— {study.client}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Future Goals */}
        <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-3xl p-8 lg:p-12 text-center">
          <h2 className="text-3xl font-bold mb-6">Our 2025 Goals</h2>
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">50,000 kg</div>
              <p className="text-muted-foreground">Plastic waste prevented</p>
            </div>
            <div>
              <div className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">1,000+</div>
              <p className="text-muted-foreground">Events served sustainably</p>
            </div>
            <div>
              <div className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">10 Cities</div>
              <p className="text-muted-foreground">Expanded operations</p>
            </div>
          </div>
          
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-lg px-8 py-4 rounded-xl transition-smooth transform hover:scale-105 shadow-lg">
            Join the Sustainable Dining Movement
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Impact;