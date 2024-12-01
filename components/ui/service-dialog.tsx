"use client";

import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Check, MessageSquare } from "lucide-react";
import { motion } from "framer-motion";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

interface ServiceDialogProps {
  isOpen: boolean;
  onClose: () => void;
  service: any;
}

export function ServiceDialog({ isOpen, onClose, service }: ServiceDialogProps) {
  if (!service) return null;

  const openWhatsApp = () => {
    window.open('https://wa.me/447466219342', '_blank');
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl p-0 overflow-hidden bg-white/95 backdrop-blur-xl dark:bg-black/95">
        <DialogTitle className="sr-only">
          {service.title} Details
        </DialogTitle>
        
        <div className="p-6 space-y-8">
          <h2 className="text-2xl font-bold">{service.title}</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.packages.map((pkg: any, index: number) => (
              <motion.div
                key={pkg.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="relative group"
              >
                {/* Gradient background */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5 rounded-lg" />
                
                <div className="relative p-6 rounded-lg border border-white/10 backdrop-blur-sm">
                  <h3 className="text-xl font-semibold mb-2">{pkg.name}</h3>
                  <p className="text-2xl font-bold text-primary mb-4">{pkg.price}</p>
                  <p className="text-sm text-muted-foreground mb-6">{pkg.description}</p>
                  
                  <ul className="space-y-3 mb-6">
                    {pkg.features.map((feature: string) => (
                      <li key={feature} className="flex items-start gap-2 text-sm">
                        <Check className="h-5 w-5 text-green-500 shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button 
                    onClick={openWhatsApp}
                    className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white"
                  >
                    <MessageSquare className="mr-2 h-4 w-4" />
                    Discuss on WhatsApp
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}