import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

// InteractiveProcessSection: Interactive 'How Our Service Works' section
import React, { useState, useRef } from "react";

const processSteps = [
  { icon: "📦", label: "Order", desc: "Place your order online or via phone." },
  { icon: "🧼", label: "Sterilize", desc: "Dishes are professionally cleaned and sterilized." },
  { icon: "🚚", label: "Deliver", desc: "We deliver to your venue, on time, every time." },
  { icon: "♻️", label: "Collect & Reuse", desc: "We collect, wash, and reuse for the next event." },
];

function InteractiveProcessSection() {
  const [activeStep, setActiveStep] = useState(0);
  const stepRefs = useRef([]);

  // Keyboard navigation
  const handleKeyDown = (e) => {
    if (e.key === "ArrowRight" && activeStep < processSteps.length - 1) {
      setActiveStep((prev) => prev + 1);
      stepRefs.current[activeStep + 1]?.focus();
    } else if (e.key === "ArrowLeft" && activeStep > 0) {
      setActiveStep((prev) => prev - 1);
      stepRefs.current[activeStep - 1]?.focus();
    }
  };

  return (
    <div className="my-20">
      <h2 className="text-2xl font-bold text-center mb-8 animate-fade-in-up">How Our Service Works</h2>
      {/* Progress Bar */}
      <div className="relative flex justify-center mb-8">
        <div className="absolute top-1/2 left-0 right-0 h-2 bg-primary/10 rounded-full w-full" style={{ transform: 'translateY(-50%)' }}></div>
        <div
          className="absolute top-1/2 left-0 h-2 bg-primary rounded-full transition-all duration-500"
          style={{ width: `${((activeStep + 1) / processSteps.length) * 100}%`, transform: 'translateY(-50%)' }}
        ></div>
        <div className="flex w-full justify-between relative z-10">
          {processSteps.map((step, idx) => (
            <button
              key={step.label}
              ref={el => stepRefs.current[idx] = el}
              className={`w-12 h-12 rounded-full flex items-center justify-center border-2 transition-all duration-300 text-2xl focus:outline-none focus:ring-2 focus:ring-primary/60
                ${activeStep === idx ? 'bg-primary text-primary-foreground border-primary scale-110 shadow-lg' : 'bg-background border-primary/40 text-primary'}
              `}
              tabIndex={0}
              aria-label={step.label}
              aria-pressed={activeStep === idx}
              onClick={() => setActiveStep(idx)}
              onMouseEnter={() => setActiveStep(idx)}
              onFocus={() => setActiveStep(idx)}
              onKeyDown={handleKeyDown}
            >
              {step.icon}
            </button>
          ))}
        </div>
      </div>
      {/* Step Cards */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-8">
        {processSteps.map((step, idx) => (
          <div
            key={step.label}
            className={`group relative flex-1 max-w-xs min-w-[200px] cursor-pointer transition-all duration-300
              ${activeStep === idx ? 'z-10 scale-105 shadow-2xl border-primary border-2 bg-card' : 'opacity-70 hover:scale-105 hover:z-10'}
            `}
            onClick={() => setActiveStep(idx)}
            onMouseEnter={() => setActiveStep(idx)}
            tabIndex={0}
            aria-label={step.label}
            aria-pressed={activeStep === idx}
            onKeyDown={handleKeyDown}
          >
            <div className={`flex flex-col items-center p-6 rounded-2xl border transition-all duration-300
              ${activeStep === idx ? 'border-primary bg-primary/10' : 'border-primary/30 bg-background'}
            `}>
              <div className={`text-4xl mb-4 transition-transform duration-300 ${activeStep === idx ? 'animate-spin-slow' : 'group-hover:scale-110'}`}>{step.icon}</div>
              <h3 className={`text-lg font-semibold mb-2 ${activeStep === idx ? 'text-primary' : ''}`}>{step.label}</h3>
              <p className={`text-muted-foreground text-sm leading-relaxed transition-all duration-300 ${activeStep === idx ? 'font-semibold' : ''}`}>{step.desc}</p>
            </div>
            {/* Active indicator */}
            {activeStep === idx && <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-primary rounded-full animate-fade-in-up"></div>}
          </div>
        ))}
      </div>
    </div>
  );
}

const Services = () => {
  const navigate = useNavigate();
  const services = [
    {
      icon: "🎉",
      title: "Events & Weddings",
      description: "Premium, sustainable presentation for special occasions",
      features: [
        "Elegant dishware sets",
        "24-48 hour turnaround",
        "Custom packaging options",
        "Dedicated event coordinator",
        "Emergency backup inventory"
      ],
      volume: "100-10,000+ guests",
      turnaround: "24-48 hours",
      customization: "High"
    },
    {
      icon: "🍛",
      title: "Food Courts & Caterers",
      description: "Efficient bulk dishware for daily operations",
      features: [
        "Durable commercial-grade dishes",
        "Same-day pickup available",
        "Volume-based pricing",
        "Regular supply schedules",
        "Inventory management support"
      ],
      volume: "500-50,000+ dishes/day",
      turnaround: "4-12 hours",
      customization: "Medium"
    },
    {
      icon: "🏢",
      title: "Offices & Institutions",
      description: "Reusable dining solutions for campuses, offices, and hospitals",
      features: [
        "Hygienic healthcare-grade cleaning",
        "Flexible subscription plans",
        "Contactless delivery",
        "Sustainable reporting",
        "Staff training included"
      ],
      volume: "50-5,000+ employees",
      turnaround: "12-24 hours",
      customization: "Standard"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header */}
        <div className="text-center mb-20">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Who We <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Serve</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Tailored solutions for every dining need, from intimate gatherings to large-scale operations
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <Card key={index} className="service-card bg-card border border-primary shadow-md animate-fade-in-up" style={{ animationDelay: `${index * 120}ms` }}>
              <div className="text-4xl mb-6">{service.icon}</div>
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-muted-foreground mb-6">{service.description}</p>
              <div className="space-y-4 mb-6">
                <h4 className="font-semibold text-sm uppercase tracking-wide">What's Included:</h4>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="pt-6 border-t border-border">
                <div className="grid grid-cols-3 gap-4 text-center text-xs">
                  <div>
                    <p className="font-semibold text-primary mb-1">Volume</p>
                    <p className="text-muted-foreground">{service.volume}</p>
                  </div>
                  <div>
                    <p className="font-semibold text-primary mb-1">Turnaround</p>
                    <p className="text-muted-foreground">{service.turnaround}</p>
                  </div>
                  <div>
                    <p className="font-semibold text-primary mb-1">Customization</p>
                    <p className="text-muted-foreground">{service.customization}</p>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Hybits Process Section */}
        <InteractiveProcessSection />

        {/* Comparison Section */}
        <div className="bg-secondary/20 rounded-3xl p-8 lg:p-12 mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Choose Hybits Over Traditional Options?
          </h2>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-4 px-4 font-semibold">Feature</th>
                  <th className="text-center py-4 px-4 font-semibold text-primary">Hybits</th>
                  <th className="text-center py-4 px-4 font-semibold text-muted-foreground">Disposable Plates</th>
                  <th className="text-center py-4 px-4 font-semibold text-muted-foreground">Own Washing</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                <tr className="border-b border-border/50">
                  <td className="py-3 px-4">Environmental Impact</td>
                  <td className="py-3 px-4 text-center text-primary font-semibold">90% Less Waste</td>
                  <td className="py-3 px-4 text-center text-destructive">High Waste</td>
                  <td className="py-3 px-4 text-center text-muted-foreground">Moderate</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-3 px-4">Hygiene Standards</td>
                  <td className="py-3 px-4 text-center text-primary font-semibold">UV Sterilized</td>
                  <td className="py-3 px-4 text-center text-muted-foreground">Basic</td>
                  <td className="py-3 px-4 text-center text-muted-foreground">Variable</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-3 px-4">Setup Time</td>
                  <td className="py-3 px-4 text-center text-primary font-semibold">Zero</td>
                  <td className="py-3 px-4 text-center text-muted-foreground">Minimal</td>
                  <td className="py-3 px-4 text-center text-destructive">High</td>
                </tr>
                <tr>
                  <td className="py-3 px-4">Cost Efficiency</td>
                  <td className="py-3 px-4 text-center text-primary font-semibold">Optimized</td>
                  <td className="py-3 px-4 text-center text-muted-foreground">Moderate</td>
                  <td className="py-3 px-4 text-center text-destructive">High Labor</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Dining Experience?</h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Get a customized quote based on your specific needs and volume requirements
          </p>
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-lg px-8 py-4 rounded-xl transition-smooth transform hover:scale-105 shadow-lg"
            onClick={() => navigate("/contact")}>
            Contact Us
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Services;