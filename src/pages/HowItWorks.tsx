import { Button } from "@/components/ui/button";

const HowItWorks = () => {
  const steps = [
    {
      icon: "📋",
      title: "Book Your Package",
      description: "Choose your dishware package based on event size and requirements"
    },
    {
      icon: "🧼",
      title: "Receive Sanitized Dishes",
      description: "Get UV-sterilized, premium quality dishware delivered to your location"
    },
    {
      icon: "✨",
      title: "Serve with Style",
      description: "Impress your guests with elegant, eco-friendly dining presentation"
    },
    {
      icon: "🚚",
      title: "Return – We Pick Up the Rest",
      description: "Relax while we collect, wash, and sanitize everything for you"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/10 to-accent/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header */}
        <div className="text-center mb-20">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            How <span className="eco-gradient bg-clip-text text-transparent">Hybits</span> Works
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A simple, sustainable solution that transforms your dining experience from start to finish
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connection Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-primary to-secondary transform translate-x-4 z-0"></div>
              )}
              
              {/* Step Card */}
              <div className="step-card relative z-10 text-center">
                <div className="text-4xl mb-4">{step.icon}</div>
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary-foreground font-bold text-sm">{index + 1}</span>
                </div>
                <h3 className="text-lg font-semibold mb-3">{step.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Detailed Process */}
        <div className="bg-card rounded-3xl p-8 lg:p-12 eco-shadow mb-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">
                The Science Behind Our Sterilization
              </h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-primary rounded-full flex-shrink-0 mt-1"></div>
                  <div>
                    <h4 className="font-semibold">UV-C Sterilization</h4>
                    <p className="text-muted-foreground text-sm">Advanced UV-C technology eliminates 99.9% of bacteria and viruses</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-secondary rounded-full flex-shrink-0 mt-1"></div>
                  <div>
                    <h4 className="font-semibold">Multi-Stage Washing</h4>
                    <p className="text-muted-foreground text-sm">Hot water, eco-friendly detergents, and thorough rinsing cycles</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-primary rounded-full flex-shrink-0 mt-1"></div>
                  <div>
                    <h4 className="font-semibold">Quality Assurance</h4>
                    <p className="text-muted-foreground text-sm">Every piece inspected before packaging and delivery</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="w-full h-64 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl flex items-center justify-center">
                <div className="text-6xl animate-pulse-glow">🧬</div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join hundreds of satisfied customers who have made the switch to sustainable dining
          </p>
          <Button className="btn-eco-primary text-lg px-8 py-4">
            Let's Get Started
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;