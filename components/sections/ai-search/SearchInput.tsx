"use client";

import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface SearchInputProps {
  placeholder: string;
  variant?: "default" | "modern" | "minimal" | "rounded";
  onSearch?: (value: string) => void;
}

const variants = {
  default: "pl-10 border-gray-200",
  modern: "pl-10 bg-white/10 backdrop-blur-xl border-transparent shadow-lg hover:shadow-xl transition-all",
  minimal: "pl-10 border-0 border-b-2 border-gray-200 rounded-none focus:ring-0 focus:border-primary bg-transparent",
  rounded: "pl-10 rounded-full border-2 hover:border-primary transition-all bg-white/5 backdrop-blur-sm"
};

const glowColors = {
  legal: "from-blue-500/20 via-indigo-500/20 to-purple-500/20",
  medical: "from-green-500/20 via-emerald-500/20 to-teal-500/20",
  ecommerce: "from-orange-500/20 via-red-500/20 to-pink-500/20"
};

export default function SearchInput({ placeholder, variant = "default", onSearch }: SearchInputProps) {
  const getGlowColor = () => {
    if (placeholder.includes("legal")) return glowColors.legal;
    if (placeholder.includes("symptoms")) return glowColors.medical;
    return glowColors.ecommerce;
  };

  return (
    <motion.div 
      className="relative group"
      whileHover={{ scale: 1.01 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <Input
        placeholder={placeholder}
        className={cn(
          "transition-all duration-300",
          variants[variant],
          variant !== "minimal" && "hover:bg-white/20",
          "focus:ring-2 focus:ring-primary/20",
          variant === "modern" && "text-white placeholder:text-white/70"
        )}
        onChange={(e) => onSearch?.(e.target.value)}
      />
      <Search 
        className={cn(
          "absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4",
          variant === "modern" ? "text-white/70" : "text-muted-foreground",
          "transition-all duration-300 group-hover:scale-110 group-hover:text-primary"
        )} 
      />
      
      {/* Glow Effects */}
      {variant === "modern" && (
        <>
          <div className={cn(
            "absolute inset-0 -z-10 rounded-lg opacity-75 blur-xl transition-all duration-300",
            "bg-gradient-to-r",
            getGlowColor(),
            "group-hover:opacity-100 group-hover:blur-2xl"
          )} />
          <div className={cn(
            "absolute inset-0 -z-10 rounded-lg opacity-50 blur-lg transition-all duration-300",
            "bg-gradient-to-r",
            getGlowColor(),
            "group-hover:opacity-75 group-hover:blur-xl"
          )} />
        </>
      )}

      {/* Hover ring effect for rounded variant */}
      {variant === "rounded" && (
        <div className={cn(
          "absolute inset-0 -z-10 rounded-full opacity-0 transition-all duration-300",
          "bg-gradient-to-r",
          getGlowColor(),
          "group-hover:opacity-50 blur-lg"
        )} />
      )}

      {/* Bottom border glow for minimal variant */}
      {variant === "minimal" && (
        <div className={cn(
          "absolute bottom-0 left-0 right-0 h-px",
          "bg-gradient-to-r",
          getGlowColor(),
          "opacity-50 group-hover:opacity-100 group-hover:h-0.5 transition-all duration-300"
        )} />
      )}
    </motion.div>
  );
}