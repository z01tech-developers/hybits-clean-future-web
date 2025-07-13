'use client';
import React, { useState } from "react";

import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    useCase: "",
    dishCount: "",
    message: ""
  });

  const [result, setResult] = useState("");

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResult("Sending...");

    const form = new FormData();
    form.append("access_key", "44e02069-0335-499c-bcf8-e7c53db8c976");
    form.append("name", formData.name);
    form.append("email", formData.email);
    form.append("organization", formData.organization);
    form.append("useCase", formData.useCase);
    form.append("dishCount", formData.dishCount);
    form.append("message", formData.message);

    // Debug logs
    for (const [key, value] of form.entries()) {
      console.log(`${key}: ${value}`);
    }

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: form
      });

      const data = await response.json();

      if (data.success) {
        setResult("✅ Form Submitted Successfully!");
        setFormData({
          name: "",
          email: "",
          organization: "",
          useCase: "",
          dishCount: "",
          message: ""
        });
      } else {
        console.error("Web3Forms Error:", data);
        setResult("❌ Submission failed. Please try again.");
      }
    } catch (error) {
      console.error("Network Error:", error);
      setResult("❌ Something went wrong. Please check your connection.");
    }
  };

  const contactInfo = [
    {
      icon: "📞",
      title: "Phone",
      value: "+91-9876543210",
      description: "Mon-Sat, 9 AM - 8 PM"
    },
    {
      icon: "📧",
      title: "Email",
      value: "info@hybits.in",
      description: "24/7 email support"
    },
    {
      icon: "🌐",
      title: "Website",
      value: "www.hybits.in",
      description: "Online resources"
    }
  ];

  const socialLinks = [
    { name: "Instagram", icon: "📷", url: "#" },
    { name: "LinkedIn", icon: "💼", url: "#" },
    { name: "WhatsApp", icon: "💬", url: "#" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Let's Talk <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Sustainability</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to make your next event or operation completely sustainable? 
            Get in touch for a customized solution.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <Card className="p-8 shadow-lg bg-card border border-primary">
            <h2 className="text-2xl font-bold mb-6">Get Your Custom Quote</h2>

            <form onSubmit={onSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Name *</Label>
                  <Input
                    id="name"
                    placeholder="Your full name"
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="organization">Organization *</Label>
                  <Input
                    id="organization"
                    placeholder="Company or organization"
                    value={formData.organization}
                    onChange={(e) => handleInputChange("organization", e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email *</Label>
                <Input
                  type="email"
                  id="email"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="useCase">Use Case Type *</Label>
                <Select value={formData.useCase} onValueChange={(value) => handleInputChange("useCase", value)} required>
                  <SelectTrigger>
                    <SelectValue placeholder="Select your use case" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="event">Event & Wedding</SelectItem>
                    <SelectItem value="foodcourt">Food Court & Catering</SelectItem>
                    <SelectItem value="office">Office & Institution</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="dishCount">Estimated Dish Count</Label>
                <Input
                  id="dishCount"
                  placeholder="e.g., 500 dishes, 200 guests, daily operations"
                  value={formData.dishCount}
                  onChange={(e) => handleInputChange("dishCount", e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message *</Label>
                <Textarea
                  id="message"
                  placeholder="Tell us about your specific requirements, event details, or any questions you have..."
                  className="min-h-[120px]"
                  value={formData.message}
                  onChange={(e) => handleInputChange("message", e.target.value)}
                  required
                />
              </div>

              <Button type="submit" className="w-full">
                Send Message
              </Button>
              {result && <p className="text-sm text-center text-muted-foreground">{result}</p>}
            </form>
          </Card>

          {/* Contact Info Section */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-2xl font-bold">Get in Touch</h2>
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="text-2xl">{info.icon}</div>
                  <div>
                    <h3 className="font-semibold">{info.title}</h3>
                    <p className="text-primary font-medium">{info.value}</p>
                    <p className="text-muted-foreground text-sm">{info.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <Card className="p-6 bg-card border border-primary">
              <h3 className="text-lg font-bold mb-4">Current Service Areas</h3>
              <div className="space-y-2 text-sm">
                <p className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                  Delhi NCR (Gurgaon, Noida, Faridabad)
                </p>
                <p className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                  Mumbai & Surrounding Areas
                </p>
                <p className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                  Bangalore Urban District
                </p>
                <p className="text-muted-foreground text-xs mt-4">
                  Don't see your area? Contact us for expansion plans.
                </p>
              </div>
            </Card>

            <Card className="p-6 bg-card border border-primary">
              <h3 className="text-lg font-bold mb-4">Business Hours</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span className="font-medium">8:00 AM - 8:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span className="font-medium">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span className="text-muted-foreground">Closed</span>
                </div>
                <p className="text-muted-foreground text-xs mt-4">
                  Emergency pickups available 24/7 for events
                </p>
              </div>
            </Card>

            <div>
              <h3 className="text-lg font-bold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    className="w-12 h-12 bg-accent rounded-full flex items-center justify-center text-xl hover:bg-primary hover:text-white transition"
                    title={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-20 text-center">
          <h2 className="text-2xl font-bold mb-4">Have Questions?</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Check out our frequently asked questions or schedule a demo call to see our process firsthand.
          </p>
          <Button variant="outline" className="transition hover:bg-muted">
            View FAQ
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
