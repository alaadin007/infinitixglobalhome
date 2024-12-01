"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useRouter } from "next/navigation";
import { ArrowLeft, Check } from "lucide-react";

const services = [
  {
    title: "Website Development",
    price: "Starting at $2,999",
    features: [
      "Custom Design",
      "Responsive Layout",
      "SEO Optimization",
      "Content Management System",
      "Analytics Integration"
    ]
  },
  {
    title: "Branding & Design",
    price: "Starting at $1,499",
    features: [
      "Logo Design",
      "Brand Guidelines",
      "Business Cards",
      "Social Media Assets",
      "Marketing Materials"
    ]
  },
  {
    title: "Video Production",
    price: "Starting at $999",
    features: [
      "Social Media Videos",
      "Product Showcases",
      "Motion Graphics",
      "Video Editing",
      "Content Strategy"
    ]
  },
  {
    title: "AI Integration",
    price: "Starting at $3,999",
    features: [
      "Custom Search Solutions",
      "AI Chatbots",
      "Data Analysis",
      "Process Automation",
      "API Integration"
    ]
  }
];

export default function ServicesPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-4 mb-8">
          <Button variant="ghost" onClick={() => router.back()}>
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back
          </Button>
          <h1 className="text-3xl font-bold">Our Services</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="p-6 flex flex-col">
              <h2 className="text-xl font-semibold mb-2">{service.title}</h2>
              <p className="text-lg font-bold text-primary mb-4">{service.price}</p>
              <ul className="space-y-2 flex-grow mb-6">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <Check className="h-4 w-4 text-green-500 mr-2" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button 
                className="w-full"
                onClick={() => router.push('/login')}
              >
                Order Now
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}