import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const Services = () => {
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
            Who We <span className="eco-gradient bg-clip-text text-transparent">Serve</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Tailored solutions for every dining need, from intimate gatherings to large-scale operations
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <Card key={index} className="service-card">
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

        {/* Comparison Section */}
        <div className="bg-accent/5 rounded-3xl p-8 lg:p-12 mb-16">
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
          <Button className="btn-eco-primary text-lg px-8 py-4">
            Talk to a Specialist
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Services;