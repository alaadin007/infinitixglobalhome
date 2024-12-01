"use client";

import { motion } from "framer-motion";
import { SearchCard } from "./ai-search";
import { searchSolutions } from "./ai-search/searchData";

export default function AIShowcase() {
  return (
    <section id="ai-solutions" className="relative py-24 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-50/50 to-white dark:from-purple-950/50 dark:to-background" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(120,119,198,0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(120,119,198,0.1),transparent_50%)]" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/50">
            Upgrade Your Site Search To AI-Powered With Your Custom Knowledge
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Enhance your business efficiency and customer satisfaction with intelligent search capabilities 
            that understand user intent and deliver measurable results.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {searchSolutions.map((solution, index) => (
            <SearchCard
              key={index}
              title={solution.title}
              icon={<solution.icon className="h-6 w-6 text-primary" />}
              placeholder={solution.placeholder}
            />
          ))}
        </div>
      </div>
    </section>
  );
}