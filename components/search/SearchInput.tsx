"use client";

import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

interface SearchInputProps {
  value: string;
  onChange: (value: string) => void;
  onSubmit: (e: React.KeyboardEvent) => void;
  placeholder?: string;
  className?: string;
}

export default function SearchInput({
  value,
  onChange,
  onSubmit,
  placeholder = "Search anything... (Press ⌘K to close)",
  className
}: SearchInputProps) {
  return (
    <div className="relative">
      <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
      <Input
        className={cn(
          "w-full border-0 focus:ring-0 focus:outline-none pl-12 pr-4 py-6 text-lg",
          className
        )}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={onSubmit}
      />
    </div>
  );
}