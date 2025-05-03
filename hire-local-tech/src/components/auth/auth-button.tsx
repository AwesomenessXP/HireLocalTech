// /components/AuthButton.tsx
"use client"

import { useSession, signOut } from "next-auth/react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface AuthButtonProps {
    session: boolean
  }

export default function AuthButton({ session }: AuthButtonProps) {
  if (session) {
    return (
        <Button onClick={() => signOut()} variant="outline" size="sm">
        Logout
        </Button>
    )
  }

  return (
    <Link href="/auth/login">
      <Button variant="outline" size="sm" type="button">
        Login
      </Button>
    </Link>
  )
}