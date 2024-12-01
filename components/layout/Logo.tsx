"use client";

import { motion } from 'framer-motion';
import { InfinityIcon } from 'lucide-react';
import Link from 'next/link';

export default function Logo() {
  return (
    <Link href="/">
      <motion.div
        className="flex items-center space-x-3 group cursor-pointer"
        whileHover={{ scale: 1.05 }}
      >
        <div className="relative">
          {/* Outer glow ring */}
          <motion.div
            className="absolute inset-0 -m-4 rounded-full bg-gradient-to-r from-purple-500/30 via-pink-500/30 to-orange-500/30 blur-2xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          
          {/* Middle glow ring */}
          <motion.div
            className="absolute inset-0 -m-2 rounded-full bg-gradient-to-r from-purple-500/40 via-pink-500/40 to-orange-500/40 blur-xl"
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.4, 0.6, 0.4]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.2
            }}
          />
          
          {/* Inner glow ring */}
          <motion.div
            className="absolute inset-0 -m-1 rounded-full bg-gradient-to-r from-purple-500/50 via-pink-500/50 to-orange-500/50 blur-lg"
            animate={{
              scale: [1, 1.05, 1],
              opacity: [0.5, 0.7, 0.5]
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.4
            }}
          />

          {/* Rotating infinity icon */}
          <motion.div
            className="relative"
            animate={{
              rotate: [0, 360]
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            <InfinityIcon className="h-12 w-12 text-white relative z-10" />
          </motion.div>
        </div>

        {/* Text with gradient and glow effect */}
        <motion.span 
          className="font-bold text-2xl bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80"
          animate={{
            textShadow: [
              "0 0 8px rgba(255,255,255,0.3)",
              "0 0 16px rgba(255,255,255,0.5)",
              "0 0 8px rgba(255,255,255,0.3)"
            ]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          Infinitix Global
        </motion.span>
      </motion.div>
    </Link>
  );
}