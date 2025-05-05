"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";

export function ApplyNowButton() {
  const [isApplying, setIsApplying] = useState(false);

  const handleApply = async () => {
    setIsApplying(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsApplying(false);
    // TODO: Add actual application logic
  };

  return (
    <Button
      onClick={handleApply}
      disabled={isApplying}
      className="bg-gradient-to-r from-[#1E3A8A] to-[#2563EB] text-white hover:bg-[#4338CA] px-6 py-2 rounded-full font-medium"
    >
      {isApplying ? (
        <span className="flex items-center">
          <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          Applying...
        </span>
      ) : (
        <>
          Apply now <span className="ml-1">↗</span>
        </>
      )}
    </Button>
  );
} 