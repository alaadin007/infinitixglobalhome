"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, MessageSquare, Phone } from "lucide-react";
import { motion } from "framer-motion";

export default function ContactCTA() {
  const openWhatsApp = () => {
    window.open('https://wa.me/447466219342', '_blank');
  };

  return (
    <section id="contact" className="relative py-24 overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500" />
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557683316-973673baf926')] opacity-10 bg-cover bg-center" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <h2 className="text-4xl font-bold text-white">Ready to Transform Your Business?</h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Let's discuss how we can help you achieve your digital goals
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              onClick={openWhatsApp}
              className="bg-white text-primary hover:bg-white/90 transition-all duration-300 group"
            >
              <Phone className="mr-2 h-5 w-5 transition-transform group-hover:rotate-12" />
              WhatsApp Us
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="text-white border-white/20 bg-white/5 backdrop-blur-lg hover:bg-white/10 transition-all duration-300"
            >
              <MessageSquare className="mr-2 h-5 w-5" />
              Send Message
            </Button>
          </div>

          <p className="text-white/80 text-sm">
            Available Monday to Friday, 9am - 6pm GMT
          </p>
        </motion.div>
      </div>
    </section>
  );
}