"use client";

import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Loader2, ArrowRight } from 'lucide-react';
import { useChat } from 'ai/react';
import SearchInput from './SearchInput';
import ChatMessage from './ChatMessage';
import EmptyState from './EmptyState';

interface SearchOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SearchOverlay({ isOpen, onClose }: SearchOverlayProps) {
  const [query, setQuery] = useState('');
  const { messages, handleSubmit, isLoading } = useChat({
    api: '/api/chat',
    initialMessages: [],
  });

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        onClose();
      }
    };

    document.addEventListener('keydown', down);
    return () => document.removeEventListener('keydown', down);
  }, [onClose]);

  const handleSearch = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && query.trim()) {
      handleSubmit(e as any, { data: { content: query } });
    }
  };

  const resetSearch = () => {
    setQuery('');
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl p-0 overflow-hidden">
        <div className="border-b">
          <SearchInput
            value={query}
            onChange={setQuery}
            onSubmit={handleSearch}
          />
        </div>

        <div className="h-[60vh] overflow-y-auto p-4 space-y-4">
          <AnimatePresence>
            {messages.map((message) => (
              <ChatMessage
                key={message.id}
                role={message.role}
                content={message.content}
              />
            ))}

            {isLoading && (
              <div className="flex items-center justify-center p-4">
                <Loader2 className="h-6 w-6 animate-spin text-primary" />
              </div>
            )}
          </AnimatePresence>

          {messages.length === 0 && !isLoading && <EmptyState />}
        </div>

        {messages.length > 0 && (
          <div className="border-t p-4">
            <Button 
              className="w-full"
              onClick={resetSearch}
            >
              Start New Search
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}