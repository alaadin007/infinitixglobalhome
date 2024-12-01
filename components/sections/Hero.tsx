"use client";

import { useState } from 'react';
import { motion } from "framer-motion";
import { Search } from "lucide-react";
import { SearchOverlay } from "@/components/search";

export default function Hero() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557683316-973673baf926')] opacity-10 bg-cover bg-center" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-12"
        >
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold text-white">
              Elevate Your Business
              <span className="block mt-2">
                with{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-500">
                  AI Innovation
                </span>
              </span>
            </h1>
          </div>

          {/* Search Bar */}
          <div className="max-w-3xl mx-auto">
            <motion.div 
              className="relative group cursor-pointer"
              onClick={() => setIsSearchOpen(true)}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
            >
              {/* Multiple glowing layers */}
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 rounded-full blur-2xl opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse" />
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 rounded-full blur-xl opacity-50 group-hover:opacity-75 transition duration-1000 group-hover:duration-200" />
              
              <div className="relative flex items-center">
                <input
                  type="text"
                  placeholder="Ask anything about growing your business online..."
                  className="w-full pl-12 pr-32 py-8 bg-white/10 backdrop-blur-xl border-2 border-white/20 text-white placeholder:text-white/70 text-lg rounded-full focus:outline-none focus:ring-0 focus:border-white/30 cursor-pointer"
                  readOnly
                />
                <Search className="absolute left-4 h-6 w-6 text-white/70" />
                <div className="absolute right-4 px-6 py-2 bg-white text-primary rounded-full font-medium">
                  Search
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <SearchOverlay 
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
      />
    </section>
  );
}