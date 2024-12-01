"use client";

import { motion } from 'framer-motion';
import { MessageSquare, Search } from 'lucide-react';

interface ChatMessageProps {
  role: 'user' | 'assistant';
  content: string;
}

export default function ChatMessage({ role, content }: ChatMessageProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className={`flex items-start gap-3 ${
        role === 'assistant' ? 'flex-row' : 'flex-row-reverse'
      }`}
    >
      <div className={`p-2 rounded-full ${
        role === 'assistant' ? 'bg-primary/10' : 'bg-muted'
      }`}>
        {role === 'assistant' ? (
          <MessageSquare className="h-4 w-4" />
        ) : (
          <Search className="h-4 w-4" />
        )}
      </div>
      <div className={`flex-1 rounded-lg p-4 ${
        role === 'assistant' ? 'bg-muted' : 'bg-primary/10'
      }`}>
        <p className="text-sm whitespace-pre-wrap">{content}</p>
      </div>
    </motion.div>
  );
}