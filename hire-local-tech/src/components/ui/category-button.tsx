'use client';

import { useState } from "react";
import { X } from "lucide-react"; // shadcn icon

interface CategoryButtonProps {
  text: string;
  color: string;
  onClick?: () => void;
}

export function CategoryButton({ text, color, onClick }: CategoryButtonProps) {
  const [selected, setSelected] = useState(false);

  const handleToggle = () => {
    setSelected((prev) => !prev);
    if (selected && onClick) {
      onClick(); // Optional: only fire when unselecting
    }
  };

  return (
    <span
      className="inline-flex items-center gap-1 px-3 py-[6px] rounded-full text-sm leading-tight whitespace-nowrap cursor-pointer"
      style={{ backgroundColor: color }}
      onClick={handleToggle}
    >
      <span>{text}</span>
      {selected && (
        <X className="w-3.5 h-3.5 ml-1 text-gray-600 hover:text-gray-800" />
      )}
    </span>
  );
}