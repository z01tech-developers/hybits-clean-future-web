import React from "react";
import hybitsLogo from "@/assets/LOGO.png";

const quickLinks = [
  { name: "About Hybits", url: "/", icon: "🏢" },
  { name: "How It Works", url: "/how-it-works", icon: "⚙️" },
  { name: "Services", url: "/services", icon: "🛠️" },
  { name: "Impact", url: "/impact", icon: "🌱" },
  { name: "Contact", url: "/contact", icon: "✉️" },
];

const ecoTips = [
  {
    icon: <span className="w-7 h-7 text-primary">💧</span>,
    title: "Save Water",
    text: "Turn off the tap while scrubbing dishes to save up to 50% water.",
  },
  {
    icon: <span className="w-7 h-7 text-primary">♻️</span>,
    title: "Go Reusable",
    text: "Choose reusable dishware over disposables for every meal.",
  },
  {
    icon: <span className="w-7 h-7 text-primary">🌿</span>,
    title: "Compost Food Waste",
    text: "Compost leftovers to reduce landfill waste and enrich soil.",
  },
];

const socialLinks = [
  { name: "Instagram", icon: <span className="w-5 h-5">📸</span>, url: "#" },
  { name: "LinkedIn", icon: <span className="w-5 h-5">🔗</span>, url: "#" },
  { name: "WhatsApp", icon: <span className="w-5 h-5">💬</span>, url: "#" },
];

const Footer: React.FC = () => {
  return (
    <footer className="bg-secondary text-background pt-14 pb-6 border-t border-primary mt-12">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Logo & About */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3 mb-2">
            <img src={hybitsLogo} alt="Hybits Sterilised Dish Logo" className="h-12 w-auto" />
          </div>
          <p className="text-sm text-background/80 mb-2">Empowering a zero-waste future, one dish at a time.</p>
          <ul className="text-background/80 text-sm space-y-2">
            <li className="flex items-center gap-2"><svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path d="M17.657 16.657L13.414 12.414a2 2 0 0 0-2.828 0l-4.243 4.243a8 8 0 1 1 11.314 0z" /><circle cx="12" cy="12" r="3" /></svg> 22/121 Apple Street, New York, NY 10012, USA</li>
            <li className="flex items-center gap-2"><svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path d="M22 16.92V19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-2.08" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /><path d="M8 3.13a4 4 0 0 0 0 7.75" /><line x1="12" y1="17" x2="12" y2="17" /></svg> Phone: +123-456-7890</li>
            <li className="flex items-center gap-2"><svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path d="M4 4h16v16H4z" /><polyline points="22,6 12,13 2,6" /></svg> support@hybits.com</li>
          </ul>
        </div>
        {/* Quick Links */}
        <div>
          <h3 className="font-bold text-lg mb-4 text-background">Quick Links</h3>
          <ul className="space-y-2 text-background/80 text-sm">
            {quickLinks.map(link => (
              <li key={link.name}>
                <a href={link.url} className="hover:text-primary transition-colors flex items-center gap-2">
                  <span className="text-primary">{link.icon}</span> {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        {/* Eco Tips (replaces Upcoming Events) */}
        <div>
          <h3 className="font-bold text-lg mb-4 text-background">Eco Tips</h3>
          <ul className="space-y-6">
            {ecoTips.map((tip, idx) => (
              <li key={idx} className="flex gap-3 items-start border-b border-border pb-4 last:border-none last:pb-0">
                <div className="flex-shrink-0">{tip.icon}</div>
                <div>
                  <div className="font-semibold text-background text-sm mb-1">{tip.title}</div>
                  <div className="text-background/80 text-xs max-w-[180px]">{tip.text}</div>
                </div>
              </li>
            ))}
          </ul>
        </div>
        {/* Contact Us (replaces Newsletter) */}
        <div>
          <h3 className="font-bold text-lg mb-4 text-background">Contact Us</h3>
          <ul className="space-y-3 text-background/80 text-sm">
            <li className="flex items-center gap-2">
              <span className="w-5 h-5 text-primary">📞</span>
              <span>+91 9945624643</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="w-5 h-5 text-primary">✉️</span>
              <span>info@hybits.in</span>
            </li>
          </ul>
          <div className="flex gap-4 mt-6">
            {socialLinks.map((social, idx) => (
              <a
                key={social.name}
                href={social.url}
                className="text-background/70 hover:text-primary transition-colors p-2 rounded-full border border-transparent hover:border-primary"
                aria-label={social.name}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 mt-10 pt-6 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-background/60">
        <span>&copy; {new Date().getFullYear()} Hybits. All rights reserved.</span>
        <span>Made with <span className="text-primary">&#10084;</span> for a cleaner planet.</span>
      </div>
    </footer>
  );
};

export default Footer; 