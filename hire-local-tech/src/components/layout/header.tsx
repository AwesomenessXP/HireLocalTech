"use server";

import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { signOut } from "next-auth/react"
import AuthButton from "../auth/auth-button";

export default async function Header() {
  const session = await getServerSession(authOptions)

  return (
    <header className="w-full border-b bg-[#eff8f8]">
      <div className="flex items-center justify-between h-14 px-4">
        <Link href="/" className="font-outfit text-base flex items-center gap-2">
          <Image
            src="/hire-local-tech-logo.jpg"
            alt="HireLocalTech Logo"
            width={32}
            height={32}
            className="rounded-sm"
          />
          HireLocalTech
        </Link>

        <AuthButton session={!!session} />
      </div>
    </header>
  )
}