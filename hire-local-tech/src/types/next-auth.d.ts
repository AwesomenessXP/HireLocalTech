import NextAuth from "next-auth";

// extends next-auth objects
declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      email: string;
      name: string;
      role: "SEEKER" | "POSTER";
    };
  }

  interface User {
    role: "SEEKER" | "POSTER";
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id: string;
    role: "SEEKER" | "POSTER";
  }
} 