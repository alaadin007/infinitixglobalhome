"use client";

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { useToast } from '@/components/ui/use-toast';
import { ArrowLeft, ShoppingCart, Clock, MessageSquare, LogOut, Check } from 'lucide-react';

const websitePackages = [
  {
    id: 1,
    name: "1 Page Website with Blog",
    price: "£500",
    features: [
      "Custom Design",
      "Mobile Responsive",
      "Blog Integration",
      "Contact Form",
      "Basic SEO Setup"
    ]
  },
  {
    id: 2,
    name: "5 Page Website with Blog",
    price: "£950",
    features: [
      "Custom Design",
      "Mobile Responsive",
      "Blog Integration",
      "Contact Form",
      "Advanced SEO Setup",
      "Social Media Integration",
      "Google Analytics",
      "Content Management System"
    ]
  }
];

export default function UserDashboard() {
  const router = useRouter();
  const { toast } = useToast();

  const handleLogout = async () => {
    try {
      await fetch('/api/auth/logout', { method: 'POST' });
      toast({
        title: 'Logged out',
        description: 'You have been successfully logged out.',
      });
      router.push('/');
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to logout. Please try again.',
        variant: 'destructive',
      });
    }
  };

  const handlePurchase = (packageId: number) => {
    toast({
      title: 'Order Initiated',
      description: 'Your order has been initiated. Our team will contact you shortly.',
    });
  };

  const services = [
    { id: 1, name: 'Website Development', status: 'In Progress', date: '2024-03-15' },
    { id: 2, name: 'Logo Design', status: 'Completed', date: '2024-03-10' },
    { id: 3, name: 'SEO Optimization', status: 'Pending', date: '2024-03-20' },
  ];

  return (
    <div className="min-h-screen bg-background pt-24 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <Button variant="ghost" onClick={() => router.push('/dashboard')}>
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Dashboard
            </Button>
            <h1 className="text-3xl font-bold">User Dashboard</h1>
          </div>
          <Button 
            variant="destructive" 
            onClick={handleLogout}
            className="flex items-center gap-2"
          >
            <LogOut className="h-4 w-4" />
            Logout
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Website Packages */}
          <div className="lg:col-span-3">
            <h2 className="text-2xl font-semibold mb-6">Website Packages</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {websitePackages.map((pkg) => (
                <Card key={pkg.id} className="p-6">
                  <div className="flex flex-col h-full">
                    <h3 className="text-xl font-semibold mb-2">{pkg.name}</h3>
                    <p className="text-2xl font-bold text-primary mb-4">{pkg.price}</p>
                    <ul className="space-y-3 mb-6 flex-grow">
                      {pkg.features.map((feature, index) => (
                        <li key={index} className="flex items-center">
                          <Check className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button 
                      className="w-full"
                      onClick={() => handlePurchase(pkg.id)}
                    >
                      <ShoppingCart className="h-4 w-4 mr-2" />
                      Purchase Now
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* My Services */}
          <Card className="p-6 lg:col-span-2">
            <h2 className="text-xl font-semibold mb-4">My Services</h2>
            <div className="space-y-4">
              {services.map((service) => (
                <div key={service.id} className="border rounded-lg p-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-medium">{service.name}</h3>
                      <p className="text-sm text-muted-foreground">Due: {service.date}</p>
                    </div>
                    <span className={`px-2 py-1 rounded text-sm ${
                      service.status === 'Completed' ? 'bg-green-100 text-green-800' :
                      service.status === 'In Progress' ? 'bg-blue-100 text-blue-800' :
                      'bg-yellow-100 text-yellow-800'
                    }`}>
                      {service.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Quick Actions and Recent Activity */}
          <div className="space-y-8 lg:col-span-1">
            <Card className="p-6">
              <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
              <div className="space-y-4">
                <Button className="w-full" onClick={() => router.push('/services')}>
                  <ShoppingCart className="h-4 w-4 mr-2" />
                  View All Services
                </Button>
                <Button className="w-full" variant="outline">
                  <MessageSquare className="h-4 w-4 mr-2" />
                  Contact Support
                </Button>
              </div>
            </Card>

            <Card className="p-6">
              <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
              <div className="space-y-4">
                <div className="flex items-center text-sm">
                  <Clock className="h-4 w-4 mr-2 text-muted-foreground" />
                  <span>Service order placed - Website Development</span>
                </div>
                <div className="flex items-center text-sm">
                  <Clock className="h-4 w-4 mr-2 text-muted-foreground" />
                  <span>Logo Design project completed</span>
                </div>
                <div className="flex items-center text-sm">
                  <Clock className="h-4 w-4 mr-2 text-muted-foreground" />
                  <span>New message from support team</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}