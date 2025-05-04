"use client";

import * as React from "react";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import { Check, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const DropdownMenu = DropdownMenuPrimitive.Root;
const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger;
const DropdownMenuContent = DropdownMenuPrimitive.Content;
const DropdownMenuItem = DropdownMenuPrimitive.Item;

interface FilterDropdownProps {
  label: string;
  options: string[];
  value?: string;
  onChange?: (value: string) => void;
}

export function FilterDropdown({ label, options, value, onChange }: FilterDropdownProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="flex items-center gap-2 px-3 sm:px-4 py-2 border rounded-lg bg-white text-sm min-w-[120px] sm:min-w-0 hover:bg-gray-50">
          {value || label}
          <ChevronDown className="h-4 w-4 opacity-50" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="start"
        className="w-[200px] rounded-md border bg-white p-1 shadow-md"
      >
        {options.map((option) => (
          <DropdownMenuItem
            key={option}
            className={cn(
              "flex cursor-pointer items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors",
              "hover:bg-gray-100",
              value === option && "bg-gray-100"
            )}
            onClick={() => {
              onChange?.(option)
              console.log(option)
            } 
          }
          >
            {option}
            {value === option && <Check className="ml-auto h-4 w-4" />}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
} 