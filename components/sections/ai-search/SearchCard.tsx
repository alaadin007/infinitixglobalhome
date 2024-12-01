"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { SearchInput } from ".";
import { searchVariants } from "./searchData";

interface SearchCardProps {
  title: string;
  placeholder: string;
  icon: React.ReactNode;
}

export default function SearchCard({
  title,
  placeholder,
  icon,
}: SearchCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <Card className="relative p-6 h-full overflow-hidden backdrop-blur-sm bg-white/80 dark:bg-black/80 hover:shadow-xl transition-all duration-500">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5 dark:from-primary/10 dark:to-primary/10" />
        
        <div className="relative">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 rounded-lg bg-primary/10 backdrop-blur-sm">
              {icon}
            </div>
            <h3 className="text-xl font-semibold">{title}</h3>
          </div>
          
          <div className="space-y-6 mb-6">
            {searchVariants.map((variant, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <p className="text-sm text-muted-foreground mb-2">{variant.title}</p>
                <SearchInput 
                  placeholder={placeholder} 
                  variant={variant.name as "modern" | "minimal" | "rounded"}
                />
              </motion.div>
            ))}
          </div>

          <Button 
            variant="outline" 
            className="w-full bg-white/50 dark:bg-black/50 backdrop-blur-sm hover:bg-white/80 dark:hover:bg-black/80 transition-all duration-300"
          >
            Try Demo
          </Button>
        </div>
      </Card>
    </motion.div>
  );
}