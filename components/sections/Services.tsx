"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card } from "@/components/ui/card";
import { ServiceDialog } from "@/components/ui/service-dialog";
import { 
  Globe, 
  Palette, 
  Video, 
  Search, 
  Laptop,
  MessageSquare
} from 'lucide-react';

const services = [
  {
    icon: Globe,
    title: "Modern Websites",
    description: "Responsive, fast-loading websites built with the latest technologies",
    price: "from £500",
    packages: [
      {
        name: "Single Page Website",
        price: "£500",
        description: "Perfect for small businesses and personal brands",
        features: [
          "One-page design with multiple sections",
          "Integrated blog functionality",
          "Contact form",
          "Mobile responsive design",
          "Basic SEO setup",
          "Analytics integration"
        ]
      },
      {
        name: "E-commerce Starter",
        price: "£1000",
        description: "Single page website with e-commerce functionality",
        features: [
          "All features from Single Page",
          "E-commerce integration",
          "Product catalog",
          "Secure payment processing",
          "Order management",
          "Inventory tracking"
        ]
      },
      {
        name: "Business Pro",
        price: "£1500",
        description: "Complete business website with e-commerce",
        features: [
          "5 custom pages",
          "E-commerce functionality",
          "Blog integration",
          "Advanced SEO setup",
          "Social media integration",
          "Email marketing setup"
        ]
      },
      {
        name: "AI Search Add-on",
        price: "+£500",
        description: "Add intelligent search to any package",
        features: [
          "Custom knowledge base integration",
          "Natural language processing",
          "Smart autocomplete",
          "Search analytics",
          "Content recommendations",
          "Regular updates"
        ]
      }
    ]
  },
  {
    icon: Palette,
    title: "Branding & Design",
    description: "Logo design, brand identity, and visual storytelling",
    price: "from £250",
    packages: [
      {
        name: "Logo Design",
        price: "£250",
        description: "Professional logo design for your brand",
        features: [
          "3 unique concepts",
          "Unlimited revisions",
          "Final files in all formats",
          "Brand guidelines",
          "Social media kit",
          "Copyright transfer"
        ]
      },
      {
        name: "Brand Identity",
        price: "£500",
        description: "Complete brand identity package",
        features: [
          "Logo design",
          "Color palette",
          "Typography selection",
          "Brand guidelines",
          "Social media templates",
          "Business card design"
        ]
      },
      {
        name: "Full Branding",
        price: "£1000",
        description: "Comprehensive branding solution",
        features: [
          "All Brand Identity features",
          "Marketing materials",
          "Email templates",
          "Presentation templates",
          "Brand strategy",
          "Voice & tone guidelines"
        ]
      }
    ]
  },
  {
    icon: Video,
    title: "Video Editing",
    description: "Professional video editing for social media",
    price: "from £500/month",
    packages: [
      {
        name: "Starter Package",
        price: "£500/month",
        description: "5 videos per month",
        features: [
          "30-60 second reels/shorts",
          "Custom transitions",
          "Background music",
          "Basic color grading",
          "Platform optimization",
          "2 revisions per video"
        ]
      },
      {
        name: "Professional Package",
        price: "£900/month",
        description: "10 videos per month",
        features: [
          "All Starter features",
          "Advanced effects",
          "Animated graphics",
          "Subtitles/captions",
          "3 revisions per video",
          "Rush delivery option"
        ]
      },
      {
        name: "Premium Package",
        price: "£1300/month",
        description: "15 videos per month",
        features: [
          "All Professional features",
          "Custom animations",
          "Voice-over integration",
          "Multi-platform formats",
          "Unlimited revisions",
          "Priority support"
        ]
      },
      {
        name: "Pay As You Go",
        price: "£50/video",
        description: "Single video production",
        features: [
          "30-60 second video",
          "Basic editing",
          "Music selection",
          "One revision",
          "Quick turnaround",
          "Standard delivery"
        ]
      }
    ]
  },
  {
    icon: Search,
    title: "AI Integration",
    description: "Smart search solutions and AI-powered features",
    price: "from £1000",
    packages: [
      {
        name: "Smart Search",
        price: "£1000",
        description: "AI-powered search for your website",
        features: [
          "Custom knowledge base",
          "Natural language search",
          "Auto-suggestions",
          "Analytics dashboard",
          "Content indexing",
          "Monthly updates"
        ]
      },
      {
        name: "AI Assistant",
        price: "£2000",
        description: "Custom AI chatbot for your business",
        features: [
          "Trained on your data",
          "24/7 customer support",
          "Multi-language support",
          "Analytics & insights",
          "Admin dashboard",
          "Regular updates"
        ]
      }
    ]
  },
  {
    icon: Laptop,
    title: "Digital Marketing",
    description: "Full-service digital marketing and SEO optimization",
    price: "Custom Packages",
    packages: [
      {
        name: "SEO Package",
        price: "£500/month",
        description: "Search engine optimization",
        features: [
          "Keyword research",
          "On-page optimization",
          "Content strategy",
          "Technical SEO",
          "Monthly reporting",
          "Link building"
        ]
      },
      {
        name: "Social Media",
        price: "£750/month",
        description: "Social media management",
        features: [
          "Content calendar",
          "Daily posting",
          "Community management",
          "Paid advertising",
          "Analytics reporting",
          "Competitor analysis"
        ]
      },
      {
        name: "Full Service",
        price: "£1500/month",
        description: "Comprehensive digital marketing",
        features: [
          "SEO optimization",
          "Social media management",
          "Content marketing",
          "Email campaigns",
          "PPC advertising",
          "Monthly strategy"
        ]
      }
    ]
  }
];

export default function Services() {
  const [selectedService, setSelectedService] = useState(null);

  const openWhatsApp = () => {
    window.open('https://wa.me/447466219342', '_blank');
  };

  return (
    <section id="services" className="py-24 bg-background/50 backdrop-blur-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-xl text-muted-foreground flex items-center justify-center gap-2">
            Click each for more info or
            <button 
              onClick={openWhatsApp}
              className="inline-flex items-center text-primary hover:text-primary/80 transition-colors"
            >
              <MessageSquare className="h-5 w-5 mr-1" />
              WhatsApp us
            </button>
            for quick response
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            Time is not on our side in business
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const ServiceIcon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card 
                  className="p-6 hover:shadow-lg transition-all duration-300 cursor-pointer group backdrop-blur-sm bg-white/80 dark:bg-black/80 border border-white/10"
                  onClick={() => setSelectedService(service)}
                >
                  <ServiceIcon className="h-12 w-12 mb-4 text-primary transition-transform group-hover:scale-110" />
                  <h2 className="text-xl font-semibold mb-2">{service.title}</h2>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <p className="text-lg font-semibold text-primary">{service.price}</p>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>

      <ServiceDialog 
        isOpen={!!selectedService}
        onClose={() => setSelectedService(null)}
        service={selectedService}
      />
    </section>
  );
}