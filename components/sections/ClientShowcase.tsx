"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import Image from 'next/image';
import { ExternalLink } from 'lucide-react';
import Link from 'next/link';

const clients = [
  {
    name: "Harley Street Institute",
    image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d",
    link: "https://harleystreetinstitute.com",
    description: "Professional medical training institute website"
  },
  {
    name: "Cosmedocs",
    image: "/cosmedocs-hero.jpg",
    link: "https://cosmedocs.com",
    description: "Modern aesthetic clinic promoting natural results"
  },
  {
    name: "PrivaDr",
    image: "https://images.unsplash.com/photo-1666214280557-f1b5022eb634",
    link: "https://privadr.com",
    description: "Private healthcare consultation platform"
  },
  {
    name: "Medacle",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d",
    link: "#",
    description: "Medical education and training platform"
  }
];

export default function ClientShowcase() {
  const [selectedClient, setSelectedClient] = useState<typeof clients[0] | null>(null);
  const [imageError, setImageError] = useState<{[key: string]: boolean}>({});

  const handleImageError = (clientName: string) => {
    setImageError(prev => ({
      ...prev,
      [clientName]: true
    }));
  };

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/50 to-background" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Our Clients</h2>
          <p className="text-xl text-muted-foreground">
            Trusted by leading healthcare and education providers
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {clients.map((client, index) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div 
                className="relative group cursor-pointer rounded-lg overflow-hidden"
                onClick={() => setSelectedClient(client)}
              >
                <div className="relative aspect-video">
                  {!imageError[client.name] ? (
                    <Image
                      src={client.image}
                      alt={client.name}
                      fill
                      className="object-cover transition-transform group-hover:scale-105"
                      onError={() => handleImageError(client.name)}
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-muted">
                      <span className="text-muted-foreground">Image not available</span>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="absolute bottom-4 left-4 text-white">
                      <h3 className="font-semibold">{client.name}</h3>
                      <p className="text-sm text-white/80">{client.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <Dialog open={!!selectedClient} onOpenChange={() => setSelectedClient(null)}>
        <DialogContent className="max-w-3xl p-0 overflow-hidden">
          <DialogTitle className="sr-only">
            {selectedClient?.name}
          </DialogTitle>
          {selectedClient && (
            <div className="relative">
              <div className="relative aspect-video">
                {!imageError[selectedClient.name] ? (
                  <Image
                    src={selectedClient.image}
                    alt={selectedClient.name}
                    fill
                    className="object-cover"
                    onError={() => handleImageError(selectedClient.name)}
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-muted">
                    <span className="text-muted-foreground">Image not available</span>
                  </div>
                )}
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2">{selectedClient.name}</h3>
                <p className="text-muted-foreground mb-4">{selectedClient.description}</p>
                <Link
                  href={selectedClient.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-primary hover:text-primary/80"
                >
                  Visit Website
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}