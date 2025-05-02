"use client";

import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="w-full border-b">
      <div className="flex items-center justify-between h-14">
        {/* Left: Logo */}
        <Link href="/" className="flex items-center pl-6">
          <span className="font-bold text-base">HireLocalTech</span>
        </Link>

        {/* Right: Login Button */}
        <Link href="/auth/login" className="flex items-center pr-6">
          <Button variant="outline" size="sm">
            Login
          </Button>
        </Link>
      </div>
    </header>
  )
}